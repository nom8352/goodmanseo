import React from 'react';
import { Check, Info } from 'lucide-react';
import { motion } from 'framer-motion';

const StarterPackage = () => {
  const inclusions = [
    '트렌디한 모바일 최적화 웹사이트 제작',
    '구글 마이비즈니스(GMB) 로컬 검색 및 지도 완벽 세팅',
    '인스타그램 & 페이스북 비즈니스 계정 세팅 및 연동',
    '매월 성과 요약 리포트 제공 (구글, 웹 데이터)',
    'GMB 최신화 및 관리 지원',
    '웹사이트 텍스트/이미지 유지보수 (무제한)'
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6">올인원 스타터 패키지</h1>
          <p className="text-xl text-text-muted">성공적인 비즈니스의 시작을 위한 단 하나의 솔루션</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-[40px] overflow-hidden">
            <div className="p-10 md:p-16 border-b border-glass-border bg-gradient-to-br from-white/5 to-transparent">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div>
                  <h2 className="text-3xl font-bold mb-2">단일 올인원 패키지</h2>
                  <p className="text-text-muted">웹사이트 제작 + 필수 SNS 세팅 + 6개월 밀착 관리</p>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-accent-primary text-5xl font-black mb-1">$500 <span className="text-xl font-normal text-text-muted">/ 월</span></div>
                  <p className="text-sm text-text-muted font-bold">(기본 6개월 관리 포함)</p>
                </div>
              </div>
            </div>

            <div className="p-10 md:p-16">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <Info size={20} className="text-accent-primary" />
                패키지 포함 내역
              </h3>
              
              <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
                {inclusions.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="mt-1 w-5 h-5 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary shrink-0">
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-lg leading-tight">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-16 p-8 rounded-3xl bg-white/5 border border-white/10">
                <p className="text-text-muted leading-relaxed italic">
                  "대부분의 마케팅 대행사는 관리 비용을 따로 받거나, 초기 세팅 비용을 과도하게 요구합니다.<br />
                  굿맨SEO는 소상공인분들의 부담을 덜어드리기 위해 월 500불이라는 파격적인 가격으로<br />
                  기획부터 제작, 운영까지 모든 기본기를 챙겨드립니다."
                </p>
              </div>

              <div className="mt-12 text-center">
                <a href="/contact" className="inline-block px-12 py-5 bg-accent-primary text-black font-black text-xl rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,242,255,0.4)]">
                  패키지 지금 시작하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-accent-primary { color: var(--accent-primary); }
        .bg-accent-primary { background: var(--accent-primary); }
        .text-text-muted { color: var(--text-muted); }
      `}</style>
    </div>
  );
};

export default StarterPackage;
