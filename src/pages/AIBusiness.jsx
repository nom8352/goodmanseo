import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Check, Bot, LineChart, Settings, CircleCheckBig } from 'lucide-react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';

const ease = [0.16, 1, 0.3, 1];

const services = [
  {
    icon: Bot,
    title: 'AI 실전 멘토링',
    tagline: '실무에 바로 적용 가능한 AI 활용법',
    checklist: [
      '업종별 맞춤 AI 활용 전략 수립',
      '콘텐츠/리뷰/응대 자동화 실습',
      '업무 효율을 높이는 AI 도구 활용',
    ],
    recommendTitle: '이런 분께 추천해요',
    recommendDesc: 'AI를 처음 도입하거나, 실무 적용이 막막한 대표님, 실무자',
    ctaText: 'AI 실전 멘토링 신청하기',
    ctaLink: '/contact?type=ai-mentoring',
    highlight: true,
  },
  {
    icon: LineChart,
    title: '스튜디오 그룹',
    tagline: '데이터 기반 콘텐츠 & 광고 전략',
    checklist: [
      '구글/메타 광고 운영 및 최적화',
      '검색/콘텐츠 기반 마케팅 전략 수립',
      '브랜드 성장에 필요한 데이터 분석',
    ],
    recommendTitle: '이런 분께 추천해요',
    recommendDesc: '광고 성과를 높이고 싶은 분, 브랜드의 지속적인 성장을 원하는 분',
    ctaText: '스튜디오 그룹 상담 신청하기',
    ctaLink: '/contact?type=ai-study-group',
    highlight: false,
  },
  {
    icon: Settings,
    title: '워크숍 & 교육',
    tagline: '팀의 역량을 높이는 맞춤형 교육',
    checklist: [
      '실무 중심 워크숍 & 팀 교육',
      '업무 자동화 시스템 구축 교육',
      '맞춤형 커리큘럼으로 실전 역량 강화',
    ],
    recommendTitle: '이런 분께 추천해요',
    recommendDesc: '팀 효율을 높이고 싶은 기업, 내부 역량 강화를 원하는 조직',
    ctaText: '워크숍 & 교육 문의하기',
    ctaLink: '/contact?type=ai-workshop',
    highlight: false,
  },
];

