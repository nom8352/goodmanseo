# Sitemap Validation Report

Date: 2026-06-25  
Target: `https://goodmanseo.com/sitemap.xml`  
Local file: `public/sitemap.xml`

## Summary

Status: **Fixed locally, pending deploy/push verification**

The sitemap is valid XML, publicly reachable, referenced from `robots.txt`, and contains the expected current site URLs.

Original issue:

- 22 of 23 sitemap URLs redirect with `308` to trailing-slash versions.
- The final pages return `200`, but sitemap URLs should ideally be the final canonical URLs and should not redirect.
- The rendered canonical tags also point to non-trailing-slash URLs, while the live host redirects those URLs to trailing-slash versions.

Local fix applied:

- `public/sitemap.xml` now uses trailing-slash final URLs for every non-root route.
- `src/components/Seo.jsx` now generates trailing-slash canonical/OG URLs.
- `scripts/generate-static-pages.mjs` now generates trailing-slash canonical/OG URLs in static HTML.
- `npm run build` passed after the fix.
- Local build verification found `0` non-trailing sitemap URLs, excluding the root URL.

## Validation Results

| Check | Result | Notes |
|---|---:|---|
| Local XML parses | Pass | `public/sitemap.xml` is valid XML |
| Live sitemap reachable | Pass | `https://goodmanseo.com/sitemap.xml` returns `200` |
| Live robots reachable | Pass | `https://goodmanseo.com/robots.txt` returns `200` |
| Sitemap referenced in robots.txt | Pass | `Sitemap: https://goodmanseo.com/sitemap.xml` exists |
| URL count | Pass | 23 URLs, well under 50,000 |
| Unique URL count | Pass | 23 unique URLs |
| HTTPS only | Pass | No HTTP URLs found |
| Local vs live sitemap match | Pass | No missing or extra URLs between local and live |
| Final URL status | Pass | All URLs resolve to final `200` after redirect |
| Direct sitemap URL status | Fixed locally | Local sitemap now uses trailing-slash URLs; live must be rechecked after deploy |
| Deprecated sitemap tags | Info | `priority` and `changefreq` are present on all 23 URLs; Google ignores them |
| `lastmod` dates | Pass | Dates are not all identical; newer AI course/blog updates are represented |
| Sitemap index needed | Not needed | Single sitemap is fine for 23 URLs |

## URL Coverage

Expected source routes:

- `/`
- `/starter-package`
- `/pricing`
- `/blog`
- `/contact`
- `/ai-business`
- `/ai-course`
- `/privacy`
- `/terms`
- 14 blog detail URLs generated from `src/data/blogPosts.js`

Sitemap coverage:

- 9 base routes included
- 14 blog routes included
- Total: 23 URLs

No route coverage gap was found from the current React route list and blog data.

## Issues

### Medium: Redirected URLs in Sitemap - Fixed Locally

Most sitemap URLs are listed without trailing slash:

```txt
https://goodmanseo.com/pricing
https://goodmanseo.com/ai-course
https://goodmanseo.com/blog/ai-website-design-before-prompting
```

The live site redirects them to trailing-slash URLs:

```txt
https://goodmanseo.com/pricing/
https://goodmanseo.com/ai-course/
https://goodmanseo.com/blog/ai-website-design-before-prompting/
```

Observed result:

- `/` returns `200`
- All other 22 sitemap URLs return `308`, then final `200`

Applied fix:

- Updated sitemap URLs to trailing-slash final URLs.
- Updated runtime canonical/OG URL generation in `src/components/Seo.jsx`.
- Updated static canonical/OG URL generation in `scripts/generate-static-pages.mjs`.

Changed files:

- `public/sitemap.xml`
- `scripts/generate-static-pages.mjs`
- `src/components/Seo.jsx`

### Info: `priority` and `changefreq` Tags Present

All 23 sitemap entries include:

```xml
<changefreq>...</changefreq>
<priority>...</priority>
```

Google ignores these tags. They are not harmful, but they do not help ranking or crawling.

Recommended fix:

- Optional. Remove them if keeping the sitemap minimal is preferred.
- Keep them if they are useful for internal readability.

## Recommended Next Action

1. Commit and push the sitemap/canonical fix.
2. Wait for deployment to finish.
3. Re-check:
   - `https://goodmanseo.com/sitemap.xml`
   - `https://goodmanseo.com/robots.txt`
   - representative canonical tags on `/pricing/`, `/ai-course/`, and one blog detail page.
