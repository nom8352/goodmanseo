import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Search, 
  MessageSquare, 
  Monitor, 
  Cpu, 
  CheckCircle,
  Bot,
  PlayCircle
} from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import Seo from '../components/Seo';
import { organizationJsonLd, websiteJsonLd } from '../data/siteSeo';
import heroLadyImage from '../../img/home-hero-consultant.png';
import testimonialAvatarOne from '../../img/testimonial-avatar-1.png';

const ease = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0, y = 32) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.64, delay, ease },
  viewport: { once: true, amount: 0.15 },
});

const GoogleLogo = ({ className = 'h-4 w-4' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
  </svg>
);

const ReviewAvatar = ({ src, className = 'h-8 w-8' }) => (
  <span className={`block shrink-0 overflow-hidden rounded-full bg-[#f1ebe3] ${className}`}>
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className="h-full w-full object-cover"
    />
  </span>
);

const HeroSocialProofVisual = () => {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease }}
      className="relative mx-auto w-full max-w-[430px] lg:mx-0 lg:max-w-[560px]"
      aria-label="GoodmanSEO 홈페이지와 구글 비즈니스 점검 안내 이미지"
    >
      <div className="absolute inset-x-8 bottom-2 h-20 rounded-full bg-[#102133]/10 blur-3xl" />

      <div className="relative min-h-[330px] sm:min-h-[420px] lg:min-h-[500px]">
        <div className="absolute bottom-8 right-2 z-0 h-[66%] w-[54%] rounded-[1.1rem] border border-white/60 bg-white/34 shadow-[0_18px_40px_rgba(16,33,51,0.06)] backdrop-blur-[2px] sm:right-8 lg:right-12" />

        <div className="absolute bottom-0 right-0 z-30 h-full w-full overflow-hidden pointer-events-none">
          <Motion.img
            src={heroLadyImage}
            alt="노트북을 들고 홈페이지 점검을 안내하는 GoodmanSEO 상담자"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.78, delay: 0.18, ease }}
            className="absolute right-0 top-0 h-[430px] w-auto max-w-none object-contain drop-shadow-[0_22px_34px_rgba(16,33,51,0.10)] sm:h-[548px] lg:h-[620px]"
            loading="eager"
          />
        </div>

        <Motion.div
          initial={{ opacity: 0, x: 24, y: 8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.55, delay: 0.55, ease }}
          className="absolute left-0 top-2 z-20 w-[112px] rounded-[0.7rem] border border-[#d8dee5] bg-white/92 p-2.5 shadow-[0_8px_18px_rgba(16,33,51,0.10)] sm:left-2 sm:top-5 sm:w-[144px] sm:p-3.5"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[0.5rem] font-extrabold uppercase tracking-[0.08em] text-[#64748b] sm:text-[0.58rem]">Inquiry Flow</p>
              <p className="mt-0.5 text-sm font-black tracking-[-0.04em] text-[#1d4ed8] sm:text-base">+42%</p>
            </div>
            <span className="rounded-full bg-[#eef3f7] px-2 py-0.5 text-[0.55rem] font-bold text-[#2d6fa3]">
              30d
            </span>
          </div>
          <svg className="mt-2 h-9 w-full overflow-visible sm:h-11" viewBox="0 0 150 64" role="img" aria-label="문의 흐름 상승 그래프">
            <path d="M4 56 C28 50 39 48 55 39 C72 29 84 35 99 24 C116 12 130 15 146 8" fill="none" stroke="#dce4eb" strokeWidth="8" strokeLinecap="round" />
            <Motion.path
              d="M4 56 C28 50 39 48 55 39 C72 29 84 35 99 24 C116 12 130 15 146 8"
              fill="none"
              stroke="#2d6fa3"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, delay: 0.82, ease }}
            />
          </svg>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, x: -22, y: 12 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.55, delay: 0.68, ease }}
          className="absolute left-1 top-[12.2rem] z-20 w-[142px] rounded-[0.7rem] border border-[#ddd6cc] bg-white/94 p-2.5 shadow-[0_8px_18px_rgba(16,33,51,0.10)] sm:left-0 sm:top-[14.8rem] sm:w-[190px] sm:p-3.5"
        >
          <div className="flex items-center gap-3">
            <ReviewAvatar src={testimonialAvatarOne} className="h-8 w-8 ring-2 ring-white" />
            <div>
              <p className="text-[0.68rem] font-extrabold text-[#102133] sm:text-xs">Client Review</p>
              <p className="text-[0.56rem] font-semibold text-[#9a6b2f] sm:text-[0.6rem]">Local owner</p>
            </div>
          </div>
          <p className="mt-2 text-[0.65rem] font-semibold leading-relaxed text-[#102133] sm:text-[0.72rem]">
            "Search brought us more direct inquiries."
          </p>
          <div className="mt-2 flex items-center gap-0.5 text-xs text-[#f5b84b] sm:text-sm" aria-label="별점 5점">
            {'★★★★★'.split('').map((star, index) => (
              <Motion.span
                key={`${star}-${index}`}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.22, delay: 0.95 + index * 0.06, ease }}
              >
                {star}
              </Motion.span>
            ))}
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, x: 18, y: 8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.42, delay: 0.84, ease }}
          className="absolute left-[4.4rem] top-[7.7rem] z-20 flex items-center gap-2 rounded-[0.7rem] border border-[#d8dee5] bg-white/94 px-3 py-2.5 shadow-[0_8px_18px_rgba(16,33,51,0.10)] sm:left-[5.4rem] sm:top-[9.7rem] sm:px-3.5 sm:py-3"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
            <GoogleLogo className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-black leading-none text-[#102133]">Google</p>
            <p className="mt-1 text-[0.62rem] font-bold text-[#64748b]">Verified</p>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, x: 18, y: 8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.42, delay: 0.96, ease }}
          className="absolute left-[3.8rem] top-[19.1rem] z-20 w-[132px] rounded-[0.7rem] border border-[#d8dee5] bg-white/94 p-3 shadow-[0_8px_18px_rgba(16,33,51,0.10)] sm:left-[4.8rem] sm:top-[23.4rem] sm:w-[154px]"
        >
          <p className="text-[0.58rem] font-bold text-[#64748b]">Revenue</p>
          <p className="mt-1 text-base font-black tracking-[-0.04em] text-[#102133]">$8,420</p>
          <p className="mt-1 text-[0.56rem] font-bold text-[#2d6fa3]">+18.0%</p>
        </Motion.div>

      </div>
    </Motion.div>
  );
};

