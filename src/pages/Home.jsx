import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheckBig, Layout, MapPin, Share2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero3D from '../components/Hero3D';
import Seo from '../components/Seo';
import { organizationJsonLd, websiteJsonLd } from '../data/siteSeo';

const problemSignals = [
  '구글에는 나오지만 홈페이지 정보가 약하다',
  '홈페이지는 있는데 Google Business Profile이 비어 있다',
  '인스타그램, 페이스북, 홈페이지가 따로 논다',
  '채널마다 정보와 인상이 달라 신뢰가 약해진다',
];

const scopeCards = [
  {
    icon: <Layout size={22} className="text-accent-primary" />,
    title: '홈페이지',
    desc: '정보 구성과 문의 동선이 제대로 작동하는지 확인합니다.',
  },
  {
    icon: <MapPin size={22} className="text-accent-primary" />,
    title: 'Google Business Profile',
    desc: '검색 노출 상태와 핵심 정보 정리 여부를 점검합니다.',
  },
  {
    icon: <Share2 size={22} className="text-accent-primary" />,
    title: 'Instagram & Facebook',
    desc: '프로필 정보와 다른 채널과의 연결이 맞는지 확인합니다.',
  },
];

const executionPaths = [
  { title: '홈페이지 제작', desc: '스타터부터 맞춤형까지' },
  { title: 'SEO', desc: '검색 노출 기본 세팅' },
  { title: 'Google Business Profile', desc: '로컬 검색 최적화' },
  { title: 'SNS & 광고', desc: '채널 세팅과 운영 지원' },
];

const quickChips = ['Google', '홈페이지', 'Instagram', 'Facebook', '한국어 상담'];

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Seo
        title="온라인 점검"
        description="GoodmanSEO는 구글, 홈페이지, 인스타그램, 페이스북 상태를 함께 보고 어디가 비어 있는지 무료로 점검해드립니다. 한국어·영어 지원, 호주 전역 및 전 세계 원격 작업 가능합니다."
        path="/"
        keywords={['온라인 점검', 'Google Business Profile', '온페이지 SEO', '비즈니스 홈페이지', '인스타그램 점검', '페이스북 점검']}
        jsonLd={[organizationJsonLd, websiteJsonLd]}
      />

      {/* ── Hero ── */}
      <section className="hero-shell hero-shell--home pt-28 sm:pt-32">
        <Hero3D />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-[62rem]"
          >
            <div className="eyebrow-chip mb-5">
              <Sparkles size={14} />
              한국어·영어 지원 · 호주 전역 · 전 세계 원격 작업 가능
            </div>

            <h1 className="text-[3.4rem] font-black leading-[0.93] tracking-[-0.07em] sm:text-[5.2rem] md:text-[6.4rem]">
              지금 내 비즈니스,
              <br />
              온라인에서 어떻게
              <br />
              보일까요?
            </h1>

            <p className="mt-6 max-w-[38rem] text-[1rem] leading-[1.65] text-text-muted">
              구글, 홈페이지, 인스타그램, 페이스북 — 어디가 비어 있는지 무료로 점검해드립니다.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {quickChips.map((item) => (
                <div key={item} className="metric-pill">
                  <CircleCheckBig size={13} className="text-accent-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="primary-button">
                무료 점검 신청하기
                <ArrowRight size={16} />
              </Link>
              <Link to="/pricing" className="secondary-button">
                서비스 및 가격 보기
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="section-block">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-title">채널이 따로 놀면<br />고객은 그냥 지나칩니다</h2>
            <p className="section-copy">한 곳만 잘 돼 있어도 연결이 끊기면 문의는 오지 않습니다.</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {problemSignals.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                viewport={{ once: true }}
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

      {/* ── Scope ── */}
      <section className="section-block">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-title">구글, 홈페이지, SNS를<br />한 번에 봅니다</h2>
            <p className="section-copy">채널 하나만 보는 게 아니라 전체 흐름을 함께 점검합니다.</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {scopeCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.38, delay: index * 0.08 }}
                viewport={{ once: true }}
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

      {/* ── After inspection ── */}
      <section className="section-block">
        <div className="container">
          <div className="showcase-panel">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <h2 className="text-[clamp(2rem,3.4vw,3.2rem)] font-black leading-[1.0] tracking-[-0.06em]">
                  점검 후, 필요한 것만
                  <br />
                  선택해 진행합니다
                </h2>
                <p className="mt-4 text-[0.93rem] leading-[1.65] text-text-muted">
                  홈페이지, SEO, GBP, SNS 중 결과에 맞는 것만 선택해 진행할 수 있습니다.
                </p>
                <Link to="/pricing" className="primary-button mt-7 inline-flex">
                  서비스 및 가격 보기
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {executionPaths.map((path, index) => (
                  <motion.div
                    key={path.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.32, delay: index * 0.07 }}
                    viewport={{ once: true }}
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

      {/* ── Final CTA ── */}
      <section className="section-block">
        <div className="container">
          <div className="showcase-panel text-center">
            <h2 className="section-title mx-auto">무료 점검으로<br />지금 상태부터 확인해보세요</h2>
            <p className="section-copy mx-auto">
              구글, 홈페이지, 인스타그램, 페이스북 — 어디가 비어 있는지 먼저 확인해드립니다.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link to="/contact" className="primary-button">
                무료 점검 신청하기
                <ArrowRight size={16} />
              </Link>
              <Link to="/pricing" className="secondary-button">
                서비스 및 가격 보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
