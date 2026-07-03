# GoodmanSEO LLM Wiki

Last updated: 2026-07-04

This is the project memory layer for GoodmanSEO. Use it as the first structured map after reading `CLAUDE.md` and `docs/current-status.md`.

## What This Project Is

GoodmanSEO is a Korean/English service for Australia-based local service businesses. The current positioning is:

> How does my business look online right now?

The service reviews Google Business Profile, website, Instagram, and Facebook together, finds what is missing, and helps the owner improve inquiry flow.

## Current Source Layers

- `CLAUDE.md`: primary project context and messaging guardrails
- `AGENTS.md`: local agent read order and project guardrails
- `PRODUCT.md`: official Impeccable strategic product context
- `DESIGN.md`: official Impeccable visual design system, updated on 2026-07-04 with the current homepage navy/off-white reference-image direction
- `docs/current-status.md`: latest operating status, priorities, social schedule, and known local-only changes
- `docs/2026-06-25-work-log.md`: June 25 blog, AI course landing, YouTube embed, build, and push work log
- `docs/work-summary.md`: latest local redesign / quality / SEO work summary report
- `docs/cardnews-inventory.md`: confirmed social/card-news asset inventory
- `docs/goodmanseo마감.md`: YouTube/Notion wrap-up context from 2026-04-22
- `src/`: live React/Vite website source
- `.codex-social/planner-assets/`: social planner image/copy assets
- `deisngMD/`: external design-system analysis references

## Wiki Map

- [Schema](schema.md): how wiki claims, sources, workflows, and open questions should be recorded
- [Log](log.md): change log for wiki updates
- [Project Memory Sources](sources/project-memory.md): local docs and what each one is for
- [Site Code Map](sources/site-code-map.md): routes, components, data files, and build commands
- [Social Assets](sources/social-assets.md): Instagram/card-news files and format status
- [Positioning](concepts/positioning.md): durable messaging rules
- [Design Context](concepts/design-context.md): official Impeccable context and UX principles
- [Service Offers](concepts/service-offers.md): current offer hierarchy and prices visible in source
- [Current Site Content Snapshot](concepts/current-site-content.md): current homepage, business offers, AI business, and inquiry flow from source
- [Site Page Content Inventory](concepts/site-page-content-inventory.md): route-by-route content inventory for homepage and subpages
- [Content System](concepts/content-system.md): blog, social, and YouTube/Notion content layers
- [Resume Workflow](workflows/resume.md): how to start future GoodmanSEO threads
- [Ingest Workflow](workflows/ingest.md): how to add new evidence to this wiki
- [Verification Workflow](workflows/verification.md): lightweight checks before relying on wiki claims

## Current Practical Next Step

The strongest next project steps are:

1. Review the 2026-07-04 homepage redesign on desktop and mobile before deployment.
2. Decide whether public wording should standardize on `무료 점검` or `무료 진단`.
3. Decide whether `/starter-package` should remain public, redirect, or merge into `/pricing`.
4. Confirm whether AI service prices should remain hidden or return to the AI/pricing pages.

## Do Not Forget

- Treat existing uncommitted/untracked files as user work unless the user asks to clean them.
- Do not assume card-news exists as Markdown. The confirmed persistent card-news set is mostly image/TXT assets.
- Keep new copy practical, owner-focused, and non-salesy.
- Do not assume local changes are deployed or pushed until GitHub/Cloudflare state is checked.
- Current pushed site includes `/ai-course`, `AI 강의` nav, homepage course bridge, AI business course bridge, and a YouTube embed for `kuCymkvGF9w`.
