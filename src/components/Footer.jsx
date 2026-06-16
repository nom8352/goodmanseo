import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Mail,
  ArrowUpRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-[var(--glass-border)] bg-[var(--bg-darker)] py-16 text-[#0f2230]">
      <div className="container px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16">
          
          {/* Brand Column */}
          <div className="footer-brand flex flex-col items-start">
            <Link to="/" className="site-mark">
              <span className="site-mark__title font-sans font-extrabold text-[var(--accent-primary)] tracking-[-0.04em] text-2xl">GOODMANSEO</span>
              <span className="site-mark__meta text-xs text-[#7c8f9f] tracking-[0.2em] uppercase mt-1">구글 · 홈페이지 · SNS 통합 마케팅</span>
            </Link>
            
            <p className="mt-6 max-w-[24rem] text-sm leading-relaxed text-[#4e6170]">
              고객이 신뢰하고 선택하는 온라인 환경을 만들어<br />
              비즈니스의 지속적인 성장을 함께합니다.
            </p>
            
            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-3">
              {/* Instagram */}
              <a 
                href="#" 
                aria-label="GoodmanSEO 인스타그램 바로가기"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-[#e6eff1] hover:border-[#ee2a7b] hover:bg-[#ee2a7b]/5 text-[#ee2a7b] transition-all shadow-sm"
              >
                <Instagram size={18} />
              </a>
              {/* Facebook */}
              <a 
                href="#" 
                aria-label="GoodmanSEO 페이스북 바로가기"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-[#e6eff1] hover:border-[#1877F2] hover:bg-[#1877F2]/5 text-[#1877F2] transition-all shadow-sm"
              >
                <Facebook size={18} />
              </a>
              {/* YouTube */}
              <a 
                href="#" 
                aria-label="GoodmanSEO 유튜브 바로가기"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-[#e6eff1] hover:border-[#FF0000] hover:bg-[#FF0000]/5 text-[#FF0000] transition-all shadow-sm"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Menu Column */}
          <div className="footer-links">
            <h4 className="text-sm font-bold tracking-wider text-[#0f2230] uppercase mb-6">빠른 메뉴</h4>
            <ul className="flex flex-col gap-3.5 text-sm font-bold text-[#4e6170]">
              <li>
                <Link to="/" className="hover:text-[var(--accent-primary)] transition">홈</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-[var(--accent-primary)] transition">서비스 및 가격</Link>
              </li>
              <li>
                <Link to="/ai-business" className="hover:text-[var(--accent-primary)] transition">AI 실전 멘토링</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[var(--accent-primary)] transition">블로그</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[var(--accent-primary)] transition">진단 / 문의 신청</Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-contact flex flex-col items-start">
            <h4 className="text-sm font-bold tracking-wider text-[#0f2230] uppercase mb-6">문의하기</h4>
            <ul className="flex flex-col gap-4 text-sm font-bold text-[#4e6170] items-start">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#7c8f9f]" />
                <a href="mailto:goodmanseo.sydney@gmail.com" className="hover:text-[var(--accent-primary)] transition">goodmanseo.sydney@gmail.com</a>
              </li>
              <li className="mt-2">
                <Link to="/contact" className="secondary-button secondary-button--compact inline-flex">
                  무료 점검 신청 / 문의
                  <ArrowUpRight size={16} />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & terms */}
        <div className="mt-16 border-t border-[var(--glass-border)] pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs font-semibold text-[#7c8f9f]">
          <p>© 2026 GOODMANSEO. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[var(--accent-primary)] transition">개인정보처리방침</Link>
            <span className="text-slate-300 select-none">|</span>
            <Link to="/terms" className="hover:text-[var(--accent-primary)] transition">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
