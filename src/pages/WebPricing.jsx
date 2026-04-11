import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheckBig } from 'lucide-react';
import Seo from '../components/Seo';

const diagnostics = [
  {
    title: '퀵 진단',
    price: 'AUD 149',
    description:
      '웹사이트, 구글 비즈니스 프로필, 온페이지 SEO를 중심으로 현재 상태를 빠르게 점검하고 우선순위를 정리해드립니다.',
    points: ['홈페이지 상태 분석', '구글 비즈니스 프로필 분석', '온페이지 SEO 기본 분석', '핵심 문제 1~3개 정리'],
  },
  {
    title: '온라인 올인원 진단',
    price: 'AUD 289',
    description:
      '퀵 진단 범위에 더해 인스타그램, 페이스북, 비즈니스 포지셔닝까지 함께 분석해 전체 온라인 상태를 정리해드립니다.',
    points: ['퀵 진단 전체 포함', '인스타그램 · 페이스북 분석', '비즈니스 포지셔닝 점검', '채널 간 일관성 확인'],
  },
];

const websitePackages = [
  {
    title: '스타터 홈페이지',
    price: 'AUD 795',
    label: '현재 이벤트 혜택 포함',
    description: '가볍게 시작할 수 있는 기본 홈페이지 패키지입니다.',
    points: ['최대 3페이지', '기본 홈페이지 구성', 'AUD 300 상당 구글 비즈니스 프로필 세팅 포함'],
  },
  {
    title: '비즈니스 홈페이지',
    price: 'AUD 1,890',
    label: '메인 실행 패키지',
    description: '페이지 수와 범위를 조금 더 확장하고, 검색과 채널 연결까지 함께 정리합니다.',
    points: ['최대 5페이지', '로컬 SEO 포함', '구글 비즈니스 프로필 포함', '원할 경우 인스타그램 · 페이스북 세팅 포함'],
  },
  {
    title: '성장형 홈페이지',
    price: 'AUD 3,500',
    label: '확장형 패키지',
    description: '홈페이지뿐 아니라 검색 기본 세팅까지 한 번에 시작하고 싶은 경우에 적합합니다.',
    points: ['비즈니스 홈페이지 범위 포함', 'SEO All-in-One 패키지 포함'],
  },
];

const seoPackages = [
  {
    title: 'SEO All-in-One 패키지',
    price: 'AUD 950',
    description: '검색 노출을 위한 기본 세팅을 한 번에 정리하고 싶은 경우에 적합합니다.',
  },
  {
    title: 'SEO 월관리',
    price: 'AUD 795 / month',
    description: '초기 세팅 이후 검색 관련 작업을 계속 이어가고 싶은 경우에 적합합니다.',
  },
];

const gbpPackages = [
  {
    title: '구글 비즈니스 프로필 세팅',
    price: 'AUD 300',
    description: '홈페이지 작업 없이 구글에서 보이는 정보와 기본 상태를 먼저 정리하고 싶은 경우에 적합합니다.',
  },
  {
    title: '구글 비즈니스 프로필 월관리',
    price: 'AUD 95 / month',
    description: '기본 세팅 이후 업데이트와 유지 관리가 필요한 경우에 적합합니다.',
  },
];

const supportPackages = [
  {
    title: '홈페이지 관리',
    price: 'AUD 200 / month',
    description: '직접 운영은 부담스럽지만 텍스트 수정, 이미지 교체, 간단한 업데이트가 필요한 경우에 적합합니다.',
  },
  {
    title: 'AI 활용 비즈니스 운영 & 홈페이지 관리 전수',
    price: 'AUD 2,500 · Online',
    description: '직접 운영하고 싶은 분을 위해 AI를 활용한 홈페이지·콘텐츠·운영 방법을 온라인으로 전수합니다.',
  },
];

const pricingPrinciples = [
  '무료 점검 후 필요한 서비스만 선택해 진행할 수 있습니다.',
  '홈페이지, SEO, 구글 비즈니스 프로필, 운영 지원을 각각 분리해 안내합니다.',
  '무조건 큰 패키지를 먼저 권하기보다 지금 필요한 것부터 차례대로 진행합니다.',
];

