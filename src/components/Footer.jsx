import React from 'react';
import { Rocket, Mail, Phone, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] py-16 border-t border-glass-border">
      <div className="container grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <a href="/" className="flex items-center gap-2 text-2xl font-black tracking-tighter mb-6 relative group inline-flex w-max">
            <Rocket className="text-accent-primary group-hover:rotate-12 transition-transform duration-300" size={28} />
            <span className="gradient-text">GOODMANSEO</span>
          </a>
          <p className="text-text-muted max-width-[400px] leading-relaxed mb-8">
            복잡한 마케팅에서 벗어나 비즈니스 성장에 집중하세요.<br />
            굿맨SEO가 여러분의 온라인 기본기를 완벽하게 세팅해 드립니다.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-accent-primary transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-accent-primary transition-all">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">바로가기</h4>
          <ul className="flex flex-col gap-4">
            <li><a href="/" className="text-text-muted hover:text-accent-primary">홈</a></li>
            <li><a href="/starter-package" className="text-text-muted hover:text-accent-primary">스타터 패키지</a></li>
            <li><a href="/blog" className="text-text-muted hover:text-accent-primary">블로그</a></li>
            <li><a href="/contact" className="text-text-muted hover:text-accent-primary">상담 신청</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">고객 센터</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-2 text-text-muted">
              <Phone size={16} /> 0434-920-114
            </li>
            <li className="flex items-center gap-2 text-text-muted">
              <Mail size={16} /> goodmanseo.sydney@gmail.com
            </li>
            <li className="text-text-muted">Sydney, Australia</li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-16 pt-8 border-t border-glass-border text-center text-text-muted text-sm">
        <p>© 2026 GOODMANSEO. All Rights Reserved.</p>
      </div>

      <style jsx>{`
        .text-accent-primary { color: var(--accent-primary); }
        .text-text-muted { color: var(--text-muted); }
        .border-glass-border { border-color: var(--glass-border); }
        .container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 20px; }
      `}</style>
    </footer>
  );
};

export default Footer;
