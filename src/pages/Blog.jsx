import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import { Tilt } from 'react-tilt';

const Blog = () => {
  const posts = [
    {
      id: 1,
      date: '2024.03.13',
      author: 'Goodman SEO',
      title: '구글 지도에서 우리 매장이 안 보인다면? 지금 당장 세팅해야 하는 이유',
      excerpt: '호주에서 고객들이 새로운 식당이나 서비스를 찾을 때 가장 먼저 하는 행동은 무엇일까요? 바로 구글 검색과 구글 맵스 확인입니다.',
      content: `호주에서 고객들이 새로운 식당이나 서비스를 찾을 때 가장 먼저 하는 행동은 무엇일까요? 바로 구글 검색과 구글 맵스 확인입니다.

예를 들어, 근처에서 분위기 좋은 로컬 카페를 찾던 고객이 'Artizen'이라는 카페를 검색했다고 가정해 보겠습니다. 검색 결과에 매장의 깔끔한 전경 사진, 정확한 영업시간, 그리고 웹사이트 링크가 잘 정돈되어 나오는 곳과, 주소조차 제대로 나오지 않는 곳 중 고객은 어디를 선택할까요? 정답은 너무나 분명합니다.

구글 마이비즈니스(Google My Business) 세팅은 온라인 마케팅의 가장 기본이자, 고객이 우리 매장으로 문을 열고 들어오게 만드는 '온라인 간판'입니다. 하지만 많은 사장님들이 바쁜 생업에 쫓겨 이 중요한 기본기를 놓치고 계십니다.

복잡한 검색어 최적화(SEO) 이론을 공부하실 필요는 없습니다. 저희 Goodman SEO는 비즈니스 성격에 맞는 최적화된 구글 세팅은 물론, 고객의 시선을 사로잡는 퀄리티 높은 매장/제품 사진을 통해 첫인상부터 신뢰를 주는 완벽한 온라인 기반을 만들어 드립니다.`,
      image: 'https://images.unsplash.com/photo-1573163226872-0390176ba45e?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 2,
      date: '2024.03.12',
      author: 'Goodman SEO',
      title: "인스타그램만 열심히 하면 될까? 내 비즈니스에 '진짜' 홈페이지가 필요한 이유",
      excerpt: '"요즘은 다 인스타그램으로 찾아오니까, 홈페이지는 굳이 필요 없지 않나요?" 상담을 하다 보면 정말 많이 듣는 질문 중 하나입니다.',
      content: `"요즘은 다 인스타그램으로 찾아오니까, 홈페이지는 굳이 필요 없지 않나요?"
상담을 하다 보면 정말 많이 듣는 질문 중 하나입니다. 결론부터 말씀드리면, 인스타그램과 페이스북은 훌륭한 소통 창구지만, 그것만으로는 부족합니다.

SNS는 우리 매장의 소식을 빠르게 알리고 친근감을 주는 데 탁월합니다. 하지만 고객이 서비스 가격표를 한눈에 보고 싶거나, 메뉴를 자세히 확인하거나, 예약 시스템을 이용하고 싶을 때는 어떨까요? SNS의 피드는 계속 흘러가기 때문에 원하는 정보를 직관적으로 찾기 어렵습니다.

이때 고객을 확실하게 잡아두는 베이스캠프가 바로 '잘 만들어진 홈페이지'입니다.
SNS가 사람들에게 전단지를 나눠주며 호기심을 끄는 역할이라면, 홈페이지는 그 호기심을 확신으로 바꿔주는 세련된 쇼룸과 같습니다. 두 가지가 완벽하게 연동될 때 비로소 진정한 마케팅 시너지가 발생합니다.

감각적인 웹디자인과 소셜 미디어 세팅을 한 번에 해결하여, 흩어져 있는 고객의 관심을 확실한 매출로 연결해 보세요.`,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 3,
      date: '2024.03.11',
      author: 'Goodman SEO',
      title: "비싼 마케팅 업체에 속지 마세요. 소상공인에게 진짜 필요한 '온라인 기본기'",
      excerpt: '백링크, 알고리즘, 크로스 플랫폼... 마케팅 대행사들의 화려한 포트폴리오와 어려운 전문 용어들 앞에서 막막함을 느껴보신 적 있으신가요?',
      content: `백링크, 알고리즘, 크로스 플랫폼... 마케팅 대행사들의 화려한 포트폴리오와 어려운 전문 용어들 앞에서 막막함을 느껴보신 적 있으신가요?

수천 불의 비용을 요구하는 거창한 마케팅은 이제 막 비즈니스를 시작하시거나 온라인 홍보가 처음이신 로컬 소상공인분들에게는 몸에 맞지 않는 큰 옷과 같습니다. 지금 당장 필요한 것은 화려한 기교가 아니라, 흔들리지 않는 **'확실한 기본기'**입니다.

Goodman SEO는 불필요한 거품을 뺐습니다. 비즈니스 초기에 반드시 세팅해야 하는 3가지 핵심 요소인 1) 트렌디한 웹사이트 제작, 2) 구글 검색(GMB) 최적화, 3) SNS 비즈니스 계정 세팅을 하나의 패키지로 묶었습니다.

월 $500이라는 합리적인 비용으로 기초 공사는 물론, 6개월간 든든하게 사이트와 온라인 채널이 원활하게 굴러가도록 밀착 관리해 드립니다. 사장님은 본업인 비즈니스에만 집중하세요. 복잡하고 머리 아픈 온라인 기본기 세팅은 저희가 확실하게 책임지겠습니다.`,
      image: 'https://images.unsplash.com/photo-1454165833767-1390e50771d1?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 text-accent-primary text-xs sm:text-sm font-bold mb-4 sm:mb-6"
          >
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Insight & News
          </motion.div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 sm:mb-6 tracking-tighter px-4">
            굿맨 <span className="gradient-text">블로그</span>
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-text-muted font-medium max-w-2xl mx-auto px-6">
            사장님들의 비즈니스 성장을 위한 실질적인 마케팅 가이드를 전해드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {posts.map((post, index) => (
            <Tilt key={post.id} options={{ max: 10, scale: 1.02, speed: 400 }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-[32px] overflow-hidden group border-white/5 hover:border-white/20 transition-all flex flex-col h-full"
              >
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opactiy-0 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-accent-primary/20 backdrop-blur-md text-accent-primary text-xs font-bold border border-accent-primary/30">
                      Marketing
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-text-muted mb-4 font-bold uppercase tracking-wider">
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <Calendar size={14} className="text-accent-primary" /> {post.date}
                    </div>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <User size={14} className="text-accent-primary" /> By {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 line-clamp-2 transition-colors group-hover:text-accent-primary">
                    {post.title}
                  </h3>
                  
                  <p className="text-text-muted leading-relaxed mb-6 line-clamp-3 text-sm flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="pt-6 border-t border-white/5 mt-auto">
                    <button className="flex items-center gap-2 text-white font-bold text-sm group/btn">
                      더 읽어보기 <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
