import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheckBig, ChevronDown } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import Seo from '../components/Seo';

const ease = [0.16, 1, 0.3, 1];

const diagnostics = [
  {
    title: 'AI 진단',
    price: 'AUD 149',
    priceNote: '1회 결제',
    description:
      '홈페이지와 구글 비즈니스, 기본 SEO 상태를 조금 더 깊게 확인합니다.',
    points: ['홈페이지 심층 체크', 'Google Business Profile 심층 체크', 'On-page SEO 심층 체크', '모바일/속도 심층 체크'],
    cta: 'AI 진단 신청하기',
    href: '/contact?type=quick-diagnosis',
  },
];

const freeCheckCard = {
  title: '무료 점검',
  price: '무료',
  priceNote: '기본 확인',
  description: '홈페이지와 구글 비즈니스, 기본 SEO 상태를 간단히 확인합니다.',
  points: ['홈페이지 체크', '모바일 화면 체크', 'Google Business Profile 등록 체크', '기본 SEO 체크'],
  cta: '무료 점검 신청하기',
  href: '/contact?type=free-check',
};

const websitePackages = [
  {
    title: '스타터 홈페이지',
    price: 'AUD 1,490',
    priceNote: '1회 결제',
    label: '처음 시작하는 기본 구성',
    description: '소개, 서비스 안내, 문의처럼 꼭 필요한 내용만 담아 빠르게 시작하는 기본 홈페이지입니다.',
    points: ['최대 3페이지 제작', '소개/서비스/문의 구성', '모바일 화면 기본 세팅', '기본 SEO 세팅', 'Analytics / Search Console 기본 등록', 'Google Business Profile 연결 확인', '3개월 온라인 관리 서포트 포함', '호스팅 AUD 49 / month부터 선택 가능', '홈페이지 제작 고객 무료 AI 강의 수강 쿠폰 제공'],
    cta: '스타터 패키지 문의하기',
    href: '/contact?type=starter-homepage',
  },
  {
    title: '비즈니스 홈페이지',
    price: 'AUD 3,500',
    priceNote: '1회 결제',
    label: '페이지가 더 필요한 구성',
    description: '서비스가 여러 개이거나 설명할 내용이 많은 비즈니스를 위한 홈페이지 구성입니다.',
    points: ['최대 7페이지 제작', '상세 서비스 페이지 구성', '전화/이메일/문의폼 연결', '주요 페이지 SEO 정리', 'Google Business Profile 기본 세팅/정리', 'Analytics / Search Console 기본 등록', '기본 소셜 링크 연결 지원', '3개월 온라인 관리 서포트 포함', '호스팅 AUD 49 / month부터 선택 가능', '홈페이지 제작 고객 무료 AI 강의 수강 쿠폰 제공'],
    cta: '비즈니스 패키지 문의하기',
    href: '/contact?type=business-homepage',
  },
  {
    title: '성장형 홈페이지',
    price: 'AUD 6,000~',
    priceNote: '1회 결제',
    label: '콘텐츠가 많은 확장 구성',
    description: '여러 서비스, 지역, 안내 페이지를 넉넉하게 구성해야 하는 비즈니스에 맞는 홈페이지입니다.',
    points: ['10페이지 이상 제작', '비즈니스 홈페이지 항목 포함', 'SEO All-in-One 패키지 포함', 'Google Business Profile 정리', 'Analytics / Search Console 기본 등록', '3개월 온라인 관리 서포트 포함', '호스팅 AUD 49 / month부터 선택 가능', '홈페이지 제작 고객 무료 AI 강의 수강 쿠폰 제공'],
    cta: '성장형 패키지 문의하기',
    href: '/contact?type=growth-homepage',
  },
];

const seoPackages = [
  {
    title: 'SEO All-in-One 스타트 패키지',
    price: 'AUD 1,490',
    priceNote: '1회 결제',
    description: '검색 노출을 위한 기본 세팅을 한 번에 잡고 싶은 경우 선택할 수 있습니다. AI 진단 포함.',
    points: ['AI 진단 포함', '지금 먼저 고쳐야 할 SEO 문제 정리', '메인 키워드 정리', '메타 타이틀 · 설명 기본 세팅', '검색 노출을 위한 기본 구조 점검'],
    cta: 'SEO All-in-One 스타트 패키지 문의하기',
    href: '/contact?type=seo-start-package',
  },
  {
    title: '온라인 관리 서포트',
    price: 'AUD 295 / month',
    priceNote: '월간 서포트',
    description: '홈페이지, 구글 비즈니스, 기본 SEO, 소셜 연결 상태를 매달 가볍게 확인하고 필요한 정리를 돕습니다.',
    points: ['홈페이지 기본 수정/점검', 'Google Business Profile 상태 확인', 'Analytics / Search Console 기본 확인', '기본 SEO 상태 확인', 'SNS 링크/프로필 서포트'],
    cta: '온라인 관리 서포트 문의하기',
    href: '/contact?type=online-support',
  },
];

