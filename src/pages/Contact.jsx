import { Send, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { Tilt } from 'react-tilt';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Contact = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container">
        <div className="text-center mb-12 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 tracking-tighter px-4">상담 <span className="gradient-text">신청</span></h1>
          <p className="text-lg sm:text-xl md:text-2xl text-text-muted font-medium px-6">어려운 마케팅 고민, 굿맨SEO가 완벽하게 해결해 드립니다.</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Info Side */}
          <div className="space-y-10">
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-8 tracking-tight">빠른 상담 문의</h2>
              <div className="space-y-6">
                <Tilt options={{ max: 5, scale: 1.02, speed: 400 }}>
                  <div className="flex items-center gap-6 p-6 glass rounded-3xl border-transparent hover:border-white/10 transition-colors group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent-primary shrink-0 group-hover:bg-accent-primary group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,242,255,0.1)] group-hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]">
                      <Phone size={24} className="group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="text-text-muted text-sm mb-1 font-medium">직통 문의전화</p>
                      <p className="text-2xl font-bold tracking-tight">0434-920-114</p>
                    </div>
                  </div>
                </Tilt>

                <Tilt options={{ max: 5, scale: 1.02, speed: 400 }}>
                  <div className="flex items-center gap-6 p-6 glass rounded-3xl border-transparent hover:border-white/10 transition-colors group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent-secondary shrink-0 group-hover:bg-accent-secondary group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,0,234,0.1)] group-hover:shadow-[0_0_20px_rgba(255,0,234,0.4)]">
                      <Mail size={24} className="group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs sm:text-sm mb-1 font-medium">이메일 접수</p>
                      <p className="text-sm sm:text-xl font-bold tracking-tight break-all">goodmanseo.sydney@gmail.com</p>
                    </div>
                  </div>
                </Tilt>

                <Tilt options={{ max: 5, scale: 1.02, speed: 400 }}>
                  <div className="flex items-center gap-6 p-6 glass rounded-3xl border-transparent hover:border-white/10 transition-colors group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent-tertiary shrink-0 group-hover:bg-accent-tertiary group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(112,0,255,0.1)] group-hover:shadow-[0_0_20px_rgba(112,0,255,0.4)]">
                      <MapPin size={24} className="group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="text-text-muted text-sm mb-1 font-medium">본사 위치</p>
                      <p className="text-xl font-bold tracking-tight">Sydney, Australia</p>
                    </div>
                  </div>
                </Tilt>
              </div>
            </div>

            <div className="glass p-6 sm:p-8 rounded-2xl sm:rounded-[32px] border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-accent-primary">상담 안내사항</h3>
              <p className="text-text-muted leading-relaxed text-sm sm:text-base">
                신청해 주시면 24시간 이내에 담당자가 연락을 드립니다.<br className="hidden sm:block" />
                간단한 현재 비즈니스 상황을 남겨주시면 더욱 명확한 상담이 가능합니다.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass p-8 sm:p-14 rounded-[32px] sm:rounded-[40px] relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary rounded-[34px] sm:rounded-[42px] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center sm:text-left">상담 신청서 작성</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="group/input">
                  <label className="block text-sm font-bold mb-2 ml-2 text-white/80 group-focus-within/input:text-accent-primary transition-colors">업체명 (상호)</label>
                  <input 
                    type="text" 
                    placeholder="예: 굿맨 베이커리" 
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-primary focus:bg-accent-primary/5 transition-all focus:ring-4 focus:ring-accent-primary/10 text-white placeholder:text-white/20"
                  />
                </div>
                <div className="group/input">
                  <label className="block text-sm font-bold mb-2 ml-2 text-white/80 group-focus-within/input:text-accent-primary transition-colors">담당자 성함</label>
                  <input 
                    type="text" 
                    placeholder="성함을 입력해 주세요" 
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-primary focus:bg-accent-primary/5 transition-all focus:ring-4 focus:ring-accent-primary/10 text-white placeholder:text-white/20"
                  />
                </div>
                <div className="group/input">
                  <label className="block text-sm font-bold mb-2 ml-2 text-white/80 group-focus-within/input:text-accent-primary transition-colors">연락처</label>
                  <input 
                    type="tel" 
                    placeholder="연락 가능한 번호를 입력해 주세요" 
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-primary focus:bg-accent-primary/5 transition-all focus:ring-4 focus:ring-accent-primary/10 text-white placeholder:text-white/20"
                  />
                </div>
                <div className="group/input">
                  <label className="block text-sm font-bold mb-2 ml-2 text-white/80 group-focus-within/input:text-accent-primary transition-colors">현재 고민이신 부분 (선택)</label>
                  <textarea 
                    rows="4" 
                    placeholder="예: 구글 지도 노출이 안 돼요, 홈페이지가 너무 오래됐어요" 
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent-primary focus:bg-accent-primary/5 transition-all focus:ring-4 focus:ring-accent-primary/10 text-white placeholder:text-white/20 resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full mt-4 group relative inline-flex py-5 bg-white text-black font-black text-xl rounded-2xl hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] items-center justify-center gap-3 overflow-hidden"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                  <span className="relative z-10 group-hover:text-white transition-colors duration-500 flex items-center gap-2">
                    <Sparkles size={20} /> 상담 신청하기 <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .text-accent-primary { color: var(--accent-primary); }
        .bg-accent-primary { background: var(--accent-primary); }
        .border-accent-primary { border-color: var(--accent-primary); }
        .text-text-muted { color: var(--text-muted); }
      `}</style>
    </div>
  );
};

export default Contact;
