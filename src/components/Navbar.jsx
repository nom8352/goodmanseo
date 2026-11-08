import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const NAV_CONTENT = {
  ko: {
    homePath: '/',
    meta: '브리즈번 로컬 SEO · 구글 상위 노출',
    links: [
      { name: '홈', href: '/' },
      { name: '서비스 및 가격', href: '/pricing' },
      { name: '작업 방식', href: '/#how' },
      { name: '블로그', href: '/blog' },
    ],
    contactPath: '/contact?type=free-check',
    contactLabel: '무료 순위 점검',
    menuOpen: '메뉴 열기',
    menuClose: '메뉴 닫기',
    languagePath: null,
    languageLabel: 'EN',
    languageAria: 'View this website in English',
  },
  en: {
    homePath: '/en',
    meta: 'LOCAL GOOGLE RANKINGS · BRISBANE',
    links: [
      { name: 'Home', href: '/en' },
      { name: 'How It Works', href: '/en#how' },
      { name: 'Programs', href: '/en#programs' },
    ],
    contactPath: '/en/contact?type=free-check',
    contactLabel: 'Free Ranking Check',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    languagePath: '/',
    languageLabel: 'KR',
    languageAria: '한국어 홈페이지 보기',
  },
};

const Navbar = ({ locale = 'ko' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const content = NAV_CONTENT[locale] || NAV_CONTENT.ko;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'nav-shell nav-shell--solid' : 'nav-shell'}`}>
      <div className="container flex items-center justify-between gap-6 px-6 md:px-4">
        <Link to={content.homePath} className="site-mark">
          <span className="site-mark__title">GOODMANSEO</span>
          <span className="site-mark__meta">{content.meta}</span>
        </Link>

        <div className="hidden items-center gap-5 md:flex lg:gap-8">
          {content.links.map((link) => (
            <Link key={link.name} to={link.href} className="text-xs font-black text-[#102133]/78 transition-colors hover:text-[#102133]">
              {link.name}
            </Link>
          ))}
          {content.languagePath ? (
            <Link
              to={content.languagePath}
              aria-label={content.languageAria}
              className="inline-flex min-h-10 items-center justify-center border-x border-[#102133]/20 px-3 text-[0.68rem] font-black text-[#102133] transition hover:bg-[#102133]/5"
            >
              {content.languageLabel}
            </Link>
          ) : null}
          <Link to={content.contactPath} className="inline-flex min-h-10 items-center justify-center gap-2 rounded-[0.2rem] bg-[#102133] px-4 text-xs font-black text-white transition hover:-translate-y-0.5 hover:bg-[#172d42]">
            {content.contactLabel}
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-[#102133] md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? content.menuClose : content.menuOpen}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-[#ded8cf] bg-[#f7f2ec]/98 py-12 shadow-lg backdrop-blur-2xl md:hidden">
          <div className="container flex flex-col items-center gap-8">
            {content.links.map((link) => (
              <Link key={link.name} to={link.href} className="text-xl font-bold text-[#102133] transition-colors hover:text-[#2d6fa3]" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </Link>
            ))}
            {content.languagePath ? (
              <Link to={content.languagePath} className="text-sm font-black text-[#102133]" onClick={() => setIsMenuOpen(false)} aria-label={content.languageAria}>
                {content.languageLabel}
              </Link>
            ) : null}
            <Link to={content.contactPath} className="inline-flex min-h-12 items-center justify-center bg-[#102133] px-6 text-sm font-black text-white" onClick={() => setIsMenuOpen(false)}>
              {content.contactLabel}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
