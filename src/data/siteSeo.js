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
  url: siteUrl,
  logo: `${siteUrl}/favicon.png`,
  image: defaultSeoImage,
  areaServed: 'Australia',
  telephone: '0434-920-114',
  email: 'goodmanseo.sydney@gmail.com',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '0434-920-114',
      contactType: 'customer service',
      areaServed: 'AU',
      availableLanguage: ['ko', 'en'],
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sydney',
    addressCountry: 'AU',
  },
  sameAs: [siteUrl],
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
  serviceType = 'Online channel review and SEO service',
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
    dateModified: publishedDate,
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
