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
  ListChecks,
  Lock,
  ShieldCheck,
  Sparkles,
  Target,
  Timer,
  UsersRound,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';
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
    title: '전체 분석 리포트',
    price: 'AUD 249',
    points: [
      '100점 만점 종합 점수표',
      '홈페이지 SEO & UX 진단',
      '구글 지도(GBP) 노출 상태 진단',
      '인스타 / 페북 링크 연동 검증',
      '시장 포지셔닝 & 병목 요인 분석',
      '3단계 우선순위 로드맵 수령',
      '3영업일 내 PDF 제공',
    ],
    href: '/contact?type=ai-report-standard',
    featured: true,
  },
  {
    title: '재분석 리포트',
    price: 'AUD 199',
    points: [
      '1차 진단 실행 결과 점검',
      '홈페이지 전환 지표 재검증',
      '구글 지도 검색 순위 분석',
      '소셜 채널 연동 보완 검증',
      '신규 개선 로드맵 수립',
      '3영업일 내 PDF 제공',
    ],
    href: '/contact?type=ai-report-standard',
  },
];

const linkedInPersonas = [
  {
    avatarUrl: 'https://randomuser.me/api/portraits/men/90.jpg',
    name: '김동우',
    role: 'SaaS 스타트업 대표 (30대)',
    hashtags: ['#가입이탈정체', '#타겟팅진단', '#CRO'],
    quote: '저희 솔루션의 기능과 기술력은 정말 자신 있거든요. 그런데 막상 홈페이지에 들어온 잠재 고객들이 가입 단계에서 다 이탈해 버려요. 타겟팅 설계가 잘못된 건지, 전환 동선에 문제가 있는 건지 도무지 감이 안 오네요...',
  },
  {
    avatarUrl: 'https://randomuser.me/api/portraits/women/27.jpg',
    name: '이지현',
    role: '로컬 에스테틱 원장 (40대)',
    hashtags: ['#USP발굴', '#차별화오퍼', '#패키지설계'],
    quote: '인근에 경쟁 뷰티숍들이 우후죽순 생기면서 가격 출혈 경쟁만 치열해졌어요. 우리 숍만의 확실한 강점(USP)을 보여주고 싶은데, 단순 할인 이벤트 외에 매력적인 오퍼와 패키지를 어떻게 짜서 올릴지 막막해요.',
  },
  {
    avatarUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
    name: '박지훈',
    role: '이커머스 브랜드 대표 (30대)',
    hashtags: ['#밑빠진독광고비', '#전환율부족', '#광고최적화'],
    quote: '인스타그램 광고랑 구글 키워드 광고에 매달 수백만 원씩 태우고 있습니다. 방문자 수는 제법 나오는데, 실제 구매 주문으로 이어지는 전환율이 너무 낮아요. 광고비를 더 쓰기 전에 전환 퍼널의 문제점을 짚고 싶습니다.',
  },
  {
    avatarUrl: 'https://randomuser.me/api/portraits/men/92.jpg',
    name: '최영호',
    role: '전문 서비스업 대표 (50대)',
    hashtags: ['#구글비즈니스', '#지도노출', '#SEO'],
    quote: '구글에 업체명을 치면 저희 구글 지도 프로필이 나오긴 하는데, 순위가 너무 뒤에 밀려 있어요. 전화 문의를 늘리고 싶은데 홈페이지랑 지도 노출 상태 중 도대체 어떤 것부터 손대야 할지 전문가의 조언이 필요합니다.',
  },
];



