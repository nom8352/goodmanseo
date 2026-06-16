import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Search, 
  Globe, 
  MessageSquare, 
  Instagram, 
  MapPin, 
  Users, 
  Monitor, 
  Cpu, 
  CheckSquare,
  CheckCircle,
  Clipboard,
  Rocket,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Seo from '../components/Seo';
import { organizationJsonLd, websiteJsonLd } from '../data/siteSeo';

const ease = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0, y = 32) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.64, delay, ease },
  viewport: { once: true, amount: 0.15 },
});

const HeroDevicesVisual = () => {
  const [counts, setCounts] = React.useState({ total: 0, google: 0, web: 0 });

  React.useEffect(() => {
    const duration = 1200; // 1.2s count up duration
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuad interpolation
      const easeProgress = progress * (2 - progress);

      setCounts({
        total: Math.round(easeProgress * 85),
        google: Math.round(easeProgress * 90),
        web: Math.round(easeProgress * 75),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  const circleCircumference = 2 * Math.PI * 22; // r=22 -> ~138.2

  return (
    <div className="relative flex justify-center lg:justify-end">
      
      {/* Background Glow Effect */}
      <div className="absolute top-[10%] right-[10%] -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-[rgba(0,122,140,0.12)] to-[rgba(0,91,112,0.06)] blur-3xl animate-pulse" />

      {/* 1. Google (Large - Behind laptop screen, below the 90/100 gauge card) */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        whileHover={{ scale: 1.12, rotate: 5, shadow: "0px 15px 40px rgba(66,133,244,0.2)" }}
        transition={{ y: { repeat: Infinity, duration: 4.8, ease: "easeInOut" } }}
        className="absolute left-[40%] top-[42%] z-10 flex h-20 w-20 cursor-pointer items-center justify-center rounded-2xl border border-white/50 bg-white/70 backdrop-blur-md shadow-[0_12px_36px_rgba(66,133,244,0.12)] transition-all p-4.5"
      >
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
        </svg>
      </motion.div>

      {/* 2. Instagram (Medium - Top Left, shifted outwards to avoid screen) */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        whileHover={{ scale: 1.12, rotate: -5, shadow: "0px 15px 40px rgba(225,48,108,0.2)" }}
        transition={{ y: { repeat: Infinity, duration: 4.2, ease: "easeInOut" } }}
        className="absolute left-[-1%] top-[12%] z-20 flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl border border-white/50 bg-white/70 backdrop-blur-md shadow-[0_10px_30px_rgba(225,48,108,0.15)] transition-all p-3.5 relative overflow-hidden"
      >
        {/* Colorful Gradient Border Overlay */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] opacity-40" style={{ margin: '-1px', maskImage: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
        <svg viewBox="0 0 24 24" className="w-full h-full text-[#ee2a7b]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      </motion.div>

      {/* 3. Naver (Medium Small - Bottom Left, behind the phone frame) */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        whileHover={{ scale: 1.12, rotate: 5, shadow: "0px 15px 40px rgba(3,199,90,0.2)" }}
        transition={{ y: { repeat: Infinity, duration: 3.9, ease: "easeInOut" } }}
        className="absolute left-[14%] bottom-[-8%] z-10 flex h-14 w-14 cursor-pointer items-center justify-center rounded-2xl border border-white/50 bg-white/70 backdrop-blur-md shadow-[0_8px_24px_rgba(3,199,90,0.12)] transition-all p-3"
      >
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="#03C75A">
          <path d="M16.2 3H21v18h-4.8l-7.4-11V21H4V3h4.8l7.4 11V3z"/>
        </svg>
      </motion.div>

      {/* 4. Facebook (Small - Mid Right, lowered to clear screen header) */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        whileHover={{ scale: 1.12, rotate: -5, shadow: "0px 15px 40px rgba(24,119,242,0.2)" }}
        transition={{ y: { repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.2 } }}
        className="absolute right-[-2%] top-[22%] z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl border border-white/50 bg-white/70 backdrop-blur-md shadow-[0_6px_20px_rgba(24,119,242,0.1)] transition-all p-2.5"
      >
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="#1877F2">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </motion.div>

      {/* Laptop Mockup with Floating Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: [0, -6, 0], scale: 1 }}
        transition={{ 
          opacity: { duration: 0.8, delay: 0.2 },
          scale: { duration: 0.8, delay: 0.2 },
          y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
        }}
        className="relative w-full max-w-[440px] md:max-w-[500px]"
      >
        {/* Screen frame (MacBook style bezel) */}
        <div className="rounded-t-2xl border-[10px] border-slate-900 bg-slate-900 shadow-2xl relative">
          
          {/* Webcam Dot */}
          <div className="absolute top-[3px] left-1/2 -translate-x-1/2 h-[3px] w-[3px] rounded-full bg-slate-800 z-30" />

          {/* Laptop Screen Content */}
          <div className="aspect-[1.6/1] overflow-hidden rounded bg-slate-50 p-4 text-slate-800 relative">
            
            {/* Scanner Laser Beam Animation */}
            <motion.div 
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-40 shadow-[0_0_6px_var(--accent-primary)] z-20"
              style={{ pointerEvents: 'none' }}
            />

            {/* Glass Reflection Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.18] z-20" />
            <div className="absolute -top-[100%] -left-[100%] w-[200%] h-[200%] rotate-45 pointer-events-none bg-gradient-to-r from-transparent via-white/[0.08] to-transparent z-20" />

            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-2 text-[0.62rem] font-bold text-slate-400">
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300"></span>
                <span>GOODMANSEO</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[0.55rem] text-slate-500 font-medium">통합 대시보드</span>
              </div>
            </div>

            {/* Mini Dashboard Content */}
            <div className="mt-3 grid grid-cols-3 gap-2.5">
              <div className="rounded-lg bg-white p-2 shadow-sm border border-slate-100">
                <p className="text-[0.48rem] font-bold text-slate-400">종합 진단 점수</p>
                <p className="text-[0.85rem] font-black text-[var(--accent-primary)] mt-0.5">{counts.total}/100</p>
              </div>
              <div className="rounded-lg bg-white p-2 shadow-sm border border-slate-100">
                <p className="text-[0.48rem] font-bold text-slate-400">구글 최적화</p>
                <p className="text-[0.85rem] font-black text-slate-700 mt-0.5">{counts.google}/100</p>
              </div>
              <div className="rounded-lg bg-white p-2 shadow-sm border border-slate-100">
                <p className="text-[0.48rem] font-bold text-slate-400">홈페이지 분석</p>
                <p className="text-[0.85rem] font-black text-slate-700 mt-0.5">{counts.web}/100</p>
              </div>
            </div>

            {/* Graph Simulation */}
            <div className="mt-3 rounded-lg bg-white p-3 shadow-sm border border-slate-100">
              <div className="flex items-center justify-between text-[0.52rem] font-bold text-slate-400">
                <span>온라인 유입 분석 (주간)</span>
                <span className="text-emerald-500 font-extrabold">+58% 증가</span>
              </div>
              <div className="mt-2.5 flex items-end gap-2 h-14 pt-2 border-b border-l border-slate-100 px-1">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: "20%" }}
                  transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  className="w-full bg-slate-100 rounded-t-sm"
                />
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: "40%" }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  className="w-full bg-slate-200 rounded-t-sm"
                />
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: "35%" }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                  className="w-full bg-slate-100 rounded-t-sm"
                />
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: "65%" }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="w-full bg-slate-200 rounded-t-sm"
                />
                {/* Live pulsing last bar */}
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: ["82%", "86%", "82%"] }}
                  transition={{ 
                    height: {
                      initial: { duration: 1, delay: 0.7, ease: "easeOut" },
                      default: { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
                    }
                  }}
                  className="w-full bg-[var(--accent-primary)] rounded-t-sm shadow-[0_2px_8px_rgba(0,91,112,0.3)] relative"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Keyboard Base (MacBook style metallic base) */}
        <div className="relative h-[10px] w-[106%] -left-[3%] rounded-b-xl bg-gradient-to-b from-slate-200 to-slate-400 border-t border-slate-300 shadow-[0_12px_24px_rgba(0,0,0,0.15)] z-20">
          {/* Opening groove */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-2.5 w-20 bg-slate-400/60 rounded-b-md z-30 flex justify-center">
            {/* Trackpad representation */}
            <div className="absolute top-[2px] h-[3px] w-12 bg-slate-500/40 rounded-sm"></div>
          </div>
        </div>

        {/* Overlapping Phone Mockup (iPhone Pro style) with independent float */}
        <motion.div
          initial={{ opacity: 0, x: 24, y: 24 }}
          animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.4 },
            x: { duration: 0.8, delay: 0.4 },
            y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }
          }}
          className="absolute -right-4 -bottom-8 z-30 w-[150px] sm:w-[170px] rounded-[2rem] border-[6px] border-slate-900 bg-slate-900 p-1 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] overflow-hidden"
        >
          {/* Phone Screen Content */}
          <div className="aspect-[1/2] rounded-[1.6rem] overflow-hidden bg-white p-3 text-slate-800 relative flex flex-col justify-between h-full">
            
            {/* Scanner Laser Beam Animation for Phone */}
            <motion.div 
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--accent-primary)] to-transparent opacity-40 shadow-[0_0_6px_var(--accent-primary)] z-20"
              style={{ pointerEvents: 'none' }}
            />

            {/* Phone Screen Reflection */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.15] z-20" />

            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 h-3.5 w-11 rounded-full bg-slate-900 z-30 flex items-center justify-end px-1.5">
              <span className="h-1 w-1 rounded-full bg-blue-900/60"></span>
            </div>

            <div className="mt-3">
              <p className="text-[0.48rem] font-bold text-slate-400 text-center uppercase tracking-wider">Online Audit</p>
              <p className="text-[0.72rem] font-black text-slate-700 text-center mt-0.5">온라인 현황 진단</p>
            </div>
            
            {/* Circular Score representation with SVG path animation */}
            <div className="my-2 flex flex-col items-center justify-center relative">
              <div className="absolute h-14 w-14 rounded-full bg-[var(--accent-primary)]/5 blur-md" />
              <div className="relative flex h-14 w-14 items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="28"
                    cy="28"
                    r="22"
                    fill="transparent"
                    stroke="#f1f5f9"
                    strokeWidth="4"
                  />
                  <motion.circle
                    cx="28"
                    cy="28"
                    r="22"
                    fill="transparent"
                    stroke="var(--accent-primary)"
                    strokeWidth="4"
                    strokeDasharray={circleCircumference}
                    initial={{ strokeDashoffset: circleCircumference }}
                    animate={{ strokeDashoffset: circleCircumference * (1 - 85 / 100) }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                  />
                </svg>
                <span className="absolute text-[0.95rem] font-black text-[var(--accent-primary)]">
                  {counts.total}
                </span>
              </div>
            </div>

            {/* Channel Check Bars */}
            <div className="space-y-2 text-[0.48rem] font-bold text-slate-500 mb-1">
              <div>
                <div className="flex justify-between pb-0.5 text-slate-600">
                  <span>구글 GBP</span>
                  <span className="text-[var(--accent-primary)]">90%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "90%" }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                    className="h-full bg-[var(--accent-primary)] rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between pb-0.5 text-slate-600">
                  <span>홈페이지</span>
                  <span className="text-slate-400">75%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
                    className="h-full bg-slate-300 rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between pb-0.5 text-slate-600">
                  <span>SNS 채널</span>
                  <span className="text-slate-400">80%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "80%" }}
                    transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                    className="h-full bg-slate-300 rounded-full"
                  />
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>

    </div>
  );
};

