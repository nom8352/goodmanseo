import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheckBig } from 'lucide-react';
import Seo from '../components/Seo';

const diagnostics = [
  {
    title: '퀵 진단',
    price: 'AUD 149',
    priceNote: '1회 결제',
    description:
      '홈페이지, 구글 비즈니스 프로필, 온페이지 SEO를 먼저 점검하고 지금 가장 먼저 손봐야 할 핵심 문제를 정리합니다.',
    points: ['홈페이지 상태 분석', '구글 비즈니스 프로필 분석', '온페이지 SEO 기본 분석', '핵심 문제 1~3개 정리'],
    cta: '퀵 진단 문의하기',
    href: '/contact?type=quick-diagnosis',
  },
  {
    title: '온라인 올인원 진단',
    price: 'AUD 289',
    priceNote: '1회 결제',
    description:
      '퀵 진단 범위에 더해 인스타그램, 페이스북, 비즈니스 포지셔닝까지 함께 보고 채널 전체 흐름을 더 자세히 정리합니다.',
    points: ['퀵 진단 전체 포함', '인스타그램 · 페이스북 분석', '비즈니스 포지셔닝 점검', '채널 간 일관성 확인'],
    cta: '온라인 올인원 진단 문의하기',
    href: '/contact?type=all-in-one-diagnosis',
  },
];

const websitePackages = [
  {
    title: '스타터 홈페이지',
    originalPrice: 'AUD 1,095',
    price: 'AUD 795',
    priceNote: '1회 결제',
    label: '가볍게 시작하는 패키지',
    description: '가게 소개와 문의 연결이 먼저 필요한 경우 가장 가볍게 시작할 수 있는 기본 홈페이지입니다.',
    points: ['최대 3페이지', '기본 홈페이지 구성', '로컬 SEO 포함', 'AUD 300 상당 구글 비즈니스 프로필 세팅 포함'],
    cta: '스타터 홈페이지 문의하기',
    href: '/contact?type=starter-homepage',
  },
  {
    title: '비즈니스 홈페이지',
    price: 'AUD 1,890',
    priceNote: '1회 결제',
    label: '메인 실행 패키지',
    description: '서비스 소개, 검색 노출, 구글 비즈니스 프로필 연결까지 함께 정리하고 싶은 경우에 적합합니다.',
    points: ['최대 10페이지', '로컬 SEO 포함', '구글 비즈니스 프로필 포함', '원할 경우 인스타그램 · 페이스북 세팅 포함'],
    cta: '비즈니스 홈페이지 문의하기',
    href: '/contact?type=business-homepage',
  },
  {
    title: '성장형 홈페이지',
    price: 'AUD 3,500',
    priceNote: '1회 결제',
    label: '확장형 패키지',
    description: '홈페이지 제작과 검색 기본 세팅을 한 번에 잡고 싶은 경우에 적합합니다.',
    points: ['10페이지 이상', '비즈니스 홈페이지 범위 포함', 'SEO All-in-One 패키지 포함', 'AI 관리 지원 3개월 포함'],
    cta: '성장형 홈페이지 문의하기',
    href: '/contact?type=growth-homepage',
  },
];

const websiteComparisonRows = [
  {
    label: '추천',
    values: ['가볍게 시작', '메인 실행', '확장 운영'],
  },
  {
    label: '페이지 수',
    values: ['최대 3페이지', '최대 10페이지', '10페이지 이상'],
  },
  {
    label: '홈페이지 구성',
    values: ['기본 구성', '확장 구성', '맞춤 확장'],
  },
  {
    label: '구글 비즈니스 프로필',
    values: ['포함', '포함', '포함'],
  },
  {
    label: '로컬 SEO',
    values: ['포함', '포함', '포함'],
  },
  {
    label: 'SEO 스타트 패키지',
    values: ['-', '-', '포함'],
  },
  {
    label: 'AI 관리 지원',
    values: ['-', '-', '3개월 포함'],
  },
];

