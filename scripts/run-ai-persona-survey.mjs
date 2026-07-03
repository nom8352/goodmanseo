import fs from 'node:fs/promises';
import path from 'node:path';

const HF_ROWS_URL = 'https://datasets-server.huggingface.co/rows';
const DATASET = 'nvidia/Nemotron-Personas-USA';
const SPLIT = 'train';
const DEFAULT_MODEL = process.env.OPENAI_MODEL || 'gpt-4.1-mini';
const SAMPLE_SIZE = Number.parseInt(process.env.SAMPLE_SIZE || '100', 10);
const OUT_DIR = process.env.OUT_DIR || 'docs';

const goalPattern =
  /launch|own|open|establish|start .*business|found|founding|startup|freelance|consultancy|consulting firm|advisory|practice|studio|shop|restaurant|diner|catering|salon|boutique|agency|event-planning|event planning|independent .*business|side business|small business/i;

const offer = `GoodmanSEO provides an AI business consulting report for local and online businesses.

The report reviews the business website, Google visibility, local competition, target customers, positioning, message fit, and action priorities.

It is delivered as a PDF report.

The goal is to help a business owner understand the current state of the business and the next growth direction.`;

function todaySlug() {
  return new Date().toISOString().slice(0, 10);
}

function truncate(value, max) {
  const text = String(value || '').replace(/\s+/g, ' ').trim();
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}

