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
    { name: '795 홈페이지', href: '/starter-package' },
    { name: '서비스 및 가격', href: '/pricing' },
    { name: '블로그', href: '/blog' },
    { name: '상담 신청', href: '/contact' },
  ];

  return (
    <nav className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'nav-shell nav-shell--solid' : 'nav-shell'}`}>
      <div className="container flex items-center justify-between gap-6 px-6 md:px-4">
        <Link to="/" className="site-mark">
          <span className="site-mark__title gradient-text">GOODMANSEO</span>
          <span className="site-mark__meta">작은 비즈니스 홈페이지와 마케팅 시작</span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="text-sm font-semibold text-text-muted transition-colors hover:text-white">
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="secondary-button secondary-button--compact">
            무료 상담하기
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <button className="text-white md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-white/10 bg-[#0d1117]/95 py-12 backdrop-blur-2xl md:hidden">
          <div className="container flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.href} className="text-xl font-bold transition-colors hover:text-accent-primary" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="primary-button" onClick={() => setIsMenuOpen(false)}>
              무료 상담하기
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
