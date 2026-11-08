import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  MapPin,
  Star,
  FileText,
  BarChart3,
  Scissors,
  Wrench,
  Sparkles,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import Seo from '../components/Seo';
import FaqList from '../components/FaqList';
import { organizationJsonLd, websiteJsonLd } from '../data/siteSeo';
import { programsEn, programsKo } from '../data/programs';
import caseChartImage from '../../img/case-search-console-2026-08.webp';

const ease = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0, y = 24) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
  viewport: { once: true, amount: 0.2 },
});

const GoogleLogo = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
  </svg>
);

const HOME_CONTENT = {
  ko: {
    seoTitle: '브리즈번 로컬 구글 상위 노출',
    seoDescription:
      '손님이 구글에서 검색할 때 사장님 가게가 위에 나오게 합니다. 브리즈번 한인 사장님을 위한 로컬 SEO. 구글 프로필, 리뷰, 홈페이지를 검색어에 맞춰 정리하고 매달 숫자로 보고합니다.',
    seoKeywords: [
      '브리즈번 구글 상위 노출',
      '로컬 SEO 브리즈번',
      '구글 비즈니스 프로필 상위 노출',
      '구글 지도 상위 노출',
      '한인 사장님 구글 노출',
      '노스레이크 SEO',
    ],
    seoImageAlt: 'GoodmanSEO 브리즈번 로컬 구글 상위 노출 안내',
    eyebrow: '브리즈번 로컬 비즈니스 · 구글 상위 노출',
    headline: '손님이 구글에서 검색할 때,',
    headlineAccent: '사장님 가게가 위에 나오게 합니다.',
    heroCopy: (
      <>
        홈페이지를 파는 일이 아니라, 검색 결과를 바꾸는 일을 합니다.
        <br className="hidden sm:block" />
        구글 프로필, 리뷰, 홈페이지 문구를 손님이 실제로 치는 검색어에 맞춰 정리하고
        <br className="hidden sm:block" />
        매달 노출·클릭·순위를 숫자로 보여드립니다. 상담은 한국어로, 노출은 영어 검색에서.
      </>
    ),
    primaryCta: '무료 순위 점검 신청',
    secondaryCta: '서비스·가격 보기',
    contactPath: '/contact?type=free-check',
    pricingPath: '/pricing',
    proof: {
      windowLabel: 'Google Search Console · 2026.05.19 – 08.18',
      imageAlt: '직접 관리하는 브리즈번 북부 가게의 구글 서치콘솔 3개월 화면. 클릭 131회, 노출 4,450회, 노출이 하루 0회에서 170회 가까이 늘어난 그래프',
      stats: [
        { label: '클릭', value: '131회' },
        { label: '노출', value: '4,450회' },
        { label: '평균 순위', value: '16.1위' },
      ],
      badgeLabel: '2026년 11월 확인',
      badgeValue: '주요 검색어 일반 검색 3위 · 지도 1~2위',
      caption: '브리즈번 북부의 아기 사진 스튜디오. 직접 관리하는 가게라 가게 이름은 상담에서 보여드립니다.',
    },
    resultsLabel: 'Results',
    resultsTitle: '3개월 동안 생긴 변화',
    results: [
      { value: '0 → 170', unit: '회', label: '하루 구글 노출', note: '2026년 5월 → 8월' },
      { value: '131', unit: '회', label: '검색에서 들어온 클릭', note: '3개월 합계' },
      { value: '+84', unit: '계단', label: '주요 검색어 순위 상승', note: '순위 도구 기준' },
    ],
    resultsCopy:
      '검색 결과에 보이기 시작하자 예약 문의가 달라졌습니다. 2026년 11월 확인 기준으로 주요 검색어에서 일반 검색 3위, 지도 1~2위에 있습니다.',
    resultsNote: '서치콘솔과 순위 도구 캡처 기준입니다. 순위는 검색하는 위치와 시점에 따라 달라집니다.',
    howLabel: 'How It Works',
    howTitle: '순위는 이렇게 올라갑니다',
    howCopy: '특별한 비법이 아니라 다섯 가지를 빠짐없이, 꾸준히 하는 일입니다. 홈페이지는 그중 하나일 뿐이에요.',
    steps: [
      {
        icon: Search,
        title: '손님이 치는 검색어 정하기',
        desc: '“lash extensions north lakes”처럼 손님이 실제로 치는 말 3~5개를 정합니다. 가게 이름 검색은 여기 안 들어갑니다.',
      },
      {
        icon: MapPin,
        title: '구글 프로필 채우기',
        desc: '카테고리, 서비스, 지역, 사진, 영업시간, 예약·문의 버튼. 비어 있는 칸이 없게 만들고 홈페이지와 정보를 맞춥니다.',
      },
      {
        icon: Star,
        title: '리뷰가 꾸준히 쌓이게',
        desc: '요청 문구와 링크(QR)를 만들어 드리고, 답글도 같이 씁니다. 리뷰가 멈춘 가게는 순위도 멈춥니다.',
      },
      {
        icon: FileText,
        title: '홈페이지를 검색어에 맞게',
        desc: '지역과 서비스가 글로 분명히 적히게 제목과 문장을 고칩니다. 홈페이지가 없으면 이 단계에서 1페이지를 만들어 드립니다.',
      },
      {
        icon: BarChart3,
        title: '매달 숫자로 확인',
        desc: '노출, 클릭, 순위를 월 1회 정리해 보내드립니다. 효과 없는 작업은 멈추고 되는 쪽으로 옮깁니다.',
      },
    ],
    fitLabel: 'Who It Is For',
    fitTitle: '이런 가게에 특히 잘 맞습니다',
    fitCopy: '손님이 영어로 “서비스 + 동네”를 검색해서 찾아오는 가게. 한인 손님이 아니어도 됩니다.',
    fits: [
      {
        icon: Scissors,
        title: '뷰티샵',
        sub: '속눈썹 · 네일 · 피부 · 반영구 · 헤어',
        query: 'lash extensions north lakes',
        now: '인스타는 열심히 하는데 구글에는 거의 없는 경우가 많아요.',
        after: '예약제라 손님 한 명이 오래 남습니다. 검색에서 보이면 바로 예약으로 이어져요.',
      },
      {
        icon: Wrench,
        title: '에어컨 · 전기 · 배관',
        sub: '설치 · 수리 · 냉동',
        query: 'split system installation north brisbane',
        now: '지인 소개로만 일이 들어오고 홈페이지는 없는 경우가 대부분이에요.',
        after: '건당 금액이 커서 검색에서 들어온 일 한 건이면 비용이 빠집니다.',
      },
      {
        icon: Sparkles,
        title: '청소',
        sub: '본드 · 카펫 · 상업 청소',
        query: 'bond cleaning north lakes',
        now: '광고비를 써야만 전화가 오고, 끊으면 바로 조용해져요.',
        after: '동네 이름으로 검색에 걸리면 광고 없이도 전화가 옵니다. 효과를 전화 수로 바로 셀 수 있어요.',
      },
    ],
    fitFooter: '식당·카페, 정비소, 마사지, 학원도 같은 방법이 통합니다. 업종이 달라도 먼저 물어보세요.',
    programsLabel: 'Programs',
    programsTitle: '프로그램과 가격',
    programsCopy: '세 가지뿐입니다. 무료로 시작해서, 필요한 만큼만 이어가세요.',
    programs: programsKo,
    programsFooter: '홈페이지를 새로 만들어야 하는 경우는 따로 안내드립니다.',
    programsFooterLink: '홈페이지 제작 안내 보기',
    programsFooterPath: '/pricing#website',
    promiseLabel: 'Our Promise',
    promiseTitle: '상위 노출을 보장하지는 않습니다',
    promiseCopy: '순위는 구글이 정합니다. 보장을 내세우는 대신 세 가지를 지킵니다.',
    promises: [
      { title: '한 일을 전부 보여드립니다', desc: '무엇을 바꿨고 왜 바꿨는지 매달 정리해서 보냅니다.' },
      { title: '숫자로 보고합니다', desc: '느낌이 아니라 서치콘솔의 노출·클릭·순위로 이야기합니다.' },
      { title: '안 되면 바꿉니다', desc: '효과 없는 작업은 멈추고, 되는 쪽으로 옮깁니다.' },
    ],
    promiseFooter: '직접 관리하는 가게에서 같은 방법으로 먼저 확인했습니다. 위의 그래프가 그 기록이에요.',
    faqLabel: 'FAQ',
    faqTitle: '자주 묻는 질문',
    faqs: [
      {
        question: '얼마나 걸리나요?',
        answer: '보통 첫 변화는 4~8주 사이에 보이기 시작하고, 3개월을 한 단위로 봅니다. 경쟁이 심한 검색어는 더 걸릴 수 있어서 처음 점검 때 솔직하게 말씀드립니다.',
      },
      {
        question: '홈페이지가 없어도 되나요?',
        answer: '네. 구글 프로필만으로 시작할 수 있고, 필요하면 프로그램 안에서 1페이지 홈페이지를 만들어 드립니다. 여러 페이지가 필요한 경우만 홈페이지 제작을 따로 안내합니다.',
      },
      {
        question: '손님이 한인이 아닌데도 되나요?',
        answer: '오히려 그 경우에 맞습니다. 검색 노출은 영어 검색어로 만들고, 상담과 보고만 한국어로 합니다.',
      },
      {
        question: '인스타그램이나 페이스북도 해 주시나요?',
        answer: '홈페이지와 프로필에 링크를 연결하는 것까지만 합니다. SNS 운영이나 게시물 작성은 하지 않습니다.',
      },
      {
        question: '결제는 어떻게 하나요?',
        answer: '3개월 프로그램은 시작할 때 절반, 두 달째에 나머지 절반을 결제합니다. 작업 시작 전에는 전액 환불됩니다.',
      },
    ],
    finalTitle: '지금 내 가게는 몇 위일까요?',
    finalCopy: '손님이 칠 검색어 3개만 알려주시면, 현재 순위와 먼저 고칠 것 한 가지를 2~3일 안에 보내드립니다. 받으셨다고 꼭 뭘 하셔야 하는 건 아닙니다.',
    finalCta: '무료 순위 점검 신청',
  },
  en: {
    seoTitle: 'Local Google Rankings for Brisbane Businesses',
    seoDescription:
      'We get local service businesses found on Google in Brisbane. Google Business Profile, reviews and website copy aligned to the searches customers actually type, with monthly numbers.',
    seoKeywords: ['Brisbane local SEO', 'Google Business Profile ranking', 'Google Maps ranking Brisbane', 'North Lakes SEO', 'local SEO for small business'],
    seoImageAlt: 'GoodmanSEO local Google rankings for Brisbane businesses',
    eyebrow: 'Brisbane local businesses · Google rankings',
    headline: 'When customers search on Google,',
    headlineAccent: 'your business shows up.',
    heroCopy: (
      <>
        We do not sell websites. We change what customers see when they search.
        <br className="hidden sm:block" />
        Your Google profile, reviews and website copy are aligned to the searches people actually type,
        <br className="hidden sm:block" />
        and you get impressions, clicks and rankings in numbers every month.
      </>
    ),
    primaryCta: 'Request a Free Ranking Check',
    secondaryCta: 'See Programs & Pricing',
    contactPath: '/en/contact?type=free-check',
    pricingPath: '/pricing',
    proof: {
      windowLabel: 'Google Search Console · 19 May – 18 Aug 2026',
      imageAlt: 'Three months of Google Search Console data for a North Brisbane business we manage: 131 clicks, 4,450 impressions, daily impressions rising from zero to about 170',
      stats: [
        { label: 'Clicks', value: '131' },
        { label: 'Impressions', value: '4,450' },
        { label: 'Avg. position', value: '16.1' },
      ],
      badgeLabel: 'Checked Nov 2026',
      badgeValue: 'Main keyword: #3 organic · #1–2 on Maps',
      caption: 'A baby photography studio in North Brisbane that we manage directly. We share the business name in consultation.',
    },
    resultsLabel: 'Results',
    resultsTitle: 'What changed in three months',
    results: [
      { value: '0 → 170', unit: '', label: 'Daily Google impressions', note: 'May → August 2026' },
      { value: '131', unit: '', label: 'Clicks from search', note: 'Three-month total' },
      { value: '+84', unit: '', label: 'Main keyword ranking gain', note: 'Rank tracker' },
    ],
    resultsCopy:
      'Once the business appeared in search results, booking enquiries changed. As of November 2026 the main keyword sits at #3 in organic results and #1–2 on Maps.',
    resultsNote: 'Based on Search Console and rank-tracker screenshots. Rankings vary by location and time.',
    howLabel: 'How It Works',
    howTitle: 'How rankings actually move',
    howCopy: 'No secret trick. Five things done completely and consistently. The website is only one of them.',
    steps: [
      { icon: Search, title: 'Pick the searches customers type', desc: 'Three to five real phrases like “lash extensions north lakes”. Brand-name searches do not count.' },
      { icon: MapPin, title: 'Complete the Google profile', desc: 'Categories, services, areas, photos, hours and booking buttons. No empty fields, and details that match the website.' },
      { icon: Star, title: 'Keep reviews coming', desc: 'Request wording, links and QR codes, plus replies written with you. When reviews stop, rankings stop.' },
      { icon: FileText, title: 'Match the website to the searches', desc: 'Location and services written clearly in titles and copy. No website yet? A one-page site is built at this step.' },
      { icon: BarChart3, title: 'Check the numbers monthly', desc: 'Impressions, clicks and rankings once a month. What does not work is stopped and replaced.' },
    ],
    fitLabel: 'Who It Is For',
    fitTitle: 'A good fit for businesses like these',
    fitCopy: 'Businesses that customers find by searching “service + suburb” in English.',
    fits: [
      { icon: Scissors, title: 'Beauty', sub: 'Lashes · nails · skin · brows · hair', query: 'lash extensions north lakes', now: 'Active on Instagram, almost invisible on Google.', after: 'Appointment-based, so one new customer stays for a long time.' },
      { icon: Wrench, title: 'Air con · electrical · plumbing', sub: 'Installation · repairs · refrigeration', query: 'split system installation north brisbane', now: 'Work comes through word of mouth only and there is no website.', after: 'Job values are high, so one job from search covers the cost.' },
      { icon: Sparkles, title: 'Cleaning', sub: 'Bond · carpet · commercial', query: 'bond cleaning north lakes', now: 'The phone only rings while ads are running.', after: 'Suburb searches bring calls without ads, and results are easy to count.' },
    ],
    fitFooter: 'The same method works for restaurants, mechanics, massage and tutoring. Ask even if your industry is different.',
    programsLabel: 'Programs',
    programsTitle: 'Programs and pricing',
    programsCopy: 'Only three. Start free and continue as far as you need.',
    programs: programsEn,
    programsFooter: 'If you need a new multi-page website, we quote that separately.',
    programsFooterLink: 'See website options',
    programsFooterPath: '/pricing#website',
    promiseLabel: 'Our Promise',
    promiseTitle: 'We do not guarantee rankings',
    promiseCopy: 'Google decides rankings. Instead of a guarantee, we keep three promises.',
    promises: [
      { title: 'You see everything we do', desc: 'What changed and why, summarised every month.' },
      { title: 'We report in numbers', desc: 'Search Console impressions, clicks and rankings, not impressions.' },
      { title: 'We change what does not work', desc: 'Ineffective work is stopped and replaced.' },
    ],
    promiseFooter: 'We tested the same method first on a business we manage directly. The chart above is that record.',
    faqLabel: 'FAQ',
    faqTitle: 'Common questions',
    faqs: [
      { question: 'How long does it take?', answer: 'The first changes usually appear within 4–8 weeks, and we work in three-month blocks. Competitive searches can take longer, and we say so at the first check.' },
      { question: 'Do I need a website?', answer: 'No. You can start with the Google profile alone, and a one-page site is included in the program if needed.' },
      { question: 'Do you also run Instagram or Facebook?', answer: 'We connect the links on your website and profile. We do not run social accounts or write posts.' },
      { question: 'How do payments work?', answer: 'Half at the start of the three-month program and half in month two. Full refund before work begins.' },
    ],
    finalTitle: 'Where does your business rank right now?',
    finalCopy: 'Send us three searches your customers would type. You get current rankings and one thing to fix first within 2–3 days, with no obligation.',
    finalCta: 'Request a Free Ranking Check',
  },
};