async function fetchRows(offset) {
  const url = new URL(HF_ROWS_URL);
  url.searchParams.set('dataset', DATASET);
  url.searchParams.set('config', 'default');
  url.searchParams.set('split', SPLIT);
  url.searchParams.set('offset', String(offset));
  url.searchParams.set('length', '100');

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Hugging Face rows fetch failed: ${response.status} ${await response.text()}`);
  }
  return response.json();
}

async function collectPersonas(targetCount) {
  const personas = [];

  for (let offset = 0; offset < 1_000_000 && personas.length < targetCount; offset += 100) {
    const data = await fetchRows(offset);

    for (const item of data.rows || []) {
      const row = item.row;
      const goals = String(row.career_goals_and_ambitions || '');
      if (!goalPattern.test(goals)) continue;

      personas.push({
        sample_no: personas.length + 1,
        row_idx: item.row_idx,
        uuid: row.uuid,
        age: row.age,
        sex: row.sex,
        city: row.city,
        state: row.state,
        country: row.country,
        occupation: row.occupation,
        professional_persona: truncate(row.professional_persona, 900),
        career_goals_and_ambitions: truncate(row.career_goals_and_ambitions, 900),
        skills_and_expertise: truncate(row.skills_and_expertise, 600),
      });

      if (personas.length >= targetCount) break;
    }
  }

  return personas;
}

function buildPrompt(persona) {
  return `You are answering as the persona below.

Persona:
${JSON.stringify(persona, null, 2)}

Offer:
${offer}

Answer as this persona, not as a market researcher. Be concise and concrete.

Questions:
1. What do you think this service does?
2. Do you feel this report would be useful for your current or planned business? Rate from 1 to 10.
3. Which analysis area is most interesting to you?
4. What would make you hesitate to buy?
5. Does USD 199-299 feel reasonable?
6. What would make the landing page more trustworthy?
7. Which message would persuade you most?
8. Final purchase intent score from 1 to 10.

Return only valid JSON with this schema:
{
  "understanding": "string",
  "usefulness_score": number,
  "most_interesting_area": "string",
  "hesitation": "string",
  "price_reaction": "string",
  "trust_needed": "string",
  "best_message": "string",
  "purchase_intent": number,
  "fit_segment": "string",
  "short_reason": "string"
}`;
}

async function callOpenAI(persona) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not set. Set it before running this script.');
  }

  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: DEFAULT_MODEL,
      input: [
        {
          role: 'system',
          content:
            'You simulate a survey response from the provided synthetic persona. Return strict JSON only. Do not mention that you are an AI.',
        },
        {
          role: 'user',
          content: buildPrompt(persona),
        },
      ],
      temperature: 0.4,
      max_output_tokens: 700,
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI API failed: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  const text =
    data.output_text ||
    data.output?.flatMap((item) => item.content || []).map((part) => part.text || '').join('') ||
    '';

  try {
    return JSON.parse(text);
  } catch {
    return {
      parse_error: true,
      raw_text: text,
    };
  }
}

function summarize(results) {
  const scores = results
    .map((item) => Number(item.response?.purchase_intent))
    .filter((score) => Number.isFinite(score));

  const average =
    scores.length > 0 ? Math.round((scores.reduce((sum, score) => sum + score, 0) / scores.length) * 100) / 100 : 0;

  const distribution = {
    high_7_to_10: scores.filter((score) => score >= 7).length,
    mid_5_to_6_9: scores.filter((score) => score >= 5 && score < 7).length,
    low_under_5: scores.filter((score) => score < 5).length,
  };

  const segmentCounts = new Map();
  const interestCounts = new Map();
  const hesitationCounts = new Map();

  for (const item of results) {
    const response = item.response || {};
    for (const [map, value] of [
      [segmentCounts, response.fit_segment],
      [interestCounts, response.most_interesting_area],
      [hesitationCounts, response.hesitation],
    ]) {
      const key = String(value || 'Unknown').trim();
      map.set(key, (map.get(key) || 0) + 1);
    }
  }

  const top = (map, limit = 12) =>
    [...map.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([name, count]) => ({ name, count }));

  return {
    sample_size: results.length,
    valid_scores: scores.length,
    average_purchase_intent: average,
    ...distribution,
    top_segments: top(segmentCounts),
    top_interests: top(interestCounts),
    top_hesitations: top(hesitationCounts),
  };
}

function toMarkdown(summary, results) {
  const lines = [];
  lines.push(`# AI Persona Survey Results - ${todaySlug()}`);
  lines.push('');
  lines.push('## Method');
  lines.push('');
  lines.push(`- Dataset: \`${DATASET}\``);
  lines.push('- Dataset source: https://huggingface.co/datasets/nvidia/Nemotron-Personas-USA');
  lines.push('- License: CC BY 4.0');
  lines.push(`- LLM model: \`${DEFAULT_MODEL}\``);
  lines.push(`- Persona sample size: \`${summary.sample_size}\``);
  lines.push('- Method: one LLM API call per persona, using the same 8-question survey prompt.');
  lines.push('');
  lines.push('## Summary');
  lines.push('');
  lines.push(`- Average purchase intent: \`${summary.average_purchase_intent} / 10\``);
  lines.push(`- High intent 7-10: \`${summary.high_7_to_10}\``);
  lines.push(`- Mid intent 5-6.9: \`${summary.mid_5_to_6_9}\``);
  lines.push(`- Low intent under 5: \`${summary.low_under_5}\``);
  lines.push('');
  lines.push('## Top Segments');
  lines.push('');
  for (const item of summary.top_segments) lines.push(`- ${item.name}: ${item.count}`);
  lines.push('');
  lines.push('## Top Interest Areas');
  lines.push('');
  for (const item of summary.top_interests) lines.push(`- ${item.name}: ${item.count}`);
  lines.push('');
  lines.push('## Common Hesitations');
  lines.push('');
  for (const item of summary.top_hesitations) lines.push(`- ${item.name}: ${item.count}`);
  lines.push('');
  lines.push('## Individual Responses');
  lines.push('');
  lines.push('| # | Row | Age | State | Occupation | Intent | Segment | Interest | Hesitation |');
  lines.push('|---:|---:|---:|---|---|---:|---|---|---|');
  for (const item of results) {
    const r = item.response || {};
    lines.push(
      `| ${item.persona.sample_no} | ${item.persona.row_idx} | ${item.persona.age} | ${item.persona.state} | ${item.persona.occupation} | ${r.purchase_intent ?? ''} | ${String(r.fit_segment || '').replaceAll('|', '/')} | ${String(r.most_interesting_area || '').replaceAll('|', '/')} | ${String(r.hesitation || '').replaceAll('|', '/')} |`,
    );
  }
  lines.push('');
  return `${lines.join('\n')}\n`;
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const personas = await collectPersonas(SAMPLE_SIZE);
  if (personas.length < SAMPLE_SIZE) {
    throw new Error(`Only collected ${personas.length} personas, expected ${SAMPLE_SIZE}.`);
  }

  const results = [];
  for (const persona of personas) {
    process.stderr.write(`Calling ${persona.sample_no}/${personas.length} row=${persona.row_idx}\n`);
    const response = await callOpenAI(persona);
    results.push({ persona, response });
    await new Promise((resolve) => setTimeout(resolve, 150));
  }

  const summary = summarize(results);
  const slug = todaySlug();
  const jsonPath = path.join(OUT_DIR, `ai-persona-survey-results-${slug}.json`);
  const mdPath = path.join(OUT_DIR, `ai-persona-survey-results-${slug}.md`);

  await fs.writeFile(jsonPath, JSON.stringify({ summary, results }, null, 2), 'utf8');
  await fs.writeFile(mdPath, toMarkdown(summary, results), 'utf8');

  console.log(JSON.stringify({ summary, jsonPath, mdPath }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
