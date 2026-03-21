import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheckBig, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';

const inclusions = [
  '모바일 홈페이지 제작',
  '구글 비즈니스 세팅',
  '인스타그램 & 페이스북 연결',
  '월간 요약 리포트',
  '구글 정보 관리 지원',
  '텍스트/이미지 수정 지원',
];

const support = [
  '처음 시작하는 가게',
  '사이트가 오래된 업종',
  'SNS가 따로 노는 상태',
  '구글 지도 노출이 약한 경우',
];

const stats = [
  { label: '월 비용', value: '$500' },
  { label: '기본 관리', value: '6개월' },
  { label: '핵심 영역', value: '3가지' },
  { label: '시작 속도', value: '빠르게' },
];

const StarterPackage = () => {
  return (
    <div className="pt-32 pb-24">
      <Seo
        title="스타터 패키지"
        description="웹사이트 제작, 구글 비즈니스 프로필 세팅, SNS 연결과 운영 지원을 포함한 Goodman SEO의 월 $500 스타터 패키지 안내 페이지입니다."
        path="/starter-package"
        keywords={['스타터 패키지', '월 500달러 홈페이지', '구글 지도 세팅', '소상공인 마케팅 패키지']}
      />
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="section-heading mb-0 max-w-4xl">
            <p className="section-kicker">Pricing package</p>
            <h1 className="section-title max-w-4xl">
              하나의 패키지로,
              <br />
              필요한 기본기만 정확하게
            </h1>
            <p className="section-copy max-w-2xl">
              복잡한 옵션 없이
              <br />
              필요한 것만 묶었습니다.
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
                Goodman SEO starter
              </div>
              <h2 className="mt-8 text-4xl font-black tracking-[-0.06em] sm:text-5xl">올인원 스타터 패키지</h2>
              <div className="mt-10 flex items-end gap-2">
                <span className="text-7xl font-black tracking-[-0.08em]">$500</span>
                <span className="pb-3 text-xl text-text-muted">/ 월</span>
              </div>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent-primary">
                기본 6개월 관리 포함
              </p>
              <p className="mt-8 text-base leading-relaxed text-text-muted">
                웹, 구글, SNS를
                <br />
                한 번에 정리하는 패키지입니다.
              </p>
              <div className="package-note mt-8">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">For owners who want clarity</p>
                <p className="mt-3 text-base leading-relaxed text-text-muted">
                  뭘 먼저 해야 할지 모르겠다면
                  <br />
                  이 패키지로 시작하시면 됩니다.
                </p>
              </div>
              <Link to="/contact" className="primary-button mt-8 inline-flex">
                이 패키지로 시작하기
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
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">Who it is for</p>
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
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">Why this works</p>
                  <p className="mt-5 text-base leading-relaxed text-text-muted">
                    먼저 보여야 하고,
                    <br />
                    보기 좋아야 하고,
                    <br />
                    문의가 와야 합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StarterPackage;
