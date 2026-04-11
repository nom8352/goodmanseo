import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#090d13] py-16">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="site-mark">
              <span className="site-mark__title gradient-text">GOODMANSEO</span>
              <span className="site-mark__meta">구글 · 홈페이지 · SNS 무료 점검</span>
            </Link>
            <p className="mt-6 max-w-[30rem] leading-relaxed text-text-muted">
              구글, 홈페이지, 인스타그램, 페이스북을 함께 보고
              <br />
              부족한 부분이 어디인지 점검해드립니다.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold">바로가기</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-text-muted hover:text-accent-primary">홈</Link></li>
              <li><Link to="/starter-package" className="text-text-muted hover:text-accent-primary">기본 홈페이지</Link></li>
              <li><Link to="/pricing" className="text-text-muted hover:text-accent-primary">서비스 및 가격</Link></li>
              <li><Link to="/blog" className="text-text-muted hover:text-accent-primary">블로그</Link></li>
              <li><Link to="/contact" className="text-text-muted hover:text-accent-primary">상담 신청</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-text-muted">
          <p>© 2026 GOODMANSEO. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;