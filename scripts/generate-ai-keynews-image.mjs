import { existsSync } from 'node:fs';
import { mkdir, rm, stat, writeFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { blogPosts } from '../src/data/blogPosts.js';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, '..');

const escapeHtml = (value = '') =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

const requestedId = process.argv.find((argument) => argument.startsWith('--id='))?.split('=')[1];
const requestedFormat = process.argv.find((argument) => argument.startsWith('--format='))?.split('=')[1] || 'story';
const post = requestedId
  ? blogPosts.find((candidate) => candidate.id === requestedId)
  : blogPosts.find((candidate) => candidate.kind === 'ai-key-news');

if (!post || post.kind !== 'ai-key-news') {
  throw new Error(`AI 키뉴스 글을 찾지 못했습니다${requestedId ? `: ${requestedId}` : ''}.`);
}

const formatConfig = {
  story: {
    width: 1080,
    height: 1920,
    imagePath: post.image,
  },
  instagram: {
    width: 1080,
    height: 1350,
    imagePath: post.instagramImage || post.image.replace(/\.png$/, '-instagram.png'),
  },
}[requestedFormat];

if (!formatConfig) {
  throw new Error(`지원하지 않는 이미지 형식입니다: ${requestedFormat}. story 또는 instagram을 사용하세요.`);
}

if (!formatConfig.imagePath?.endsWith('.png')) {
  throw new Error(`공유 이미지는 PNG 경로여야 합니다: ${formatConfig.imagePath}`);
}

const newsSections = post.content.filter((block) => block.type === 'newsSection');
const itemCount = newsSections.reduce((total, section) => total + section.items.length, 0);

if (itemCount < 3 || itemCount > 6) {
  throw new Error(`한 장에 들어갈 뉴스는 3~6건이어야 합니다. 현재 ${itemCount}건입니다.`);
}

const [year, month, day] = post.date.split('.').map(Number);
const dateValue = new Date(`${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T12:00:00+09:00`);
const weekday = new Intl.DateTimeFormat('ko-KR', {
  weekday: 'short',
  timeZone: 'Asia/Seoul',
}).format(dateValue);
const displayDate = `${year}년 ${month}월 ${day}일 (${weekday})`;

const sectionMarkup = newsSections
  .map(
    (section) => `
      <section class="news-section">
        <h2><span aria-hidden="true"></span>${escapeHtml(section.title)}</h2>
        <div class="news-items">
          ${section.items
            .map(
              (item) => `
                <article class="news-item">
                  <span class="bullet" aria-hidden="true"></span>
                  <div>
                    <h3>${escapeHtml(item.headline)}</h3>
                    <p>${escapeHtml(item.summary)}</p>
                    <small>${escapeHtml(item.source)}</small>
                  </div>
                </article>`,
            )
            .join('')}
        </div>
      </section>`,
  )
  .join('');

