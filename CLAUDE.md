# GoodmanSEO Project Context

This file is the first place to read when starting a new thread in this project.

## Project Summary

GoodmanSEO is a local SEO service for Brisbane small businesses: it gets a business to show up on Google (Search and Maps) when customers search for the service, not the business name.

The one-sentence positioning (confirmed 2026-11-08):

`손님이 구글에서 검색할 때, 사장님 가게가 위에 나오게 합니다. 홈페이지는 그걸 위한 도구입니다.`

The main promise is **ranking / visibility**. The method is always **SEO website + Google Business Profile together** (owner clarification 2026-11-08): the website is the base of the ranking work, so every program includes building a 3–5 page SEO website or restructuring the existing one. Website production is never sold as the lead message, but it is never optional either.

## Proof Story (handle with care)

- The owner also runs a baby photography studio in North Lakes (North Brisbane) and ranked it with the same method. Three months (2026-05-19 to 2026-08-18): 131 clicks, 4,450 impressions, daily impressions from 0 to about 170, main keyword +84 positions. Checked 2026-11-05 from Brisbane: main keyword #3 organic, #1–2 in the Maps pack.
- On the public site this case is **anonymised**: "브리즈번 북부의 아기 사진 스튜디오, 직접 관리하는 가게". Never publish the studio name, URL, address, or keyword list. Never call it a "client". The real business is shown only in consultation.
- Use the Search Console screenshot (`img/case-search-console-2026-08.webp`) as the hero visual. Do not publish the rank-tracker table that reveals keywords.
- Never claim guaranteed rankings. Use dated facts and the monthly report instead.
- Owner rule (2026-11-08): do not write absolute commitments that could bind the owner (e.g. "작업 내역 전체 공개", "효과 없는 작업 중단", unqualified day counts). Describe the way of working instead: 월간 리포트 공유, Search Console 기준, 결과 기반 조정, 영업일 기준 timelines. Keep standard terms that build trust: 작업 시작 전 100% 환불, 월 관리 언제든 해지.

## Audience

Primary: Korean-owned local service businesses in Brisbane and nearby (North Lakes, Moreton Bay, Sunnybank), whose customers find them by searching "service + suburb" in English. Consultation in Korean, visibility in English search.

Priority industries (from the Breezeburn directory of ~815 Korean businesses in QLD):

1. Beauty: lashes, nails, skin, brows, hair
2. Trades: air conditioning, electrical, plumbing, refrigeration
3. Cleaning: bond, carpet, commercial

Also a fit: mechanics, massage/physio, tutoring. Low fit: restaurants/cafes (profile only), accountants/lawyers/real estate (community referral driven), medical (advertising rules), photographers in Brisbane (competitors).

## Offers (only three public products)

Source of truth: `src/data/programs.js`. Change prices there only.

1. 무료 순위 점검 (free): current rank for three customer searches, one reason it is not showing, one thing to fix first, by email in 2–3 days.
2. 구글 상위 노출 3개월 프로그램 — SEO 홈페이지 + 구글 비즈니스 프로필 (AUD 4,400 with a new 3–5 page website; AUD 3,400 when restructuring an existing website; paid in two halves): keyword selection, SEO website build/restructure, Google Business Profile optimisation linked to the site, review system, monthly report.
3. 월 유지 관리 (AUD 390/month, optional after the program, cancel anytime): hosting and small edits, profile posts/photos, review replies, monthly report.

Pricing rationale (2026-11-08): Australian single-area local SEO runs AUD 800–1,500/month (website excluded) and agencies start around AUD 1,500/month. AUD 4,400 covers the website build plus three months of ranking work for a solo operator (roughly 50–60 hours). Sales policy, not shown on the site: the first two clients may be offered a discount (about AUD 3,600) in exchange for a publishable (anonymisable) case study and review.