const problems = [
  { num: '01', title: '구글 검색에 잘 나오지 않아요', desc: '검색해도 내 업체가 보이지 않아요.' },
  { num: '02', title: '홈페이지가 오래되고 취약해요', desc: '첫인상이 중요하지만 홈페이지가 낡았어요.' },
  { num: '03', title: '리뷰가 없거나 평가가 낮아요', desc: '리뷰가 부족해서 신뢰가 가지 않아요.' },
  { num: '04', title: 'SNS는 하는데 문의가 없어요', desc: '팔로워는 있는데 문의로 이어지지 않아요.' },
  { num: '05', title: '업체 정보가 제각각 달라요', desc: '주소, 전화번호가 여기저기 달라요.' },
  { num: '06', title: '경쟁업체보다 신뢰감이 떨어져요', desc: '비슷한 서비스인데 선택받지 못해요.' }
];

const services = [
  { icon: Monitor, title: '홈페이지 제작', desc: '신뢰를 만드는 전문적인 홈페이지' },
  { icon: Search, title: '구글 비즈니스 관리', desc: '검색과 지도에서 발견되게 만듭니다' },
  { icon: Instagram, title: 'SNS 마케팅', desc: '관심을 문의로 연결하는 채널' },
  { icon: MessageSquare, title: '리뷰 관리', desc: '고객 신뢰를 만드는 강력한 자산' },
  { icon: Cpu, title: 'AI 자동화', desc: '반복 업무를 줄이고 고객 응대를 자동화' }
];