const html = `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=${formatConfig.width}, initial-scale=1" />
    <title>${escapeHtml(post.title)}</title>
    <style>
      * { box-sizing: border-box; }
      html, body { width: ${formatConfig.width}px; height: ${formatConfig.height}px; margin: 0; overflow: hidden; }
      body {
        --section-title-size: 38px;
        --headline-size: 48px;
        --summary-size: 34px;
        --source-size: 20px;
        --item-padding-y: 10px;
        color: #15191c;
        background: #f4f5f3;
        font-family: Pretendard, "Malgun Gothic", "Apple SD Gothic Neo", sans-serif;
        -webkit-font-smoothing: antialiased;
      }
      .sheet {
        position: relative;
        display: flex;
        width: ${formatConfig.width}px;
        height: ${formatConfig.height}px;
        flex-direction: column;
        padding: 96px 72px 82px;
        border: 1px solid #aeb5b7;
        background: #fafbf9;
      }
      .masthead {
        display: flex;
        min-height: 132px;
        align-items: flex-end;
        justify-content: space-between;
        gap: 24px;
        padding: 0 4px 20px;
        border-bottom: 3px solid #0b6678;
      }
      .masthead h1 {
        margin: 0;
        color: #17191b;
        font-family: Georgia, "Times New Roman", serif;
        font-size: 82px;
        font-weight: 800;
        line-height: 0.92;
        letter-spacing: -0.04em;
        white-space: nowrap;
      }
      .date {
        flex: 0 0 auto;
        padding-bottom: 4px;
        color: #0b6678;
        font-size: 25px;
        font-weight: 800;
        white-space: nowrap;
      }
      .subbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 15px 4px 17px;
        border-bottom: 1px solid #aeb5b7;
        color: #0b6678;
        font-size: 24px;
        font-weight: 800;
      }
      .subbar span:last-child {
        color: #505a5f;
        font-size: 21px;
        font-weight: 700;
      }
      .brief {
        display: grid;
        flex: 1;
        align-content: start;
        gap: 20px;
        padding-top: 24px;
      }
      .news-section {
        display: grid;
        gap: 0;
      }
      .news-section h2 {
        display: flex;
        align-items: center;
        gap: 11px;
        margin: 0;
        padding-bottom: 10px;
        border-bottom: 2px solid #0b6678;
        color: #0b6678;
        font-size: var(--section-title-size);
        font-weight: 900;
        line-height: 1.15;
        letter-spacing: -0.035em;
      }
      .news-section h2 span {
        width: 11px;
        height: 34px;
        background: #0b6678;
      }
      .news-items {
        display: grid;
      }
      .news-item {
        display: grid;
        grid-template-columns: 17px minmax(0, 1fr);
        gap: 13px;
        padding: var(--item-padding-y) 3px;
        border-bottom: 1px dashed #c4c8c9;
      }
      .news-item:last-child { border-bottom: 0; }
      .bullet {
        width: 10px;
        height: 10px;
        margin-top: 21px;
        border: 3px solid #0b6678;
      }
      .news-item h3 {
        margin: 0;
        color: #15191c;
        font-size: var(--headline-size);
        font-weight: 900;
        line-height: 1.22;
        letter-spacing: -0.035em;
        text-wrap: balance;
        word-break: keep-all;
      }
      .news-item p {
        margin: 5px 0 0;
        color: #394248;
        font-size: var(--summary-size);
        font-weight: 600;
        line-height: 1.32;
        letter-spacing: -0.022em;
        text-wrap: pretty;
        word-break: keep-all;
      }
      .news-item small {
        display: block;
        margin-top: 5px;
        color: #0b6678;
        font-size: var(--source-size);
        font-weight: 800;
      }
      footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        padding: 12px 4px 0;
        border-top: 1px solid #aeb5b7;
        color: #586166;
        font-size: 19px;
        font-weight: 700;
      }
      footer strong {
        color: #0b6678;
        letter-spacing: 0.04em;
      }
      body.density-relaxed {
        --section-title-size: 42px;
        --headline-size: 52px;
        --summary-size: 36px;
        --source-size: 22px;
        --item-padding-y: 22px;
      }
      body.density-compact {
        --section-title-size: 35px;
        --headline-size: 43px;
        --summary-size: 26px;
        --source-size: 16px;
        --item-padding-y: 8px;
      }
      body.format-instagram {
        --section-title-size: 32px;
        --headline-size: 42px;
        --summary-size: 27px;
        --source-size: 16px;
        --item-padding-y: 7px;
      }
      body.format-instagram .sheet {
        padding: 43px 58px 34px;
      }
      body.format-instagram .masthead {
        min-height: 87px;
        padding: 0 3px 13px;
        border-bottom-width: 2px;
      }
      body.format-instagram .masthead h1 {
        font-size: 64px;
      }
      body.format-instagram .date {
        padding-bottom: 2px;
        font-size: 19px;
      }
      body.format-instagram .subbar {
        padding: 9px 3px 10px;
        font-size: 18px;
      }
      body.format-instagram .subbar span:last-child {
        font-size: 16px;
      }
      body.format-instagram .brief {
        gap: 10px;
        padding-top: 13px;
      }
      body.format-instagram .news-section h2 {
        gap: 8px;
        padding-bottom: 6px;
        border-bottom-width: 2px;
      }
      body.format-instagram .news-section h2 span {
        width: 8px;
        height: 25px;
      }
      body.format-instagram .news-item {
        grid-template-columns: 12px minmax(0, 1fr);
        gap: 8px;
        padding-right: 2px;
        padding-left: 2px;
      }
      body.format-instagram .bullet {
        width: 8px;
        height: 8px;
        margin-top: 14px;
        border-width: 2px;
      }
      body.format-instagram .news-item h3 {
        line-height: 1.15;
      }
      body.format-instagram .news-item p {
        margin-top: 2px;
        line-height: 1.24;
      }
      body.format-instagram .news-item small {
        margin-top: 2px;
      }
      body.format-instagram footer {
        padding-top: 7px;
        font-size: 14px;
      }
    </style>
  </head>
  <body class="${itemCount <= 3 ? 'density-relaxed' : itemCount >= 6 ? 'density-compact' : 'density-standard'} format-${requestedFormat}">
    <main class="sheet">
      <header>
        <div class="masthead">
          <h1>AI NEWS BRIEF</h1>
          <div class="date">${escapeHtml(displayDate)}</div>
        </div>
        <div class="subbar">
          <span>글로벌 AI 핵심 뉴스</span>
          <span>GOODMANSEO.COM</span>
        </div>
      </header>
      <div class="brief">${sectionMarkup}</div>
      <footer>
        <span>원문 링크는 GoodmanSEO 블로그에서 확인할 수 있습니다.</span>
        <strong>GOODMAN SEO</strong>
      </footer>
    </main>
  </body>
</html>`;

