import React from 'react';
import { Sparkles } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import Seo from '../components/Seo';

const CONTACT_CONTENT = {
  ko: {
    seoTitle: '무료 점검 / 문의 신청',
    seoDescription: 'GoodmanSEO 문의 신청 페이지입니다. 무료 점검, AI 진단, AI 비즈니스 리포트, 홈페이지 제작, 구글 비즈니스 세팅 문의를 접수할 수 있습니다.',
    seoKeywords: ['무료 점검 신청', 'AI 진단', 'AI 비즈니스 리포트', '홈페이지 제작 문의', '구글 비즈니스 세팅', '문의 폼'],
    badge: '무료 점검 / 문의 신청',
    heading: <>지금 상황에 맞는<br /><span className="text-[#102133] font-black">무료 점검</span> 또는 <span className="text-[#102133] font-black">문의</span>를<br />남겨보세요.</>,
    description: <>필요한 항목을 선택하고 간단한 정보를 남겨주시면,<br />확인 후 최대한 빨리 연락드리겠습니다.</>,
    formTitle: '무료 점검 / 문의 신청',
    footerText: '입력하신 정보는 안전하게 보호되며, 문의 접수 및 상담 목적으로만 사용됩니다.',
  },
  en: {
    seoTitle: 'Free Check & Enquiries',
    seoDescription: 'Contact GoodmanSEO about a free online check, website design, Google Business Profile setup, SEO basics or practical AI support.',
    seoKeywords: ['free website check Australia', 'website design enquiry', 'Google Business Profile help', 'local SEO enquiry', 'GoodmanSEO contact'],
    badge: 'Free Check / Enquiry',
    heading: <>Tell us what your business<br />needs help with <span className="text-[#102133] font-black">online.</span></>,
    description: <>Choose the closest enquiry type and share a few details.<br />We will review your request and respond as soon as possible.</>,
    formTitle: 'Free Check / Enquiry',
    footerText: 'Your information is protected and used only to review and respond to your enquiry.',
  },
};

const Contact = ({ locale = 'ko' }) => {
  const [searchParams] = useSearchParams();
  const initialInquiryType = searchParams.get('type') || 'free-check';
  const content = CONTACT_CONTENT[locale] || CONTACT_CONTENT.ko;

  const ease = [0.16, 1, 0.3, 1];

  return (
    <div className="pt-32 pb-24 bg-gradient-to-tr from-[#f7f2ec] via-white to-[#eee7df] text-[#102133] min-h-screen">
      <Seo
        title={content.seoTitle}
        description={content.seoDescription}
        path={locale === 'en' ? '/en/contact' : '/contact'}
        keywords={content.seoKeywords}
        locale={locale}
        alternates={[{ lang: 'ko', path: '/contact' }, { lang: 'en', path: '/en/contact' }]}
      />
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          
          {/* 좌측 콘텐츠 영역 */}
          <Motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="section-heading mb-0 max-w-4xl text-left"
          >
            <div className="inline-flex items-center gap-1.5 rounded-[0.25rem] bg-[#102133]/5 px-3 py-1 text-[0.8rem] font-bold text-[#102133]">
              <Sparkles size={13} className="animate-spin-slow" />
              <span>{content.badge}</span>
            </div>
            
            <h1 className="section-title mt-6 max-w-5xl tracking-[-0.04em] text-[2.5rem] lg:text-[3.2rem] font-black leading-[1.15] text-[#102133]">
              {content.heading}
            </h1>
            
            <p className="section-copy mt-5 max-w-xl text-[0.98rem] text-[#44515d] font-medium leading-[1.7]">
              {content.description}
            </p>
          </Motion.div>

          {/* 우측 폼 카드 영역 */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="bg-white border border-[#ded8cf] rounded-[0.7rem] p-6 md:p-8 lg:p-10 shadow-md shadow-[#102133]/5 relative z-10 text-left"
          >
            <div className="mb-6 flex justify-between items-center">
              <span className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#102133] bg-[#102133]/5 px-3 py-1 rounded-full">
                STEP 1/2
              </span>
            </div>
            
            <h2 className="text-[1.85rem] font-black tracking-[-0.04em] text-[#102133] mb-6">{content.formTitle}</h2>

            <ContactForm
              initialInquiryType={initialInquiryType}
              footerText={content.footerText}
              locale={locale}
            />
          </Motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
