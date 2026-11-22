import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Seo from '../components/Seo';

const tasks = [
  ['홈페이지', 'AI로 페이지 초안을 만들고, 문구·사진을 수정하고, 공개 전 기본 사항을 확인합니다.'],
  ['구글 검색·SEO', '페이지 제목과 서비스 설명, 구글 비즈니스 프로필 등 검색 기본기를 내 사업에 적용합니다.'],
  ['광고·콘텐츠', '페이스북 광고 소재를 만들고 설정과 결과를 읽는 방법을 함께 살펴봅니다.'],
  ['반복 업무', '고객 안내, 리뷰 답변, 자료 정리처럼 반복되는 일에 AI를 활용합니다.'],
];
const steps = [
  ['할 일 정하기', '현재 상황을 보고 이번에 해결할 과제와 작업 범위를 정합니다.'],
  ['기본기 익히기', '과제에 필요한 개념과 도구 사용법을 먼저 익힙니다.'],
  ['함께 만들기', '내 자료와 화면으로 직접 실습하고 막히는 부분을 점검합니다.'],
  ['운영 방법 정리하기', '스스로 할 일과 추가 지원이 필요한 일을 구분합니다.'],
];
const faqs = [
  ['AI를 처음 써도 가능한가요?', '현재 사용 경험과 목표를 확인하고 필요한 기본기부터 시작합니다. 과제에 따라 계정 준비와 사전 자료가 필요할 수 있습니다.'],
  ['코칭이 끝나면 무엇을 할 수 있나요?', '목표는 상담 때 정합니다. 예를 들어 홈페이지 문구·사진 수정, 광고 소재 초안 작성, 고객 안내 템플릿 활용처럼 직접 할 작업을 구체적으로 정합니다. 모든 업무의 완전 자동화나 검색 순위·매출을 보장하지는 않습니다.'],
  ['시간이 없거나 직접 하기 어려우면요?', '기존 홈페이지 제작·SEO 설정 서비스를 이용할 수 있습니다. 필요한 부분만 맡기거나 처음에는 제작을 맡기고 이후 운영 방법을 배우는 방식도 상담할 수 있습니다.'],
  ['도구 비용이나 광고비도 포함되나요?', '필요한 도구의 구독료와 광고비는 코칭·작업 비용과 구분해 안내합니다. 사용할 계정, 비용 부담, 작업 범위는 시작 전에 협의합니다.'],
  ['몇 회 진행하고 비용은 얼마인가요?', '목표, 현재 수준, 함께 할 작업과 피드백 범위를 확인한 뒤 횟수와 비용을 안내합니다. 기존 강의와 제작 상품의 가격은 각 안내 페이지에서 확인할 수 있습니다.'],
  ['수업 뒤 질문이나 관리도 가능한가요?', '피드백 기간과 지원 범위를 시작 전에 정합니다. 이후 추가 코칭이나 사이트 관리가 필요하면 별도로 상담합니다.'],
];

