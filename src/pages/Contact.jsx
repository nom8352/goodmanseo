import React from 'react';
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

const Contact = () => {
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
                <p className="mt-3 text-2xl font-black tracking-[-0.04em] break-all">{item.value}</p>
              </div>
            ))}

            <div className="soft-panel">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">Quick note</p>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                거창한 제안서보다 빠른 시작이 중요하다면, 업체명과 연락처 그리고 지금 가장
                답답한 한 가지를 적어주세요. 필요한 범위만 먼저 정리해 드립니다.
              </p>
            </div>
          </div>

          <div className="showcase-panel">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">Simple inquiry form</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.05em]">상담 신청서</h2>
            </div>

            <form className="mt-8 grid gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="form-field">
                  <span>업체명</span>
                  <input type="text" placeholder="예: Goodman Bakery" />
                </label>
                <label className="form-field">
                  <span>담당자 성함</span>
                  <input type="text" placeholder="성함을 입력해 주세요" />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="form-field">
                  <span>연락처</span>
                  <input type="tel" placeholder="연락 가능한 번호" />
                </label>
                <label className="form-field">
                  <span>업종 또는 지역</span>
                  <input type="text" placeholder="예: 시드니 카페 / 뷰티샵" />
                </label>
              </div>

              <label className="form-field">
                <span>현재 가장 고민인 부분</span>
                <textarea rows="5" placeholder="예: 구글 지도 노출이 약해요, 홈페이지가 오래됐어요, SNS와 사이트가 연결되지 않아요" />
              </label>

              <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-xl text-sm leading-relaxed text-text-muted">
                  현재는 폼 디자인만 정리된 상태입니다. 실제 메일 전송이나 저장 기능은 다음 단계에서 연결할 수 있습니다.
                </p>
                <button type="submit" className="primary-button">
                  상담 신청하기
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
