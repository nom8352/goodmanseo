import React, { useEffect, useMemo, useState } from 'react';
import { Send, Search, TrendingUp, RefreshCw, Monitor, MessageSquare, Lock } from 'lucide-react';
import { CONTACT_EMAIL } from '../data/contact';

const INQUIRY_TYPES = {
  ko: [
    {
      value: 'free-check',
      label: '무료 순위 점검',
      heading: '무료 순위 점검 신청',
      helper: '키워드 3개 현재 순위 + 1순위 개선 항목 (무료)',
      icon: Search,
      messageLabel: '현재 상황',
      messagePlaceholder: '예: 상호 검색은 되는데 업종 검색은 안 됨',
      submitLabel: '무료 순위 점검 신청',
      showKeywords: true,
      keywordsRequired: true,
    },
    {
      value: 'ranking-program',
      label: '구글 상위 노출 3개월 프로그램',
      heading: '3개월 프로그램 상담',
      helper: '키워드 선정 → 프로필 최적화 → 리뷰 관리 → 온페이지 SEO → 월간 리포트 (3개월)',
      icon: TrendingUp,
      messageLabel: '업체 · 목표',
      messagePlaceholder: '예: 노스레이크 속눈썹샵, 영어권 고객 예약 확대',
      submitLabel: '프로그램 상담 신청',
      showKeywords: true,
      keywordsRequired: false,
    },
    {
      value: 'monthly-care',
      label: '월 유지 관리',
      heading: '월 유지 관리 문의',
      helper: '프로필 업데이트 · 리뷰 답글 · 홈페이지 수정 · 호스팅 월 관리',
      icon: RefreshCw,
      messageLabel: '필요한 관리 항목',
      messagePlaceholder: '예: 프로필 사진 교체, 리뷰 답글, 월 1회 홈페이지 수정',
      submitLabel: '유지 관리 문의',
      showKeywords: false,
      keywordsRequired: false,
    },
    {
      value: 'website',
      label: '홈페이지 제작 (필요 시)',
      heading: '홈페이지 제작 문의',
      helper: '서비스별 페이지 포함 3~5페이지 홈페이지 신규 제작',
      icon: Monitor,
      messageLabel: '필요 페이지 · 현재 상황',
      messagePlaceholder: '예: 업종, 필요한 페이지, 기존 홈페이지 유무',
      submitLabel: '홈페이지 제작 문의',
      showKeywords: false,
      keywordsRequired: false,
    },
    {
      value: 'general-inquiry',
      label: '일반 문의',
      heading: '일반 문의',
      helper: '기타 문의 · 제안',
      icon: MessageSquare,
      messageLabel: '문의 내용',
      messagePlaceholder: '문의 내용을 남겨주세요.',
      submitLabel: '문의 보내기',
      showKeywords: false,
      keywordsRequired: false,
    },
  ],
  en: [
    {
      value: 'free-check',
      label: 'Free Ranking Check',
      heading: 'Request a Free Ranking Check',
      helper: 'Send three searches your customers would type and get current rankings plus one thing to fix first.',
      icon: Search,
      messageLabel: 'What is the main frustration right now?',
      messagePlaceholder: 'For example: we show up for our business name but not for our service.',
      submitLabel: 'Request Free Check',
      showKeywords: true,
      keywordsRequired: true,
    },
    {
      value: 'ranking-program',
      label: '3-Month Google Ranking Program',
      heading: '3-Month Program Enquiry',
      helper: 'Keyword selection, profile, review flow, website alignment and monthly reports over three months.',
      icon: TrendingUp,
      messageLabel: 'Your business and goal in a few lines',
      messagePlaceholder: 'For example: a lash studio in North Lakes that wants more bookings from search.',
      submitLabel: 'Enquire About the Program',
      showKeywords: true,
      keywordsRequired: false,
    },
    {
      value: 'monthly-care',
      label: 'Monthly Care',
      heading: 'Monthly Care Enquiry',
      helper: 'Keep the rankings you have earned with monthly profile updates, review replies, small edits and hosting.',
      icon: RefreshCw,
      messageLabel: 'What support do you need?',
      messagePlaceholder: 'For example: profile photos, review replies, one website edit per month.',
      submitLabel: 'Ask About Monthly Care',
      showKeywords: false,
      keywordsRequired: false,
    },
    {
      value: 'website',
      label: 'Website (if needed)',
      heading: 'Website Enquiry',
      helper: 'I need a new 3–5 page website with separate service pages.',
      icon: Monitor,
      messageLabel: 'Pages you need and current situation',
      messagePlaceholder: 'For example: industry, pages required, whether you have a website now.',
      submitLabel: 'Enquire About a Website',
      showKeywords: false,
      keywordsRequired: false,
    },
    {
      value: 'general-inquiry',
      label: 'General Enquiry',
      heading: 'General Enquiry',
      helper: 'Another question or a proposal.',
      icon: MessageSquare,
      messageLabel: 'Your enquiry',
      messagePlaceholder: 'Tell us what you would like to discuss.',
      submitLabel: 'Send Enquiry',
      showKeywords: false,
      keywordsRequired: false,
    },
  ],
};

