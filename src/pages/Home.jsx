import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheckBig, Layout, MapPin, Share2, Sparkles } from 'lucide-react';
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

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.68, delay, ease },
  viewport: { once: true, amount: 0.25 },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.68, delay, ease },
  viewport: { once: true, amount: 0.25 },
});

const problemSignals = [
  '구글에는 나오지만 홈페이지 정보가 충분하지 않다',
  '홈페이지는 있는데 구글 비즈니스 프로필 정보가 비어 있다',
  '인스타그램, 페이스북, 홈페이지 정보가 연결되지 않는다',
  '채널마다 정보가 달라 고객이 헷갈릴 수 있다',
];

const scopeCards = [
  {
    icon: <Layout size={22} className="text-accent-primary" />,
    title: '홈페이지',
    desc: '홈페이지가 있다면 정보가 잘 정리되어 있는지 함께 확인합니다.',
  },
  {
    icon: <MapPin size={22} className="text-accent-primary" />,
    title: '구글 비즈니스 프로필',
    desc: '구글에서 보이는 정보와 기본 설정 상태를 함께 점검합니다.',
  },
  {
    icon: <Share2 size={22} className="text-accent-primary" />,
    title: '인스타그램 · 페이스북',
    desc: 'SNS 정보가 다른 채널과 어긋나지 않는지 함께 확인합니다.',
  },
];

const executionPaths = [
  { title: '홈페이지 제작', desc: '홈페이지가 필요하다면 단계에 맞는 옵션으로 진행합니다.' },
  { title: 'SEO 세팅', desc: '검색 노출을 위한 기본 세팅부터 차근차근 시작합니다.' },
  { title: '구글 비즈니스 프로필 관리', desc: '구글에서 보이는 정보와 상태를 따로 정리할 수 있습니다.' },
  { title: 'SNS 및 운영 지원', desc: 'SNS 운영과 이후 관리가 필요하면 이어서 도와드립니다.' },
];

const quickChips = ['Google', '홈페이지', 'Instagram', 'Facebook', '한국어 상담'];

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Seo
        title="온라인 점검"
        description="GoodmanSEO는 구글, 홈페이지, 인스타그램, 페이스북을 함께 보고 부족한 부분이 어디인지 무료로 점검해드립니다. 한국어·영어 지원, 호주 전역 작업 가능합니다."
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
              {['지금 내 비즈니스,', '온라인에서 어떻게', '보일까요?'].map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ y: '110%', opacity: 0 }}
                  animate={{ y: '0%', opacity: 1 }}
                  transition={{ duration: 0.75, delay: 0.18 + i * 0.12, ease }}
                >
                  <h1 className="text-[3.4rem] font-black leading-[0.93] tracking-[-0.07em] sm:text-[5.2rem] md:text-[6.4rem]">
                    {line}
                  </h1>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.6, ease }}
              className="mt-6 max-w-[38rem] text-[1rem] leading-[1.65] text-text-muted"
            >
              구글, 홈페이지, 인스타그램, 페이스북을 함께 보고
              <br />
              부족한 부분이 어디인지 무료로 점검해드립니다.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.72, ease }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {quickChips.map((item) => (
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

      <section className="section-block">
        <div className="container w-full">
          <motion.div {...fadeUp(0)} className="section-heading">
            <h2 className="section-title">온라인 정보가 제각각이면<br />고객은 망설입니다</h2>
            <p className="section-copy">구글, 홈페이지, SNS 정보가 서로 다르면 비즈니스 전체 인상이 흐려질 수 있습니다.</p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {problemSignals.map((item, i) => (
              <motion.div
                key={item}
                {...fadeUp(i * 0.1 + 0.15)}
                className="soft-panel"
              >
                <div className="benefit-row">
                  <CircleCheckBig size={15} className="text-accent-primary" />
                  <span>{item}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container w-full">
          <motion.div {...fadeLeft(0)} className="section-heading">
            <h2 className="section-title">온라인에 보이는 모습을<br />함께 점검합니다</h2>
            <p className="section-copy">한 채널만 따로 보는 게 아니라 고객이 실제로 보게 되는 온라인 인상을 함께 확인합니다.</p>
          </motion.div>

          <div className="grid gap-4 lg:grid-cols-3">
            {scopeCards.map((card, i) => (
              <motion.article
                key={card.title}
                {...fadeUp(i * 0.14 + 0.1, 56)}
                className="feature-card"
              >
                <div className="feature-icon">{card.icon}</div>
                <h3 className="mt-6 text-[1.45rem] font-black tracking-[-0.04em]">{card.title}</h3>
                <p className="mt-2 text-[0.93rem] leading-[1.65] text-text-muted">{card.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container w-full">
          <div className="showcase-panel">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <motion.div {...fadeLeft(0.05)}>
                <h2 className="text-[clamp(2rem,3.4vw,3.2rem)] font-black leading-[1.0] tracking-[-0.06em]">
                  점검 후, 맞는 서비스부터
                  <br />
                  이어서 진행할 수 있습니다
                </h2>
                <p className="mt-4 text-[0.93rem] leading-[1.65] text-text-muted">
                  점검 결과에 따라 홈페이지, SEO, 구글 비즈니스 프로필, SNS 운영 중
                  지금 필요한 것부터 차례대로 안내해드립니다.
                </p>
                <Link to="/pricing" className="primary-button mt-7 inline-flex">
                  서비스 및 가격 보기
                  <ArrowRight size={16} />
                </Link>
              </motion.div>

              <div className="grid grid-cols-2 gap-3">
                {executionPaths.map((path, i) => (
                  <motion.div
                    key={path.title}
                    {...fadeRight(i * 0.1 + 0.15)}
                    className="soft-panel"
                  >
                    <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-text-soft">{path.title}</p>
                    <p className="mt-2 text-[0.9rem] text-text-muted">{path.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container w-full">
          <motion.div {...fadeUp(0, 40)} className="showcase-panel text-center">
            <h2 className="section-title mx-auto">무료 점검으로<br />지금 상태부터 확인해보세요</h2>
            <p className="section-copy mx-auto">
              구글, 홈페이지, 인스타그램, 페이스북을 함께 보고
              <br />
              부족한 부분이 어디인지 먼저 확인해드립니다.
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