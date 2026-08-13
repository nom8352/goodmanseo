# GoodmanSEO Project Context

This file is the first place to read when starting a new thread in this project.

## Project Summary

GoodmanSEO is positioned as a service for local service businesses that need a clearer online presence and better inquiry flow.

The current core message is:

`How does my business look online right now?`

GoodmanSEO helps review and align:

- Google Business Profile
- Website
- Instagram
- Facebook Page

The service should read as:

- not a generic website builder
- not a vague "online structure" consultancy
- a practical review and cleanup service that helps businesses see what is missing and what should be fixed first

## Current Positioning

Prefer language like:

- online channels
- review
- check what is missing
- see everything together
- free check
- inquiry flow

Avoid leading with language like:

- structure
- online structure
- website builder
- abstract consulting language

## Audience

Primary audience:

- Sydney and Australia-based Korean local service businesses

Secondary audience:

- remote clients who need Korean and English support

## Current Funnel Direction

Homepage entry point:

- free online check

Then:

- paid diagnostic / setup / website / SEO / ongoing support options

The homepage should create interest and trust.
The pricing page should explain the paid options after that.

## Current Priorities

Read [current-status.md](F:\Antigravity\goodmanseo\docs\current-status.md) for the latest working state.

High-level current priorities:

- keep positioning unified around free online check + online channel review
- align homepage, pricing, and social messaging
- keep Google + website + Instagram + Facebook as a bundled story
- make every message easier to understand for a small business owner

## Daily AI Key News Series

GoodmanSEO also publishes one global AI key-news brief per day. Preserve these rules:

- publish one searchable Korean blog post and one matching `1080x1350` PNG image
- cover global AI only; do not force an Australia angle
- use 4 to 8 high-signal items verified against original sources
- keep the writing factual and compact, without GoodmanSEO commentary or filler
- retain a clickable original-source link for every item in the blog post
- derive the image from the same post data so titles, dates, figures, and source names match
- use the white newsprint design: large serif `AI NEWS BRIEF`, teal rules and labels, and a simple single-column news flow
- do not add market indexes, ads, weather, tool rankings, or decorative icon-card grids
- publish to the GoodmanSEO site only; KakaoTalk and X sharing remain manual user actions

Implementation sources:

- daily post data: `src/data/blogPosts.js`
- page rendering: `src/pages/BlogDetail.jsx`
- image renderer: `scripts/generate-ai-keynews-image.mjs`
- image command: `npm run generate:ai-keynews-image`

## Working Rules For Future Threads

When starting a new task in this repo:

1. Read this file.
2. Read [current-status.md](F:\Antigravity\goodmanseo\docs\current-status.md).
3. If the task is about blog writing or blog copy editing, read [blog-writing-tone-guide.md](F:\Antigravity\goodmanseo\docs\blog-writing-tone-guide.md) and follow its tone rules.
4. If the task is about messaging, design, homepage, pricing, or social content, preserve the positioning above.
5. If there is a conflict between older copy and this file, prefer this file and the current-status document.


## Important Recent Context

- Instagram planner posts were prepared for a two-week, three-posts-per-week cadence.
- Social post image assets live under `F:\Antigravity\goodmanseo\.codex-social\planner-assets`.
- Cropped Instagram-ready JPEGs `001.jpeg` to `006.jpeg` were prepared as `1080x1080`.
- A Notion page was created to store the rewritten social post analysis and final copy:
  `SNS 포스팅 6개 재작성 및 분석 - 2026-04-12`

## If You Need More Context

Useful project folders:

- `src/` for site code
- `docs/` for local reference docs
- `wiki/` for structured LLM project memory and source maps
- `.codex-social/planner-assets/` for social planner assets

If a future thread feels missing context, update `docs/current-status.md` rather than relying on chat memory.


