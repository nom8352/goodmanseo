# Resume Workflow

Last updated: 2026-06-16

Use this when starting a new GoodmanSEO thread.

## Read Order

1. `CLAUDE.md`
2. `docs/current-status.md`
3. `wiki/index.md`
4. Relevant wiki concept/source/workflow page
5. Exact source file(s) for the requested task

## First Response Pattern

Briefly summarize:

- current positioning
- the specific area the user asked about
- any known caution from local memory

Then suggest the next practical step if helpful.

## Permission Boundary

If the user only asks to continue or resume, do not start editing. Summarize state and wait for the requested next action.

If the user asks for a concrete task, proceed after reading the relevant memory and source files.

## Git Caution

Before editing, run:

- `git status --short`

Treat existing untracked or modified files as user work unless the user explicitly asks to clean or revert them.
