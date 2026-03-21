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
      'Goodman SEO는 소상공인을 위해 웹사이트 제작, 구글 비즈니스 프로필 세팅, SNS 연결을 월 $500 스타터 패키지로 제공합니다.',
    canonical: 'https://goodmanseo.com/',
    type: 'website',
    keywords:
      'Goodman SEO, 소상공인 홈페이지 제작, 구글 비즈니스 프로필, 시드니 SEO, 스타터 패키지',
  },
  {
    route: '/starter-package',
    title: '스타터 패키지 | Goodman SEO',
    description:
      '웹사이트 제작, 구글 비즈니스 프로필 세팅, SNS 연결과 운영 지원을 포함한 Goodman SEO의 월 $500 스타터 패키지 안내 페이지입니다.',
    canonical: 'https://goodmanseo.com/starter-package',
    type: 'website',
    keywords:
      '스타터 패키지, 월 500달러 홈페이지, 구글 지도 세팅, 소상공인 마케팅 패키지',
  },
  {
    route: '/blog',
    title: '블로그 | Goodman SEO',
    description:
      '소상공인을 위한 Goodman SEO의 블로그입니다. 구글 노출, 홈페이지 기본기, SNS 연결에 대한 실용적인 가이드를 제공합니다.',
    canonical: 'https://goodmanseo.com/blog',
    type: 'website',
    keywords:
      '굿맨SEO 블로그, 구글 노출 가이드, 소상공인 홈페이지, SNS 마케팅 기본기',
  },
  {
    route: '/blog/google-maps-setup',
    title: '구글 지도에서 우리 매장이 안 보인다면? 지금 당장 세팅해야 하는 이유 | Goodman SEO',
    description:
      '고객이 가게를 찾는 첫 순간은 이미 오프라인이 아니라 검색창에서 시작됩니다.',
    canonical: 'https://goodmanseo.com/blog/google-maps-setup',
    type: 'article',
    keywords:
      '굿맨SEO, Google visibility, 구글 지도 세팅, 소상공인 마케팅, 구글 비즈니스 프로필',
  },
  {
    route: '/blog/why-business-needs-website',
    title: "인스타그램만 열심히 하면 될까? 내 비즈니스에 '진짜' 홈페이지가 필요한 이유 | Goodman SEO",
    description:
      'SNS가 관심을 끈다면, 홈페이지는 그 관심을 신뢰와 문의로 바꾸는 공간입니다.',
    canonical: 'https://goodmanseo.com/blog/why-business-needs-website',
    type: 'article',
    keywords:
      '굿맨SEO, Website basics, 소상공인 홈페이지, SNS 마케팅, 홈페이지 필요성',
  },
  {
    route: '/blog/online-basics-for-small-business',
    title: "비싼 마케팅 업체에 속지 마세요. 소상공인에게 진짜 필요한 '온라인 기본기' | Goodman SEO",
    description:
      '거창한 용어보다 먼저 필요한 것은 검색되고, 신뢰를 주고, 문의받는 구조입니다.',
    canonical: 'https://goodmanseo.com/blog/online-basics-for-small-business',
    type: 'article',
    keywords:
      '굿맨SEO, Starter strategy, 소상공인 마케팅, 온라인 기본기, 구글 비즈니스 프로필',
  },
  {
    route: '/contact',
    title: '상담 신청 | Goodman SEO',
    description:
      'Goodman SEO 상담 신청 페이지입니다. 홈페이지 제작, 구글 비즈니스 프로필 세팅, SNS 연결이 필요한 소상공인을 위한 문의를 받고 있습니다.',
    canonical: 'https://goodmanseo.com/contact',
    type: 'website',
    keywords:
      '굿맨SEO 문의, 홈페이지 상담, 구글 비즈니스 프로필 상담, 시드니 소상공인 마케팅',
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
