import React from 'react';
import { Sparkles } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import Seo from '../components/Seo';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const initialInquiryType = searchParams.get('type') || 'free-check';

  return (
    <div className="pt-32 pb-24">
      <Seo
        title="진단 / 문의 신청"
        description="GoodmanSEO 진단 및 문의 신청 페이지입니다. 무료 점검, 퀵 진단, 온라인 올인원 진단, 일반 문의를 접수할 수 있습니다."
        path="/contact"
        keywords={['무료 점검 신청', '퀵 진단', '온라인 올인원 진단', '일반 문의', '온라인 점검', '문의 폼']}
      />
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="section-heading mb-0 max-w-4xl">
            <div className="eyebrow-chip w-fit">
              <Sparkles size={15} />
              진단 / 문의 신청
            </div>
            <h1 className="section-title mt-6 max-w-5xl">
              지금 상황에 맞는
              <br />
              진단 또는 문의를
              <br />
              남겨보세요.
            </h1>
            <p className="section-copy max-w-2xl">
              무료 점검, 퀵 진단, 온라인 올인원 진단, 일반 문의 중
              <br />
              필요한 유형을 선택해 접수할 수 있습니다.
              <br />
              작성해주신 내용을 바탕으로 확인 후 연락드리겠습니다.
            </p>
          </div>

          <div className="showcase-panel">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">진단 / 문의 폼</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em]">진단 / 문의 신청</h2>
            </div>

            <ContactForm
              initialInquiryType={initialInquiryType}
              footerText="작성해주신 내용을 바탕으로 해당 진단 또는 문의 방향을 확인한 뒤 연락드리겠습니다."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
