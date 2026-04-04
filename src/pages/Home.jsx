import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheckBig, Layout, MapPin, Share2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero3D from '../components/Hero3D';
import Seo from '../components/Seo';
import heroOwner from '../assets/depositphotos/hero-owner.jpg';
import storefrontOwner from '../assets/depositphotos/storefront-owner.jpg';
import cleaningWorker from '../assets/depositphotos/cleaning-worker.jpg';
import cafeOwners from '../assets/depositphotos/cafe-owners.jpg';
import restaurantDoorway from '../assets/depositphotos/restaurant-doorway.jpg';
import { organizationJsonLd, websiteJsonLd } from '../data/siteSeo';

const serviceCards = [
  {
    icon: <Layout size={30} className="text-accent-primary" />,
    title: '고객이 문의로 이어집니다',
    desc: '인스타만 있거나 구글 정보가 비어 있어도, 홈페이지가 정리돼 있으면 더 쉽게 신뢰하고 문의합니다.',
    size: 'lg:col-span-5',
  },
  {
    icon: <MapPin size={30} className="text-accent-primary" />,
    title: '검색에서 더 잘 보입니다',
    desc: '근처 비즈니스를 찾는 고객이 봤을 때 정보가 한눈에 정리되도록 맞춰드립니다.',
    size: 'lg:col-span-3',
  },
  {
    icon: <Share2 size={30} className="text-accent-primary" />,
    title: '가게 느낌이 더 또렷해집니다',
    desc: '사진과 구성만 잘 정리해도 비즈니스가 더 믿음 있게 보입니다.',
    size: 'lg:col-span-4',
  },
];

const metrics = ['홈페이지 제작 $795', '3개월 안심 유지보수 포함', '구글 지도/검색 등록 포함', '별도 호스팅비 없이 시작 가능'];

const situations = [
  '비즈니스는 운영 중인데 온라인에는 정리된 정보가 없습니다.',
  '구글에서 비즈니스가 잘 안 보이거나 정보가 비어 있습니다.',
  '인스타는 있는데 홈페이지가 없어 문의가 이어지지 않습니다.',
  '무엇부터 해야 할지 몰라 계속 미루고 있습니다.',
];

const consequences = [
  '검색에 안 보이면 고객은 다른 가게를 먼저 보게 됩니다.',
  '서비스와 가격이 흩어져 있으면 문의까지 이어지기 어렵습니다.',
  '첫 화면이 정리되지 않으면 가게 신뢰도도 약해집니다.',
];

const proofGallery = [
  {
    title: '방문을 유도하는 세팅',
    subtitle: '방문 유도',
    image: storefrontOwner,
    size: 'lg:col-span-7',
  },
  {
    title: '신뢰감을 높이는 세팅',
    subtitle: '신뢰감',
    image: cafeOwners,
    size: 'lg:col-span-5',
  },
  {
    title: '예약이 쉬운 동선',
    subtitle: '예약 유도',
    image: cleaningWorker,
    size: 'lg:col-span-5',
  },
  {
    title: '첫인상이 좋은 매장',
    subtitle: '브랜드 첫인상',
    image: restaurantDoorway,
    size: 'lg:col-span-7',
  },
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Seo
        title="홈"
        description="Goodman SEO는 호주와 시드니 비즈니스를 위해 홈페이지 제작, 구글 지도/검색 등록, 홈페이지 방문 확인 연결, 3개월 안심 유지보수까지 쉽게 시작할 수 있는 기본 세팅을 제공합니다."
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
                소상공인을 위한 기본 홈페이지
              </div>
              <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl md:text-[6.4rem]">
                비즈니스 홈페이지,
                <br />
                어렵지 않게 시작하세요.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl">
                구글 지도와 검색에서 보이게 하고,
                <br />
                고객이 바로 문의할 수 있게 정리해드립니다.
                <br />
                기본 홈페이지는 $795부터 시작합니다.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link to="/starter-package" className="primary-button">
                  서비스 보기
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
                <div className="mt-10">
                  <p className="text-sm tracking-[0.04em] text-text-soft">기본 홈페이지</p>
                  <p className="mt-3 text-7xl font-black leading-none tracking-[-0.1em] sm:text-[5.5rem]">$795</p>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent-primary">
                    3개월 안심 유지보수 포함
                  </p>
                </div>
                <div className="mt-10 overflow-hidden rounded-[28px] border border-white/10">
                  <img src={heroOwner} alt="비즈니스 대표 이미지 예시" className="h-[260px] w-full object-cover" />
                </div>
                <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-5">
                  <p className="text-base leading-relaxed text-text-muted">
                    필요한 것만 먼저 만들고,
                    <br />
                    오픈 후 3개월은 안심하고 운영하실 수 있게 도와드립니다.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">현재 상황</p>
            <h2 className="section-title">혹시 이런 상황이신가요?</h2>
            <p className="section-copy">
              하나라도 해당되면
              <br />
              홈페이지부터 정리할 타이밍입니다.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="grid gap-4">
              {situations.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="soft-panel"
                >
                  <div className="benefit-row">
                    <CircleCheckBig size={18} className="text-accent-primary" />
                    <span>{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="showcase-panel">
              <p className="section-kicker">왜 중요한지</p>
              <h3 className="mt-3 text-3xl font-black tracking-[-0.05em]">비워두면 고객이 그냥 지나갑니다</h3>
              <p className="mt-6 text-base leading-relaxed text-text-muted">
                요즘 고객은 먼저 검색합니다.
                <br />
                정보가 안 보이거나 정리가 안 되어 있으면
                <br />
                좋은 가게도 먼저 지나갑니다.
              </p>
              <div className="mt-8 grid gap-3">
                {consequences.map((item) => (
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
            <p className="section-kicker">무엇을 해드리나요</p>
            <h2 className="section-title">기본만 잘 잡아도 달라집니다</h2>
            <p className="section-copy">
              고객이 찾고, 보고, 문의하기 쉬운
              <br />
              구조부터 정리해드립니다.
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
            <p className="section-kicker">포트폴리오</p>
            <h2 className="section-title">업종별로 어떤 느낌인지 먼저 보세요</h2>
            <p className="section-copy">
              실제로는 이런 느낌으로 보일 수 있습니다.
              <br />
              업종에 따라 첫인상과 문의 동선을 다르게 잡습니다.
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
              <p className="section-kicker">가격 안내</p>
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
                  3개월 안심 유지보수 포함
                </p>
                <p className="mt-5 text-base leading-relaxed text-text-muted">
                  구글에서 보이고 고객이 찾을 수 있는
                  <br />
                  기본 세팅부터 시작합니다.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  '간단한 홈페이지 제작',
                  '휴대폰에서도 잘 보이게',
                  '구글 지도/검색 등록',
                  '홈페이지 방문 확인 연결',
                  '3개월 안심 유지보수 포함',
                  '이후 유지보수는 필요 시 선택 가능',
                ].map((item) => (
                  <div key={item} className="benefit-row">
                    <CircleCheckBig size={18} className="text-accent-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">10분 상담</p>
                <p className="mt-3 text-base leading-relaxed text-text-muted">
                  10분 상담으로 무엇부터 해야 할지 같이 정리해드립니다.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link to="/contact" className="primary-button inline-flex">
                  무료 상담 신청하기
                  <ArrowRight size={18} />
                </Link>
                <Link to="/pricing" className="secondary-button">
                  서비스 및 가격 보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
