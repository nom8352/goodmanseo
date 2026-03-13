import React from 'react';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6">상담 신청</h1>
          <p className="text-xl text-text-muted">어려운 마케팅 고민, 굿맨SEO가 해결해 드립니다.</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">연락처 정보</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">전화번호</p>
                    <p className="text-xl font-bold">0434-920-114</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">이메일</p>
                    <p className="text-xl font-bold">goodmanseo.sydney@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-text-muted text-sm">주소</p>
                    <p className="text-xl font-bold">Sydney, Australia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-[32px] border-accent-primary/20">
              <h3 className="text-xl font-bold mb-4 text-accent-primary">상담 안내사항</h3>
              <p className="text-text-muted leading-relaxed">
                신청해 주시면 24시간 이내에 담당자가 연락을 드립니다.<br />
                간단한 현재 비즈니스 상황을 남겨주시면 더욱 명확한 상담이 가능합니다.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass p-10 md:p-12 rounded-[40px]">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold mb-2 ml-1">업체명 (상호)</label>
                <input 
                  type="text" 
                  placeholder="예: 굿맨 베이커리" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 ml-1">담당자 성함</label>
                <input 
                  type="text" 
                  placeholder="성함을 입력해 주세요" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 ml-1">연락처</label>
                <input 
                  type="tel" 
                  placeholder="연락 가능한 번호를 입력해 주세요" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 ml-1">현재 고민이신 부분 (선택)</label>
                <textarea 
                  rows="4" 
                  placeholder="예: 구글 지도 노출이 안 돼요, 홈페이지가 너무 오래됐어요" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-primary transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-5 bg-accent-primary text-black font-black text-xl rounded-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,242,255,0.2)]"
              >
                상담 신청하기 <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-accent-primary { color: var(--accent-primary); }
        .bg-accent-primary { background: var(--accent-primary); }
        .border-accent-primary { border-color: var(--accent-primary); }
        .text-text-muted { color: var(--text-muted); }
      `}</style>
    </div>
  );
};

export default Contact;
