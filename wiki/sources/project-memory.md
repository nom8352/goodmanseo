# Project Memory Sources

Last updated: 2026-06-16

## Primary Local Memory

### `PRODUCT.md`

Purpose:

- Official Impeccable strategic context.
- Defines register, users, product purpose, brand personality, anti-references, design principles, and accessibility baseline.

Use it for:

- Design, UI, copy, homepage, pricing, social-card, and visual-direction work.

Limits:

- It is strategic context, not source-of-truth for current prices or route behavior.

### `DESIGN.md`

Purpose:

- Official Impeccable visual design system in DESIGN.md format.
- Defines colors, typography, elevation, components, and design do/don't rules.

Use it for:

- Keeping generated pages and components visually consistent.

### `.impeccable.md`

Purpose:

- Legacy design context from the older teach-impeccable workflow.

Use it for:

- Historical reference only. Prefer `PRODUCT.md` and `DESIGN.md`.

### `AGENTS.md`

Purpose:

- Local agent instructions for this folder.
- Defines the read order for future threads and the editing guardrail.

Use it for:

- Quickly orienting Codex-style agents to this wiki and the project memory files.

### `CLAUDE.md`

Purpose:

- First project context file for future threads.
- Defines GoodmanSEO positioning, audience, funnel direction, and working rules.

Use it for:

- Messaging guardrails.
- Audience assumptions.
- Deciding whether new copy fits the current project direction.

Limits:

- It is a high-level context file, not a full inventory.
- Verify exact current file state in source before making implementation claims.

### `docs/current-status.md`

Purpose:

- Latest working status as of 2026-04-14.
- Records website direction, AI page notes, blog status, social schedule, asset status, Notion references, and known local-only changes.

Use it for:

- Starting a future thread without asking the user to repeat background.
- Checking current priorities before editing homepage, pricing, AI business, blog, social, Meta, or contact flow.

Limits:

- It may drift as source files change.
- Known local-only changes listed there must be verified with `git status`.

## Supporting Docs

### `docs/cardnews-inventory.md`

Purpose:

- Confirms the current card-news storage format.

Key claim:

- The card-news set is mostly image/TXT assets, not dedicated Markdown documents.

Use it for:

- Any future audit asking whether card-news files exist and in what format.

### `docs/goodmanseo마감.md`

Purpose:

- Wrap-up for a YouTube/Notion strategy thread dated 2026-04-22.

Use it for:

- YouTube channel strategy, Notion database context, and cross-project content expansion ideas.

Limits:

- Some Notion cleanup was explicitly marked unfinished or requiring manual confirmation.

### `docs/SEARCH_CONSOLE_CHECKLIST.md`

Purpose:

- Simple checklist for Search Console setup and indexing.

Use it for:

- SEO deployment/indexing follow-up after page or sitemap changes.

## Design References

### `deisngMD/DESIGN-airbnb.md`

Purpose:

- Analysis of Airbnb-style design tokens and product UI feel.

Use it for:

- Inspiration only. Do not blindly apply Airbnb-like consumer marketplace styling to GoodmanSEO.

### `deisngMD/DESIGN-apple.md`

Purpose:

- Analysis of Apple-style marketing layout, typography, and product presentation.

Use it for:

- Inspiration only. GoodmanSEO should stay practical and owner-focused.
