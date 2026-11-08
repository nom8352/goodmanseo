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

GoodmanSEO should read as a local SEO service that gets Brisbane small businesses to show up on Google when customers search for the service.

Preserve this story:

- 무료 순위 점검 as the entry point
- 구글 상위 노출 3개월 프로그램 as the main offer, 월 유지 관리 after it
- the anonymised North Brisbane studio case as proof, with dated numbers
- "보장하지 않습니다" plus a monthly report as the trust stance, described as a way of working rather than binding promises
- a website is a tool inside the program, not the lead offer

Avoid turning the project back into a website-agency pitch, a basic-setup service, or an AI education brand. See `CLAUDE.md` for the full wording rules and the proof-story handling rules.

## Editing Guardrail

Run `git status --short` before editing.

Treat existing modified or untracked files as user work. Do not revert or clean them unless explicitly asked.
