import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0f2132] py-9 text-[#aebbc7] md:py-12">
      <div className="container px-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-7 lg:grid-cols-[1.45fr_0.8fr_0.9fr_1.1fr] lg:gap-10">
          
          {/* Brand Column */}
          <div className="footer-brand col-span-2 flex flex-col items-start lg:col-span-1">
            <Link to="/" className="site-mark site-mark--footer">
              <span className="site-mark__title">GOODMANSEO</span>
              <span className="site-mark__meta">홈페이지 · 구글 비즈니스 · 기본 SEO</span>
            </Link>
            
            <p className="mt-4 max-w-[24rem] text-[0.78rem] font-normal leading-relaxed text-[#aebbc7] md:mt-5 md:text-[0.82rem]">
              고객이 검색해서 보고, 믿고, 문의할 수 있도록<br />
              홈페이지와 구글 기본 세팅을 정리합니다.
            </p>
            
            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-2.5 md:mt-6">
              <a 
                href="https://www.instagram.com/goodmanseo_ai/"
                target="_blank"
                rel="noreferrer"
                aria-label="GoodmanSEO 인스타그램 바로가기"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#35495c] bg-white/[0.04] text-[#aebbc7] transition hover:border-[#657789] hover:bg-white/[0.08] hover:text-[#eef3f7]"
              >
                <Instagram size={14} />
              </a>
              <a 
                href="https://www.facebook.com/goodmanseoAi"
                target="_blank"
                rel="noreferrer"
                aria-label="GoodmanSEO 페이스북 바로가기"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#35495c] bg-white/[0.04] text-[#aebbc7] transition hover:border-[#657789] hover:bg-white/[0.08] hover:text-[#eef3f7]"
              >
                <Facebook size={14} />
              </a>
              <a 
                href="https://www.youtube.com/@AI_Goodman"
                target="_blank"
                rel="noreferrer"
                aria-label="GoodmanSEO 유튜브 바로가기"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#35495c] bg-white/[0.04] text-[#aebbc7] transition hover:border-[#657789] hover:bg-white/[0.08] hover:text-[#eef3f7]"
              >
                <Youtube size={14} />
              </a>
            </div>
          </div>

          {/* Quick Menu Column */}
          <div className="footer-links">
            <h4 className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#d9e2ea] md:mb-4 md:text-[0.72rem]">빠른 메뉴</h4>
            <ul className="flex flex-col gap-2 text-[0.78rem] font-normal md:gap-2.5 md:text-[0.82rem]">
              <li>
                <Link to="/" className="text-[#aebbc7] transition hover:text-[#eef3f7]">홈</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-[#aebbc7] transition hover:text-[#eef3f7]">서비스 및 가격</Link>
              </li>
              <li>
                <Link to="/blog" className="text-[#aebbc7] transition hover:text-[#eef3f7]">블로그</Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#aebbc7] transition hover:text-[#eef3f7]">진단 / 문의 신청</Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-links">
            <h4 className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#d9e2ea] md:mb-4 md:text-[0.72rem]">서비스</h4>
            <ul className="flex flex-col gap-2 text-[0.78rem] font-normal md:gap-2.5 md:text-[0.82rem]">
              <li>
                <Link to="/pricing" className="text-[#aebbc7] transition hover:text-[#eef3f7]">홈페이지 제작</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-[#aebbc7] transition hover:text-[#eef3f7]">구글 비즈니스 세팅</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-[#aebbc7] transition hover:text-[#eef3f7]">On-page SEO</Link>
              </li>
              <li>
                <Link to="/ai-business" className="text-[#aebbc7] transition hover:text-[#eef3f7]">AI 실전 멘토링</Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-contact col-span-2 flex flex-col items-start lg:col-span-1">
            <h4 className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#d9e2ea] md:mb-4 md:text-[0.72rem]">문의하기</h4>
            <ul className="flex w-full flex-col items-start gap-3 text-[0.78rem] font-normal text-[#aebbc7] md:gap-4 md:text-[0.82rem]">
              <li className="flex min-w-0 items-center gap-3">
                <Mail size={14} className="shrink-0 text-[#8fa0af]" />
                <a href="mailto:goodmanseo.sydney@gmail.com" className="break-all text-[#aebbc7] transition hover:text-[#eef3f7]">goodmanseo.sydney@gmail.com</a>
              </li>
              <li>
                <Link to="/contact" className="inline-flex min-h-9 items-center justify-center gap-2 rounded-[0.2rem] border border-[#405467] bg-white/[0.04] px-3.5 text-[0.76rem] font-semibold text-[#d9e2ea] transition hover:border-[#657789] hover:bg-white/[0.08] hover:text-[#eef3f7]">
                  무료 점검 신청 / 문의
                  <ArrowUpRight size={13} />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & terms */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-[0.72rem] font-normal text-[#8fa0af] sm:flex-row sm:items-center sm:justify-between md:mt-10 md:gap-4 md:pt-6 md:text-[0.76rem]">
          <p>© 2026 GOODMANSEO. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link to="/privacy" className="text-[#8fa0af] transition hover:text-[#d9e2ea]">개인정보처리방침</Link>
            <span className="select-none text-white/20">|</span>
            <Link to="/terms" className="text-[#8fa0af] transition hover:text-[#d9e2ea]">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
