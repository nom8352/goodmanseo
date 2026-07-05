# Sample Report Design Rules - 2026-07-04

## Purpose

This note records the approved design direction for the GoodmanSEO sample report page.

The sample report page should feel like a report/PDF preview, not like a homepage, landing page, or service sales page.

Current route:

- `/ai-report/sample-luna-skin-clinic`
- `/ai-report/sample-sydney-home-clean-co`
- `/ai-report/sample-maple-cafe-catering`
- `/ai-report/sample-ai-skills-bootcamp`
- `/ai-report/sample-clientflow-studio`

Current source file:

- `src/pages/AIReportSample.jsx`
- `src/data/aiReportSamples.js`

## Design Direction

The page should read as a polished business report document:

- compact report cover/header
- white paper-like report surface
- clear navy-black body text
- subtle warm off-white outer page background
- restrained beige/gold only for labels, icons, and small accents
- common site navigation/footer shared with the main site

Do not make the first section feel like a marketing hero.

## Navigation And Footer

The sample report page uses the same global site shell as the homepage:

- `Navbar`
- `Footer`

Do not create a separate report-only header or footer unless explicitly requested.

The route is still a web page, but the content inside should feel like a PDF/report sample.

## Report Cover/Header

The top report block should be compact.

Current intent:

- not a large homepage hero
- about half or less of a normal landing hero height
- reads like a report cover summary
- title and score card are centered as a grouped layout, not pushed to far left/right edges

Layout rules:

- keep the full report paper width, but constrain the inner cover content
- title column and score card should sit closer together
- avoid excessive empty horizontal distance between the title and score card
- score card should be compact, around `260px` wide on desktop

Title hierarchy:

- business name is the primary title
- `AI 비즈니스 진단 리포트` is a smaller subtitle
- do not make both lines the same size

Current hierarchy:

- `Luna Skin Clinic`: larger serif title
- `AI 비즈니스 진단 리포트`: smaller serif subtitle

## Repeated Sample Wording

Do not repeat visible “sample report” disclaimers at the beginning.

Avoid repeating:

- `샘플 리포트입니다`
- `샘플 안내`
- `Sample Report`

The page can use one quiet context label such as `AI Business Report`, but the first screen should look like an actual report rather than a disclaimer page.

SEO metadata may still mention that this is an example/sample if needed, but visible page copy should stay report-like.

## Typography

Use the same broad site typography system, but adapt it to a report surface:

- report/business title: serif
- report subtitle: serif, smaller than the business name
- section headings: serif title with compact label
- body text: readable sans-serif, compact and clear

Text should not be oversized.

The report page is for reading and PDF-style scanning, so avoid homepage-scale type.

## Text Color

Important distinction:

- Body text should be navy-black / near-black.
- Small accents may use beige/gold.

Use navy-black for:

- paragraphs
- list items
- table content
- main explanations
- recommendation text
- final card body text

Use muted beige/gold only for:

- small uppercase labels
- metadata labels
- icons
- tiny score support text
- decorative section labels

Do not turn all text beige.

Do not remove all warm accents either. The desired balance is black report text with restrained warm report details.

## Color Rules

Primary text:

- `#102133`

Allowed muted support text:

- `#44515d`
- `#566471`

Warm accent details:

- `#a9844d`
- `#9a8a75`
- `#8b7862`
- `#7a6f62`
- `#9b8054`

Backgrounds:

- outer page: warm off-white, such as `#f7f2ec`
- report paper: white
- inner report cards/panels: white
- dark score/summary cards: Goodman navy, such as `#102133`

Avoid beige-filled internal boxes. Beige should not become the fill color of repeated content panels.

## Cards And Panels

Report panels should feel like paper sections:

- white background
- thin warm-gray border/ring
- low-radius corners
- subtle shadow only where needed

Avoid:

- large rounded marketing cards
- repeated beige fill boxes
- nested card-heavy marketing layout
- excessive decorative shadows

## Report Body Structure

The body should start quickly after the compact cover.

The first major content section is:

- `Executive Summary`

Avoid inserting a large “sample guide” or explanation section before the actual report content unless explicitly requested.

The report sections should remain easy to scan:

- numbered section markers
- concise section title
- compact body copy
- lists/tables where helpful

## Current Implementation Notes

As of this note, `src/pages/AIReportSample.jsx` has:

- shared global `Navbar` and `Footer` from `src/App.jsx`
- compact top report cover
- centered inner cover layout
- reduced score card width
- removed early visible sample/disclaimer repetition
- navy-black body text
- warm accents restored only on small labels/icons/details
- white internal panels instead of beige-filled boxes

## Current Content Structure

Updated on 2026-07-06:

- all five sample reports use the same deep report structure
- each sample has `methodology` rows and 13 ordered sections
- sections begin with `Executive Summary` and end with `Final Recommendation`
- non-Luna samples now include industry-specific evidence maps, UX/CRO tables, SEO/content checks, local or funnel review, competitor positioning, AI persona simulation, business/CEO review, final reasoning, and action roadmap
- the top Executive Summary may include compact score cards and a Top 3 priority table

Keep future sample additions on this same structure unless the user explicitly asks for a shorter teaser.

## Do Not Regress

Do not:

- make the report cover look like the homepage hero
- reintroduce separate sample-page navigation
- make all report body copy beige/brown
- remove all warm accent details
- add a large “샘플 안내” section before `Executive Summary`
- spread title and score card to opposite far edges of the report paper
- use big landing-page copy scales

If future changes are made, keep the page aligned with this principle:

The sample report page is a web-rendered preview of a report/PDF design, not a marketing landing page.
