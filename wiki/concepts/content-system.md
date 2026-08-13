# Content System

Last updated: 2026-08-13

## Blog

Source:

- `src/data/blogPosts.js`

Current structure:

- 16 articles
- image card list and detail pages
- PNG source images plus optimized WebP delivery images under `public/blog/`
- longer article excerpts for static meta descriptions and SERP snippets
- selected priority articles have deeper body content
- detail pages include contextual service CTAs and three related posts
- static generated blog pages include `BlogPosting` JSON-LD
- practical search/trust topics aligned with the current positioning

### Daily AI Key News

Decision:

- `decision`: Publish one global AI key-news text post and one matching `1080x1350` PNG each day.
- `reason`: The searchable article supports the site while the same compact visual can be shared manually without maintaining separate copy.
- `applies_to`: `src/data/blogPosts.js`, `src/pages/Blog.jsx`, `src/pages/BlogDetail.jsx`, `scripts/generate-ai-keynews-image.mjs`, `public/blog/`, and `public/sitemap.xml`.
- `revisit_if`: The user later asks for automatic X or KakaoTalk posting, a different image ratio, or commentary-led analysis.

Workflow:

- `goal`: Publish a factual Korean AI brief whose page and image contain the same news.
- `inputs`: Recent AI News Radar signals plus each selected item’s original source.
- `steps`: Check feed freshness; select 4–8 high-signal items; verify original pages; add one dated post with `newsSection` blocks; run `npm run generate:ai-keynews-image`; update the sitemap; lint, build, inspect desktop/mobile, deploy, and verify the public URL.
- `stop_rule`: Do not invent, translate an unverified aggregator claim, force filler, or publish when the original source cannot confirm the key fact.

Design rule:

- White newsprint surface, large serif `AI NEWS BRIEF` masthead, teal rules and labels, and a simple single-column grouped list.
- No market index, advertising, weather, popularity ranking, or decorative icon-card grid.
- X and KakaoTalk distribution remain manual; automation ends after GoodmanSEO publication and public verification.

Topic clusters:

- Google Business Profile
- online basics
- Instagram/SNS trust gaps
- homepage conversion
- channel consistency
- SEO readiness
- AI web design
- AI-assisted operations

Role:

- Build trust.
- Answer search-intent questions.
- Support conversion into free check or paid diagnosis.

## Instagram / Card News

Sources:

- `.codex-social/planner-assets/`
- root `ig-post-*.png`
- `docs/cardnews-inventory.md`

Current themes from project memory:

1. Instagram alone is not enough
2. Four things customers check first
3. What the free check actually reviews
4. Small businesses need the basics first
5. Inquiries drop when channels are disconnected
6. How does my business look online right now?

Role:

- Translate the same positioning into practical, readable social posts.

## YouTube / Notion Content Layer

Source:

- `docs/goodmanseo마감.md`

Core YouTube message:

> AI와 함께라면, 모르는 분야도 전문가처럼 시작할 수 있다

Status:

- Strategy and Notion database planning were documented.
- Some cleanup in a separate script-list database may still need manual confirmation.

Use this layer carefully:

- It is adjacent to GoodmanSEO but not identical to the main website funnel.
- Keep website/service messaging grounded in the free-check and online-channel review story.
