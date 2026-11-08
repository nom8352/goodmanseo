import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Download } from 'lucide-react';
import Seo from '../components/Seo';
import { blogPosts, getBlogPostById } from '../data/blogPosts';

const serviceCtas = {
  'AI 웹디자인': {
    eyebrow: '홈페이지와 검색어',
    title: 'AI로 만든 홈페이지도 검색어에 맞아야 손님이 찾습니다',
    description:
      '디자인보다 먼저 볼 것은 지역, 서비스, 문의 방법이 글로 분명히 적혀 있는지입니다. 지금 몇 위인지부터 무료로 확인해 드립니다.',
    primaryText: '무료 순위 점검 신청',
    primaryTo: '/contact?type=free-check',
    secondaryText: '진행 방식 보기',
    secondaryTo: '/#how',
  },
  '구글 비즈니스 프로필': {
    eyebrow: '구글 프로필',
    title: '프로필을 채우는 것이 순위의 시작입니다',
    description:
      '카테고리, 서비스, 지역, 사진, 리뷰가 채워진 프로필이 지도에서 먼저 보입니다. 3개월 프로그램의 첫 달에 하는 일이에요.',
    primaryText: '프로그램 상담하기',
    primaryTo: '/contact?type=ranking-program',
    secondaryText: '서비스 및 가격 보기',
    secondaryTo: '/pricing',
  },
  '온라인 기본기': {
    eyebrow: '기본 정보 점검',
    title: '손님이 검색해서 찾아오게 만들려면',
    description:
      '게시물을 더 올리기보다 구글 프로필과 홈페이지 정보가 손님이 치는 검색어와 맞는지 먼저 확인하는 편이 현실적입니다.',
    primaryText: '무료 순위 점검 신청',
    primaryTo: '/contact?type=free-check',
    secondaryText: '서비스 및 가격 보기',
    secondaryTo: '/pricing',
  },
  '홈페이지 제작': {
    eyebrow: '홈페이지는 도구',
    title: '새 홈페이지보다 먼저, 지금 검색에서 몇 위인지 보세요',
    description:
      '홈페이지가 없어도 구글 프로필로 시작할 수 있고, 필요하면 프로그램 안에서 1페이지를 만들어 드립니다.',
    primaryText: '무료 순위 점검 신청',
    primaryTo: '/contact?type=free-check',
    secondaryText: '홈페이지 제작 안내 보기',
    secondaryTo: '/pricing#website',
  },
  SEO: {
    eyebrow: '구글 상위 노출',
    title: '순위를 올리는 다섯 가지를 3개월 동안 같이 합니다',
    description:
      '검색어 정하기, 프로필 채우기, 리뷰 흐름, 홈페이지 정리, 월 리포트. 특별한 비법이 아니라 빠짐없이 하는 일입니다.',
    primaryText: '프로그램 상담하기',
    primaryTo: '/contact?type=ranking-program',
    secondaryText: '서비스 및 가격 보기',
    secondaryTo: '/pricing',
  },
  'AI 온라인 운영': {
    eyebrow: '유지 관리',
    title: '올라간 순위를 지키는 일은 매달 조금씩입니다',
    description:
      '프로필 소식과 사진, 리뷰 답글, 작은 수정을 매달 챙기면 순위가 흔들리지 않습니다. 직접 하셔도 되고 맡기셔도 됩니다.',
    primaryText: '월 유지 관리 문의',
    primaryTo: '/contact?type=monthly-care',
    secondaryText: '서비스 및 가격 보기',
    secondaryTo: '/pricing',
  },
};

const defaultServiceCta = {
  eyebrow: '무료 순위 점검',
  title: '지금 내 가게는 구글에서 몇 위일까요?',
  description:
    '손님이 칠 검색어 3개만 알려주시면 현재 순위와 먼저 고칠 것 한 가지를 2~3일 안에 보내드립니다.',
  primaryText: '무료 순위 점검 신청',
  primaryTo: '/contact?type=free-check',
  secondaryText: '서비스 및 가격 보기',
  secondaryTo: '/pricing',
};

