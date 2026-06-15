import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheckBig, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero3D from '../components/Hero3D';
import Seo from '../components/Seo';
import { organizationJsonLd, websiteJsonLd } from '../data/siteSeo';

const ease = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0, y = 48) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.72, delay, ease },
  viewport: { once: true, amount: 0.25 },
});

const checkItems = [
  '구글 비즈니스 프로필',
  '홈페이지',
  'Instagram',
  'Facebook',
];

const simpleChecks = [
  '기본 정보가 비어 있는지',
  '채널마다 정보가 다른지',
  '문의 버튼이 잘 보이는지',
  '먼저 고칠 곳이 분명한지',
];

const nextSteps = [
  '무엇을 먼저 고칠지',
  '어떤 서비스가 맞는지',
  '문의 전에 준비할 것',
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Seo
        title="온라인 점검"
        description="GoodmanSEO는 구글 비즈니스 프로필, 홈페이지, 인스타그램, 페이스북을 함께 보고 먼저 고칠 부분을 무료로 점검해드립니다."
        path="/"
        keywords={['온라인 점검', 'Google Business Profile', '온페이지 SEO', '비즈니스 홈페이지', '인스타그램 점검', '페이스북 점검']}
        jsonLd={[organizationJsonLd, websiteJsonLd]}
      />

      <section className="hero-shell hero-shell--home pt-28 sm:pt-32">
        <Hero3D />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-[62rem]"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="eyebrow-chip mb-5"
            >
              <Sparkles size={14} />
              한국어 · 영어 · 호주 전역
            </motion.div>

            <div className="overflow-hidden">
              <h1 className="text-[3.4rem] font-black leading-[0.93] tracking-[-0.04em] sm:text-[5.2rem] md:text-[6rem]">
                {['온라인에서', '내 비즈니스가', '어떻게 보일까요?'].map((line, i) => (
                  <motion.span
                    key={line}
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{ duration: 0.75, delay: 0.18 + i * 0.12, ease }}
                    className="block"
                  >
                    {line}
                  </motion.span>
                ))}
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.6, ease }}
              className="mt-6 max-w-[38rem] text-[1rem] leading-[1.65] text-text-muted"
            >
              고객이 확인하는 네 곳을 보고
              <br />
              먼저 고칠 부분을 짚어드립니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.72, ease }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {checkItems.map((item) => (
                <div key={item} className="metric-pill">
                  <CircleCheckBig size={13} className="text-accent-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.84, ease }}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <Link to="/contact" className="primary-button">
                무료 점검 신청하기
                <ArrowRight size={16} />
              </Link>
              <Link to="/pricing" className="secondary-button">
                서비스 및 가격 보기
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-block section-block--compact">
        <div className="container w-full">
          <motion.div {...fadeUp(0)} className="section-heading">
            <h2 className="section-title">고객은 여러 곳을<br />함께 봅니다</h2>
            <p className="section-copy">정보가 다르면 문의하기 전에 멈춥니다.</p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {simpleChecks.map((item, i) => (
              <motion.div
                key={item}
                {...fadeUp(i * 0.1 + 0.15)}
                className="benefit-row"
              >
                <CircleCheckBig size={15} className="text-accent-primary" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-block--compact">
        <div className="container w-full">
          <motion.div {...fadeUp(0)} className="section-heading">
            <h2 className="section-title">고객이 보는 곳부터<br />확인합니다</h2>
            <p className="section-copy">기본 정보와 문의 흐름을 먼저 봅니다.</p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {checkItems.map((item, i) => (
              <motion.div
                key={item}
                {...fadeUp(i * 0.14 + 0.1, 56)}
                className="soft-panel home-scope-item"
              >
                <span className="text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-text-soft">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 text-[1.25rem] font-black tracking-[-0.04em]">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block section-block--compact">
        <div className="container w-full">
          <div className="showcase-panel">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <motion.div {...fadeUp(0.05)}>
                <h2 className="text-[clamp(2rem,3.4vw,3.2rem)] font-black leading-[1.0] tracking-[-0.04em]">
                  점검 후에는
                  <br />순서를 정합니다
                </h2>
                <p className="mt-4 text-[0.93rem] leading-[1.65] text-text-muted">
                  지금 필요한 일부터 안내합니다.
                </p>
                <Link to="/pricing" className="primary-button mt-7 inline-flex">
                  서비스 및 가격 보기
                  <ArrowRight size={16} />
                </Link>
              </motion.div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {nextSteps.map((item, i) => (
                  <motion.div
                    key={item}
                    {...fadeUp(i * 0.1 + 0.15)}
                    className="benefit-row"
                  >
                    <CircleCheckBig size={15} className="text-accent-primary" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block section-block--compact">
        <div className="container w-full">
          <motion.div {...fadeUp(0, 40)} className="showcase-panel text-center">
            <h2 className="section-title mx-auto">먼저<br />무료로 확인하세요</h2>
            <p className="section-copy mx-auto">
              현재 상태를 보고 다음 순서를 정해드립니다.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <Link to="/contact" className="primary-button">
                무료 점검 신청하기
                <ArrowRight size={16} />
              </Link>
              <Link to="/pricing" className="secondary-button">
                서비스 및 가격 보기
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
