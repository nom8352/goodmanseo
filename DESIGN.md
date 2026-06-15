---
name: "GoodmanSEO"
description: "A practical online-channel review service for Korean-speaking small business owners in Australia."
colors:
  accent-primary: "#d8ff72"
  accent-secondary: "#8ad7ff"
  accent-tertiary: "#f1efe8"
  bg-dark: "#0b0f16"
  bg-darker: "#07090e"
  panel-dark: "#090d13"
  nav-dark: "#0a0e15"
  text-main: "#f5f7fb"
  text-muted: "#a8b1c7"
  text-soft: "#7f8ba3"
  ink-on-accent: "#091018"
  glass-border: "#ffffff1a"
  glass-highlight: "#ffffff29"
typography:
  display:
    fontFamily: "Outfit, Pretendard, sans-serif"
    fontSize: "clamp(2.2rem, 3.4vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  hero:
    fontFamily: "Outfit, Pretendard, sans-serif"
    fontSize: "clamp(3.4rem, 8vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.93
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Outfit, Pretendard, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0"
  label:
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.14em"
rounded:
  sm: "0.9rem"
  md: "1rem"
  lg: "1.75rem"
  panel: "2rem"
  pill: "9999px"
spacing:
  xs: "0.5rem"
  sm: "0.9rem"
  md: "1.25rem"
  lg: "1.5rem"
  xl: "2.75rem"
components:
  button-primary:
    backgroundColor: "{colors.accent-primary}"
    textColor: "{colors.ink-on-accent}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 1.25rem"
    height: "2.65rem"
  button-secondary:
    backgroundColor: "{colors.panel-dark}"
    textColor: "{colors.text-main}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 1.25rem"
    height: "2.65rem"
  card-panel:
    backgroundColor: "{colors.panel-dark}"
    textColor: "{colors.text-main}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  chip:
    backgroundColor: "{colors.panel-dark}"
    textColor: "{colors.text-main}"
    rounded: "{rounded.md}"
    padding: "0.7rem 0.9rem"
---

# Design System: GoodmanSEO

## 1. Overview

**Creative North Star: "The Calm Online Checkup"**

GoodmanSEO should feel like a calm, practical review desk for a small business owner who wants to know how their business looks online. The visual system can feel modern and polished, but it must always make the next decision easier: check current state, see what is missing, choose the right next step.

The current interface is a dark, atmospheric brand site with glassy panels, lime and light-blue accents, rounded controls, and Korean-first typography. This polish should support clarity rather than become the message. The system explicitly rejects generic website-agency landing pages, abstract consulting language, salesy social-ad styling, and long copy blocks that make busy owners work too hard.

**Key Characteristics:**

- Korean-first, owner-friendly, scan-first communication.
- Dark tinted surfaces with bright but sparse accent use.
- Rounded controls and panels, but no unnecessary nested-card scaffolding.
- Practical hierarchy: problem, check scope, next action.
- Motion and 3D as atmosphere, never as a substitute for clarity.

## 2. Colors

The palette is a dark operational base with two service accents: lime for action and light blue for review/technology cues.

### Primary

- **Checkup Lime** (`accent-primary`): The main action color for primary CTAs, success cues, and selective emphasis. Use sparingly so it remains meaningful.

### Secondary

- **Review Blue** (`accent-secondary`): The supporting accent for icons, secondary emphasis, and the online-channel/technology layer.

### Tertiary

- **Soft Trust White** (`accent-tertiary`): A warm off-white highlight for restrained brand emphasis.

### Neutral

- **Midnight Base** (`bg-dark`): The body background and core brand atmosphere.
- **Deeper Midnight** (`bg-darker`): Lower-depth page background and footer-adjacent surfaces.
- **Panel Night** (`panel-dark`): Card, panel, and contained tool backgrounds.
- **Main Text** (`text-main`): Primary text on dark backgrounds.
- **Muted Text** (`text-muted`): Supporting copy when contrast remains readable.
- **Soft Text** (`text-soft`): Labels, metadata, and low-priority UI copy only.

### Named Rules

**The Sparse Accent Rule.** Lime is for decisions and confirmation. If every section glows, nothing is important.

**The Readability First Rule.** Muted text must stay readable on dark panels. Never use low-contrast gray for core explanations.

## 3. Typography

**Display Font:** Outfit with Pretendard fallback.
**Body Font:** Pretendard with system fallbacks.
**Label/Mono Font:** No separate mono style is part of the brand system.

