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

const heroSteps = [
  '필요한 내용을 10분 상담으로 함께 정리합니다.',
  '비즈니스 소개와 연락 흐름이 보이게 홈페이지를 제작합니다.',
  '구글 지도·검색 등록과 기본 설정까지 마무리합니다.',
  '오픈 후 3개월은 편하게 운영하실 수 있게 도와드립니다.',
];

const serviceCards = [
  {
    icon: <Layout size={30} className="text-accent-primary" />,
    title: '고객이 연락하기 쉬워집니다',
    desc: '비즈니스 소개, 연락처, 서비스 내용을 한곳에 모아두면 고객이 망설이지 않고 바로 문의할 수 있습니다.',
    size: 'lg:col-span-5',
  },
  {
    icon: <MapPin size={30} className="text-accent-primary" />,
    title: '구글에서 찾기 쉬워집니다',
    desc: '위치, 서비스, 연락처를 분명하게 보여드려 근처 고객이 더 쉽게 찾을 수 있게 돕습니다.',
    size: 'lg:col-span-3',
  },
  {
    icon: <Share2 size={30} className="text-accent-primary" />,
    title: '처음 보는 고객에게 더 믿음 있게 보입니다',
    desc: '사진과 문구를 업종에 맞게 정리해, 처음 방문한 고객에게도 안정감 있고 믿을 수 있는 인상을 전합니다.',
    size: 'lg:col-span-4',
  },
];

const metrics = ['제작비 $795부터', '구글 지도·검색 등록 포함', '3개월 유지보수 포함'];

const situations = [
  '비즈니스는 운영 중인데, 온라인에 제대로 소개된 곳이 없습니다.',
  '구글에서 비즈니스가 잘 안 보이거나 정보가 오래됐습니다.',
  '인스타그램은 있지만, 고객이 한눈에 볼 홈페이지가 없습니다.',
  '무엇부터 해야 할지 몰라 계속 미루고 있습니다.',
];

const consequences = [
  '검색에 잘 보이지 않으면 고객은 다른 비즈니스를 먼저 찾게 됩니다.',
  '서비스와 연락 방법이 흩어져 있으면 문의로 이어지기 어렵습니다.',
  '첫 화면이 어수선하면 실제보다 덜 믿음직하게 보일 수 있습니다.',
];

const proofGallery = [
  {
    title: '매장 분위기가 잘 보이는 첫 화면',
    subtitle: '방문 유도',
    image: storefrontOwner,
    size: 'lg:col-span-7',
  },
  {
    title: '서비스를 믿고 볼 수 있는 소개',
    subtitle: '신뢰 형성',
    image: cafeOwners,
    size: 'lg:col-span-5',
  },
  {
    title: '예약 문의가 바로 보이는 구성',
    subtitle: '예약 흐름',
    image: cleaningWorker,
    size: 'lg:col-span-5',
  },
  {
    title: '업종에 맞게 정리한 첫인상',
    subtitle: '브랜드 인상',
    image: restaurantDoorway,
    size: 'lg:col-span-7',
  },
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Seo
        title="홈"
        description="Goodman SEO는 호주 한인 소상공인을 위해 홈페이지 제작, 구글 지도·검색 등록, 홈페이지 방문자 확인 설정, 3개월 유지보수까지 한 번에 도와드립니다."
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
                호주 한인 소상공인을 위한 홈페이지 제작
              </div>
              <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl md:text-[6.4rem]">
                비즈니스를 믿고 찾게 만드는 홈페이지,
                <br />
                부담 없이 시작하세요.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl">
                고객이 비즈니스를 쉽게 찾고 바로 연락할 수 있도록
                <br />
                필요한 내용만 담은 홈페이지를 만들어드립니다.
                <br />
                기본 홈페이지는 $795부터 시작합니다.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="primary-button">
                  무료 상담 신청하기
                  <ArrowRight size={18} />
                </Link>
                <Link to="/pricing" className="secondary-button">
                  서비스 및 가격 보기
                </Link>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
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
                  <span className="eyebrow-chip">처음 만드는 분께 추천</span>
                  <p className="text-sm font-semibold tracking-[0.04em] text-text-soft">상담부터 오픈까지 복잡하지 않게 진행합니다</p>
                </div>
                <div className="mt-10">
                  <p className="text-sm tracking-[0.04em] text-text-soft">이렇게 진행됩니다</p>
                  <div className="mt-6 grid gap-3">
                    {heroSteps.map((item) => (
                      <div key={item} className="benefit-row">
                        <CircleCheckBig size={18} className="text-accent-primary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-10 overflow-hidden rounded-[28px] border border-white/10">
                  <img src={heroOwner} alt="비즈니스 대표 이미지 예시" className="h-[260px] w-full object-cover" />
                </div>
                <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-5">
                  <p className="text-base leading-relaxed text-text-muted">
                    무엇이 필요한지 아직 정리되지 않아도 괜찮습니다.
                    <br />
                    바쁜 사장님도 바로 이해하실 수 있게
                    <br />
                    필요한 순서대로 차분히 도와드립니다.
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
            <p className="section-kicker">이런 고민이 있다면</p>
            <h2 className="section-title">혹시 이런 고민이 있으신가요?</h2>
            <p className="section-copy">
              하나라도 해당된다면,
              <br />
              지금 온라인 첫인상을 정리할 때입니다.
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
              <h3 className="mt-3 text-3xl font-black tracking-[-0.05em]">온라인에 안 보이면 좋은 비즈니스도 지나칩니다</h3>
              <p className="mt-6 text-base leading-relaxed text-text-muted">
                요즘 고객은 먼저 검색하고 비교합니다.
                <br />
                온라인 정보가 없거나 흐릿하면,
                <br />
                비즈니스를 알기 전에 다른 곳으로 넘어갑니다.
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
            <h2 className="section-title">고객이 찾고 연락하기 쉬운 구조를 만듭니다</h2>
            <p className="section-copy">
              비즈니스 소개, 연락 방법, 구글 노출까지
              <br />
              기본 흐름을 한 번에 정리해드립니다.
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
            <p className="section-kicker">제작 예시</p>
            <h2 className="section-title">업종에 따라 이런 느낌으로 제작할 수 있습니다</h2>
            <p className="section-copy">
              업종에 따라 고객이 먼저 보고 싶어하는 정보가 다릅니다.
              <br />
              그래서 화면 구성과 문의 흐름도 업종에 맞게 달라집니다.
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
              <h2 className="section-title">처음 시작하기 좋은 기본 홈페이지</h2>
              <p className="section-copy">
                처음부터 크게 만들 필요는 없습니다.
                <br />
                지금 필요한 내용부터 차근차근 시작하면 됩니다.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="pricing-spotlight">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-text-soft">기본 홈페이지</p>
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-6xl font-black tracking-[-0.08em]">$795</span>
                  <span className="pb-2 text-lg text-text-muted">한 번</span>
                </div>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-accent-primary">
                  3개월 안심 유지보수 포함
                </p>
                <p className="mt-5 text-base leading-relaxed text-text-muted">
                  구글에서 찾기 쉽고 고객이 바로 연락할 수 있는
                  <br />
                  기본 구조부터 준비해드립니다.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  '간단한 홈페이지 제작',
                  '휴대폰에서도 잘 보이게',
                  '구글 지도/검색 등록',
                  '홈페이지 방문자 확인 설정',
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
                  어떤 내용이 필요한지,
                  <br />
                  지금 무엇부터 하면 좋은지 10분 안에 같이 정리해드립니다.
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