const problems = [
  { num: '01', title: '구글 검색에 잘 나오지 않아요', desc: '검색해도 내 업체가 보이지 않아요.' },
  { num: '02', title: '홈페이지가 오래되고 취약해요', desc: '첫인상이 중요하지만 홈페이지가 낡았어요.' },
  { num: '03', title: '리뷰가 없거나 평가가 낮아요', desc: '리뷰가 부족해서 신뢰가 가지 않아요.' },
  { num: '04', title: '홈페이지로 문의가 잘 안 와요', desc: '방문자는 있는데 연락으로 이어지지 않아요.' },
  { num: '05', title: '업체 정보가 제각각 달라요', desc: '주소, 전화번호가 여기저기 달라요.' },
  { num: '06', title: '경쟁업체보다 신뢰감이 떨어져요', desc: '비슷한 서비스인데 선택받지 못해요.' }
];

const services = [
  { icon: Monitor, title: '홈페이지 제작', desc: '신뢰를 만드는 전문적인 홈페이지' },
  { icon: Search, title: '구글 비즈니스 세팅', desc: '검색과 지도 기본 정보를 정리합니다' },
  { icon: CheckCircle, title: 'On-page SEO', desc: '검색 기본 구조를 정리합니다' },
  { icon: MessageSquare, title: '소셜 링크 연결 지원', desc: '홈페이지에 기본 링크를 연결합니다' },
  { icon: Cpu, title: 'AI 업무 지원', desc: '문구와 반복 안내를 가볍게 돕습니다' }
];

