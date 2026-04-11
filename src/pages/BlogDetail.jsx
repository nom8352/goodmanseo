import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
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
        keywords={['호주 비즈니스 마케팅', '시드니 비즈니스 마케팅', post.category, post.title, '온라인 운영']}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
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
      <div className="container max-w-5xl">
        <Link to="/blog" className="secondary-button secondary-button--compact inline-flex">
          <ArrowLeft size={16} />
          블로그로 돌아가기
        </Link>

        <article className="showcase-panel mt-8 px-6 py-10 sm:px-10 sm:py-12">
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-text-soft">
            <span className="eyebrow-chip">{post.category}</span>
            <span className="inline-flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-[-0.06em] sm:text-5xl">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-muted">{post.excerpt}</p>

          <div className="detail-body mt-10">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 border-t border-white/8 pt-8">
            <p className="text-base leading-relaxed text-text-muted">
              지금 내 비즈니스가 온라인에서 어떻게 보이는지 먼저 확인하고 싶다면,
              무료 점검으로 어디부터 손봐야 할지 순서부터 정리해보세요.
            </p>
            <Link to="/contact" className="primary-button mt-6 inline-flex">
              무료 점검 문의하기
              <ArrowRight size={18} />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