const carePackages = [
  {
    title: '사이트 케어 Basic',
    price: 'AUD 79 / month',
    priceNote: '월간 기술 관리',
    description: '홈페이지가 열린 뒤 기본 상태 확인과 작은 수정까지 맡기고 싶은 경우 적합합니다.',
    points: ['호스팅/SSL 연결 상태 확인', '기본 백업 및 장애 확인', '월 1회 작은 텍스트/이미지 수정', '도메인 연결 상태 체크'],
    cta: '사이트 케어 문의하기',
    href: '/contact?type=online-support',
  },
  {
    title: '사이트 케어 Plus',
    price: 'AUD 149 / month',
    priceNote: '월간 우선 관리',
    description: '공지, 배너, 사진 교체처럼 운영 중 작은 변경이 자주 필요한 경우 적합합니다.',
    points: ['Basic 항목 포함', '월 2~3회 작은 수정', '공지/배너/이미지 교체 지원', '우선 응대'],
    cta: '사이트 케어 Plus 문의하기',
    href: '/contact?type=online-support',
  },
];

const gbpPackages = [
  {
    title: '구글 비즈니스 프로필 1회 세팅',
    price: 'AUD 490',
    priceNote: '1회 세팅',
    description: '구글 검색과 지도에 보이는 기본 정보를 한 번 정리하고 싶은 경우 적합합니다.',
    points: [
      'Google Business Profile 1회 기본 세팅',
      '구글 지도 정보 정리',
      '홈페이지/문의 링크 연결',
      'GBP 유지 서포트: AUD 95 / month'
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
    question: '호스팅이나 도메인 관리도 맡길 수 있나요?',
    answer: '네, 가능합니다. 홈페이지 제작 패키지에서 호스팅은 AUD 49 / month부터 선택할 수 있습니다. 기본 호스팅에는 작은 수정 작업이 포함되지 않으며, 오픈 후 작은 수정과 기본 상태 확인까지 필요하면 사이트 케어 Basic 또는 Plus로 이어갈 수 있습니다.',
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
      <p className="inline-flex rounded-[0.25rem] border border-[#102133]/15 bg-[#102133]/5 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#102133] mb-2">
        {item.promoLabel}
      </p>
    )}
    <div className="flex items-baseline gap-2">
      <p className="text-[1.25rem] font-bold tracking-[-0.03em] text-[#102133]">
        {item.price}
      </p>
      {item.originalPrice && (
        <span className="text-xs font-semibold text-[#687582] line-through opacity-80">
          {item.originalPrice}
        </span>
      )}
    </div>
    {item.priceNote && (
      <p className="mt-0.5 text-[0.68rem] font-semibold uppercase tracking-[0.05em] text-[#687582]">
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
        className="flex w-full items-center justify-between text-left py-4 transition-colors hover:text-[#102133] group border-b border-[#e1f1f2]"
      >
        <span className="text-[0.95rem] font-semibold tracking-[-0.02em] text-[#102133] group-hover:text-[#102133] transition-colors">{question}</span>
        <ChevronDown 
          size={18} 
          className={`text-[#102133] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[0.92rem] leading-[1.7] text-[#44515d] py-4 pl-1">
          {answer}
        </p>
      </div>
    </div>
  );
};

const WebPricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#f7f2ec] via-white to-[#eee7df] pt-24 pb-16 text-[#102133]">
      <Seo
        title="서비스 및 가격"
        description="무료 점검, AI 진단, 홈페이지 제작, SEO 패키지, 구글 비즈니스 프로필, 추가 관리까지 GoodmanSEO의 서비스와 가격을 한눈에 확인할 수 있습니다."
        path="/pricing"
        keywords={['서비스 및 가격', '무료 점검', 'AI 진단', '비즈니스 홈페이지', 'SEO 패키지', '구글 비즈니스 프로필']}
      />

      <div className="container">

        {/* ── Hero 영역 ── */}
        <Motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="section-heading text-center max-w-4xl mx-auto mb-12 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#f1ebe3] to-[#ded8cf] border border-[#d8c8af] px-3.5 py-1 text-[0.78rem] font-bold text-[#102133] mb-5 mx-auto shadow-[0_2px_8px_rgba(16,33,51,0.04)]">
            서비스
          </div>
          <h1 className="text-[clamp(2.3rem,4.5vw,3.6rem)] font-black leading-[1.15] tracking-[-0.04em] text-[#102133] text-balance">
            검색과 문의를 위한
            <br />
            <span className="text-[#102133]">홈페이지</span> 기본 세팅
          </h1>
          <p className="mt-5 text-[1.05rem] leading-[1.75] text-[#44515d] font-medium max-w-xl mx-auto text-pretty">
            홈페이지 제작, 구글 비즈니스, On-page SEO를 필요한 범위에 맞춰 정리합니다.
          </p>
        </Motion.div>

        {/* 1. 홈페이지 제작 */}
        <section id="website-packages" className="section-block !min-h-0 px-0">
          <div className="w-full">
            <div className="section-heading text-center">
              <h2 className="section-title mx-auto">홈페이지 제작</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {websitePackages.map((item, index) => (
                <article key={item.title} className={`${index === 1 ? 'pricing-spotlight' : 'feature-card'} flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(16,33,51,0.06)]`}>
                  <div>
                    <p className="pricing-card-title">{item.title}</p>
                    {index === 1 && (
                      <p className="mt-3 inline-flex rounded-[0.25rem] border border-[#102133]/30 bg-[#102133]/10 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.08em] text-[#102133]">
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

        {/* 2. 사이트 케어 */}
        <section id="site-care" className="section-block !min-h-0 px-0 mt-12">
          <div className="w-full">
            <div className="section-heading text-center">
              <h2 className="section-title mx-auto">사이트 케어</h2>
              <p className="section-copy mx-auto">
                홈페이지 오픈 후 기본 상태 확인과 작은 수정이 필요할 때 선택할 수 있습니다.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {carePackages.map((item) => (
                <article key={item.title} className="soft-panel flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(16,33,51,0.04)]">
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
              <Link to="/contact?type=online-support" className="primary-button">
                사이트 케어 문의하기
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* 3. 점검 · 진단 */}
        <section id="diagnostics" className="section-block !min-h-0 px-0 mt-12">
          <div className="w-full">
            <div className="section-heading text-center">
              <h2 className="section-title mx-auto">점검 · 진단</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[freeCheckCard, ...diagnostics].map((item) => (
                <article key={item.title} className="feature-card flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(16,33,51,0.04)]">
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

        {/* 4. SEO & Google Business */}
        <section id="seo-marketing" className="section-block !min-h-0 px-0 mt-12">
          <div className="w-full">
            <div className="section-heading text-center">
              <h2 className="section-title mx-auto">SEO & 구글 비즈니스</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[...seoPackages, ...gbpPackages].map((item) => (
                <article key={item.title} className="soft-panel flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(16,33,51,0.04)]">
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
              <Motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <h2 className="text-[2rem] font-black tracking-[-0.04em] text-[#102133]">자주 묻는 질문</h2>
                <p className="mt-2 text-[0.95rem] text-[#44515d] font-semibold leading-relaxed">
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
                      <div className="absolute h-24 w-24 rounded-[0.25rem] bg-[#102133]/10 blur-xl" />

                      {/* 둥근 로봇 헤드 */}
                      <div className="h-24 w-24 rounded-full bg-gradient-to-b from-[#f7f2ec] to-[#ded8cf] border-2 border-white shadow-[0_12px_24px_rgba(0,0,0,0.06),inset_0_-4px_8px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center p-3 relative z-10">
                        
                        {/* 귀/헤드셋 파트 */}
                        <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-2.5 h-6 rounded-r-md bg-[#c9bfae] border-l border-white" />
                        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-6 rounded-l-md bg-[#c9bfae] border-r border-white" />

                        {/* 눈 부분 디스플레이 */}
                        <div className="w-[72px] h-[34px] rounded-[0.7rem] bg-[#0f172a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] flex items-center justify-center gap-2.5 p-1 mt-1">
                          {/* 푸른 빛 눈 LED */}
                          <Motion.div
                            animate={{ scaleY: [1, 0.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                            className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#d8c8af] to-[#c9b99a] shadow-[0_0_8px_#d8c8af]"
                          />
                          <Motion.div
                            animate={{ scaleY: [1, 0.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                            className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#d8c8af] to-[#c9b99a] shadow-[0_0_8px_#d8c8af]"
                          />
                        </div>

                        {/* 입 파트 (볼선) */}
                        <div className="w-6 h-1 rounded-full bg-[#c9bfae] mt-3" />
                      </div>
                    </div>

                    {/* 말풍선 */}
                    <div className="mt-4 bg-white border border-[#ded8cf] rounded-[0.7rem] px-4 py-2.5 shadow-sm text-center relative max-w-[200px]">
                      {/* 말풍선 꼬리 */}
                      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-t border-l border-[#ded8cf]" />
                      <p className="text-[0.78rem] font-bold text-[#44515d] leading-relaxed relative z-10">
                        궁금하신 점은 언제든 물어보세요!
                      </p>
                    </div>
                  </div>
                </div>
              </Motion.div>

              {/* 우측 FAQ 리스트 */}
              <Motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease }}
                className="border-t border-[#e1f1f2] px-1"
              >
                {faqItems.map((item) => (
                  <FaqItem key={item.question} question={item.question} answer={item.answer} />
                ))}
              </Motion.div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default WebPricing;