const seoPackages = [
  {
    title: 'SEO All-in-One 스타트 패키지',
    price: 'AUD 950',
    priceNote: '1회 결제',
    description: '검색 노출을 위한 기본 세팅을 한 번에 잡고 싶은 경우 선택할 수 있습니다. 유료진단 포함.',
    points: ['유료진단 포함', '지금 먼저 고쳐야 할 SEO 문제 정리', '메인 키워드 정리', '메타 타이틀 · 설명 기본 세팅', '검색 노출을 위한 기본 구조 점검'],
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
    title: '구글 비즈니스 프로필 세팅',
    price: 'AUD 300',
    priceNote: '1회 결제',
    description: '홈페이지를 새로 만들기 전에 구글에서 보이는 정보와 기본 신뢰도를 먼저 정리하고 싶은 경우 적합합니다.',
    cta: '구글 비즈니스 프로필 세팅 문의하기',
    href: '/contact?type=gbp-setup',
  },
  {
    title: '구글 비즈니스 프로필 월관리',
    price: 'AUD 95 / month',
    priceNote: '월간 관리',
    description: '기본 세팅 이후 업데이트와 유지 관리가 계속 필요한 경우 적합합니다.',
    cta: '구글 비즈니스 프로필 월관리 문의하기',
    href: '/contact?type=gbp-monthly',
  },
];

const supportPackages = [
  {
    title: '홈페이지 관리',
    price: 'AUD 200 / month',
    priceNote: '월간 관리',
    description: '직접 수정할 시간은 없지만 텍스트 변경, 이미지 교체, 기본 업데이트는 계속 필요한 경우 적합합니다.',
    cta: '문의하기',
    href: '/contact?type=general-inquiry',
  },
  {
    title: 'AI 온라인 운영 전수',
    price: 'AUD 2,500 (온라인)',
    priceNote: '1회 교육 프로그램',
    description: '홈페이지, 구글 비즈니스 프로필, SNS 운영을 직접 해보고 싶지만 방법이 막막한 분을 위한 실전 교육입니다.',
    cta: '자세히 보기',
    href: '/ai-business',
  },
];

const faqItems = [
  {
    question: '작업 기간은 얼마나 걸리나요?',
    answer: '범위에 따라 다르지만, 진단은 비교적 빠르게 진행할 수 있고 홈페이지 제작은 페이지 수와 준비 자료에 따라 기간이 달라집니다. 문의 주시면 현재 상황 기준으로 예상 일정을 먼저 안내해드립니다.',
  },
  {
    question: '수정은 몇 번까지 가능한가요?',
    answer: '기본 수정 범위 안에서 함께 조정하며 진행합니다. 패키지와 작업 범위에 따라 달라질 수 있어서, 시작 전에 수정 범위를 명확히 안내해드립니다.',
  },
  {
    question: '결제는 어떻게 하나요?',
    answer: '작업 성격에 따라 일시 결제 또는 분할 결제가 가능합니다. 큰 작업은 보통 단계에 맞춰 나누어 진행할 수 있도록 안내해드립니다.',
  },
  {
    question: '환불 정책이 있나요?',
    answer: '진행 단계와 이미 들어간 작업 범위에 따라 달라집니다. 착수 전에는 기준을 먼저 안내드리고, 진행 중인 경우에는 현재 단계 기준으로 조정 가능한 범위를 설명해드립니다.',
  },
  {
    question: '호주 외 지역도 가능한가요?',
    answer: '가능합니다. 기본적으로 호주 전역 작업이 가능하고, 호주 외 지역도 온라인으로 진행할 수 있습니다. 한국어 상담과 영어 커뮤니케이션 모두 가능합니다.',
  },
];

const PriceDisplay = ({ item }) => (
  <div className="mt-5">
    {item.originalPrice && (
      <p className="text-sm font-semibold text-text-soft line-through opacity-80">
        {item.originalPrice}
      </p>
    )}
    <p className="mt-1 text-[2rem] font-black tracking-[-0.06em] text-white">
      {item.price}
    </p>
    {item.priceNote && (
      <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-text-soft">
        AUD · {item.priceNote}
      </p>
    )}
  </div>
);

