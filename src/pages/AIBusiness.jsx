import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CircleCheckBig, Sparkles } from 'lucide-react';
import Seo from '../components/Seo';

const learnItems = [
  '홈페이지 문구와 안내 문구 직접 수정하기',
  '블로그, 서비스 소개글, 공지 글 초안 만들기',
  '구글 비즈니스 프로필 게시물과 소개 문구 정리하기',
  '리뷰 답변과 고객 응대 초안 만들기',
  '인스타그램과 페이스북 콘텐츠 초안 만들기',
  '상품 설명, 카테고리 정리, 쇼핑몰 운영 보조하기',
  '내 비즈니스에 맞는 프롬프트와 운영 템플릿 정리하기',
];

const outcomes = [
  '외주 없이도 자주 손봐야 하는 내용을 직접 수정할 수 있게 됩니다.',
  '홈페이지, 구글, SNS를 더 빠르게 관리할 수 있게 됩니다.',
  '쇼핑몰 관리나 상품 업데이트 같은 반복 업무도 더 수월해집니다.',
  'AI를 그냥 써보는 수준이 아니라 내 온라인 운영 실무에 바로 붙일 수 있게 됩니다.',
];

const fitFor = [
  '직접 운영하고 싶은 사장님',
  '외주에만 의존하지 않고 직접 관리하고 싶은 분',
  '홈페이지와 온라인 채널을 더 자주 손보고 싶은 분',
  '쇼핑몰이나 상품 운영까지 직접 관리하고 싶은 분',
  'AI를 실제 온라인 운영에 붙여보고 싶은 분',
];

const AIBusiness = () => {
  return (
    <div className="pt-32 pb-24">
      <Seo
        title="AI 온라인 운영 전수"
        description="AI를 활용해 홈페이지, 구글 비즈니스 프로필, SNS, 쇼핑몰 관리까지 실제 운영에 맞게 적용할 수 있도록 전수해드립니다."
        path="/ai-business"
        keywords={['AI 온라인 운영 전수', 'AI 실무 운영 전수', 'AI 홈페이지 운영', 'AI 구글 비즈니스 프로필', 'AI SNS 운영', 'AI 쇼핑몰 관리']}
      />
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="section-heading mb-0 max-w-4xl">
            <div className="eyebrow-chip w-fit">
              <Sparkles size={14} />
              AI 온라인 운영 전수
            </div>
            <h1 className="section-title mt-6 max-w-5xl">
              AI를 온라인 운영 실무에 붙이는 법,
              <br />
              직접 전수해드립니다.
            </h1>
            <p className="section-copy max-w-2xl">
              강의처럼 듣고 끝나는 설명이 아니라,
              <br />
              홈페이지 수정, 콘텐츠 작성, 구글 비즈니스 프로필 관리, SNS 운영,
              <br />
              쇼핑몰 관리까지 실제 운영에 바로 써볼 수 있게 온라인으로 전수해드립니다.
            </p>
          </div>

          <div className="pricing-spotlight">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">AI 온라인 운영 전수</p>
            <h2 className="mt-4 text-5xl font-black tracking-[-0.06em]">AUD 2,500</h2>
            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-accent-primary">Online 진행</p>
            <p className="mt-6 text-base leading-relaxed text-text-muted">
              AI를 활용해 직접 운영하고 싶은 분을 위한
              <br />
              실무 적용형 전수 프로그램입니다.
            </p>
            <Link to="/contact" className="primary-button mt-8 inline-flex">
              문의하기
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="showcase-panel">
            <h2 className="text-3xl font-black tracking-[-0.05em]">전수 내용</h2>
            <div className="mt-6 grid gap-3">
              {learnItems.map((item) => (
                <div key={item} className="benefit-row">
                  <CircleCheckBig size={16} className="text-accent-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="showcase-panel">
            <h2 className="text-3xl font-black tracking-[-0.05em]">추천 대상</h2>
            <div className="mt-6 grid gap-3">
              {fitFor.map((item) => (
                <div key={item} className="benefit-row">
                  <CircleCheckBig size={16} className="text-accent-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="showcase-panel">
            <h2 className="text-3xl font-black tracking-[-0.05em]">왜 필요한가</h2>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              홈페이지와 채널을 만들어도, 실제 운영에서는 문구 수정, 게시물 작성, 프로필 정리,
              <br />
              상품 업데이트처럼 자주 손봐야 하는 일이 계속 생깁니다.
            </p>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              이런 일을 매번 외주에만 맡기면 속도도 느리고 비용도 계속 쌓일 수 있습니다.
              <br />
              이 전수는 그런 작업을 AI로 직접 처리할 수 있게 만들어,
              <br />
              내 온라인 운영을 더 빠르고 유연하게 가져가도록 돕는 데 목적이 있습니다.
            </p>
          </div>

          <div className="showcase-panel">
            <h2 className="text-3xl font-black tracking-[-0.05em]">기대 효과</h2>
            <div className="mt-6 grid gap-3">
              {outcomes.map((item) => (
                <div key={item} className="benefit-row">
                  <CircleCheckBig size={16} className="text-accent-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link to="/contact" className="primary-button mt-8 inline-flex">
              AI 전수 문의하기
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBusiness;
