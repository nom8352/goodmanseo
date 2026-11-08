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
        description="구글 검색과 지도에서 가게가 보이게 하는 법, 구글 비즈니스 프로필, 리뷰, 홈페이지 기본기를 브리즈번 한인 사장님 눈높이로 정리합니다."
        path="/blog"
        keywords={['굿맨SEO 블로그', '구글 상위 노출 방법', '구글 비즈니스 프로필', '로컬 SEO', '호주 소상공인']}
      />
      <div className="container max-w-5xl">
        <div className="section-heading max-w-4xl">
          <div className="eyebrow-chip w-fit">
            <BookOpen size={15} />
            Blog
          </div>
          <h1 className="section-title mt-6 max-w-4xl">블로그</h1>
          <p className="section-copy max-w-2xl">
            구글에서 가게가 보이게 하는 법을
            <br />
            사장님 눈높이로 정리했습니다.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid gap-5 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="article-card group overflow-hidden transition duration-200 hover:border-[#102133]/15"
              >
                <div className="article-card__thumb aspect-[16/9] min-h-0">
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    className={`h-full w-full transition duration-500 group-hover:scale-[1.03] ${post.imageLayout === 'portrait' ? 'bg-[#f4f4f1] object-contain' : 'object-cover'}`}
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
