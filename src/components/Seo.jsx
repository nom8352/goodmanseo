import { useEffect } from 'react';

const SITE_NAME = 'Goodman SEO';
const SITE_URL = 'https://goodmanseo.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.svg`;

const ensureMetaTag = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const ensureLinkTag = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

const Seo = ({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  keywords = [],
  jsonLd,
}) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = fullTitle;

    ensureMetaTag('meta[name="description"]', {
      name: 'description',
      content: description,
    });
    ensureMetaTag('meta[name="keywords"]', {
      name: 'keywords',
      content: keywords.join(', '),
    });
    ensureMetaTag('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    });
    ensureMetaTag('meta[property="og:title"]', {
      property: 'og:title',
      content: fullTitle,
    });
    ensureMetaTag('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    });
    ensureMetaTag('meta[property="og:type"]', {
      property: 'og:type',
      content: type,
    });
    ensureMetaTag('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });
    ensureMetaTag('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: SITE_NAME,
    });
    ensureMetaTag('meta[property="og:image"]', {
      property: 'og:image',
      content: image,
    });
    ensureMetaTag('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    ensureMetaTag('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: fullTitle,
    });
    ensureMetaTag('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    });
    ensureMetaTag('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: image,
    });

    ensureLinkTag('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    });

    const existingJsonLd = document.getElementById('seo-json-ld');
    if (existingJsonLd) {
      existingJsonLd.remove();
    }

    if (jsonLd) {
      const script = document.createElement('script');
      script.id = 'seo-json-ld';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [description, image, jsonLd, keywords, path, title, type]);

  return null;
};

export default Seo;
