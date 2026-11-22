import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  MessageSquare,
  Monitor,
  Cpu,
  ClipboardCheck,
  Bot,
  PlayCircle
} from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import Seo from '../components/Seo';
import { organizationJsonLd, websiteJsonLd } from '../data/siteSeo';
import WorkWays from '../components/WorkWays';
import { approachSeo } from '../data/serviceApproach';
import heroConsultant from '../../img/home-hero-consultant.png';

const ease = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0, y = 32) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.64, delay, ease },
  viewport: { once: true, amount: 0.15 },
});

const HeroWorkVisual = ({ locale }) => (
  <figure className="my-6 overflow-hidden rounded-xl border border-[#ded8cf] bg-white lg:my-12">
    <img src={heroConsultant} alt={locale === 'en' ? 'Woman holding a laptop' : '노트북을 들고 있는 여성'} className="h-72 w-full bg-[#f6f2eb] object-contain object-bottom sm:h-96 lg:h-[440px]" width="1024" height="1536" />
    <figcaption className="p-5 text-[#102133]">
      <p className="text-lg font-bold">{locale === 'en' ? 'Your business. Your way of working.' : '내 사업에 맞게, 내 상황에 맞게.'}</p>
      <p className="mt-2 text-sm leading-relaxed text-[#44515d]">{locale === 'en' ? 'Learn to create and update your website, build it with guidance, or have us handle production.' : '만들고 수정하는 법을 배우거나, 함께 진행하거나, 제작을 맡길 수 있습니다.'}</p>
    </figcaption>
  </figure>
);

const problemsKo = [
  { num: '01', title: 'AI, 어디부터 시작할까요?', desc: '도구보다 내 사업에 필요한 일부터 정하고 싶어요.' },
  { num: '02', title: '직접 만들고 수정하고 싶어요', desc: '홈페이지와 콘텐츠를 스스로 다루는 법을 배우고 싶어요.' },
  { num: '03', title: '혼자 하다가 막혔어요', desc: '방향이 맞는지, 무엇을 고칠지 함께 확인하고 싶어요.' },
  { num: '04', title: '배울 시간이 부족해요', desc: '본업에 집중하고 제작과 설정은 맡기고 싶어요.' },
  { num: '05', title: '어려운 부분만 맡길 수 있나요?', desc: '할 수 있는 일은 직접 하고 필요한 부분만 도움받고 싶어요.' },
  { num: '06', title: '만든 뒤 운영도 고민이에요', desc: '기본 수정 방법을 배우거나 관리 지원을 받고 싶어요.' },
];
const problemsEn = [
  { num: '01', title: 'Where should I start with AI?', desc: 'Choose a useful business task before choosing the tools.' },
  { num: '02', title: 'I want to build and edit it myself', desc: 'Learn to manage your website and content.' },
  { num: '03', title: 'I am stuck doing it alone', desc: 'Get direction and feedback on your work.' },
  { num: '04', title: 'I do not have time to learn', desc: 'Focus on your business and delegate the setup.' },
  { num: '05', title: 'Can I delegate just one part?', desc: 'Do what you can and get help where you need it.' },
  { num: '06', title: 'What happens after launch?', desc: 'Learn basic updates or discuss ongoing care.' },
];
const servicesKo = [
  { icon: Monitor, title: '홈페이지', desc: 'AI로 제작·수정을 배우거나, 필요한 홈페이지 제작을 맡깁니다.' },
  { icon: Search, title: '구글 검색·SEO', desc: '검색 기본기를 익히고 적용하거나, 프로필·페이지 설정을 맡깁니다.' },
  { icon: MessageSquare, title: '광고·콘텐츠', desc: '페이스북 광고 소재·설정을 함께 살펴보거나 대행 범위를 상담합니다.' },
  { icon: Cpu, title: 'AI·반복 업무', desc: '고객 안내·리뷰 답변·자료 정리에 AI를 활용하는 방법을 익힙니다.' },
];
const servicesEn = [
  { icon: Monitor, title: 'Websites', desc: 'Learn to build and edit with AI, or have your website made for you.' },
  { icon: Search, title: 'Google & SEO', desc: 'Learn search basics or delegate profile and on-page setup.' },
  { icon: MessageSquare, title: 'Ads & content', desc: 'Work on Facebook ad creative and settings, or discuss managed support.' },
  { icon: Cpu, title: 'AI & routine tasks', desc: 'Use AI for customer messages, review replies and organising information.' },
];

