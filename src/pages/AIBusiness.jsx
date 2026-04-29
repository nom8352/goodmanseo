import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheckBig, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';

const ease = [0.16, 1, 0.3, 1];

const fitFor = [
  '직원 없이 혼자 운영하면서 반복 업무에 치이는 분',
  '콘텐츠, 응대, 상품 설명을 매번 처음부터 쓰는 분',
  '외주 맡기기엔 비용이 부담되고, 직접 하기엔 시간이 없는 분',
  'SNS, 블로그, 구글 프로필을 꾸준히 관리하고 싶은데 항상 밀리는 분',
  'AI를 내 사업에 붙이고 싶은데 어디서부터 시작해야 할지 모르는 분',
];

const automationExamples = [
  '상품 설명 초안 자동 생성',
  '고객 문의 · 리뷰 답변 초안',
  '인스타그램 · 페이스북 콘텐츠 초안',
  '구글 비즈니스 프로필 게시물',
  '주문 확인 · 안내 메일 템플릿',
  '운영 현황 · 재고 정리 문서 자동화',
];

const sessions = [
  {
    num: '1',
    title: '현재 업무 파악',
    desc: '반복되는 업무를 함께 정리하고 자동화 가능한 것부터 추립니다.',
  },
  {
    num: '2',
    title: 'AI 적용 + 템플릿 제작',
    desc: '실제 업무에 AI를 붙이고 바로 쓸 수 있는 프롬프트 · 템플릿을 만듭니다.',
  },
  {
    num: '3',
    title: '운영 루틴 완성',
    desc: '직접 써보면서 완성하고, 이후 혼자 운영할 수 있는 루틴으로 정리합니다.',
  },
];

const studyGroupWeeks = [
  {
    num: '1',
    title: '반복 업무 찾기',
    desc: '내 사업에서 AI로 줄일 수 있는 업무를 찾고 우선순위를 정합니다.',
  },
  {
    num: '2',
    title: '응대 템플릿 만들기',
    desc: '고객 문의, 리뷰 답변, 안내문에 바로 쓸 수 있는 템플릿을 만듭니다.',
  },
  {
    num: '3',
    title: '콘텐츠 + 운영 루틴',
    desc: 'SNS, 블로그, 구글 비즈니스 프로필 콘텐츠와 혼자 이어갈 운영 루틴을 정리합니다.',
  },
];