// 이전 링크(?type=starter-homepage 등)가 아직 돌아다닐 수 있어서 새 유형으로 연결합니다.
const LEGACY_TYPE_MAP = {
  'quick-diagnosis': 'free-check',
  'ai-report-standard': 'free-check',
  'ai-mentoring': 'general-inquiry',
  'ai-study-group': 'general-inquiry',
  'ai-workshop': 'general-inquiry',
  'starter-homepage': 'website',
  'business-homepage': 'website',
  'growth-homepage': 'website',
  'seo-start-package': 'ranking-program',
  'gbp-setup': 'ranking-program',
  'site-care-basic': 'monthly-care',
  'site-care-plus': 'monthly-care',
  'online-support': 'monthly-care',
};

const FORM_COPY = {
  ko: {
    typeHeading: '문의 유형',
    company: '업체명',
    companyPlaceholder: '예: Sweet Lash Studio',
    name: '성함',
    namePlaceholder: '이름을 입력해 주세요',
    phone: '연락처',
    phonePlaceholder: '연락 가능한 번호',
    businessType: '업종 / 지역',
    businessTypePlaceholder: '예: 속눈썹샵 / North Lakes',
    website: '홈페이지 URL (없으면 공란)',
    google: '구글 비즈니스 프로필 URL (선택)',
    keywords: '타깃 키워드 3개 (손님이 검색할 말)',
    keywordsPlaceholder: '예: lash extensions north lakes / eyelash extension brisbane north / 속눈썹 브리즈번',
    keywordsHelper: '정확하지 않아도 됩니다. 손님이 구글에 입력할 법한 표현이면 충분합니다.',
    submitting: '전송 중...',
    success: (label) => `${label} 접수 완료. 2~3일 내 이메일로 회신드립니다.`,
    fallback: '자동 접수가 안 되어 이메일로 이어집니다.',
    mailLabels: ['문의 유형', '업체명', '성함', '연락처', '업종/지역', '홈페이지', '구글 비즈니스 프로필', '타깃 키워드'],
  },
  en: {
    typeHeading: 'Enquiry Type',
    company: 'Business Name',
    companyPlaceholder: 'For example: Sweet Lash Studio',
    name: 'Your Name',
    namePlaceholder: 'Enter your name',
    phone: 'Phone Number',
    phonePlaceholder: 'Best number to reach you',
    businessType: 'Industry / Suburb',
    businessTypePlaceholder: 'For example: Lash studio / North Lakes',
    website: 'Website URL (leave blank if none)',
    google: 'Google Business Profile URL (if any)',
    keywords: 'Three searches your customers would type',
    keywordsPlaceholder: 'For example: lash extensions north lakes / eyelash extensions brisbane north',
    keywordsHelper: 'They do not need to be exact. Write what customers would type into Google.',
    submitting: 'Sending...',
    success: (label) => `Your ${label.toLowerCase()} request has been received. We will reply by email within 2–3 days.`,
    fallback: 'The form could not be submitted automatically. Opening your email app instead.',
    mailLabels: ['Enquiry type', 'Business name', 'Name', 'Phone', 'Industry / suburb', 'Website', 'Google Business Profile', 'Searches'],
  },
};

