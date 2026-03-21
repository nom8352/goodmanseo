import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheckBig } from 'lucide-react';
import Seo from '../components/Seo';

const packages = [
  {
    name: 'Basic Package',
    korean: '베이직 패키지',
    price: 'From $2,000 + GST',
    label: '간단한 소개형',
    target: '처음 시작하는 작은 가게나 서비스',
    features: [
      '기존 템플릿을 깔끔하게 맞춤 제작',
      '최대 5개 기본 페이지',
      '모바일 반응형 기본 적용',
      '보내주신 글과 사진 정리',
      '구글 비즈니스 프로필 기본 세팅',
    ],
  },
  {
    name: 'Standard Custom',
    korean: '스탠다드 맞춤형',
    price: 'From $4,000 + GST',
    label: '브랜드를 살리는 맞춤형',
    target: '브랜딩이 중요한 로컬 비즈니스',
    features: [
      '맞춤형 화면 디자인',
      '5~10개 상세 페이지 구성',
      '구글 검색 기본 세팅',
      '블로그 직접 수정 가능',
      '구글 분석 도구 연결',
    ],
  },
  {
    name: 'E-commerce & Premium',
    korean: '이커머스 / 고급형',
    price: 'From $10,000 + GST',
    label: '판매·예약 기능까지',
    target: '쇼핑몰, 예약, 맞춤 기능이 필요한 업체',
    features: [
      'Shopify 또는 WooCommerce 구축',
      '상품과 카테고리 관리 정리',
      '예약·문의·외부 시스템 연동',
      '문의 전환 개선 상담',
      '이메일 자동화 연동 상담',
    ],
  },
];

const addOns = [
  {
    name: 'SNS 시작 세팅',
    price: '$500~',
    desc: '오픈에 맞춰 프로필과 첫 콘텐츠 방향을 정리합니다.',
  },
  {
    name: '월 관리 서비스',
    price: '$150/mo~',
    desc: '보안 업데이트, 백업, 수정 지원으로 운영 부담을 줄입니다.',
  },
];

const reasons = [
  '호주 로컬 비즈니스 흐름을 이해하고 만듭니다.',
  '숨겨진 비용 없이 시작 가격을 먼저 안내합니다.',
  '예쁜 화면보다 검색과 문의 흐름을 먼저 생각합니다.',
];

const WebPricing = () => {
  return (
    <div className="pt-32 pb-24">
      <Seo
        title="제작 가격 안내"
        description="Goodman SEO의 웹사이트 제작 가격 안내 페이지입니다. 베이직, 맞춤형, 이커머스 패키지와 추가 옵션을 확인할 수 있습니다."
        path="/pricing"
        keywords={['홈페이지 제작 가격', '웹사이트 제작 패키지', '이커머스 제작', '호주 홈페이지 제작', 'Goodman SEO 가격']}
      />
      <div className="container">
        <div className="section-heading max-w-5xl">
          <p className="section-kicker">Website Pricing</p>
          <h1 className="section-title max-w-5xl">
            사업 단계에 맞는
            <br />
            홈페이지 제작 가격
          </h1>
          <p className="section-copy max-w-2xl">
            복잡하게 고를 필요 없습니다.
            <br />
            필요한 수준에 맞는 패키지를 보면 됩니다.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div key={pkg.name} className={index === 1 ? 'pricing-spotlight' : 'soft-panel'}>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">{pkg.name}</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">{pkg.korean}</h2>
              <p className="mt-4 text-sm font-semibold text-accent-primary">{pkg.label}</p>
              <p className="mt-6 text-4xl font-black tracking-[-0.06em]">{pkg.price}</p>
              <p className="mt-4 text-base leading-relaxed text-text-muted">추천 대상: {pkg.target}</p>
              <div className="mt-8 grid gap-3">
                {pkg.features.map((feature) => (
                  <div key={feature} className="benefit-row">
                    <CircleCheckBig size={18} className="text-accent-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="showcase-panel">
            <p className="section-kicker">Add-ons</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">필요하면 더할 수 있는 옵션</h2>
            <div className="mt-8 grid gap-4">
              {addOns.map((item) => (
                <div key={item.name} className="soft-panel">
                  <p className="text-sm font-semibold tracking-[0.04em] text-text-soft">{item.name}</p>
                  <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">{item.price}</h3>
                  <p className="mt-3 text-base leading-relaxed text-text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="showcase-panel">
            <p className="section-kicker">Why Goodman SEO</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">이렇게 진행합니다</h2>
            <div className="mt-8 grid gap-3">
              {reasons.map((reason) => (
                <div key={reason} className="benefit-row">
                  <CircleCheckBig size={18} className="text-accent-primary" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-[30rem] text-base leading-relaxed text-text-muted">
              먼저 필요한 범위를 같이 정리하고, 그다음에 맞는 제작 방식과 견적을 안내해드립니다.
            </p>
            <Link to="/contact" className="primary-button mt-8 inline-flex">
              무료 견적 문의하기
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebPricing;
