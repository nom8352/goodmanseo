# Sample Sites Homepage Update - 2026-07-02

## Summary

GoodmanSEO homepage now shows seven sample websites as visual preview cards.

The old `진행 과정` homepage section was removed and replaced with an `업종별 샘플 사이트` section.

## What Changed

- Added seven static sample websites under `public/samples/`.
- Added homepage links to those sample websites.
- Replaced text-only sample cards with screenshot preview cards.
- Removed the per-card descriptive subcopy.
- Adjusted the homepage sample grid to show:
  - first row: 3 larger preview cards
  - second row: 4 smaller preview cards
- Added preview screenshots under `public/samples/previews/`.

## Homepage Placement

The sample section is placed after:

- service introduction
- AI course bridge

And before:

- final homepage CTA

This keeps the flow practical:

1. Explain the service.
2. Show real sample outputs.
3. Ask the visitor to request a free check.

## Source Files

- `src/pages/Home.jsx`
- `public/samples/`
- `public/samples/previews/`

## Sample Website URLs

- `/samples/north-lakes-commercial-cleaning/`
- `/samples/brisbane-commercial-cleaning/`
- `/samples/north-lakes-local-cafe/`
- `/samples/frame-pilates-studio/`
- `/samples/clearpath-mortgage-brokers/`
- `/samples/moreton-bay-pest-control/`
- `/samples/northside-drive-academy/`

## Preview Images

- `public/samples/previews/north-lakes-commercial-cleaning.jpg`
- `public/samples/previews/brisbane-commercial-cleaning.jpg`
- `public/samples/previews/north-lakes-local-cafe.jpg`
- `public/samples/previews/frame-pilates-studio.jpg`
- `public/samples/previews/clearpath-mortgage-brokers.jpg`
- `public/samples/previews/moreton-bay-pest-control.jpg`
- `public/samples/previews/northside-drive-academy.jpg`

## Verification

Completed checks:

- `npm run build` passed before both pushes.
- Live sample URLs returned HTTP 200 after the first push.
- Live sample URLs returned actual sample HTML titles, not only the GoodmanSEO SPA fallback.
- Desktop screenshot check confirmed the homepage sample section shows 3 cards on the first row and 4 cards on the second row.
- Mobile screenshot check confirmed cards stack without text overlap.

## Pushed Commits

- `af0ca41 Add sample website section`
- `ea5e2fd Add sample site previews`

## Notes For Future Edits

- Keep this section visual-first; screenshots work better than explanation-heavy cards.
- Keep card copy short: title plus `보기` is enough.
- If sample sites change later, regenerate the preview images so homepage thumbnails match the actual sample pages.
- If a dedicated `/samples` React page is added later, the homepage section can remain a compact preview and link to that page.