const getInquiryMeta = (type, locale = 'ko') => {
  const types = INQUIRY_TYPES[locale] || INQUIRY_TYPES.ko;
  const normalized = LEGACY_TYPE_MAP[type] || type;
  return types.find((item) => item.value === normalized) || types[0];
};

const initialForm = {
  inquiryType: 'free-check',
  company: '',
  name: '',
  phone: '',
  businessType: '',
  websiteUrl: '',
  googleBusinessUrl: '',
  keywords: '',
  message: '',
  'bot-field': '',
};

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const buildMailtoLink = (
  { company, name, phone, businessType, websiteUrl, googleBusinessUrl, keywords, message, inquiryType },
  locale = 'ko',
) => {
  const inquiryMeta = getInquiryMeta(inquiryType, locale);
  const copy = FORM_COPY[locale] || FORM_COPY.ko;
  const subject = `[Goodman SEO] ${inquiryMeta.label}${company ? ` - ${company}` : ''}`;
  const body = [
    `${copy.mailLabels[0]}: ${inquiryMeta.label}`,
    `${copy.mailLabels[1]}: ${company || '-'}`,
    `${copy.mailLabels[2]}: ${name || '-'}`,
    `${copy.mailLabels[3]}: ${phone || '-'}`,
    `${copy.mailLabels[4]}: ${businessType || '-'}`,
    `${copy.mailLabels[5]}: ${websiteUrl || '-'}`,
    `${copy.mailLabels[6]}: ${googleBusinessUrl || '-'}`,
    `${copy.mailLabels[7]}: ${keywords || '-'}`,
    '',
    `${inquiryMeta.messageLabel}:`,
    message || '-',
  ].join('\n');

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const ContactForm = ({
  className = 'mt-8',
  formName = 'contact',
  footerText = '메일로도 바로 이어집니다.',
  initialInquiryType = 'free-check',
  locale = 'ko',
}) => {
  const copy = FORM_COPY[locale] || FORM_COPY.ko;
  const inquiryTypes = INQUIRY_TYPES[locale] || INQUIRY_TYPES.ko;
  const [form, setForm] = useState({
    ...initialForm,
    inquiryType: getInquiryMeta(initialInquiryType, locale).value,
  });
  const [status, setStatus] = useState('idle');
  const [notice, setNotice] = useState('');

  useEffect(() => {
    const normalizedType = getInquiryMeta(initialInquiryType, locale).value;
    setForm((current) => ({
      ...current,
      inquiryType: normalizedType,
    }));
  }, [initialInquiryType, locale]);

  const inquiryMeta = useMemo(() => getInquiryMeta(form.inquiryType, locale), [form.inquiryType, locale]);

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
      setNotice(copy.success(inquiryMeta.label));
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
      setNotice(copy.success(inquiryMeta.label));
      setForm((current) => ({
        ...initialForm,
        inquiryType: current.inquiryType,
      }));
    } catch {
      setStatus('fallback');
      setNotice(copy.fallback);
      window.location.href = buildMailtoLink(form, locale);
    }
  };

  return (
    <form
      className={`${className} grid gap-5`}
      name={formName}
      method="POST"
      action={`https://formsubmit.co/${CONTACT_EMAIL}`}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={formName} />
      <input type="hidden" name="bot-field" value={form['bot-field']} readOnly />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value={`[Goodman SEO] ${inquiryMeta.label}${form.company ? ` - ${form.company}` : ''}`} />

      <div className="rounded-[0.7rem] border border-[var(--glass-border)] bg-[var(--bg-darker)] px-4 py-4 text-sm leading-relaxed text-text-muted">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#44515d]">{copy.typeHeading}</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {inquiryTypes.map((item) => {
            const IconComponent = item.icon;
            const isSelected = form.inquiryType === item.value;
            return (
              <label
                key={item.value}
                className={`flex cursor-pointer gap-4 rounded-[0.7rem] border px-4 py-4 transition-[border-color,background-color,box-shadow,transform] duration-300 ${
                  isSelected
                    ? 'border-[#102133] bg-white text-[#102133] shadow-md shadow-[#102133]/5 -translate-y-0.5'
                    : 'border-[#ded8cf] bg-white text-[#44515d] hover:border-[#102133]/40 hover:bg-[#102133]/5'
                }`}
              >
                <input
                  type="radio"
                  name="inquiryType"
                  value={item.value}
                  checked={isSelected}
                  onChange={handleChange}
                  className="sr-only"
                />

                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-[background-color,color] duration-300 ${
                    isSelected ? 'bg-[#102133]/10 text-[#102133]' : 'bg-[#f7f2ec] text-[#8b7f70]'
                  }`}
                >
                  <IconComponent size={20} />
                </div>

                <div className="flex flex-col text-left">
                  <span className="text-[0.95rem] font-bold text-[#102133]">{item.label}</span>
                  <span className="mt-1 text-[0.78rem] font-medium leading-relaxed text-[#44515d]">{item.helper}</span>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="form-field">
          <span>{copy.company}</span>
          <input name="company" type="text" placeholder={copy.companyPlaceholder} value={form.company} onChange={handleChange} required />
        </label>
        <label className="form-field">
          <span>{copy.name}</span>
          <input name="name" type="text" placeholder={copy.namePlaceholder} value={form.name} onChange={handleChange} required />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="form-field">
          <span>{copy.phone}</span>
          <input name="phone" type="tel" placeholder={copy.phonePlaceholder} value={form.phone} onChange={handleChange} required />
        </label>
        <label className="form-field">
          <span>{copy.businessType}</span>
          <input name="businessType" type="text" placeholder={copy.businessTypePlaceholder} value={form.businessType} onChange={handleChange} required />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="form-field">
          <span>{copy.website}</span>
          <input name="websiteUrl" type="url" placeholder="https://www.example.com" value={form.websiteUrl} onChange={handleChange} />
        </label>
        <label className="form-field">
          <span>{copy.google}</span>
          <input name="googleBusinessUrl" type="url" placeholder="https://g.page/yourbusiness" value={form.googleBusinessUrl} onChange={handleChange} />
        </label>
      </div>

      {inquiryMeta.showKeywords ? (
        <label className="form-field">
          <span>{copy.keywords}</span>
          <textarea
            name="keywords"
            rows="2"
            placeholder={copy.keywordsPlaceholder}
            value={form.keywords}
            onChange={handleChange}
            required={inquiryMeta.keywordsRequired}
          />
          <small className="mt-1 block text-[0.74rem] leading-relaxed text-[#687582]">{copy.keywordsHelper}</small>
        </label>
      ) : null}

      <label className="form-field">
        <span>{inquiryMeta.messageLabel}</span>
        <textarea
          name="message"
          rows="4"
          placeholder={inquiryMeta.messagePlaceholder}
          value={form.message}
          onChange={handleChange}
          required
        />
      </label>

      {notice ? (
        <p
          className={`rounded-[0.7rem] border px-4 py-3 text-sm leading-relaxed ${
            status === 'success'
              ? 'border-[var(--accent-primary)] bg-[rgba(16,33,51,0.04)] text-[var(--accent-primary)]'
              : 'border-[var(--glass-border)] bg-[var(--bg-soft)] text-text-muted'
          }`}
        >
          {notice}
        </p>
      ) : null}

      <div className="flex flex-col gap-4 border-t border-[#ded8cf] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex max-w-xl items-start gap-2 text-left">
          <Lock size={15} className="mt-1 shrink-0 text-[#102133]/80" />
          <p className="text-[0.82rem] font-medium leading-relaxed text-[#44515d]">{footerText}</p>
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="flex items-center justify-center gap-2.5 rounded-[0.25rem] bg-[#102133] px-7 py-3 text-[0.92rem] font-bold text-white transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-[#1b3145] hover:shadow-lg hover:shadow-[#102133]/20 active:translate-y-0 disabled:opacity-50"
        >
          {status === 'submitting' ? copy.submitting : inquiryMeta.submitLabel}
          <Send size={15} />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