const sampleSitesKo = [
  {
    title: '상업 청소 업체',
    href: '/samples/north-lakes-commercial-cleaning/',
    image: '/samples/previews/north-lakes-commercial-cleaning.jpg',
  },
  {
    title: '브리즈번 청소 업체',
    href: '/samples/brisbane-commercial-cleaning/',
    image: '/samples/previews/brisbane-commercial-cleaning.jpg',
  },
  {
    title: '로컬 카페',
    href: '/samples/north-lakes-local-cafe/',
    image: '/samples/previews/north-lakes-local-cafe.jpg',
  },
  {
    title: '스시 매장',
    href: '/samples/north-lakes-sushi-shop/',
    image: '/samples/previews/north-lakes-sushi-shop.jpg',
  },
  {
    title: '이벤트 케이터링',
    href: '/samples/brisbane-event-catering/',
    image: '/samples/previews/brisbane-event-catering.jpg',
  },
  {
    title: '필라테스 스튜디오',
    href: '/samples/frame-pilates-studio/',
    image: '/samples/previews/frame-pilates-studio.jpg',
  },
  {
    title: '부동산 중개',
    href: '/samples/brisbane-real-estate-agency/',
    image: '/samples/previews/brisbane-real-estate-agency.jpg',
  },
  {
    title: '타일 시공',
    href: '/samples/brisbane-tile-studio/',
    image: '/samples/previews/brisbane-tile-studio.jpg',
  },
  {
    title: '모기지 브로커',
    href: '/samples/clearpath-mortgage-brokers/',
    image: '/samples/previews/clearpath-mortgage-brokers.jpg',
  },
  {
    title: '방역 서비스',
    href: '/samples/moreton-bay-pest-control/',
    image: '/samples/previews/moreton-bay-pest-control.jpg',
  },
  {
    title: '운전 학원',
    href: '/samples/northside-drive-academy/',
    image: '/samples/previews/northside-drive-academy.jpg',
  },
  {
    title: '휴대폰 수리',
    href: '/samples/northside-phone-repairs/',
    image: '/samples/previews/northside-phone-repairs.jpg',
  },
];

const sampleTitlesEn = [
  'Commercial Cleaning',
  'Brisbane Cleaning',
  'Local Cafe',
  'Sushi Shop',
  'Event Catering',
  'Pilates Studio',
  'Real Estate Agency',
  'Tiling Services',
  'Mortgage Broker',
  'Pest Control',
  'Driving School',
  'Phone Repairs',
];

