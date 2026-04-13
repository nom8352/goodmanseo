import React, { useEffect, useMemo, useState } from 'react';
import { Send } from 'lucide-react';

const INQUIRY_TYPES = [
  {
    value: 'free-check',
    label: '무료 점검',
    heading: '무료 점검 신청',
    helper: '현재 온라인 상태를 먼저 확인해드립니다.',
    messageLabel: '현재 가장 고민인 점',
    messagePlaceholder: '예: 구글 노출이 약해요, 홈페이지가 오래됐어요',
    submitLabel: '무료 점검 신청하기',
  },
  {
    value: 'quick-diagnosis',
    label: '퀵 진단',
    heading: '퀵 진단 문의',
    helper: '퀵 진단 진행 가능 여부와 준비사항을 안내드립니다.',
    messageLabel: '현재 가장 고민인 점',
    messagePlaceholder: '예: 홈페이지와 구글 프로필 중 무엇부터 손봐야 할지 알고 싶어요',
    submitLabel: '퀵 진단 문의하기',
  },
  {
    value: 'all-in-one-diagnosis',
    label: '온라인 올인원 진단',
    heading: '온라인 올인원 진단 문의',
    helper: '채널 전체를 함께 보는 진단 진행 방향을 안내드립니다.',
    messageLabel: '현재 가장 고민인 점',
    messagePlaceholder: '예: 구글, 홈페이지, 인스타그램, 페이스북을 전체적으로 진단받고 싶어요',
    submitLabel: '올인원 진단 문의하기',
  },
  {
    value: 'general-inquiry',
    label: '일반 문의',
    heading: '일반 문의',
    helper: '일반 문의로 접수됩니다.',
    messageLabel: '문의 내용',
    messagePlaceholder: '문의하실 내용을 적어주세요',
    submitLabel: '일반 문의 보내기',
  },
];

const getInquiryMeta = (type) => INQUIRY_TYPES.find((item) => item.value === type) || INQUIRY_TYPES[0];

