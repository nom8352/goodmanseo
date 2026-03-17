import React, { useState } from 'react';
import { ArrowRight, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';

const contactItems = [
  {
    icon: <Phone size={22} />,
    label: '직통 문의전화',
    value: '0434-920-114',
  },
  {
    icon: <Mail size={22} />,
    label: '이메일 접수',
    value: 'goodmanseo.sydney@gmail.com',
  },
  {
    icon: <MapPin size={22} />,
    label: '기반 지역',
    value: 'Sydney, Australia',
  },
];

const initialForm = {
  company: '',
  name: '',
  phone: '',
  businessType: '',
  message: '',
  'bot-field': '',
};

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const buildMailtoLink = ({ company, name, phone, businessType, message }) => {
  const subject = `[Goodman SEO] ${company || '새 상담 문의'}`;
  const body = [
    `업체명: ${company || '-'}`,
    `담당자: ${name || '-'}`,
    `연락처: ${phone || '-'}`,
    `업종/지역: ${businessType || '-'}`,
    '',
    '문의 내용:',
    message || '-',
  ].join('\n');

  return `mailto:goodmanseo.sydney@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [notice, setNotice] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setNotice('');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          ...form,
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStatus('success');
      setNotice('상담 신청이 접수되었습니다. 24시간 이내에 확인 후 연락드리겠습니다.');
      setForm(initialForm);
    } catch (error) {
      setStatus('fallback');
      setNotice('자동 접수가 원활하지 않아 이메일 앱으로 이어집니다. 보내기만 완료해 주세요.');
      window.location.href = buildMailtoLink(form);
    }
  };

  return (
    <div className="pt-32 pb-24">
      <div className="container">
        <div className="section-heading max-w-4xl">
          <div className="eyebrow-chip w-fit">
            <Sparkles size={15} />
            Contact Goodman SEO
          </div>
          <h1 className="section-title mt-6 max-w-5xl">
            복잡하게 쓰지 않아도 됩니다.
            <br />
            현재 상황만 알려주세요.
          </h1>
          <p className="section-copy max-w-2xl">
            홈페이지가 필요한지, 구글 지도 노출이 약한지, SNS가 정리되지 않았는지.
            지금 고민만 짧게 남겨주시면 24시간 이내에 연락드릴 수 있도록 준비했습니다.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-6">
            {contactItems.map((item) => (
              <div key={item.label} className="soft-panel">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent-primary">
                  {item.icon}
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">{item.label}</p>
                <p className="mt-3 break-all text-2xl font-black tracking-[-0.04em]">{item.value}</p>
              </div>
            ))}

            <div className="soft-panel">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">Quick note</p>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                자동 접수는 정적 호스팅용 폼 처리에 맞춰 연결했습니다. 배포 환경에서 폼 처리
                지원이 없더라도 이메일 작성 화면으로 바로 이어지도록 대비해 두었습니다.
              </p>
            </div>
          </div>

          <div className="showcase-panel">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">Simple inquiry form</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em]">상담 신청서</h2>
            </div>

            <form className="mt-8 grid gap-5" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" value={form['bot-field']} onChange={handleChange} />

              <div className="grid gap-5 md:grid-cols-2">
                <label className="form-field">
                  <span>업체명</span>
                  <input name="company" type="text" placeholder="예: Goodman Bakery" value={form.company} onChange={handleChange} required />
                </label>
                <label className="form-field">
                  <span>담당자 성함</span>
                  <input name="name" type="text" placeholder="성함을 입력해 주세요" value={form.name} onChange={handleChange} required />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="form-field">
                  <span>연락처</span>
                  <input name="phone" type="tel" placeholder="연락 가능한 번호" value={form.phone} onChange={handleChange} required />
                </label>
                <label className="form-field">
                  <span>업종 또는 지역</span>
                  <input name="businessType" type="text" placeholder="예: 시드니 카페 / 뷰티샵" value={form.businessType} onChange={handleChange} />
                </label>
              </div>

              <label className="form-field">
                <span>현재 가장 고민인 부분</span>
                <textarea name="message" rows="5" placeholder="예: 구글 지도 노출이 약해요, 홈페이지가 오래됐어요, SNS와 사이트가 연결되지 않아요" value={form.message} onChange={handleChange} required />
              </label>

              {notice ? (
                <p className={`rounded-2xl border px-4 py-3 text-sm leading-relaxed ${status === 'success' ? 'border-[rgba(216,255,114,0.35)] bg-[rgba(216,255,114,0.08)] text-white' : 'border-white/10 bg-white/5 text-text-muted'}`}>
                  {notice}
                </p>
              ) : null}

              <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm leading-relaxed text-text-muted">
                  배포 환경에서 폼 처리 기능이 지원되면 바로 접수되고, 그렇지 않으면 이메일
                  앱으로 이어져 문의 내용이 그대로 채워집니다.
                </p>
                <button type="submit" className="primary-button" disabled={status === 'submitting'}>
                  {status === 'submitting' ? '전송 중...' : '상담 신청하기'}
                  <Send size={18} />
                </button>
              </div>
            </form>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {['24시간 내 답변', '소상공인 맞춤 상담', '불필요한 옵션 없이 제안'].map((item) => (
                <div key={item} className="mini-feature">
                  <ArrowRight size={16} className="text-accent-primary" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
