# Design Context

Last updated: 2026-07-04

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

The current canonical homepage design system in `DESIGN.md` is the 2026-07-04 reference-image direction:

- warm off-white hero background
- deep navy ink and dark full-width section bands
- primary navy `#102133`
- footer navy `#0f2132`
- muted blue-gray text on dark backgrounds
- compact section typography and small body text
- low-radius rectangular buttons and cards
- sans-serif logo/nav/footer logo
- serif hero headline only
- generated woman hero image with four floating cards

This replaces the earlier light aqua checkup theme for the homepage. Do not use the older aqua/checkup description as the homepage source of truth unless the user explicitly asks to restore it.

## Current Implementation Notes

From `DESIGN.md`, `docs/current-status.md`, and current source:

- homepage uses `img/home-hero-consultant.png` for the hero woman image
- hero has four floating cards only: Inquiry Flow, Client Review, Google, Revenue
- `혹시 이런 문제로 고민하고 계신가요?` is a full-width white section with compact typography
- service, course bridge, and sample-site sections are full-width dark navy bands
- footer is deep navy with smaller blue-gray text and matching sans-serif logo
- the score/gauge/improvement CTA section was removed from the homepage
- global `section` CSS can constrain width; homepage full-width bands need `max-w-none px-0`
- major Korean text blocks should use `word-break: keep-all` where appropriate

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