const steps = [
  { num: '01', title: '무료 진단 신청', desc: '3분 만에 간단하게 신청할 수 있어요.' },
  { num: '02', title: '온라인 상태 분석', desc: '구글, 홈페이지, SNS를 꼼꼼하게 분석합니다.' },
  { num: '03', title: '개선 제안서 전달', desc: '문제점과 해결 방안을 상세히 제안합니다.' },
  { num: '04', title: '서비스 선택', desc: '필요한 서비스를 선택하여 진행할 수 있어요.' },
  { num: '05', title: '제작 및 관리 시작', desc: '전문가가 제작하고 꾸준히 관리합니다.' }
];

const Home = () => {
  const headlines = [
    { text: "비즈니스,", highlight: "홈페이지가 없나요?" },
    { text: "구글에서,", highlight: "검색이 안 되시나요?" },
    { text: "인스타, 페북", highlight: "시작하기 힘드신가요?" }
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
        title="구글 · 홈페이지 · SNS 통합 마케팅"
        description="GoodmanSEO는 구글 비즈니스 프로필, 홈페이지, 인스타그램, 페이스북을 함께 보고 먼저 고칠 부분을 무료로 점검해드립니다."
        path="/"
        keywords={['온라인 점검', '구글 비즈니스 프로필', '온페이지 SEO', '비즈니스 홈페이지', '인스타그램 점검', '페이스북 점검']}
        jsonLd={[organizationJsonLd, websiteJsonLd]}
      />

      {/* 1. Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32">
        <div className="container relative z-10 px-6">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            
            {/* Left Column: Typography & CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease }}
              className="flex flex-col text-left"
            >
              <h1 
                style={{ perspective: 1000 }}
                className="font-sans text-[clamp(1.8rem,4.0vw,3.6rem)] font-black leading-[1.15] tracking-tight text-[var(--text-main)] min-h-[5.2rem] sm:min-h-[6.8rem] lg:min-h-[8.8rem] flex flex-col justify-center overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  <motion.span
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
                  </motion.span>
                </AnimatePresence>
              </h1>
              
              <p className="mt-6 text-[clamp(0.95rem,2vw,1.1rem)] leading-relaxed text-text-muted">
                구글, 홈페이지, SNS를 통합 관리하여<br />
                고객이 신뢰하고 선택하는 온라인 환경을 만듭니다.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact" className="primary-button text-base px-6 py-3 font-semibold">
                  무료 진단 신청
                  <ArrowRight size={18} />
                </Link>
                <Link to="/pricing" className="secondary-button text-base px-6 py-3 font-semibold">
                  서비스 및 가격 보기
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Hero Devices Visual */}
            <HeroDevicesVisual />

          </div>
        </div>
      </section>

      {/* 2. Problem Section (6대 고민 라인 그리드) */}
      <section className="py-20 md:py-28 border-t border-[var(--glass-border)] bg-[var(--bg-dark)]">
        <div className="container px-6 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="font-serif italic text-[var(--accent-secondary)] text-lg">Common Issues</span>
            <h2 className="mt-3 font-sans text-[clamp(2.0rem,3.2vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.04em] text-[var(--text-main)]">
              혹시 이런 문제로 고민하고 계신가요?
            </h2>
          </div>
          
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((prob, i) => (
              <motion.div
                key={prob.num}
                {...fadeUp(i * 0.08, 24)}
                className="pt-6 border-t border-[var(--glass-border)] flex flex-col"
              >
                <span className="font-serif italic text-4xl lg:text-5xl text-[var(--accent-secondary)]/30 mb-4">{prob.num}</span>
                <h3 className="text-xl font-bold tracking-[-0.03em] text-[var(--text-main)]">{prob.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{prob.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Service Section (5열 종대 채널 진단) */}
      <section className="py-20 md:py-28 bg-[var(--bg-darker)] border-t border-b border-[var(--glass-border)]">
        <div className="container px-6 text-center">
          <div className="max-w-3xl mx-auto mb-16">
            <span className="font-serif italic text-[var(--accent-secondary)] text-lg">Our Solutions</span>
            <h2 className="mt-3 font-sans text-[clamp(2.0rem,3.2vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.04em] text-[var(--text-main)]">
              서비스 소개
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
              고객의 온라인 비즈니스를 성장시키는 통합 솔루션을 제공합니다.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  {...fadeUp(i * 0.08, 24)}
                  className="rounded-2xl border border-[var(--glass-border)] bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--bg-darker)] text-[var(--accent-primary)] mb-5">
                      <Icon size={20} className="block shrink-0" />
                    </div>
                    <h3 className="text-lg font-bold tracking-[-0.03em] text-[var(--text-main)]">{svc.title}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)]">{svc.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Process Section (5단계 진행과정) */}
      <section className="py-20 md:py-28 bg-[var(--bg-dark)]">
        <div className="container px-6 text-center">
          <div className="max-w-3xl mx-auto mb-20">
            <span className="font-serif italic text-[var(--accent-secondary)] text-lg">How We Work</span>
            <h2 className="mt-3 font-sans text-[clamp(2.0rem,3.2vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.04em] text-[var(--text-main)]">
              진행 과정
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
              체계적인 프로세스로 확실한 결과를 만들어냅니다.
            </p>
          </div>
          
          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {/* Gradient connecting line for desktop screen */}
            <div className="absolute top-[40px] left-[5%] right-[5%] hidden h-[1px] bg-gradient-to-r from-[rgba(0,91,112,0.02)] via-[rgba(0,91,112,0.15)] to-[rgba(0,91,112,0.02)] lg:block z-0" />
            
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                {...fadeUp(i * 0.08, 24)}
                className="relative z-10 flex flex-col"
              >
                {/* Huge Serif Italic Number */}
                <div className="font-serif italic text-6xl lg:text-7xl text-[var(--accent-primary)]/10 leading-none select-none mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold tracking-[-0.03em] text-[var(--text-main)]">{step.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="primary-button text-base px-6 py-3 font-semibold">
              지금 무료 진단 신청하기
              <ArrowRight size={18} />
            </Link>
            <Link to="/pricing" className="secondary-button text-base px-6 py-3 font-semibold">
              요금제 알아보기
            </Link>
          </div>
        </div>
      </section>



      {/* 5. Footer Banner / CTA Section */}
      <section className="py-16 md:py-24 bg-[var(--bg-dark)] border-t border-[var(--glass-border)]">
        <div className="container px-6">
          <motion.div
            {...fadeUp(0.1)}
            className="rounded-[2.5rem] bg-gradient-to-br from-[#f0f9fa] via-[#f7fbfb] to-[#e6f4f6] border border-[#d0ecef] p-8 md:p-12 text-[#0f2230] shadow-[0_20px_50px_rgba(0,91,112,0.06)] relative overflow-hidden"
          >
            {/* Soft grid/light glow background elements */}
            <div className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle at 50% 120%, #8ad7ff 0%, transparent 60%)',
              }}
            />
            
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_1fr] lg:items-stretch relative z-10">
              
              {/* Left Box: CTA & Sparkle Badge */}
              <div className="text-left flex flex-col items-start justify-center pr-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#bce3e7] text-xs font-bold text-[#005b70] mb-6 shadow-sm">
                  <Sparkles size={13} className="text-[#007a8c] animate-pulse" />
                  AI 기반 종합 진단 리포트
                </span>
                
                <h2 className="text-[clamp(1.75rem,3.2vw,2.4rem)] font-extrabold leading-[1.2] text-[#0f2230] tracking-[-0.04em]">
                  내 비즈니스는 고객에게<br />
                  어떻게 보일까요?
                </h2>
                
                <p className="mt-4 text-sm leading-relaxed text-[#4e6170]">
                  구글, 홈페이지, SNS 무료 진단으로<br />
                  지금 바로 확인해보세요. 3분이면 충분합니다!
                </p>
                
                <Link to="/contact" className="mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#005b70] hover:bg-[#004758] px-7 py-4 text-base font-bold text-white transition-all shadow-[0_8px_24px_rgba(0,91,112,0.18)] hover:translate-y-[-1px]">
                  무료 진단 신청하기
                  <ArrowRight size={18} />
                </Link>
              </div>

              {/* Center Box: Diagnostic Scores Gauge (White Premium Card) */}
              <div className="bg-white border border-[#e6eff1] rounded-[2rem] p-6 md:p-8 shadow-[0_12px_36px_rgba(0,91,112,0.03)] flex flex-col items-center justify-between">
                <p className="text-sm font-bold text-[#0f2230]">종합 진단 점수</p>
                
                {/* Clean SVG Circular Gauge */}
                <div className="relative flex h-28 w-28 items-center justify-center my-6">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="56"
                      cy="56"
                      r="46"
                      fill="transparent"
                      stroke="#f1f5f9"
                      strokeWidth="8"
                    />
                    <motion.circle
                      cx="56"
                      cy="56"
                      r="46"
                      fill="transparent"
                      stroke="url(#tealGradient)"
                      strokeWidth="8"
                      strokeDasharray={2 * Math.PI * 46}
                      initial={{ strokeDashoffset: 2 * Math.PI * 46 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 46 * (1 - 85 / 100) }}
                      transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="tealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8ad7ff" />
                        <stop offset="100%" stopColor="#005b70" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute text-center flex flex-col items-center">
                    <span className="text-3xl font-black text-[#0f2230] leading-none">85</span>
                    <span className="text-[0.62rem] font-bold text-[#7c8f9f] mt-1">/ 100</span>
                  </div>
                </div>
                
                {/* Scoring Rows */}
                <div className="w-full space-y-4 text-xs font-bold text-[#4e6170] border-t border-slate-100 pt-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {/* Google G logo representation */}
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                      </svg>
                      <span>구글 비즈니스</span>
                    </div>
                    <span className="text-[#005b70]">90/100</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Monitor size={14} className="text-[#4e6170]" />
                      <span>홈페이지</span>
                    </div>
                    <span className="text-[#005b70]">75/100</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageSquare size={14} className="text-[#4e6170]" />
                      <span>SNS 채널</span>
                    </div>
                    <span className="text-[#005b70]">80/100</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles size={14} className="text-[#4e6170]" />
                      <span>리뷰 상태</span>
                    </div>
                    <span className="text-[#005b70]">95/100</span>
                  </div>
                </div>
              </div>

              {/* Right Box: Key Improvements (Deep Teal Premium Card) */}
              <div className="bg-gradient-to-br from-[#0a4651] to-[#042c34] rounded-[2rem] p-6 md:p-8 text-white shadow-[0_12px_40px_rgba(0,91,112,0.14)] relative overflow-hidden flex flex-col justify-between">
                
                {/* Tech connection net background visual */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/5 blur-2xl pointer-events-none" />
                <div className="absolute left-0 bottom-0 pointer-events-none opacity-10 w-full h-1/2" 
                  style={{
                    backgroundImage: 'radial-gradient(circle at 10% 90%, #d8ff72 0%, transparent 60%)',
                  }}
                />

                <p className="text-base font-bold mb-6 tracking-[-0.02em] border-b border-white/10 pb-3">주요 개선 포인트</p>
                
                <ul className="space-y-4.5 text-sm font-semibold flex-1 flex flex-col justify-center">
                  <li className="flex items-center gap-3 border-b border-white/5 pb-3.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8ad7ff]/10 text-[#8ad7ff] border border-[#8ad7ff]/20">
                      <CheckCircle size={11} fill="currentColor" className="text-[#0c4e5b]" />
                    </span>
                    <div className="flex items-center gap-2 text-slate-100">
                      <Search size={14} className="text-slate-300" />
                      <span>구글 검색 노출 최적화</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 border-b border-white/5 pb-3.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8ad7ff]/10 text-[#8ad7ff] border border-[#8ad7ff]/20">
                      <CheckCircle size={11} fill="currentColor" className="text-[#0c4e5b]" />
                    </span>
                    <div className="flex items-center gap-2 text-slate-100">
                      <Monitor size={14} className="text-slate-300" />
                      <span>홈페이지 모바일 최적화</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3 border-b border-white/5 pb-3.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8ad7ff]/10 text-[#8ad7ff] border border-[#8ad7ff]/20">
                      <CheckCircle size={11} fill="currentColor" className="text-[#0c4e5b]" />
                    </span>
                    <div className="flex items-center gap-2 text-slate-100">
                      <MessageSquare size={14} className="text-slate-300" />
                      <span>SNS 콘텐츠 정기 업로드</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8ad7ff]/10 text-[#8ad7ff] border border-[#8ad7ff]/20">
                      <CheckCircle size={11} fill="currentColor" className="text-[#0c4e5b]" />
                    </span>
                    <div className="flex items-center gap-2 text-slate-100">
                      <Sparkles size={14} className="text-slate-300" />
                      <span>리뷰 수 및 평점 관리</span>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
