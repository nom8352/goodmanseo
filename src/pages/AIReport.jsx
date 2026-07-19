import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Globe2,
  LayoutDashboard,
  Lock,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import Seo from '../components/Seo';
import { aiReportSamples } from '../data/aiReportSamples';
import { createServiceJsonLd, organizationJsonLd } from '../data/siteSeo';

const ease = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0, y = 24) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.58, delay, ease },
});



const packages = [
  {
    title: 'AI 비즈니스 리포트',
    originalPrice: 'AUD 349',
    price: 'AUD 249',
    desc: '업종, 지역, 경쟁사와 실제 홈페이지를 기준으로 분석하는 맞춤형 성장 리포트입니다.',
    points: [
      '30일 / 90일 우선순위 액션 플랜 제공',
      '홈페이지 & SEO & 구글 노출(Local Visibility) 통합 진단',
      'UI/UX 및 고객 구매 여정(CTA) 분석',
      '경쟁사 1~3곳 비교 및 포지셔닝 전략',
      'AI 기반 가상 고객 반응 시뮬레이션 100명',
    ],
    href: '/contact?type=ai-report-standard',
    featured: true,
  },
];

const reportScenarios = [
  {
    icon: Globe2,
    title: '낮은 전환율',
    role: '"유입은 있는데, 왜 문의가 없을까?"',
    tags: ['전환율', '이탈원인', 'CTA'],
    quote: '구글 노출은 되지만 고객이 이탈하는 원인 분석',
  },
  {
    icon: Target,
    title: '차별화 부재',
    role: '"우리만의 강점이 안 보여요."',
    tags: ['포지셔닝', '경쟁사', '강점정리'],
    quote: '경쟁사 대비 확실한 포지셔닝과 차별화 전략 필요',
  },
  {
    icon: UsersRound,
    title: '브랜드 불일치',
    role: '"SNS와 홈페이지의 느낌이 달라요."',
    tags: ['홈페이지', 'SNS', '신뢰도'],
    quote: '채널 간 메시지 통일로 고객 신뢰도 상승',
  },
  {
    icon: LayoutDashboard,
    title: '우선순위 혼란',
    role: '"어디서부터 손대야 할지 막막해요."',
    tags: ['우선순위', '로드맵', '실행항목'],
    quote: '가장 효과적인 개선부터 짚어주는 명확한 로드맵',
  },
];



