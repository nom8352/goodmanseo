# Wiki Log

- 2026-08-13: Rebuilt the daily AI share image as a phone-first `1080x1920` asset for Shorts, Instagram, and X. The image now shows only substantially larger headlines and source labels, while full explanations remain in the blog post.

- 2026-08-13: Clarified the daily AI key-news mix as trend-first rather than direct-impact-first: lead with 3–4 fresh topics that readers are actively interested in on X, then add 2–3 major AI news items. Engagement and repeated discussion are discovery signals, claims are verified separately, and stale practical tips or technical filler are excluded. External X and KakaoTalk posting remain manual.

- 2026-07-19: Aligned the AI Business Report across pricing, report samples, contact copy, navigation, footer, and the Korean homepage. Added `/en/ai-report` and connected it from the English homepage, navigation, footer, enquiry flow, static generation, and sitemap. Public pricing is now `AUD 249` launch price against `AUD 349` standard price.

- 2026-07-13: Added the English homepage at `/en` and English enquiry page at `/en/contact`, including shared locale-aware navigation/footer/form copy, language switching, `hreflang`, static generation, and sitemap coverage.

## 2026-07-04

- 2026-07-06: Updated the AI report sample state after the document-style redesign and deeper content pass. All five sample report routes now share the Luna-style structure in `src/data/aiReportSamples.js`: methodology rows plus 13 ordered sections from `Executive Summary` through `Final Recommendation`. Non-Luna samples were expanded with industry-specific evidence, UX/CRO, SEO/content, local or funnel, competitor, AI persona, business/CEO, reasoning, roadmap, and recommendation content. `npm.cmd run build` passed and Playwright checked the Sydney and ClientFlow sample routes.
- 2026-07-06: Repriced public offers after comparing against the current Modak Studio pricing page. Website packages are now Starter `AUD 1,490`, Business `AUD 3,500`, and Growth `AUD 6,000~`; SEO All-in-One is `AUD 1,490`, Google Business Profile setup is `AUD 490`, and AI business report is `AUD 349`. Package inclusions were tightened so Starter stays basic, Business includes GBP setup/cleanup, and Growth includes SEO All-in-One plus 3 months online management support.
- 2026-07-06: Added low-entry post-launch recurring offers: Site Care Basic `AUD 79 / month`, Site Care Plus `AUD 149 / month`, one-time Domain/DNS cleanup `AUD 150~`, and domain purchase agency at domain cost + `AUD 60 / year`. These are intentionally narrower than `온라인 관리 서포트 AUD 295 / month`, which remains the broader channel-management support plan.
- 2026-07-06: Added `호스팅 Only` as an item under the Homepage Production pricing section at `AUD 49 / month`, scoped to hosting space, SSL, backup, and server/domain connection checks with small edits excluded. Added a free AI course coupon line to the Starter, Business, and Growth homepage-production packages only.
- 2026-07-06: Corrected hosting positioning on the public pricing page: removed the separate `호스팅 Only` card and the `호스팅 · 사이트 케어` section. Hosting now appears only inside each homepage-production package as an optional item from `AUD 49 / month`; small edits remain excluded from the base hosting option.
- 2026-07-06: Made `3개월 온라인 관리 서포트 포함` a shared inclusion across all three homepage-production packages, not only the Growth package.
- 2026-07-06: Re-added a separate `사이트 케어` section with Basic `AUD 79 / month` and Plus `AUD 149 / month`, while keeping `호스팅 Only` removed as a standalone package.

- Saved the current homepage redesign rules into `DESIGN.md`.
- Updated `docs/current-status.md` and `wiki/concepts/design-context.md` to mark the navy/off-white reference-image direction as the current homepage source of truth.
- Current homepage design rules include: warm off-white hero, serif hero headline, sans-serif logo/nav/footer logo, generated woman hero image, four floating hero cards, full-width white common-issues section, full-width dark navy service/course/sample sections, compact typography, low-radius buttons/cards, deep navy footer, and no score/gauge/improvement CTA section.
- Added five Notion-based AI report sample pages to the website via `src/data/aiReportSamples.js`, shared `AIReportSample.jsx`, `/ai-report/:sampleSlug` routing, and static generation entries. `/ai-report` now links to all five samples.
- Updated `/ai-report` public copy against the Notion AI report notes: single `AUD 349` AI business report positioning, Business + Website + SEO Audit Report framing, no fixed delivery-time/page-count/human-review promises, and less defensive AI persona wording.

## 2026-06-25

- Added `docs/seo-audit-2026-06-25.md` for the full-site SEO audit and marked Linear `GOO-140` done.
- Added `docs/seo-keyword-map.md` for route intent, target keywords, CTAs, and internal linking direction.
- Updated blog SEO: longer excerpts, deeper priority article bodies, WebP blog image delivery, contextual blog CTAs, related posts, and static `BlogPosting` JSON-LD.
- Added `docs/2026-06-25-work-log.md` for the June 25 GoodmanSEO work session.
- Updated `docs/current-status.md` to record pushed blog image/content expansion, `/ai-course`, `AI 강의` navigation, homepage course bridge, AI business course bridge, static generation/sitemap registration, and YouTube embed.
- Updated `wiki/index.md` to point future threads to the June 25 work log and current `/ai-course` review priority.
- Current pushed course landing state includes `https://www.youtube-nocookie.com/embed/kuCymkvGF9w` in `src/pages/AICourse.jsx`.

## 2026-06-16

- Initialized GoodmanSEO LLM wiki.
- Added source maps for project memory, site code, and social assets.
- Added concept notes for positioning, service offers, and content system.
- Added workflows for resume, ingest, and verification.
- Linked the wiki from local project memory files.
- Updated `.impeccable.md` using the teach-impeccable workflow and linked the design context from `AGENTS.md` and `wiki/concepts/design-context.md`.
- Installed official `pbakaus/impeccable` project-local Codex skill and hook.
- Added official `PRODUCT.md`, `DESIGN.md`, `.impeccable/design.json`, and `.impeccable/live/config.json`.
- Marked `.impeccable.md` as legacy context.
- Applied `$impeccable distill homepage`: reduced repeated homepage copy, simplified the flow, removed gradient text warning, and verified desktop/mobile render.
- Applied `$impeccable clarify homepage`: made homepage copy more specific about checked channels, inquiry flow, and next-step guidance.
- Earlier homepage hero pass added a right-side channel image asset for Google, website, and SNS; later same-day source changes moved the current homepage visual to the code-built `HeroDevicesVisual`.
- Added `wiki/concepts/current-site-content.md` to preserve the current homepage message, business offers, AI business content, and contact inquiry flow from source.
- Added `wiki/concepts/site-page-content-inventory.md` with route-by-route content for pricing, starter package, AI business, blog, contact, navigation, footer, and site SEO metadata.
- Synced wiki with `docs/work-summary.md` and current source changes after the light-theme redesign/report.
- Updated `docs/current-status.md` to reflect the current homepage `HeroDevicesVisual`, light aqua design system, legal pages, SEO/static route additions, and active uncommitted changes.
- Updated site content and page inventory notes for current homepage rotating H1 phrases, pricing page service hierarchy, AI service cards, contact form labels, `/privacy`, and `/terms`.
- Updated service offer notes to distinguish current visible prices from older AI/monthly-management prices that are no longer visible in the current pages.
- Updated design context from the older dark/glassy description to the current light aqua `DESIGN.md` and `.impeccable/design.json` direction.
