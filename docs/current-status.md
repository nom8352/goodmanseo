# Current Status

Last updated: 2026-06-16

## Current Project Direction

GoodmanSEO is currently being framed as:

`A service that reviews Google, website, Instagram, and Facebook together, finds what is missing, and helps local businesses improve inquiry flow.`

## Local Wiki Status

Karpathy-style LLM wiki initialized on 2026-06-16:

- `wiki/index.md`
- `wiki/schema.md`
- `wiki/log.md`
- `wiki/sources/`
- `wiki/concepts/`
- `wiki/workflows/`

Use this wiki as the structured project memory layer after reading `CLAUDE.md` and this file.

## Impeccable Status

Official `pbakaus/impeccable` project-local Codex setup was aligned on 2026-06-16.

Current Impeccable files:

- `.agents/skills/impeccable/`
- `.codex/hooks.json`
- `PRODUCT.md`
- `DESIGN.md`
- `.impeccable/design.json`
- `.impeccable/live/config.json`

Use `PRODUCT.md` and `DESIGN.md` as the canonical design context. `.impeccable.md` is retained only as legacy context.

The preferred homepage message direction is:

`고객은 검색하고, 신뢰는 결과로 만듭니다`

Preferred supporting message:

`구글, 홈페이지, SNS를 함께 점검하고 정리해 고객이 안심하고 문의할 수 있는 온라인 환경을 만듭니다.`

## Messaging Principles

Prefer:

- practical language
- clear small-business language
- online channels together
- free check
- inquiry flow
- what is missing
- what to fix first

Avoid:

- vague strategic wording
- abstract "structure" language as the lead message
- making GoodmanSEO sound like a generic website agency

## Website Status

Recently completed and pushed to `main`:

- pricing page copy was reworked to use short category-style section titles
- pricing hero title was simplified to `무료 점검`
- pricing copy now explains when to choose each service instead of using long explanatory headings
- AI business page was repositioned around practical AI automation for small business operations
- AI business page now includes online 1:1 pricing plus an offline group workshop offer in Brisbane
- AI business page audience copy and automation examples were rewritten to sound more practical and owner-focused
- AI business offer naming is now `AI 실전 멘토링` instead of `AI 온라인 운영 전수`
- blog was rebuilt as a text-first section with no images in the list or detail pages
- blog now has 10 practical articles aligned with the current GoodmanSEO positioning

Current website direction:

- homepage should lead with free check messaging
- pricing should stay simple and scannable
- AI business page should read as a practical automation service, not a generic AI lecture page
- AI offer naming should use `AI 실전 멘토링` across navigation, pricing, SEO, and page copy
- blog should support trust, search intent, and conversion rather than act like a magazine

Homepage update on 2026-06-16:

- `$impeccable distill homepage` was applied to reduce repeated copy and simplify the flow
- `$impeccable clarify homepage` was applied to make remaining copy more specific and actionable
- homepage hero was updated to the new trust/search headline and a right-side channel mockup visual
- homepage now centers on: online appearance, four checked channels, one next step
- H1 was consolidated into one semantic heading
- homepage typography was adjusted away from overly tight display letter spacing

## AI Business Page Notes

Current page path:

- `src/pages/AIBusiness.jsx`

Current direction for this page:

- lead with time-saving automation for owner-operators
- use specific examples like product descriptions, customer replies, SNS drafts, GBP posts, and operating docs
- keep the offer split clear between online 1:1 and offline group workshop
- offline workshop location is currently `브리즈번`

## Blog Status

Current blog structure:

- image-free title-first list layout
- image-free detail pages
- 10 new articles written and published in code

Current article topics:

1. Why an empty Google Business Profile hurts
2. Five online basics to check before a new website
3. Trust gaps when only Instagram is active
4. Why a website may not convert inquiries
5. Problems caused by mismatched info across channels
6. What to fix first for a small business online
7. What the free check includes
8. What to verify before starting SEO
9. What to review before rebuilding a website
10. How to manage online operations without outsourcing everything

## Social Content Status

Two-week Instagram schedule prepared:

- 2026-04-13 10:00
- 2026-04-15 10:00
- 2026-04-17 10:00
- 2026-04-20 10:00
- 2026-04-22 10:00
- 2026-04-24 10:00

Six rewritten post themes:

1. Instagram alone is not enough
2. Four things customers check first
3. What the free check actually reviews
4. Small businesses need the basics first
5. Inquiries drop when channels are disconnected
6. How does my business look online right now?

## Social Asset Status

Planner asset folder:

- `F:\Antigravity\goodmanseo\.codex-social\planner-assets`

Relevant files:

- `001.jpeg` to `006.jpeg` cropped to `1080x1080`
- backup originals in `originals-before-crop`
- PNG and TXT working assets also exist in the same folder

Card news status checked on 2026-06-16:

- root-level Instagram card images exist as `ig-post-01.png` to `ig-post-20.png`
- `.codex-social/planner-assets` contains 6 PNG working assets, 6 TXT copy files, and 12 JPEG files including cropped/fallback originals
- no dedicated card-news Markdown files were found in the project
- the card-news set is not currently stored as 60 Markdown files
- detailed inventory is saved in `docs/cardnews-inventory.md`

## Notion References

Main workspace hub:

- `GoodmanSEO`

Important Notion pages recently updated or created:

- `리포지셔닝 및 가격 방향 재정리 - 2026-04-11`
- `마감 리포트 - 2026-04-11`
- `마감 리포트 - 2026-04-11 추가 반영`
- `SNS 포스팅 6개 재작성 및 분석 - 2026-04-12`

## Meta / Planner Notes

- Instagram planner scheduling was working in Meta Business Suite.
- Facebook Page / Instagram connection in Meta was confusing because of mixed portfolio and individual ownership states.
- At one point, the Facebook Page showed `Owned by: Individual people`.
- If future work touches Meta setup again, verify ownership and page access before troubleshooting planner issues.

## Known Local-Only Changes

These files still had local uncommitted changes outside the shipped work during this thread:

- `src/components/ContactForm.jsx`
- `src/pages/StarterPackage.jsx`

Treat them carefully in future threads and do not assume they are already reflected on `main`.

## Recommended Next Step

Most natural next step:

- review remaining local-only pages and decide whether `StarterPackage.jsx` should be kept, redirected, or merged into pricing
- then check whether `ContactForm.jsx` should be aligned again with the simplified free-check / inquiry flow

## Recommended Start Prompt For Future Threads

Use something like:

`Please read [CLAUDE.md](F:\Antigravity\goodmanseo\CLAUDE.md) and [current-status.md](F:\Antigravity\goodmanseo\docs\current-status.md) first, then continue the GoodmanSEO project from there.`

## When Updating This File

Update this file whenever one of these changes:

- homepage positioning
- pricing direction
- AI business page offer or location
- social schedule
- Meta setup status
- current top priorities
