import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheckBig, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';

const ease = [0.16, 1, 0.3, 1];

const diagnostics = [
  {
    title: 'AI 진단',
    price: 'AUD 149',
    priceNote: '1회 결제',
    description:
      '홈페이지와 구글 비즈니스, 기본 SEO 상태를 조금 더 깊게 확인합니다.',
    points: ['무료 점검 항목 전체 포함', '홈페이지 첫인상 및 문의 흐름 점검', 'Google Business Profile 기본 정보 점검', 'On-page SEO 주요 항목 점검', '모바일 사용성과 속도 기본 점검'],
    cta: 'AI 진단 신청하기',
    href: '/contact?type=quick-diagnosis',
  },
];

const freeCheckCard = {
  title: '무료 점검',
  price: '무료',
  priceNote: '기본 확인',
  description: '홈페이지와 구글 비즈니스, 기본 SEO 상태를 간단히 확인합니다.',
  points: ['홈페이지 접속 확인', '모바일 화면 기본 확인', 'Google Business Profile 등록 여부 확인', '기본 SEO 체크'],
  cta: '무료 점검 신청하기',
  href: '/contact?type=free-check',
};

const websitePackages = [
  {
    title: '스타터 홈페이지',
    originalPrice: 'AUD 1,095',
    price: 'AUD 795',
    priceNote: '1회 결제',
    promoLabel: '2026년 런칭 프로모션',
    label: '핵심 기능 위주의 합리적인 패키지',
    description: '매장/회사 소개와 고객 문의 폼 등 꼭 필요한 필수 페이지 위주로 빠르게 오픈할 수 있는 기본 홈페이지입니다.',
    points: ['핵심 메뉴 구성 (최대 3페이지)', '소개 및 문의 연동 레이아웃', '구글 검색 기본 최적화(SEO) 반영', 'AUD 300 상당 구글 지도 세팅 무료 포함'],
    cta: '스타터 패키지 문의하기',
    href: '/contact?type=starter-homepage',
  },
  {
    title: '비즈니스 홈페이지',
    price: 'AUD 1,890',
    priceNote: '1회 결제',
    label: '문의 흐름까지 정리하는 추천 패키지',
    description: '회사/매장 소개뿐 아니라 구글 지도 최적화 노출, 상세 서비스 안내 및 전화/이메일 자동 문의 연동까지 완비한 최적의 비즈니스 웹사이트입니다.',
    points: ['상세 메뉴 구성 (최대 7페이지)', '구글 지도 노출을 고려한 기본 세팅', '전화 · 이메일 문의 연동 자동화', '기본 소셜 링크 연결 지원'],
    cta: '비즈니스 패키지 문의하기',
    href: '/contact?type=business-homepage',
  },
  {
    title: '성장형 홈페이지',
    price: 'AUD 3,500',
    priceNote: '1회 결제',
    label: '검색 노출 극대화 패키지',
    description: '온라인 노출 경쟁이 치열한 비즈니스를 위해 홈페이지 제작은 물론 구글 상위 노출(SEO) 기본 세팅과 AI 자동화 연동까지 종합적으로 지원합니다.',
    points: ['대규모 콘텐츠 구성 (10페이지 이상)', '비즈니스 홈페이지 요금제 혜택 전부 포함', 'SEO All-in-One 패키지 기본 탑재', '기본 소셜 링크 연결 지원', '3개월 동안 AI 기반 고객 응대 관리 지원'],
    cta: '성장형 패키지 문의하기',
    href: '/contact?type=growth-homepage',
  },
];

