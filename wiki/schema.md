# Wiki Schema

Last updated: 2026-06-16

Use this schema when adding or updating wiki notes.

## Source Note

Use for raw evidence or a pointer to where raw evidence lives.

- `source`: file, folder, URL, Notion page, or local artifact
- `observed_on`: date checked
- `summary`: what the source contains
- `limits`: what the source does not prove
- `next_check`: when or why to verify again

## Claim Note

Use for a synthesized fact that future work may rely on.

- `claim`: concise statement
- `evidence`: source file(s) or exact local path(s)
- `confidence`: high, medium, or low
- `drift_risk`: low, medium, or high
- `verification`: how to re-check quickly

## Decision Note

Use when the project has chosen a direction.

- `decision`: what was decided
- `reason`: why this direction fits GoodmanSEO
- `applies_to`: pages, content, social assets, or workflows affected
- `revisit_if`: trigger that should reopen the decision

## Workflow Note

Use for repeatable operations.

- `goal`: what the workflow accomplishes
- `inputs`: files, credentials, pages, or artifacts needed
- `steps`: short executable checklist
- `stop_rule`: when to stop instead of guessing

## Open Question

Use when information is missing or uncertain.

- `question`: what is unknown
- `why_it_matters`: what depends on the answer
- `current_best_guess`: optional, clearly marked
- `needed_evidence`: what would resolve it
