import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Search, 
  MessageSquare, 
  Instagram, 
  Monitor, 
  Cpu, 
  CheckCircle,
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

const HeroReportVisual = () => {
  const reportItems = [
    { label: 'Google Business', value: '등록 상태 확인', status: '점검 완료' },
    { label: '홈페이지', value: '모바일 문의 흐름', status: '개선 필요' },
    { label: 'SNS 채널', value: '링크·콘텐츠 일관성', status: '확인 중' },
  ];

  const priorityItems = ['문의 버튼 위치', '지도 노출 정보', 'SNS 연결 상태'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 22, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease }}
      className="relative mx-auto w-full max-w-[390px] lg:mx-0 lg:max-w-[470px]"
      aria-label="GoodmanSEO 온라인 진단 리포트 미리보기"
    >
      <div className="absolute inset-x-8 -top-6 h-24 rounded-full bg-[#007a8c]/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[1.35rem] border border-[#cfe8ec] bg-white shadow-[0_18px_42px_rgba(0,91,112,0.08)]">
        <div className="flex items-center justify-between border-b border-[#e2eef1] bg-[#f5fbfc] px-5 py-4">
          <div>
            <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.12em] text-[#7c8f9f]">Online Audit</p>
            <p className="mt-1 text-lg font-black tracking-[-0.03em] text-[#0f2230]">온라인 현황 진단</p>
          </div>
          <span className="inline-flex rounded-full bg-[#007a8c] px-3 py-1 text-[0.72rem] font-bold text-white">
            무료
          </span>
        </div>

        <div className="grid gap-5 p-5 sm:p-6">
          <div className="grid grid-cols-[auto_1fr] items-center gap-4">
            <div className="relative flex h-24 w-24 items-center justify-center">
              <svg className="h-full w-full -rotate-90" viewBox="0 0 96 96">
                <circle cx="48" cy="48" r="39" fill="none" stroke="#edf4f6" strokeWidth="9" />
                <motion.circle
                  cx="48"
                  cy="48"
                  r="39"
                  fill="none"
                  stroke="#007a8c"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 39}
                  initial={{ strokeDashoffset: 2 * Math.PI * 39 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 39 * 0.18 }}
                  transition={{ duration: 1, delay: 0.35, ease: 'easeOut' }}
                />
              </svg>
              <div className="absolute text-center">
                <p className="text-3xl font-black leading-none tracking-[-0.04em] text-[#005b70]">82</p>
                <p className="mt-1 text-[0.62rem] font-bold text-[#7c8f9f]">기본 점수</p>
              </div>
            </div>

            <div className="text-left">
              <p className="text-sm font-bold text-[#0f2230]">먼저 볼 항목</p>
              <div className="mt-3 grid gap-2">
                {priorityItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.45 + index * 0.12, ease }}
                    className="flex items-center gap-2 text-sm font-semibold text-[#4e6170]"
                  >
                    <CheckCircle size={15} className="shrink-0 text-[#007a8c]" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            {reportItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.12, ease }}
                className="rounded-2xl border border-[#e2eef1] bg-[#fbfeff] p-3.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="text-left">
                    <p className="text-[0.72rem] font-bold text-[#7c8f9f]">{item.label}</p>
                    <p className="mt-1 text-sm font-extrabold text-[#0f2230]">{item.value}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-[#e6f4f6] px-2.5 py-1 text-[0.68rem] font-bold text-[#005b70]">
                    {item.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-2xl bg-[#005b70] p-4 text-left text-white">
            <p className="text-[0.78rem] font-bold text-white/70">다음 단계</p>
            <p className="mt-1 text-base font-extrabold tracking-[-0.03em]">고칠 순서를 정리해드립니다</p>
          </div>
        </div>
      </div>
    </motion.div>
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
      <section className="relative pt-10 pb-8 sm:pt-14 sm:pb-12 md:py-24 lg:py-32">
        <div className="container relative z-10 px-6">
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
            
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

            {/* Right Column: Online audit report preview */}
            <HeroReportVisual />

          </div>
        </div>
      </section>

      {/* 2. Problem Section (6대 고민 라인 그리드) */}
      <section className="py-14 md:py-24 lg:py-28 border-t border-[var(--glass-border)] bg-[var(--bg-dark)]">
        <div className="container px-6 text-center">
          <div className="max-w-3xl mx-auto mb-10 md:mb-16">
            <span className="font-serif italic text-[var(--accent-secondary)] text-lg">Common Issues</span>
            <h2 className="mt-3 font-sans text-[clamp(2.0rem,3.2vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.04em] text-[var(--text-main)]">
              혹시 이런 문제로 고민하고 계신가요?
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
            {problems.map((prob, i) => (
              <motion.div
                key={prob.num}
                {...fadeUp(i * 0.08, 24)}
                className="pt-6 border-t border-[var(--glass-border)] flex flex-col"
              >
                <span className="font-serif italic text-3xl md:text-4xl lg:text-5xl text-[var(--accent-secondary)]/30 mb-3 md:mb-4">{prob.num}</span>
                <h3 className="text-base md:text-xl font-bold tracking-[-0.03em] text-[var(--text-main)]">{prob.title}</h3>
                <p className="mt-2 md:mt-3 text-xs md:text-sm leading-relaxed text-[var(--text-muted)]">{prob.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Service Section (5열 종대 채널 진단) */}
      <section className="py-14 md:py-24 lg:py-28 bg-[var(--bg-darker)] border-t border-b border-[var(--glass-border)]">
        <div className="container px-6 text-center">
          <div className="max-w-3xl mx-auto mb-10 md:mb-16">
            <span className="font-serif italic text-[var(--accent-secondary)] text-lg">Our Solutions</span>
            <h2 className="mt-3 font-sans text-[clamp(2.0rem,3.2vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.04em] text-[var(--text-main)]">
              서비스 소개
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
              고객의 온라인 비즈니스를 성장시키는 통합 솔루션을 제공합니다.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-5">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  {...fadeUp(i * 0.08, 24)}
                  className="last:col-span-2 rounded-2xl border border-[var(--glass-border)] bg-white p-4 text-center shadow-sm transition-all duration-300 hover:shadow-md sm:p-6 lg:last:col-span-1 flex flex-col items-center justify-between"
                >
                  <div className="flex flex-col items-center">
                    <div className="mb-3 md:mb-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--bg-darker)] text-[var(--accent-primary)]">
                      <Icon size={19} className="block shrink-0" />
                    </div>
                    <h3 className="text-base md:text-lg font-bold tracking-[-0.03em] text-[var(--text-main)]">{svc.title}</h3>
                    <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)]">{svc.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Process Section (5단계 진행과정) */}
      <section className="py-14 md:py-24 lg:py-28 bg-[var(--bg-dark)]">
        <div className="container px-6 text-center">
          <div className="max-w-3xl mx-auto mb-12 md:mb-20">
            <span className="font-serif italic text-[var(--accent-secondary)] text-lg">How We Work</span>
            <h2 className="mt-3 font-sans text-[clamp(2.0rem,3.2vw,3.4rem)] font-extrabold leading-[1.1] tracking-[-0.04em] text-[var(--text-main)]">
              진행 과정
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
              체계적인 프로세스로 확실한 결과를 만들어냅니다.
            </p>
          </div>
          
          <div className="relative grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-5">
            {/* Gradient connecting line for desktop screen */}
            <div className="absolute top-[40px] left-[5%] right-[5%] hidden h-[1px] bg-gradient-to-r from-[rgba(0,91,112,0.02)] via-[rgba(0,91,112,0.15)] to-[rgba(0,91,112,0.02)] lg:block z-0" />
            
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                {...fadeUp(i * 0.08, 24)}
                className="relative z-10 last:col-span-2 lg:last:col-span-1 flex flex-col"
              >
                {/* Huge Serif Italic Number */}
                <div className="font-serif italic text-4xl md:text-6xl lg:text-7xl text-[var(--accent-primary)]/10 leading-none select-none mb-3 md:mb-4">
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
      <section className="py-12 md:py-24 bg-[var(--bg-dark)] border-t border-[var(--glass-border)]">
        <div className="container px-6">
          <motion.div
            {...fadeUp(0.1)}
            className="rounded-[1.75rem] md:rounded-[2.5rem] bg-gradient-to-br from-[#f0f9fa] via-[#f7fbfb] to-[#e6f4f6] border border-[#d0ecef] p-6 md:p-12 text-[#0f2230] shadow-[0_20px_50px_rgba(0,91,112,0.06)] relative overflow-hidden"
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
              <div className="hidden bg-white border border-[#e6eff1] rounded-[2rem] p-6 md:p-8 shadow-[0_12px_36px_rgba(0,91,112,0.03)] md:flex flex-col items-center justify-between">
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
              <div className="hidden bg-gradient-to-br from-[#0a4651] to-[#042c34] rounded-[2rem] p-6 md:p-8 text-white shadow-[0_12px_40px_rgba(0,91,112,0.14)] relative overflow-hidden lg:flex flex-col justify-between">
                
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