const WebPricing = () => {
  return (
    <div className="pt-32 pb-24">
      <Seo
        title="서비스 및 가격"
        description="무료 점검 후 GoodmanSEO의 진단, 홈페이지, SEO, 구글 비즈니스 프로필, 운영 지원 옵션을 확인할 수 있습니다."
        path="/pricing"
        keywords={['서비스 및 가격', '퀵 진단', '온라인 올인원 진단', '비즈니스 홈페이지', 'SEO 패키지', '구글 비즈니스 프로필']}
      />

      <div className="container">
        <div className="section-heading max-w-5xl">
          <p className="section-kicker">서비스 및 가격</p>
          <h1 className="section-title max-w-5xl">
            무료 점검 후,
            <br />
            맞는 서비스부터 이어서 진행할 수 있습니다
          </h1>
          <p className="section-copy max-w-[42rem]">
            구글, 홈페이지, 인스타그램, 페이스북을 먼저 함께 보고,
            <br />
            필요한 서비스만 선택할 수 있도록 정리해드립니다.
          </p>
        </div>

        <div className="showcase-panel">
          <p className="section-kicker">먼저 알고 가면 좋은 점</p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {pricingPrinciples.map((item) => (
              <div key={item} className="benefit-row">
                <CircleCheckBig size={16} className="text-accent-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <section className="section-block !min-h-0 px-0">
          <div className="w-full">
            <div className="section-heading">
              <h2 className="section-title">더 자세히 보고 싶다면,<br />유료 진단으로 이어질 수 있습니다</h2>
              <p className="section-copy">무료 점검 후 현재 상태를 조금 더 정확하게 보고 싶은 경우 선택할 수 있는 옵션입니다.</p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {diagnostics.map((item) => (
                <article key={item.title} className="feature-card">
                  <p className="section-kicker">{item.title}</p>
                  <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-text-muted">
                    {item.price}
                  </div>
                  <p className="mt-5 text-[0.95rem] leading-[1.72] text-text-muted">{item.description}</p>
                  <div className="mt-6 grid gap-3">
                    {item.points.map((point) => (
                      <div key={point} className="benefit-row">
                        <CircleCheckBig size={16} className="text-accent-primary" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="primary-button mt-7 inline-flex">
                    문의하기
                    <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block !min-h-0 px-0">
          <div className="w-full">
            <div className="section-heading">
              <h2 className="section-title">홈페이지가 필요하다면,<br />이렇게 진행할 수 있습니다</h2>
              <p className="section-copy">현재 단계와 필요한 범위에 따라 홈페이지 옵션을 선택할 수 있습니다.</p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {websitePackages.map((item, index) => (
                <article key={item.title} className={index === 1 ? 'pricing-spotlight' : 'feature-card'}>
                  <p className="section-kicker">{item.title}</p>
                  <p className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-text-muted">
                    {item.price}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-accent-primary">{item.label}</p>
                  <p className="mt-5 text-[0.95rem] leading-[1.72] text-text-muted">{item.description}</p>
                  <div className="mt-6 grid gap-3">
                    {item.points.map((point) => (
                      <div key={point} className="benefit-row">
                        <CircleCheckBig size={16} className="text-accent-primary" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-block !min-h-0 px-0">
          <div className="w-full grid gap-4 lg:grid-cols-2">
            <div>
              <div className="section-heading">
                <h2 className="section-title">SEO가 필요하다면</h2>
                <p className="section-copy">검색 노출 관련 작업만 따로 정리하고 싶은 경우를 위한 옵션입니다.</p>
              </div>
              <div className="grid gap-4">
                {seoPackages.map((item) => (
                  <article key={item.title} className="soft-panel">
                    <p className="section-kicker">{item.title}</p>
                    <p className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-text-muted">
                      {item.price}
                    </p>
                    <p className="mt-5 text-[0.95rem] leading-[1.72] text-text-muted">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <div className="section-heading">
                <h2 className="section-title">구글 비즈니스 프로필만<br />따로 정리하고 싶다면</h2>
                <p className="section-copy">홈페이지 작업과 별개로 구글 비즈니스 프로필만 먼저 관리하고 싶은 경우를 위한 옵션입니다.</p>
              </div>
              <div className="grid gap-4">
                {gbpPackages.map((item) => (
                  <article key={item.title} className="soft-panel">
                    <p className="section-kicker">{item.title}</p>
                    <p className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-text-muted">
                      {item.price}
                    </p>
                    <p className="mt-5 text-[0.95rem] leading-[1.72] text-text-muted">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-block !min-h-0 px-0">
          <div className="w-full">
            <div className="section-heading">
              <h2 className="section-title">구축 이후 운영까지<br />이어가고 싶다면</h2>
              <p className="section-copy">직접 운영할지, 관리를 맡길지, AI를 활용해 운영하는 법까지 배울지 선택할 수 있습니다.</p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {supportPackages.map((item) => (
                <article key={item.title} className="feature-card">
                  <p className="section-kicker">{item.title}</p>
                  <p className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-text-muted">
                    {item.price}
                  </p>
                  <p className="mt-5 text-[0.95rem] leading-[1.72] text-text-muted">{item.description}</p>
                  <Link to="/contact" className="primary-button mt-7 inline-flex">
                    문의하기
                    <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="showcase-panel text-center mt-6">
          <h2 className="section-title mx-auto">어디서 시작해야 할지 모르겠다면,<br />먼저 무료 점검부터 받아보세요</h2>
          <p className="section-copy mx-auto">
            무료 점검 후 현재 상태를 먼저 보고,
            <br />
            그다음 맞는 서비스부터 차근차근 이어가실 수 있습니다.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/contact" className="primary-button">
              무료 점검 신청하기
              <ArrowRight size={16} />
            </Link>
            <Link to="/" className="secondary-button">
              메인페이지 보기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebPricing;