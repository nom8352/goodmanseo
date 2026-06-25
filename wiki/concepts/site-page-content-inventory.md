# Site Page Content Inventory

Last updated: 2026-06-16

This inventory summarizes the current content of public routes in the React app. Use it when checking whether a page matches the current GoodmanSEO positioning.

## Source Note

- `source`: `src/App.jsx`, `src/components/Navbar.jsx`, `src/components/Footer.jsx`, `src/pages/Home.jsx`, `src/pages/WebPricing.jsx`, `src/pages/StarterPackage.jsx`, `src/pages/AIBusiness.jsx`, `src/pages/Blog.jsx`, `src/pages/BlogDetail.jsx`, `src/pages/Contact.jsx`, `src/components/ContactForm.jsx`, `src/pages/Privacy.jsx`, `src/pages/Terms.jsx`, `src/data/blogPosts.js`, `src/data/siteSeo.js`, `scripts/generate-static-pages.mjs`, `public/sitemap.xml`, `docs/work-summary.md`
- `observed_on`: 2026-06-16
- `limits`: Source-code inventory only. It does not prove Cloudflare has deployed the latest commit.
- `next_check`: Re-check after any route, offer, price, blog, legal, contact form, or navigation update.

## Public Routes

From `src/App.jsx`:

- `/`: homepage
- `/starter-package`: legacy/basic homepage package page
- `/ai-business`: AI business service page
- `/pricing`: service and pricing page
- `/blog`: blog index
- `/blog/:postId`: blog detail pages
- `/contact`: diagnosis and inquiry form
- `/privacy`: 개인정보처리방침
- `/terms`: 이용약관

## Static / SEO Routes

From `scripts/generate-static-pages.mjs` and `public/sitemap.xml`:

- `/ai-business` is included in static page metadata and sitemap
- `/privacy` is included in static page metadata and sitemap
- `/terms` is included in static page metadata and sitemap

`docs/work-summary.md` says this was done to avoid search-indexing gaps. Re-run `npm run build` before treating the claim as current verification.

## Global Navigation

From `src/components/Navbar.jsx`:

- Brand: `GOODMANSEO`
- Main links include home, pricing, blog, and AI business
- Primary nav CTA points to `/contact`
- Mobile menu button has an ARIA label

## Footer

From `src/components/Footer.jsx`:

- Brand: `GOODMANSEO`
- Brand meta: `구글 · 홈페이지 · SNS 통합 마케팅`
- Footer message: `고객이 신뢰하고 선택하는 온라인 환경을 만들어 비즈니스의 지속적인 성장을 함께합니다.`
- Quick links include home, AI business, pricing, blog, and contact/free diagnosis flow
- Contact email: `goodmanseo.sydney@gmail.com`
- Social icon links currently use placeholder `#` hrefs
- Bottom links:
  - `/privacy`
  - `/terms`

## Site Metadata

From `src/data/siteSeo.js`:

- Site URL: `https://goodmanseo.com`
- Organization type: `ProfessionalService`
- Brand name: `Goodman SEO`
- Area served: Australia
- Phone: `0434-920-114`
- Email: `goodmanseo.sydney@gmail.com`
- Address locality: Sydney, AU
- Languages: Korean and English

## Homepage

Source: `src/pages/Home.jsx`

### SEO

- Title: `구글 · 홈페이지 · SNS 통합 마케팅`
- Description: `GoodmanSEO는 구글 비즈니스 프로필, 홈페이지, 인스타그램, 페이스북을 함께 보고 먼저 고칠 부분을 무료로 점검해드립니다.`
- Keywords include online check, Google Business Profile, on-page SEO, business website, Instagram check, and Facebook check.

### Hero

- Rotating H1 phrases:
  - `비즈니스, 홈페이지가 없나요?`
  - `구글에서, 검색이 안 되시나요?`
  - `인스타, 페북 시작하기 힘드신가요?`
- Supporting copy:
  - `구글, 홈페이지, SNS를 통합 관리하여`
  - `고객이 신뢰하고 선택하는 온라인 환경을 만듭니다.`
- Primary CTA: `무료 진단 신청` -> `/contact`
- Secondary CTA: `서비스 및 가격 보기` -> `/pricing`
- Right-side visual: `HeroDevicesVisual` code component

### Homepage Sections

Section: `혹시 이런 문제로 고민하고 계신가요?`

- Google search visibility problem
- outdated/weak website
- low review trust
- SNS not converting to inquiries
- inconsistent business information
- weaker trust than competitors

Section: `서비스 소개`

