export const siteUrl = 'https://goodmanseo.com';

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Goodman SEO',
  url: siteUrl,
  areaServed: 'Australia',
  telephone: '0434-920-114',
  email: 'goodmanseo.sydney@gmail.com',
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
  name: 'Goodman SEO',
  url: siteUrl,
  inLanguage: 'ko',
};