const AIReport = () => {
  const serviceJsonLd = createServiceJsonLd({
    name: 'GoodmanSEO AI 비즈니스 컨설팅 리포트',
    description:
      '사업 방향, 타겟 고객, 경쟁 구도, 홈페이지 구조, 실행 우선순위를 정리하는 PDF 비즈니스 컨설팅 리포트 서비스입니다.',
    path: '/ai-report',
    serviceType: 'AI business consulting report',
  });

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#f2fafb] via-white to-[#ecf6f8] pt-20 text-[#0f2230]">
      <Seo
        title="AI 비즈니스 컨설팅 리포트"
        description="GoodmanSEO AI 리포트는 사업 방향, 타겟 고객, 경쟁 구도, 홈페이지 구조 및 실행 우선순위를 3영업일 내 PDF로 정리합니다."
        path="/ai-report"
        keywords={['AI 비즈니스 컨설팅', '비즈니스 리포트', '사업 진단', '경쟁사 분석', '타겟 고객 분석', '로컬 비즈니스']}
        jsonLd={[organizationJsonLd, serviceJsonLd]}
      />

      <section className="relative max-w-none overflow-hidden px-6 py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(0,122,140,0.13),transparent_34%),radial-gradient(circle_at_18%_96%,rgba(0,91,112,0.08),transparent_34%)]" />
        <div className="container relative z-10">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.68, ease }}
              className="max-w-4xl"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-black text-[#007a8c] shadow-sm ring-1 ring-[#d6ecef]">
                  <Sparkles size={14} />
                  압도적인 성장을 위한 AI 비즈니스 진단 리포트
                </span>
                <span className="rounded-full border border-[#cce7eb] bg-[#f7fbfc] px-3.5 py-1.5 text-xs font-bold text-[#4e6170]">
                  PDF + 3영업일
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-[clamp(2.25rem,4.6vw,4.25rem)] font-black leading-[1.08] tracking-[-0.04em] text-[#0f2230]">
                막막한 내 비즈니스,
                <br />
                AI 데이터 분석으로
                <br />
                <span className="text-[#007a8c]">3일 만에 해답을 찾으세요.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base font-medium leading-[1.8] text-[#4e6170]">
                수백만 원대 컨설팅에 가까운 분석 깊이를, AI 비즈니스 리포트로 제공합니다. 현재 상태와 성장 방향을 3영업일 내 PDF로 정리해드립니다.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact?type=ai-report-standard" className="primary-button px-6 py-3 text-base">
                  내 비즈니스 진단 시작하기
                  <ArrowRight size={18} />
                </Link>
                <Link to="/pricing#diagnostics" className="secondary-button px-6 py-3 text-base">
                  서비스 가격 보기
                </Link>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.68, delay: 0.12, ease }}
              className="rounded-2xl border border-[#cce7eb] bg-white p-5 shadow-[0_18px_44px_rgba(0,91,112,0.07)]"
            >
              <div className="rounded-xl bg-[#f2fafb] p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.12em] text-[#007a8c]">Report</p>
                    <h2 className="mt-2 text-2xl font-black tracking-[-0.04em]">AI 비즈니스 핵심 진단 리포트</h2>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#007a8c] shadow-sm">
                    <ClipboardCheck size={24} />
                  </span>
                </div>

                <div className="mt-6 grid gap-3">
                  {[
                    ['고객', '구매 가능성이 가장 높은 핵심 타겟 분석'],
                    ['경쟁', '경쟁사를 압도하는 차별화 강점(USP) 발굴'],
                    ['실행', '당장 매출을 끌어올리는 우선순위 액션 플랜'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between gap-4 rounded-lg bg-white px-4 py-3 text-sm">
                      <span className="font-black text-[#0f2230]">{label}</span>
                      <span className="text-right font-semibold text-[#4e6170]">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-xl border border-[#dbecef] bg-white p-4">
                <Lock size={20} className="mt-0.5 shrink-0 text-[#007a8c]" />
                <p className="text-sm font-semibold leading-relaxed text-[#4e6170]">
                  고객님의 모든 비즈니스 데이터는 철저히 보안 유지되며, 리포트 분석 및 맞춤형 컨설팅 목적으로만 안전하게 활용됩니다.
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>



      <section className="max-w-none px-6 py-14 md:py-24">
        <div className="container">
          <div className="section-heading text-center">
            <h2 className="mx-auto max-w-3xl text-[clamp(2rem,3.5vw,3.2rem)] font-black leading-tight tracking-[-0.04em]">
              상품 안내
            </h2>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {packages.map((item, index) => (
              <motion.article
                key={item.title}
                {...fadeUp(index * 0.06)}
                className={`${item.featured ? 'pricing-spotlight ring-2 ring-[#007a8c]/20' : 'feature-card'} flex h-full flex-col bg-white`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="pricing-card-title">{item.title}</p>
                    </div>
                    {item.featured ? (
                      <span className="rounded-full bg-[#007a8c] px-3 py-1 text-xs font-black text-white">
                        추천
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-5 text-3xl font-black tracking-[-0.04em] text-[#0f2230]">{item.price}</p>
                  {item.desc ? (
                    <p className="mt-3 text-sm font-bold leading-relaxed text-[#4e6170]">{item.desc}</p>
                  ) : null}

                  <div className={`${item.desc ? 'mt-5' : 'mt-6'} grid gap-3`}>
                    {item.points.map((point) => (
                      <div key={`${item.title}-${point}`} className="benefit-row bg-[#fbfdfd]">
                        <CheckCircle2 size={16} className="shrink-0 text-[#007a8c]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link to={item.href} className={`${item.featured ? 'primary-button' : 'secondary-button'} mt-7 w-full py-3`}>
                  {item.title} 문의하기
                  <ArrowRight size={16} />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-none border-y border-[#d8ecef] bg-[#f7fbfc] px-6 py-14 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-black text-[#007a8c] ring-1 ring-[#d6ecef]">
              <Target size={14} />
              추천 대상
            </span>
            <h2 className="mt-5 text-[clamp(2rem,3.2vw,3rem)] font-black leading-tight tracking-[-0.04em]">
              지금 이런 고민으로 답답하지 않으신가요?
            </h2>
            <p className="mt-4 text-base font-medium text-[#4e6170]">
              GoodmanSEO AI 진단 리포트가 필요한 대표님들의 실제 현장 목소리입니다.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {linkedInPersonas.map((persona, index) => (
              <motion.article
                key={persona.name}
                {...fadeUp(index * 0.06)}
                className="rounded-2xl border border-[#cce7eb] bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <img
                      src={persona.avatarUrl}
                      alt={persona.name}
                      className="h-11 w-11 shrink-0 rounded-full object-cover border border-[#cce7eb]"
                    />
                    <div>
                      <div className="flex items-center">
                        <span className="text-sm font-black text-[#0f2230]">{persona.name}</span>
                        <span className="ml-2 rounded bg-[#f0f4f7] px-1.5 py-0.5 text-[9px] font-bold text-[#4e6170]">
                          1st
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#4e6170] mt-0.5">{persona.role}</p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm font-semibold leading-relaxed text-[#334756] pl-3.5 border-l-2 border-[#007a8c]/30 italic">
                    "{persona.quote}"
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#f2fafb] flex flex-wrap gap-1.5">
                  {persona.hashtags.map((tag) => (
                    <span key={tag} className="text-xs font-bold text-[#007a8c]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-none border-t border-[#d8ecef] bg-white px-6 py-14 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#f2fafb] px-3.5 py-1.5 text-xs font-black text-[#007a8c] ring-1 ring-[#d6ecef]">
              <FileText size={14} />
              상세 진행 안내
            </span>
            <h2 className="mt-5 text-[clamp(2rem,3.2vw,3rem)] font-black leading-tight tracking-[-0.04em]">
              리포트 제공 및 전달 프로세스
            </h2>
            <p className="mt-4 text-base font-medium text-[#4e6170]">
              신청 시 작성하시는 정보와 최종 수령하시는 분석 리포트의 상세 구성을 투명하게 확인해보세요.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-2">
            {/* Input Card */}
            <motion.div {...fadeUp(0.06)} className="feature-card bg-[#f7fbfc] p-6 rounded-2xl border border-[#cce7eb]">
              <h3 className="text-lg font-black text-[#0f2230] border-b border-[#cce7eb] pb-3.5 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#e6f4f6] text-[#007a8c] text-xs font-black">
                    IN
                  </span>
                  대표님이 제공해주실 정보
                </span>
                <span className="text-xs text-[#007a8c] font-bold">주문 시 작성 폼 정보</span>
              </h3>
              
              <div className="mt-6">
                <h4 className="text-sm font-black text-[#0f2230] flex items-center gap-2 mb-3">
                  <span className="rounded bg-[#007a8c] px-1.5 py-0.5 text-[10px] font-bold text-white">필수 항목</span>
                  진단을 위해 반드시 필요한 정보
                </h4>
                <ul className="grid gap-2">
                  {[
                    '웹사이트 URL',
                    '사업명 / 회사명',
                    '업종',
                    '주요 제품/서비스',
                    '주요 타겟 고객',
                  ].map((title) => (
                    <li key={title} className="flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 shadow-sm border border-[#e6f2f4] text-sm font-black text-[#0f2230]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#007a8c] shrink-0" />
                      {title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="text-sm font-black text-[#0f2230] flex items-center gap-2 mb-3">
                  <span className="rounded bg-[#4e6170] px-1.5 py-0.5 text-[10px] font-bold text-white">선택 항목</span>
                  리포트 분석 품질을 높이는 정보
                </h4>
                <ul className="grid gap-2">
                  {[
                    '현재 가장 큰 고민 / 목표',
                    '경쟁사 URL (최대 3개)',
                    '분석 중점 영역',
                    '사업 단계',
                  ].map((title) => (
                    <li key={title} className="flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 shadow-sm border border-[#e6f2f4] text-sm font-black text-[#4e6170]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#4e6170] shrink-0" />
                      {title}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Output Card */}
            <motion.div {...fadeUp(0.12)} className="feature-card bg-[#f7fbfc] p-6 rounded-2xl border border-[#cce7eb] ring-1 ring-[#007a8c]/5">
              <h3 className="text-lg font-black text-[#0f2230] border-b border-[#cce7eb] pb-3.5 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#007a8c] text-white text-xs font-black">
                    OUT
                  </span>
                  리포트에 담겨 제공되는 정보
                </span>
                <span className="text-xs text-[#007a8c] font-bold">Standard 표준 기준</span>
              </h3>
              
              <div className="mt-6 space-y-2">
                {[
                  '1. 요약 (Executive Summary)',
                  '2. 홈페이지 진단 (Website Analysis)',
                  '3. 비즈니스 진단 (Business Analysis)',
                  '4. 종합 진단 & 병목 분석',
                  '5. 우선순위 개선 로드맵',
                  '6. 구체적 실행 추천 (Action Items)',
                ].map((title) => (
                  <div key={title} className="flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 shadow-sm border border-[#e6f2f4] text-sm font-black text-[#0f2230]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#007a8c] shrink-0" />
                    {title}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>



          <motion.div {...fadeUp(0.18)} className="mx-auto mt-12 max-w-4xl text-center">
            <p className="text-sm font-bold text-[#4e6170]">
              💡 샘플 리포트 PDF가 필요하신 대표님은 문의 양식을 남겨주시거나 아래 이메일로 연락 주시면 즉시 송부해 드립니다.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-none px-6 pb-20 pt-6 md:pb-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mt-12 text-center"
          >
            <p className="text-[0.93rem] font-semibold text-[#556877] mb-5">
              지금 문의를 남기고 우리 비즈니스에 필요한 맞춤형 진단을 시작해보세요.
            </p>
            <Link
              to="/contact?type=ai-report-standard"
              className="inline-flex items-center gap-2 rounded-full bg-[#007a8c] text-white px-8 py-3.5 text-[0.95rem] font-bold hover:bg-[#006270] transition-all shadow-[0_12px_24px_rgba(0,122,140,0.12)] hover:-translate-y-0.5"
            >
              내 비즈니스 진단 시작하기
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIReport;