const HOME_CONTENT = {
  ko: {
    headlines: [
      { text: '내 사업의 홈페이지와 마케팅,', highlight: 'AI로 직접 해보세요.' },
    ],
    seoKeywords: ['AI 실전 코칭', 'AI 도입', '홈페이지 제작', '구글 SEO', '온라인 마케팅'],
    heroCopy: <>무엇부터 시작할지 막막하다면 굳맨과 함께하세요.<br />필요한 기본기를 배우고, 내 사업에 적용하고, 직접 운영하는 방법까지 익힙니다.</>,
    primaryCta: 'AI 실전 코칭 상담하기',
    secondaryCta: '함께 할 수 있는 일 보기',
    contactPath: '/contact?type=ai-mentoring&mode=coach',
    pricingPath: '/#services',
    issuesLabel: 'Common Issues',
    issuesTitle: '혹시 이런 문제로 고민하고 계신가요?',
    solutionsLabel: 'Our Solutions',
    solutionsTitle: '어떤 일을 함께 할까요?',
    solutionsCopy: '홈페이지·검색·광고·반복 업무 중 지금 필요한 일부터 선택하세요. 배우기, 코칭, 대행의 범위는 상담에서 정합니다.',
    courseLabel: '굳팀장 AI 실무 강의',
    courseTitle: 'Codex로 콘텐츠와 반복업무를 직접 정리하고 싶다면',
    courseCopy: '홈페이지 문구, 고객문의, 반복 안내문에 바로 쓰는 AI 활용법을 사장님 눈높이에 맞춰 정리한 비개발자용 실무 강의입니다.',
    courseCta: '강의 보기',
    reportLabel: 'AI 비즈니스 리포트',
    reportTitle: '무엇을 먼저 고칠지 30일·90일 실행 순서로 확인하세요',
    reportCopy: '업종, 지역, 경쟁사와 실제 홈페이지를 기준으로 SEO, 구글 노출, 전환 흐름을 함께 분석합니다.',
    reportPrice: '런칭 특별가 AUD 249',
    reportCta: '비즈니스 리포트 보기',
    reportPath: '/ai-report',
    samplesLabel: 'Sample Websites',
    samplesTitle: '어떤 홈페이지를 만들 수 있을까요?',
    samplesCopy: '청소, 음식점, 스튜디오, 수리, 전문 서비스처럼 호주 로컬 비즈니스에 맞춘 홈페이지 예시입니다. 내 업종에 가까운 형태를 먼저 확인해보세요.',
    sampleCta: '보기',
    sampleAlt: (title) => `${title} 샘플 홈페이지 미리보기`,
    sampleFooter: '마음에 드는 예시와 함께, 직접 배우고 싶은지 제작을 맡기고 싶은지 알려주세요.',
    problems: problemsKo,
    services: servicesKo,
    sampleSites: sampleSitesKo,
  },
  en: {
    headlines: [
      { text: 'Your website and marketing.', highlight: 'Learn to do it with AI.' },
    ],
    seoKeywords: ['AI coaching', 'small business AI', 'website design Australia', 'Google SEO', 'online marketing'],
    heroCopy: <>Not sure where to start? Work with GoodmanSEO to learn the basics, apply them to your business and learn to manage the work yourself.</>,
    primaryCta: 'Enquire about AI coaching',
    secondaryCta: 'Explore what we can work on',
    contactPath: '/en/contact?type=ai-mentoring&mode=coach',
    pricingPath: '/en#services',
    issuesLabel: 'Common Issues',
    issuesTitle: 'Do any of these problems sound familiar?',
    solutionsLabel: 'Our Solutions',
    solutionsTitle: 'What would you like to work on?',
    solutionsCopy: 'Start with a website, search, ads or a routine task. We agree what you will do and where we will help.',
    courseLabel: 'Practical AI Training',
    courseTitle: 'Want to organise content and repeat tasks with Codex?',
    courseCopy: 'A practical, non-technical course for using AI with website copy, customer enquiries and repeat business messages.',
    courseCta: 'View Course (Korean)',
    reportLabel: 'AI Business Report',
    reportTitle: 'See what to fix first with a 30/90-day action roadmap',
    reportCopy: 'We review your industry, location, competitors and actual website across SEO, Google visibility and conversion flow.',
    reportPrice: 'Launch price AUD 249',
    reportCta: 'View AI Business Report',
    reportPath: '/en/ai-report',
    samplesLabel: 'Sample Websites',
    samplesTitle: 'Websites for Australian local businesses',
    samplesCopy: 'Explore practical website examples for cleaning, hospitality, studios, repairs and professional services. Start with the example closest to your business.',
    sampleCta: 'View',
    sampleAlt: (title) => `${title} sample website preview`,
    sampleFooter: 'Found an example you like? Tell us whether you want to learn, work together or delegate the build.',
    problems: problemsEn,
    services: servicesEn,
    sampleSites: sampleSitesKo.map((site, index) => ({ ...site, title: sampleTitlesEn[index] })),
  },
};