- 홈페이지 제작
- 구글 비즈니스 관리
- SNS 마케팅
- 리뷰 관리
- AI 자동화

Section: `진행 과정`

- 무료 진단 신청
- 온라인 상태 분석
- 개선 제안서 전달
- 실행 및 관리

Final CTA:

- Heading: `내 비즈니스는 고객에게 어떻게 보일까요?`
- Copy: `구글, 홈페이지, SNS 무료 진단으로 지금 바로 확인해보세요. 3분이면 충분합니다!`
- CTA: `무료 진단 신청하기` -> `/contact`

## Pricing Page

Source: `src/pages/WebPricing.jsx`

### SEO

- Title: `서비스 및 가격`
- Description: `무료 점검, AI 진단, 홈페이지 제작, SEO 패키지, 구글 비즈니스 프로필, 추가 관리까지 GoodmanSEO의 서비스와 가격을 한눈에 확인할 수 있습니다.`

### Page Intro

- H1: `검색과 문의를 위한 홈페이지 기본 세팅`
- Copy: `홈페이지 제작, 구글 비즈니스, On-page SEO를 필요한 범위에 맞춰 정리합니다.`

### Website Packages

- `스타터 홈페이지`
  - Price: `AUD 795`, original `AUD 1,095`
  - Label: `핵심 기능 위주의 합리적인 패키지`
  - Scope: up to 3 pages, intro/inquiry layout, basic SEO, `AUD 300` Google map setup included

- `비즈니스 홈페이지`
  - Price: `AUD 1,890`
  - Label: `문의 흐름까지 정리하는 추천 패키지`
  - Scope: up to 7 pages, Google map basics, phone/email inquiry automation, basic social link connection support

- `성장형 홈페이지`
  - Price: `AUD 3,500`
  - Label: `검색 노출 극대화 패키지`
  - Scope: 10+ pages, SEO All-in-One, basic social link connection support, 3 months AI customer-response support

### Diagnostics

- `무료 점검`: free, homepage check, mobile screen check, Google Business Profile registration check, basic SEO check
- `AI 진단`: `AUD 149`, homepage first impression/inquiry flow deep check, Google Business Profile basic information deep check, On-page SEO major item deep check, mobile usability and speed deep check

### SEO & Google Business

- `SEO All-in-One 스타트 패키지`: `AUD 950`
- `SEO 월관리`: `AUD 795 / month`
- `구글 비즈니스 프로필`: `AUD 300`, with maintenance add-on `AUD 95 / month`

### Pricing FAQ

Questions currently shown:

- 작업 진행까지 기간은 얼마나 걸리나요?
- 수정은 몇 번까지 가능한가요?
- 결제는 어떻게 하나요?
- 환불 정책이 있나요?
- 호주 외 지역도 가능한가요?

## Starter Package Page

Source: `src/pages/StarterPackage.jsx`

Status:

- This route still exists at `/starter-package`.
- It appears older than the current `/pricing` package hierarchy.
- Treat it as legacy or secondary until the project decides whether to keep, redirect, or merge it.

Current visible direction:

- Kicker uses `Starter Website`
- Offer area uses `Goodman SEO 기본 홈페이지`
- Add-on section uses `Add-on Services`

Open conflict:

- Starter page still describes a basic homepage structure differently from the newer `/pricing` starter package.

## AI Business Page

Source: `src/pages/AIBusiness.jsx`

### SEO

- Title: `AI 실전 멘토링`
- Description mentions AI automation, online study group, online 1:1 mentoring, and offline group workshop.

### Hero

- Eyebrow: `AI와 전문가의 만남`
- H1: `내 비즈니스에 진짜 도움 되는 솔루션`
- Copy: product descriptions, review replies, and customer response can be handled by AI; practical custom automation support.

### Current Service Cards

- `AI 실전 멘토링`
  - 실무에 바로 적용 가능한 AI 활용법
  - 업종별 AI strategy, content/review/response automation, AI tool usage

- `스튜디오 그룹`
  - 데이터 기반 콘텐츠 업무 정리
  - repeated content workflow, search/homepage source material, operating data analysis

- `워크숍 & 교육`
  - 팀의 역량을 높이는 맞춤형 교육
  - workshops, automation system education, custom curriculum

### Closing Message

- `지금 문의를 남기고 우리 비즈니스에 맞는 자동화 방향을 확인해보세요.`
- CTA: `AI 멘토링 문의하기`

## Blog Index

Source: `src/pages/Blog.jsx`

### SEO

- Title: `블로그`
- Description: `GoodmanSEO 블로그입니다. 구글 비즈니스 프로필, 홈페이지, SEO, 온라인 운영에 관한 실용적인 글을 정리합니다.`

The blog index is intentionally text-first and links directly to article titles.

## Blog Detail Pages

Source: `src/pages/BlogDetail.jsx`, `src/data/blogPosts.js`

Each article detail page includes:

- category
- date
- title
- excerpt
- article body paragraphs
- CTA back to free check/contact

Current blog topics remain practical articles about Google Business Profile, online basics, website conversion, information consistency, SEO readiness, website rebuild checks, and AI-supported operations.

## Contact Page

Source: `src/pages/Contact.jsx`, `src/components/ContactForm.jsx`

### SEO

- Title: `진단 / 문의 신청`
- Description: `GoodmanSEO 문의 신청 페이지입니다. 무료 점검, AI 진단, 홈페이지 제작, 구글 비즈니스 세팅 문의를 접수할 수 있습니다.`

### Page Intro

- Eyebrow: `진단 / 문의 신청`
- H1: `지금 상황에 맞는 진단 또는 문의를 남겨보세요.`
- Copy: choose the needed diagnosis type and GoodmanSEO follows up within 24 business hours

### Contact Form Types

- `free-check`
  - Label: `무료 점검`
  - Heading: `무료 점검 신청`
  - Helper: `홈페이지와 구글 비즈니스 기본 상태를 확인하고 싶어요.`
  - Submit: `무료 점검 신청하기`

- `quick-diagnosis`
  - Label: `AI 진단`
  - Helper: `홈페이지와 기본 SEO를 조금 더 자세히 보고 싶어요.`
  - Submit: `AI 진단 신청하기`

- `general-inquiry`
  - Label: `일반 문의`
  - Helper: `기타 문의사항이 있어요.`
  - Submit: `문의 신청하기`

### Form Fields

- 업체명
- 담당자 이름
- 연락처
- 업종 / 지역
- 홈페이지 주소
- Google Business Profile 링크
- Instagram 링크
- Facebook 링크
- message field based on inquiry type

### Submission

- Primary endpoint: `https://formsubmit.co/ajax/goodmanseo.sydney@gmail.com`
- Fallback: `mailto:goodmanseo.sydney@gmail.com`

## Privacy Page

Source: `src/pages/Privacy.jsx`

- Route: `/privacy`
- H1: `개인정보처리방침`
- Effective date: `2026년 6월 16일`
- Covers collection/use purpose, collected fields, retention period, disposal procedure, user rights, security measures, and contact email.

## Terms Page

Source: `src/pages/Terms.jsx`

- Route: `/terms`
- H1: `이용약관`
- Effective date: `2026년 6월 16일`
- Covers purpose, definitions, terms changes, service application/provision, company duties/liability limits, user duties, and jurisdiction.

## Content Decisions

### Decision Note

- `decision`: Keep every page tied to the same practical channel-review story, even when the visual presentation uses broader digital-solution wording.
- `reason`: The current pages are strongest when they explain what customers see, what is missing, and what to fix first.
- `applies_to`: `/`, `/pricing`, `/starter-package`, `/ai-business`, `/blog`, `/contact`, `/privacy`, `/terms`
- `revisit_if`: the homepage stops leading with free check/diagnosis, or AI/ads become the main business rather than a support line.

## Open Questions

### Free Check Naming

- `question`: Should the site standardize on `무료 점검` or `무료 진단`?
- `why_it_matters`: Current source uses both. Mixed terms may confuse users and analytics labels.
- `current_best_guess`: Use one public-facing term consistently, probably `무료 진단` if the new design direction is retained.

### Starter Package Route

- `question`: Should `/starter-package` remain public, redirect to `/pricing`, or be merged into the current website package hierarchy?
- `why_it_matters`: It may conflict with `/pricing` package details.
- `current_best_guess`: Treat `/pricing` as the more current source of truth.

### AI Offer Relationship

- `question`: Should AI offers stay unpriced and consultation-led, or should earlier public prices return?
- `why_it_matters`: Current AI page hides earlier prices and frames services more broadly.
- `current_best_guess`: Keep AI connected to GoodmanSEO's channel cleanup and owner-operator workflow unless the user chooses a separate AI business line.

### Social Links

- `question`: Should footer social icon links stay as `#` placeholders?
- `why_it_matters`: Placeholder links look unfinished and may weaken trust.
- `current_best_guess`: Replace with real Instagram/Facebook/YouTube links or remove inactive icons.

