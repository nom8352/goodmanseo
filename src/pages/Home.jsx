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
    title: '이탈하던 고객이 문의로 이어집니다',
    desc: '허술한 SNS나 비어 있는 구글 정보만 보고 지나가던 고객도, 깔끔하게 정리된 홈페이지를 보면 더 쉽게 신뢰하고 문의를 남기게 됩니다.',
    size: 'lg:col-span-5',
  },
  {
    icon: <MapPin size={30} className="text-accent-primary" />,
    title: '동네 검색에서 더 잘 보이게 됩니다',
    desc: '호주 고객들이 근처 비즈니스를 찾을 때 정보가 더 잘 정리되고 눈에 띄게 보여 선택받기 쉬워집니다.',
    size: 'lg:col-span-3',
  },
  {
    icon: <Share2 size={30} className="text-accent-primary" />,
    title: '저가 경쟁 탈피, 브랜드화',
    desc: '고퀄리티 사진과 세련된 세팅으로 내 비즈니스의 진짜 가치를 인정받고 제값을 받습니다.',
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
    title: '실제 매장 앞에서 신뢰가 가게',
    subtitle: 'Real storefront portrait',
    image: storefrontOwner,
    size: 'lg:col-span-7',
  },
  {
    title: '부부 운영 매장도 따뜻하게',
    subtitle: 'Warm owner portrait',
    image: cafeOwners,
    size: 'lg:col-span-5',
  },
  {
    title: '서비스업도 전문적으로',
    subtitle: 'Service business portrait',
    image: cleaningWorker,
    size: 'lg:col-span-4',
  },
  {
    title: '가게 분위기가 바로 보이게',
    subtitle: 'Local business entrance',
    image: restaurantDoorway,
    size: 'lg:col-span-8',
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
                비즈니스를 위한 기본 홈페이지
              </div>
              <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl md:text-[6.4rem]">
                24시간 쉬지 않는
                <br />
                <span className="gradient-text">온라인 영업사원을</span>
                <br />
                고용하세요.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl">
                잘 만들어진 홈페이지와 구글 지도는
                <br />
                사장님이 주무시는 동안에도 호주 현지 손님을
                <br />
                알아서 끌어옵니다. 단 $795로 완벽한 온라인 자동 영업망을 세팅하세요.
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
                <div className="mt-10">
                  <p className="text-sm tracking-[0.04em] text-text-soft">한 번 제작비</p>
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
            <p className="section-kicker">Your situation</p>
            <h2 className="section-title">혹시 이런 상황이신가요?</h2>
            <p className="section-copy">
              하나라도 해당되면
              <br />
              온라인 기본 세팅이 필요한 상태입니다.
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
              <p className="section-kicker">Why it matters</p>
              <h3 className="mt-3 text-3xl font-black tracking-[-0.05em]">비워두면 고객을 놓치게 됩니다</h3>
              <p className="mt-6 text-base leading-relaxed text-text-muted">
                요즘 고객은 먼저 검색합니다.
                <br />
                검색에서 안 보이거나 정보가 정리되지 않으면
                <br />
                좋은 가게도 그냥 지나치게 됩니다.
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
            <p className="section-kicker">What we set up</p>
            <h2 className="section-title">기본만 잘 잡아도 이렇게 달라집니다</h2>
            <p className="section-copy">
              고객이 찾고, 보고, 문의하기 쉬운
              <br />
              구조부터 정리해서 매출이 발생하고, 증가하도록 만들어드립니다.
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
            <p className="section-kicker">Portfolio</p>
            <h2 className="section-title">실제 사진과 로컬 작업물 중심으로 보여드립니다</h2>
            <p className="section-copy">
              스톡 이미지보다
              <br />
              실제 매장 사진과 작업물 분위기를 더 중요하게 봅니다.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="showcase-panel">
              <p className="section-kicker">How we show your business</p>
              <h3 className="mt-3 text-3xl font-black tracking-[-0.05em]">그냥 예쁜 화면보다 더 중요한 것</h3>
              <div className="mt-8 grid gap-3">
                {[
                  '실제 매장 사진, 작업 현장 사진을 우선 사용합니다.',
                  '보내주신 사진도 색감과 분위기를 더 보기 좋게 정리합니다.',
                  '가게 성격이 바로 보이도록 화면 첫인상을 맞춥니다.',
                  '가격, 위치, 문의 방법이 한눈에 보이게 정리합니다.',
                ].map((item) => (
                  <div key={item} className="benefit-row">
                    <CircleCheckBig size={18} className="text-accent-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-base leading-relaxed text-text-muted">
                식당, 뷰티샵, 타일, 청소, 로컬 서비스 업종처럼
                <br />
                사진과 첫인상이 중요한 비즈니스에 특히 잘 맞습니다.
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
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">10 minute consultation</p>
                <p className="mt-3 text-base leading-relaxed text-text-muted">
                  10분 상담으로 무엇부터 해야 할지 방향부터 정리해드립니다.
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