The pricing page has an "SEO 홈페이지 제작" section describing the website spec included in the program (`websiteSpec` in `programs.js`); website-only requests are handled by consultation. Retired and not to be re-added: AI 진단, AI 비즈니스 리포트, 사이트 케어 Basic/Plus, 온라인 관리 서포트, GBP 유지 add-on, Business/Growth website packages, hosting as a separate item.

## Wording Rules

Owner rule (2026-11-08): write in compact industry terms, noun-first, not explanatory sentences. "구글에서 위에 나오게 하는 일" is simply "구글 상위 노출". Long, soft, over-explaining copy reads as AI-written and is rejected.

Prefer: 구글 상위 노출, 로컬 SEO, 키워드, 순위, 구글 비즈니스 프로필 최적화, 리뷰 관리, 온페이지 SEO, 월간 리포트, 지도 1~2위, 무료 순위 점검. Headline in use: `브리즈번 구글 상위 노출, 결과는 숫자로 증명합니다.`

Avoid as lead language: 홈페이지 제작, 기본 SEO, 세팅/정리합니다 as the main verb, 온라인 구조, SNS 마케팅, integrated marketing, 보장. Do not reintroduce AI mentoring, AI report, or AI course sections into the main site navigation or homepage.

## Contact and Trust Signals

- No KakaoTalk channel and no personal photo on the site (owner decision 2026-11-08). Contact is phone, form, and email.
- Phone `0434 920 114` and email are in `src/data/contact.js`.
- Social links: Instagram and Facebook only. The YouTube channel is AI-content and stays off the site.
- Location signal: North Lakes, Brisbane QLD; online across Australia. Remove any remaining "Sydney" references.

## Site Structure (after the 2026-11 reset)

- Navigation: 홈 / 서비스 및 가격 / 작업 방식 (`/#how`) / 블로그 + CTA 무료 순위 점검.
- Home (`src/pages/Home.jsx`): fixed headline, anonymised proof visual, results band, "구글 상위 노출 작업 5단계" (키워드 → SEO 홈페이지 → 프로필 → 리뷰 → 리포트), three target industries, three programs, "보장하지 않습니다" approach section, FAQ, CTA. No sample-site grid, no AI sections.
- Pricing (`src/pages/WebPricing.jsx`): three programs, what happens in each month, SEO website spec with six sample previews, FAQ (`pricingFaqs`).
- Contact (`src/components/ContactForm.jsx`): five enquiry types; free check and program types ask for three customer search phrases. Legacy `?type=` values map to new types.
- Blog: evergreen posts only. AI key news is archived (`src/data/archivedAiKeyNews.js`) and redirected; do not publish new AI news on this site.
- `/ai-business`, `/ai-course`, `/ai-report` pages still exist but are unlinked. They are to be separated from GoodmanSEO later.

## Known Technical Debt

- The build only injects meta tags per route; the HTML body is empty until JavaScript runs (`scripts/generate-static-pages.mjs`). Prerendering the body (react-dom/server + StaticRouter) is planned as a separate change. Any solution must run in the Cloudflare Pages build without a browser.
- The local Windows checkout (`F:\Antigravity\goodmanseo`) diverged from GitHub (8 local-only commits, many uncommitted files). Build and deploy from GitHub `main`, not from that tree.

## Other Channels

- Breezeburn (`breezeburn.com`): the owner's Brisbane Korean community site with the business directory. It is the outreach channel for plan A and must be separated from the photography domain (`briz.sweetlifephotography.com.au` should not serve it).
- Threads posts: `claude/threads-posts-batch1.md` in the Claude project. Keep them consistent with the ranking-first message.

## Working Rules For Future Threads

1. Read this file, then `docs/current-status.md` (newest entry first).
2. For blog writing or copy editing, read `docs/blog-writing-tone-guide.md`.
3. For design work, read `PRODUCT.md`, `DESIGN.md` and the Impeccable skill. The navy/off-white design system stays; this reset changed content and offers, not the visual system.
4. If older copy, wiki pages, or chat memory conflict with this file, this file wins.
5. Run `git status --short` before editing and treat existing modified or untracked files as user work.
