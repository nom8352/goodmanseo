import React from 'react';
import { Sparkles } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import Seo from '../components/Seo';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const initialInquiryType = searchParams.get('type') || 'free-check';

  const ease = [0.16, 1, 0.3, 1];

  return (
    <div className="pt-32 pb-24 bg-gradient-to-tr from-[#f2fafb] via-white to-[#ecf6f8] text-[#0f2230] min-h-screen">
      <Seo
        title="진단 / 문의 신청"
        description="GoodmanSEO 문의 신청 페이지입니다. 무료 점검, 퀵 진단, 홈페이지 제작, 구글 비즈니스 세팅 문의를 접수할 수 있습니다."
        path="/contact"
        keywords={['무료 점검 신청', '퀵 진단', '홈페이지 제작 문의', '구글 비즈니스 세팅', '문의 폼']}
      />
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          
          {/* 좌측 콘텐츠 영역 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="section-heading mb-0 max-w-4xl text-left"
          >
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#007a8c]/5 px-3 py-1 text-[0.8rem] font-bold text-[#007a8c]">
              <Sparkles size={13} className="animate-spin-slow" />
              <span>진단 / 문의 신청</span>
            </div>
            
            <h1 className="section-title mt-6 max-w-5xl tracking-[-0.04em] text-[2.5rem] lg:text-[3.2rem] font-black leading-[1.15] text-[#0f2230]">
              지금 상황에 맞는
              <br />
              <span className="text-[#007a8c] font-black">진단</span> 또는 <span className="text-[#007a8c] font-black">문의</span>를
              <br />
              남겨보세요.
            </h1>
            
            <p className="section-copy mt-5 max-w-xl text-[0.98rem] text-[#556877] font-medium leading-[1.7]">
              필요한 항목을 선택하고 간단한 정보를 남겨주시면,
              <br />
              확인 후 영업일 기준 24시간 이내에 연락드리겠습니다.
            </p>
          </motion.div>

          {/* 우측 폼 카드 영역 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="bg-white border border-[#e2e8f0] rounded-3xl p-6 md:p-8 lg:p-10 shadow-md shadow-[#007a8c]/5 relative z-10 text-left"
          >
            <div className="mb-6 flex justify-between items-center">
              <span className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#007a8c] bg-[#007a8c]/5 px-3 py-1 rounded-full">
                STEP 1/2
              </span>
            </div>
            
            <h2 className="text-[1.85rem] font-black tracking-[-0.04em] text-[#0f2230] mb-6">진단 / 문의 신청</h2>

            <ContactForm
              initialInquiryType={initialInquiryType}
              footerText="입력하신 정보는 안전하게 보호되며, 진단 및 상담 목적으로만 사용됩니다."
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
