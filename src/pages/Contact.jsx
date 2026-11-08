import React from 'react';
import { Sparkles } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import Seo from '../components/Seo';

const CONTACT_CONTENT = {
  ko: {
    seoTitle: '무료 순위 점검 신청',
    seoDescription: '키워드 3개로 현재 구글 순위, 미노출 원인, 1순위 개선 항목을 영업일 2~3일 내 이메일로 전달. 브리즈번 로컬 비즈니스 무료 순위 점검.',
    seoKeywords: ['무료 순위 점검', '구글 순위 확인', '구글 상위 노출 상담', '브리즈번 SEO 상담', '구글 비즈니스 프로필 상담'],
    badge: '무료 순위 점검 · 문의',
    heading: <>내 업체 <span className="font-black text-[#102133]">구글 순위</span>,<br />무료 점검</>,
    description: (
      <>
        키워드 3개만 보내주세요. 모르시면 업종과 지역만 알려주셔도 됩니다.
        <br />
        영업일 2~3일 내 현재 순위, 미노출 원인, 1순위 개선 항목을 이메일로 전달합니다.
        <br />
        신청 후 의무 없음.
      </>
    ),
    formTitle: '무료 순위 점검 · 문의',
    footerText: '입력 정보는 점검 · 회신 용도로만 사용합니다.',
  },
  en: {
    seoTitle: 'Free Ranking Check',
    seoDescription: 'Send three searches your customers would type and get current rankings, one reason you are not showing, and one thing to fix first within 2–3 days.',
    seoKeywords: ['free Google ranking check', 'local SEO Brisbane enquiry', 'Google Business Profile help', 'GoodmanSEO contact'],
    badge: 'Free Ranking Check · Enquiry',
    heading: <>Where does your business<br />rank on <span className="font-black text-[#102133]">Google</span> right now?</>,
    description: (
      <>
        Send three searches your customers would type.
        <br />
        You get current rankings, one reason you are not showing, and one thing to fix first within 2–3 days.
      </>
    ),
    formTitle: 'Free Ranking Check · Enquiry',
    footerText: 'Your details are used only to run the check and reply to you.',
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
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          
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
            <div className="mb-6 flex items-center justify-between">
              <span className="rounded-full bg-[#102133]/5 px-3 py-1 text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#102133]">
                {locale === 'en' ? '2–3 business days · by email' : '영업일 2~3일 · 이메일 회신'}
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
