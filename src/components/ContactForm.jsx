import React, { useEffect, useMemo, useState } from 'react';
import { Send, Search, Zap, MessageSquare, Lock } from 'lucide-react';

const INQUIRY_TYPES = {
  ko: [
    { value: 'free-check', label: '무료 점검', heading: '무료 점검 신청', helper: '홈페이지와 구글 비즈니스 기본 상태 확인만 필요해요.', icon: Search, messageLabel: '현재 가장 고민인 점', messagePlaceholder: '예: 홈페이지가 오래됐어요, 구글에서 잘 안 보여요 등', submitLabel: '무료 점검 신청하기' },
    { value: 'quick-diagnosis', label: 'AI 진단', heading: 'AI 진단 문의', helper: '무료 점검보다 더 깊은 유료 AI 진단으로 우선 개선 항목을 정리하고 싶어요.', icon: Zap, messageLabel: '현재 가장 고민인 점', messagePlaceholder: '예: 홈페이지와 구글 지도 프로필 중 시급히 개선해야 할 1순위가 궁금해요', submitLabel: 'AI 진단 신청하기' },
    { value: 'ai-report-standard', label: 'AI 비즈니스 리포트', heading: 'AI 비즈니스 리포트 문의', helper: '업종별 맞춤 분석과 30일·90일 실행 로드맵을 신청하고 싶어요.', icon: Zap, messageLabel: '현재 가장 큰 고민 / 목표', messagePlaceholder: '예: 매출 정체, 낮은 전환율, 경쟁사 대비 차별화 부족, 구글 노출 개선 등', submitLabel: 'AI 비즈니스 리포트 문의하기' },
    { value: 'ai-mentoring', label: 'AI 실전 멘토링', heading: 'AI 실전 멘토링 문의', helper: '실무에 바로 적용할 AI 활용법을 멘토링으로 받고 싶어요.', icon: Zap, messageLabel: '현재 가장 고민인 점', messagePlaceholder: '예: 콘텐츠 자동화, 고객 응대, 리뷰 답변 등', submitLabel: 'AI 실전 멘토링 문의하기' },
    { value: 'ai-study-group', label: 'AI 스튜디오 그룹', heading: 'AI 스튜디오 그룹 문의', helper: '반복 콘텐츠 업무와 운영 데이터를 정리하는 그룹 프로그램을 상담하고 싶어요.', icon: MessageSquare, messageLabel: '현재 가장 고민인 점', messagePlaceholder: '예: 콘텐츠 업무가 많아요, 운영 데이터를 정리하고 싶어요 등', submitLabel: 'AI 스튜디오 그룹 문의하기' },
    { value: 'ai-workshop', label: 'AI 워크숍', heading: 'AI 워크숍 문의', helper: '팀 또는 조직을 위한 맞춤 AI 워크숍·교육을 문의하고 싶어요.', icon: MessageSquare, messageLabel: '교육 / 워크숍 요청 내용', messagePlaceholder: '예: 팀 규모, 원하는 주제, 희망 일정 등', submitLabel: 'AI 워크숍 문의하기' },
    { value: 'starter-homepage', label: '스타터 홈페이지', heading: '스타터 홈페이지 문의', helper: '꼭 필요한 페이지만 담은 기본 홈페이지 제작을 상담하고 싶어요.', icon: MessageSquare, messageLabel: '제작 요청 내용', messagePlaceholder: '예: 업종, 필요한 페이지, 현재 준비된 자료 등', submitLabel: '스타터 홈페이지 문의하기' },
    { value: 'business-homepage', label: '비즈니스 홈페이지', heading: '비즈니스 홈페이지 문의', helper: '서비스 설명이 더 필요한 비즈니스용 홈페이지 제작을 상담하고 싶어요.', icon: MessageSquare, messageLabel: '제작 요청 내용', messagePlaceholder: '예: 서비스 종류, 페이지 구성, 참고 사이트 등', submitLabel: '비즈니스 홈페이지 문의하기' },
    { value: 'growth-homepage', label: '성장형 홈페이지', heading: '성장형 홈페이지 문의', helper: '여러 서비스와 안내 페이지가 필요한 확장형 홈페이지를 상담하고 싶어요.', icon: MessageSquare, messageLabel: '제작 요청 내용', messagePlaceholder: '예: 필요한 페이지 수, 지역/서비스 구성, SEO 목표 등', submitLabel: '성장형 홈페이지 문의하기' },
    { value: 'seo-start-package', label: 'SEO 스타트 패키지', heading: 'SEO All-in-One 스타트 패키지 문의', helper: '검색 노출을 위한 기본 SEO 세팅을 한 번에 정리하고 싶어요.', icon: Search, messageLabel: 'SEO 점검 / 세팅 요청', messagePlaceholder: '예: 현재 홈페이지 주소, 검색에서 안 보이는 키워드, 우선 목표 등', submitLabel: 'SEO 스타트 패키지 문의하기' },
    { value: 'site-care-basic', label: '사이트 케어 Basic', heading: '사이트 케어 Basic 문의', helper: '홈페이지 기본 상태 확인과 작은 수정을 월간으로 맡기고 싶어요.', icon: Lock, messageLabel: '필요한 관리 내용', messagePlaceholder: '예: 호스팅/SSL 확인, 월 1회 작은 수정, 도메인 연결 점검 등', submitLabel: '사이트 케어 Basic 문의하기' },
    { value: 'site-care-plus', label: '사이트 케어 Plus', heading: '사이트 케어 Plus 문의', helper: '공지·배너·이미지 교체처럼 자주 필요한 운영 수정을 우선 지원받고 싶어요.', icon: Lock, messageLabel: '필요한 관리 내용', messagePlaceholder: '예: 공지/배너 교체, 월 2~3회 수정, 우선 응대 등', submitLabel: '사이트 케어 Plus 문의하기' },
    { value: 'online-support', label: '사이트 관리', heading: '사이트 케어 및 온라인 관리 문의', helper: '호스팅, 도메인, 작은 수정 또는 월간 관리를 상담하고 싶어요.', icon: Lock, messageLabel: '필요한 관리 내용', messagePlaceholder: '예: 호스팅 관리가 필요해요, 도메인 연결이 복잡해요, 매달 작은 수정이 필요해요 등', submitLabel: '사이트 관리 문의하기' },
    { value: 'general-inquiry', label: '일반 문의', heading: '일반 문의', helper: '기타 문의사항이 있어요.', icon: MessageSquare, messageLabel: '문의 내용', messagePlaceholder: '예: 구체적인 제휴/협업 제안이나 기타 궁금하신 사항을 자유롭게 남겨주세요.', submitLabel: '문의 신청하기' },
  ],
  en: [
    { value: 'free-check', label: 'Free Check', heading: 'Request a Free Check', helper: 'I only need a basic status check of my website and Google Business Profile.', icon: Search, messageLabel: 'What is your main concern?', messagePlaceholder: 'For example: my website looks dated or my business is hard to find on Google.', submitLabel: 'Request Free Check' },
    { value: 'quick-diagnosis', label: 'AI Review', heading: 'AI Review Enquiry', helper: 'I want a paid AI review that goes deeper than the free check and prioritises what to fix first.', icon: Zap, messageLabel: 'What is your main concern?', messagePlaceholder: 'For example: I need to know whether my website or Google profile should be fixed first.', submitLabel: 'Request AI Review' },
    { value: 'ai-report-standard', label: 'AI Business Report', heading: 'AI Business Report Enquiry', helper: 'I would like an industry-specific review and a prioritised 30/90-day action roadmap.', icon: Zap, messageLabel: 'Main challenge or goal', messagePlaceholder: 'For example: low conversions, weak Google visibility, unclear positioning or slow growth.', submitLabel: 'Enquire About the Report' },
    { value: 'ai-mentoring', label: 'AI Mentoring', heading: 'AI Mentoring Enquiry', helper: 'I would like mentoring on practical AI tools I can apply in my business.', icon: Zap, messageLabel: 'What is your main concern?', messagePlaceholder: 'For example: content automation, customer replies or review responses.', submitLabel: 'Enquire About AI Mentoring' },
    { value: 'ai-study-group', label: 'AI Studio Group', heading: 'AI Studio Group Enquiry', helper: 'I would like to discuss the group program for content workflows and operating data.', icon: MessageSquare, messageLabel: 'What is your main concern?', messagePlaceholder: 'For example: too much content work or a need to organise operating data.', submitLabel: 'Enquire About AI Studio Group' },
    { value: 'ai-workshop', label: 'AI Workshop', heading: 'AI Workshop Enquiry', helper: 'I would like a tailored AI workshop or training for my team or organisation.', icon: MessageSquare, messageLabel: 'Workshop / training request', messagePlaceholder: 'For example: team size, preferred topics or timing.', submitLabel: 'Enquire About AI Workshop' },
    { value: 'starter-homepage', label: 'Starter Homepage', heading: 'Starter Homepage Enquiry', helper: 'I would like a basic homepage with only the pages my business needs first.', icon: MessageSquare, messageLabel: 'Project details', messagePlaceholder: 'For example: industry, required pages or materials already prepared.', submitLabel: 'Enquire About Starter Homepage' },
    { value: 'business-homepage', label: 'Business Homepage', heading: 'Business Homepage Enquiry', helper: 'I need a business homepage with room for more service detail and pages.', icon: MessageSquare, messageLabel: 'Project details', messagePlaceholder: 'For example: services offered, page structure or reference sites.', submitLabel: 'Enquire About Business Homepage' },
    { value: 'growth-homepage', label: 'Growth Homepage', heading: 'Growth Homepage Enquiry', helper: 'I need a larger homepage setup for multiple services, locations or guide pages.', icon: MessageSquare, messageLabel: 'Project details', messagePlaceholder: 'For example: page count, service/location structure or SEO goals.', submitLabel: 'Enquire About Growth Homepage' },
    { value: 'seo-start-package', label: 'SEO Start Package', heading: 'SEO All-in-One Start Package Enquiry', helper: 'I would like the core SEO setup handled in one pass.', icon: Search, messageLabel: 'SEO request', messagePlaceholder: 'For example: current website URL, missing keywords or first priority.', submitLabel: 'Enquire About SEO Start Package' },
    { value: 'site-care-basic', label: 'Site Care Basic', heading: 'Site Care Basic Enquiry', helper: 'I would like monthly basic website checks and small updates handled for me.', icon: Lock, messageLabel: 'What support do you need?', messagePlaceholder: 'For example: hosting/SSL checks, one small edit per month or domain connection.', submitLabel: 'Enquire About Site Care Basic' },
    { value: 'site-care-plus', label: 'Site Care Plus', heading: 'Site Care Plus Enquiry', helper: 'I need priority support for frequent notice, banner or image updates.', icon: Lock, messageLabel: 'What support do you need?', messagePlaceholder: 'For example: notice/banner updates, 2–3 edits per month or priority response.', submitLabel: 'Enquire About Site Care Plus' },
    { value: 'online-support', label: 'Website Care', heading: 'Website Care Enquiry', helper: 'I need help with hosting, domains, small updates or ongoing website care.', icon: Lock, messageLabel: 'What support do you need?', messagePlaceholder: 'For example: hosting support, domain connection or regular website updates.', submitLabel: 'Enquire About Website Care' },
    { value: 'general-inquiry', label: 'General Enquiry', heading: 'General Enquiry', helper: 'I have another question or collaboration enquiry.', icon: MessageSquare, messageLabel: 'Your enquiry', messagePlaceholder: 'Tell us what you would like to discuss.', submitLabel: 'Send Enquiry' },
  ],
};

