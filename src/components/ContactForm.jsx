import React, { useState } from 'react';
import { Send } from 'lucide-react';

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

const ContactForm = ({ className = 'mt-8', formName = 'contact', footerText = '메일로도 바로 이어집니다.' }) => {
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
      setNotice('문의가 접수되었습니다. 확인 후 연락드리겠습니다.');
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
      setNotice('문의가 접수되었습니다. 확인 후 연락드리겠습니다.');
      setForm(initialForm);
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

      <label className="form-field">
        <span>현재 가장 고민인 점</span>
        <textarea name="message" rows="5" placeholder="예: 구글 노출이 약해요, 홈페이지가 오래됐어요" value={form.message} onChange={handleChange} required />
      </label>

      {notice ? (
        <p className={`rounded-2xl border px-4 py-3 text-sm leading-relaxed ${status === 'success' ? 'border-[rgba(216,255,114,0.35)] bg-[rgba(216,255,114,0.08)] text-white' : 'border-white/10 bg-white/5 text-text-muted'}`}>
          {notice}
        </p>
      ) : null}

      <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-relaxed text-text-muted">{footerText}</p>
        <button type="submit" className="primary-button" disabled={status === 'submitting'}>
          {status === 'submitting' ? '전송 중...' : '상담 보내기'}
          <Send size={18} />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
