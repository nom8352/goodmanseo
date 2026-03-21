import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheckBig } from 'lucide-react';
import Seo from '../components/Seo';

const packages = [
  {
    name: 'Basic Website',
    korean: '기본 홈페이지',
    price: '$795',
    label: '가볍게 시작',
    target: '처음 시작하는 작은 비즈니스',
    features: [
      '간단한 홈페이지 제작',
      '휴대폰에서도 잘 보이게',
      '문의 버튼 또는 문의폼 연결',
      '구글 지도/검색 등록',
      '홈페이지 방문 확인 연결',
      '별도 호스팅비 없이 시작 가능',
    ],
  },
  {
    name: 'Business Website',
    korean: '맞춤형 비즈니스 홈페이지',
    price: 'From $2,000 + GST',
    label: '페이지가 더 필요한 경우',
    target: '서비스 소개와 페이지 구성이 더 필요한 업체',
    features: [
      '업체에 맞춘 화면 구성',
      '5~10개 페이지 구성',
      '구글 검색 기본 세팅',
      '블로그 직접 수정 가능',
      '방문 확인 도구 연결',
    ],
  },
  {
    name: 'Advanced Build',
    korean: '쇼핑몰 / 예약 / 고급 기능',
    price: 'From $4,000 + GST',
    label: '판매·예약 기능까지',
    target: '쇼핑몰, 예약, 외부 연결이 필요한 업체',
    features: [
      '온라인 결제 또는 예약 기능',
      '상품과 카테고리 관리',
      '예약·문의·외부 시스템 연동',
      '광고와 전환 흐름 상담',
      '운영 구조 맞춤 안내',
    ],
  },
];

const addOns = [
  {
    name: '인스타그램 세팅',
    price: '+$190',
    desc: '프로필, 링크, 소개 문구를 가게 정보에 맞게 정리합니다.',
  },
  {
    name: '페이스북 세팅',
    price: '+$190',
    desc: '페이지 정보와 홈페이지 연결을 기본에 맞게 정리합니다.',
  },
  {
    name: '인스타그램 + 페이스북',
    price: '+$290',
    desc: '두 채널을 한 번에 정리하고 연결 흐름까지 맞춰드립니다.',
  },
  {
    name: '구글 광고 시작 세팅',
    price: '별도 문의',
    desc: '키워드 광고를 시작할 수 있게 기본 구조와 방향을 잡아드립니다.',
  },
  {
    name: '인스타/페이스북 광고 시작 세팅',
    price: '별도 문의',
    desc: '광고를 바로 시작할 수 있게 계정과 기본 흐름을 정리합니다.',
  },
  {
    name: '운영 노하우 가이드',
    price: '별도 안내',
    desc: '직접 운영하실 수 있도록 예산과 순서를 쉽게 설명해드립니다.',
  },
  {
    name: '로컬 비즈니스 디렉토리 등록 5개',
    price: '$90',
    desc: '비즈니스 정보를 5개 로컬 디렉토리에 등록해 기본 노출 기반을 넓혀드립니다.',
  },
  {
    name: '로컬 비즈니스 디렉토리 등록 10개',
    price: '$150',
    desc: '비즈니스 정보를 10개 로컬 디렉토리에 등록해 더 넓게 노출될 수 있게 도와드립니다.',
  },
];

const reasons = [
  '기본만 잘 잡아도 고객 문의가 시작될 수 있습니다.',
  '예쁜 화면보다 실제 유입과 매출 흐름을 먼저 봅니다.',
  '필요한 것만 먼저 하고, 원하면 광고까지 이어갈 수 있습니다.',
];

const WebPricing = () => {
  return (
    <div className="pt-32 pb-24">
      <Seo
        title="서비스 및 가격"
        description="Goodman SEO의 서비스 및 가격 안내 페이지입니다. 기본 홈페이지 $795부터 시작하고, 구글 지도/검색 등록과 추가 마케팅 서비스까지 확인할 수 있습니다."
        path="/pricing"
        keywords={['홈페이지 제작 가격', '홈페이지 제작 795', '구글 지도 등록', '시드니 홈페이지 제작', '서비스 및 가격']}
      />
      <div className="container">
        <div className="section-heading max-w-5xl">
          <p className="section-kicker">Services & Pricing</p>
          <h1 className="section-title max-w-5xl">
            필요한 수준에 맞는
            <br />
            서비스 및 가격
          </h1>
          <p className="section-copy max-w-2xl">
            작은 비즈니스는 가볍게 시작하고,
            <br />
            필요할 때 더하는 방식이 가장 쉽습니다.
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
            <p className="section-kicker">Extra services</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">추가서비스</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
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
            <h2 className="mt-3 text-3xl font-black tracking-[-0.05em]">이런 분께 잘 맞습니다</h2>
            <div className="mt-8 grid gap-3">
              {reasons.map((reason) => (
                <div key={reason} className="benefit-row">
                  <CircleCheckBig size={18} className="text-accent-primary" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-[30rem] text-base leading-relaxed text-text-muted">
              먼저 홈페이지와 구글 기본을 잡고, 원하시면 SNS와 광고 시작 세팅까지 이어서 도와드립니다.
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
