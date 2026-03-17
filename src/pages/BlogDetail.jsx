import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
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
        keywords={['굿맨SEO', post.category, post.title, '소상공인 마케팅', '구글 비즈니스 프로필']}
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

        <article className="detail-shell mt-8">
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
  );
};

export default BlogDetail;
