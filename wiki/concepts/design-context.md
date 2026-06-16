# Design Context

Last updated: 2026-06-16

Primary sources:

- `PRODUCT.md`
- `DESIGN.md`
- `.impeccable/design.json`
- `docs/work-summary.md`

Legacy source:

- `.impeccable.md`

## Register

Default Impeccable register:

- `brand`

This is a marketing/service website, not an app dashboard.

## Users

GoodmanSEO is for Korean-speaking small business owners in Australia, especially Sydney and nearby regions. They are usually busy owner-operators who want a trustworthy online presence and a clear inquiry path without needing to understand every SEO or marketing detail.

## Brand Personality

Use this three-word anchor:

- friendly
- practical
- trustworthy

The interface should feel like a calm partner helping the owner see what is missing and where to start.

## Current Aesthetic Direction

The current canonical design system in `DESIGN.md` is a light aqua checkup theme:

- soft aqua / blue gradients
- white content cards
- aqua teal accent `#007a8c`
- deep muted ocean accent `#005b70`
- dark readable text `#0f2230`
- Pretendard for Korean body text
- Outfit for display headings
- rounded white panels with restrained aqua shadows
- pill CTAs for primary/secondary page actions
- light glass header treatment

This replaced the older dark/glassy/lime direction. Do not use the older dark-theme description as the current design source of truth.

## Current Implementation Notes

From `docs/work-summary.md` and current source:

- pricing, AI business, contact, privacy, and terms pages use the light aqua theme
- footer and navigation have been moved toward light-theme styling
- contact form shadow and transitions were tightened for a cleaner, lighter feel
- mobile navigation and footer social links include accessibility-related labels/touch target work
- major Korean text blocks should use `word-break: keep-all` where appropriate

Homepage currently mixes the broader light-theme direction with a code-built device/dashboard hero visual. Re-check the rendered page before making further design decisions.

## Design Principles

- Lead with the customer-visible outcome.
- Keep one idea per section or line.
- Use short, human Korean sentences.
- Keep pricing visible and scannable.
- Preserve the Google + website + Instagram + Facebook story.
- Remove copy that does not help the owner decide.
- Make visual routes structurally distinct, not superficial variants.
- Use motion as supporting polish, not as the main explanation.

## Anti-References

Avoid:

- generic website-agency landing pages
- abstract consulting language
- pushy sales copy
- social cards that feel like ads
- reverting to the older dark/lime theme without a deliberate decision
- multiple design options with only tiny styling differences