const seoPackages = [
  {
    title: 'SEO All-in-One 스타트 패키지',
    price: 'AUD 950',
    priceNote: '1회 결제',
    description: '검색 노출을 위한 기본 세팅을 한 번에 잡고 싶은 경우 선택할 수 있습니다. AI 진단 포함.',
    points: ['AI 진단 포함', '지금 먼저 고쳐야 할 SEO 문제 정리', '메인 키워드 정리', '메타 타이틀 · 설명 기본 세팅', '검색 노출을 위한 기본 구조 점검'],
    cta: 'SEO All-in-One 스타트 패키지 문의하기',
    href: '/contact?type=seo-start-package',
  },
  {
    title: 'SEO 월관리',
    price: 'AUD 795 / month',
    priceNote: '월간 관리',
    description: '초기 세팅 이후 검색 노출 작업을 꾸준히 이어가고 싶은 경우 적합합니다.',
    points: ['매달 우선순위 점검', '페이지와 콘텐츠 보완', '검색 노출 작업 지속 관리'],
    cta: 'SEO 월관리 문의하기',
    href: '/contact?type=seo-monthly',
  },
];

const gbpPackages = [
  {
    title: '구글 비즈니스 프로필',
    price: 'AUD 300',
    priceNote: '1회 세팅',
    description: '홈페이지를 새로 만들기 전에 구글에서 보이는 정보와 기본 신뢰도를 먼저 정리하고 싶은 경우 적합합니다.',
    points: [
      '구글 비즈니스 프로필 최적화 세팅',
      '구글 지도 검색 노출 최적화',
      '유지 관리 추가 시: AUD 95 / month (업데이트 및 관리 지속)'
    ],
    cta: '구글 비즈니스 프로필 문의하기',
    href: '/contact?type=gbp-setup',
  },
];

const faqItems = [
  {
    question: '작업 진행까지 기간은 얼마나 걸리나요?',
    answer: 'AI 진단은 보통 2~3 영업일이 소요됩니다. 홈페이지 제작은 스타터 홈페이지의 경우 2~3주, 비즈니스 홈페이지는 4~6주 정도 예상해 주시면 됩니다. 원활한 피드백 소통 시 일정이 더 단축될 수 있습니다.',
  },
  {
    question: '수정 요청은 몇 번까지 가능한가요?',
    answer: '디자인 및 구조적 수정 피드백은 공식적으로 총 3회 무료로 진행됩니다. 작업 완료 이후 사소한 텍스트 변경이나 이미지 교체는 1개월 동안 무상으로 가볍게 수정해 드리고 있으니 걱정하지 않으셔도 됩니다.',
  },
  {
    question: '대금 결제는 어떻게 진행되나요?',
    answer: '진단 프로그램은 선결제로 진행되며, 홈페이지 제작 등 대규모 프로젝트는 계약 시 50%, 최종 검수 완료 시 50% 분할 결제로 안전하게 나누어 진행합니다. 세부 조율이 필요하신 경우 사전 미팅 때 조율해 드립니다.',
  },
  {
    question: '중도 취소 시 환불 정책은 어떻게 되나요?',
    answer: '작업 착수 이전에는 100% 전액 환불해 드립니다. 작업이 진행된 이후에는 기획, 디자인 시안 등 작업의 진척 단계와 투입 공수에 따라 합리적으로 협의하여 부분 환불을 진행합니다.',
  },
  {
    question: '호주가 아닌 국가에서도 서비스 이용이 가능한가요?',
    answer: '네, 가능합니다. GoodmanSEO는 온라인 비즈니스를 점검하기 때문에 지역에 상관없이 100% 비대면 온라인으로 원활히 소통하며 진행할 수 있습니다. 영문/한글 서비스 대응 모두 지원합니다.',
  },
];

