import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  FileText,
  Target,
  UserRound,
} from 'lucide-react';
import Seo from '../components/Seo';
import { aiReportSamples, getAiReportSampleBySlug } from '../data/aiReportSamples';
import { createWebPageJsonLd, organizationJsonLd } from '../data/siteSeo';

const ink = '#102133';

const metaIcons = [CalendarDays, UserRound, Target];

const DocumentHeading = ({ label, title }) => (
  <div className="mb-5">
    <div className="flex items-center gap-3">
      <p className="shrink-0 text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#4f5a63]">{label || title}</p>
      <span className="h-px flex-1 bg-[#6c7378]" />
    </div>
    {title && title !== label ? (
      <h2 className="mt-3 font-serif text-[clamp(1.12rem,2vw,1.48rem)] font-semibold leading-tight text-[#102133]">
        {title}
      </h2>
    ) : null}
  </div>
);

const ReportSection = ({ number, label, title, children }) => (
  <article className="border-t border-[#d8d3cb] py-7 print:break-inside-avoid">
    <div className="mb-5 flex items-start gap-3">
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-[0.18rem] text-[0.72rem] font-black text-white" style={{ backgroundColor: ink }}>
        {String(number).padStart(2, '0')}
      </span>
      <div className="min-w-0 flex-1">
        <DocumentHeading label={label} title={title} />
      </div>
    </div>
    <div className="pl-0 md:pl-10">{children}</div>
  </article>
);

