import React, { useEffect, useMemo, useState } from 'react';
import { Send, Search, Zap, MessageSquare, Lock } from 'lucide-react';

const INQUIRY_TYPES = [
  {
    value: 'free-check',
    label: '무료 점검',
    heading: '무료 점검 신청',
    helper: '홈페이지와 구글 비즈니스 기본 상태를 확인하고 싶어요.',
    icon: Search,
    messageLabel: '현재 가장 고민인 점',
    messagePlaceholder: '예: 홈페이지가 오래됐어요, 구글에서 잘 안 보여요 등',
    submitLabel: '무료 점검 신청하기',
  },
  {
    value: 'quick-diagnosis',
    label: 'AI 진단',
    heading: 'AI 진단 문의',
    helper: '홈페이지와 기본 SEO를 조금 더 자세히 보고 싶어요.',
    icon: Zap,
    messageLabel: '현재 가장 고민인 점',
    messagePlaceholder: '예: 홈페이지와 구글 지도 프로필 중 시급히 개선해야 할 1순위가 궁금해요',
    submitLabel: 'AI 진단 신청하기',
  },
  {
    value: 'ai-report-standard',
    label: 'AI 사업컨설팅',
    heading: 'AI 비즈니스 진단 리포트 문의',
    helper: '전체 분석 또는 재분석 리포트를 신청하고 싶어요.',
    icon: Zap,
    messageLabel: '현재 가장 큰 고민 / 목표',
    messagePlaceholder: '예: 전체 분석 리포트 신청, 재분석 리포트 신청, 매출 정체, 낮은 전환율, 경쟁사 대비 차별화 부족 등',
    submitLabel: 'AI 사업컨설팅 문의하기',
  },
  {
    value: 'online-support',
    label: '사이트 관리',
    heading: '사이트 케어 및 온라인 관리 문의',
    helper: '호스팅, 도메인, 작은 수정 또는 월간 관리를 상담하고 싶어요.',
    icon: Lock,
    messageLabel: '필요한 관리 내용',
    messagePlaceholder: '예: 호스팅 관리가 필요해요, 도메인 연결이 복잡해요, 매달 작은 수정이 필요해요 등',
    submitLabel: '사이트 관리 문의하기',
  },
  {
    value: 'general-inquiry',
    label: '일반 문의',
    heading: '일반 문의',
    helper: '기타 문의사항이 있어요.',
    icon: MessageSquare,
    messageLabel: '문의 내용',
    messagePlaceholder: '예: 구체적인 제휴/협업 제안이나 기타 궁금하신 사항을 자유롭게 남겨주세요.',
    submitLabel: '문의 신청하기',
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
  productsServices: '',
  targetCustomers: '',
  competitors: '',
  analysisFocus: '',
  businessStage: '',
  message: '',
  'bot-field': '',
};

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/goodmanseo.sydney@gmail.com';

const encode = (data) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const buildMailtoLink = ({
  company,
  name,
  phone,
  businessType,
  websiteUrl,
  googleBusinessUrl,
  productsServices,
  targetCustomers,
  competitors,
  analysisFocus,
  businessStage,
  message,
  inquiryType,
}) => {
  const inquiryMeta = getInquiryMeta(inquiryType);
  const isAIReport = inquiryType === 'ai-report-standard';
  const subject = `[Goodman SEO] ${inquiryMeta.label}${company ? ` - ${company}` : ''}`;
  const baseBody = [
    `문의 유형: ${inquiryMeta.label}`,
    `업체명: ${company || '-'}`,
    `담당자: ${name || '-'}`,
    `연락처: ${phone || '-'}`,
    `업종/지역: ${businessType || '-'}`,
    `홈페이지: ${websiteUrl || '-'}`,
    `Google Business Profile: ${googleBusinessUrl || '-'}`,
  ];

  const reportBody = isAIReport
    ? [
        `주요 제품/서비스: ${productsServices || '-'}`,
        `주요 타겟 고객: ${targetCustomers || '-'}`,
        `경쟁사 URL: ${competitors || '-'}`,
        `분석 중점 영역: ${analysisFocus || '-'}`,
        `사업 단계: ${businessStage || '-'}`,
      ]
    : [];

  const body = [
    ...baseBody,
    ...reportBody,
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
  const isAIReport = form.inquiryType === 'ai-report-standard';

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
    } catch {
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

      <div className="rounded-[0.7rem] border border-[var(--glass-border)] bg-[var(--bg-darker)] px-4 py-4 text-sm leading-relaxed text-text-muted">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#44515d]">문의 유형</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {INQUIRY_TYPES.map((item) => {
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
                
                {/* 좌측 아이콘 영역 */}
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-[background-color,color] duration-300 ${
                    isSelected ? 'bg-[#102133]/10 text-[#102133]' : 'bg-[#f7f2ec] text-[#8b7f70]'
                  }`}
                >
                  <IconComponent size={20} className={isSelected ? 'animate-pulse' : ''} />
                </div>

                {/* 우측 텍스트 영역 */}
                <div className="flex flex-col text-left">
                  <span className={`text-[0.95rem] font-bold transition-[color] duration-300 ${isSelected ? 'text-[#102133]' : 'text-[#102133]'}`}>
                    {item.label}
                  </span>
                  <span className="mt-1 text-[0.78rem] leading-relaxed text-[#44515d] font-medium">
                    {item.helper}
                  </span>
                </div>
              </label>
            );
          })}
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
          <input name="businessType" type="text" placeholder="예: 카페 / 시드니 스트라스필드" value={form.businessType} onChange={handleChange} />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="form-field">
          <span>홈페이지 주소</span>
          <input
            name="websiteUrl"
            type="url"
            placeholder="https://www.example.com"
            value={form.websiteUrl}
            onChange={handleChange}
            required={isAIReport}
          />
        </label>
        <label className="form-field">
          <span>Google Business Profile 링크</span>
          <input name="googleBusinessUrl" type="url" placeholder="https://g.page/yourbusiness" value={form.googleBusinessUrl} onChange={handleChange} />
        </label>
      </div>

      {isAIReport ? (
        <>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="form-field">
              <span>주요 제품 / 서비스</span>
              <input
                name="productsServices"
                type="text"
                placeholder="예: 대표 상품, 주력 서비스, 패키지"
                value={form.productsServices}
                onChange={handleChange}
                required
              />
            </label>
            <label className="form-field">
              <span>주요 타겟 고객</span>
              <input
                name="targetCustomers"
                type="text"
                placeholder="예: 30대 여성, 로컬 고객, B2B 담당자"
                value={form.targetCustomers}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="form-field">
              <span>경쟁사 URL</span>
              <input
                name="competitors"
                type="text"
                placeholder="최대 3개까지 입력 가능"
                value={form.competitors}
                onChange={handleChange}
              />
            </label>
            <label className="form-field">
              <span>분석 중점 영역</span>
              <input
                name="analysisFocus"
                type="text"
                placeholder="예: SEO, 전환율, 콘텐츠, 시장 포지셔닝"
                value={form.analysisFocus}
                onChange={handleChange}
              />
            </label>
          </div>

          <label className="form-field">
            <span>사업 단계</span>
            <input
              name="businessStage"
              type="text"
              placeholder="예: 초기 스타트업, 성장 중, 안정기, 리브랜딩 준비"
              value={form.businessStage}
              onChange={handleChange}
            />
          </label>
        </>
      ) : null}

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
        <p className={`rounded-[0.7rem] border px-4 py-3 text-sm leading-relaxed ${status === 'success' ? 'border-[var(--accent-primary)] bg-[rgba(16,33,51,0.04)] text-[var(--accent-primary)]' : 'border-[var(--glass-border)] bg-[var(--bg-soft)] text-text-muted'}`}>
          {notice}
        </p>
      ) : null}

      <div className="flex flex-col gap-4 border-t border-[#ded8cf] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-2 max-w-xl text-left">
          <Lock size={15} className="mt-1 shrink-0 text-[#102133]/80" />
          <p className="text-[0.82rem] leading-relaxed text-[#44515d] font-medium">{footerText}</p>
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="flex items-center justify-center gap-2.5 rounded-[0.25rem] bg-[#102133] px-7 py-3 text-[0.92rem] font-bold text-white transition-[background-color,transform,box-shadow] duration-300 hover:bg-[#1b3145] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#102133]/20 active:translate-y-0 disabled:opacity-50"
        >
          {status === 'submitting' ? '전송 중...' : inquiryMeta.submitLabel}
          <Send size={15} />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
