import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheckBig, Layout, MapPin, Share2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero3D from '../components/Hero3D';
import Seo from '../components/Seo';
import heroImage from '../assets/hero.png';
import blog1 from '../assets/blog1.png';
import blog3 from '../assets/blog3.png';
import { organizationJsonLd, websiteJsonLd } from '../data/siteSeo';

const serviceCards = [
  {
    icon: <Layout size={30} className="text-accent-primary" />,
    title: 'Website',
    desc: '깔끔한 홈페이지를 만듭니다.',
    size: 'lg:col-span-5',
  },
  {
    icon: <MapPin size={30} className="text-accent-primary" />,
    title: 'Google Business',
    desc: '구글 검색과 지도 노출을 정리합니다.',
    size: 'lg:col-span-3',
  },
  {
    icon: <Share2 size={30} className="text-accent-primary" />,
    title: 'Social Setup',
    desc: 'SNS를 문의 흐름에 맞게 연결합니다.',
    size: 'lg:col-span-4',
  },
];

const metrics = ['월 $500 + GST', '최소 6개월 계약', '웹 + 구글 + SNS', '운영 지원 포함'];

const proofGallery = [
  {
    title: '브랜드 첫 화면',
    subtitle: 'Bold landing page',
    image: heroImage,
    size: 'lg:col-span-7',
  },
  {
    title: '로컬 비즈니스 촬영컷',
    subtitle: 'Photo-led trust',
    image: blog1,
    size: 'lg:col-span-5',
  },
  {
    title: '콘텐츠와 안내 구조',
    subtitle: 'Clear information flow',
    image: blog3,
    size: 'lg:col-span-4',
  },
  {
    title: '패키지 중심 제안',
    subtitle: 'Simple pricing story',
    image: heroImage,
    size: 'lg:col-span-8',
  },
];

const process = [
  {
    step: '01',
    title: '상담',
    desc: '상황을 듣고 바로 정리합니다.',
  },
  {
    step: '02',
    title: '세팅',
    desc: '웹, 구글, SNS를 연결합니다.',
  },
  {
    step: '03',
    title: '운영 시작',
    desc: '바로 운영할 수 있게 맞춥니다.',
  },
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Seo
        title="홈"
        description="Goodman SEO는 소상공인을 위해 웹사이트 제작, 구글 비즈니스 프로필 세팅, SNS 연결을 월 $500 + GST, 최소 6개월 계약 스타터 패키지로 제공합니다."
        path="/"
        keywords={['Goodman SEO', '소상공인 홈페이지 제작', '구글 비즈니스 프로필', '시드니 SEO', '스타터 패키지']}
        jsonLd={[organizationJsonLd, websiteJsonLd]}
      />
      <section className="hero-shell hero-shell--home pt-28 sm:pt-32">
        <Hero3D />
        <div className="container relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="eyebrow-chip mb-6">
                <Sparkles size={16} />
                Small business starter package
              </div>
              <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl md:text-[6.4rem]">
                월 $500으로
                <br />
                온라인 기본기를
                <br />
                <span className="gradient-text">제대로 세팅합니다</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl">
                홈페이지, 구글, SNS.
                <br />
                필요한 것만 한 번에 정리해드립니다.
                <br />
                최소 6개월 계약으로 진행됩니다.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link to="/starter-package" className="primary-button">
                  패키지 보기
                  <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="secondary-button">
                  무료 상담 신청
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-3 xl:grid-cols-4">
                {metrics.map((item) => (
                  <div key={item} className="metric-pill">
                    <CircleCheckBig size={16} className="text-accent-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="hero-card-wrap"
            >
              <div className="hero-proof-card">
                <div className="hero-proof-top">
                  <span className="eyebrow-chip">Starter package</span>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-text-soft">
                    One plan. Clear scope.
                  </p>
                </div>
                <div className="mt-8 flex items-end justify-between gap-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-text-soft">Monthly</p>
                    <p className="mt-2 text-6xl font-black tracking-[-0.08em]">$500</p>
                  </div>
                  <div className="max-w-[160px] text-right text-sm leading-relaxed text-text-muted">
                    처음 시작할 때 필요한 것만 담았습니다.
                  </div>
                </div>
                <div className="mt-10 overflow-hidden rounded-[28px] border border-white/10">
                  <img src={heroImage} alt="Goodman SEO package preview" className="h-[260px] w-full object-cover" />
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {['반응형 웹사이트', '구글 지도/검색 세팅', 'SNS 비즈니스 연결', '운영 지원 포함'].map((item) => (
                    <div key={item} className="mini-feature">
                      <CircleCheckBig size={16} className="text-accent-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">What we set up</p>
            <h2 className="section-title">딱 필요한 세 가지를 한 번에</h2>
            <p className="section-copy">
              복잡하게 하지 않습니다.
              <br />
              가장 필요한 세 가지만 먼저 잡습니다.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            {serviceCards.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`feature-card ${service.size}`}
              >
                <div className="feature-icon">{service.icon}</div>
                <h3 className="mt-10 text-3xl font-black tracking-[-0.04em]">{service.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-text-muted">{service.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">Visual proof</p>
            <h2 className="section-title">첫인상부터 믿음이 가게</h2>
            <p className="section-copy">
              사진, 화면, 분위기까지
              <br />
              보기 좋게 정리합니다.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-12">
            {proofGallery.map((item, index) => (
              <motion.article
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`gallery-card ${item.size}`}
              >
                <img src={item.image} alt={item.title} className="gallery-card__image" />
                <div className="gallery-card__overlay" />
                <div className="gallery-card__content">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-soft">{item.subtitle}</p>
                  <h3 className="mt-3 text-3xl font-black tracking-[-0.05em]">{item.title}</h3>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="showcase-panel">
            <div className="section-heading max-w-2xl">
              <p className="section-kicker">Simple pricing</p>
              <h2 className="section-title">복잡한 옵션 없이, 한 패키지로 시작</h2>
              <p className="section-copy">
                가격은 하나,
                <br />
                해야 할 일도 명확합니다.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="pricing-spotlight">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-text-soft">Starter</p>
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-6xl font-black tracking-[-0.08em]">$500</span>
                  <span className="pb-2 text-lg text-text-muted">/ month</span>
                </div>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent-primary">
                  최소 6개월 계약
                </p>
                <p className="mt-5 text-base leading-relaxed text-text-muted">
                  필요한 것만 담은 시작 패키지입니다.
                </p>
                <Link to="/starter-package" className="primary-button mt-8 inline-flex">
                  포함 내역 자세히 보기
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  '모바일 최적화 웹사이트 제작',
                  'Google Business Profile 세팅',
                  'Instagram / Facebook 연결',
                  '최소 6개월 계약',
                  '월간 성과 요약 리포트',
                  '텍스트와 이미지 수정 지원',
                ].map((item) => (
                  <div key={item} className="benefit-row">
                    <CircleCheckBig size={18} className="text-accent-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">How it works</p>
            <h2 className="section-title">빠르게 시작하고, 안정적으로 운영하기</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="process-card"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-text-soft">{item.step}</p>
                <h3 className="mt-5 text-3xl font-black tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-text-muted">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
