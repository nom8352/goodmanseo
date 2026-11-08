import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { aiReportSamples } from '../src/data/aiReportSamples.js';
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
const defaultImage = 'https://goodmanseo.com/og-home-2026-07.png';

const formatPostDate = (date) => date.replaceAll('.', '-');
const canonicalForRoute = (route) => `https://goodmanseo.com${route === '/' ? '/' : `${route}/`}`;

const baseRoutePages = [
  {
    route: '/',
    title: '브리즈번 로컬 구글 상위 노출 | Goodman SEO',
    description:
      '손님이 구글에서 검색할 때 사장님 가게가 위에 나오게 합니다. 브리즈번 한인 사장님을 위한 로컬 SEO. 구글 프로필, 리뷰, 홈페이지를 검색어에 맞춰 정리하고 매달 숫자로 보고합니다.',
    canonical: canonicalForRoute('/'),
    type: 'website',
    imageAlt: 'GoodmanSEO 브리즈번 로컬 구글 상위 노출 안내',
    keywords:
      '브리즈번 구글 상위 노출, 로컬 SEO 브리즈번, 구글 비즈니스 프로필 상위 노출, 구글 지도 상위 노출, 한인 사장님 구글 노출, 노스레이크 SEO',
    jsonLd: [organizationJsonLd, websiteJsonLd],
    locale: 'ko',
    alternates: [{ lang: 'ko', route: '/' }, { lang: 'en', route: '/en' }],
  },
  {
    route: '/en',
    title: 'Local Google Rankings for Brisbane Businesses | Goodman SEO',
    description:
      'We get local service businesses found on Google in Brisbane. Google Business Profile, reviews and website copy aligned to the searches customers actually type, with monthly numbers.',
    canonical: canonicalForRoute('/en'),
    type: 'website',
    imageAlt: 'GoodmanSEO local Google rankings for Brisbane businesses',
    keywords:
      'Brisbane local SEO, Google Business Profile ranking, Google Maps ranking Brisbane, North Lakes SEO, local SEO for small business',
    jsonLd: [organizationJsonLd, websiteJsonLd],
    locale: 'en',
    alternates: [{ lang: 'ko', route: '/' }, { lang: 'en', route: '/en' }],
  },
  {
    route: '/starter-package',
    redirectTo: '/pricing',
    title: '서비스 및 가격 | Goodman SEO',
    description:
      '스타터 패키지 안내는 /pricing으로 이동했습니다. 무료 순위 점검, 구글 상위 노출 3개월 프로그램, 월 유지 관리 가격을 확인하세요.',
    canonical: canonicalForRoute('/pricing'),
    type: 'website',
    keywords:
      '구글 상위 노출 가격, 로컬 SEO 가격, 브리즈번 SEO, 무료 순위 점검',
    jsonLd: [organizationJsonLd],
  },
  {
    route: '/pricing',
    title: '구글 상위 노출 프로그램 · 서비스 및 가격 | Goodman SEO',
    description:
      '무료 순위 점검, 구글 상위 노출 3개월 프로그램 AUD 2,900, 월 유지 관리 AUD 390. 브리즈번 로컬 비즈니스를 위한 로컬 SEO 서비스 가격과 진행 순서를 확인하세요.',
    canonical: canonicalForRoute('/pricing'),
    type: 'website',
    keywords:
      '구글 상위 노출 가격, 로컬 SEO 가격, 구글 비즈니스 프로필 세팅 가격, 브리즈번 SEO, 무료 순위 점검',
    jsonLd: [
      organizationJsonLd,
      createServiceJsonLd({
        name: '구글 상위 노출 3개월 프로그램',
        description:
          '브리즈번 로컬 비즈니스를 위한 로컬 SEO 프로그램. 검색어 선정, 구글 비즈니스 프로필 세팅, 리뷰 흐름, 홈페이지 정리, 월 리포트를 3개월 동안 진행합니다.',
        path: '/pricing',
        serviceType: 'Local SEO and Google Business Profile ranking program',
      }),
    ],
  },
  {
    route: '/blog',
    title: '블로그 | Goodman SEO',
    description:
      '브리즈번과 호주 로컬 비즈니스를 위한 Goodman SEO 블로그입니다. 구글 검색과 지도에서 보이는 법, 구글 비즈니스 프로필, 리뷰, 홈페이지 기본기를 쉽게 정리합니다.',
    canonical: canonicalForRoute('/blog'),
    type: 'website',
    keywords:
      '구글 상위 노출 방법, 구글 비즈니스 프로필 가이드, 로컬 SEO 가이드, 호주 소상공인 구글 노출, 브리즈번 한인 사장님',
    jsonLd: [
      createWebPageJsonLd({
        name: 'Goodman SEO 블로그',
        description:
          '브리즈번과 호주 로컬 비즈니스를 위한 구글 상위 노출, 구글 비즈니스 프로필, 리뷰, 홈페이지 기본기 가이드입니다.',
        path: '/blog',
        type: 'Blog',
      }),
    ],
  },
  {
    route: '/contact',
    title: '무료 순위 점검 신청 | Goodman SEO',
    description:
      '손님이 칠 검색어 3개만 알려주시면 지금 몇 위인지, 안 나오는 이유, 먼저 고칠 것 한 가지를 2~3일 안에 보내드립니다. 브리즈번 한인 사장님을 위한 무료 순위 점검.',
    canonical: canonicalForRoute('/contact'),
    type: 'website',
    keywords:
      '무료 순위 점검, 구글 순위 확인, 구글 상위 노출 상담, 브리즈번 SEO 상담, 구글 비즈니스 프로필 상담',
    jsonLd: [
      createWebPageJsonLd({
        name: 'Goodman SEO 무료 순위 점검 신청',
        description:
          '브리즈번 로컬 비즈니스를 위한 무료 순위 점검과 구글 상위 노출 프로그램 상담 신청 페이지입니다.',
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
    route: '/ai-report',
    title: 'AI 비즈니스 리포트 | Goodman SEO',
    description:
      'GoodmanSEO AI 비즈니스 리포트는 홈페이지, SEO, 구글 노출, 고객 반응, 비즈니스 포지셔닝을 함께 분석해 PDF로 정리합니다.',
    canonical: canonicalForRoute('/ai-report'),
    type: 'website',
    keywords:
      'AI 비즈니스 리포트, 홈페이지 진단, SEO 오딧, 구글 비즈니스 점검, AI 고객 반응 시뮬레이션',
    jsonLd: [
      organizationJsonLd,
      createServiceJsonLd({
        name: 'GoodmanSEO AI 비즈니스 리포트',
        description:
          '홈페이지, SEO, 구글 노출, 고객 반응, 비즈니스 포지셔닝을 함께 분석해 현재 상태와 성장 방향을 정리하는 PDF 리포트 서비스입니다.',
        path: '/ai-report',
        serviceType: 'AI business consulting report',
      }),
    ],
    locale: 'ko',
    alternates: [{ lang: 'ko', route: '/ai-report' }, { lang: 'en', route: '/en/ai-report' }],
  },
  {
    route: '/en/ai-report',
    title: 'AI Business Report | Goodman SEO',
    description:
      'Review your website, SEO, Google visibility, competitors and customer response, then receive a prioritised 30-day and 90-day action roadmap.',
    canonical: canonicalForRoute('/en/ai-report'),
    type: 'website',
    keywords:
      'AI business report, business website audit, SEO audit Australia, competitor review, 90 day growth roadmap',
    jsonLd: [
      organizationJsonLd,
      createServiceJsonLd({
        name: 'GoodmanSEO AI Business Report',
        description:
          'An industry-specific business, website and SEO review with a prioritised 30-day and 90-day action roadmap.',
        path: '/en/ai-report',
        serviceType: 'AI business consulting report',
      }),
    ],
    locale: 'en',
    alternates: [{ lang: 'ko', route: '/ai-report' }, { lang: 'en', route: '/en/ai-report' }],
  },
  {
    route: '/en/contact',
    title: 'Free Ranking Check | Goodman SEO',
    description:
      'Send three searches your customers would type and get current rankings, one reason you are not showing, and one thing to fix first within 2–3 days.',
    canonical: canonicalForRoute('/en/contact'),
    type: 'website',
    keywords:
      'free Google ranking check, local SEO Brisbane enquiry, Google Business Profile help, GoodmanSEO contact',
    jsonLd: [
      createWebPageJsonLd({
        name: 'GoodmanSEO Free Ranking Check',
        description:
          'Request a free Google ranking check or ask about the 3-month Google ranking program for Brisbane local businesses.',
        path: '/en/contact',
        type: 'ContactPage',
      }),
    ],
    locale: 'en',
    alternates: [{ lang: 'ko', route: '/contact' }, { lang: 'en', route: '/en/contact' }],
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
  keywords: post.keywords?.join(', ') || `굿맨SEO, ${post.category}, 호주 비즈니스, 온라인 기본기, 구글 비즈니스 프로필`,
  lastmod: formatPostDate(post.updatedDate || post.date),
  jsonLd: createBlogPostingJsonLd(post),
}));

const sampleReportRoutePages = aiReportSamples.map((sample) => ({
  route: `/ai-report/${sample.slug}`,
  title: `${sample.title} AI 비즈니스 리포트 | Goodman SEO`,
  description: sample.description,
  canonical: canonicalForRoute(`/ai-report/${sample.slug}`),
  type: 'website',
  keywords: `AI 비즈니스 리포트 샘플, ${sample.industry}, 홈페이지 진단, SEO 리포트, GoodmanSEO`,
  jsonLd: [
    organizationJsonLd,
    createWebPageJsonLd({
      name: `${sample.title} AI 비즈니스 리포트`,
      description: sample.description,
      path: `/ai-report/${sample.slug}`,
    }),
  ],
}));

const routePages = [
  ...baseRoutePages,
  ...sampleReportRoutePages,
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

  nextHtml = nextHtml.replace(/<html\s+lang="[^"]*"/s, `<html lang="${page.locale || 'ko'}"`);

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

  nextHtml = nextHtml.replace(/\s*<link\s+rel="alternate"\s+hreflang="[^"]+"\s+href="[^"]+"\s*\/?>/gs, '');
  if (page.alternates?.length) {
    const defaultAlternate = page.alternates.find(({ lang }) => lang === 'ko') || page.alternates[0];
    const alternateTags = [
      ...page.alternates.map(({ lang, route }) => `<link rel="alternate" hreflang="${lang}" href="${canonicalForRoute(route)}" />`),
      `<link rel="alternate" hreflang="x-default" href="${canonicalForRoute(defaultAlternate.route)}" />`,
    ].join('\n    ');
    nextHtml = nextHtml.replace('</head>', `    ${alternateTags}\n  </head>`);
  }
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
  const targetDir = page.route === '/'
    ? distDir
    : path.join(distDir, page.route.replace(/^\//, ''));

  if (page.redirectTo) {
    const destination = canonicalForRoute(page.redirectTo);
    const html = `<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0;url=${page.redirectTo}" />
    <link rel="canonical" href="${destination}" />
    <title>${page.title}</title>
    <meta name="robots" content="noindex, follow" />
  </head>
  <body>
    <p><a href="${page.redirectTo}">서비스 및 가격 페이지로 이동</a></p>
  </body>
</html>
`;
    await mkdir(targetDir, { recursive: true });
    await writeFile(path.join(targetDir, 'index.html'), html, 'utf8');
    return;
  }

  const html = applySeo(baseHtml, page);

  if (page.route === '/') {
    await writeFile(indexPath, html, 'utf8');
    return;
  }

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
