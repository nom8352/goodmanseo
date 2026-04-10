import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheckBig, Layout, MapPin, Share2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Hero3D from '../components/Hero3D';
import Seo from '../components/Seo';
import heroOwner from '../assets/depositphotos/hero-owner.jpg';
import { organizationJsonLd, websiteJsonLd } from '../data/siteSeo';

const heroPoints = [
  '웹사이트, 구글, 메시지, 문의 동선을 함께 봅니다.',
  '퀵 진단 또는 온라인 올인원 진단으로 현재 상태를 먼저 확인할 수 있습니다.',
  '진단 후에는 필요한 것만 선택해 진행할 수 있습니다.',
  '한국어·영어 지원 · 호주 전역 · 전 세계 원격 작업 가능',
];

const problemSignals = [
  '사이트는 있는데 문의가 거의 없다',
  'Google Business Profile은 있지만 제대로 관리되지 않는다',
  '인스타그램, 페이스북, 웹사이트가 따로 논다',
  '설명은 많은데 고객이 무엇을 해야 할지 명확하지 않다',
];

const scopeCards = [
  {
    icon: <Layout size={30} className="text-accent-primary" />,
    title: '웹사이트 구조',
    desc: '메시지, 정보 배치, CTA 흐름이 실제 문의로 이어지는지 함께 봅니다.',
    size: 'lg:col-span-4',
  },
  {
    icon: <MapPin size={30} className="text-accent-primary" />,
    title: 'Google Business Profile',
    desc: '프로필 설정, 노출 상태, 핵심 정보 정리 여부를 확인합니다.',
    size: 'lg:col-span-4',
  },
  {
    icon: <Share2 size={30} className="text-accent-primary" />,
    title: '메시지와 채널 연결',
    desc: '온페이지 SEO, 인스타그램, 페이스북, 비즈니스 포지셔닝까지 연결해 전체 흐름을 봅니다.',
    size: 'lg:col-span-4',
  },
];

