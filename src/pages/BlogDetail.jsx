import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, User } from 'lucide-react';
import Seo from '../components/Seo';
import { getBlogPostById } from '../data/blogPosts';

const BlogDetail = () => {
  const { postId } = useParams();
  const post = getBlogPostById(postId);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const publishedDate = post.date.replaceAll('.', '-').slice(0, 10);

  return (
    <div className="pt-32 pb-24">
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.id}`}
        keywords={['호주 비즈니스 마케팅', '시드니 비즈니스 마케팅', post.category, post.title, '구글 지도/검색 등록']}
        imageAlt={post.title}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          author: {
            '@type': 'Organization',
            name: post.author,
          },
          publisher: {
            '@type': 'Organization',
            name: 'Goodman SEO',
            logo: {
              '@type': 'ImageObject',
              url: 'https://goodmanseo.com/favicon.png',
            },
          },
          datePublished: publishedDate,
          mainEntityOfPage: `https://goodmanseo.com/blog/${post.id}`,
        }}
      />
      <div className="container">
        <Link to="/blog" className="secondary-button secondary-button--compact inline-flex">
          <ArrowLeft size={16} />
          블로그로 돌아가기
        </Link>

        <div className="detail-layout mt-8">
          <aside className="detail-aside">
            <p className="section-kicker">Article overview</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em]">{post.category}</h2>
            <div className="mt-8 grid gap-4 text-sm text-text-muted">
              <p className="inline-flex items-center gap-2"><Calendar size={15} className="text-accent-primary" /> {post.date}</p>
              <p className="inline-flex items-center gap-2"><User size={15} className="text-accent-primary" /> {post.author}</p>
            </div>
            <p className="mt-8 text-base leading-relaxed text-text-muted">
              짧고 쉽게 읽을 수 있는 글입니다.
            </p>
            <Link to="/contact" className="primary-button mt-8 inline-flex">
              상담 이어가기
              <ArrowRight size={18} />
            </Link>
          </aside>

          <article className="detail-content">
            <div className="overflow-hidden rounded-[2rem] border border-white/10">
              <img src={post.image} alt={post.title} className="h-[360px] w-full object-cover sm:h-[460px]" />
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-text-soft">
              <span className="eyebrow-chip">{post.category}</span>
              <span className="inline-flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
              <span className="inline-flex items-center gap-2"><User size={14} /> {post.author}</span>
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-[-0.06em] sm:text-6xl">{post.title}</h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-text-muted">{post.excerpt}</p>

            <div className="detail-body mt-10">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