const BulletList = ({ items, ordered = false, tone = 'light' }) => {
  const ListTag = ordered ? 'ol' : 'ul';
  return (
    <ListTag className={`grid gap-2.5 ${ordered ? 'list-decimal pl-5' : ''}`}>
      {items.map((item) => (
        <li key={item} className={`${ordered ? 'pl-1' : 'flex gap-2.5'} text-sm font-semibold leading-[1.8] ${tone === 'dark' ? 'text-white/85' : 'text-[#102133]'}`}>
          {ordered ? null : <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#102133]" />}
          <span>{item}</span>
        </li>
      ))}
    </ListTag>
  );
};

const MiniPanel = ({ title, children }) => (
  <div className="border-t border-[#e3ddd5] pt-4">
    <h3 className="text-[0.82rem] font-black text-[#102133]">{title}</h3>
    <div className="mt-3">{children}</div>
  </div>
);

const QuoteBox = ({ title, children }) => (
  <div>
    {title ? <h3 className="mb-2 text-[0.82rem] font-black text-[#102133]">{title}</h3> : null}
    <div className="border-y border-[#d8d3cb] py-3">
      <p className="font-serif text-[1rem] font-semibold leading-[1.75] text-[#102133]">{children}</p>
    </div>
  </div>
);

const DataTable = ({ rows, columns = ['항목', '결과'] }) => {
  const minWidth = columns.length >= 4 ? '100%' : columns.length === 3 ? 620 : 520;
  const template = columns.length === 4 ? '0.85fr 1.25fr 0.9fr 1.25fr' : `repeat(${columns.length}, minmax(0, 1fr))`;

  if (columns.length >= 4) {
    return (
      <>
        <div className="grid gap-3 md:hidden">
          {rows.map((row) => (
            <div key={row.join('-')} className="rounded-[0.35rem] border border-[#ded8cf] bg-white p-4">
              <p className="text-sm font-black leading-relaxed text-[#102133]">{row[0]}</p>
              <div className="mt-3 grid gap-2">
                {row.slice(1).map((cell, index) => (
                  <div key={`${cell}-${index}`} className="rounded-[0.25rem] bg-[#f7f2ec] px-3 py-2">
                    <p className="text-[0.66rem] font-black text-[#8b7862]">{columns[index + 1]}</p>
                    <p className="mt-1 text-xs font-bold leading-relaxed text-[#102133]">{cell}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden overflow-x-auto border-y border-[#d8d3cb] md:block">
          <div style={{ minWidth }}>
            <div className="grid border-b border-[#d8d3cb] bg-white text-[0.68rem] font-black text-[#8b7862]" style={{ gridTemplateColumns: template }}>
              {columns.map((label) => (
                <div key={label} className="px-2.5 py-2.5">{label}</div>
              ))}
            </div>
            {rows.map((row) => (
              <div key={row.join('-')} className="grid border-b border-[#e7e0d8] bg-white last:border-b-0" style={{ gridTemplateColumns: template }}>
                {row.map((cell, index) => (
                  <div key={`${cell}-${index}`} className={`px-2 py-2.5 text-[0.7rem] leading-[1.58] ${index === 0 ? 'font-black' : 'font-semibold'} text-[#102133]`}>
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="overflow-x-auto border-y border-[#d8d3cb]">
      <div style={{ minWidth }}>
        <div className="grid border-b border-[#d8d3cb] bg-white text-[0.68rem] font-black uppercase tracking-[0.08em] text-[#8b7862]" style={{ gridTemplateColumns: template }}>
          {columns.map((label) => (
            <div key={label} className="px-3 py-2.5">{label}</div>
          ))}
        </div>
        {rows.map((row) => (
          <div key={row.join('-')} className="grid border-b border-[#e7e0d8] bg-white last:border-b-0" style={{ gridTemplateColumns: template }}>
            {row.map((cell, index) => (
              <div key={`${cell}-${index}`} className={`px-3 py-2.5 text-[0.78rem] leading-relaxed ${index === 0 ? 'font-black' : 'font-semibold'} text-[#102133]`}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const ScoreRows = ({ rows }) => (
  <div className="grid gap-5">
    {rows.map(([label, score, note]) => {
      const value = Number.parseInt(score, 10) || 0;
      return (
        <div key={label} className="grid gap-4 border-b border-[#e7e0d8] py-4 first:pt-0 last:border-b-0 md:grid-cols-12 md:items-center">
          <div className="md:col-span-4">
            <p className="text-sm font-black text-[#102133]">{label}</p>
            <p className="mt-1 text-xs font-semibold text-[#44515d]">{note}</p>
          </div>
          <div className="md:col-span-6">
            <div className="h-3 rounded-full bg-[#ded8cf]">
              <span className="block h-full rounded-full" style={{ width: `${value}%`, backgroundColor: ink }} />
            </div>
          </div>
          <p className="text-right text-sm font-black text-[#102133] md:col-span-2">{score}</p>
        </div>
      );
    })}
  </div>
);

const Roadmap = ({ items }) => (
  <div className="overflow-hidden rounded-lg ring-1 ring-[#ded8cf]">
    {items.map(([period, tasks]) => (
      <div key={period} className="grid border-b border-[#ded8cf] last:border-b-0 md:grid-cols-12">
        <div className="px-5 py-4 text-sm font-black text-white md:col-span-2" style={{ backgroundColor: ink }}>{period}</div>
        <div className="bg-white px-5 py-4 md:col-span-10">
          <BulletList items={tasks} />
        </div>
      </div>
    ))}
  </div>
);

const ReportBlock = ({ block, scoreRows }) => {
  if (block.type === 'scores') {
    return (
      <MiniPanel title={block.title || '종합 판단'}>
        <ScoreRows rows={scoreRows} />
      </MiniPanel>
    );
  }

  if (block.type === 'list') {
    return (
      <MiniPanel title={block.title}>
        <BulletList items={block.items} ordered={block.ordered} />
      </MiniPanel>
    );
  }

  if (block.type === 'quote') {
    return <QuoteBox title={block.title}>{block.text}</QuoteBox>;
  }

  if (block.type === 'table') {
    return (
      <div>
        {block.title ? <h3 className="mb-3 text-sm font-black text-[#102133]">{block.title}</h3> : null}
        <DataTable rows={block.rows} columns={block.columns} />
      </div>
    );
  }

  if (block.type === 'roadmap') {
    return <Roadmap items={block.items} />;
  }

  return null;
};

const SampleSwitcher = ({ currentSlug }) => (
  <div className="mx-auto mt-5 grid max-w-[920px] gap-2 px-4 md:grid-cols-5 md:px-6">
    {aiReportSamples.map((sample) => (
      <Link
        key={sample.slug}
        to={`/ai-report/${sample.slug}`}
        className={`rounded-[0.45rem] border px-3 py-3 text-xs font-black transition ${
          sample.slug === currentSlug
            ? 'border-[#102133] bg-[#102133] text-white'
            : 'border-[#ded8cf] bg-white text-[#102133] hover:border-[#102133]/50'
        }`}
      >
        <span className="mr-1.5">{sample.icon}</span>
        {sample.title}
      </Link>
    ))}
  </div>
);

const ReportHero = ({ sample }) => {
  const subtitleWords = sample.subtitle.split(' ');
  const subtitleLines = subtitleWords.length >= 4
    ? [subtitleWords.slice(0, 2).join(' '), subtitleWords.slice(2).join(' ')]
    : [sample.subtitle];

  return (
  <article className="border-b border-[#d8d3cb] pb-8">
    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_210px] md:items-start">
      <div className="min-w-0">
        <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#4f5a63]">AI Business Performance Report</p>
        <h1 className="mt-4 max-w-xl break-keep font-serif text-[clamp(1.45rem,6.8vw,2.55rem)] font-semibold leading-[1.14] text-[#102133] [overflow-wrap:anywhere] sm:leading-[1.1]">
          <span className="block">{sample.title}</span>
          <span className="block sm:inline">{subtitleLines[0]}</span>
          {subtitleLines[1] ? (
            <>
              <span className="block sm:ml-2 sm:inline">{subtitleLines[1]}</span>
            </>
          ) : null}
        </h1>
        <p className="mt-5 max-w-xl break-keep text-[0.82rem] font-semibold leading-[1.78] text-[#44515d] [overflow-wrap:anywhere] sm:text-sm">
          {sample.description}
        </p>
        <div className="mt-6 grid gap-3 text-xs font-bold text-[#102133] sm:grid-cols-3">
          {sample.meta.map(([label, value], index) => {
            const Icon = metaIcons[index] || FileText;
            return (
              <div key={label} className="flex gap-2.5">
                <Icon size={16} className="mt-0.5 text-[#b08a55]" />
                <div>
                  <p className="text-[#8b7862]">{label}</p>
                  <p className="mt-1 leading-snug">{value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-[0.28rem] bg-[#102133] p-4 text-white">
        <p className="text-[0.68rem] font-black text-[#d7b77d]">종합 진단 점수</p>
        <div className="mt-3 flex items-end gap-1.5 border-b border-white/15 pb-3">
          <p className="font-serif text-4xl font-semibold leading-none text-[#d7b77d]">{sample.score}</p>
          <p className="pb-1 text-xs font-black text-white/80">/100</p>
        </div>
        <p className="mt-3 text-[0.72rem] font-semibold leading-relaxed text-white/72">{sample.scoreLabel}</p>
        <p className="mt-2 text-[0.68rem] font-bold leading-relaxed text-white/55">{sample.scope}</p>
      </div>
    </div>
  </article>
  );
};

const MetricCard = ({ label, score, note, featured = false }) => {
  const value = Number.parseInt(score, 10) || 0;

  return (
    <div className={`rounded-[0.28rem] p-3 ring-1 ${featured ? 'bg-[#102133] text-white ring-[#102133]' : 'bg-[#fbfaf8] text-[#102133] ring-[#d8d3cb]'}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className={`text-[0.68rem] font-black ${featured ? 'text-[#d7b77d]' : 'text-[#4f5a63]'}`}>{label}</p>
          <p className={`mt-1 font-serif text-2xl font-semibold ${featured ? 'text-white' : 'text-[#c9a66e]'}`}>{score}</p>
        </div>
        <span className={`text-xs font-black ${featured ? 'text-[#d7b77d]' : 'text-[#102133]'}`}>
          {value}
        </span>
      </div>
      <p className={`mt-2 text-[0.72rem] font-semibold leading-relaxed ${featured ? 'text-white/70' : 'text-[#44515d]'}`}>{note}</p>
    </div>
  );
};

const ExecutiveDashboard = ({ sample, section }) => (
  <article className="py-7">
    <DocumentHeading label="Executive Summary" title="핵심 요약" />
    <div className="grid gap-7 md:grid-cols-[minmax(0,1fr)_240px]">
      <div>
        <div className="grid gap-4 text-sm font-semibold leading-[1.85] text-[#44515d]">
          {section.paragraphs?.slice(0, 3).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-6 grid gap-2">
          {(section.blocks?.find((block) => block.title === '우선순위 Top 3')?.rows || []).map((row) => (
            <div key={row.join('-')} className="grid gap-2 border-t border-[#e7e0d8] py-3 sm:grid-cols-[32px_1fr]">
              <span className="font-serif text-xl font-semibold leading-none text-[#c9a66e]">{row[0]}</span>
              <div>
                <p className="text-[0.82rem] font-black text-[#102133]">{row[1]}</p>
                <p className="mt-1 text-xs font-semibold leading-relaxed text-[#44515d]">{row[3]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-2.5">
        {sample.scoreRows.map(([label, score, note], index) => (
          <MetricCard key={label} label={label} score={score} note={note} featured={index === 0} />
        ))}
      </div>
    </div>
  </article>
);

const ReportInfo = ({ sample }) => (
  <article className="border-t border-[#d8d3cb] py-7">
    <DocumentHeading label="Information Summary" title="보고서 정보" />
    <div className="mt-5">
      <DataTable rows={sample.methodology || []} columns={['항목', '내용']} />
    </div>
  </article>
);

const ReportNotFound = ({ sampleSlug }) => {
  useEffect(() => {
    document.title = '리포트를 찾을 수 없습니다 | Goodman SEO';
    document.head.querySelector('meta[name="robots"]')?.setAttribute('content', 'noindex, nofollow');
    document.head.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://goodmanseo.com/ai-report/');
  }, [sampleSlug]);

  return (
    <div className="min-h-screen bg-[#f1f0ed] pt-24 text-[#102133]">
      <div className="mx-auto max-w-[760px] px-4 py-5 md:px-6 md:py-8">
        <main className="bg-white px-5 py-16 text-center ring-1 ring-[#d8d3cb] md:px-9">
          <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#4f5a63]">AI Business Performance Report</p>
          <h1 className="mx-auto mt-4 max-w-xl break-keep font-serif text-[clamp(1.45rem,6.8vw,2.55rem)] font-semibold leading-[1.14] text-[#102133]">
            리포트를 찾을 수 없습니다
          </h1>
          <p className="mx-auto mt-5 max-w-xl break-keep text-sm font-semibold leading-[1.78] text-[#44515d]">
            요청하신 AI 리포트 샘플을 찾을 수 없습니다. 다른 샘플 리포트를 확인해보세요.
          </p>
          <Link to="/ai-report" className="mt-8 inline-flex items-center justify-center gap-2 rounded-[0.25rem] bg-[#102133] px-5 py-3 text-sm font-black text-white transition hover:bg-[#1b3145]">
            <ArrowLeft size={14} />
            AI 리포트 안내로 돌아가기
          </Link>
        </main>
      </div>
    </div>
  );
};

const AIReportSample = () => {
  const { sampleSlug } = useParams();
  const sample = getAiReportSampleBySlug(sampleSlug);
  const reportPath = `/ai-report/${sample?.slug}`;
  const pageJsonLd = createWebPageJsonLd({
    name: `${sample?.title} AI 비즈니스 리포트`,
    description: sample?.description,
    path: reportPath,
  });

  if (!sample) {
    return <ReportNotFound sampleSlug={sampleSlug} />;
  }

  return (
    <div className="min-h-screen bg-[#f1f0ed] pt-24 text-[#102133]">
      <Seo
        title={`${sample.title} AI 비즈니스 리포트`}
        description={sample.description}
        path={reportPath}
        keywords={['AI 비즈니스 리포트', sample.industry, '홈페이지 진단', 'SEO 리포트', 'GoodmanSEO']}
        jsonLd={[organizationJsonLd, pageJsonLd]}
      />

      <div className="mx-auto max-w-[760px] px-4 py-5 md:px-6 md:py-8">
        <Link to="/ai-report" className="mb-4 inline-flex items-center gap-2 text-xs font-black text-[#44515d] hover:text-[#102133]">
          <ArrowLeft size={14} />
          AI 리포트 안내로 돌아가기
        </Link>

        <main className="bg-white px-5 py-7 ring-1 ring-[#d8d3cb] md:px-9 md:py-10">
          <ReportHero sample={sample} />
          <ExecutiveDashboard sample={sample} section={sample.sections[0]} />

          {sample.sections.slice(1).map((section, index) => (
            <ReportSection
              key={`${sample.slug}-${section.title}`}
              number={index + 2}
              label={section.label}
              title={section.title}
            >
              {section.paragraphs?.length ? (
                <div className="grid gap-4 text-sm font-semibold leading-[1.9] text-[#102133]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : null}

              {section.blocks?.length ? (
                <div className={`${section.paragraphs?.length ? 'mt-5' : ''} grid gap-5`}>
                  {section.blocks.map((block, blockIndex) => (
                    <ReportBlock
                      key={`${sample.slug}-${section.title}-${block.type}-${block.title || blockIndex}`}
                      block={block}
                      scoreRows={sample.scoreRows}
                    />
                  ))}
                </div>
              ) : null}
            </ReportSection>
          ))}

          <ReportInfo sample={sample} />

            <div className="border-t border-[#ded8cf] pt-5 text-center">
              <p className="text-xs font-semibold leading-relaxed text-[#687582]">
                이 페이지는 GoodmanSEO AI 비즈니스 리포트 샘플입니다. 실제 리포트는 제출 정보와 확인 가능한 온라인 자료를 바탕으로 작성됩니다.
              </p>
              <div className="mt-5 flex flex-col items-center gap-3">
                <p className="text-sm font-black text-[#102133]">정상가 AUD 349 · 런칭 특별가 AUD 249</p>
                <Link to="/contact?type=ai-report-standard" className="inline-flex items-center justify-center rounded-[0.25rem] bg-[#102133] px-5 py-3 text-sm font-black text-white transition hover:bg-[#1b3145]">
                  내 비즈니스 리포트 신청하기
                </Link>
              </div>
            </div>
        </main>
      </div>

      <SampleSwitcher currentSlug={sample.slug} />
    </div>
  );
};

export default AIReportSample;
