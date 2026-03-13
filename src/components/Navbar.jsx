import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

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
    { name: '홈 (Home)', href: '/' },
    { name: '스타터 패키지 (Starter Package)', href: '/starter-package' },
    { name: '포트폴리오 (Portfolio)', href: '/portfolio' },
    { name: '상담 신청 (Contact)', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tighter">
          <Rocket className="text-accent-primary" size={28} />
          <span>GOODMAN<span className="text-accent-primary">SEO</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-accent-primary transition-colors">
              {link.name}
            </a>
          ))}
          <a href="/contact" className="px-6 py-2 rounded-full glass border-accent-primary text-accent-primary text-sm font-bold hover:bg-accent-primary hover:text-white transition-all">
            무료 상담하기
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass py-8 flex flex-col items-center gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <a href="/contact" className="px-8 py-3 rounded-full bg-accent-primary text-white font-bold" onClick={() => setIsMenuOpen(false)}>
            무료 상담하기
          </a>
        </div>
      )}
      
      <style jsx>{`
        .text-accent-primary { color: var(--accent-primary); }
        .bg-accent-primary { background: var(--accent-primary); }
        .border-accent-primary { border-color: var(--accent-primary); }
        .container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 20px; display: flex; align-items: center; }
        nav { display: flex; align-items: center; box-sizing: border-box; }
        .animate-in { animation: fadeIn 0.3s ease-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </nav>
  );
};

export default Navbar;
