# GoodmanSEO SEO Keyword Map

Last updated: 2026-06-25

This map keeps the site focused on a practical online-channel review service for Korean and Australian local service businesses. The core story should stay consistent: free online check, Google Business Profile, website, Instagram, and Facebook reviewed together, what is missing, what to fix first, and inquiry flow.

## Route Map

| Route | Primary keyword / search intent | Secondary keywords | Main CTA | Internal links in | Internal links out |
| --- | --- | --- | --- | --- | --- |
| `/` | online business check for Korean local businesses in Australia / "my business online presence check" | Google Business Profile check, website check, Instagram Facebook setup, local business inquiry flow, Sydney Korean business marketing | `무료 진단 신청` to `/contact?type=free-check` | Navbar, footer, brand links, blog contextual links | `/contact`, `/pricing`, `/ai-course` |
| `/pricing` | GoodmanSEO service pricing / compare online diagnosis, website, SEO, Google Business Profile services | free check, quick diagnosis, all-in-one diagnosis, website package, SEO package, Google Business Profile setup | service-specific inquiry buttons to `/contact?type=...` | Navbar, homepage CTAs, blog service CTAs, footer | `/contact?type=free-check`, `/contact?type=starter-homepage`, `/contact?type=seo-start-package` |
| `/starter-package` | starter website package for local businesses / simple website production | Australian Korean website production, starter homepage, Google Maps setup, inquiry form website, small business website | `무료 상담하기` to `/contact` | Pricing page, blog homepage-production posts, footer if promoted | `/contact` |
| `/ai-business` | AI practical mentoring for small business operations / AI automation support | AI business automation, AI content workflow, review replies, SNS content draft, 1:1 AI mentoring | `AI 실전 멘토링 신청하기` to `/contact?type=ai-mentoring` | Navbar, homepage AI bridge, AI web design blog posts, `/ai-course` | `/contact?type=ai-mentoring`, `/ai-course`, external Inflearn link |
| `/ai-course` | Codex AI practical automation course for non-developers / learn AI operations directly | Codex course, AI practical automation, Korean AI course, small business AI content, GoodmanSEO course | external Inflearn course CTA plus mentoring link | Navbar, homepage AI course bridge, `/ai-business`, AI operation blog posts | external Inflearn course, `/ai-business` |
| `/blog` | practical online marketing blog for local businesses / learn what to fix first | Google Business Profile, homepage conversion, SEO basics, SNS operation, AI web design, online basics | read article cards; support conversion through article detail CTAs | Navbar, footer, blog detail "전체 글 보기" | `/blog/:postId` article routes |
| `/blog/:postId` | article-specific long-tail intent / answer one practical online-channel problem | article category keyword, Google profile, homepage, SEO, SNS, AI web design, free audit | contextual CTA based on article category plus `무료 진단 문의하기` | `/blog`, related posts, search/social if shared | related article routes, `/contact?type=...`, `/pricing`, `/ai-business`, `/ai-course` |
| `/contact` | request online diagnosis or inquiry / submit business check form | free check application, quick diagnosis inquiry, homepage quote, SEO inquiry, AI mentoring inquiry | form submission | Navbar CTA, homepage, pricing, starter package, blog CTAs, AI pages, footer | none after form; keep as conversion endpoint |
| `/privacy` | GoodmanSEO privacy policy / trust and legal information | privacy policy, personal information, inquiry form data handling | soft trust support; no sales CTA needed | Footer | `/contact` only if legal copy adds contact reference |
| `/terms` | GoodmanSEO terms of use / service trust and legal information | terms, service policy, payment, cancellation, inquiry terms | soft trust support; no sales CTA needed | Footer | `/contact` only if legal copy adds contact reference |

## Blog Cluster Map

| Cluster | Primary intent | Best service CTA | Important internal links |
| --- | --- | --- | --- |
| Google Business Profile | Customer checks Google first; profile is incomplete or inconsistent | `/contact?type=gbp-setup` | Link to `/pricing`, related SEO and online-basics posts |
| Online basics | Business information differs across channels; owner needs first priority | `/contact?type=free-check` | Link to `/pricing`, `/blog/what-is-included-in-free-audit`, related Google/SNS posts |
| SNS operation | Instagram is active but inquiry does not follow | `/contact?type=free-check` | Link to `/pricing`, related online-basics and homepage posts |
| Homepage production | Website exists or is planned, but message and inquiry flow are unclear | `/contact?type=starter-homepage` | Link to `/pricing`, `/starter-package`, related SEO and AI web design posts |
| SEO | Owner wants search visibility but basic structure may not be ready | `/contact?type=seo-start-package` | Link to `/pricing`, related Google Business Profile and website posts |
| AI web design | Owner wants to use AI for a website but needs business context first | `/contact?type=ai-mentoring` | Link to `/ai-business`, `/ai-course`, related homepage posts |
| AI online operation | Owner wants to reduce repeated online operation work | `/contact?type=ai-mentoring` | Link to `/ai-business`, `/ai-course`, related SNS and blog workflow posts |
| Free audit | Owner wants to know what GoodmanSEO checks before buying anything | `/contact?type=free-check` | Link to `/pricing`, homepage, related online-basics posts |

## Internal Linking Rules

- Every blog article should keep its canonical URL as `/blog/{id}` and link to related posts without changing article data.
- Use service CTAs that match the reader's current problem, then keep a fallback free diagnosis CTA.
- Do not turn article CTAs into a generic website-agency pitch. Mention Google, website, Instagram, and Facebook together when the problem is channel-level.
- Use `/contact?type=...` query strings for conversion links so the contact form can preserve inquiry context.
- Prefer `/pricing` for service comparison, `/ai-business` for AI support, and `/ai-course` only when the reader wants to learn directly.
