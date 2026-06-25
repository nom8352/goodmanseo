import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpenCheck,
  Bot,
  Check,
  CheckCircle2,
  Clock3,
  FileText,
  HelpCircle,
  LayoutList,
  MessageSquareText,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';

const courseUrl = 'https://inf.run/xfxvT';
const ease = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0, y = 24) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.12 },
  transition: { duration: 0.55, delay, ease },
});

const highlights = [
  '비개발자를 위한 Codex 실무 자동화',
  '콘텐츠, 고객응대, 반복업무를 한 흐름으로 정리',
  '사장님이 직접 따라할 수 있는 예시 중심 강의',
];

const targets = [
  'AI를 써보고 싶지만 어디서부터 시작할지 막막한 사장님',
  '홈페이지 문구, 블로그 글, 고객 안내문을 매번 새로 쓰는 분',
  '외주 전 초안과 방향을 직접 잡고 싶은 1인/소규모 사업자',
];

const sections = [
  {
    icon: Bot,
    title: 'AI는 하는데 왜 결과가 어색한가요?',
    desc: '도구보다 먼저 내 비즈니스 기준, 말투, 고객 상황을 정리하는 방법을 배웁니다.',
  },
  {
    icon: FileText,
    title: '콘텐츠 초안을 빠르게 잡습니다',
    desc: '블로그, 상세페이지, 서비스 소개문처럼 막히기 쉬운 글을 실무 흐름으로 작성합니다.',
  },
  {
    icon: MessageSquareText,
    title: '고객문의와 반복 답변을 줄입니다',
    desc: '자주 받는 질문, 안내문, 리뷰 답변을 AI와 함께 정리하는 방식을 다룹니다.',
  },
];

const curriculum = [
  'Codex로 시작하는 AI 업무 자동화',
  '비개발자가 AI를 쓸 때 먼저 정해야 할 기준',
  '내 비즈니스 말투와 고객 상황 정리하기',
  '콘텐츠 기획, 작성, 수정 흐름 만들기',
  '고객문의와 반복 안내문을 빠르게 정리하기',
  '홈페이지와 블로그에 바로 쓰는 실무 예시',
  '사장님이 직접 운영할 수 있는 자동화 습관 만들기',
];

const faqs = [
  {
    q: '개발을 몰라도 들을 수 있나요?',
    a: '네. 개발자용 강의가 아니라, 사장님이 콘텐츠와 반복업무를 정리하는 흐름에 맞춘 실무 강의입니다.',
  },
  {
    q: 'GoodmanSEO 멘토링과는 무엇이 다른가요?',
    a: '강의는 먼저 혼자 따라해보는 입문 과정이고, 멘토링은 내 비즈니스 상황에 맞춰 1:1로 구조를 잡는 서비스입니다.',
  },
  {
    q: '수강은 어디서 하나요?',
    a: '인프런 강의 페이지에서 신청하고 수강할 수 있습니다. 이 페이지의 버튼을 누르면 강의 페이지로 이동합니다.',
  },
];