const faqItems = [
  {
    question: '어떤 분들이 이 서비스를 받으면 가장 효과적인가요?',
    answer: (
      <div className="grid gap-2 mt-1">
        {[
          '직원 없이 혼자 운영하면서 매일 반복 업무에 많은 시간을 빼앗기는 분',
          '고객 응대, 리뷰 답변, 상품 설명을 매번 처음부터 작성하느라 핵심 업무에 집중하기 어려운 분',
          '외주를 맡기기엔 고정 비용이 부담스럽고, 혼자 학습해 적용하기엔 시간과 기술의 한계를 느끼는 분',
          '인스타그램, 블로그, 구글 비즈니스 프로필(지도)을 꾸준히 관리하고 싶지만 계속 우선순위에서 밀리는 분',
          '트렌디한 AI 기술을 내 비즈니스 실무에 유기적으로 결합하여 생산성을 높이고 싶은 분'
        ].map((item) => (
          <div key={item} className="flex items-start gap-2 py-0.5 text-left">
            <span className="text-[#007a8c] mt-1 text-xs">✓</span>
            <span className="text-[0.93rem] leading-[1.5] text-[#556877]">{item}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    question: '실무에 AI를 적용하면 어떤 업무들을 자동화할 수 있나요?',
    answer: (
      <div className="grid gap-2 mt-1">
        {[
          '내 브랜드 아이덴티티와 소구점이 반영된 쇼핑몰 상세 페이지 상품 설명 초안 자동 생성',
          '다양한 상황별(배송 문의, 단순 변심, 컴플레인 등) 고객 문의 및 리뷰 대응 맞춤형 초안 자동 작성',
          '인스타그램 피드 및 페이스북 콘텐츠 업로드용 카피라이팅 기획 및 이미지 콘셉트 초안 자동 기획',
          '구글 비즈니스 프로필(지도) 및 네이버 블로그에 정기적으로 포스팅할 최적화된 소식글 자동 작성',
          '자주 발송하는 주문 확인, 계좌 안내, 배송 지연 안내 이메일의 맞춤형 자동 템플릿화',
          '비즈니스 일일 운영 현황 분석 및 노션/구글 스프레드시트 기반의 재고 정리 문서화 프로세스 자동화'
        ].map((item) => (
          <div key={item} className="flex items-start gap-2 py-0.5 text-left">
            <span className="text-[#007a8c] mt-1 text-xs">✓</span>
            <span className="text-[0.93rem] leading-[1.5] text-[#556877]">{item}</span>
          </div>
        ))}
      </div>
    ),
  },
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="py-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left py-4 transition-colors hover:text-[#007a8c] group"
      >
        <span className="flex items-center gap-3">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e6f4f6] text-[0.8rem] font-bold text-[#007a8c]">
            Q
          </span>
          <span className="text-[0.95rem] font-semibold tracking-[-0.02em] text-[#0f2230] group-hover:text-[#007a8c] transition-colors">
            {question}
          </span>
        </span>
        <ChevronDown 
          size={18} 
          className={`text-[#007a8c] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pl-9 pb-5 text-[0.92rem] leading-[1.7] text-[#4e6170]">
          {answer}
        </div>
      </div>
    </div>
  );
};

const AIBusiness = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#f2fafb] via-white to-[#ecf6f8] pt-24 pb-16 text-[#0f2230]">
      <Seo
        title="AI 실전 멘토링"
        description="상품 설명, 고객 응대, SNS 콘텐츠, 재고 관리 — 반복 업무를 AI로 자동화하는 구조를 맞춤으로 만들어드립니다. 온라인 스터디그룹, 온라인 1:1 AI 실전 멘토링, 오프라인 그룹 워크숍 운영."
        path="/ai-business"
        keywords={['AI 실전 멘토링', 'AI 스터디그룹', 'AI 비즈니스 자동화', 'AI 쇼핑몰 운영', 'AI 업무 자동화', 'AI 온라인 운영', '호주 AI 멘토링']}
      />

      <div className="container">

        {/* ── Hero 영역 ── */}
        <section className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          {/* Hero 좌측 */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col items-start text-left"
          >
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#e6f4f6] border border-[#d2ebef] px-3.5 py-1 text-[0.78rem] font-bold text-[#007a8c] mb-6">
              <span className="text-[#007a8c]">✦</span> AI와 전문가의 만남
            </div>
            
            <h1 className="text-[clamp(2.3rem,4.5vw,3.6rem)] font-black leading-[1.15] tracking-[-0.04em] text-[#0f2230]">
              내 비즈니스에
              <br />
              <span className="text-[#007a8c]">진짜 도움 되는</span> 솔루션
            </h1>
            
            <p className="mt-6 text-[1.05rem] leading-[1.7] text-[#556877] max-w-xl">
              상품 설명, 리뷰 답변, 고객 응대까지 반복 업무는 AI가 대신!
              <br />
              실무에 적용 가능한 맞춤형 자동화 & 마케팅 솔루션을 만나보세요.
            </p>
          </motion.div>

          {/* Hero 우측 (대시보드 그래픽) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="relative flex flex-col items-center justify-center p-4 lg:p-0"
          >
            {/* 배경 서클 광원 */}
            <div className="absolute h-72 w-72 rounded-full bg-[#007a8c]/5 blur-3xl -z-10" />

            {/* 그래픽 배치 */}
            <div className="relative w-full max-w-[420px] h-[340px] flex items-center justify-center">
              
              {/* 1) 업무 자동화 시간 카드 */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-4 left-0 w-[220px] rounded-2xl bg-white/80 backdrop-blur-md p-5 border border-white/60 shadow-[0_20px_40px_rgba(0,122,140,0.06)]"
              >
                <p className="text-[0.72rem] font-bold text-[#8fa4b5] uppercase tracking-wider">업무 자동화 시간</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-black text-[#0f2230] tracking-tight">85%</span>
                  <span className="text-[0.78rem] font-semibold text-[#007a8c]">시간 절감 효과</span>
                </div>
                {/* SVG 꺾은선 그래프 */}
                <div className="mt-4 h-16 w-full overflow-visible">
                  <svg className="h-full w-full overflow-visible" viewBox="-2 -4 104 48" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="line-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#007a8c" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#007a8c" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M0,35 C16,32 26,29 38,25 C52,21 63,18 74,13 C86,8 94,5 100,2"
                      fill="none"
                      stroke="#007a8c"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                    />
                    <motion.path
                      d="M0,35 C16,32 26,29 38,25 C52,21 63,18 74,13 C86,8 94,5 100,2 L100,40 L0,40 Z"
                      fill="url(#line-grad)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                    />
                    {/* 끝점 포인트 */}
                    <circle cx="100" cy="2" r="3" fill="#007a8c" />
                  </svg>
                </div>
              </motion.div>

              {/* 2) 마케팅 성과 카드 */}
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="absolute bottom-4 right-0 w-[220px] rounded-2xl bg-white/80 backdrop-blur-md p-5 border border-white/60 shadow-[0_20px_40px_rgba(0,122,140,0.06)]"
              >
                <p className="text-[0.72rem] font-bold text-[#8fa4b5] uppercase tracking-wider">마케팅 성과</p>
                <div className="flex flex-col mt-0.5">
                  <span className="text-[0.7rem] font-semibold text-[#8fa4b5]">전환율</span>
                  <span className="text-3xl font-black text-[#007a8c] tracking-tight leading-none mt-1">+127%</span>
                </div>
                {/* SVG 막대 그래프 */}
                <div className="mt-4 h-16 w-full flex items-end justify-between gap-1.5 px-1">
                  {[24, 34, 44, 53, 62, 72, 82, 94].map((h, i) => (
                    <div key={i} className="flex w-full items-end overflow-hidden rounded-t-sm bg-[#e6f4f6]" style={{ height: '100%' }}>
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.8, delay: 0.7 + i * 0.05 }}
                        className={`w-full rounded-t-sm ${i === 7 ? 'bg-[#007a8c]' : 'bg-[#007a8c]/50'}`}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 3) AI 플로팅 배지 */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-6 top-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#009cb3] to-[#007a8c] text-white font-extrabold text-lg shadow-[0_12px_24px_rgba(0,122,140,0.25)] border border-white/20"
              >
                AI
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ── 3대 상품 그리드 영역 ── */}
        <section className="mt-12">
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease }}
                  className={`relative flex flex-col justify-between rounded-3xl p-8 bg-white border transition-all duration-300 hover:-translate-y-1 ${
                    item.highlight 
                      ? 'border-[#007a8c] shadow-[0_20px_40px_rgba(0,122,140,0.06)] hover:shadow-[0_30px_60px_rgba(0,122,140,0.12)]' 
                      : 'border-slate-100 hover:border-slate-200 hover:border-[#007a8c]/20 shadow-sm hover:shadow-[0_20px_40px_rgba(0,122,140,0.04)]'
                  }`}
                >
                  <div>
                    {/* 카드 헤더 아이콘 */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f2fafb] text-[#007a8c] mb-6">
                      <IconComp size={22} />
                    </div>

                    <h2 className="text-[1.38rem] font-bold tracking-[-0.03em] text-[#0f2230]">
                      {item.title}
                    </h2>
                    
                    <p className="mt-1 text-[0.82rem] font-semibold text-[#8fa4b5]">
                      {item.tagline}
                    </p>

                    {/* 체크리스트 */}
                    <div className="mt-7 space-y-3">
                      {item.checklist.map((point) => (
                        <div key={point} className="flex items-start gap-2.5 text-left">
                          <Check size={16} className="text-[#007a8c] shrink-0 mt-0.5" />
                          <span className="text-[0.9rem] leading-[1.4] text-[#4e6170] font-medium">{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* 이런 분께 추천해요 박스 */}
                    <div className="mt-8 rounded-2xl bg-[#f5fbfb] border border-[#e3f4f6] p-4 text-left">
                      <p className="text-[0.78rem] font-extrabold text-[#007a8c] mb-1.5">
                        {item.recommendTitle}
                      </p>
                      <p className="text-[0.82rem] leading-[1.5] text-[#556877] font-medium">
                        {item.recommendDesc}
                      </p>
                    </div>
                  </div>

                  {/* CTA 버튼 */}
                  <div className="mt-8">
                    <Link
                      to={item.ctaLink}
                      className={`flex w-full items-center justify-center gap-2 rounded-full py-3 text-[0.92rem] font-bold transition-all ${
                        item.highlight
                          ? 'bg-[#007a8c] text-white hover:bg-[#006270] shadow-[0_8px_20px_rgba(0,122,140,0.15)]'
                          : 'border border-[#007a8c]/40 text-[#007a8c] hover:bg-[#007a8c]/5'
                      }`}
                    >
                      {item.ctaText}
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* ── FAQ & 캐릭터 데코레이션 영역 ── */}
        <section className="mt-14 w-full max-w-4xl mx-auto">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            
            {/* FAQ 리스트 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="border-t border-b border-[#e1f1f2] divide-y divide-[#e1f1f2] px-1"
            >
              {faqItems.map((item) => (
                <FaqItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </motion.div>

            {/* 로봇 데코레이션 일러스트 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="flex flex-col items-center justify-center relative py-6 lg:py-0"
            >
              <div className="relative flex flex-col items-center">
                {/* 메탈릭 로봇 얼굴 (CSS/SVG 구현) */}
                <div className="relative h-28 w-28 flex items-center justify-center">
                  
                  {/* 머리 뒤쪽 광채 효과 */}
                  <div className="absolute h-24 w-24 rounded-full bg-[#007a8c]/10 blur-xl" />

                  {/* 둥근 로봇 헤드 */}
                  <div className="h-24 w-24 rounded-full bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] border-2 border-white shadow-[0_12px_24px_rgba(0,0,0,0.06),inset_0_-4px_8px_rgba(0,0,0,0.03)] flex flex-col items-center justify-center p-3 relative z-10">
                    
                    {/* 귀/헤드셋 파트 */}
                    <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-2.5 h-6 rounded-r-md bg-[#cbd5e1] border-l border-white" />
                    <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-2.5 h-6 rounded-l-md bg-[#cbd5e1] border-r border-white" />

                    {/* 눈 부분 디스플레이 */}
                    <div className="w-[72px] h-[34px] rounded-2xl bg-[#0f172a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] flex items-center justify-center gap-2.5 p-1 mt-1">
                      {/* 푸른 빛 눈 LED */}
                      <motion.div
                        animate={{ scaleY: [1, 0.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                        className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#00ffff] to-[#00a3ff] shadow-[0_0_8px_#00ffff]"
                      />
                      <motion.div
                        animate={{ scaleY: [1, 0.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                        className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#00ffff] to-[#00a3ff] shadow-[0_0_8px_#00ffff]"
                      />
                    </div>

                    {/* 입 파트 (볼선) */}
                    <div className="w-6 h-1 rounded-full bg-[#cbd5e1] mt-3" />
                  </div>
                </div>

                {/* 말풍선 */}
                <div className="mt-4 bg-white border border-[#e2e8f0] rounded-2xl px-4 py-2.5 shadow-sm text-center relative max-w-[200px]">
                  {/* 말풍선 꼬리 */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white border-t border-l border-[#e2e8f0]" />
                  <p className="text-[0.78rem] font-bold text-[#556877] leading-relaxed relative z-10">
                    자동화로 사장님의 시간을 돌려드릴게요!
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── 최하단 CTA 배너 ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mt-12 text-center"
        >
          <p className="text-[0.93rem] font-semibold text-[#556877] mb-5">
            지금 무료 진단으로 우리 비즈니스에 딱 맞는 솔루션을 찾아보세요.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#007a8c] text-white px-8 py-3.5 text-[0.95rem] font-bold hover:bg-[#006270] transition-all shadow-[0_12px_24px_rgba(0,122,140,0.12)] hover:-translate-y-0.5"
          >
            무료 진단 및 1:1 맞춤 상담 신청하기
            <ArrowRight size={16} />
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default AIBusiness;