const edgeCandidates = [
  process.env.EDGE_PATH,
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
].filter(Boolean);
const edgePath = edgeCandidates.find((candidate) => existsSync(candidate));

if (!edgePath) {
  throw new Error('Microsoft Edge 실행 파일을 찾지 못했습니다. EDGE_PATH를 지정해 주세요.');
}

const tempDir = path.join(os.tmpdir(), `goodmanseo-ai-keynews-${Date.now()}`);
await mkdir(tempDir, { recursive: true });
const htmlPath = path.join(tempDir, `${post.id}.html`);
const userDataDir = path.join(tempDir, 'edge-profile');
const outputPath = path.join(projectRoot, 'public', formatConfig.imagePath.replace(/^\//, ''));

await mkdir(path.dirname(outputPath), { recursive: true });
await mkdir(userDataDir, { recursive: true });
await writeFile(htmlPath, html, 'utf8');

const result = spawnSync(
  edgePath,
  [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    `--window-size=${formatConfig.width},${formatConfig.height}`,
    '--run-all-compositor-stages-before-draw',
    '--virtual-time-budget=2000',
    '--no-first-run',
    `--user-data-dir=${userDataDir}`,
    `--screenshot=${outputPath}`,
    pathToFileURL(htmlPath).href,
  ],
  { encoding: 'utf8' },
);

if (result.status !== 0) {
  throw new Error(`Edge 이미지 생성 실패 (${result.status}): ${result.stderr || result.stdout}`);
}

const imageStats = await stat(outputPath);
if (imageStats.size < 10_000) {
  throw new Error(`생성된 이미지가 비정상적으로 작습니다: ${imageStats.size} bytes`);
}

await rm(tempDir, { recursive: true, force: true });
console.log(
  `Generated ${path.relative(projectRoot, outputPath)} (${formatConfig.width}x${formatConfig.height}, ${imageStats.size} bytes, ${itemCount} items)`,
);