const WebPricing = () => {
  return (
    <div className="pt-32 pb-24">
      <Seo
        title="서비스 및 가격"
        description="무료 점검, 유료 진단, 홈페이지 제작, SEO 패키지, 구글 비즈니스 프로필, 추가 관리까지 GoodmanSEO의 서비스와 가격을 한눈에 확인할 수 있습니다."
        path="/pricing"
        keywords={['서비스 및 가격', '퀵 진단', '온라인 올인원 진단', '비즈니스 홈페이지', 'SEO 패키지', '구글 비즈니스 프로필']}
      />

      <div className="container">
        <div className="section-heading max-w-5xl">
          <p className="section-kicker">서비스 및 가격</p>
          <h1 className="section-title max-w-5xl">서비스 및 가격</h1>
          <p className="section-copy max-w-[42rem]">
            무료 점검부터 유료 진단, 홈페이지 제작, SEO, 구글 비즈니스 프로필 관리까지
            <br />
            지금 필요한 단계에 따라 선택할 수 있도록 한눈에 정리해두었습니다.
          </p>
          <div className="mt-5 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-text-muted">
            한국어 상담 가능 · 호주 전역 작업 가능
          </div>
        </div>

        <section id="website-packages" className="section-block !min-h-0 px-0">
          <div className="w-full">
            <div className="section-heading">
              <h2 className="section-title">홈페이지 제작</h2>
              <p className="section-copy">가볍게 시작할지, 검색과 채널 연결까지 함께 정리할지, 필요한 범위에 따라 선택할 수 있습니다.</p>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[980px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="w-[180px] px-6 py-6 text-left text-sm font-semibold text-text-soft">항목</th>
                      {websitePackages.map((item, index) => (
                        <th
                          key={item.title}
                          className={`px-6 py-6 text-left align-top ${index !== websitePackages.length - 1 ? 'border-l border-white/10' : 'border-l border-white/10'}`}
                        >
                          <p className="section-kicker">{item.title}</p>
                          <PriceDisplay item={item} />
                          <p className="mt-3 text-sm font-semibold text-accent-primary">{item.label}</p>
                          <p className="mt-4 text-sm leading-[1.7] text-text-muted">{item.description}</p>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {websiteComparisonRows.map((row) => (
                      <tr key={row.label} className="border-b border-white/10 last:border-b-0">
                        <th className="px-6 py-5 text-left text-sm font-semibold text-text-soft">{row.label}</th>
                        {row.values.map((value, index) => (
                          <td
                            key={`${row.label}-${index}`}
                            className="border-l border-white/10 px-6 py-5 text-sm font-medium text-white"
                          >
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                    <tr>
                      <th className="px-6 py-6 text-left text-sm font-semibold text-text-soft">문의</th>
                      {websitePackages.map((item) => (
                        <td key={`${item.title}-cta`} className="border-l border-white/10 px-6 py-6">
                          <Link to={item.href} className="primary-button inline-flex">
                            {item.cta}
                            <ArrowRight size={16} />
                          </Link>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section id="diagnostics" className="section-block !min-h-0 px-0">
          <div className="w-full">
            <div className="section-heading">
              <h2 className="section-title">유료 진단</h2>
              <p className="section-copy">무료 점검만으로 부족하다면, 더 자세한 분석으로 현재 상태와 우선순위를 구체적으로 확인할 수 있습니다.</p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {diagnostics.map((item) => (
                <article key={item.title} className="feature-card">
                  <p className="section-kicker">{item.title}</p>
                  <PriceDisplay item={item} />
                  <p className="mt-5 text-[0.95rem] leading-[1.72] text-text-muted">{item.description}</p>
                  <div className="mt-6 grid gap-3">
                    {item.points.map((point) => (
                      <div key={point} className="benefit-row">
                        <CircleCheckBig size={16} className="text-accent-primary" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={item.href} className="primary-button mt-7 inline-flex">
                    {item.cta}
                    <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block !min-h-0 px-0">
          <div className="w-full grid gap-4 lg:grid-cols-2">
            <div id="seo-packages">
              <div className="section-heading">
                <h2 className="section-title">SEO 패키지</h2>
                <p className="section-copy">홈페이지는 그대로 두고 검색 노출부터 개선하고 싶은 경우 선택할 수 있습니다.</p>
              </div>
              <div className="grid gap-4">
                {seoPackages.map((item) => (
                  <article key={item.title} className="soft-panel">
                    <p className="section-kicker">{item.title}</p>
                    <PriceDisplay item={item} />
                    <p className="mt-5 text-[0.95rem] leading-[1.72] text-text-muted">{item.description}</p>
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
                    <Link to={item.href} className="primary-button mt-7 inline-flex">
                      {item.cta}
                      <ArrowRight size={16} />
                    </Link>
                  </article>
                ))}
              </div>
            </div>

            <div id="gbp-packages">
              <div className="section-heading">
                <h2 className="section-title">구글 비즈니스 프로필</h2>
                <p className="section-copy">구글에서 보이는 정보와 신뢰도부터 먼저 정리하고 싶은 경우 적합합니다.</p>
              </div>
              <div className="grid gap-4">
                {gbpPackages.map((item) => (
                  <article key={item.title} className="soft-panel">
                    <p className="section-kicker">{item.title}</p>
                    <PriceDisplay item={item} />
                    <p className="mt-5 text-[0.95rem] leading-[1.72] text-text-muted">{item.description}</p>
                    <Link to={item.href} className="primary-button mt-7 inline-flex">
                      {item.cta}
                      <ArrowRight size={16} />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="support-programs" className="section-block !min-h-0 px-0">
          <div className="w-full grid gap-4 lg:grid-cols-2">
            <div>
              <div className="section-heading">
                <h2 className="section-title">월간 관리</h2>
                <p className="section-copy">구축 후에도 수정과 기본 운영 지원이 꾸준히 필요한 경우 선택할 수 있습니다.</p>
              </div>

              <article className="feature-card">
                <p className="section-kicker">{supportPackages[0].title}</p>
                <PriceDisplay item={supportPackages[0]} />
                <p className="mt-5 text-[0.95rem] leading-[1.72] text-text-muted">{supportPackages[0].description}</p>
                <Link to={supportPackages[0].href} className="primary-button mt-7 inline-flex">
                  {supportPackages[0].cta}
                  <ArrowRight size={16} />
                </Link>
              </article>
            </div>

            <div>
              <div className="section-heading">
                <h2 className="section-title">교육 프로그램</h2>
                <p className="section-copy">운영을 맡기는 대신 직접 배우고 활용하고 싶은 경우 선택할 수 있습니다.</p>
              </div>

              <article className="feature-card">
                <p className="section-kicker">{supportPackages[1].title}</p>
                <PriceDisplay item={supportPackages[1]} />
                <p className="mt-5 text-[0.95rem] leading-[1.72] text-text-muted">{supportPackages[1].description}</p>
                <Link to={supportPackages[1].href} className="primary-button mt-7 inline-flex">
                  {supportPackages[1].cta}
                  <ArrowRight size={16} />
                </Link>
              </article>
            </div>
          </div>
        </section>

        <section className="section-block !min-h-0 px-0">
          <div className="w-full">
            <div className="section-heading">
              <h2 className="section-title">자주 묻는 질문</h2>
              <p className="section-copy">가격과 진행 방식에서 자주 나오는 질문을 먼저 정리해두었습니다.</p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {faqItems.map((item) => (
                <article key={item.question} className="soft-panel">
                  <p className="section-kicker">FAQ</p>
                  <h3 className="mt-4 text-[1.2rem] font-black tracking-[-0.04em]">{item.question}</h3>
                  <p className="mt-4 text-[0.95rem] leading-[1.72] text-text-muted">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="showcase-panel text-center mt-6">
          <h2 className="section-title mx-auto">어디부터 손봐야 할지 헷갈린다면,<br />무료 점검부터 시작해보세요</h2>
          <p className="section-copy mx-auto">
            지금 상태를 먼저 보고,
            <br />
            홈페이지가 필요한지, 구글 프로필을 먼저 정리해야 하는지, SEO가 필요한지 순서부터 안내해드립니다.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/contact?type=free-check" className="primary-button">
              무료 점검 신청하기
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebPricing;