const CaseProofVisual = ({ proof }) => (
  <Motion.div
    initial={{ opacity: 0, y: 22 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.15, ease }}
    className="relative mx-auto w-full max-w-[560px] lg:mx-0"
  >
    <div className="absolute inset-x-10 bottom-0 h-16 rounded-full bg-[#102133]/10 blur-3xl" aria-hidden="true" />

    <div className="relative overflow-hidden rounded-[0.45rem] border border-[#d8dee5] bg-white shadow-[0_18px_40px_rgba(16,33,51,0.10)]">
      <div className="flex items-center justify-between gap-3 border-b border-[#e7ebef] bg-[#f6f8fa] px-3.5 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#e4e8ec]" />
          <span className="h-2 w-2 rounded-full bg-[#e4e8ec]" />
          <span className="h-2 w-2 rounded-full bg-[#e4e8ec]" />
        </div>
        <p className="flex items-center gap-1.5 text-[0.62rem] font-bold tracking-[0.02em] text-[#64748b] sm:text-[0.68rem]">
          <GoogleLogo className="h-3 w-3" />
          {proof.windowLabel}
        </p>
      </div>

      <img
        src={caseChartImage}
        alt={proof.imageAlt}
        width="1513"
        height="493"
        className="block w-full bg-white"
        loading="eager"
        fetchPriority="high"
      />

      <div className="grid grid-cols-3 divide-x divide-[#e7ebef] border-t border-[#e7ebef]">
        {proof.stats.map((stat) => (
          <div key={stat.label} className="px-3 py-3 text-center sm:px-4">
            <p className="text-[0.6rem] font-bold uppercase tracking-[0.08em] text-[#64748b]">{stat.label}</p>
            <p className="mt-0.5 text-base font-black tracking-[-0.03em] text-[#102133] sm:text-lg">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>

    <Motion.div
      initial={{ opacity: 0, x: 18, y: 6 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7, ease }}
      className="absolute -top-3 right-3 z-10 rounded-[0.35rem] border border-[#d8c8af] bg-[#102133] px-3 py-2 text-left shadow-[0_8px_18px_rgba(16,33,51,0.18)] sm:-right-3 sm:-top-4"
    >
      <p className="text-[0.56rem] font-bold uppercase tracking-[0.1em] text-[#d8c8af]">{proof.badgeLabel}</p>
      <p className="mt-0.5 text-[0.7rem] font-black text-white sm:text-[0.76rem]">{proof.badgeValue}</p>
    </Motion.div>

    <p className="mt-4 text-[0.72rem] leading-relaxed text-[#687582] sm:text-[0.76rem]">{proof.caption}</p>
  </Motion.div>
);

const SectionLabel = ({ children, dark = false }) => (
  <span className={`font-serif italic text-[0.82rem] ${dark ? 'text-[#aab5bd]' : 'text-[#5f6872]'}`}>{children}</span>
);

const SectionTitle = ({ children, dark = false, as: Tag = 'h2' }) => (
  <Tag
    className={`mt-2.5 font-sans text-[clamp(1.45rem,2.05vw,2.15rem)] font-extrabold leading-[1.18] tracking-[-0.03em] ${
      dark ? 'text-[#eef3f7]' : 'text-[var(--text-main)]'
    }`}
  >
    {children}
  </Tag>
);

const Home = ({ locale = 'ko' }) => {
  const content = HOME_CONTENT[locale] || HOME_CONTENT.ko;
  const isEnglish = locale === 'en';

  return (
    <div className="overflow-hidden bg-[var(--bg-dark)] pt-20">
      <Seo
        title={content.seoTitle}
        description={content.seoDescription}
        path={isEnglish ? '/en' : '/'}
        imageAlt={content.seoImageAlt}
        keywords={content.seoKeywords}
        jsonLd={[organizationJsonLd, websiteJsonLd]}
        locale={locale}
        alternates={[{ lang: 'ko', path: '/' }, { lang: 'en', path: '/en' }]}
      />

      {/* 1. Hero */}
      <section className="relative pb-12 pt-6 sm:pt-10 md:pb-16 md:pt-12">
        <div className="container relative z-10 px-6">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12">
            <Motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease }}
              className="flex flex-col text-left"
            >
              <p className="inline-flex w-fit items-center gap-2 rounded-[0.2rem] border border-[#102133]/15 bg-white/60 px-2.5 py-1 text-[0.66rem] font-black uppercase tracking-[0.12em] text-[#102133]">
                <GoogleLogo className="h-3.5 w-3.5" />
                {content.eyebrow}
              </p>

              <h1 className="mt-5 font-serif text-[clamp(1.85rem,4vw,3.5rem)] font-bold leading-[1.18] tracking-tight text-[var(--text-main)]">
                <span className="block">{content.headline}</span>
                <span className="block text-[var(--accent-primary)]">{content.headlineAccent}</span>
              </h1>

              <p className="mt-6 max-w-[42rem] text-[clamp(0.95rem,2vw,1.08rem)] leading-relaxed text-text-muted">{content.heroCopy}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to={content.contactPath}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[0.2rem] border border-[#102133] bg-[#102133] px-5 py-3 text-xs font-black text-white shadow-[0_8px_18px_rgba(16,33,51,0.12)] transition hover:-translate-y-0.5 hover:bg-[#172d42]"
                >
                  {content.primaryCta}
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to={content.pricingPath}
                  className="inline-flex min-h-11 items-center justify-center rounded-[0.2rem] border border-[#aeb6bc] bg-white/60 px-5 py-3 text-xs font-black text-[#102133] shadow-[0_8px_18px_rgba(16,33,51,0.04)] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  {content.secondaryCta}
                </Link>
              </div>
            </Motion.div>

            <CaseProofVisual proof={content.proof} />
          </div>
        </div>
      </section>

      {/* 2. Results band */}
      <section id="results" className="max-w-none scroll-mt-20 bg-[#102133] py-12 md:py-14 lg:py-16">
        <div className="container px-6">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-12">
            <div>
              <SectionLabel dark>{content.resultsLabel}</SectionLabel>
              <SectionTitle dark>{content.resultsTitle}</SectionTitle>
              <p className="mt-4 text-[0.82rem] leading-relaxed text-[#aeb8c1] md:text-[0.88rem]">{content.resultsCopy}</p>
              <p className="mt-3 text-[0.68rem] leading-relaxed text-[#7f8d99]">{content.resultsNote}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {content.results.map((item, index) => (
                <Motion.div
                  key={item.label}
                  {...fadeUp(index * 0.08, 20)}
                  className="rounded-[0.45rem] border border-white/10 bg-white/[0.07] p-5"
                >
                  <p className="text-[clamp(1.7rem,3vw,2.4rem)] font-black leading-none tracking-[-0.04em] text-[#eef3f7]">
                    {item.value}
                    {item.unit ? <span className="ml-1 text-base font-bold text-[#d8c8af]">{item.unit}</span> : null}
                  </p>
                  <p className="mt-3 text-[0.82rem] font-bold text-[#eef3f7]">{item.label}</p>
                  <p className="mt-1 text-[0.68rem] text-[#aab5bd]">{item.note}</p>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. How it works */}
      <section id="how" className="max-w-none scroll-mt-20 border-t border-[#e7e0d8] bg-white py-12 md:py-14 lg:py-16">
        <div className="container px-6">
          <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
            <SectionLabel>{content.howLabel}</SectionLabel>
            <SectionTitle>{content.howTitle}</SectionTitle>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-[var(--text-muted)] md:text-[0.88rem]">{content.howCopy}</p>
          </div>

          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-3">
            {content.steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Motion.li
                  key={step.title}
                  {...fadeUp(index * 0.06, 20)}
                  className="flex flex-col border-t-2 border-[#102133] pt-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl italic text-[#102133]/25">0{index + 1}</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-[0.35rem] bg-[#f7f2ec] text-[#102133]">
                      <Icon size={16} />
                    </span>
                  </div>
                  <h3 className="mt-3 text-[0.9rem] font-bold tracking-[-0.02em] text-[var(--text-main)]">{step.title}</h3>
                  <p className="mt-2 text-[0.74rem] leading-relaxed text-[var(--text-muted)] md:text-[0.78rem]">{step.desc}</p>
                </Motion.li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* 4. Who it is for */}
      <section id="fit" className="max-w-none scroll-mt-20 bg-[var(--bg-dark)] py-12 md:py-14 lg:py-16">
        <div className="container px-6">
          <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
            <SectionLabel>{content.fitLabel}</SectionLabel>
            <SectionTitle>{content.fitTitle}</SectionTitle>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-[var(--text-muted)] md:text-[0.88rem]">{content.fitCopy}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {content.fits.map((fit, index) => {
              const Icon = fit.icon;
              return (
                <Motion.article
                  key={fit.title}
                  {...fadeUp(index * 0.08, 22)}
                  className="flex flex-col rounded-[0.45rem] border border-[#e1dbd2] bg-white p-5 shadow-[0_8px_24px_rgba(16,33,51,0.04)] sm:p-6"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[0.35rem] bg-[#102133] text-[#d8c8af]">
                      <Icon size={18} />
                    </span>
                    <div>
                      <h3 className="text-[1rem] font-black tracking-[-0.02em] text-[var(--text-main)]">{fit.title}</h3>
                      <p className="text-[0.7rem] font-semibold text-[#687582]">{fit.sub}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 rounded-[0.3rem] border border-[#e1e6ea] bg-[#f6f8fa] px-3 py-2">
                    <Search size={13} className="shrink-0 text-[#64748b]" />
                    <span className="truncate font-mono text-[0.72rem] text-[#102133]">{fit.query}</span>
                  </div>

                  <dl className="mt-4 grid gap-3 text-[0.78rem] leading-relaxed">
                    <div>
                      <dt className="text-[0.62rem] font-black uppercase tracking-[0.1em] text-[#9a6b2f]">{isEnglish ? 'Now' : '지금'}</dt>
                      <dd className="mt-1 text-[var(--text-muted)]">{fit.now}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.62rem] font-black uppercase tracking-[0.1em] text-[#2d6fa3]">{isEnglish ? 'When it ranks' : '올라가면'}</dt>
                      <dd className="mt-1 text-[var(--text-muted)]">{fit.after}</dd>
                    </div>
                  </dl>
                </Motion.article>
              );
            })}
          </div>

          <p className="mt-6 text-center text-[0.78rem] leading-relaxed text-[var(--text-muted)]">{content.fitFooter}</p>
        </div>
      </section>

      {/* 5. Programs */}
      <section id="programs" className="max-w-none scroll-mt-20 bg-[#102133] py-12 md:py-14 lg:py-16">
        <div className="container px-6">
          <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
            <SectionLabel dark>{content.programsLabel}</SectionLabel>
            <SectionTitle dark>{content.programsTitle}</SectionTitle>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-[#aeb8c1] md:text-[0.88rem]">{content.programsCopy}</p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {content.programs.map((program, index) => (
              <Motion.article
                key={program.title}
                {...fadeUp(index * 0.08, 22)}
                className={`flex h-full flex-col rounded-[0.45rem] border p-5 sm:p-6 ${
                  program.highlight
                    ? 'border-[#d8c8af] bg-[#f7f2ec] text-[#102133]'
                    : 'border-white/10 bg-white/[0.07] text-[#eef3f7]'
                }`}
              >
                <div>
                  <h3 className="text-[1rem] font-black tracking-[-0.02em]">{program.title}</h3>
                  <p className={`mt-3 text-[1.5rem] font-black tracking-[-0.03em] ${program.highlight ? 'text-[#102133]' : 'text-[#eef3f7]'}`}>{program.price}</p>
                  <p className={`mt-0.5 text-[0.66rem] font-bold uppercase tracking-[0.06em] ${program.highlight ? 'text-[#687582]' : 'text-[#aab5bd]'}`}>{program.priceNote}</p>
                  <p className={`mt-4 text-[0.8rem] leading-relaxed ${program.highlight ? 'text-[#44515d]' : 'text-[#aeb8c1]'}`}>{program.desc}</p>
                  <ul className="mt-5 grid gap-2.5">
                    {program.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-[0.78rem] leading-relaxed">
                        <Check size={14} className={`mt-0.5 shrink-0 ${program.highlight ? 'text-[#102133]' : 'text-[#d8c8af]'}`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to={program.href}
                  className={`mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-[0.25rem] px-5 py-3 text-[0.78rem] font-extrabold transition hover:-translate-y-0.5 ${
                    program.highlight
                      ? 'bg-[#102133] text-white hover:bg-[#1b3145]'
                      : 'border border-white/20 bg-white/[0.06] text-[#eef3f7] hover:bg-white/[0.12]'
                  }`}
                >
                  {program.cta}
                  <ArrowRight size={15} />
                </Link>
              </Motion.article>
            ))}
          </div>

          <p className="mt-6 text-center text-[0.76rem] leading-relaxed text-[#aab5bd]">
            {content.programsFooter}{' '}
            <Link to={content.programsFooterPath} className="font-bold text-[#d8c8af] underline-offset-4 hover:underline">
              {content.programsFooterLink}
            </Link>
          </p>
        </div>
      </section>

      {/* 6. Promise */}
      <section id="promise" className="max-w-none scroll-mt-20 bg-white py-12 md:py-14 lg:py-16">
        <div className="container px-6">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
            <div>
              <SectionLabel>{content.promiseLabel}</SectionLabel>
              <SectionTitle>{content.promiseTitle}</SectionTitle>
              <p className="mt-4 text-[0.82rem] leading-relaxed text-[var(--text-muted)] md:text-[0.88rem]">{content.promiseCopy}</p>
              <p className="mt-5 flex items-start gap-2 rounded-[0.35rem] border border-[#e1dbd2] bg-[#f7f2ec] px-4 py-3 text-[0.76rem] leading-relaxed text-[#44515d]">
                <ShieldCheck size={15} className="mt-0.5 shrink-0 text-[#102133]" />
                <span>{content.promiseFooter}</span>
              </p>
            </div>

            <div className="grid gap-3">
              {content.promises.map((item, index) => (
                <Motion.div
                  key={item.title}
                  {...fadeUp(index * 0.06, 16)}
                  className="flex gap-4 border-t border-[var(--glass-border)] pt-4"
                >
                  <span className="font-serif text-xl italic text-[#102133]/25">0{index + 1}</span>
                  <div>
                    <h3 className="text-[0.92rem] font-bold tracking-[-0.02em] text-[var(--text-main)]">{item.title}</h3>
                    <p className="mt-1 text-[0.78rem] leading-relaxed text-[var(--text-muted)]">{item.desc}</p>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="max-w-none scroll-mt-20 border-t border-[#e7e0d8] bg-[var(--bg-dark)] py-12 md:py-14 lg:py-16">
        <div className="container px-6">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
            <div>
              <SectionLabel>{content.faqLabel}</SectionLabel>
              <SectionTitle>{content.faqTitle}</SectionTitle>
            </div>
            <FaqList items={content.faqs} />
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="max-w-none bg-[#102133] py-12 md:py-14">
        <div className="container px-6">
          <div className="flex flex-col items-start justify-between gap-5 rounded-[0.45rem] bg-[#f7f2ec] p-6 md:flex-row md:items-center md:p-8">
            <div>
              <h2 className="text-[clamp(1.2rem,1.9vw,1.6rem)] font-extrabold leading-tight tracking-[-0.03em] text-[#102133]">{content.finalTitle}</h2>
              <p className="mt-2 max-w-2xl text-[0.8rem] leading-relaxed text-[#566471] md:text-[0.84rem]">{content.finalCopy}</p>
            </div>
            <Link
              to={content.contactPath}
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-[0.25rem] bg-[#102133] px-5 py-3 text-[0.78rem] font-extrabold text-white transition hover:bg-[#1b3145]"
            >
              {content.finalCta}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