const Home = ({ locale = 'ko' }) => {
  const content = HOME_CONTENT[locale] || HOME_CONTENT.ko;
  const { headlines } = content;

  return (
    <div className="overflow-hidden bg-[var(--bg-dark)] pt-20">
      <Seo
        title={approachSeo[locale]?.title || approachSeo.ko.title}
        description={approachSeo[locale]?.description || approachSeo.ko.description}
        path={locale === 'en' ? '/en' : '/'}
        imageAlt={locale === 'en'
          ? 'GoodmanSEO website, Google Business Profile and SEO basics'
          : 'GoodmanSEO 홈페이지, 구글 비즈니스, 기본 SEO 안내'}
        keywords={content.seoKeywords}
        jsonLd={[organizationJsonLd, websiteJsonLd]}
        locale={locale}
        alternates={[{ lang: 'ko', path: '/' }, { lang: 'en', path: '/en' }]}
      />

      {/* 1. Hero Section */}
      <section className="relative pt-6 pb-0 sm:pt-10 md:pt-12 lg:pt-12">
        <div className="container relative z-10 px-6">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-10">

            {/* Left Column: Typography & CTAs */}
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease }}
              className="flex flex-col text-left lg:pt-14"
            >
              <p className="mb-4 text-sm font-semibold text-[#44515d]">{locale === 'en' ? 'AI adoption and practical coaching for small businesses' : '소상공인·1인 사업자를 위한 AI 도입과 실전 코칭'}</p>
              <h1 className="font-sans text-[clamp(1.9rem,3.5vw,3.1rem)] font-extrabold leading-[1.25] tracking-[-0.03em] text-[#102133]">
                <span className="block">{headlines[0].text}</span>
                <span className="mt-2 block">{headlines[0].highlight}</span>
              </h1>

              <p className="mt-6 max-w-[42rem] text-[clamp(0.95rem,2vw,1.1rem)] leading-relaxed text-text-muted">{content.heroCopy}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to={content.contactPath} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[0.2rem] border border-[#102133] bg-[#102133] px-5 py-3 text-xs font-black text-white transition hover:-translate-y-0.5 hover:bg-[#172d42]">
                  {content.primaryCta}
                  <ArrowRight size={15} />
                </Link>
                <Link to={content.pricingPath} className="inline-flex min-h-11 items-center justify-center rounded-[0.2rem] border border-[#aeb6bc] bg-white/60 px-5 py-3 text-xs font-black text-[#102133] transition hover:-translate-y-0.5 hover:bg-white">
                  {content.secondaryCta}
                </Link>
              </div>
            </Motion.div>

            <HeroWorkVisual locale={locale} />

          </div>
        </div>
      </section>

      <WorkWays locale={locale} />

      {/* 2. Problem Section (6대 고민 라인 그리드) */}
      <section className="max-w-none py-12 md:py-14 lg:py-16 border-t border-[#e7e0d8] bg-white">
        <div className="container px-6 text-center">
          <div className="max-w-3xl mx-auto mb-7 md:mb-10">
            <span className="font-serif italic text-[#5f6872] text-[0.82rem]">{content.issuesLabel}</span>
            <h2 className="mt-2.5 font-sans text-[clamp(1.45rem,2.05vw,2.15rem)] font-extrabold leading-[1.18] tracking-[-0.03em] text-[var(--text-main)]">
              {content.issuesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:grid-cols-3">
            {content.problems.map((prob, i) => (
              <Motion.div
                key={prob.num}
                {...fadeUp(i * 0.08, 24)}
                className="pt-4 border-t border-[var(--glass-border)] flex flex-col"
              >
                <span className="font-serif italic text-xl md:text-2xl lg:text-3xl text-[#102133]/20 mb-2">{prob.num}</span>
                <h3 className="text-[0.82rem] md:text-sm font-bold tracking-[-0.02em] text-[var(--text-main)]">{prob.title}</h3>
                <p className="mt-1.5 text-[0.68rem] md:text-[0.76rem] leading-relaxed text-[var(--text-muted)]">{prob.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Service Section */}
      <section id="services" className="max-w-none scroll-mt-20 bg-[#102133] px-0 pt-12 pb-5 md:pt-14 md:pb-6 lg:pt-16 lg:pb-7">
        <div className="container px-6 text-center">
          <div className="max-w-3xl mx-auto mb-7 md:mb-8">
            <span className="font-serif italic text-[#aab5bd] text-[0.82rem]">{content.solutionsLabel}</span>
            <h2 className="mt-2.5 font-sans text-[clamp(1.45rem,2.05vw,2.15rem)] font-extrabold leading-[1.18] tracking-[-0.03em] text-[#eef3f7]">
              {content.solutionsTitle}
            </h2>
            <p className="mt-3 text-[0.78rem] md:text-[0.86rem] leading-relaxed text-[#aeb8c1]">
              {content.solutionsCopy}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:gap-3.5 lg:grid-cols-4">
            {content.services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Motion.div
                  key={svc.title}
                  {...fadeUp(i * 0.08, 24)}
                  className="rounded-[0.45rem] border border-white/10 bg-white/[0.07] p-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.1] sm:p-5 flex flex-col items-center justify-between"
                >
                  <div className="flex flex-col items-center">
                    <div className="mb-3 md:mb-4 flex h-9 w-9 shrink-0 items-center justify-center rounded-[0.35rem] border border-[#d8c8af]/30 bg-white/[0.06] text-[#d8c8af]">
                      <Icon size={18} className="block shrink-0" />
                    </div>
                    <h3 className="text-[0.82rem] md:text-sm font-bold tracking-[-0.02em] text-[#eef3f7]">{svc.title}</h3>
                    <p className="mt-2 text-[0.68rem] md:text-[0.74rem] leading-relaxed text-[#aab5bd]">{svc.desc}</p>
                  </div>
                </Motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Business Report Bridge */}
      <section className="max-w-none bg-[#102133] px-0 pt-0 pb-3 md:pb-4">
        <div className="container px-6">
          <Motion.div {...fadeUp(0.06)} className="grid gap-5 rounded-[0.45rem] border border-white/10 bg-white/[0.07] p-5 md:grid-cols-[0.9fr_1.1fr_auto] md:items-center md:p-6">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.35rem] bg-[#f7f2ec] text-[#102133]">
                <ClipboardCheck size={22} />
              </span>
              <div>
                <p className="text-[0.72rem] font-bold text-[#d7b77d]">{content.reportLabel}</p>
                <h2 className="mt-1 text-[clamp(1.05rem,1.6vw,1.4rem)] font-extrabold leading-tight tracking-[-0.03em] text-[#eef3f7]">{content.reportTitle}</h2>
              </div>
            </div>
            <div>
              <p className="text-[0.76rem] leading-relaxed text-[#aeb8c1]">{content.reportCopy}</p>
              <p className="mt-2 text-xs font-black text-[#d7b77d]">{content.reportPrice}</p>
            </div>
            <Link to={content.reportPath} className="inline-flex items-center justify-center gap-2 rounded-[0.25rem] bg-[#f7f2ec] px-5 py-3 text-[0.76rem] font-extrabold text-[#102133] transition hover:bg-white">
              {content.reportCta}
              <ArrowRight size={15} />
            </Link>
          </Motion.div>
        </div>
      </section>

      {/* AI Course Bridge Section */}
      <section className="max-w-none bg-[#102133] px-0 pt-0 pb-10 md:pb-12">
        <div className="container px-6">
          <Motion.div
            {...fadeUp(0.08)}
            className="grid gap-5 rounded-[0.45rem] bg-[#f7f2ec] p-5 md:grid-cols-[0.9fr_1.1fr_auto] md:items-center md:p-6"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.35rem] bg-white text-[#102133]">
                <Bot size={22} />
              </span>
              <div>
                <p className="text-[0.76rem] font-bold text-[#63717c]">{content.courseLabel}</p>
                <h2 className="mt-1 text-[clamp(1.05rem,1.6vw,1.45rem)] font-extrabold leading-tight tracking-[-0.03em] text-[#102133]">
                  {content.courseTitle}
                </h2>
              </div>
            </div>

            <p className="text-[0.76rem] md:text-[0.82rem] leading-relaxed text-[#566471] md:max-w-xl">
              {content.courseCopy}
            </p>

            <Link
              to="/ai-course"
              className="inline-flex items-center justify-center gap-2 rounded-[0.25rem] bg-[#102133] px-5 py-3 text-[0.76rem] font-extrabold text-white transition hover:bg-[#1b3145]"
            >
              <PlayCircle size={17} />
              {content.courseCta}
            </Link>
          </Motion.div>
        </div>
      </section>

      {/* 4. Sample Site Section */}
      <section id="samples" className="max-w-none bg-[#102133] px-0 py-12 md:py-14 lg:py-16">
        <div className="container px-6">
          <div className="mb-7 grid gap-4 md:mb-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <span className="font-serif italic text-[#aab5bd] text-[0.82rem]">{content.samplesLabel}</span>
              <h2 className="mt-2.5 font-sans text-[clamp(1.45rem,2.05vw,2.15rem)] font-extrabold leading-[1.18] tracking-[-0.03em] text-[#eef3f7]">
                {content.samplesTitle}
              </h2>
            </div>
            <p className="max-w-2xl text-[0.78rem] md:text-[0.86rem] leading-relaxed text-[#aeb8c1] md:justify-self-end">
              {content.samplesCopy}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:gap-3.5 lg:grid-cols-4">
            {content.sampleSites.map((site, i) => (
              <Motion.a
                key={site.href}
                href={site.href}
                target="_blank"
                rel="noreferrer"
                {...fadeUp(i * 0.05, 22)}
                className="group overflow-hidden rounded-[0.45rem] border border-white/10 bg-white/[0.07] p-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.1]"
              >
                <div className="aspect-[16/9] overflow-hidden rounded-[0.35rem] border border-white/10 bg-white/[0.06]">
                  <img
                    src={site.image}
                    alt={content.sampleAlt(site.title)}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 px-1.5 py-2.5">
                  <h3 className="text-[0.82rem] md:text-sm font-bold leading-tight tracking-[-0.02em] text-[#eef3f7]">
                    {site.title}
                  </h3>
                  <span className="inline-flex shrink-0 items-center gap-1 text-[0.72rem] font-bold text-[#d8c8af]">
                    {content.sampleCta}
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Motion.a>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[0.45rem] bg-[#f7f2ec] p-5 sm:flex-row sm:items-center md:p-6">
            <p className="text-[0.76rem] md:text-[0.82rem] leading-relaxed text-[#566471]">
              {content.sampleFooter}
            </p>
            <Link to={locale === 'en' ? '/en/contact?type=general-inquiry' : '/contact?type=general-inquiry'} className="inline-flex items-center justify-center gap-2 rounded-[0.25rem] bg-[#102133] px-5 py-3 text-[0.76rem] font-extrabold text-white transition hover:bg-[#1b3145]">
              {locale === 'en' ? 'Discuss your project' : '내 상황에 맞는 도움 문의하기'}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
