import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheckBig, Layout, MapPin, Share2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero3D from '../components/Hero3D';
import Seo from '../components/Seo';
import heroOwner from '../assets/depositphotos/hero-owner.jpg';
import { organizationJsonLd, websiteJsonLd } from '../data/siteSeo';

const heroPoints = [
  '구글, 홈페이지, 인스타그램, 페이스북을 함께 봅니다.',
  '고객 눈에 어떻게 보이는지, 어디가 비어 있는지 함께 확인합니다.',
  '무료 점검 후 필요한 서비스만 선택해 진행할 수 있습니다.',
  '한국어·영어 지원 · 호주 전역 · 전 세계 원격 작업 가능',
];

const problemSignals = [
  '구글에는 나오지만 홈페이지 정보가 약하다',
  '홈페이지는 있는데 Google Business Profile이 비어 있다',
  '인스타그램, 페이스북, 홈페이지가 따로 논다',
  '채널마다 정보와 인상이 달라 신뢰가 약해진다',
];

const scopeCards = [
  {
    icon: <Layout size={30} className="text-accent-primary" />,
    title: '홈페이지',
    desc: '홈페이지가 있는 경우에는 현재 상태와 정보 노출을 함께 점검합니다.',
    size: 'lg:col-span-4',
  },
  {
    icon: <MapPin size={30} className="text-accent-primary" />,
    title: 'Google Business Profile',
    desc: '프로필 설정, 노출 상태, 핵심 정보 정리 여부를 함께 확인합니다.',
    size: 'lg:col-span-4',
  },
  {
    icon: <Share2 size={30} className="text-accent-primary" />,
    title: '인스타그램 & 페이스북',
    desc: 'SNS 채널이 구글과 홈페이지와 따로 놀지 않는지 함께 확인합니다.',
    size: 'lg:col-span-4',
  },
];

const diagnosticCards = [
  {
    title: '퀵 진단',
    price: 'AUD 149',
    description:
      '웹사이트, Google Business Profile, 온페이지 SEO를 중심으로 현재 상태를 빠르게 점검하고 우선순위를 정리해드립니다.',
    points: [
      '홈페이지 상태 분석',
      'Google Business Profile 분석',
      '온페이지 SEO 기본 분석',
      '핵심 문제 1~3개 정리',
    ],
    cta: '퀵 진단 보기',
  },
  {
    title: '온라인 올인원 진단',
    price: 'AUD 289',
    description:
      '퀵 진단 범위에 더해 인스타그램, 페이스북, 비즈니스 포지셔닝까지 함께 분석해 전체 온라인 상태를 정리해드립니다.',
    points: [
      '퀵 진단 전체 포함',
      '인스타그램 / 페이스북 분석',
      '비즈니스 포지셔닝 점검',
      '채널 간 일관성 확인',
    ],
    cta: '온라인 올인원 진단 보기',
  },
];

const executionPaths = [
  {
    title: '홈페이지',
    description: '스타터 / 비즈니스 / 성장형 홈페이지 중 현재 단계에 맞는 옵션으로 진행할 수 있습니다.',
  },
  {
    title: 'SEO',
    description: 'SEO All-in-One 패키지 또는 SEO 월관리로 검색 관련 작업을 따로 정리할 수 있습니다.',
  },
  {
    title: 'Google Business Profile',
    description: '프로필 세팅이나 월관리처럼 로컬 검색에 집중한 별도 옵션도 선택할 수 있습니다.',
  },
  {
    title: '운영 지원 / AI 전수',
    description: '직접 하기 부담스러우면 관리로, 직접 운영하고 싶다면 AI 활용 전수로 이어질 수 있습니다.',
  },
];

