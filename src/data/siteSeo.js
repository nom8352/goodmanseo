export const siteUrl = 'https://goodmanseo.com';

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Goodman SEO',
  url: siteUrl,
  logo: `${siteUrl}/favicon.png`,
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
  name: 'Goodman SEO',
  url: siteUrl,
  inLanguage: 'ko',
};
