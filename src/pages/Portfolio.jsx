import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: '로컬 베이커리 브랜드 리뉴얼',
      category: 'Web + GMB',
      img: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      title: '프리미엄 헤어 살롱 SNS 세팅',
      category: 'SNS + Ads',
      img: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      title: '레스토랑 통합 마케팅 패키지',
      category: 'Full Package',
      img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 4,
      title: '플라워 샵 온라인 가맹점 구축',
      category: 'Web Design',
      img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 5,
      title: '피트니스 센터 회원 확보 솔루션',
      category: 'GMB + SNS',
      img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 6,
      title: '건설 기술 전문 기업 웹사이트',
      category: 'Web Design',
      img: 'https://images.unsplash.com/photo-1541888941255-2200ec094773?auto=format&fit=crop&q=80&w=800',
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black mb-6">포트폴리오</h1>
          <p className="text-xl text-text-muted">굿맨SEO와 함께 성장한 비즈니스 파트너들을 소개합니다.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-[30px] bg-[#111]"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="glass p-6 rounded-2xl border-white/5 bg-black/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-accent-primary text-sm font-bold block mb-2">{project.category}</span>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .text-accent-primary { color: var(--accent-primary); }
        .text-text-muted { color: var(--text-muted); }
      `}</style>
    </div>
  );
};

export default Portfolio;
