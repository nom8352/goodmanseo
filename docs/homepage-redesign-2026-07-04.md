# Homepage Redesign Work Log - 2026-07-04

## Purpose

The homepage was redesigned to follow the provided reference image direction while preserving the existing GoodmanSEO message and page structure as much as possible.

The approved visual direction is:

- warm off-white hero area
- deep navy navigation, CTA, section bands, and footer
- compact typography similar to the reference image
- serif hero headline
- sans-serif logo, menu, and footer logo
- generated woman hero image with four floating cards
- practical local-business positioning, not generic business consulting copy

## Source Files Updated

- `src/pages/Home.jsx`
- `src/index.css`
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- `img/home-hero-consultant.png`
- `DESIGN.md`
- `docs/current-status.md`
- `wiki/concepts/design-context.md`
- `wiki/index.md`
- `wiki/log.md`

Related existing dirty files were not reverted.

## Hero Section

Updated the homepage hero to match the reference image more closely:

- replaced the previous hero visual with a generated consultant woman image
- added `img/home-hero-consultant.png`
- adjusted hero height so the woman is framed around the waist/lower waist area
- moved hero text higher
- changed hero H1 to a serif font
- kept the rotating problem-led headline structure
- changed hero buttons to compact rectangular buttons
- primary CTA uses dark navy
- secondary CTA uses a light/white button style
- preserved existing copy and structure unless the user asked for visual adjustment

Hero floating cards were reduced and arranged to four cards only:

- Inquiry Flow
- Client Review
- Google
- Revenue

Placement rules saved from the iteration:

- cards should not cover the woman's arm/body
- cards should not overlap each other
- the woman image should visually sit above nearby cards when depth conflicts happen
- the cards should be slightly staggered, not lined up too rigidly
- the transparent panel behind the woman can remain as a subtle background shape

## Common Issues Section

The section titled `혹시 이런 문제로 고민하고 계신가요?` was adjusted to match the reference-image density:

- full-width white background
- compact vertical padding
- smaller title
- smaller issue card title/body text
- smaller faded issue numbers
- `Common Issues` label changed from blue to muted gray/navy

The section should remain full-width white, not only a centered white panel.

## Service Section

The `서비스 소개` section was changed to the same dark navy visual system as the reference image:

- full-width dark navy band
- compact heading and description text
- small muted section label
- five service cards changed to low-radius dark translucent cards
- icons changed to small warm-line accents
- body text changed to muted blue-gray on navy
- card gaps and padding reduced

Important implementation note:

- global `section` CSS applies `max-width: 1200px`, so homepage full-width bands must explicitly use `max-w-none px-0`.

## AI Course Bridge

The `굳팀장 AI 실무 강의` bridge was restyled to sit inside the same dark navy flow:

- dark navy surrounding background
- warm off-white CTA panel
- compact icon, title, body copy, and button
- dark navy rectangular button
- reduced spacing between the service cards and the bridge panel

## Sample Site Section

The `업종별 샘플 사이트` section was also changed to match the dark navy system:

- full-width dark navy background
- compact heading and description
- sample cards changed to dark translucent cards
- image frames changed to low-radius dark-bordered frames
- `보기` link changed to a small warm accent
- lower CTA panel changed to warm off-white with dark navy button

## Removed Section

Removed the large score/gauge/improvement CTA section shown in the user's screenshot.

Removed content included:

- `내 비즈니스는 고객에게 어떻게 보일까요?`
- `기본 점검 점수`
- circular score gauge
- `주요 개선 포인트`
- related CTA visual cards

The homepage should not reintroduce this block unless explicitly requested.

## Footer

Footer was adjusted to match the reference-image style:

- dark navy footer background
- smaller, less bright text
- blue-gray text instead of pure white
- smaller social icons in subtle circular outlines
- tighter, more compact layout
- footer logo uses the same sans-serif logo style as the main navigation

## Logo And Navigation

Logo treatment was unified:

- main nav logo and footer logo both use sans-serif
- logo no longer uses serif
- logo uses strong weight with slight positive letter spacing
- menu text and CTA button text stay in the same sans-serif tone

## Saved Design Rules

The current homepage rules were saved in `DESIGN.md` and wiki memory.

Key locked rules:

- warm off-white hero
- deep navy full-width service/course/sample/footer areas
- serif hero headline only
- sans-serif logo/nav/footer logo
- compact typography
- low-radius cards and buttons
- muted blue-gray text on navy backgrounds
- four hero floating cards only
- no score/gauge/improvement CTA section

## Validation Performed

During the redesign, repeated checks were run after changes:

- `npx eslint src/pages/Home.jsx`
- `npm run build`
- `node .agents/skills/impeccable/scripts/detect.mjs --json src/pages/Home.jsx`
- `node .agents/skills/impeccable/scripts/detect.mjs --json src/index.css src/components/Navbar.jsx src/components/Footer.jsx`

Observed validation status:

- builds passed
- impeccable detector returned `[]`
- `src/pages/Home.jsx` still has an existing `React.useEffect` dependency warning for `headlines.length`
- full lint was not used as the reliable check because the repo has unrelated pre-existing lint noise outside this homepage work

## Local Preview

The local Vite server was already running at:

`http://127.0.0.1:5173`

## Deployment Status

This work log records local source changes only.

Deployment/push was not performed in this thread unless separately requested.

## Subpage Design Rollout

After the homepage rules were locked, the same visual system was extended across the subpages and the sample report page.

Updated surfaces:

- `/pricing`
- `/starter-package`
- `/ai-business`
- `/ai-course`
- `/ai-report`
- `/ai-report/sample-luna-skin-clinic`
- `/blog`
- `/blog/:postId`
- `/contact`
- `/privacy`
- `/terms`
- shared `ContactForm`
- shared button/card styles in `src/index.css`

Applied rules:

- replaced the older aqua/teal page palette with the warm off-white and Goodman navy palette
- changed shared `primary-button` and `secondary-button` to low-radius rectangular buttons
- reduced shared section title scale to match the compact homepage density
- adjusted shared feature/article/pricing cards to lower-radius panels with subtler navy shadows
- changed remaining aqua badges, borders, and icon accents to navy/warm-neutral tones
- changed large `rounded-2xl` / `rounded-3xl` cards to lower-radius panels
- kept circular UI where the shape is functional, such as avatars, score dials, and small round indicators
- changed Framer Motion imports in affected pages to `motion as Motion` to satisfy lint
- updated the standalone sample report header to use the same sans-serif GOODMANSEO logo style and deep navy header
- removed the sample report side-border quote accent flagged by the design detector

Validation after rollout:

- targeted ESLint passed for updated subpage files and `ContactForm`
- impeccable detector returned `[]`
- `npm run build` passed

The build still reports the existing bundle-size warning, but no build failure.
