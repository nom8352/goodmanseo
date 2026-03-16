import React from 'react';
import Hero3D from '../components/Hero3D';
import { Layout, MapPin, Share2, ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

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
      icon: <Share2 size={44} className="text-accent-tertiary" />,
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
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
              비즈니스의 시작, <br className="sm:hidden" />
              <span className="gradient-text">굿맨SEO</span>와 함께.
            </h1>
            <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-[800px] mx-auto leading-relaxed font-medium">
              홈페이지 제작부터 구글 노출, SNS 세팅까지.<br />
              <span className="text-white font-bold">올인원 스타터 패키지</span>로 복잡한 마케팅을 한 번에 끝내세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-stretch sm:items-center px-4 sm:px-0">
              <Link to="/starter-package" className="group relative px-6 sm:px-10 py-4 sm:py-5 bg-white text-black font-black text-lg sm:text-xl rounded-full hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] flex items-center justify-center gap-2 overflow-hidden">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-500 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" /> 패키지 시작하기
                </span>
              </Link>
              <Link to="/blog" className="px-6 sm:px-10 py-4 sm:py-5 glass border-white/10 text-white font-bold text-base sm:text-lg rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-2 hover:border-white/30">
                블로그 보기 <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-40 relative z-10">
        <div className="container">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">3대 핵심 서비스</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Tilt key={service.title} options={{ max: 15, scale: 1.02, speed: 400, glare: true, 'max-glare': 0.2 }}>
                <motion.div
                  className="glass p-10 h-full rounded-[32px] group hover:border-accent-primary/50 transition-colors duration-500 relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="mb-8 p-4 bg-white/5 inline-block rounded-2xl group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-xl">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-text-muted leading-relaxed text-lg font-medium">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
