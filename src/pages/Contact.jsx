import React from 'react';
import { Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import Seo from '../components/Seo';

const contactItems = [
  {
    icon: <Phone size={18} />,
    label: '전화',
    value: '0434-920-114',
  },
  {
    icon: <Mail size={18} />,
    label: '이메일',
    value: 'goodmanseo.sydney@gmail.com',
  },
  {
    icon: <MapPin size={18} />,
    label: '지역',
    value: 'Sydney, Australia',
  },
];

const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <Seo
        title="상담 문의"
        description="Goodman SEO 상담 문의 페이지입니다. 홈페이지 제작, 구글 지도/검색 등록, SNS 세팅 문의를 받습니다."
        path="/contact"
        keywords={['호주 홈페이지 상담', '시드니 홈페이지 상담', '호주 구글 지도 등록 상담', '비즈니스 홈페이지 문의']}
      />
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="section-heading mb-0 max-w-4xl">
            <div className="eyebrow-chip w-fit">
              <Sparkles size={15} />
              상담 문의
            </div>
            <h1 className="section-title mt-6 max-w-5xl">
              10분이면
              <br />
              방향이 보입니다.
            </h1>
            <p className="section-copy max-w-2xl">
              현재 상황만 간단히 적어주세요.
              <br />
              길게 쓰지 않으셔도 됩니다.
            </p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-muted">
              {contactItems.map((item) => (
                <span key={item.label} className="inline-flex items-center gap-2">
                  <span className="text-accent-primary">{item.icon}</span>
                  <span className="font-semibold text-text-soft">{item.label}</span>
                  <span>{item.value}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="showcase-panel">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">문의 폼</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em]">상담 신청</h2>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