export default function AIBusiness() {
  return (
    <div className="bg-[#f7f2ec] pt-28 pb-16 text-[#102133]">
      <Seo title="AI 실전 코칭" description="내 사업의 홈페이지, 검색, 광고와 반복 업무를 AI로 직접 해보는 실전 코칭. 필요한 기본기를 배우고 실제 과제로 실습하며, 어려운 부분은 제작·설정 지원을 받을 수 있습니다." path="/ai-business" keywords={['AI 실전 코칭', 'AI 실전 멘토링', '소상공인 AI 도입', '홈페이지 실습', '온라인 마케팅 코칭']} />
      <div className="container px-6">
        <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center py-8">
          <div>
            <p className="text-sm font-semibold text-[#44515d]">소상공인·1인 사업자를 위한 AI 도입과 실전 코칭</p>
            <h1 className="mt-4 text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.2] tracking-[-0.03em]">예제 대신,<br />내 사업으로 실습합니다.</h1>
            <p className="mt-6 max-w-xl leading-relaxed text-[#44515d]">무엇부터 할지 정하고, 필요한 기본기를 배우고, 내 자료로 직접 해봅니다. 굳맨은 방향을 잡고 막히는 부분을 함께 점검합니다.</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link to="/contact?type=ai-mentoring&mode=coach" className="inline-flex min-h-11 items-center gap-2 rounded bg-[#102133] px-5 py-3 text-sm font-bold text-white">AI 실전 코칭 상담하기<ArrowRight size={16} /></Link>
              <Link to="/pricing#website-packages" className="inline-flex min-h-11 items-center text-sm font-bold underline underline-offset-4">직접 하기 어렵다면 제작·대행 보기</Link>
            </div>
          </div>
          <figure className="overflow-hidden rounded-xl border border-[#ded8cf] bg-white">
            <img src="/samples/previews/north-lakes-local-cafe.jpg" alt="실습 방향을 살펴볼 수 있는 로컬 카페 홈페이지 제작 예시" className="w-full aspect-[16/10] object-cover object-top" width="800" height="500" />
            <figcaption className="p-4 text-sm leading-relaxed text-[#44515d]">제작 예시입니다. 코칭에서는 내 사업의 서비스·사진·문의 방법으로 직접 구성하는 과정을 다룹니다. 수강생 성과 사례는 아닙니다.</figcaption>
          </figure>
        </section>
        <section className="py-12">
          <h2 className="text-2xl font-extrabold">지금 필요한 일, 한 가지부터.</h2>
          <p className="mt-3 text-[#44515d]">모든 것을 한 번에 배우기보다 내 사업에 먼저 필요한 과제를 고릅니다.</p>
          <div className="mt-7 divide-y divide-[#ded8cf] border-y border-[#ded8cf]">
            {tasks.map(([title, body]) => <div key={title} className="grid gap-3 py-5 md:grid-cols-[1fr_3fr]"><h3 className="font-bold">{title}</h3><p className="text-sm leading-relaxed text-[#44515d]">{body}</p></div>)}
          </div>
        </section>
        <section className="!max-w-none rounded-lg bg-[#102133] p-6 md:p-9 text-[#eef3f7]">
          <h2 className="text-2xl font-extrabold">이렇게 함께 진행합니다</h2>
          <ol className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, body], index) => <li key={title}><span className="text-sm text-[#d8c8af]">{index + 1}</span><h3 className="mt-2 font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[#c4ced8]">{body}</p></li>)}
          </ol>
        </section>
        <section className="py-12">
          <h2 className="text-2xl font-extrabold">전부 혼자 하실 필요는 없습니다.</h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-[#44515d]">할 수 있는 부분은 직접 하고 어려운 설정만 맡겨도 됩니다. 시간이 부족하다면 기존 방식대로 제작을 맡기고, 나중에 기본 수정 방법을 배우는 방향도 함께 정할 수 있습니다.</p>
          <div className="mt-6 flex flex-wrap gap-5 text-sm font-bold">
            <Link to="/ai-course" className="underline underline-offset-4">혼자 시작하는 AI 강의</Link>
            <Link to="/pricing" className="underline underline-offset-4">제작·설정 서비스와 가격</Link>
            <Link to="/contact?type=general-inquiry&mode=done-for-you" className="underline underline-offset-4">어려운 부분만 맡기기</Link>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-[#44515d]">여러 명이 함께 배우는 스튜디오 그룹이나 팀 워크숍도 상담할 수 있습니다.</p>
          <div className="mt-3 flex flex-wrap gap-5 text-sm font-bold">
            <Link to="/contact?type=ai-study-group&mode=coach" className="underline underline-offset-4">스튜디오 그룹 문의</Link>
            <Link to="/contact?type=ai-workshop&mode=coach" className="underline underline-offset-4">팀 워크숍 문의</Link>
          </div>
        </section>
        <section className="py-8 max-w-3xl">
          <h2 className="text-2xl font-extrabold mb-6">시작하기 전에 궁금한 점</h2>
          {faqs.map(([question, answer]) => <details key={question} className="border-b border-[#ded8cf] py-4"><summary className="cursor-pointer py-2 font-bold">{question}</summary><p className="mt-3 pb-2 text-sm leading-relaxed text-[#44515d]">{answer}</p></details>)}
        </section>
        <section className="pt-10 text-center">
          <h2 className="text-2xl font-extrabold">AI로 해보고 싶은 일, 하나부터 알려주세요.</h2>
          <p className="mt-3 text-[#44515d]">배우기, 코칭, 대행 중 어떤 방식이 맞을지 함께 정합니다.</p>
          <Link to="/contact?type=ai-mentoring&mode=coach" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded bg-[#102133] px-6 py-3 text-sm font-bold text-white">내 상황에 맞는 코칭 상담<ArrowRight size={16} /></Link>
        </section>
      </div>
    </div>
  );
}