const getRelatedPosts = (currentPost) =>
  blogPosts
    .filter((candidate) => candidate.id !== currentPost.id && candidate.kind !== 'ai-key-news')
    .map((candidate, index) => ({
      ...candidate,
      relatedScore: currentPost.relatedPostIds?.includes(candidate.id)
        ? 100 - currentPost.relatedPostIds.indexOf(candidate.id)
        : candidate.category === currentPost.category ? 2 : 0,
      originalIndex: index,
    }))
    .sort((a, b) => b.relatedScore - a.relatedScore || a.originalIndex - b.originalIndex)
    .slice(0, 3);

const renderContentBlock = (block, index) => {
  const key = typeof block === 'string' ? block : `${block.type}-${block.title || block.src || index}`;

  if (typeof block === 'string') {
    return <p key={key}>{block}</p>;
  }

  if (block.type === 'lead') {
    return (
      <p key={key} className="detail-lead">
        {block.text}
      </p>
    );
  }

  if (block.type === 'heading') {
    return (
      <div key={key} className="detail-section-copy">
        <h2>{block.title}</h2>
        {block.body?.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    );
  }

  if (block.type === 'links') {
    return (
      <section key={key} className="detail-section-copy">
        <h2>{block.title}</h2>
        <ul>
          {block.items.map((item) => (
            <li key={item.to}>
              {item.to.startsWith('/') ? (
                <Link to={item.to} className="underline underline-offset-4">{item.label}</Link>
              ) : (
                <a href={item.to} className="underline underline-offset-4">{item.label}</a>
              )}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (block.type === 'temperatureSummary') {
    return (
      <div key={key} className="temperature-summary">
        <div className="temperature-summary__intro">
          <h2>{block.title}</h2>
          {block.intro ? <p>{block.intro}</p> : null}
        </div>
        <div className="temperature-summary__grid">
          {block.items.map((item) => (
            <article key={item.label} className={`temperature-card temperature-card--${item.tone}`}>
              <span>{item.label}</span>
              <h3>{item.status}</h3>
              <dl>
                <div>
                  <dt>먼저 할 말</dt>
                  <dd>{item.message}</dd>
                </div>
                <div>
                  <dt>좋은 행동</dt>
                  <dd>{item.action}</dd>
                </div>
                <div>
                  <dt>피할 것</dt>
                  <dd>{item.avoid}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === 'image') {
    return (
      <figure key={key} className="detail-inline-image">
        <img src={block.src} alt={block.alt} loading="lazy" />
        {block.caption ? <figcaption>{block.caption}</figcaption> : null}
      </figure>
    );
  }

  if (block.type === 'actionRows') {
    return (
      <div key={key} className="detail-action-rows">
        <div>
          <h2>{block.title}</h2>
          {block.intro ? <p>{block.intro}</p> : null}
        </div>
        <div className="detail-action-rows__list">
          {block.rows.map((row) => (
            <article key={row.label}>
              <strong>{row.label}</strong>
              <p>{row.action}</p>
              <small>{row.example}</small>
            </article>
          ))}
        </div>
      </div>
    );
  }

  if (block.type === 'callout') {
    return (
      <div key={key} className="detail-callout">
        <h2>{block.title}</h2>
        {block.body ? <p>{block.body}</p> : null}
        {block.items?.length ? (
          <ul>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }

  if (block.type === 'newsSection') {
    return (
      <section key={key} className="ai-news-section" aria-labelledby={`ai-news-section-${index}`}>
        <h2 id={`ai-news-section-${index}`}>{block.title}</h2>
        <div className="ai-news-section__items">
          {block.items.map((item) => (
            <article key={item.headline} className="ai-news-item">
              <h3>{item.headline}</h3>
              <p>{item.summary}</p>
              <a href={item.url} target="_blank" rel="noreferrer">
                출처: {item.source}
                <ArrowRight size={15} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return null;
};

const BlogDetail = () => {
  const { postId } = useParams();
  const post = getBlogPostById(postId);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post);
  const serviceCta = serviceCtas[post.category] || defaultServiceCta;
  const publishedDate = post.date.replaceAll('.', '-').slice(0, 10);
  const isAiKeyNews = post.kind === 'ai-key-news';

  return (
    <div className="pt-32 pb-24">
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.id}`}
        image={`https://goodmanseo.com${post.image}`}
        imageAlt={post.imageAlt}
        keywords={post.keywords || ['구글 상위 노출', '로컬 SEO', post.category, post.title, '구글 비즈니스 프로필']}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
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
          ...(post.updatedDate ? { dateModified: post.updatedDate.replaceAll('.', '-') } : {}),
          image: `https://goodmanseo.com${post.image}`,
          mainEntityOfPage: `https://goodmanseo.com/blog/${post.id}`,
        }}
      />
      <div className="container max-w-5xl">
        <Link to="/blog" className="secondary-button secondary-button--compact inline-flex">
          <ArrowLeft size={16} />
          블로그로 돌아가기
        </Link>

        <article className={`showcase-panel mt-8 px-6 py-10 sm:px-10 sm:py-12 ${isAiKeyNews ? 'ai-keynews-detail' : ''}`}>
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-text-soft">
            <span className="eyebrow-chip">{post.category}</span>
            <span className="inline-flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
            {post.updatedDate ? <span>수정 {post.updatedDate}</span> : null}
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-[-0.06em] sm:text-5xl">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-muted">{post.excerpt}</p>

          <figure
            className={`mt-8 w-full overflow-hidden rounded-[0.7rem] border border-[#102133]/8 bg-white ${post.imageLayout === 'portrait' ? 'mx-auto max-w-3xl' : ''}`}
          >
            <img
              src={post.image}
              alt={post.imageAlt}
              className={post.imageLayout === 'portrait' ? 'w-full object-contain' : 'aspect-[16/9] w-full object-cover'}
              loading="eager"
            />
          </figure>

          {isAiKeyNews ? (
            <div className="mx-auto mt-4 flex w-fit flex-wrap justify-center gap-3">
              <a href={post.image} download className="secondary-button secondary-button--compact inline-flex">
                <Download size={16} />
                쇼츠·X용 9:16 이미지
              </a>
              {post.instagramImage ? (
                <a href={post.instagramImage} download className="secondary-button secondary-button--compact inline-flex">
                  <Download size={16} />
                  인스타그램용 4:5 이미지
                </a>
              ) : null}
            </div>
          ) : null}

          <div className="detail-body mt-10">
            {post.content.map((block, index) => renderContentBlock(block, index))}
          </div>

          {!isAiKeyNews ? <div className="mt-12 rounded-[0.7rem] border border-[#102133]/10 bg-[#f7f2ec] p-6 sm:p-8">
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
          </div> : null}

          {!isAiKeyNews ? <aside className="mt-12 border-t border-[#102133]/10 pt-8" aria-labelledby="related-posts-heading">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-extrabold text-accent-primary">함께 보면 좋은 글</p>
                <h2 id="related-posts-heading" className="mt-2 text-2xl font-black tracking-[-0.04em]">
                  다음 점검에 도움이 되는 글
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
                  className="article-card group overflow-hidden transition duration-200 hover:border-[#102133]/15"
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
          </aside> : null}

          {!isAiKeyNews ? <div className="mt-12 border-t border-[#102133]/10 pt-8">
            <p className="text-base leading-relaxed text-text-muted">
              지금 내 가게가 구글에서 몇 위인지 궁금하다면,
              손님이 칠 검색어 3개만 알려주세요. 현재 순위와 먼저 고칠 것 한 가지를 보내드립니다.
            </p>
            <Link to="/contact?type=free-check" className="primary-button mt-6 inline-flex">
              무료 순위 점검 신청
              <ArrowRight size={18} />
            </Link>
          </div> : null}
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
