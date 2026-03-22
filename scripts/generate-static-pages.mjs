import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');
const defaultImage = 'https://goodmanseo.com/og-image.svg';

const routePages = [
  {
    route: '/',
    title: '홈 | Goodman SEO',
    description:
      'Goodman SEO는 호주와 시드니 비즈니스를 위해 홈페이지 제작, 구글 지도/검색 등록, 홈페이지 방문 확인 연결, 3개월 안심 유지보수까지 쉽게 시작할 수 있는 기본 세팅을 제공합니다.',
    canonical: 'https://goodmanseo.com/',
    type: 'website',
    keywords:
      '호주 홈페이지 제작, 시드니 홈페이지 제작, 호주 구글 지도 등록, 시드니 구글 지도 등록, 비즈니스 홈페이지 제작',
  },
  {
    route: '/starter-package',
    title: '홈페이지 제작 | Goodman SEO',
    description:
      'Goodman SEO의 호주와 시드니 비즈니스를 위한 홈페이지 제작 안내 페이지입니다. 구글 지도/검색 등록, 홈페이지 방문 확인 연결, 3개월 안심 유지보수까지 포함됩니다.',
    canonical: 'https://goodmanseo.com/starter-package',
    type: 'website',
    keywords:
      '호주 홈페이지 제작, 시드니 홈페이지 제작, 호주 비즈니스 홈페이지, 구글 지도 등록 포함 홈페이지, 호주 홈페이지 상담',
  },
  {
    route: '/pricing',
    title: '서비스 및 가격 | Goodman SEO',
    description:
      'Goodman SEO의 호주와 시드니 비즈니스를 위한 서비스 및 가격 안내 페이지입니다. 홈페이지 제작, 3개월 안심 유지보수, 구글 지도/검색 등록, 추가 마케팅 서비스 가격을 확인할 수 있습니다.',
    canonical: 'https://goodmanseo.com/pricing',
    type: 'website',
    keywords:
      '호주 홈페이지 제작 가격, 시드니 홈페이지 제작 가격, 호주 홈페이지 비용, 비즈니스 홈페이지 가격, 구글 지도 등록 가격',
  },
  {
    route: '/blog',
    title: '블로그 | Goodman SEO',
    description:
      '호주와 시드니 비즈니스를 위한 Goodman SEO의 블로그입니다. 구글 지도/검색 등록, 홈페이지 기본기, 고객 유입에 대한 쉬운 가이드를 제공합니다.',
    canonical: 'https://goodmanseo.com/blog',
    type: 'website',
    keywords:
      '호주 구글 지도 등록 가이드, 시드니 홈페이지 제작 가이드, 비즈니스 홈페이지, 고객 유입 기본기',
  },
  {
    route: '/blog/google-maps-setup',
    title: '구글 지도에서 우리 매장이 안 보인다면? 지금 당장 세팅해야 하는 이유 | Goodman SEO',
    description:
      '고객이 가게를 찾는 첫 순간은 이미 오프라인이 아니라 검색창에서 시작됩니다.',
    canonical: 'https://goodmanseo.com/blog/google-maps-setup',
    type: 'article',
    keywords:
      '굿맨SEO, 구글 지도 검색, 구글 지도 등록, 비즈니스 마케팅, 가게 정보 등록',
  },
  {
    route: '/blog/why-business-needs-website',
    title: "인스타그램만 열심히 하면 될까? 내 비즈니스에 '진짜' 홈페이지가 필요한 이유 | Goodman SEO",
    description:
      'SNS가 관심을 끈다면, 홈페이지는 그 관심을 신뢰와 문의로 바꾸는 공간입니다.',
    canonical: 'https://goodmanseo.com/blog/why-business-needs-website',
    type: 'article',
    keywords:
      '굿맨SEO, 홈페이지 기본기, 비즈니스 홈페이지, 홈페이지 필요성, 고객 문의',
  },
  {
    route: '/blog/online-basics-for-small-business',
    title: "비싼 마케팅 업체에 속지 마세요. 소상공인에게 진짜 필요한 '온라인 기본기' | Goodman SEO",
    description:
      '거창한 용어보다 먼저 필요한 것은 검색되고, 신뢰를 주고, 문의받는 구조입니다.',
    canonical: 'https://goodmanseo.com/blog/online-basics-for-small-business',
    type: 'article',
    keywords:
      '굿맨SEO, 온라인 기본 세팅, 비즈니스 마케팅, 온라인 기본기, 구글 지도 등록',
  },
  {
    route: '/contact',
    title: '상담 신청 | Goodman SEO',
    description:
      'Goodman SEO 상담 신청 페이지입니다. 호주와 시드니 비즈니스를 위한 홈페이지 제작, 구글 지도/검색 등록, SNS와 광고 시작 세팅 문의를 받고 있습니다.',
    canonical: 'https://goodmanseo.com/contact',
    type: 'website',
    keywords:
      '호주 홈페이지 상담, 시드니 홈페이지 상담, 호주 구글 지도 등록 상담, 비즈니스 홈페이지 문의',
  },
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
    `<meta property="og:image" content="${defaultImage}" />`,
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
    `<meta name="twitter:image" content="${defaultImage}" />`,
  );
  nextHtml = replaceTag(
    nextHtml,
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/s,
    `<link rel="canonical" href="${page.canonical}" />`,
  );

  return nextHtml;
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













