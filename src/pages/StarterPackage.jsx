import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheckBig, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';

const inclusions = [
  '간단한 홈페이지 제작',
  '휴대폰에서도 잘 보이게',
  '문의 버튼 또는 문의폼 연결',
  '구글 지도/검색 등록',
  '홈페이지 방문 확인 연결',
  '구글 검색 확인 연결',
];

const support = [
  '처음 홈페이지가 필요한 가게',
  '기존 사이트가 너무 오래된 업체',
  '구글에서 잘 안 보이는 업종',
  '복잡한 기능 없이 가볍게 시작하고 싶은 경우',
];

const stats = [
  { label: '제작비', value: '$795' },
  { label: '형태', value: '간단한 홈페이지' },
  { label: '포함', value: '구글 지도/검색 등록' },
  { label: '운영', value: '부담 낮게 시작' },
];

const extras = [
  {
    title: '인스타그램 세팅',
    price: '+$190',
    desc: '프로필, 링크, 소개 문구를 가게 정보에 맞게 정리합니다.',
  },
  {
    title: '페이스북 세팅',
    price: '+$190',
    desc: '페이지 정보와 홈페이지 연결을 기본에 맞게 정리합니다.',
  },
  {
    title: '인스타그램 + 페이스북',
    price: '+$290',
    desc: '두 채널을 한 번에 정리하고 연결 흐름까지 맞춰드립니다.',
  },
  {
    title: '구글 광고 시작 세팅',
    price: '별도 문의',
    desc: '키워드 광고를 시작할 수 있게 기본 구조와 방향을 잡아드립니다.',
  },
  {
    title: '인스타/페이스북 광고 시작 세팅',
    price: '별도 문의',
    desc: '광고를 바로 시작할 수 있게 계정과 기본 흐름을 정리합니다.',
  },
  {
    title: '운영 노하우 가이드',
    price: '별도 안내',
    desc: '직접 운영하실 수 있도록 예산과 운영 순서를 쉽게 설명해드립니다.',
  },
];

const StarterPackage = () => {
  return (
    <div className="pt-32 pb-24">
      <Seo
        title="홈페이지 제작"
        description="Goodman SEO의 작은 비즈니스를 위한 홈페이지 제작 안내 페이지입니다. 홈페이지 제작 $795, 구글 지도/검색 등록, 홈페이지 방문 확인 연결까지 포함됩니다."
        path="/starter-package"
        keywords={['홈페이지 제작 795', '구글 지도 등록', '작은 비즈니스 홈페이지', '시드니 홈페이지 제작', '소상공인 홈페이지']}
      />
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="section-heading mb-0 max-w-4xl">
            <p className="section-kicker">Homepage package</p>
            <h1 className="section-title max-w-4xl">
              작은 비즈니스를 위한
              <br />
              홈페이지 제작
            </h1>
            <p className="section-copy max-w-2xl">
              처음에는 복잡할 필요 없습니다.
              <br />
              고객이 찾고 문의할 수 있는 기본부터 만듭니다.
            </p>
          </div>

          <div className="package-matrix">
            {stats.map((stat) => (
              <div key={stat.label} className="package-stat">
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="showcase-panel mt-10"
        >
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <aside className="pricing-spotlight">
              <div className="eyebrow-chip w-fit">
                <Sparkles size={14} />
                Goodman SEO basic website
              </div>
              <h2 className="mt-8 text-4xl font-black tracking-[-0.06em] sm:text-5xl">기본 홈페이지 제작</h2>
              <div className="mt-10 flex items-end gap-2">
                <span className="text-7xl font-black tracking-[-0.08em]">$795</span>
                <span className="pb-3 text-xl text-text-muted">한 번</span>
              </div>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent-primary">
                작게 시작하는 기본 가격
              </p>
              <p className="mt-8 text-base leading-relaxed text-text-muted">
                작은 비즈니스는 이 정도 기본만 잘 잡아도
                <br />
                고객이 찾고 문의할 수 있는 출발점이 됩니다.
              </p>
              <div className="package-note mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">운영비 부담도 낮게</p>
                <p className="mt-3 text-base leading-relaxed text-text-muted">
                  간단한 홈페이지는
                  <br />
                  운영비 부담을 낮춘 방식으로 안내해드립니다.
                </p>
              </div>
              <Link to="/contact" className="primary-button mt-8 inline-flex">
                무료 상담하기
                <ArrowRight size={18} />
              </Link>
            </aside>

            <div className="grid gap-10">
              <div>
                <h3 className="text-2xl font-black tracking-[-0.04em]">포함 내역</h3>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {inclusions.map((item) => (
                    <div key={item} className="benefit-row">
                      <CircleCheckBig size={18} className="text-accent-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="soft-panel">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">이런 분께 맞습니다</p>
                  <div className="mt-5 space-y-3">
                    {support.map((item) => (
                      <div key={item} className="mini-feature">
                        <CircleCheckBig size={16} className="text-accent-primary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="soft-panel">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">왜 이 구성이 좋을까요</p>
                  <p className="mt-5 text-base leading-relaxed text-text-muted">
                    먼저 보이게 하고,
                    <br />
                    찾기 쉽게 하고,
                    <br />
                    문의가 들어오게 만드는 기본입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="section-heading mt-24">
          <p className="section-kicker">Extra services</p>
          <h2 className="section-title">원하시면 여기까지 도와드립니다</h2>
          <p className="section-copy">
            홈페이지를 만든 뒤에도
            <br />
            SNS와 광고 시작 세팅까지 이어갈 수 있습니다.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {extras.map((item) => (
            <div key={item.title} className="soft-panel">
              <p className="text-sm font-semibold tracking-[0.04em] text-text-soft">{item.title}</p>
              <h3 className="mt-4 text-3xl font-black tracking-[-0.04em]">{item.price}</h3>
              <p className="mt-4 text-base leading-relaxed text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarterPackage;
