export const siteName = 'Goodman SEO';
export const siteUrl = 'https://goodmanseo.com';
export const defaultSeoImage = `${siteUrl}/og-image.png`;

const withTrailingSlash = (path) => {
  if (path === '/') {
    return '/';
  }

  return path.endsWith('/') ? path : `${path}/`;
};

export const canonicalUrlForPath = (path) => `${siteUrl}${withTrailingSlash(path)}`;

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${siteUrl}/#organization`,
  name: siteName,
  description:
    '브리즈번 로컬 비즈니스를 위한 로컬 SEO 서비스. 손님이 구글에서 검색할 때 가게가 위에 나오도록 구글 비즈니스 프로필, 리뷰, 홈페이지를 정리하고 매달 숫자로 보고합니다.',
  url: siteUrl,
  logo: `${siteUrl}/favicon.png`,
  image: defaultSeoImage,
  priceRange: 'AUD 149 - AUD 1,490',
  knowsLanguage: ['ko', 'en'],
  areaServed: [
    { '@type': 'City', name: 'Brisbane' },
    { '@type': 'Place', name: 'North Lakes, Queensland' },
    { '@type': 'Place', name: 'Moreton Bay Region, Queensland' },
    { '@type': 'Country', name: 'Australia' },
  ],
  telephone: '+61434920114',
  email: 'goodmanseo.sydney@gmail.com',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+61434920114',
      contactType: 'customer service',
      areaServed: 'AU',
      availableLanguage: ['ko', 'en'],
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'North Lakes',
    addressRegion: 'QLD',
    addressCountry: 'AU',
  },
  sameAs: [siteUrl, 'https://www.instagram.com/goodmanseo_ai/', 'https://www.facebook.com/goodmanseoAi'],
};

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: siteName,
  url: siteUrl,
  inLanguage: 'ko',
  publisher: {
    '@id': `${siteUrl}/#organization`,
  },
};

const publisherJsonLd = {
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: siteName,
  logo: {
    '@type': 'ImageObject',
    url: `${siteUrl}/favicon.png`,
  },
};

export const createServiceJsonLd = ({
  name,
  description,
  path = '/',
  serviceType = 'Local SEO and Google Business Profile ranking service',
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${canonicalUrlForPath(path)}#service`,
  name,
  description,
  serviceType,
  areaServed: 'Australia',
  inLanguage: ['ko', 'en'],
  provider: {
    '@id': `${siteUrl}/#organization`,
  },
  url: canonicalUrlForPath(path),
});

export const createWebPageJsonLd = ({ name, description, path = '/', type = 'WebPage' }) => ({
  '@context': 'https://schema.org',
  '@type': type,
  '@id': `${canonicalUrlForPath(path)}#webpage`,
  name,
  description,
  url: canonicalUrlForPath(path),
  inLanguage: 'ko',
  isPartOf: {
    '@id': `${siteUrl}/#website`,
  },
  publisher: {
    '@id': `${siteUrl}/#organization`,
  },
});

export const createBlogPostingJsonLd = (post) => {
  const publishedDate = post.date.replaceAll('.', '-').slice(0, 10);
  const canonicalUrl = canonicalUrlForPath(`/blog/${post.id}`);

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${canonicalUrl}#blogposting`,
    headline: post.title,
    description: post.excerpt,
    image: `${siteUrl}${post.image}`,
    datePublished: publishedDate,
    dateModified: post.updatedDate ? post.updatedDate.replaceAll('.', '-').slice(0, 10) : publishedDate,
    articleSection: post.category,
    inLanguage: 'ko',
    author: {
      '@type': 'Organization',
      name: post.author,
      url: siteUrl,
    },
    publisher: publisherJsonLd,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
  };
};