const AIReport = () => {
  const serviceJsonLd = createServiceJsonLd({
    name: 'GoodmanSEO AI 비즈니스 리포트',
    description:
      '홈페이지, Google Business Profile, Instagram, Facebook, SEO 기본 상태와 문의 흐름을 함께 점검해 우선순위를 정리하는 PDF 진단 리포트 서비스입니다.',
    path: '/ai-report',
    serviceType: 'AI business consulting report',
  });

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#f7f2ec] via-white to-[#eee7df] pt-20 text-[#102133]">
      <Seo
        title="AI 비즈니스 리포트"
        description="GoodmanSEO AI 비즈니스 리포트는 홈페이지, SEO, 구글 노출, 고객 반응, 비즈니스 포지셔닝을 함께 분석해 PDF로 정리합니다."
        path="/ai-report"
        keywords={['AI 비즈니스 리포트', '비즈니스 리포트', '홈페이지 진단', 'SEO 오딧', '구글 비즈니스 점검', 'AI 고객 반응 시뮬레이션']}
        jsonLd={[organizationJsonLd, serviceJsonLd]}
        locale="ko"
        alternates={[{ lang: 'ko', path: '/ai-report' }, { lang: 'en', path: '/en/ai-report' }]}
      />

      <section className="relative max-w-none overflow-hidden px-6 py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(16,33,51,0.13),transparent_34%),radial-gradient(circle_at_18%_96%,rgba(16,33,51,0.08),transparent_34%)]" />
        <div className="container relative z-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
            <Motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, ease }}
              className="max-w-4xl"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-black text-[#102133] shadow-sm ring-1 ring-[#ded8cf]">
                  <Sparkles size={14} />
                  Business + Website + SEO Audit Report
                </span>
                <span className="rounded-full border border-[#ded8cf] bg-[#f7f2ec] px-3.5 py-1.5 text-xs font-bold text-[#44515d]">
                  PDF 리포트
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-[clamp(2.25rem,4.6vw,4.25rem)] font-black leading-[1.08] tracking-[-0.04em] text-[#102133]">
                무엇을 먼저 고칠지,
                <br />
                30일·90일 실행 순서로
                <br />
                <span className="text-[#102133]">정리해드립니다</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base font-medium leading-[1.8] text-[#44515d]">
                업종, 지역, 경쟁사와 실제 홈페이지를 기준으로 SEO, Google 노출, 전환 흐름을 함께 분석합니다.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                <span className="font-bold text-[#6c7780] line-through">정상가 AUD 349</span>
                <span className="rounded-[0.25rem] bg-[#102133] px-3 py-1.5 font-black text-white">런칭 특별가 AUD 249</span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact?type=ai-report-standard" className="primary-button px-6 py-3 text-base">
                  내 비즈니스 진단 시작하기
                  <ArrowRight size={18} />
                </Link>
                <a href="#sample-reports" className="secondary-button px-6 py-3 text-base">
                  샘플 리포트 5개 보기
                </a>
              </div>
            </Motion.div>

            <Motion.aside
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.68, delay: 0.12, ease }}
              className="rounded-[0.7rem] border border-[#ded8cf] bg-white p-5 shadow-[0_18px_44px_rgba(16,33,51,0.07)]"
            >
              <div className="rounded-xl bg-[#f7f2ec] p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.12em] text-[#102133]">Report</p>
                    <h2 className="mt-2 text-2xl font-black tracking-[-0.04em]">전환 중심 진단</h2>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#102133] shadow-sm">
                    <ClipboardCheck size={24} />
                  </span>
                </div>

                <div className="mt-6 grid gap-3">
                  {[
                    ['Roadmap', '30일 / 90일 실행 우선순위'],
                    ['Audit', '홈페이지, SEO, Google 노출 통합 확인'],
                    ['Persona', 'AI 고객 100명 반응 시뮬레이션'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between gap-4 rounded-lg bg-white px-4 py-3 text-sm">
                      <span className="font-black text-[#102133]">{label}</span>
                      <span className="text-right font-semibold text-[#44515d]">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-xl border border-[#ded8cf] bg-white p-4">
                <Lock size={20} className="mt-0.5 shrink-0 text-[#102133]" />
                <p className="text-sm font-semibold leading-relaxed text-[#44515d]">
                  제공해주신 링크와 사업 정보는 리포트 작성 목적으로만 확인하며, 외부에 공개하지 않습니다.
                </p>
              </div>
            </Motion.aside>
          </div>
        </div>
      </section>



      <section className="max-w-none px-6 py-14 md:py-24">
        <div className="container">
          <div className="section-heading text-center">
            <h2 className="mx-auto max-w-3xl text-[clamp(2rem,3.5vw,3.2rem)] font-black leading-tight tracking-[-0.04em]">
              AI 비즈니스 리포트
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-relaxed text-[#44515d]">
              단순한 오류 점검이 아닌, 전환율에 집중한 맞춤형 성장 리포트입니다.
            </p>
          </div>

          <div className="mx-auto grid max-w-2xl gap-6">
            {packages.map((item, index) => (
              <Motion.article
                key={item.title}
                {...fadeUp(index * 0.06)}
                className={`${item.featured ? 'pricing-spotlight ring-2 ring-[#102133]/20' : 'feature-card'} flex h-full flex-col bg-white`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="pricing-card-title">{item.title}</p>
                    </div>
                    {item.featured ? (
                      <span className="rounded-[0.25rem] bg-[#102133] px-3 py-1 text-xs font-black text-white">
                        런칭 특별가
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-5 flex flex-wrap items-end gap-x-3 gap-y-1">
                    <p className="text-3xl font-black tracking-[-0.04em] text-[#102133]">{item.price}</p>
                    <p className="pb-0.5 text-sm font-bold text-[#6c7780] line-through">{item.originalPrice}</p>
                  </div>
                  <p className="mt-1 text-xs font-black text-[#102133]">정상가에서 AUD 100 할인</p>
                  {item.desc ? (
                    <p className="mt-3 text-sm font-bold leading-relaxed text-[#44515d]">{item.desc}</p>
                  ) : null}

                  <div className={`${item.desc ? 'mt-5' : 'mt-6'} grid gap-3`}>
                    {item.points.map((point) => (
                      <div key={`${item.title}-${point}`} className="benefit-row bg-[#f7f2ec]">
                        <CheckCircle2 size={16} className="shrink-0 text-[#102133]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link to={item.href} className={`${item.featured ? 'primary-button' : 'secondary-button'} mt-7 w-full py-3`}>
                  내 비즈니스 진단 시작하기
                  <ArrowRight size={16} />
                </Link>
                <a href="#sample-reports" className="mt-3 inline-flex items-center justify-center gap-2 text-sm font-black text-[#102133] underline decoration-[#102133]/30 underline-offset-4">
                  결제 전 업종별 샘플 5개 확인하기
                  <FileText size={15} />
                </a>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-none border-y border-[#ded8cf] bg-[#f7f2ec] px-6 py-14 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-black text-[#102133] ring-1 ring-[#ded8cf]">
              <Target size={14} />
              Pain Points
            </span>
            <h2 className="mt-5 text-[clamp(2rem,3.2vw,3rem)] font-black leading-tight tracking-[-0.04em]">
              지금, 이런 고민을 하고 계신가요?
            </h2>
            <p className="mt-4 text-base font-medium text-[#44515d]">
              문제를 정확히 짚어야, 개선 순서가 보입니다.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {reportScenarios.map((scenario, index) => {
              const Icon = scenario.icon;
              return (
              <Motion.article
                key={scenario.title}
                {...fadeUp(index * 0.06)}
                className="rounded-[0.7rem] border border-[#ded8cf] bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.45rem] bg-[#f7f2ec] text-[#102133] ring-1 ring-[#ded8cf]">
                      <Icon size={21} />
                    </span>
                    <div>
                      <h3 className="text-sm font-black text-[#102133]">{scenario.title}</h3>
                      <p className="text-xs font-semibold text-[#44515d] mt-0.5">{scenario.role}</p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm font-semibold leading-relaxed text-[#4f463d] pl-3.5 border-l-2 border-[#102133]/30">
                    {scenario.quote}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#f7f2ec] flex flex-wrap gap-1.5">
                  {scenario.tags.map((tag) => (
                    <span key={tag} className="rounded-[0.25rem] bg-[#f7f2ec] px-2 py-1 text-xs font-bold text-[#102133]">
                      {tag}
                    </span>
                  ))}
                </div>
              </Motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="max-w-none border-t border-[#ded8cf] bg-white px-6 py-14 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#f7f2ec] px-3.5 py-1.5 text-xs font-black text-[#102133] ring-1 ring-[#ded8cf]">
              <FileText size={14} />
              상세 진행 안내
            </span>
            <h2 className="mt-5 text-[clamp(2rem,3.2vw,3rem)] font-black leading-tight tracking-[-0.04em]">
              체계적인 분석, 명확한 결과
            </h2>
            <p className="mt-4 text-base font-medium text-[#44515d]">
              비즈니스 정보만 남겨주시면, 최적화된 성장 전략을 10단계 리포트로 완성해 드립니다.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
            {/* Input Card */}
            <Motion.div {...fadeUp(0.06)} className="feature-card bg-[#f7f2ec] p-6 rounded-[0.7rem] border border-[#ded8cf]">
              <h3 className="text-lg font-black text-[#102133] border-b border-[#ded8cf] pb-3.5 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#f1ebe3] text-[#102133] text-xs font-black">
                    IN
                  </span>
                  진단 시작에 필요한 정보
                </span>
                <span className="text-xs text-[#102133] font-bold">신청 폼 + 링크</span>
              </h3>
              
              <div className="mt-6">
                <h4 className="text-sm font-black text-[#102133] flex items-center gap-2 mb-3">
                  <span className="rounded bg-[#102133] px-1.5 py-0.5 text-[10px] font-bold text-white">필수 항목</span>
                  실제 점검과 비교 분석에 필요한 정보
                </h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {[
                    '사업명 / 회사명',
                    '웹사이트 URL',
                    'Google Business Profile / 지도 링크',
                    '업종',
                    '주요 제품/서비스',
                    '주요 타겟 고객',
                    '서비스 지역',
                    '경쟁사 URL 1~3개',
                    '현재 가장 큰 고민',
                    '원하는 목표',
                  ].map((title) => (
                    <li key={title} className="flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-3 shadow-sm border border-[#ded8cf] text-[0.82rem] font-black leading-snug text-[#102133]">
                      <span className="h-1.5 w-1.5 rounded-[0.25rem] bg-[#102133] shrink-0" />
                      {title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-black text-[#102133] flex items-center gap-2 mb-3">
                  <span className="rounded bg-[#44515d] px-1.5 py-0.5 text-[10px] font-bold text-white">선택 항목</span>
                  분석 정확도를 높이는 참고 정보
                </h4>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {[
                    'Instagram / Facebook 링크',
                    '현재 월 방문자 수 / 문의 수',
                    '광고 집행 여부',
                    '평균 객단가',
                    '가장 수익성 높은 서비스',
                    '최근 고객이 자주 묻는 질문',
                    '과거에 시도했던 마케팅',
                  ].map((title) => (
                    <li key={title} className="flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-3 shadow-sm border border-[#ded8cf] text-[0.82rem] font-black leading-snug text-[#44515d]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#44515d] shrink-0" />
                      {title}
                    </li>
                  ))}
                </ul>
              </div>
            </Motion.div>

            {/* Output Card */}
            <Motion.div {...fadeUp(0.12)} className="feature-card bg-[#f7f2ec] p-6 rounded-[0.7rem] border border-[#ded8cf] ring-1 ring-[#102133]/5">
              <h3 className="text-lg font-black text-[#102133] border-b border-[#ded8cf] pb-3.5 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-[0.25rem] bg-[#102133] text-white text-xs font-black">
                    OUT
                  </span>
                  PDF 리포트에 담기는 정보
                </span>
                <span className="text-xs text-[#102133] font-bold">5개 샘플 공통 구조</span>
              </h3>
              
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {[
                  '1. 핵심 요약',
                  '2. 비즈니스 포지셔닝 진단',
                  '3. 홈페이지 구조 점검',
                  '4. SEO 기본 상태 점검',
                  '5. 구글 / 지도 노출 점검',
                  '6. AI 고객 반응 시뮬레이션',
                  '7. 대표 관점 실행 리뷰',
                  '8. 최종 판단 요약',
                  '9. 30일 / 90일 실행 로드맵',
                  '10. 최종 권장 방향',
                ].map((title) => (
                  <div key={title} className="flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-3 shadow-sm border border-[#ded8cf] text-[0.82rem] font-black leading-snug text-[#102133]">
                    <span className="h-1.5 w-1.5 rounded-[0.25rem] bg-[#102133] shrink-0" />
                    {title}
                  </div>
                ))}
              </div>
              <p className="mt-5 rounded-[0.45rem] border border-[#ded8cf] bg-white px-4 py-3 text-xs font-semibold leading-relaxed text-[#44515d]">
                AI 고객 반응 시뮬레이션은 실제 고객 설문을 대체하지 않습니다. 가상 고객군을 기준으로 메시지, 신뢰 요소와 구매 망설임을 점검하는 보조 분석으로 활용합니다.
              </p>
            </Motion.div>
          </div>



          <Motion.div {...fadeUp(0.18)} className="mx-auto mt-12 flex max-w-4xl flex-col items-center gap-4 text-center">
            <p className="text-sm font-bold text-[#44515d]">
              실제 고객이 받는 리포트 흐름과 섹션 구성을 먼저 확인할 수 있습니다.
            </p>
            <a
              href="#sample-reports"
              className="inline-flex items-center gap-2 rounded-[0.25rem] border border-[#102133]/30 bg-white px-5 py-3 text-sm font-extrabold text-[#102133] transition hover:bg-[#f7f2ec]"
            >
              <FileText size={16} />
              샘플 리포트 5개 보기
            </a>
          </Motion.div>
        </div>
      </section>

      <section id="sample-reports" className="max-w-none border-y border-[#ded8cf] bg-[#102133] px-6 py-14 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-[0.25rem] border border-white/15 bg-white/[0.07] px-3.5 py-1.5 text-xs font-black text-[#d7b77d]">
              <FileText size={14} />
              Sample Reports
            </span>
            <h2 className="mt-5 text-[clamp(1.75rem,3vw,2.65rem)] font-black leading-tight tracking-[-0.035em] text-[#eef3f7]">
              업종별 샘플 리포트 확인하기
            </h2>
            <p className="mt-4 text-sm font-semibold leading-relaxed text-[#aab5bd]">
              비즈니스 환경에 맞춘 다양한 리포트 예시를 미리 확인해 보세요.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-5">
            {aiReportSamples.map((sample, index) => (
              <Motion.article
                key={sample.slug}
                {...fadeUp(index * 0.04)}
                className="flex h-full flex-col rounded-[0.45rem] border border-white/10 bg-white/[0.07] p-4 text-[#eef3f7]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-2xl" aria-hidden="true">{sample.icon}</span>
                  <span className="rounded-[0.25rem] border border-white/10 px-2 py-1 text-[0.65rem] font-black text-[#d7b77d]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-black leading-snug text-[#eef3f7]">{sample.title}</h3>
                <p className="mt-1 text-xs font-bold text-[#d7b77d]">{sample.industry}</p>
                <p className="mt-3 flex-1 text-xs font-semibold leading-relaxed text-[#aab5bd]">{sample.description}</p>
                <Link
                  to={`/ai-report/${sample.slug}`}
                  className="mt-5 inline-flex items-center justify-between rounded-[0.25rem] border border-white/15 px-3 py-2 text-xs font-black text-[#eef3f7] transition hover:border-[#d7b77d] hover:text-[#d7b77d]"
                >
                  샘플 리포트 보기
                  <ArrowRight size={14} />
                </Link>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-none px-6 pb-20 pt-6 md:pb-28">
        <div className="container">
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mt-12 text-center"
          >
            <p className="text-[0.93rem] font-semibold text-[#44515d] mb-5">
              정상가 AUD 349 · 런칭 특별가 AUD 249
            </p>
            <Link
              to="/contact?type=ai-report-standard"
              className="inline-flex items-center gap-2 rounded-[0.25rem] bg-[#102133] text-white px-8 py-3.5 text-[0.95rem] font-bold hover:bg-[#1b3145] transition-all shadow-[0_12px_24px_rgba(16,33,51,0.12)] hover:-translate-y-0.5"
            >
              내 비즈니스 진단 시작하기
              <ArrowRight size={16} />
            </Link>
          </Motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIReport;