**Character:** Outfit gives headings a modern, confident edge; Pretendard keeps Korean copy human and readable. The pairing should feel crisp but not tech-cold.

### Hierarchy

- **Hero** (900, clamp max 6rem, 0.93 line-height): Homepage brand statement only. Keep letter-spacing no tighter than `-0.04em`.
- **Display** (800, clamp 2.2rem to 3.6rem, 0.95 line-height): Section titles and major page headings.
- **Title** (800, 1.45rem, compact line-height): Card and package titles.
- **Body** (400-600, 0.9rem to 1rem, 1.65-1.8 line-height): Explanatory Korean copy, capped to readable line lengths.
- **Label** (700, 0.72rem to 0.82rem, tracked): Use sparingly for form labels, metadata, and one-off chips.

### Named Rules

**The Short Korean Line Rule.** Homepage and service copy should use short, human Korean sentences. Do not pack multiple ideas into one sentence.

**The No-Cramped Display Rule.** The existing source has several `-0.06em` to `-0.08em` display values. New work should use `-0.04em` as the tightest display tracking.

## 4. Elevation

The current system uses a hybrid of tonal layering, glass borders, backdrop blur, and soft ambient shadows. This gives depth to the dark surface, but it can become visually heavy if every element gets the same treatment.

### Shadow Vocabulary

- **Ambient Panel Lift** (`0 18px 60px rgba(0, 0, 0, 0.2), 0 8px 32px rgba(138, 215, 255, 0.08)`): Major panels only.
- **Primary CTA Glow** (`0 16px 44px rgba(216, 255, 114, 0.24)`): Primary action buttons only.
- **Focus Glow** (`0 0 0 4px rgba(216, 255, 114, 0.08)`): Input focus and keyboard focus support.

### Named Rules

**The No Decorative Glass Rule.** Glass treatment must frame a real decision, form, offer, or content group. Do not add blur just to make a section feel designed.

## 5. Components

### Buttons

- **Shape:** Full pill (`9999px`) for primary and secondary CTAs.
- **Primary:** Checkup Lime background with dark ink text, bold label, icon allowed when it clarifies direction.
- **Hover / Focus:** Small vertical lift is acceptable; pair it with visible focus states for keyboard users.
- **Secondary:** Transparent dark surface with light border and white text. Use for supporting navigation, not competing conversion.

### Chips

- **Style:** Soft dark panel, thin border, compact icon plus text.
- **State:** Use for scope tags like Google, website, Instagram, Facebook. Keep them short.

### Cards / Containers

- **Corner Style:** Existing cards use generous radii (`1.75rem` to `2rem`). Do not increase beyond this; use smaller radii for dense UI.
- **Background:** Dark translucent panels over the midnight base.
- **Shadow Strategy:** Major panels may use ambient lift; repeated cards should rely more on border and tonal separation.
- **Border:** Thin white-alpha borders.
- **Internal Padding:** `1.15rem` on mobile, `1.5rem` desktop baseline.

### Inputs / Fields

- **Style:** Dark translucent input, `1rem` radius, thin white-alpha border.
- **Focus:** Lime-tinted border plus subtle focus ring.
- **Error / Disabled:** Error states should use clear text and border treatment, not color alone.

### Navigation

The nav is a fixed top bar with the GoodmanSEO mark, concise page links, and a free-check CTA. Mobile uses a full-width dropdown panel. Keep labels short and avoid adding more nav items unless the owner can understand their role immediately.

### Signature Component

**Homepage 3D Hero.** The 3D background can carry atmosphere, but hero copy and CTAs must remain readable and first-priority.

## 6. Do's and Don'ts

### Do:

- **Do** lead with the free online check and the customer-visible question: "How does my business look online right now?"
- **Do** keep Korean copy short, direct, and owner-friendly.
- **Do** preserve the Google + website + Instagram + Facebook story on every core page.
- **Do** keep price tables scannable and explicit, especially where packages differ.
- **Do** use lime accents for real actions and blue accents for review/technology support.
- **Do** test mobile line wrapping for Korean headings and buttons.

### Don't:

- **Don't** make GoodmanSEO sound like a generic website-agency landing page.
- **Don't** lead with abstract "online structure" consulting language.
- **Don't** use salesy social ads or hype-heavy marketing copy.
- **Don't** add long explanatory sections where a busy owner needs one clear next action.
- **Don't** present near-duplicate social-card design options that only change surface styling.
- **Don't** use gradient text for new work; prefer solid text color and hierarchy.
- **Don't** nest cards inside cards or turn every section into a floating card.
