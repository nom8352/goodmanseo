import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import Seo from '../components/Seo';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  return (
    <div className="pt-32 pb-24">
      <Seo
        title="블로그"
        description="GoodmanSEO 블로그입니다. 구글 비즈니스 프로필, 홈페이지, SEO, 온라인 운영에 관한 실용적인 글을 정리합니다."
        path="/blog"
        keywords={['굿맨SEO 블로그', '구글 비즈니스 프로필', '홈페이지 점검', 'SEO 기본 세팅', '온라인 운영']}
      />
      <div className="container max-w-5xl">
        <div className="section-heading max-w-4xl">
          <div className="eyebrow-chip w-fit">
            <BookOpen size={15} />
            Blog
          </div>
          <h1 className="section-title mt-6 max-w-4xl">블로그</h1>
          <p className="section-copy max-w-2xl">
            구글, 홈페이지, SEO, 온라인 운영에 대해
            <br />
            실제로 바로 참고할 수 있는 내용만 정리합니다.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid gap-5 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="article-card group overflow-hidden transition duration-200 hover:border-[#005b70]/15"
              >
                <div className="article-card__thumb aspect-[16/9] min-h-0">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="article-card__body">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="text-xs font-bold text-accent-primary">{post.category}</span>
                    <ArrowRight size={17} className="shrink-0 text-text-soft transition group-hover:translate-x-1 group-hover:text-accent-primary" />
                  </div>
                  <h2 className="text-lg font-black leading-snug tracking-[-0.04em] text-text-main transition group-hover:text-accent-primary sm:text-xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