const FORM_COPY = {
  ko: {
    typeHeading: '문의 유형', company: '업체명', companyPlaceholder: '예: Goodman Bakery', name: '담당자 이름', namePlaceholder: '이름을 입력해 주세요', phone: '연락처', phonePlaceholder: '연락 가능한 번호', businessType: '업종 / 지역', businessTypePlaceholder: '예: 카페 / 시드니 스트라스필드', website: '홈페이지 주소', google: 'Google Business Profile 링크', products: '주요 제품 / 서비스', productsPlaceholder: '예: 대표 상품, 주력 서비스, 패키지', customers: '주요 타겟 고객', customersPlaceholder: '예: 30대 여성, 로컬 고객, B2B 담당자', competitors: '경쟁사 URL', competitorsPlaceholder: '최대 3개까지 입력 가능', focus: '분석 중점 영역', focusPlaceholder: '예: SEO, 전환율, 콘텐츠, 시장 포지셔닝', stage: '사업 단계', stagePlaceholder: '예: 초기 스타트업, 성장 중, 안정기, 리브랜딩 준비', submitting: '전송 중...', success: (label) => `${label}이 접수되었습니다. 확인 후 연락드리겠습니다.`, fallback: '자동 접수가 안 되어 이메일로 이어집니다.', mailLabels: ['문의 유형', '업체명', '담당자', '연락처', '업종/지역', '홈페이지', 'Google Business Profile'], reportLabels: ['주요 제품/서비스', '주요 타겟 고객', '경쟁사 URL', '분석 중점 영역', '사업 단계'],
  },
  en: {
    typeHeading: 'Enquiry Type', company: 'Business Name', companyPlaceholder: 'For example: Goodman Bakery', name: 'Contact Name', namePlaceholder: 'Enter your name', phone: 'Phone Number', phonePlaceholder: 'Best number to reach you', businessType: 'Industry / Location', businessTypePlaceholder: 'For example: Cafe / Strathfield, Sydney', website: 'Website URL', google: 'Google Business Profile URL', products: 'Main Products / Services', productsPlaceholder: 'For example: key services, products or packages', customers: 'Target Customers', customersPlaceholder: 'For example: local families, homeowners or B2B teams', competitors: 'Competitor URLs', competitorsPlaceholder: 'Up to 3 URLs', focus: 'Analysis Focus', focusPlaceholder: 'For example: SEO, conversions, content or positioning', stage: 'Business Stage', stagePlaceholder: 'For example: new, growing, established or rebranding', submitting: 'Sending...', success: (label) => `Your ${label.toLowerCase()} has been received. We will review it and get back to you as soon as possible.`, fallback: 'The form could not be submitted automatically. Opening your email app instead.', mailLabels: ['Enquiry type', 'Business name', 'Contact name', 'Phone', 'Industry / location', 'Website', 'Google Business Profile'], reportLabels: ['Main products / services', 'Target customers', 'Competitor URLs', 'Analysis focus', 'Business stage'],
  },
};

