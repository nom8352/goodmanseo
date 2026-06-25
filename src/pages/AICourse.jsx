import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, CheckCircle2, Clock3, FileText, PlayCircle, Sparkles, Workflow } from 'lucide-react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';

const courseUrl = 'https://inf.run/xfxvT';
const ease = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0, y = 24) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.14 },
  transition: { duration: 0.58, delay, ease },
});

const coursePoints = [
  'AI를 처음 쓰는 사장님도 따라갈 수 있는 실무 흐름',
  '콘텐츠 기획, 문장 작성, 반복 업무 정리를 한 번에 연결',
  '홈페이지, SNS, 고객문의에 바로 써먹을 수 있는 예시 중심 구성',
];

const outcomes = [
  {
    icon: FileText,
    title: '콘텐츠 초안 만들기',
    desc: '블로그, 소개문, 상세페이지 문구를 처음부터 막히지 않게 잡습니다.',
  },
  {
    icon: Workflow,
    title: '반복 업무 줄이기',
    desc: '매번 새로 쓰는 답변과 안내문을 AI와 함께 정리합니다.',
  },
  {
    icon: Bot,
    title: '내 비즈니스에 맞게 쓰기',
    desc: '도구 사용법보다 내 업종에 적용하는 순서를 먼저 봅니다.',
  },
];

const curriculum = [
  'Codex로 시작하는 AI 업무 자동화',
  'AI는 하는데 왜 결과가 어색한지 이해하기',
  '내 비즈니스 말투와 기준을 정리하는 방법',
  '콘텐츠 기획, 작성, 수정 흐름 만들기',
  '고객문의와 반복 안내문을 빠르게 정리하기',
  '사장님이 직접 운영할 수 있는 자동화 습관 만들기',
];