const AIBusiness = () => {
  return (
    <div className="pt-32 pb-24">
      <Seo
        title="AI 실전 멘토링"
        description="상품 설명, 고객 응대, SNS 콘텐츠, 재고 관리 — 반복 업무를 AI로 자동화하는 구조를 맞춤으로 만들어드립니다. 온라인 스터디그룹, 온라인 1:1 AI 실전 멘토링, 오프라인 그룹 워크숍 운영."
        path="/ai-business"
        keywords={['AI 실전 멘토링', 'AI 스터디그룹', 'AI 비즈니스 자동화', 'AI 쇼핑몰 운영', 'AI 업무 자동화', 'AI 온라인 운영', '호주 AI 멘토링']}
      />

      <div className="container">

        {/* ── Hero ── */}
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="section-heading mb-0 max-w-4xl"
          >
            <div className="eyebrow-chip w-fit">
              <Sparkles size={14} />
              AI 실전 멘토링
            </div>
            <h1 className="section-title mt-6 max-w-5xl">
              반복 업무를 AI로 자동화하면
              <br />
              사장님 시간이 남습니다
            </h1>
            <p className="section-copy max-w-2xl">
              상품 설명, 고객 응대, SNS 콘텐츠, 재고 관리 —
              <br />
              매번 직접 하던 일을 AI로 처리하는 구조를 만들어드립니다.
              <br />
              강의가 아니라 내 비즈니스에 바로 붙이는 맞춤 작업입니다.
            </p>
          </motion.div>

          {/* ── 가격 블록 ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="grid gap-4"
          >
            {/* 온라인 1:1 */}
            <div className="pricing-spotlight">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">온라인 1:1 실전 멘토링</p>
              <p className="mt-4 text-5xl font-black tracking-[-0.06em]">AUD 2,500</p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent-primary">
                2시간 × 3세션 · 맞춤 진행
              </p>
              <p className="mt-5 text-[0.93rem] leading-[1.65] text-text-muted">
                내 쇼핑몰, 내 비즈니스 기준으로 시작합니다.
                <br />
                실제 업무에 바로 쓸 수 있는 구조를 함께 만듭니다.
              </p>
              <Link to="/contact?type=ai-mentoring" className="primary-button mt-7 inline-flex">
                1:1 멘토링 문의하기
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* 온라인 스터디그룹 */}
            <div className="soft-panel">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">온라인 스터디그룹</p>
              <p className="mt-3 text-4xl font-black tracking-[-0.06em]">
                AUD 590
                <span className="text-xl text-text-muted"> / 인</span>
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent-primary">
                런칭가 · 정상가 AUD 690
              </p>
              <p className="mt-3 text-sm font-semibold text-accent-primary">
                주 1회 2시간 · 3주 과정 · 온라인 소그룹
              </p>
              <p className="mt-4 text-[0.93rem] leading-[1.65] text-text-muted">
                혼자 하면 흐지부지되기 쉬운 AI 활용을
                <br />
                3주 동안 함께 실습하며 내 업무에 적용합니다.
              </p>
              <Link to="/contact?type=ai-study-group" className="secondary-button mt-5 inline-flex">
                스터디그룹 문의하기
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* 오프라인 그룹 */}
            <div className="soft-panel">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">오프라인 그룹 워크숍</p>
              <p className="mt-3 text-4xl font-black tracking-[-0.06em]">
                AUD 250
                <span className="text-xl text-text-muted"> / 인</span>
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent-primary">
                3시간 · 단체 진행 · 브리즈번
              </p>
              <p className="mt-3 text-sm font-semibold text-accent-primary">
                비지니스 유료진단 - 올인원 진단 체험 포함
              </p>
              <p className="mt-4 text-[0.93rem] leading-[1.65] text-text-muted">
                그룹으로 함께 배우는 AI 비즈니스 자동화 워크숍입니다.
              </p>
              <Link to="/contact?type=ai-workshop" className="secondary-button mt-5 inline-flex">
                워크숍 문의하기
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ── 추천 대상 + 자동화 예시 ── */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            viewport={{ once: true, amount: 0.2 }}
            className="showcase-panel"
          >
            <h2 className="text-[1.75rem] font-black tracking-[-0.05em]">이런 분께 맞습니다</h2>
            <div className="mt-6 grid gap-3">
              {fitFor.map((item) => (
                <div key={item} className="benefit-row">
                  <CircleCheckBig size={15} className="text-accent-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            viewport={{ once: true, amount: 0.2 }}
            className="showcase-panel"
          >
            <h2 className="text-[1.75rem] font-black tracking-[-0.05em]">자동화 가능한 업무 예시</h2>
            <div className="mt-6 grid gap-3">
              {automationExamples.map((item) => (
                <div key={item} className="benefit-row">
                  <CircleCheckBig size={15} className="text-accent-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── 3세션 진행 방식 ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 showcase-panel"
        >
          <h2 className="text-[1.75rem] font-black tracking-[-0.05em]">3세션 진행 방식</h2>
          <p className="mt-2 text-[0.93rem] text-text-muted">온라인 1:1 실전 멘토링 기준입니다.</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {sessions.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1, ease }}
                viewport={{ once: true }}
                className="soft-panel"
              >
                <p className="text-[2rem] font-black tracking-[-0.06em] text-accent-primary">{s.num}</p>
                <h3 className="mt-3 text-[1.1rem] font-black tracking-[-0.03em]">{s.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-[1.65] text-text-muted">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── 온라인 스터디그룹 ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 showcase-panel"
        >
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="section-kicker">AI 실전 스터디그룹</p>
              <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.8rem)] font-black leading-[1.05] tracking-[-0.06em]">
                3주 동안
                <br />
                같이 실습하고
                <br />
                내 업무에 적용합니다
              </h2>
              <p className="mt-5 text-[0.95rem] leading-[1.75] text-text-muted">
                주 1회 2시간씩, 총 6시간 동안 온라인 소그룹으로 진행합니다.
                혼자 배우다 멈추는 것이 아니라 매주 실제 결과물을 만들며 따라올 수 있게 구성했습니다.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {studyGroupWeeks.map((week, i) => (
                <motion.div
                  key={week.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08, ease }}
                  viewport={{ once: true }}
                  className="soft-panel"
                >
                  <p className="text-[2rem] font-black tracking-[-0.06em] text-accent-primary">{week.num}</p>
                  <h3 className="mt-3 text-[1.1rem] font-black tracking-[-0.03em]">{week.title}</h3>
                  <p className="mt-2 text-[0.9rem] leading-[1.65] text-text-muted">{week.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── 왜 맞춤인가 ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 showcase-panel"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <h2 className="text-[clamp(1.8rem,3vw,2.8rem)] font-black leading-[1.05] tracking-[-0.06em]">
                강의가 아니라
                <br />
                내 비즈니스에
                <br />
                바로 붙입니다
              </h2>
            </div>
            <div>
              <p className="text-[0.95rem] leading-[1.75] text-text-muted">
                시중에 AI 강의는 많습니다. 하지만 대부분 일반 사용법 수준에서 끝납니다.
              </p>
              <p className="mt-4 text-[0.95rem] leading-[1.75] text-text-muted">
                이 멘토링은 처음부터 내 쇼핑몰, 내 비즈니스 기준으로 시작합니다.
                3세션 동안 실제 업무에 바로 쓸 수 있는 구조를 함께 만듭니다.
              </p>
              <Link to="/contact" className="primary-button mt-7 inline-flex">
                문의하기
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AIBusiness;
