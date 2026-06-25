# Site Code Map

Last updated: 2026-06-16

## Stack

- React 19
- Vite 8
- React Router
- Tailwind CSS
- Framer Motion
- lucide-react
- Three.js / React Three Fiber / Drei dependencies are present, though current homepage hero uses a code-built device/dashboard visual.

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
- `/privacy`: `src/pages/Privacy.jsx`
- `/terms`: `src/pages/Terms.jsx`

## Static Generation And Sitemap

Defined in `scripts/generate-static-pages.mjs` and `public/sitemap.xml`:

- `/ai-business`
- `/privacy`
- `/terms`

`docs/work-summary.md` says these were added to avoid SEO/indexing gaps. Re-run `npm run build` before treating that as current verification.

## Shared Components

- `src/components/Navbar.jsx`: top navigation and mobile menu
- `src/components/Footer.jsx`: site footer with legal links
- `src/components/ContactForm.jsx`: inquiry/diagnosis form
- `src/components/Hero3D.jsx`: existing 3D component, but not the current homepage hero entry point
- `src/components/Seo.jsx`: page metadata and JSON-LD support

## Data Files

- `src/data/siteSeo.js`: site URL, organization JSON-LD, website JSON-LD
- `src/data/blogPosts.js`: 10 blog articles aligned with the current positioning

## Current Page Roles

### Homepage

Source: `src/pages/Home.jsx`

Role:

- Lead with practical business visibility problems.
- Explain Google, website, and SNS as connected channels.
- Send users to `/contact` for free diagnosis or `/pricing` for packages.

Current hero:

- rotating problem-led H1 phrases
- code-built `HeroDevicesVisual`

### Pricing

Source: `src/pages/WebPricing.jsx`

Role:

- Show services and prices in a compact hierarchy.
- Explain homepage packages, diagnostics, SEO & marketing, GBP, and FAQ.

Current note:

- monthly management and AI education pricing sections are not visible in the current page.

### AI Business

Source: `src/pages/AIBusiness.jsx`

Role:

- Position AI help as practical automation and marketing support.
- Current service cards are `AI 실전 멘토링`, `스튜디오 그룹`, and `워크숍 & 교육`.
- Current page does not visibly show public AI prices.

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

- Handle free check, AI diagnosis, and general inquiries.
- Accepts query parameter `type`, defaulting to `free-check`.

### Legal

Sources:

- `src/pages/Privacy.jsx`
- `src/pages/Terms.jsx`

Role:

- Provide privacy policy and terms pages linked from the footer.
- Both are dated 2026-06-16.

## Known Caution

- Current working tree has many local modified/untracked files; check `git status --short` before editing.
- `src/assets/home-hero-channels.png` exists locally but current `Home.jsx` does not import it.
- `무료 점검` and `무료 진단` are both used in source.
- `/starter-package` may conflict with newer `/pricing` package details.

