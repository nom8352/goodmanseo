import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF } from '../data/contact';

const FOOTER_CONTENT = {
  ko: {
    homePath: '/',
    meta: '브리즈번 로컬 SEO · 구글 상위 노출',
    description: <>브리즈번 로컬 비즈니스 구글 상위 노출 · 로컬 SEO.<br />North Lakes 기반, 한국어 상담.</>,
    quickHeading: '빠른 메뉴',
    quickLinks: [
      ['홈', '/'],
      ['서비스 및 가격', '/pricing'],
      ['작업 방식', '/#how'],
      ['블로그', '/blog'],
    ],
    servicesHeading: '프로그램',
    serviceLinks: [
      ['무료 순위 점검', '/pricing#programs'],
      ['구글 상위 노출 3개월 프로그램', '/pricing#programs'],
      ['월 유지 관리', '/pricing#programs'],
      ['홈페이지 제작 (필요 시)', '/pricing#website'],
    ],
    contactHeading: '문의하기',
    contactPath: '/contact?type=free-check',
    contactLabel: '무료 순위 점검',
    location: 'North Lakes, Brisbane QLD · 호주 전역 온라인 진행',
    privacy: '개인정보처리방침',
    terms: '이용약관',
  },
  en: {
    homePath: '/en',
    meta: 'LOCAL GOOGLE RANKINGS · BRISBANE',
    description: <>We get local businesses found on Google<br />when customers search for what they do.</>,
    quickHeading: 'Quick Links',
    quickLinks: [
      ['Home', '/en'],
      ['How It Works', '/en#how'],
      ['Programs', '/en#programs'],
      ['Free Ranking Check', '/en/contact?type=free-check'],
    ],
    servicesHeading: 'Programs',
    serviceLinks: [
      ['Free Ranking Check', '/en#programs'],
      ['3-Month Google Ranking Program', '/en#programs'],
      ['Monthly Care', '/en#programs'],
    ],
    contactHeading: 'Contact',
    contactPath: '/en/contact?type=free-check',
    contactLabel: 'Free Ranking Check',
    location: 'North Lakes, Brisbane QLD · Online across Australia',
    privacy: 'Privacy Policy (KR)',
    terms: 'Terms of Use (KR)',
  },
};

const Footer = ({ locale = 'ko' }) => {
  const content = FOOTER_CONTENT[locale] || FOOTER_CONTENT.ko;

  return (
    <footer className="border-t border-white/10 bg-[#0f2132] py-9 text-[#aebbc7] md:py-12">
      <div className="container px-6">
        <div className="grid grid-cols-2 gap-x-8 gap-y-7 lg:grid-cols-[1.45fr_0.8fr_0.9fr_1.1fr] lg:gap-10">
          {/* Brand Column */}
          <div className="footer-brand col-span-2 flex flex-col items-start lg:col-span-1">
            <Link to={content.homePath} className="site-mark site-mark--footer">
              <span className="site-mark__title">GOODMANSEO</span>
              <span className="site-mark__meta">{content.meta}</span>
            </Link>

            <p className="mt-4 max-w-[24rem] text-[0.78rem] font-normal leading-relaxed text-[#aebbc7] md:mt-5 md:text-[0.82rem]">
              {content.description}
            </p>

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
            </div>
          </div>

          {/* Quick Menu Column */}
          <div className="footer-links">
            <h4 className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#d9e2ea] md:mb-4 md:text-[0.72rem]">{content.quickHeading}</h4>
            <ul className="flex flex-col gap-2 text-[0.78rem] font-normal md:gap-2.5 md:text-[0.82rem]">
              {content.quickLinks.map(([label, href]) => (
                <li key={label}><Link to={href} className="text-[#aebbc7] transition hover:text-[#eef3f7]">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Programs Column */}
          <div className="footer-links">
            <h4 className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#d9e2ea] md:mb-4 md:text-[0.72rem]">{content.servicesHeading}</h4>
            <ul className="flex flex-col gap-2 text-[0.78rem] font-normal md:gap-2.5 md:text-[0.82rem]">
              {content.serviceLinks.map(([label, href]) => (
                <li key={label}><Link to={href} className="text-[#aebbc7] transition hover:text-[#eef3f7]">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-contact col-span-2 flex flex-col items-start lg:col-span-1">
            <h4 className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#d9e2ea] md:mb-4 md:text-[0.72rem]">{content.contactHeading}</h4>
            <ul className="flex w-full flex-col items-start gap-3 text-[0.78rem] font-normal text-[#aebbc7] md:gap-3.5 md:text-[0.82rem]">
              <li className="flex min-w-0 items-center gap-3">
                <Phone size={14} className="shrink-0 text-[#8fa0af]" />
                <a href={CONTACT_PHONE_HREF} className="text-[#aebbc7] transition hover:text-[#eef3f7]">{CONTACT_PHONE_DISPLAY}</a>
              </li>
              <li className="flex min-w-0 items-center gap-3">
                <Mail size={14} className="shrink-0 text-[#8fa0af]" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="break-all text-[#aebbc7] transition hover:text-[#eef3f7]">{CONTACT_EMAIL}</a>
              </li>
              <li className="flex min-w-0 items-start gap-3">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#8fa0af]" />
                <span className="text-[#aebbc7]">{content.location}</span>
              </li>
              <li>
                <Link to={content.contactPath} className="inline-flex min-h-9 items-center justify-center gap-2 rounded-[0.2rem] border border-[#405467] bg-white/[0.04] px-3.5 text-[0.76rem] font-semibold text-[#d9e2ea] transition hover:border-[#657789] hover:bg-white/[0.08] hover:text-[#eef3f7]">
                  {content.contactLabel}
                  <ArrowUpRight size={13} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-[0.72rem] font-normal text-[#8fa0af] sm:flex-row sm:items-center sm:justify-between md:mt-10 md:gap-4 md:pt-6 md:text-[0.76rem]">
          <p>© 2026 GOODMANSEO. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link to="/privacy" className="text-[#8fa0af] transition hover:text-[#d9e2ea]">{content.privacy}</Link>
            <span className="select-none text-white/20">|</span>
            <Link to="/terms" className="text-[#8fa0af] transition hover:text-[#d9e2ea]">{content.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
