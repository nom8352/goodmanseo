import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar, User } from 'lucide-react';
import blog1 from '../assets/blog1.png';
import blog3 from '../assets/blog3.png';

const posts = [
  {
    id: 1,
    date: '2024.03.13',
    author: 'Goodman SEO',
    title: '구글 지도에서 우리 매장이 안 보인다면? 지금 당장 세팅해야 하는 이유',
    excerpt: '고객이 가게를 찾는 첫 순간은 이미 오프라인이 아니라 검색창에서 시작됩니다.',
    image: blog1,
    category: 'Google visibility',
  },
  {
    id: 2,
    date: '2024.03.12',
    author: 'Goodman SEO',
    title: "인스타그램만 열심히 하면 될까? 내 비즈니스에 '진짜' 홈페이지가 필요한 이유",
    excerpt: 'SNS가 관심을 끈다면, 홈페이지는 그 관심을 신뢰와 문의로 바꾸는 공간입니다.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    category: 'Website basics',
  },
  {
    id: 3,
    date: '2024.03.11',
    author: 'Goodman SEO',
    title: "비싼 마케팅 업체에 속지 마세요. 소상공인에게 진짜 필요한 '온라인 기본기'",
    excerpt: '거창한 용어보다 먼저 필요한 것은 검색되고, 신뢰를 주고, 문의받는 구조입니다.',
    image: blog3,
    category: 'Starter strategy',
  },
];

const Blog = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container">
        <div className="section-heading max-w-4xl">
          <div className="eyebrow-chip w-fit">
            <BookOpen size={15} />
            Insights for small business
          </div>
          <h1 className="section-title mt-6 max-w-5xl">
            읽기 쉬운 언어로 정리한
            <br />
            굿맨SEO 인사이트
          </h1>
          <p className="section-copy max-w-2xl">
            어려운 용어보다 지금 당장 필요한 기준을 전합니다. 검색, 홈페이지, SNS를
            어떻게 연결해야 하는지 사장님 관점에서 쉽게 풀어낸 콘텐츠입니다.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="editorial-card"
          >
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
              <img src={posts[0].image} alt={posts[0].title} className="h-[360px] w-full object-cover" />
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-text-soft">
              <span className="eyebrow-chip">{posts[0].category}</span>
              <span className="inline-flex items-center gap-2"><Calendar size={14} /> {posts[0].date}</span>
              <span className="inline-flex items-center gap-2"><User size={14} /> {posts[0].author}</span>
            </div>
            <h2 className="mt-6 text-4xl font-black tracking-[-0.05em]">{posts[0].title}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-muted">{posts[0].excerpt}</p>
            <button className="secondary-button secondary-button--compact mt-8">
              더 읽어보기
              <ArrowRight size={16} />
            </button>
          </motion.article>

          <div className="grid gap-6">
            {posts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="article-card"
              >
                <div className="article-card__thumb">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                </div>
                <div className="article-card__body">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-soft">{post.category}</p>
                  <h3 className="mt-3 text-2xl font-black tracking-[-0.04em]">{post.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-text-muted">{post.excerpt}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-text-soft">
                    <span className="inline-flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                    <span className="inline-flex items-center gap-2"><User size={14} /> {post.author}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