const sampleSites = [
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

const Home = () => {
  const headlines = [
    { text: "비즈니스,", highlight: "홈페이지가 없나요?" },
    { text: "구글에서,", highlight: "검색이 안 되시나요?" },
    { text: "SEO 기본,", highlight: "어디부터 손볼까요?" }
  ];

  const [headlineIndex, setHeadlineIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }, 9500); // Slowed down by 2.5x (from 3.8s to 9.5s)
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="overflow-hidden bg-[var(--bg-dark)] pt-20">
      <Seo
        title="홈페이지 제작 · 구글 비즈니스 · 기본 SEO"
        description="GoodmanSEO는 홈페이지 제작, Google Business Profile 세팅, On-page SEO 기본 정리를 도와드립니다."
        path="/"
        keywords={['홈페이지 제작', '구글 비즈니스 프로필', '온페이지 SEO', '비즈니스 홈페이지', '시드니 홈페이지 제작']}
        jsonLd={[organizationJsonLd, websiteJsonLd]}
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
              <h1 
                style={{ perspective: 1000 }}
                className="font-serif text-[clamp(1.8rem,4.0vw,3.6rem)] font-bold leading-[1.15] tracking-tight text-[var(--text-main)] min-h-[5.2rem] sm:min-h-[6.8rem] lg:min-h-[8.8rem] flex flex-col justify-center overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  <Motion.span
                    key={headlineIndex}
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -50, rotateX: 90 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 140, // High stiffness for elastic snap
                      damping: 12,    // Snappy damping for back-bounce
                      mass: 0.6       // Light feel to accelerate quickly
                    }}
                    style={{ transformOrigin: "50% 50% -40px", transformStyle: "preserve-3d" }}
                    className="block"
                  >
                    <span className="block">{headlines[headlineIndex].text}</span>
                    <span className="block text-[var(--accent-primary)]">
                      {headlines[headlineIndex].highlight}
                    </span>
                  </Motion.span>
                </AnimatePresence>
              </h1>
              
              <p className="mt-6 text-[clamp(0.95rem,2vw,1.1rem)] leading-relaxed text-text-muted">
                홈페이지, 구글 비즈니스, 기본 SEO를 정리해<br />
                고객이 믿고 문의할 수 있는 기본 환경을 만듭니다.
                <br />
                필요하면 소셜 계정 링크 연결도 기본으로 도와드립니다.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[0.2rem] border border-[#102133] bg-[#102133] px-5 py-3 text-xs font-black text-white shadow-[0_8px_18px_rgba(16,33,51,0.12)] transition hover:-translate-y-0.5 hover:bg-[#172d42]">
                  무료 점검 신청
                  <ArrowRight size={15} />
                </Link>
                <Link to="/pricing" className="inline-flex min-h-11 items-center justify-center rounded-[0.2rem] border border-[#aeb6bc] bg-white/60 px-5 py-3 text-xs font-black text-[#102133] shadow-[0_8px_18px_rgba(16,33,51,0.04)] transition hover:-translate-y-0.5 hover:bg-white">
                  서비스 및 가격 보기
                </Link>
              </div>
            </Motion.div>

            {/* Right Column: Social proof and performance preview */}
            <HeroSocialProofVisual />

          </div>
        </div>
      </section>

      {/* 2. Problem Section (6대 고민 라인 그리드) */}
      <section className="max-w-none py-12 md:py-14 lg:py-16 border-t border-[#e7e0d8] bg-white">
        <div className="container px-6 text-center">
          <div className="max-w-3xl mx-auto mb-7 md:mb-10">
            <span className="font-serif italic text-[#5f6872] text-[0.82rem]">Common Issues</span>
            <h2 className="mt-2.5 font-sans text-[clamp(1.45rem,2.05vw,2.15rem)] font-extrabold leading-[1.18] tracking-[-0.03em] text-[var(--text-main)]">
              혹시 이런 문제로 고민하고 계신가요?
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-2 md:gap-x-8 md:gap-y-8 lg:grid-cols-3">
            {problems.map((prob, i) => (
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
      <section className="max-w-none bg-[#102133] px-0 pt-12 pb-5 md:pt-14 md:pb-6 lg:pt-16 lg:pb-7">
        <div className="container px-6 text-center">
          <div className="max-w-3xl mx-auto mb-7 md:mb-8">
            <span className="font-serif italic text-[#aab5bd] text-[0.82rem]">Our Solutions</span>
            <h2 className="mt-2.5 font-sans text-[clamp(1.45rem,2.05vw,2.15rem)] font-extrabold leading-[1.18] tracking-[-0.03em] text-[#eef3f7]">
              서비스 소개
            </h2>
            <p className="mt-3 text-[0.78rem] md:text-[0.86rem] leading-relaxed text-[#aeb8c1]">
              홈페이지 제작부터 구글 비즈니스, 기본 SEO까지 정리하고, 소셜은 링크 연결 정도로 지원합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:gap-3.5 lg:grid-cols-5">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Motion.div
                  key={svc.title}
                  {...fadeUp(i * 0.08, 24)}
                  className="last:col-span-2 rounded-[0.45rem] border border-white/10 bg-white/[0.07] p-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.1] sm:p-5 lg:last:col-span-1 flex flex-col items-center justify-between"
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
                <p className="text-[0.76rem] font-bold text-[#63717c]">굳팀장 AI 실무 강의</p>
                <h2 className="mt-1 text-[clamp(1.05rem,1.6vw,1.45rem)] font-extrabold leading-tight tracking-[-0.03em] text-[#102133]">
                  Codex로 콘텐츠와 반복업무를 직접 정리하고 싶다면
                </h2>
              </div>
            </div>

            <p className="text-[0.76rem] md:text-[0.82rem] leading-relaxed text-[#566471] md:max-w-xl">
              홈페이지 문구, 고객문의, 반복 안내문에 바로 쓰는 AI 활용법을 사장님 눈높이에 맞춰 정리한
              비개발자용 실무 강의입니다.
            </p>

            <Link
              to="/ai-course"
              className="inline-flex items-center justify-center gap-2 rounded-[0.25rem] bg-[#102133] px-5 py-3 text-[0.76rem] font-extrabold text-white transition hover:bg-[#1b3145]"
            >
              <PlayCircle size={17} />
              강의 보기
            </Link>
          </Motion.div>
        </div>
      </section>

      {/* 4. Sample Site Section */}
      <section id="samples" className="max-w-none bg-[#102133] px-0 py-12 md:py-14 lg:py-16">
        <div className="container px-6">
          <div className="mb-7 grid gap-4 md:mb-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <span className="font-serif italic text-[#aab5bd] text-[0.82rem]">Sample Websites</span>
              <h2 className="mt-2.5 font-sans text-[clamp(1.45rem,2.05vw,2.15rem)] font-extrabold leading-[1.18] tracking-[-0.03em] text-[#eef3f7]">
                업종별 샘플 사이트
              </h2>
            </div>
            <p className="max-w-2xl text-[0.78rem] md:text-[0.86rem] leading-relaxed text-[#aeb8c1] md:justify-self-end">
              청소, 음식점, 스튜디오, 수리, 전문 서비스처럼 호주 로컬 비즈니스에 맞춘 홈페이지 예시입니다.
              내 업종에 가까운 형태를 먼저 확인해보세요.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 md:gap-3.5 lg:grid-cols-4">
            {sampleSites.map((site, i) => (
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
                    alt={`${site.title} 샘플 홈페이지 미리보기`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 px-1.5 py-2.5">
                  <h3 className="text-[0.82rem] md:text-sm font-bold leading-tight tracking-[-0.02em] text-[#eef3f7]">
                    {site.title}
                  </h3>
                  <span className="inline-flex shrink-0 items-center gap-1 text-[0.72rem] font-bold text-[#d8c8af]">
                    보기
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Motion.a>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[0.45rem] bg-[#f7f2ec] p-5 sm:flex-row sm:items-center md:p-6">
            <p className="text-[0.76rem] md:text-[0.82rem] leading-relaxed text-[#566471]">
              마음에 드는 샘플이 있으면 무료 점검 신청 때 업종과 원하는 방향을 함께 남겨주세요.
            </p>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-[0.25rem] bg-[#102133] px-5 py-3 text-[0.76rem] font-extrabold text-white transition hover:bg-[#1b3145]">
              무료 점검 신청
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
