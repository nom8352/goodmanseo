import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { blogPosts } from '../src/data/blogPosts.js';
import {
  createBlogPostingJsonLd,
  createServiceJsonLd,
  createWebPageJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from '../src/data/siteSeo.js';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');
const defaultImage = 'https://goodmanseo.com/og-image.png';

const formatPostDate = (date) => date.replaceAll('.', '-');
const canonicalForRoute = (route) => `https://goodmanseo.com${route === '/' ? '/' : `${route}/`}`;

const baseRoutePages = [
  {
    route: '/',
    title: '홈 | Goodman SEO',
    description:
      'Goodman SEO는 호주와 시드니 비즈니스를 위해 홈페이지 제작, 구글 지도/검색 등록, 홈페이지 방문 확인 연결, 3개월 안심 유지보수까지 쉽게 시작할 수 있는 기본 세팅을 제공합니다.',
    canonical: canonicalForRoute('/'),
    type: 'website',
    keywords:
      '호주 홈페이지 제작, 시드니 홈페이지 제작, 호주 구글 지도 등록, 시드니 구글 지도 등록, 비즈니스 홈페이지 제작',
    jsonLd: [organizationJsonLd, websiteJsonLd],
  },
  {
    route: '/starter-package',
    title: '홈페이지 제작 | Goodman SEO',
    description:
      'Goodman SEO의 호주와 시드니 비즈니스를 위한 홈페이지 제작 안내 페이지입니다. 구글 지도/검색 등록, 홈페이지 방문 확인 연결, 3개월 안심 유지보수까지 포함됩니다.',
    canonical: canonicalForRoute('/starter-package'),
    type: 'website',
    keywords:
      '호주 홈페이지 제작, 시드니 홈페이지 제작, 호주 비즈니스 홈페이지, 구글 지도 등록 포함 홈페이지, 호주 홈페이지 상담',
    jsonLd: [
      organizationJsonLd,
      createServiceJsonLd({
        name: 'Goodman SEO 기본 홈페이지',
        description:
          '호주와 시드니 비즈니스를 위한 기본 홈페이지 제작, 구글 지도/검색 등록, 문의 연결, 초기 유지보수 서비스입니다.',
        path: '/starter-package',
        serviceType: 'Website design and local SEO setup',
      }),
    ],
  },
  {
    route: '/pricing',
    title: '서비스 및 가격 | Goodman SEO',
    description:
      'Goodman SEO의 호주와 시드니 비즈니스를 위한 서비스 및 가격 안내 페이지입니다. 홈페이지 제작, 구글 비즈니스 세팅, 기본 SEO, 기본 소셜 링크 연결 지원 범위를 확인할 수 있습니다.',
    canonical: canonicalForRoute('/pricing'),
    type: 'website',
    keywords:
      '호주 홈페이지 제작 가격, 시드니 홈페이지 제작 가격, 호주 홈페이지 비용, 비즈니스 홈페이지 가격, 구글 지도 등록 가격',
    jsonLd: [
      organizationJsonLd,
      createServiceJsonLd({
        name: 'Goodman SEO 서비스 및 가격',
        description:
          '무료 점검, 퀵 진단, 홈페이지 제작, SEO 패키지, 구글 비즈니스 프로필 세팅을 포함한 기본 온라인 세팅 서비스입니다.',
        path: '/pricing',
        serviceType: 'Website, Google Business Profile, and SEO setup services',
      }),
    ],
  },
  {
    route: '/blog',
    title: '블로그 | Goodman SEO',
    description:
      '호주와 시드니 비즈니스를 위한 Goodman SEO의 블로그입니다. 구글 지도/검색 등록, 홈페이지 기본기, 고객 유입에 대한 쉬운 가이드를 제공합니다.',
    canonical: canonicalForRoute('/blog'),
    type: 'website',
    keywords:
      '호주 구글 지도 등록 가이드, 시드니 홈페이지 제작 가이드, 비즈니스 홈페이지, 고객 유입 기본기',
    jsonLd: [
      createWebPageJsonLd({
        name: 'Goodman SEO 블로그',
        description:
          '호주와 시드니 비즈니스를 위한 구글 비즈니스 프로필, 홈페이지, 기본 SEO 가이드입니다.',
        path: '/blog',
        type: 'Blog',
      }),
    ],
  },
  {
    route: '/contact',
    title: '상담 신청 | Goodman SEO',
    description:
      'Goodman SEO 상담 신청 페이지입니다. 호주와 시드니 비즈니스를 위한 홈페이지 제작, 구글 비즈니스 세팅, 기본 SEO 문의를 받고 있습니다.',
    canonical: canonicalForRoute('/contact'),
    type: 'website',
    keywords:
      '호주 홈페이지 상담, 시드니 홈페이지 상담, 호주 구글 지도 등록 상담, 비즈니스 홈페이지 문의',
    jsonLd: [
      createWebPageJsonLd({
        name: 'Goodman SEO 상담 신청',
        description:
          '호주와 시드니 비즈니스를 위한 무료 점검 및 홈페이지, SEO, 구글 비즈니스 상담 신청 페이지입니다.',
        path: '/contact',
        type: 'ContactPage',
      }),
    ],
  },
  {
    route: '/ai-business',
    title: 'AI 비즈니스 멘토링 | Goodman SEO',
    description:
      'Goodman SEO의 AI 비즈니스 멘토링 안내 페이지입니다. 소상공인을 위한 AI 자동화, 업무 생산성 향상, 맞춤형 멘토링 서비스를 만나보세요.',
    canonical: canonicalForRoute('/ai-business'),
    type: 'website',
    keywords:
      '호주 AI 멘토링, 시드니 AI 자동화, 소상공인 AI 자동화, 업무 생산성 AI, 비즈니스 AI 솔루션',
    jsonLd: [
      organizationJsonLd,
      createServiceJsonLd({
        name: 'Goodman SEO AI 비즈니스 멘토링',
        description:
          '소상공인을 위한 AI 실전 멘토링, 업무 자동화, 콘텐츠 및 고객 응대 자동화 서비스입니다.',
        path: '/ai-business',
        serviceType: 'AI mentoring and business automation service',
      }),
    ],
  },
  {
    route: '/ai-course',
    title: '사장님을 위한 Codex AI 실무 자동화 강의 | Goodman SEO',
    description:
      '굳팀장이 진행하는 비개발자용 Codex AI 실무 자동화 강의입니다. 콘텐츠 기획, 문장 작성, 고객 응대, 반복 업무 정리를 사장님 눈높이에 맞춰 배울 수 있습니다.',
    canonical: canonicalForRoute('/ai-course'),
    type: 'website',
    keywords:
      'Codex 강의, AI 실무 자동화, 비개발자 AI 강의, 사장님 AI 강의, 굳팀장, GoodmanSEO AI 교육',
    jsonLd: [
      createWebPageJsonLd({
        name: '사장님을 위한 Codex AI 실무 자동화 강의',
        description:
          '비개발자와 소상공인을 위한 GoodmanSEO / 굳팀장 Codex AI 실무 자동화 강의 소개 페이지입니다.',
        path: '/ai-course',
      }),
    ],
  },
  {
    route: '/privacy',
    title: '개인정보처리방침 | Goodman SEO',
    description:
      'Goodman SEO의 개인정보처리방침 안내 페이지입니다. 이용자분들의 소중한 개인정보를 안전하게 처리 및 보관하기 위한 기준을 담고 있습니다.',
    canonical: canonicalForRoute('/privacy'),
    type: 'website',
    keywords:
      '굿맨SEO 개인정보처리방침, 개인정보처리방침, Goodman SEO privacy policy',
    jsonLd: [
      createWebPageJsonLd({
        name: 'Goodman SEO 개인정보처리방침',
        description: 'Goodman SEO 개인정보처리방침 안내 페이지입니다.',
        path: '/privacy',
      }),
    ],
  },
  {
    route: '/terms',
    title: '이용약관 | Goodman SEO',
    description:
      'Goodman SEO의 서비스 이용약관 안내 페이지입니다. 서비스 이용에 따른 권리, 의무, 책임사항 및 기타 필요한 사항을 규정합니다.',
    canonical: canonicalForRoute('/terms'),
    type: 'website',
    keywords:
      '굿맨SEO 이용약관, 서비스 이용약관, Goodman SEO terms of service',
    jsonLd: [
      createWebPageJsonLd({
        name: 'Goodman SEO 이용약관',
        description: 'Goodman SEO 서비스 이용약관 안내 페이지입니다.',
        path: '/terms',
      }),
    ],
  },
];

const blogRoutePages = blogPosts.map((post) => ({
  route: `/blog/${post.id}`,
  title: `${post.title} | Goodman SEO`,
  description: post.excerpt,
  canonical: canonicalForRoute(`/blog/${post.id}`),
  image: `https://goodmanseo.com${post.image}`,
  imageAlt: post.imageAlt,
  type: 'article',
  keywords: `굿맨SEO, ${post.category}, 호주 비즈니스, 온라인 기본기, 구글 비즈니스 프로필`,
  lastmod: formatPostDate(post.date),
  jsonLd: createBlogPostingJsonLd(post),
}));

const routePages = [
  ...baseRoutePages,
  ...blogRoutePages,
];

const replaceTag = (html, pattern, replacement) => {
  if (!pattern.test(html)) {
    return html;
  }

  pattern.lastIndex = 0;
  return html.replace(pattern, replacement);
};

const applySeo = (html, page) => {
  let nextHtml = html;
  const pageImage = page.image || defaultImage;
  const pageImageAlt = page.imageAlt || 'Goodman SEO 대표 이미지';

  nextHtml = replaceTag(nextHtml, /<title>.*?<\/title>/s, `<title>${page.title}</title>`);
  nextHtml = replaceTag(
    nextHtml,
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/s,
    `<meta name="description" content="${page.description}" />`,
  );
  nextHtml = replaceTag(
    nextHtml,
    /<meta\s+name="keywords"\s+content="[^"]*"\s*\/?>/s,
    `<meta name="keywords" content="${page.keywords}" />`,
  );
  nextHtml = replaceTag(
    nextHtml,
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/s,
    `<meta property="og:title" content="${page.title}" />`,
  );
  nextHtml = replaceTag(
    nextHtml,
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/s,
    `<meta property="og:description" content="${page.description}" />`,
  );
  nextHtml = replaceTag(
    nextHtml,
    /<meta\s+property="og:type"\s+content="[^"]*"\s*\/?>/s,
    `<meta property="og:type" content="${page.type}" />`,
  );
  nextHtml = replaceTag(
    nextHtml,
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/s,
    `<meta property="og:url" content="${page.canonical}" />`,
  );
  nextHtml = replaceTag(
    nextHtml,
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/s,
    `<meta property="og:image" content="${pageImage}" />`,
  );
  nextHtml = replaceTag(
    nextHtml,
    /<meta\s+property="og:image:alt"\s+content="[^"]*"\s*\/?>/s,
    `<meta property="og:image:alt" content="${pageImageAlt}" />`,
  );
  nextHtml = replaceTag(
    nextHtml,
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/s,
    `<meta name="twitter:title" content="${page.title}" />`,
  );
  nextHtml = replaceTag(
    nextHtml,
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/s,
    `<meta name="twitter:description" content="${page.description}" />`,
  );
  nextHtml = replaceTag(
    nextHtml,
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/s,
    `<meta name="twitter:image" content="${pageImage}" />`,
  );
  nextHtml = replaceTag(
    nextHtml,
    /<meta\s+name="twitter:image:alt"\s+content="[^"]*"\s*\/?>/s,
    `<meta name="twitter:image:alt" content="${pageImageAlt}" />`,
  );
  nextHtml = replaceTag(
    nextHtml,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/s,
    `<link rel="canonical" href="${page.canonical}" />`,
  );
  nextHtml = applyJsonLd(nextHtml, page.jsonLd);

  return nextHtml;
};

