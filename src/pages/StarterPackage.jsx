import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Info, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

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
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 tracking-tighter">올인원 <span className="gradient-text">스타터 패키지</span></h1>
          <p className="text-lg sm:text-xl md:text-2xl text-text-muted font-medium px-4">성공적인 비즈니스의 시작을 위한 단 하나의 프리미엄 솔루션</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tilt options={{ max: 5, scale: 1.01, speed: 400, glare: true, 'max-glare': 0.1 }}>
            <div className="glass rounded-[40px] overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary opacity-0 group-hover:opacity-20 transition-opacity duration-1000"></div>
              
              <div className="p-10 md:p-16 border-b border-white/5 bg-gradient-to-br from-white/5 to-transparent relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl font-black mb-2 tracking-tight">단일 올인원 패키지</h2>
                    <p className="text-text-muted font-medium text-sm sm:text-base">웹사이트 제작 + 필수 SNS 세팅 + 6개월 밀착 관리</p>
                  </div>
                  <div className="text-center md:text-right">
                    <div className="text-white text-4xl sm:text-6xl font-black mb-1 tracking-tighter">$500 <span className="text-xl sm:text-2xl font-normal text-text-muted">/ 월</span></div>
                    <p className="text-xs sm:text-sm text-accent-primary font-bold tracking-wide uppercase">(기본 6개월 관리 포함)</p>
                  </div>
                </div>
              </div>

              <div className="p-10 md:p-16 relative z-10">
                <h3 className="text-xl font-bold mb-10 flex items-center gap-2 text-white/90">
                  <Info size={22} className="text-accent-secondary" />
                  프리미엄 패키지 포함 내역
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 sm:gap-y-8 gap-x-12">
                  {inclusions.map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-start gap-3 sm:gap-4 group/item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="mt-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary shrink-0 group-hover/item:scale-110 group-hover/item:bg-accent-primary/20 transition-all duration-300">
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={4} />
                      </div>
                      <span className="text-base sm:text-lg leading-snug font-medium text-white/80 group-hover/item:text-white transition-colors">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group/quote">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-tertiary/10 to-transparent opacity-0 group-hover/quote:opacity-100 transition-opacity duration-500"></div>
                  <p className="text-text-muted leading-relaxed font-medium relative z-10 text-base sm:text-lg">
                    "대부분의 마케팅 대행사는 관리 비용을 따로 받거나, 초기 세팅 비용을 과도하게 요구합니다.<br className="hidden sm:block" />
                    <span className="text-white font-bold">굿맨SEO</span>는 소상공인분들의 부담을 덜어드리기 위해 월 500불이라는 파격적인 가격으로<br className="hidden sm:block" />
                    기획부터 제작, 운영까지 모든 기본기를 완벽하게 챙겨드립니다."
                  </p>
                </div>

                <div className="mt-12 sm:mt-16 text-center">
                  <Link to="/contact" className="group relative inline-flex w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 bg-white text-black font-black text-lg sm:text-xl rounded-full hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] items-center justify-center gap-3 overflow-hidden">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    <span className="relative z-10 group-hover:text-white transition-colors duration-500 flex items-center gap-2">
                       <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" /> 패키지 지금 시작하기
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>


    </div>
  );
};

export default StarterPackage;