const getInquiryMeta = (type, locale = 'ko') => {
  const types = INQUIRY_TYPES[locale] || INQUIRY_TYPES.ko;
  return types.find((item) => item.value === type) || types[0];
};

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
}, locale = 'ko') => {
  const inquiryMeta = getInquiryMeta(inquiryType, locale);
  const copy = FORM_COPY[locale] || FORM_COPY.ko;
  const isAIReport = inquiryType === 'ai-report-standard';
  const subject = `[Goodman SEO] ${inquiryMeta.label}${company ? ` - ${company}` : ''}`;
  const baseBody = [
    `${copy.mailLabels[0]}: ${inquiryMeta.label}`,
    `${copy.mailLabels[1]}: ${company || '-'}`,
    `${copy.mailLabels[2]}: ${name || '-'}`,
    `${copy.mailLabels[3]}: ${phone || '-'}`,
    `${copy.mailLabels[4]}: ${businessType || '-'}`,
    `${copy.mailLabels[5]}: ${websiteUrl || '-'}`,
    `${copy.mailLabels[6]}: ${googleBusinessUrl || '-'}`,
  ];

  const reportBody = isAIReport
    ? [
        `${copy.reportLabels[0]}: ${productsServices || '-'}`,
        `${copy.reportLabels[1]}: ${targetCustomers || '-'}`,
        `${copy.reportLabels[2]}: ${competitors || '-'}`,
        `${copy.reportLabels[3]}: ${analysisFocus || '-'}`,
        `${copy.reportLabels[4]}: ${businessStage || '-'}`,
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
      action="https://formsubmit.co/goodmanseo.sydney@gmail.com"
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
          <input name="businessType" type="text" placeholder={copy.businessTypePlaceholder} value={form.businessType} onChange={handleChange} />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="form-field">
          <span>{copy.website}</span>
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
          <span>{copy.google}</span>
          <input name="googleBusinessUrl" type="url" placeholder="https://g.page/yourbusiness" value={form.googleBusinessUrl} onChange={handleChange} />
        </label>
      </div>

      {isAIReport ? (
        <>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="form-field">
              <span>{copy.products}</span>
              <input
                name="productsServices"
                type="text"
                placeholder={copy.productsPlaceholder}
                value={form.productsServices}
                onChange={handleChange}
                required
              />
            </label>
            <label className="form-field">
              <span>{copy.customers}</span>
              <input
                name="targetCustomers"
                type="text"
                placeholder={copy.customersPlaceholder}
                value={form.targetCustomers}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="form-field">
              <span>{copy.competitors}</span>
              <input
                name="competitors"
                type="text"
                placeholder={copy.competitorsPlaceholder}
                value={form.competitors}
                onChange={handleChange}
              />
            </label>
            <label className="form-field">
              <span>{copy.focus}</span>
              <input
                name="analysisFocus"
                type="text"
                placeholder={copy.focusPlaceholder}
                value={form.analysisFocus}
                onChange={handleChange}
              />
            </label>
          </div>

          <label className="form-field">
            <span>{copy.stage}</span>
            <input
              name="businessStage"
              type="text"
              placeholder={copy.stagePlaceholder}
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
          {status === 'submitting' ? copy.submitting : inquiryMeta.submitLabel}
          <Send size={15} />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