const renderJsonLdScript = (jsonLd) => {
  const serializedJsonLd = JSON.stringify(jsonLd, null, 2).replaceAll('<', '\\u003c');
  return `<script id="seo-json-ld" type="application/ld+json">${serializedJsonLd}</script>`;
};

const applyJsonLd = (html, jsonLd) => {
  if (!jsonLd) {
    return html;
  }

  const script = renderJsonLdScript(jsonLd);
  const jsonLdPattern = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/s;

  if (jsonLdPattern.test(html)) {
    return html.replace(jsonLdPattern, script);
  }

  return html.replace('</head>', `    ${script}\n  </head>`);
};

const writeRouteHtml = async (page, baseHtml) => {
  const html = applySeo(baseHtml, page);

  if (page.route === '/') {
    await writeFile(indexPath, html, 'utf8');
    return;
  }

  const targetDir = path.join(distDir, page.route.replace(/^\//, ''));
  await mkdir(targetDir, { recursive: true });
  await writeFile(path.join(targetDir, 'index.html'), html, 'utf8');
};

const run = async () => {
  const template = await readFile(indexPath, 'utf8');
  await Promise.all(routePages.map((page) => writeRouteHtml(page, template)));
};

run().catch((error) => {
  console.error('Failed to generate static pages.', error);
  process.exit(1);
});
