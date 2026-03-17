import React from 'react';
import { ArrowUpRight, Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#090d13] py-16">
      <div className="container grid grid-cols-1 gap-12 text-center sm:grid-cols-2 sm:text-left md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="inline-flex w-max items-center text-4xl font-black tracking-[-0.08em]">
            <span className="gradient-text">GOODMANSEO</span>
          </Link>
          <p className="mt-6 max-w-[430px] leading-relaxed text-text-muted">
            복잡한 설명보다 결과가 보이는 기본 세팅에 집중합니다. 작은 비즈니스가
            온라인에서 더 잘 보이도록 필요한 흐름만 정리해 드립니다.
          </p>
          <Link to="/starter-package" className="secondary-button secondary-button--compact mt-8 inline-flex">
            패키지 보기
            <ArrowUpRight size={16} />
          </Link>
          <div className="mt-8 flex gap-4">
            <a href="#" className="social-pill">
              <Instagram size={20} />
            </a>
            <a href="#" className="social-pill">
              <Facebook size={20} />
            </a>
          </div>
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

      <div className="container mt-16 border-t border-white/10 pt-8 text-center text-sm text-text-muted">
        <p>© 2026 GOODMANSEO. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
