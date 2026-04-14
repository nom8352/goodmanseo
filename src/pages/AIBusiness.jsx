import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheckBig, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';

const ease = [0.16, 1, 0.3, 1];

const fitFor = [
  '쇼핑몰을 운영하는데 상품 등록, 설명 작성에 시간이 너무 많이 걸리는 분',
  '고객 문의 응대를 매번 직접 쓰는 분',
  'SNS 콘텐츠를 꾸준히 올려야 하는데 항상 막히는 분',
  '직원 없이 혼자 운영하면서 반복 업무가 쌓이는 분',
  'AI를 써보고 싶은데 내 비즈니스에 어떻게 붙일지 모르겠는 분',
];

const automationExamples = [
  '상품 설명 초안 자동 생성',
  '고객 문의 · 리뷰 답변 초안',
  '인스타그램 · 페이스북 콘텐츠 초안',
  '구글 비즈니스 프로필 게시물',
  '주문 확인 · 안내 메일 템플릿',
  '재고 · 운영 현황 정리 자동화',
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

const AIBusiness = () => {
  return (
    <div className="pt-32 pb-24">
      <Seo
        title="AI 비즈니스 자동화 전수"
        description="상품 설명, 고객 응대, SNS 콘텐츠, 재고 관리 — 반복 업무를 AI로 자동화하는 구조를 맞춤으로 만들어드립니다. 온라인 1:1 전수 및 오프라인 그룹 워크숍 운영."
        path="/ai-business"
        keywords={['AI 비즈니스 자동화', 'AI 쇼핑몰 운영', 'AI 업무 자동화', 'AI 온라인 운영', '호주 AI 전수']}
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
              맞춤형 AI 비즈니스 자동화
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
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">온라인 1:1 맞춤 전수</p>
              <p className="mt-4 text-5xl font-black tracking-[-0.06em]">AUD 2,500</p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent-primary">
                2시간 × 3세션 · 맞춤 진행
              </p>
              <p className="mt-5 text-[0.93rem] leading-[1.65] text-text-muted">
                내 쇼핑몰, 내 비즈니스 기준으로 시작합니다.
                <br />
                실제 업무에 바로 쓸 수 있는 구조를 함께 만듭니다.
              </p>
              <Link to="/contact" className="primary-button mt-7 inline-flex">
                문의하기
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
                3시간 · 단체 진행 · 시드니
              </p>
              <p className="mt-4 text-[0.93rem] leading-[1.65] text-text-muted">
                그룹으로 함께 배우는 AI 비즈니스 자동화 워크숍입니다.
              </p>
              <Link to="/contact" className="secondary-button mt-5 inline-flex">
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
          <p className="mt-2 text-[0.93rem] text-text-muted">온라인 1:1 맞춤 전수 기준입니다.</p>
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
                이 전수는 처음부터 내 쇼핑몰, 내 비즈니스 기준으로 시작합니다.
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
