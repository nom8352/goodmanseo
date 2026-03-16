import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
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
    { name: '홈 (Home)', href: '/' },
    { name: '스타터 패키지 (Starter Package)', href: '/starter-package' },
    { name: '블로그 (Blog)', href: '/blog' },
    { name: '상담 신청 (Contact)', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center px-6 md:px-4">
        <Link to="/" className="flex items-center gap-2 text-2xl font-black tracking-tighter hover:scale-105 transition-transform duration-300">
          <Rocket className="text-accent-primary" size={28} />
          <span className="gradient-text">GOODMANSEO</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="text-sm font-semibold text-text-muted hover:text-white transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link to="/contact" className="px-7 py-2.5 rounded-full glass border border-accent-primary/50 text-white text-sm font-bold hover:bg-accent-primary/20 hover:border-accent-primary transition-all shadow-[0_0_15px_rgba(0,242,255,0.1)] hover:shadow-[0_0_20px_rgba(0,242,255,0.3)]">
            무료 상담하기
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#030014]/95 backdrop-blur-2xl py-12 flex flex-col items-center gap-8 animate-in fade-in slide-in-from-top-4 duration-300 border-b border-white/5 shadow-2xl">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} className="text-xl font-bold hover:text-accent-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="px-10 py-4 rounded-full bg-accent-primary text-white font-black shadow-[0_0_20px_rgba(0,242,255,0.3)]" onClick={() => setIsMenuOpen(false)}>
            무료 상담하기
          </Link>
        </div>
      )}
      
      <style>{`
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
