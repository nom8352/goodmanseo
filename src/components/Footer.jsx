import React from 'react';
import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#090d13] py-16">
      <div className="container">
        <div className="footer-cta">
          <div className="footer-meta">
            <p className="section-kicker">Start small, look premium</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] sm:text-4xl">
              웹사이트, 구글 노출, SNS 흐름을
              <br />
              한 번에 정리할 준비가 되어 있습니다.
            </h2>
          </div>
          <Link to="/contact" className="primary-button">
            상담 신청하기
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="footer-grid">
          <div>
            <Link to="/" className="site-mark">
              <span className="site-mark__title gradient-text">GOODMANSEO</span>
              <span className="site-mark__meta">starter package for small business</span>
            </Link>
            <p className="mt-6 max-w-[30rem] leading-relaxed text-text-muted">
              복잡한 설명보다 결과가 보이는 기본 세팅에 집중합니다. 작은 비즈니스가
              온라인에서 더 잘 보이도록 필요한 흐름만 정리해 드립니다.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold">바로가기</h4>
            <ul className="flex flex-col gap-4">
              <li><Link to="/" className="text-text-muted hover:text-accent-primary">홈</Link></li>
              <li><Link to="/starter-package" className="text-text-muted hover:text-accent-primary">스타터 패키지</Link></li>
              <li><Link to="/blog" className="text-text-muted hover:text-accent-primary">블로그</Link></li>
              <li><Link to="/contact" className="text-text-muted hover:text-accent-primary">상담 신청</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold">고객 센터</h4>
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

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-text-muted">
          <p>© 2026 GOODMANSEO. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