const PriceDisplay = ({ item }) => (
  <div className="mt-3">
    {item.promoLabel && (
      <p className="inline-flex rounded-full border border-[#005b70]/15 bg-[#005b70]/5 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#007a8c] mb-2">
        {item.promoLabel}
      </p>
    )}
    <div className="flex items-baseline gap-2">
      <p className="text-[1.25rem] font-bold tracking-[-0.03em] text-[#0f2230]">
        {item.price}
      </p>
      {item.originalPrice && (
        <span className="text-xs font-semibold text-[#7c8f9f] line-through opacity-80">
          {item.originalPrice}
        </span>
      )}
    </div>
    {item.priceNote && (
      <p className="mt-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.05em] text-[#7c8f9f]">
        {item.priceNote}
      </p>
    )}
  </div>
);

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="py-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left py-4 transition-colors hover:text-[#007a8c] group border-b border-[#e1f1f2]"
      >
        <span className="text-[0.95rem] font-semibold tracking-[-0.02em] text-[#0f2230] group-hover:text-[#007a8c] transition-colors">{question}</span>
        <ChevronDown 
          size={18} 
          className={`text-[#007a8c] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[0.92rem] leading-[1.7] text-[#4e6170] py-4 pl-1">
          {answer}
        </p>
      </div>
    </div>
  );
};

const WebPricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#f2fafb] via-white to-[#ecf6f8] pt-24 pb-16 text-[#0f2230]">
      <Seo
        title="서비스 및 가격"
        description="무료 점검, AI 진단, 홈페이지 제작, SEO 패키지, 구글 비즈니스 프로필, 추가 관리까지 GoodmanSEO의 서비스와 가격을 한눈에 확인할 수 있습니다."
        path="/pricing"
        keywords={['서비스 및 가격', '무료 점검', 'AI 진단', '비즈니스 홈페이지', 'SEO 패키지', '구글 비즈니스 프로필']}
      />

      <div className="container">

        {/* ── Hero 영역 ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="section-heading text-center max-w-4xl mx-auto mb-12 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#e6f4f6] to-[#d2ebef] border border-[#bce2e7] px-3.5 py-1 text-[0.78rem] font-bold text-[#007a8c] mb-5 mx-auto shadow-[0_2px_8px_rgba(0,122,140,0.04)]">
            서비스
          </div>
          <h1 className="text-[clamp(2.3rem,4.5vw,3.6rem)] font-black leading-[1.15] tracking-[-0.04em] text-[#0f2230] text-balance">
            검색과 문의를 위한
            <br />
            <span className="text-[#007a8c]">홈페이지</span> 기본 세팅
          </h1>
          <p className="mt-5 text-[1.05rem] leading-[1.75] text-[#556877] font-medium max-w-xl mx-auto text-pretty">
            홈페이지 제작, 구글 비즈니스, On-page SEO를 필요한 범위에 맞춰 정리합니다.
          </p>
        </motion.div>

        {/* 1. 홈페이지 제작 */}
        <section id="website-packages" className="section-block !min-h-0 px-0">
          <div className="w-full">
            <div className="section-heading text-center">
              <h2 className="section-title mx-auto">홈페이지 제작</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {websitePackages.map((item, index) => (
                <article key={item.title} className={`${index === 1 ? 'pricing-spotlight' : 'feature-card'} flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,122,140,0.06)]`}>
                  <div>
                    <p className="pricing-card-title">{item.title}</p>
                    {index === 1 && (
                      <p className="mt-3 inline-flex rounded-full border border-[#007a8c]/30 bg-[#007a8c]/10 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.08em] text-[#007a8c]">
                        가장 많이 선택하는 패키지
                      </p>
                    )}
                    <PriceDisplay item={item} />
                    <div className="mt-6 grid gap-3">
                      {item.points.map((point) => (
                        <div key={`${item.title}-${point}`} className="benefit-row">
                          <CircleCheckBig size={16} className="text-accent-primary" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link to="/contact?type=starter-homepage" className="primary-button">
                홈페이지 제작 문의하기
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* 2. 점검 · 진단 */}
        <section id="diagnostics" className="section-block !min-h-0 px-0 mt-12">
          <div className="w-full">
            <div className="section-heading text-center">
              <h2 className="section-title mx-auto">점검 · 진단</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[freeCheckCard, ...diagnostics].map((item) => (
                <article key={item.title} className="feature-card flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,122,140,0.04)]">
                  <div>
                    <p className="pricing-card-title">{item.title}</p>
                    <PriceDisplay item={item} />
                    <div className="mt-6 grid gap-3">
                      {item.points.map((point) => (
                        <div key={`${item.title}-${point}`} className="benefit-row">
                          <CircleCheckBig size={16} className="text-accent-primary" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link to="/contact?type=free-check" className="primary-button">
                무료 점검 및 진단 신청하기
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. SEO & Google Business */}
        <section id="seo-marketing" className="section-block !min-h-0 px-0 mt-12">
          <div className="w-full">
            <div className="section-heading text-center">
              <h2 className="section-title mx-auto">SEO & 구글 비즈니스</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[...seoPackages, ...gbpPackages].map((item) => (
                <article key={item.title} className="soft-panel flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,122,140,0.04)]">
                  <div>
                    <p className="pricing-card-title">{item.title}</p>
                    <PriceDisplay item={item} />
                    {item.points && (
                      <div className="mt-6 grid gap-3">
                        {item.points.map((point) => (
                          <div key={point} className="benefit-row">
                            <CircleCheckBig size={16} className="text-accent-primary" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <Link to="/contact?type=seo-start-package" className="primary-button">
                SEO 및 구글 비즈니스 문의하기
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. 자주 묻는 질문 */}
        <section className="section-block !min-h-0 px-0 mt-12">
          <div className="w-full max-w-5xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr] lg:items-center">
              
              {/* 좌측 타이틀 & 일러스트 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <h2 className="text-[2rem] font-black tracking-[-0.04em] text-[#0f2230]">자주 묻는 질문</h2>
                <p className="mt-2 text-[0.95rem] text-[#556877] font-semibold leading-relaxed">
                  많이 궁금해하시는 내용을
                  <br />
                  모아두었습니다.
                </p>

                {/* 로봇 데코레이션 일러스트 */}
                <div className="mt-8 relative flex flex-col items-center lg:items-start pl-2">
                  <div className="relative flex flex-col items-center">
                    {/* 메탈릭 로봇 얼굴 (CSS/SVG 구현) */}
                    <div className="relative h-28 w-28 flex items-center justify-center">
                      
                      {/* 머리 뒤쪽 광채 효과 */}
                      <div className="absolute h-24 w-24 rounded-full bg-[#007a8c]/10 blur-xl" />

                      {/* 둥근 로봇 헤드 */}
                      <div className="h-24 w-24 rounded-full bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] border-2 border-white shadow-[0_12px_24px_rgba(0,0,0,0.06),inset_0_-4px_8px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center p-3 relative z-10">
                        
                        {/* 귀/헤드셋 파트 */}
                        <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-2.5 h-6 rounded-r-md bg-[#cbd5e1] border-l border-white" />
                        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-6 rounded-l-md bg-[#cbd5e1] border-r border-white" />

                        {/* 눈 부분 디스플레이 */}
                        <div className="w-[72px] h-[34px] rounded-2xl bg-[#0f172a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] flex items-center justify-center gap-2.5 p-1 mt-1">
                          {/* 푸른 빛 눈 LED */}
                          <motion.div
                            animate={{ scaleY: [1, 0.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                            className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#00ffff] to-[#00a3ff] shadow-[0_0_8px_#00ffff]"
                          />
                          <motion.div
                            animate={{ scaleY: [1, 0.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                            className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#00ffff] to-[#00a3ff] shadow-[0_0_8px_#00ffff]"
                          />
                        </div>

                        {/* 입 파트 (볼선) */}
                        <div className="w-6 h-1 rounded-full bg-[#cbd5e1] mt-3" />
                      </div>
                    </div>

                    {/* 말풍선 */}
                    <div className="mt-4 bg-white border border-[#e2e8f0] rounded-2xl px-4 py-2.5 shadow-sm text-center relative max-w-[200px]">
                      {/* 말풍선 꼬리 */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-t border-l border-[#e2e8f0]" />
                      <p className="text-[0.78rem] font-bold text-[#556877] leading-relaxed relative z-10">
                        궁금하신 점은 언제든 물어보세요!
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 우측 FAQ 리스트 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease }}
                className="border-t border-[#e1f1f2] px-1"
              >
                {faqItems.map((item) => (
                  <FaqItem key={item.question} question={item.question} answer={item.answer} />
                ))}
              </motion.div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default WebPricing;