const AICourse = () => {
  return (
    <div className="min-h-screen bg-[#f7fafb] pt-20 text-[#0f2230]">
      <Seo
        title="사장님을 위한 Codex AI 실무 자동화 강의"
        description="굳팀장이 진행하는 비개발자용 Codex AI 실무 자동화 강의입니다. 콘텐츠 기획, 문장 작성, 고객 응대, 반복 업무 정리를 사장님 눈높이에 맞춰 배울 수 있습니다."
        path="/ai-course"
        keywords={['Codex 강의', 'AI 실무 자동화', '비개발자 AI 강의', '사장님 AI 강의', '굳팀장', 'GoodmanSEO AI 교육']}
      />

      <section className="relative max-w-none overflow-hidden bg-[#080d12] px-6 py-14 text-white md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(0,122,140,0.34),transparent_32%),radial-gradient(circle_at_20%_100%,rgba(255,130,76,0.16),transparent_32%)]" />
        <div className="container relative z-10">
          <div className="grid gap-9 lg:grid-cols-[1fr_360px] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease }}
              className="max-w-3xl"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#16c784] px-3 py-1 text-xs font-black text-[#04110a]">
                  온라인 강의
                </span>
                <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-bold text-white/78">
                  GoodmanSEO 굳팀장
                </span>
                <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-bold text-white/78">
                  비개발자용
                </span>
              </div>

              <h1 className="mt-6 max-w-4xl text-[clamp(2rem,4.2vw,3.85rem)] font-black leading-[1.12] tracking-[-0.04em] text-white">
                비개발자를 위한
                <br />
                콘텐츠 AI 실무 자동화:
                <br />
                <span className="text-[#8ad7ff]">사장님이 직접 쓰는 Codex 입문</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-[1.75] text-white/74">
                홈페이지 문구, 블로그 초안, 고객문의 답변, 반복 안내문을 매번 처음부터 쓰지 않도록
                AI와 함께 정리하는 실무 과정을 배웁니다.
              </p>

              <div className="mt-7 grid gap-2.5">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm font-semibold text-white/84">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#16c784]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.68, delay: 0.1, ease }}
              className="rounded-2xl border border-white/12 bg-white/8 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.3)] backdrop-blur"
            >
              <div className="rounded-xl bg-[#0d1520] p-5">
                <div className="overflow-hidden rounded-lg bg-[#111827]">
                  <iframe
                    className="aspect-video h-full w-full"
                    src="https://www.youtube-nocookie.com/embed/kuCymkvGF9w"
                    title="비개발자를 위한 Codex AI 실무 자동화 강의 소개 영상"
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg bg-white/8 p-3">
                    <Clock3 size={17} className="text-[#8ad7ff]" />
                    <p className="mt-2 font-black text-white">실무형</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/58">바로 따라하는 흐름</p>
                  </div>
                  <div className="rounded-lg bg-white/8 p-3">
                    <BookOpenCheck size={17} className="text-[#8ad7ff]" />
                    <p className="mt-2 font-black text-white">입문형</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/58">비개발자 눈높이</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container px-6 py-10 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-start">
          <main className="min-w-0 space-y-8">
            <motion.section {...fadeUp()} className="rounded-2xl border border-[#dbecef] bg-white p-6 md:p-8">
              <div className="flex items-center gap-3 border-b border-[#e7f1f3] pb-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e6f4f6] text-[#007a8c]">
                  <Sparkles size={20} />
                </span>
                <h2 className="text-2xl font-black tracking-[-0.04em]">수강 전에 이런 고민이 있었다면</h2>
              </div>

              <div className="mt-6 grid gap-3">
                {targets.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl bg-[#f7fbfc] p-4 text-sm font-semibold leading-relaxed text-[#334756]">
                    <Check size={17} className="mt-0.5 shrink-0 text-[#007a8c]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section {...fadeUp(0.05)} className="rounded-2xl border border-[#dbecef] bg-white p-6 md:p-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-black tracking-[-0.04em]">이 강의에서 배우는 것</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#4e6170]">
                  기능을 많이 나열하기보다, 실제 사업 운영에서 자주 막히는 일을 Codex와 함께 정리하는 순서를 다룹니다.
                </p>
              </div>

              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {sections.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.article
                      key={item.title}
                      {...fadeUp(index * 0.06, 18)}
                      className="rounded-xl border border-[#e3f0f2] bg-[#fbfdfd] p-5"
                    >
                      <Icon size={23} className="text-[#007a8c]" />
                      <h3 className="mt-4 text-base font-black leading-tight tracking-[-0.03em]">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#4e6170]">{item.desc}</p>
                    </motion.article>
                  );
                })}
              </div>
            </motion.section>

            <motion.section {...fadeUp(0.08)} className="rounded-2xl border border-[#dbecef] bg-white p-6 md:p-8">
              <div className="flex items-center gap-3 border-b border-[#e7f1f3] pb-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e6f4f6] text-[#007a8c]">
                  <LayoutList size={20} />
                </span>
                <h2 className="text-2xl font-black tracking-[-0.04em]">커리큘럼</h2>
              </div>

              <div className="mt-5 divide-y divide-[#e7f1f3]">
                {curriculum.map((item, index) => (
                  <motion.div
                    key={item}
                    {...fadeUp(index * 0.035, 12)}
                    className="flex items-center gap-4 py-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f0f7f8] text-sm font-black text-[#007a8c]">
                      {index + 1}
                    </span>
                    <span className="text-sm font-bold leading-relaxed text-[#0f2230]">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section {...fadeUp(0.1)} className="rounded-2xl border border-[#dbecef] bg-white p-6 md:p-8">
              <div className="flex items-center gap-3 border-b border-[#e7f1f3] pb-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e6f4f6] text-[#007a8c]">
                  <HelpCircle size={20} />
                </span>
                <h2 className="text-2xl font-black tracking-[-0.04em]">자주 묻는 질문</h2>
              </div>

              <div className="mt-5 divide-y divide-[#e7f1f3]">
                {faqs.map((item) => (
                  <div key={item.q} className="py-5">
                    <h3 className="text-base font-black tracking-[-0.03em]">{item.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#4e6170]">{item.a}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </main>

          <aside className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.18, ease }}
              className="rounded-2xl border border-[#dbecef] bg-white p-5 shadow-[0_16px_44px_rgba(0,91,112,0.08)]"
            >
              <p className="text-xs font-black uppercase tracking-[0.1em] text-[#007a8c]">학습 신청</p>
              <h2 className="mt-3 text-xl font-black leading-tight tracking-[-0.04em]">
                Codex AI 실무 자동화
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#4e6170]">
                인프런 강의 페이지에서 상세 커리큘럼과 수강 정보를 확인하세요.
              </p>

              <a
                href={courseUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#16c784] px-5 py-3.5 text-sm font-black text-[#04110a] transition hover:bg-[#12b877]"
              >
                수강 신청하기
                <ArrowRight size={16} />
              </a>

              <Link
                to="/ai-business"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-[#007a8c]/25 bg-[#f2fafb] px-5 py-3.5 text-sm font-black text-[#007a8c] transition hover:bg-[#e6f4f6]"
              >
                1:1 멘토링 보기
              </Link>

              <div className="mt-5 space-y-3 border-t border-[#e7f1f3] pt-5">
                {[
                  ['대상', '비개발자, 사장님, 실무자'],
                  ['형태', '온라인 강의'],
                  ['주제', 'Codex, 콘텐츠, 업무 자동화'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-start justify-between gap-4 text-sm">
                    <span className="font-bold text-[#7c8f9f]">{label}</span>
                    <span className="text-right font-bold text-[#0f2230]">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default AICourse;