const diagnosticCards = [
  {
    title: '퀵 진단',
    price: 'AUD 149',
    description:
      '웹사이트, Google Business Profile, 온페이지 SEO를 중심으로 현재 구조를 빠르게 점검하고 우선순위를 정리해드립니다.',
    points: [
      '홈페이지 구조 분석',
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
      '퀵 진단 범위에 더해 인스타그램, 페이스북, 비즈니스 포지셔닝까지 함께 분석해 전체 온라인 존재감을 정리해드립니다.',
    points: [
      '퀵 진단 전체 포함',
      '인스타그램 / 페이스북 분석',
      '비즈니스 포지셔닝 점검',
      '채널 간 일관성 분석',
    ],
    cta: '온라인 올인원 진단 보기',
  },
];

const executionPaths = [
  {
    title: '홈페이지 실행',
    description: '스타터 / 비즈니스 / 성장형 홈페이지 중 현재 단계에 맞는 옵션으로 진행할 수 있습니다.',
  },
  {
    title: 'SEO 실행',
    description: 'SEO All-in-One 패키지 또는 SEO 월관리로 검색 구조를 따로 정리할 수 있습니다.',
  },
  {
    title: 'Google Business Profile 정리',
    description: '프로필 세팅이나 월관리처럼 로컬 검색에 집중한 별도 옵션도 선택할 수 있습니다.',
  },
  {
    title: '운영 지원 / AI 전수',
    description: '직접 하기 부담스러우면 관리로, 직접 운영하고 싶다면 AI 활용 전수로 이어질 수 있습니다.',
  },
];

const trustPoints = [
  '필요한 것만 선택해 진행하는 구조',
  '한국어·영어 지원',
  '호주 전역 및 전 세계 원격 작업 가능',
  '구축 이후 운영과 AI 전수까지 확장 가능',
];

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Seo
        title="온라인 구조 진단"
        description="GoodmanSEO는 웹사이트, 구글, 메시지, 문의 동선을 점검해 실제 문의로 이어지는 온라인 구조를 진단하고 정리합니다. 한국어·영어 지원, 호주 전역 및 전 세계 원격 작업이 가능합니다."
        path="/"
        keywords={['온라인 구조 진단', '웹사이트 진단', 'Google Business Profile', '온페이지 SEO', '비즈니스 홈페이지', 'SEO 패키지']}
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
                온라인 구조 진단 & 실행
              </div>
              <h1 className="max-w-5xl text-4xl font-black leading-[0.94] tracking-[-0.06em] sm:text-6xl md:text-[4.8rem]">
                예쁜 사이트보다 먼저,
                <br />
                문의가 생기는 구조부터 점검합니다.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
                웹사이트가 있든 없든,
                <br />
                고객이 검색하고 이해하고 문의하게 되는 온라인 구조를 먼저 진단한 뒤,
                <br />
                필요한 실행만 선택할 수 있도록 정리해드립니다.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link to="/pricing" className="primary-button">
                  퀵 진단 보기
                  <ArrowRight size={18} />
                </Link>
                <Link to="/pricing" className="secondary-button">
                  온라인 올인원 진단 보기
                </Link>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {['퀵 진단 AUD 149', '온라인 올인원 진단 AUD 289', '호주 전역 · 전 세계 원격'].map((item) => (
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
                  <span className="eyebrow-chip">먼저 보는 범위</span>
                  <p className="text-sm font-semibold tracking-[0.04em] text-text-soft">온라인 구조를 이렇게 함께 봅니다</p>
                </div>
                <div className="mt-10">
                  <p className="text-sm tracking-[0.04em] text-text-soft">GoodmanSEO가 먼저 확인하는 것</p>
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
                  <img src={heroOwner} alt="온라인 구조를 점검하는 비즈니스 운영 이미지" className="h-[220px] w-full object-cover" />
                </div>
                <div className="mt-8 rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-5">
                  <p className="text-base leading-relaxed text-text-muted">
                    무엇부터 손봐야 할지 아직 정리되지 않아도 괜찮습니다.
                    <br />
                    먼저 진단으로 현재 상태를 보고,
                    <br />
                    그다음 필요한 실행만 선택할 수 있게 도와드립니다.
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
            <h2 className="section-title">혹시 이런 상태라면, 구조부터 다시 볼 필요가 있습니다</h2>
            <p className="section-copy">
              사이트가 있든 없든,
              <br />
              문의로 이어지지 않는 이유는 구조 전체에 있을 수 있습니다.
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
              <h3 className="mt-3 text-3xl font-black tracking-[-0.05em]">문제는 사이트가 없어서가 아니라, 구조가 문의로 이어지지 않기 때문일 수 있습니다</h3>
              <p className="mt-6 text-base leading-relaxed text-text-muted">
                고객은 먼저 검색하고 비교합니다.
                <br />
                정보가 흩어져 있거나 흐름이 어색하면,
                <br />
                좋은 서비스도 문의로 연결되기 전에 놓칠 수 있습니다.
              </p>
              <div className="mt-8 grid gap-3">
                {[
                  '검색은 되는데 실제 연락으로 이어지지 않는다',
                  '채널마다 메시지가 달라 신뢰가 약해질 수 있다',
                  'CTA가 약하면 고객이 무엇을 해야 할지 모른다',
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
            <p className="section-kicker">무엇을 함께 보는지</p>
            <h2 className="section-title">GoodmanSEO는 이런 부분을 함께 봅니다</h2>
            <p className="section-copy">
              하나의 채널만 따로 보는 것이 아니라,
              <br />
              고객이 검색하고 이해하고 문의하게 되는 흐름 전체를 함께 봅니다.
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
            <p className="section-kicker">진단 상품</p>
            <h2 className="section-title">무엇부터 손봐야 할지 모르겠다면, 진단부터 시작하세요</h2>
            <p className="section-copy">
              현재 구조를 빠르게 보거나,
              <br />
              조금 더 넓고 깊게 종합적으로 볼 수 있는 두 가지 진단 옵션이 있습니다.
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
            <p className="section-kicker">진단 후 실행</p>
            <h2 className="section-title">진단 후에는 필요한 것만 선택해 진행할 수 있습니다</h2>
            <p className="section-copy">
              홈페이지가 필요한 경우도 있고,
              <br />
              SEO 정리나 Google Business Profile 관리가 먼저 필요한 경우도 있습니다.
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
                  '구축 이후에도 장기적으로 운영 가능한 구조를 함께 설계합니다',
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
              <h2 className="section-title">어디서 시작해야 할지 모르겠다면, 먼저 진단부터 시작하세요</h2>
              <p className="section-copy">
                퀵 진단으로 핵심만 빠르게 볼 수도 있고,
                <br />
                온라인 올인원 진단으로 전체 구조를 더 넓게 볼 수도 있습니다.
              </p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/pricing" className="primary-button">
                진단부터 시작하기
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="secondary-button">
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;