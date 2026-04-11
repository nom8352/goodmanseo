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

        <div className="showcase-panel mt-10">
          <div className="grid gap-2">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group flex items-center justify-between gap-4 rounded-[1.25rem] border border-white/8 px-5 py-5 transition duration-200 hover:border-white/15 hover:bg-white/[0.03]"
              >
                <span className="text-lg font-bold tracking-[-0.03em] text-text-main transition group-hover:text-accent-primary sm:text-[1.35rem]">
                  {post.title}
                </span>
                <ArrowRight size={18} className="shrink-0 text-text-soft transition group-hover:translate-x-1 group-hover:text-accent-primary" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
