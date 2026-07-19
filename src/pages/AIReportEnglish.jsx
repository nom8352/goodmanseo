import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileText, Search, Target, UsersRound } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import Seo from '../components/Seo';
import { aiReportSamples } from '../data/aiReportSamples';
import { createServiceJsonLd, organizationJsonLd } from '../data/siteSeo';

const ease = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.55, delay, ease },
});

const reportItems = [
  'Prioritised 30-day and 90-day action roadmap',
  'Website, SEO and Google visibility review',
  'Conversion flow, UI/UX and call-to-action analysis',
  'Comparison with 1-3 relevant competitors',
  '100-person synthetic customer response simulation',
];

const analysisAreas = [
  { icon: Search, title: 'Search visibility', copy: 'Review the website, on-page SEO and Google visibility issues that affect discovery.' },
  { icon: Target, title: 'Positioning and conversion', copy: 'Assess the offer, messaging, trust signals and enquiry journey against relevant competitors.' },
  { icon: UsersRound, title: 'Customer response', copy: 'Use a synthetic audience to identify likely interest, hesitation and messaging gaps.' },
];

const AIReportEnglish = () => {
  const serviceJsonLd = createServiceJsonLd({
    name: 'GoodmanSEO AI Business Report',
    description: 'An industry-specific business, website and SEO review with a prioritised 30-day and 90-day action roadmap.',
    path: '/en/ai-report',
    serviceType: 'AI business consulting report',
  });

  return (
    <div className="min-h-screen bg-[#f7f2ec] pt-20 text-[#102133]">
      <Seo
        title="AI Business Report"
        description="Review your website, SEO, Google visibility, competitors and customer response, then receive a prioritised 30-day and 90-day action roadmap."
        path="/en/ai-report"
        keywords={['AI business report', 'business website audit', 'SEO audit Australia', 'competitor review', '90 day growth roadmap']}
        jsonLd={[organizationJsonLd, serviceJsonLd]}
        locale="en"
        alternates={[{ lang: 'ko', path: '/ai-report' }, { lang: 'en', path: '/en/ai-report' }]}
      />

      <section className="border-b border-[#ded8cf] px-6 py-14 md:py-20">
        <div className="container grid gap-10 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-center">
          <Motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease }}>
            <span className="inline-flex items-center gap-2 rounded-[0.25rem] border border-[#ded8cf] bg-white px-3 py-1.5 text-xs font-black">
              Business + Website + SEO Audit Report
            </span>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.15rem,4.5vw,4.2rem)] font-black leading-[1.07] tracking-[-0.04em]">
              Know what to fix first with a 30/90-day action roadmap
            </h1>
            <p className="mt-6 max-w-2xl text-base font-medium leading-[1.8] text-[#44515d]">
              We review your industry, location, competitors and actual website across SEO, Google visibility and conversion flow.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
              <span className="font-bold text-[#6c7780] line-through">Standard price AUD 349</span>
              <span className="rounded-[0.25rem] bg-[#102133] px-3 py-1.5 font-black text-white">Launch price AUD 249</span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/en/contact?type=ai-report-standard" className="primary-button px-6 py-3 text-base">
                Enquire About Your Report
                <ArrowRight size={17} />
              </Link>
              <a href="#report-samples" className="secondary-button px-6 py-3 text-base">View Report Samples</a>
            </div>
          </Motion.div>

          <Motion.aside {...fadeUp(0.08)} className="rounded-[0.7rem] border border-[#ded8cf] bg-white p-6 shadow-[0_18px_44px_rgba(16,33,51,0.07)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase text-[#687582]">AI Business Report</p>
                <div className="mt-3 flex flex-wrap items-end gap-3">
                  <p className="text-3xl font-black">AUD 249</p>
                  <p className="pb-1 text-sm font-bold text-[#6c7780] line-through">AUD 349</p>
                </div>
              </div>
              <span className="rounded-[0.25rem] bg-[#102133] px-3 py-1 text-xs font-black text-white">Launch offer</span>
            </div>
            <div className="mt-6 grid gap-3">
              {reportItems.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[0.45rem] bg-[#f7f2ec] px-4 py-3 text-sm font-bold leading-relaxed">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Motion.aside>
        </div>
      </section>

      <section className="bg-white px-6 py-14 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[clamp(1.8rem,3vw,2.7rem)] font-black tracking-[-0.035em]">What the report helps you decide</h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
            {analysisAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Motion.article key={area.title} {...fadeUp(index * 0.06)} className="rounded-[0.55rem] border border-[#ded8cf] bg-[#f7f2ec] p-5">
                  <Icon size={22} />
                  <h3 className="mt-4 text-base font-black">{area.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-[#566471]">{area.copy}</p>
                </Motion.article>
              );
            })}
          </div>
          <p className="mx-auto mt-8 max-w-3xl rounded-[0.45rem] border border-[#ded8cf] bg-[#f7f2ec] px-4 py-3 text-center text-xs font-semibold leading-relaxed text-[#566471]">
            The synthetic customer simulation does not replace research with real customers. It is a supporting analysis used to test messaging, trust signals and likely purchase hesitation.
          </p>
        </div>
      </section>

      <section id="report-samples" className="scroll-mt-20 bg-[#102133] px-6 py-14 text-[#eef3f7] md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <FileText size={22} className="mx-auto text-[#d7b77d]" />
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.7rem)] font-black tracking-[-0.035em]">Industry report samples</h2>
            <p className="mt-3 text-sm font-semibold text-[#aab5bd]">Review the report structure and level of detail before you enquire.</p>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {aiReportSamples.map((sample, index) => (
              <Motion.article key={sample.slug} {...fadeUp(index * 0.04)} className="flex h-full flex-col rounded-[0.45rem] border border-white/10 bg-white/[0.07] p-4">
                <span className="text-2xl" aria-hidden="true">{sample.icon}</span>
                <h3 className="mt-4 text-sm font-black leading-snug">{sample.title}</h3>
                <p className="mt-1 text-xs font-bold text-[#d7b77d]">{sample.industry}</p>
                <p className="mt-3 flex-1 text-xs font-semibold leading-relaxed text-[#aab5bd]">{sample.description}</p>
                <Link to={`/ai-report/${sample.slug}`} className="mt-5 inline-flex items-center justify-between border-t border-white/10 pt-3 text-xs font-black">
                  View Korean sample
                  <ArrowRight size={14} />
                </Link>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 text-center md:py-20">
        <p className="text-sm font-black">Standard price AUD 349 · Launch price AUD 249</p>
        <Link to="/en/contact?type=ai-report-standard" className="primary-button mt-5 px-7 py-3.5 text-base">
          Enquire About Your Report
          <ArrowRight size={17} />
        </Link>
      </section>
    </div>
  );
};

export default AIReportEnglish;
