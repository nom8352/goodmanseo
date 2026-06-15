# GoodmanSEO Agent Instructions

## Start Here

When starting work in this project, read these first:

1. `CLAUDE.md`
2. `docs/current-status.md`
3. `wiki/index.md`

Then read the exact source files for the requested task.

## Project Memory

This project uses a file-based LLM wiki:

- `wiki/index.md`: main map
- `wiki/schema.md`: note format
- `wiki/sources/`: source maps and evidence pointers
- `wiki/concepts/`: durable project concepts
- `wiki/workflows/`: repeatable project workflows

If a thread becomes long or project direction changes, update `docs/current-status.md` and the relevant `wiki/` page before ending.

## Impeccable Design Context

This project is set up with the official `pbakaus/impeccable` project-local Codex install.

Before design, UI, copy, homepage, pricing, social-card, or visual-direction work, read:

1. `PRODUCT.md`
2. `DESIGN.md`
3. `.agents/skills/impeccable/SKILL.md`

Use `$impeccable <command> <target>` semantics when the task is design-related. For example:

- `$impeccable distill homepage` for shortening and simplifying the homepage
- `$impeccable clarify homepage` for UX copy clarity
- `$impeccable critique homepage` for a scored design review
- `$impeccable polish pricing page` for a final quality pass

`.impeccable.md` is legacy context only; do not treat it as canonical over `PRODUCT.md` and `DESIGN.md`.

## Positioning Guardrail

GoodmanSEO should read as a practical online-channel review and cleanup service for Korean/Australian local service businesses.

Preserve this story:

- free online check
- Google Business Profile, website, Instagram, and Facebook together
- what is missing
- what to fix first
- inquiry flow

Avoid turning the project into a generic website-agency pitch or abstract consulting language.

## Editing Guardrail

Run `git status --short` before editing.

Treat existing modified or untracked files as user work. Do not revert or clean them unless explicitly asked.