const AICourse = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f2fafb] via-white to-[#ecf6f8] pt-24 text-[#0f2230]">
      <Seo
        title="사장님을 위한 Codex AI 실무 자동화 강의"
        description="굳팀장이 진행하는 비개발자용 Codex AI 실무 자동화 강의입니다. 콘텐츠 기획, 문장 작성, 고객 응대, 반복 업무 정리를 사장님 눈높이에 맞춰 배울 수 있습니다."
        path="/ai-course"
        keywords={['Codex 강의', 'AI 실무 자동화', '비개발자 AI 강의', '사장님 AI 강의', '굳팀장', 'GoodmanSEO AI 교육']}
      />

      <section className="relative overflow-hidden px-6 py-14 md:py-24">
        <div className="pointer-events-none absolute right-[-10%] top-10 h-72 w-72 rounded-full bg-[#007a8c]/8 blur-3xl" />
        <div className="container relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="max-w-2xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#cce7eb] bg-white px-4 py-2 text-sm font-bold text-[#007a8c]">
                <Sparkles size={15} />
                굳팀장 AI 실무 강의
              </span>

              <h1 className="mt-6 text-[clamp(2.15rem,4.4vw,4.2rem)] font-black leading-[1.08] tracking-[-0.04em] text-[#0f2230]">
                사장님도 Codex로
                <br />
                <span className="text-[#007a8c]">콘텐츠와 반복업무를</span>
                <br />
                직접 정리할 수 있습니다
              </h1>

              <p className="mt-6 max-w-xl text-[1.02rem] leading-[1.75] text-[#4e6170]">
                개발자가 아니어도 괜찮습니다. 홈페이지 문구, SNS 콘텐츠, 고객 응대,
                반복 안내문을 AI로 다루는 순서를 실무 중심으로 배웁니다.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={courseUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button px-6 py-3 text-base font-bold"
                >
                  인프런 강의 보기
                  <ArrowRight size={18} />
                </a>
                <Link to="/ai-business" className="secondary-button px-6 py-3 text-base font-bold">
                  AI 멘토링 같이 보기
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.12, ease }}
              className="relative"
              aria-label="Codex AI 실무 자동화 강의 요약"
            >
              <div className="rounded-[1.6rem] border border-[#cce7eb] bg-[#071016] p-5 text-white shadow-[0_24px_60px_rgba(0,91,112,0.16)]">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <p className="text-xs font-bold text-[#8ad7ff]">ONLINE COURSE</p>
                    <h2 className="mt-1 text-xl font-black tracking-[-0.04em] text-white">
                      Codex for Business
                    </h2>
                  </div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#007a8c]">
                    <PlayCircle size={22} />
                  </span>
                </div>

                <div className="mt-5 rounded-2xl bg-white p-5 text-[#0f2230]">
                  <p className="text-sm font-extrabold text-[#007a8c]">비개발자를 위한 AI 실무 자동화</p>
                  <p className="mt-3 text-2xl font-black leading-tight tracking-[-0.04em]">
                    콘텐츠 기획부터
                    <br />
                    업무 정리까지
                  </p>
                  <div className="mt-5 grid gap-3">
                    {coursePoints.map((point) => (
                      <div key={point} className="flex items-start gap-2.5 text-sm font-semibold leading-relaxed text-[#4e6170]">
                        <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#007a8c]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/8 p-4">
                    <Clock3 size={18} className="text-[#8ad7ff]" />
                    <p className="mt-3 text-lg font-black text-white">실무형</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/65">도구 소개보다 적용 순서 중심</p>
                  </div>
                  <div className="rounded-2xl bg-white/8 p-4">
                    <Bot size={18} className="text-[#8ad7ff]" />
                    <p className="mt-3 text-lg font-black text-white">비개발자</p>
                    <p className="mt-1 text-xs leading-relaxed text-white/65">사장님 눈높이로 진행</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d9eef1] bg-white/60 px-6 py-14 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-[clamp(1.85rem,3vw,2.8rem)] font-black leading-tight tracking-[-0.04em]">
              이런 분께 맞습니다
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4e6170]">
              외주를 맡기기 전에 직접 초안을 잡고 싶거나, 매번 반복되는 온라인 업무를
              조금씩 줄이고 싶은 사장님에게 맞춘 강의입니다.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {outcomes.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  {...fadeUp(index * 0.08)}
                  className="rounded-2xl border border-[#d9eef1] bg-white p-6 shadow-[0_8px_28px_rgba(0,91,112,0.04)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e6f4f6] text-[#007a8c]">
                    <Icon size={21} />
                  </div>
                  <h3 className="mt-5 text-xl font-black tracking-[-0.04em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4e6170]">{item.desc}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:py-20">
        <div className="container grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <h2 className="text-[clamp(1.85rem,3vw,2.8rem)] font-black leading-tight tracking-[-0.04em]">
              강의에서 다루는 흐름
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4e6170]">
              복잡한 기술 설명보다, 실제 사업 운영에서 바로 쓰는 순서로 정리했습니다.
            </p>
            <a
              href={courseUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#007a8c]/30 bg-white px-6 py-3 text-sm font-extrabold text-[#007a8c] transition hover:bg-[#e6f4f6]"
            >
              인프런 커리큘럼 확인
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="rounded-2xl border border-[#d9eef1] bg-white p-5 md:p-7">
            <div className="grid gap-3">
              {curriculum.map((item, index) => (
                <motion.div
                  key={item}
                  {...fadeUp(index * 0.045, 16)}
                  className="flex items-center gap-4 rounded-xl bg-[#f6fbfc] px-4 py-3"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-[#007a8c]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-bold leading-relaxed text-[#0f2230]">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-24">
        <div className="container">
          <div className="rounded-[1.6rem] border border-[#cce7eb] bg-gradient-to-br from-[#e6f4f6] via-white to-[#f2fafb] p-6 md:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-[clamp(1.65rem,2.7vw,2.45rem)] font-black leading-tight tracking-[-0.04em]">
                  강의로 배우고, 필요하면 GoodmanSEO가 같이 정리해드립니다
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#4e6170]">
                  직접 해보고 싶은 분은 강의로 시작하고, 우리 비즈니스에 맞춘 구조가 필요하면
                  AI 실전 멘토링이나 무료 진단으로 이어갈 수 있습니다.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href={courseUrl} target="_blank" rel="noreferrer" className="primary-button px-6 py-3 font-bold">
                  강의 페이지로 이동
                  <ArrowRight size={17} />
                </a>
                <Link to="/contact?type=ai-course" className="secondary-button px-6 py-3 font-bold">
                  상담 문의하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICourse;
