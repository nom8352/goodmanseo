import React from 'react';
import { Sparkles } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Seo from '../components/Seo';

const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <Seo
        title="무료 점검 신청"
        description="GoodmanSEO 무료 점검 신청 페이지입니다. 구글, 홈페이지, 인스타그램, 페이스북 상태를 함께 보고 부족한 부분을 점검해드립니다. 일반 문의도 함께 가능합니다."
        path="/contact"
        keywords={['무료 점검 신청', '일반 문의', '온라인 점검', '구글 비즈니스 프로필 점검', '홈페이지 점검', '인스타그램 점검', '페이스북 점검']}
      />
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="section-heading mb-0 max-w-4xl">
            <div className="eyebrow-chip w-fit">
              <Sparkles size={15} />
              무료 점검 신청
            </div>
            <h1 className="section-title mt-6 max-w-5xl">
              지금 온라인에서
              <br />
              어떻게 보이는지
              <br />
              함께 확인해보세요.
            </h1>
            <p className="section-copy max-w-2xl">
              구글, 홈페이지, 인스타그램, 페이스북 상태를 함께 보고
              <br />
              부족한 부분이 어디인지 먼저 점검해드립니다.
              <br />
              무료 점검이 아니라면 일반 문의로도 접수하실 수 있습니다.
            </p>
          </div>

          <div className="showcase-panel">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">무료 점검 / 일반 문의 폼</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em]">무료 점검 신청</h2>
            </div>

            <ContactForm footerText="작성해주신 내용을 바탕으로 무료 점검 또는 일반 문의 방향을 확인한 뒤 연락드리겠습니다." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;