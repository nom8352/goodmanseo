import React, { useState } from 'react';
import { ArrowRight, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react';
import Seo from '../components/Seo';

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

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/goodmanseo.sydney@gmail.com';

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

    if (form['bot-field']) {
      setStatus('success');
      setNotice('상담 신청이 접수되었습니다. 확인 후 연락드리겠습니다.');
      return;
    }

    setStatus('submitting');
    setNotice('');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
        body: encode({
          _subject: `[Goodman SEO] ${form.company || '새 상담 문의'}`,
          _template: 'table',
          _captcha: 'false',
          _honey: form['bot-field'],
          ...form,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || (result && result.success === false)) {
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
      <Seo
        title="상담 신청"
        description="Goodman SEO 상담 신청 페이지입니다. 홈페이지 제작, 구글 비즈니스 프로필 세팅, SNS 연결이 필요한 소상공인을 위한 문의를 받고 있습니다."
        path="/contact"
        keywords={['굿맨SEO 문의', '홈페이지 상담', '구글 비즈니스 프로필 상담', '시드니 소상공인 마케팅']}
      />
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div className="section-heading mb-0 max-w-4xl">
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
            지금 불편한 점만
            <br />
            짧게 남겨주시면 됩니다.
          </p>
        </div>

          <div className="package-matrix">
            {['24시간 내 답변', '소상공인 맞춤 상담', '불필요한 옵션 없이 제안', '이메일 fallback 지원'].map((item) => (
              <div key={item} className="package-stat">
                <span className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">Support</span>
                <strong className="text-[1.6rem]">{item}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
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
                접수가 안 되면
                <br />
                이메일로 바로 이어집니다.
              </p>
            </div>
          </div>

          <div className="showcase-panel">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">Simple inquiry form</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em]">상담 신청서</h2>
            </div>

            <form
              className="mt-8 grid gap-5"
              name="contact"
              method="POST"
              action="https://formsubmit.co/goodmanseo.sydney@gmail.com"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" value={form['bot-field']} onChange={handleChange} />
              <input type="hidden" name="_subject" value={form.company ? `[Goodman SEO] ${form.company}` : '[Goodman SEO] 새 상담 문의'} />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

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
                  안 되면 메일 작성창으로
                  <br />
                  바로 이어집니다.
                </p>
                <button type="submit" className="primary-button" disabled={status === 'submitting'}>
                  {status === 'submitting' ? '전송 중...' : '상담 신청하기'}
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
