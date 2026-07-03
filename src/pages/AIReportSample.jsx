import React from 'react';
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
const paper = '#ffffff';

const metaIcons = [CalendarDays, UserRound, Target];

const ReportSection = ({ number, label, title, children }) => (
  <article className="rounded-[0.7rem] bg-white p-5 shadow-[0_8px_22px_rgba(16,33,51,0.055)] ring-1 ring-[#ded8cf] md:p-7">
    <div className="mb-6 flex flex-wrap items-center gap-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-sm font-black text-white" style={{ backgroundColor: ink }}>
        {String(number).padStart(2, '0')}
      </span>
      <h2 className="font-serif text-[clamp(1.2rem,1.9vw,1.62rem)] font-semibold leading-tight text-[#102133]">
        {title}
      </h2>
      {label ? <span className="text-xs font-black uppercase tracking-[0.18em] text-[#9a8a75]">{label}</span> : null}
    </div>
    {children}
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
  <div className="rounded-lg bg-white p-5 ring-1 ring-[#ded8cf]">
    <h3 className="text-sm font-black text-[#102133]">{title}</h3>
    <div className="mt-4">{children}</div>
  </div>
);

const QuoteBox = ({ title, children }) => (
  <div>
    {title ? <h3 className="mb-3 text-sm font-black text-[#102133]">{title}</h3> : null}
    <div className="rounded-lg border border-[#ded8cf] bg-white px-5 py-4">
      <p className="font-serif text-[1.03rem] font-semibold leading-[1.75] text-[#102133]">{children}</p>
    </div>
  </div>
);

const DataTable = ({ rows, columns = ['항목', '결과'] }) => (
  <div className="overflow-x-auto rounded-lg ring-1 ring-[#ded8cf]">
    <div className="min-w-[520px]">
      <div className="grid bg-[#102133] text-xs font-black uppercase tracking-[0.1em] text-white" style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}>
        {columns.map((label) => (
          <div key={label} className="px-4 py-3">{label}</div>
        ))}
      </div>
      {rows.map((row) => (
        <div key={row.join('-')} className="grid border-b border-[#ded8cf] bg-white last:border-b-0" style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}>
          {row.map((cell, index) => (
            <div key={`${cell}-${index}`} className={`px-4 py-3 text-sm leading-relaxed ${index === 0 ? 'font-black' : 'font-semibold'} text-[#102133]`}>
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

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
  <div className="mx-auto mt-5 grid max-w-[1180px] gap-2 px-4 md:grid-cols-5 md:px-6">
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

const AIReportSample = () => {
  const { sampleSlug = 'sample-luna-skin-clinic' } = useParams();
  const sample = getAiReportSampleBySlug(sampleSlug);
  const reportPath = `/ai-report/${sample.slug}`;
  const pageJsonLd = createWebPageJsonLd({
    name: `${sample.title} AI 비즈니스 리포트`,
    description: sample.description,
    path: reportPath,
  });

  return (
    <div className="min-h-screen bg-[#f7f2ec] pt-24 text-[#102133]">
      <Seo
        title={`${sample.title} AI 비즈니스 리포트`}
        description={sample.description}
        path={reportPath}
        keywords={['AI 비즈니스 리포트', sample.industry, '홈페이지 진단', 'SEO 리포트', 'GoodmanSEO']}
        jsonLd={[organizationJsonLd, pageJsonLd]}
      />

      <div className="mx-auto max-w-[1180px] px-4 py-5 md:px-6 md:py-8">
        <Link to="/ai-report" className="mb-4 inline-flex items-center gap-2 text-xs font-black text-[#44515d] hover:text-[#102133]">
          <ArrowLeft size={14} />
          AI 리포트 안내로 돌아가기
        </Link>

        <main className="overflow-hidden rounded-[0.7rem] border border-[#ded8cf] bg-[var(--report-paper,#ffffff)] shadow-[0_18px_46px_rgba(16,33,51,0.10)]" style={{ '--report-paper': paper }}>
          <div className="relative border-b border-[#e7e0d8] bg-white p-5 md:p-7">
            <div className="mx-auto grid max-w-[920px] gap-6 lg:grid-cols-[minmax(0,520px)_260px] lg:items-center lg:justify-center lg:gap-10">
              <div>
                <p className="text-[0.66rem] font-black uppercase tracking-[0.18em] text-[#a9844d]">AI Business Report</p>
                <h1 className="mt-3 font-serif text-[clamp(1.45rem,2.4vw,2.15rem)] font-semibold leading-[1.16] text-[#102133]">
                  {sample.title}
                </h1>
                <p className="mt-1 font-serif text-[clamp(1.05rem,1.65vw,1.45rem)] font-semibold leading-[1.25] text-[#102133]">
                  {sample.subtitle}
                </p>
                <p className="mt-4 max-w-2xl text-[0.82rem] font-semibold leading-[1.7] text-[#102133]">
                  {sample.description}
                </p>

                <div className="mt-5 flex max-w-3xl flex-wrap gap-x-7 gap-y-3 text-xs font-bold text-[#102133]">
                  {sample.meta.map(([label, value], index) => {
                    const Icon = metaIcons[index] || FileText;
                    return (
                      <div key={label} className="flex items-start gap-2.5">
                        <Icon size={15} className="mt-0.5 text-[#a9844d]" />
                        <div>
                          <p className="text-[0.68rem] text-[#8b7862]">{label}</p>
                          <p className="mt-1 text-[#102133]">{value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <aside className="relative overflow-hidden rounded-[0.45rem] p-5 text-white shadow-[0_10px_24px_rgba(8,31,54,0.16)] lg:w-[260px]" style={{ backgroundColor: ink }}>
                <div className="pointer-events-none absolute -right-10 -top-14 h-36 w-36 rounded-full border border-[#d7b77d]/18" />
                <p className="text-xs font-black text-[#eef3f7]">종합 진단 점수</p>
                <div className="mt-4 flex items-end gap-1">
                  <span className="font-serif text-4xl font-semibold leading-none text-[#d7b77d]">{sample.score}</span>
                  <span className="pb-1 text-sm font-bold text-white/80">/100</span>
                </div>
                <p className="mt-3 text-xs font-semibold text-white/78">{sample.scoreLabel}</p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/15">
                  <span className="block h-full rounded-full bg-[#d7b77d]" style={{ width: `${sample.score}%` }} />
                </div>
                <p className="mt-3 text-[0.68rem] font-bold text-white/65">{sample.scope}</p>
              </aside>
            </div>
          </div>

          <div className="grid gap-6 p-5 md:p-9">
            {sample.sections.map((section, index) => (
              <ReportSection
                key={`${sample.slug}-${section.title}`}
                number={index + 1}
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
                  <div className={`${section.paragraphs?.length ? 'mt-5' : ''} grid gap-5 lg:grid-cols-2`}>
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

            <div className="rounded-lg px-5 py-4 text-center text-sm font-black text-white" style={{ backgroundColor: ink }}>
              <span className="text-[#d7b77d]">★</span> 본 리포트는 공개 온라인 정보, 제출 정보, 실제 사이트/SEO/노출 점검, AI 분석을 바탕으로 현재 상태와 실행 우선순위를 정리하는 형식입니다. AI 고객 반응 시뮬레이션은 메시지, 신뢰 요소, 구매 망설임을 빠르게 확인하는 참고 분석으로 활용됩니다.
            </div>
          </div>
        </main>
      </div>

      <SampleSwitcher currentSlug={sample.slug} />
    </div>
  );
};

export default AIReportSample;
