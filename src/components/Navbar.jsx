import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '홈', href: '/' },
    { name: '서비스 및 가격', href: '/pricing' },
    { name: '블로그', href: '/blog' },
    { name: 'AI 실전 멘토링', href: '/ai-business' },
    { name: 'AI 사업컨설팅', href: '/ai-report' },
    { name: 'AI 강의', href: '/ai-course' },
  ];

  return (
    <nav className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'nav-shell nav-shell--solid' : 'nav-shell'}`}>
      <div className="container flex items-center justify-between gap-6 px-6 md:px-4">
        <Link to="/" className="site-mark">
          <span className="site-mark__title">GOODMANSEO</span>
          <span className="site-mark__meta">홈페이지 · 구글 비즈니스 · 기본 SEO</span>
        </Link>

        <div className="hidden items-center gap-5 lg:gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="text-xs font-black text-[#102133]/78 transition-colors hover:text-[#102133]">
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="inline-flex min-h-10 items-center justify-center gap-2 rounded-[0.2rem] bg-[#102133] px-4 text-xs font-black text-white transition hover:-translate-y-0.5 hover:bg-[#172d42]">
            무료 점검 신청 / 문의
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center text-[#102133] md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-[#ded8cf] bg-[#f7f2ec]/98 py-12 backdrop-blur-2xl shadow-lg md:hidden">
          <div className="container flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className="text-xl font-bold text-[#102133] transition-colors hover:text-[#2d6fa3]" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="inline-flex min-h-12 items-center justify-center bg-[#102133] px-6 text-sm font-black text-white" onClick={() => setIsMenuOpen(false)}>
              무료 점검 신청 / 문의
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
