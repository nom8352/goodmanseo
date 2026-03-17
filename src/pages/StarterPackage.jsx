import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheckBig, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';

const inclusions = [
  '트렌디한 모바일 최적화 웹사이트 제작',
  '구글 비즈니스 프로필 로컬 검색 및 지도 세팅',
  '인스타그램 & 페이스북 비즈니스 계정 연결',
  '매월 성과 요약 리포트 제공',
  'Google Business 최신화 및 관리 지원',
  '웹사이트 텍스트/이미지 수정 지원',
];

const support = [
  '처음 시작하는 로컬 비즈니스',
  '기존 사이트가 오래되어 정리가 필요한 업종',
  'SNS와 홈페이지가 따로 놀고 있는 상황',
  '구글 지도에서 가게 노출을 더 명확히 만들고 싶은 경우',
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
        <div className="section-heading max-w-4xl">
          <p className="section-kicker">Pricing package</p>
          <h1 className="section-title max-w-4xl">
            하나의 패키지로,
            <br />
            필요한 기본기만 정확하게
          </h1>
          <p className="section-copy max-w-2xl">
            가격은 단순하게, 포함 내역은 명확하게. 처음 시작하는 사장님이 비교하기 쉽고
            결정하기 쉬운 구조로 만들었습니다.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="showcase-panel"
        >
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
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
                웹사이트 제작, 구글 검색 기반 세팅, SNS 연결과 운영 지원까지 한 번에
                정리합니다. 옵션을 늘리기보다 시작에 꼭 필요한 범위만 담았습니다.
              </p>
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

              <div className="grid gap-6 lg:grid-cols-2">
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
                    대부분의 소상공인은 거창한 마케팅보다 기본 세팅의 완성도가 더 중요합니다.
                    검색에서 보이고, 사이트에서 신뢰를 주고, SNS에서 문의로 이어지는 흐름을
                    먼저 안정화하면 이후 확장이 훨씬 쉬워집니다.
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
