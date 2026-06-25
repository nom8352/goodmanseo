import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import Seo from '../components/Seo';
import { blogPosts, getBlogPostById } from '../data/blogPosts';

const serviceCtas = {
  'AI 웹디자인': {
    eyebrow: 'AI 웹디자인 점검',
    title: 'AI 초안을 실제 문의 흐름에 맞게 정리하고 싶다면',
    description:
      '고객, 서비스, 신뢰 요소, 문의 버튼까지 먼저 잡아야 AI로 만든 홈페이지도 실제 비즈니스에 맞게 보입니다.',
    primaryText: 'AI 실전 멘토링 문의하기',
    primaryTo: '/contact?type=ai-mentoring',
    secondaryText: 'AI 서비스 보기',
    secondaryTo: '/ai-business',
  },
  '구글 비즈니스 프로필': {
    eyebrow: '구글 프로필 점검',
    title: '구글에서 보이는 기본 정보부터 정리하세요',
    description:
      '영업시간, 연락처, 서비스 설명, 사진처럼 고객이 먼저 보는 정보를 확인하면 어디부터 고칠지 빨리 보입니다.',
    primaryText: '구글 프로필 문의하기',
    primaryTo: '/contact?type=gbp-setup',
    secondaryText: '서비스 가격 보기',
    secondaryTo: '/pricing',
  },
  '온라인 기본기': {
    eyebrow: '홈페이지 연결 점검',
    title: '관심을 실제 문의로 이어지게 만들려면',
    description:
      '게시물을 더 올리기보다 홈페이지와 구글 비즈니스 기본 정보가 먼저 맞는지 확인하는 편이 현실적입니다.',
    primaryText: '무료 점검 신청하기',
    primaryTo: '/contact?type=free-check',
    secondaryText: '진단 서비스 보기',
    secondaryTo: '/pricing',
  },
  '홈페이지 제작': {
    eyebrow: '홈페이지 문의 흐름',
    title: '새 홈페이지 전에 고객이 막히는 지점을 먼저 확인하세요',
    description:
      '메시지, 신뢰 요소, 문의 버튼, 다른 채널 연결을 먼저 보면 새로 만들지 고칠지 판단하기 쉬워집니다.',
    primaryText: '홈페이지 제작 문의하기',
    primaryTo: '/contact?type=starter-homepage',
    secondaryText: '홈페이지 패키지 보기',
    secondaryTo: '/pricing',
  },
  SEO: {
    eyebrow: 'SEO 기본 세팅',
    title: '검색 작업 전에 사이트와 구글 프로필이 준비됐는지 봅니다',
    description:
      '키워드만 넣기보다 페이지 제목, 서비스 설명, 문의 경로, 구글 비즈니스 프로필을 함께 맞추는 편이 현실적입니다.',
    primaryText: 'SEO 문의하기',
    primaryTo: '/contact?type=seo-start-package',
    secondaryText: 'SEO 서비스 보기',
    secondaryTo: '/pricing',
  },
  'AI 온라인 운영': {
    eyebrow: 'AI 운영 정리',
    title: '반복되는 온라인 운영을 직접 다룰 수 있게 정리하세요',
    description:
      '게시물 초안, 리뷰 답변, 고객 안내문처럼 자주 반복되는 일을 AI와 함께 가볍게 관리할 수 있습니다.',
    primaryText: 'AI 멘토링 문의하기',
    primaryTo: '/contact?type=ai-mentoring',
    secondaryText: 'AI 강의 보기',
    secondaryTo: '/ai-course',
  },
};

const defaultServiceCta = {
  eyebrow: '기본 상태 점검',
  title: '홈페이지와 구글 비즈니스부터 확인하세요',
  description:
    '고객이 검색해서 보고 문의하기까지 필요한 기본 정보와 홈페이지 흐름을 먼저 확인합니다.',
  primaryText: '무료 점검 신청하기',
  primaryTo: '/contact?type=free-check',
  secondaryText: '서비스 보기',
  secondaryTo: '/pricing',
};

const getRelatedPosts = (currentPost) =>
  blogPosts
    .filter((candidate) => candidate.id !== currentPost.id)
    .map((candidate, index) => ({
      ...candidate,
      relatedScore: candidate.category === currentPost.category ? 2 : 0,
      originalIndex: index,
    }))
    .sort((a, b) => b.relatedScore - a.relatedScore || a.originalIndex - b.originalIndex)
    .slice(0, 3);

const BlogDetail = () => {
  const { postId } = useParams();
  const post = getBlogPostById(postId);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post);
  const serviceCta = serviceCtas[post.category] || defaultServiceCta;
  const publishedDate = post.date.replaceAll('.', '-').slice(0, 10);

  return (
    <div className="pt-32 pb-24">
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.id}`}
        image={`https://goodmanseo.com${post.image}`}
        imageAlt={post.imageAlt}
        keywords={['호주 홈페이지 제작', '시드니 홈페이지 제작', post.category, post.title, '구글 비즈니스 세팅']}
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
          image: `https://goodmanseo.com${post.image}`,
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

          <figure className="mt-8 overflow-hidden rounded-2xl border border-[#005b70]/8 bg-white">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="aspect-[16/9] w-full object-cover"
              loading="eager"
            />
          </figure>

          <div className="detail-body mt-10">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-[#005b70]/10 bg-[#f2fafb] p-6 sm:p-8">
            <p className="text-sm font-extrabold text-accent-primary">{serviceCta.eyebrow}</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-black tracking-[-0.04em] text-text-main">
              {serviceCta.title}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-muted">
              {serviceCta.description}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link to={serviceCta.primaryTo} className="primary-button inline-flex">
                {serviceCta.primaryText}
                <ArrowRight size={18} />
              </Link>
              <Link to={serviceCta.secondaryTo} className="secondary-button inline-flex">
                {serviceCta.secondaryText}
              </Link>
            </div>
          </div>

          <aside className="mt-12 border-t border-[#005b70]/10 pt-8" aria-labelledby="related-posts-heading">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-extrabold text-accent-primary">함께 보면 좋은 글</p>
                <h2 id="related-posts-heading" className="mt-2 text-2xl font-black tracking-[-0.04em]">
                  같은 문제를 다른 채널에서도 확인해보세요
                </h2>
              </div>
              <Link to="/blog" className="secondary-button secondary-button--compact inline-flex self-start sm:self-auto">
                전체 글 보기
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="article-card group overflow-hidden transition duration-200 hover:border-[#005b70]/15"
                >
                  <div className="article-card__thumb aspect-[16/9] min-h-0">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.imageAlt}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <div className="article-card__body">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="text-xs font-bold text-accent-primary">{relatedPost.category}</span>
                      <ArrowRight size={17} className="shrink-0 text-text-soft transition group-hover:translate-x-1 group-hover:text-accent-primary" />
                    </div>
                    <h3 className="text-base font-black leading-snug tracking-[-0.04em] text-text-main transition group-hover:text-accent-primary">
                      {relatedPost.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-muted">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </aside>

          <div className="mt-12 border-t border-[#005b70]/10 pt-8">
            <p className="text-base leading-relaxed text-text-muted">
              지금 내 비즈니스가 온라인에서 어떻게 보이는지 먼저 확인하고 싶다면,
              무료 점검으로 홈페이지와 구글 비즈니스 기본 상태부터 확인해보세요.
            </p>
            <Link to="/contact?type=free-check" className="primary-button mt-6 inline-flex">
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
