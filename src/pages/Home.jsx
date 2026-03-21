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
    title: '홈페이지 제작',
    desc: '가게 소개가 한눈에 보이게 만듭니다.',
    size: 'lg:col-span-5',
  },
  {
    icon: <MapPin size={30} className="text-accent-primary" />,
    title: '구글 지도/검색 등록',
    desc: '고객이 찾을 수 있게 가게 정보를 정리합니다.',
    size: 'lg:col-span-3',
  },
  {
    icon: <Share2 size={30} className="text-accent-primary" />,
    title: '추가 마케팅',
    desc: '원하면 SNS와 광고 시작 세팅도 도와드립니다.',
    size: 'lg:col-span-4',
  },
];

const metrics = ['홈페이지 제작 $795', '구글 지도/검색 등록 포함', '방문 확인 연결 포함', '별도 호스팅비 없이 시작 가능'];

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
    title: '인스타그램 세팅',
    desc: '프로필, 링크, 소개 문구를 가게 정보에 맞게 정리합니다.',
  },
  {
    step: '02',
    title: '페이스북 세팅',
    desc: '페이지 정보와 홈페이지 연결까지 한 번에 맞춰드립니다.',
  },
  {
    step: '03',
    title: '광고 시작 세팅',
    desc: '구글 광고, 인스타/페이스북 광고 시작 구조도 안내합니다.',
  },
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Seo
        title="홈"
        description="Goodman SEO는 호주와 시드니 비즈니스를 위해 홈페이지 제작, 구글 지도/검색 등록, 홈페이지 방문 확인 연결까지 쉽게 시작할 수 있는 기본 세팅을 제공합니다."
        path="/"
        keywords={['호주 홈페이지 제작', '시드니 홈페이지 제작', '호주 구글 지도 등록', '시드니 구글 지도 등록', '비즈니스 홈페이지 제작']}
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
                비즈니스를 위한 기본 홈페이지
              </div>
              <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl md:text-[6.4rem]">
                온라인에 집 한 채
                <br />
                <span className="gradient-text">지으시죠?</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl">
                고객이 찾고 문의할 수 있는
                <br />
                홈페이지와 구글 기본 세팅부터
                <br />
                도와드립니다.
              </p>
              <p className="mt-5 text-base font-semibold leading-relaxed text-accent-primary sm:text-lg">
                지금 시작하기 부담 없는 가격, 홈페이지 제작 $795
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link to="/starter-package" className="primary-button">
                  상세히 보기
                  <ArrowRight size={18} />
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
                  <span className="eyebrow-chip">홈페이지 기본 세팅</span>
                  <p className="text-sm font-semibold tracking-[0.04em] text-text-soft">처음 시작할 때 필요한 기본만 담았습니다</p>
                </div>
                <div className="mt-8 flex items-end justify-between gap-6">
                  <div>
                    <p className="text-sm tracking-[0.04em] text-text-soft">한 번 제작비</p>
                    <p className="mt-2 text-6xl font-black tracking-[-0.08em]">$795</p>
                  </div>
                  <div className="max-w-[160px] text-right text-sm leading-relaxed text-text-muted">
                    필요한 것만 먼저 만들고,
                    <br />
                    원하면 나중에 더할 수 있습니다.
                  </div>
                </div>
                <div className="mt-10 overflow-hidden rounded-[28px] border border-white/10">
                  <img src={heroImage} alt="Goodman SEO package preview" className="h-[260px] w-full object-cover" />
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {['간단한 홈페이지 제작', '구글 지도/검색 등록', '홈페이지 방문 확인 연결', '구글 검색 확인 연결'].map((item) => (
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
            <h2 className="section-title">작은 비즈니스에 딱 필요한 기본부터</h2>
            <p className="section-copy">
              복잡하게 하지 않습니다.
              <br />
              고객이 찾고 문의할 수 있는 구조부터 먼저 잡습니다.
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
              <h2 className="section-title">가볍게 시작하는 기본 홈페이지</h2>
              <p className="section-copy">
                처음에는 크게 만들 필요 없습니다.
                <br />
                필요한 기본부터 시작하면 됩니다.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="pricing-spotlight">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-text-soft">Basic website</p>
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-6xl font-black tracking-[-0.08em]">$795</span>
                  <span className="pb-2 text-lg text-text-muted">한 번</span>
                </div>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent-primary">
                  작은 비즈니스를 위한 시작 가격
                </p>
                <p className="mt-5 text-base leading-relaxed text-text-muted">
                  구글에서 보이고 고객이 찾을 수 있는
                  <br />
                  기본 세팅부터 시작합니다.
                </p>
                <Link to="/pricing" className="primary-button mt-8 inline-flex">
                  서비스 및 가격 보기
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  '간단한 홈페이지 제작',
                  '휴대폰에서도 잘 보이게',
                  '구글 지도/검색 등록',
                  '홈페이지 방문 확인 연결',
                  '구글 검색 확인 연결',
                  '별도 호스팅비 없이 시작 가능',
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
            <p className="section-kicker">Extra services</p>
            <h2 className="section-title">원하시면 여기까지 도와드립니다</h2>
            <p className="section-copy">
              홈페이지를 만든 뒤에도
              <br />
              광고와 SNS 시작까지 이어갈 수 있습니다.
            </p>
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