const trustPoints = [
  '필요한 것만 선택해 진행하는 방식',
  '한국어·영어 지원',
  '호주 전역 및 전 세계 원격 작업 가능',
  '구축 이후 운영과 AI 전수까지 확장 가능',
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Seo
        title="온라인 점검"
        description="GoodmanSEO는 구글, 홈페이지, 인스타그램, 페이스북 상태를 함께 보고 고객 눈에 어떻게 보이는지 무료로 점검해드립니다. 한국어·영어 지원, 호주 전역 및 전 세계 원격 작업이 가능합니다."
        path="/"
        keywords={['온라인 점검', 'Google Business Profile', '온페이지 SEO', '비즈니스 홈페이지', '인스타그램 점검', '페이스북 점검']}
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
                무료 온라인 점검
              </div>
              <h1 className="max-w-5xl text-4xl font-black leading-[0.94] tracking-[-0.06em] sm:text-6xl md:text-[4.8rem]">
                지금 내 비즈니스,
                <br />
                온라인에서 어떻게 보일까요?
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
                구글, 홈페이지, 인스타그램, 페이스북 상태를 함께 보고,
                <br />
                어디가 비어 있는지 무료로 점검해드립니다.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link to="/contact" className="primary-button">
                  무료 점검 신청하기
                  <ArrowRight size={18} />
                </Link>
                <Link to="/pricing" className="secondary-button">
                  서비스 및 가격 보기
                </Link>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {['무료 온라인 점검', '구글·홈페이지·SNS 함께 확인', '호주 전역 · 전 세계 원격'].map((item) => (
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
                  <span className="eyebrow-chip">무료 점검 범위</span>
                  <p className="text-sm font-semibold tracking-[0.04em] text-text-soft">온라인 채널을 이렇게 함께 봅니다</p>
                </div>
                <div className="mt-10">
                  <p className="text-sm tracking-[0.04em] text-text-soft">GoodmanSEO가 먼저 함께 보는 것</p>
                  <div className="mt-6 grid gap-3">
                    {heroPoints.map((item) => (
                      <div key={item} className="benefit-row">
                        <CircleCheckBig size={18} className="text-accent-primary" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-10 overflow-hidden rounded-[28px] border border-white/10">
                  <img src={heroOwner} alt="온라인 점검 이미지" className="h-[220px] w-full object-cover" />
                </div>
                <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-5">
                  <p className="text-base leading-relaxed text-text-muted">
                    지금 홈페이지가 아직 없어도 괜찮습니다.
                    <br />
                    이미 운영 중인 구글, 인스타그램, 페이스북, 홈페이지를 함께 보고,
                    <br />
                    무엇이 비어 있는지 먼저 확인해드립니다.
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
            <p className="section-kicker">문제 공감</p>
            <h2 className="section-title">혹시 온라인 채널이 따로 놀고 있나요?</h2>
            <p className="section-copy">
              고객이 보는 온라인 인상이 채널마다 다르거나 비어 있으면,
              <br />
              비즈니스 전체 인상이 약해질 수 있습니다.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="grid gap-4">
              {problemSignals.map((item, index) => (
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
              <p className="section-kicker">왜 먼저 봐야 하는지</p>
              <h3 className="mt-3 text-3xl font-black tracking-[-0.05em]">홈페이지가 아직 없어도, 온라인 점검은 먼저 시작할 수 있습니다</h3>
              <p className="mt-6 text-base leading-relaxed text-text-muted">
                고객은 먼저 구글과 SNS, 홈페이지를 함께 봅니다.
                <br />
                그중 일부만 비어 있거나 연결이 어색해도,
                <br />
                비즈니스 전체 인상이 약해질 수 있습니다.
              </p>
              <div className="mt-8 grid gap-3">
                {[
                  'Google Business Profile만 있고 홈페이지가 없다',
                  '인스타그램은 있는데 구글 정보가 비어 있다',
                  '채널마다 정보와 인상이 달라 신뢰가 약해질 수 있다',
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
            <p className="section-kicker">무료 점검 범위</p>
            <h2 className="section-title">GoodmanSEO는 온라인에 구현된 채널을 함께 봅니다</h2>
            <p className="section-copy">
              홈페이지가 있든 없든,
              <br />
              구글, 홈페이지, 인스타그램, 페이스북이 어떻게 보이는지 함께 점검합니다.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            {scopeCards.map((service, index) => (
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
            <p className="section-kicker">유료 진단 옵션</p>
            <h2 className="section-title">무료 점검 후, 더 자세히 보고 싶다면</h2>
            <p className="section-copy">
              먼저 무료 점검으로 전체 상태를 보고,
              <br />
              필요하면 조금 더 깊게 살펴보는 옵션으로 이어질 수 있습니다.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {diagnosticCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="feature-card"
              >
                <p className="section-kicker">{card.title}</p>
                <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-semibold text-text-muted">
                  {card.price}
                </div>
                <p className="mt-6 text-base leading-relaxed text-text-muted">{card.description}</p>
                <div className="mt-8 grid gap-3">
                  {card.points.map((item) => (
                    <div key={item} className="benefit-row">
                      <CircleCheckBig size={18} className="text-accent-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/pricing" className="primary-button mt-8">
                  {card.cta}
                  <ArrowRight size={18} />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-heading">
            <p className="section-kicker">점검 후 실행</p>
            <h2 className="section-title">점검 후에는 필요한 것만 선택해 진행할 수 있습니다</h2>
            <p className="section-copy">
              무료 점검 결과에 따라 홈페이지가 필요할 수도 있고,
              <br />
              SEO, Google Business Profile, 운영 지원이 먼저 필요할 수도 있습니다.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {executionPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="soft-panel"
              >
                <p className="section-kicker">{path.title}</p>
                <p className="mt-4 text-lg font-semibold leading-relaxed text-text-main">{path.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="showcase-panel">
              <p className="section-kicker">운영 및 AI 전수</p>
              <h2 className="section-title !max-w-none">구축 이후 운영까지 이어질 수 있습니다</h2>
              <p className="section-copy !max-w-none">
                홈페이지를 만들어드리는 것에서 끝나지 않고,
                <br />
                원하시면 직접 운영할 수 있도록 AI 활용 방법까지 전수해드립니다.
              </p>
              <div className="mt-8 grid gap-3">
                {[
                  '직접 하기 부담스러우면 홈페이지 관리로 이어질 수 있습니다',
                  '직접 운영하고 싶다면 AI 활용 비즈니스 운영 & 홈페이지 관리 전수로 확장할 수 있습니다',
                  '구축 이후에도 장기적으로 운영 가능한 방향을 함께 설계합니다',
                ].map((item) => (
                  <div key={item} className="benefit-row">
                    <CircleCheckBig size={18} className="text-accent-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-proof-card">
              <p className="section-kicker">신뢰 요소</p>
              <h3 className="mt-4 text-3xl font-black tracking-[-0.05em]">필요한 것부터 차근차근 정리합니다</h3>
              <div className="mt-8 grid gap-3">
                {trustPoints.map((item) => (
                  <div key={item} className="benefit-row">
                    <CircleCheckBig size={18} className="text-accent-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10">
                <img src={heroOwner} alt="GoodmanSEO 작업 예시 이미지" className="h-[220px] w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="showcase-panel">
            <div className="section-heading mb-0 max-w-2xl">
              <p className="section-kicker">다음 단계</p>
              <h2 className="section-title">무료 점검으로 지금 상태부터 확인해보세요</h2>
              <p className="section-copy">
                구글, 홈페이지, 인스타그램, 페이스북 상태를 함께 보고,
                <br />
                어디가 비어 있는지 먼저 확인해드립니다.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact" className="primary-button">
                무료 점검 신청하기
                <ArrowRight size={18} />
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