import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, CircleCheckBig } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import Seo from '../components/Seo';
import FaqList from '../components/FaqList';
import { createServiceJsonLd, organizationJsonLd } from '../data/siteSeo';
import { pricingFaqs, programMonths, programsKo, websiteSpec } from '../data/programs';

const ease = [0.16, 1, 0.3, 1];

const sampleSites = [
  { title: '브리즈번 청소 업체', href: '/samples/brisbane-commercial-cleaning/', image: '/samples/previews/brisbane-commercial-cleaning.jpg' },
  { title: '타일 시공', href: '/samples/brisbane-tile-studio/', image: '/samples/previews/brisbane-tile-studio.jpg' },
  { title: '필라테스 스튜디오', href: '/samples/frame-pilates-studio/', image: '/samples/previews/frame-pilates-studio.jpg' },
  { title: '방역 서비스', href: '/samples/moreton-bay-pest-control/', image: '/samples/previews/moreton-bay-pest-control.jpg' },
  { title: '로컬 카페', href: '/samples/north-lakes-local-cafe/', image: '/samples/previews/north-lakes-local-cafe.jpg' },
  { title: '휴대폰 수리', href: '/samples/northside-phone-repairs/', image: '/samples/previews/northside-phone-repairs.jpg' },
];

const pricingJsonLd = [
  organizationJsonLd,
  createServiceJsonLd({
    name: '구글 상위 노출 3개월 프로그램',
    description:
      '브리즈번 로컬 비즈니스를 위한 로컬 SEO 프로그램. 키워드 선정, SEO 홈페이지 제작, 구글 비즈니스 프로필 최적화, 리뷰 관리, 월간 리포트를 3개월 동안 진행합니다.',
    path: '/pricing',
    serviceType: 'Local SEO and Google Business Profile ranking program',
  }),
];

const WebPricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#f7f2ec] via-white to-[#eee7df] pb-16 pt-24 text-[#102133]">
      <Seo
        title="구글 상위 노출 프로그램 · 서비스 및 가격"
        description="무료 순위 점검 · 구글 상위 노출 3개월 프로그램 AUD 4,400 (SEO 홈페이지 + 구글 비즈니스 프로필) · 월 유지 관리 AUD 390. 브리즈번 로컬 SEO 서비스 가격과 진행 순서."
        path="/pricing"
        keywords={['구글 상위 노출 가격', '로컬 SEO 가격', '구글 비즈니스 프로필 세팅 가격', '브리즈번 SEO', '무료 순위 점검']}
        jsonLd={pricingJsonLd}
      />

      <div className="container">
        {/* Hero */}
        <Motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="section-heading mx-auto mb-12 flex max-w-4xl flex-col items-center text-center"
        >
          <div className="mx-auto mb-5 inline-flex items-center gap-1.5 rounded-full border border-[#d8c8af] bg-gradient-to-r from-[#f1ebe3] to-[#ded8cf] px-3.5 py-1 text-[0.78rem] font-bold text-[#102133] shadow-[0_2px_8px_rgba(16,33,51,0.04)]">
            서비스 및 가격
          </div>
          <h1 className="text-balance text-[clamp(2.1rem,4.2vw,3.4rem)] font-black leading-[1.15] tracking-[-0.04em] text-[#102133]">
            구글 상위 노출 서비스,
            <br />
            3가지 프로그램
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-[1.02rem] font-medium leading-[1.75] text-[#44515d]">
            무료 순위 점검으로 시작합니다. 3개월 프로그램에는 SEO 홈페이지 제작이 포함됩니다.
          </p>
        </Motion.div>

        {/* 1. Programs */}
        <section id="programs" className="section-block !min-h-0 scroll-mt-24 px-0">
          <div className="w-full">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {programsKo.map((item) => (
                <article
                  key={item.id}
                  className={`${item.highlight ? 'pricing-spotlight' : 'feature-card'} flex h-full flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(16,33,51,0.06)]`}
                >
                  <div>
                    <p className="pricing-card-title">{item.title}</p>
                    {item.highlight && (
                      <p className="mt-3 inline-flex rounded-[0.25rem] border border-[#102133]/30 bg-[#102133]/10 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.08em] text-[#102133]">
                        메인 프로그램
                      </p>
                    )}
                    {item.subtitle ? <p className="mt-1 text-[0.8rem] font-bold text-[#9a6b2f]">{item.subtitle}</p> : null}
                    <div className="mt-3">
                      <p className="text-[1.25rem] font-bold tracking-[-0.03em] text-[#102133]">{item.price}</p>
                      <p className="mt-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.05em] text-[#687582]">{item.priceNote}</p>
                      {item.altNote ? <p className="mt-1 text-[0.74rem] font-semibold text-[#44515d]">{item.altNote}</p> : null}
                    </div>
                    <p className="mt-4 text-sm font-semibold leading-relaxed text-[#566471]">{item.desc}</p>
                    <div className="mt-6 grid gap-3">
                      {item.points.map((point) => (
                        <div key={`${item.id}-${point}`} className="benefit-row">
                          <CircleCheckBig size={16} className="text-accent-primary" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link to={item.href} className={`${item.highlight ? 'primary-button' : 'secondary-button'} mt-7 w-full py-3`}>
                    {item.cta}
                    <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
            <p className="mx-auto mt-6 max-w-3xl text-center text-[0.8rem] leading-relaxed text-[#566471]">
              호주 에이전시 로컬 SEO 시세(2026.11 공개 가격 가이드 기준): 한 지역 월 AUD 800~1,500부터, 홈페이지 제작 별도. 홈페이지 제작까지 포함해 1인 직접 진행으로 책정, 작업 내용은 월간 리포트로 공유.
            </p>
          </div>
        </section>

        {/* 2. What happens in the 3 months */}
        <section id="included" className="section-block !min-h-0 mt-12 scroll-mt-24 px-0">
          <div className="w-full">
            <div className="section-heading text-center">
              <h2 className="section-title mx-auto">3개월 프로그램 진행 순서</h2>
              <p className="section-copy mx-auto">
                월별 목표가 다릅니다. 매월 말 작업 내역과 수치 리포트를 전달합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {programMonths.map((month, index) => (
                <Motion.article
                  key={month.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08, ease }}
                  className="soft-panel flex h-full flex-col"
                >
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.12em] text-[#9a6b2f]">{month.label}</p>
                  <h3 className="mt-2 text-[1.05rem] font-black tracking-[-0.03em] text-[#102133]">{month.title}</h3>
                  <ul className="mt-4 grid gap-2.5">
                    {month.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[0.84rem] leading-relaxed text-[#44515d]">
                        <Check size={14} className="mt-1 shrink-0 text-[#102133]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Website, only if needed */}
        <section id="website" className="section-block !min-h-0 mt-12 scroll-mt-24 px-0">
          <div className="w-full">
            <div className="section-heading text-center">
              <h2 className="section-title mx-auto">SEO 홈페이지 제작</h2>
              <p className="section-copy mx-auto">
                구글 상위 노출의 기반. 3개월 프로그램에 포함되며, 키워드 구조로 설계해 구글 비즈니스 프로필과 연동합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <article className="feature-card flex h-full flex-col justify-between">
                <div>
                  <p className="pricing-card-title">{websiteSpec.title}</p>
                  <div className="mt-3">
                    <p className="text-[1.25rem] font-bold tracking-[-0.03em] text-[#102133]">{websiteSpec.price}</p>
                    <p className="mt-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.05em] text-[#687582]">{websiteSpec.priceNote}</p>
                  </div>
                  <p className="mt-4 text-sm font-semibold leading-relaxed text-[#566471]">{websiteSpec.desc}</p>
                  <div className="mt-6 grid gap-3">
                    {websiteSpec.points.map((point) => (
                      <div key={point} className="benefit-row">
                        <CircleCheckBig size={16} className="text-accent-primary" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-5 text-[0.76rem] leading-relaxed text-[#687582]">{websiteSpec.note}</p>
                <Link to={websiteSpec.href} className="secondary-button mt-4 w-full py-3">
                  {websiteSpec.cta}
                  <ArrowRight size={16} />
                </Link>
              </article>

              <div>
                <p className="mb-3 text-[0.72rem] font-black uppercase tracking-[0.12em] text-[#687582]">업종별 제작 예시</p>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {sampleSites.map((site) => (
                    <a
                      key={site.href}
                      href={site.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group overflow-hidden rounded-[0.45rem] border border-[#e1dbd2] bg-white p-1.5 transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(16,33,51,0.06)]"
                    >
                      <div className="aspect-[16/10] overflow-hidden rounded-[0.3rem] bg-[#f1ebe3]">
                        <img
                          src={site.image}
                          alt={`${site.title} 홈페이지 예시 미리보기`}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                      </div>
                      <p className="px-1 py-2 text-[0.74rem] font-bold text-[#102133]">{site.title}</p>
                    </a>
                  ))}
                </div>
                <p className="mt-3 text-[0.74rem] leading-relaxed text-[#687582]">
                  구성 참고용 예시. 실제 제작은 업체 키워드 · 서비스 기준으로 설계합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. FAQ */}
        <section id="faq" className="section-block !min-h-0 mt-12 scroll-mt-24 px-0">
          <div className="mx-auto w-full max-w-5xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.6fr] lg:items-start">
              <Motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="text-left"
              >
                <h2 className="text-[2rem] font-black tracking-[-0.04em] text-[#102133]">자주 묻는 질문</h2>
                <p className="mt-2 text-[0.95rem] font-semibold leading-relaxed text-[#44515d]">
                  상담 전 자주 묻는 질문을
                  <br />
                  모았습니다.
                </p>
                <Link to="/contact?type=free-check" className="primary-button mt-6 inline-flex">
                  무료 순위 점검
                  <ArrowRight size={16} />
                </Link>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease }}
                className="px-1"
              >
                <FaqList items={pricingFaqs} />
              </Motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebPricing;
