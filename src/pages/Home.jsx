import React from 'react';
import Hero3D from '../components/Hero3D';
import { Layout, MapPin, Share2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const services = [
    {
      icon: <Layout size={40} className="text-accent-primary" />,
      title: '트렌디한 웹사이트',
      desc: '모바일 최적화는 기본, 고객의 시선을 사로잡는 모던한 디자인으로 브랜드의 가치를 높입니다.'
    },
    {
      icon: <MapPin size={40} className="text-accent-primary" />,
      title: '구글 마이비즈니스',
      desc: '로컬 지도 검색 상위 노출을 위한 완벽한 세팅으로 주변 고객이 우리 매장을 가장 먼저 발견하게 합니다.'
    },
    {
      icon: <Share2 size={40} className="text-accent-primary" />,
      title: 'SNS 비즈니스 세팅',
      desc: '인스타그램과 페이스북을 웹사이트와 완벽히 연동하여 자연스러운 고객 유입 경로를 구축합니다.'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center pt-0">
        <Hero3D />
        <div className="container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              복잡한 마케팅은 <span className="gradient-text">그만.</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-[800px] mx-auto leading-relaxed">
              홈페이지부터 구글, SNS까지 한 번에 끝내는<br />
              <span className="text-white font-bold">올인원 스타터 패키지</span>로 비즈니스를 시작하세요.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="/starter-package" className="px-10 py-5 bg-accent-primary text-black font-black text-lg rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,242,255,0.4)]">
                패키지 상세보기
              </a>
              <a href="/portfolio" className="px-10 py-5 glass border-white/20 text-white font-black text-lg rounded-full hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                포트폴리오 보기 <ChevronRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 bg-[#080808] relative">
        <div className="container">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">3대 핵심 서비스</h2>
            <div className="w-20 h-1 bg-accent-primary mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="glass p-10 rounded-3xl group hover:border-accent-primary transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-8 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-text-muted leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .bg-accent-primary { background: var(--accent-primary); }
        .text-accent-primary { color: var(--accent-primary); }
        .text-text-muted { color: var(--text-muted); }
        .gradient-text { 
           background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default Home;
