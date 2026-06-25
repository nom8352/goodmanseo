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
    { name: 'AI 강의', href: '/ai-course' },
  ];

  return (
    <nav className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'nav-shell nav-shell--solid' : 'nav-shell'}`}>
      <div className="container flex items-center justify-between gap-6 px-6 md:px-4">
        <Link to="/" className="site-mark">
          <span className="site-mark__title gradient-text">GOODMANSEO</span>
          <span className="site-mark__meta">구글 · 홈페이지 · SNS 무료 점검</span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="text-sm font-semibold text-text-muted transition-colors hover:text-[var(--accent-primary)]">
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="secondary-button secondary-button--compact">
            무료 점검 신청 / 문의
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <button
          className="text-[var(--text-main)] md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-[var(--glass-border)] bg-white/95 py-12 backdrop-blur-2xl md:hidden shadow-lg">
          <div className="container flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className="text-xl font-bold text-[var(--text-main)] transition-colors hover:text-[var(--accent-primary)]" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="primary-button" onClick={() => setIsMenuOpen(false)}>
              무료 점검 신청 / 문의
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