const initialForm = {
  inquiryType: 'free-check',
  company: '',
  name: '',
  phone: '',
  businessType: '',
  websiteUrl: '',
  googleBusinessUrl: '',
  instagramUrl: '',
  facebookUrl: '',
  message: '',
  'bot-field': '',
};

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/goodmanseo.sydney@gmail.com';

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const buildMailtoLink = ({ company, name, phone, businessType, websiteUrl, googleBusinessUrl, instagramUrl, facebookUrl, message, inquiryType }) => {
  const inquiryMeta = getInquiryMeta(inquiryType);
  const subject = `[Goodman SEO] ${inquiryMeta.label}${company ? ` - ${company}` : ''}`;
  const body = [
    `문의 유형: ${inquiryMeta.label}`,
    `업체명: ${company || '-'}`,
    `담당자: ${name || '-'}`,
    `연락처: ${phone || '-'}`,
    `업종/지역: ${businessType || '-'}`,
    `홈페이지: ${websiteUrl || '-'}`,
    `Google Business Profile: ${googleBusinessUrl || '-'}`,
    `Instagram: ${instagramUrl || '-'}`,
    `Facebook: ${facebookUrl || '-'}`,
    '',
    `${inquiryMeta.messageLabel}:`,
    message || '-',
  ].join('\n');

  return `mailto:goodmanseo.sydney@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const ContactForm = ({
  className = 'mt-8',
  formName = 'contact',
  footerText = '메일로도 바로 이어집니다.',
  initialInquiryType = 'free-check',
}) => {
  const [form, setForm] = useState({
    ...initialForm,
    inquiryType: getInquiryMeta(initialInquiryType).value,
  });
  const [status, setStatus] = useState('idle');
  const [notice, setNotice] = useState('');

  useEffect(() => {
    const normalizedType = getInquiryMeta(initialInquiryType).value;
    setForm((current) => ({
      ...current,
      inquiryType: normalizedType,
    }));
  }, [initialInquiryType]);

  const inquiryMeta = useMemo(() => getInquiryMeta(form.inquiryType), [form.inquiryType]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (form['bot-field']) {
      setStatus('success');
      setNotice(`${inquiryMeta.label}이 접수되었습니다. 확인 후 연락드리겠습니다.`);
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
          _subject: `[Goodman SEO] ${inquiryMeta.label}${form.company ? ` - ${form.company}` : ''}`,
          _template: 'table',
          _captcha: 'false',
          _honey: form['bot-field'],
          inquiryType: inquiryMeta.label,
          ...form,
        }),
      });

      const result = await response.json().catch(() => null);

      if (!response.ok || (result && result.success === false)) {
        throw new Error('Submission failed');
      }

      setStatus('success');
      setNotice(`${inquiryMeta.label}이 접수되었습니다. 확인 후 연락드리겠습니다.`);
      setForm((current) => ({
        ...initialForm,
        inquiryType: current.inquiryType,
      }));
    } catch (error) {
      setStatus('fallback');
      setNotice('자동 접수가 안 되어 이메일로 이어집니다.');
      window.location.href = buildMailtoLink(form);
    }
  };

  return (
    <form
      className={`${className} grid gap-5`}
      name={formName}
      method="POST"
      action="https://formsubmit.co/goodmanseo.sydney@gmail.com"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="bot-field" value={form['bot-field']} readOnly />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value={`[Goodman SEO] ${inquiryMeta.label}${form.company ? ` - ${form.company}` : ''}`} />

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-relaxed text-text-muted">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-text-soft">문의 유형</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {INQUIRY_TYPES.map((item) => (
            <label
              key={item.value}
              className={`cursor-pointer rounded-2xl border px-4 py-4 transition ${form.inquiryType === item.value ? 'border-[rgba(216,255,114,0.35)] bg-[rgba(216,255,114,0.08)] text-white' : 'border-white/10 bg-white/[0.02] text-text-muted hover:border-white/20 hover:bg-white/[0.04]'}`}
            >
              <input
                type="radio"
                name="inquiryType"
                value={item.value}
                checked={form.inquiryType === item.value}
                onChange={handleChange}
                className="sr-only"
              />
              <span className="block text-base font-semibold text-white">{item.label}</span>
              <span className="mt-2 block text-sm leading-relaxed text-text-muted">{item.helper}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="form-field">
          <span>업체명</span>
          <input name="company" type="text" placeholder="예: Goodman Bakery" value={form.company} onChange={handleChange} required />
        </label>
        <label className="form-field">
          <span>담당자 이름</span>
          <input name="name" type="text" placeholder="이름을 입력해 주세요" value={form.name} onChange={handleChange} required />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="form-field">
          <span>연락처</span>
          <input name="phone" type="tel" placeholder="연락 가능한 번호" value={form.phone} onChange={handleChange} required />
        </label>
        <label className="form-field">
          <span>업종 / 지역</span>
          <input name="businessType" type="text" placeholder="예: 시드니 카페, 뷰티샵" value={form.businessType} onChange={handleChange} />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="form-field">
          <span>홈페이지 주소</span>
          <input name="websiteUrl" type="url" placeholder="https://..." value={form.websiteUrl} onChange={handleChange} />
        </label>
        <label className="form-field">
          <span>Google Business Profile 링크</span>
          <input name="googleBusinessUrl" type="url" placeholder="https://..." value={form.googleBusinessUrl} onChange={handleChange} />
        </label>
        <label className="form-field">
          <span>Instagram 링크</span>
          <input name="instagramUrl" type="url" placeholder="https://instagram.com/..." value={form.instagramUrl} onChange={handleChange} />
        </label>
        <label className="form-field">
          <span>Facebook 링크</span>
          <input name="facebookUrl" type="url" placeholder="https://facebook.com/..." value={form.facebookUrl} onChange={handleChange} />
        </label>
      </div>

      <label className="form-field">
        <span>{inquiryMeta.messageLabel}</span>
        <textarea
          name="message"
          rows="5"
          placeholder={inquiryMeta.messagePlaceholder}
          value={form.message}
          onChange={handleChange}
          required
        />
      </label>

      {notice ? (
        <p className={`rounded-2xl border px-4 py-3 text-sm leading-relaxed ${status === 'success' ? 'border-[rgba(216,255,114,0.35)] bg-[rgba(216,255,114,0.08)] text-white' : 'border-white/10 bg-white/5 text-text-muted'}`}>
          {notice}
        </p>
      ) : null}

      <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-relaxed text-text-muted">{footerText}</p>
        <button type="submit" className="primary-button" disabled={status === 'submitting'}>
          {status === 'submitting' ? '전송 중...' : inquiryMeta.submitLabel}
          <Send size={18} />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
