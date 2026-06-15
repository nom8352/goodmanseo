# Verification Workflow

Last updated: 2026-06-16

Use this before relying on wiki facts for edits, audits, or user-facing answers.

## Lightweight Checks

For project state:

- `git status --short`
- check `CLAUDE.md`
- check `docs/current-status.md`
- check relevant `wiki/` page

For source files:

- use `rg --files` to confirm paths
- read the exact file before editing
- prefer `rg` over broad recursive shell output

For card-news assets:

- check `docs/cardnews-inventory.md`
- check root `ig-post-*.png`
- check `.codex-social/planner-assets/`
- answer literal format questions first

For website changes:

- run `npm run build`
- if changing UI, inspect locally in browser when practical

## Drift Rules

High drift:

- prices
- public website copy
- current git status
- Notion/Meta setup
- social schedule

Medium drift:

- service hierarchy
- contact form inquiry types
- asset inventory

Low drift:

- general positioning principles
- project folder map
- wiki schema

## Stop Rule

If verification conflicts with memory, prefer currently verified files and update the wiki/log if the difference matters.
