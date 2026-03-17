import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar, User } from 'lucide-react';
import Seo from '../components/Seo';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  const [featuredPost, ...secondaryPosts] = blogPosts;

  return (
    <div className="pt-32 pb-24">
      <Seo
        title="블로그"
        description="소상공인을 위한 Goodman SEO의 블로그입니다. 구글 노출, 홈페이지 기본기, SNS 연결에 대한 실용적인 가이드를 제공합니다."
        path="/blog"
        keywords={['굿맨SEO 블로그', '구글 노출 가이드', '소상공인 홈페이지', 'SNS 마케팅 기본기']}
      />
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
              <img src={featuredPost.image} alt={featuredPost.title} className="h-[360px] w-full object-cover" />
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-text-soft">
              <span className="eyebrow-chip">{featuredPost.category}</span>
              <span className="inline-flex items-center gap-2"><Calendar size={14} /> {featuredPost.date}</span>
              <span className="inline-flex items-center gap-2"><User size={14} /> {featuredPost.author}</span>
            </div>
            <h2 className="mt-6 text-4xl font-black tracking-[-0.05em]">{featuredPost.title}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-muted">{featuredPost.excerpt}</p>
            <Link to={`/blog/${featuredPost.id}`} className="secondary-button secondary-button--compact mt-8 inline-flex">
              더 읽어보기
              <ArrowRight size={16} />
            </Link>
          </motion.article>

          <div className="grid gap-6">
            {secondaryPosts.map((post, index) => (
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
                  <Link to={`/blog/${post.id}`} className="secondary-button secondary-button--compact mt-6 inline-flex">
                    아티클 열기
                    <ArrowRight size={16} />
                  </Link>
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
