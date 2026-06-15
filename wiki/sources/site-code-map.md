# Site Code Map

Last updated: 2026-06-16

## Stack

- React 19
- Vite 8
- React Router
- Tailwind CSS
- Framer Motion
- lucide-react
- Three.js / React Three Fiber / Drei

## Commands

- Dev server: `npm run dev`
- Production build: `npm run build`
- Lint: `npm run lint`
- Preview: `npm run preview`

`npm run build` runs `vite build` and then `node scripts/generate-static-pages.mjs`.

## App Routes

Defined in `src/App.jsx`:

- `/`: `src/pages/Home.jsx`
- `/starter-package`: `src/pages/StarterPackage.jsx`
- `/ai-business`: `src/pages/AIBusiness.jsx`
- `/pricing`: `src/pages/WebPricing.jsx`
- `/blog`: `src/pages/Blog.jsx`
- `/blog/:postId`: `src/pages/BlogDetail.jsx`
- `/contact`: `src/pages/Contact.jsx`

## Shared Components

- `src/components/Navbar.jsx`: top navigation and mobile menu
- `src/components/Footer.jsx`: site footer
- `src/components/ContactForm.jsx`: inquiry form
- `src/components/Hero3D.jsx`: homepage 3D hero visual
- `src/components/Seo.jsx`: page metadata and JSON-LD support

## Data Files

- `src/data/siteSeo.js`: site URL, organization JSON-LD, website JSON-LD
- `src/data/blogPosts.js`: 10 blog articles aligned with the current positioning

## Current Page Roles

### Homepage

Source: `src/pages/Home.jsx`

Role:

- Lead with free online check.
- Explain that Google, website, Instagram, and Facebook should be reviewed together.
- Send users to `/contact` or `/pricing`.

Core message:

- "지금 내 비즈니스, 온라인에서 어떻게 보일까요?"

### Pricing

Source: `src/pages/WebPricing.jsx`

Role:

- Show services and prices in a scannable hierarchy.
- Explain free check, paid diagnostics, website packages, SEO, Google Business Profile, monthly management, and education programs.

### AI Business

Source: `src/pages/AIBusiness.jsx`

Role:

- Position AI help as practical automation for owner-operators.
- Offer online study group, online 1:1 mentoring, and offline Brisbane workshop.

### Blog

Sources:

- `src/pages/Blog.jsx`
- `src/pages/BlogDetail.jsx`
- `src/data/blogPosts.js`

Role:

- Support trust, search intent, and conversion.
- Current structure is image-free and text-first.

### Contact

Sources:

- `src/pages/Contact.jsx`
- `src/components/ContactForm.jsx`

Role:

- Handle free check, quick diagnosis, all-in-one diagnosis, and general inquiries.
- Accepts query parameter `type`, defaulting to `free-check`.

## Known Caution

`docs/current-status.md` says these had local uncommitted changes during a prior thread:

- `src/components/ContactForm.jsx`
- `src/pages/StarterPackage.jsx`

Always verify current git status before changing either file.
