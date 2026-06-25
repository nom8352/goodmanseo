# GoodmanSEO Service Refocus - 2026-06-26

## Decision

GoodmanSEO service positioning was narrowed from broad online-channel / SNS marketing support to a practical website and search-basics service.

The current service scope should read as:

- homepage / website production
- Google Business Profile setup or cleanup
- On-page SEO basic setup
- inquiry flow cleanup
- basic social link connection support

The current service scope should not read as:

- SNS marketing
- Instagram / Facebook operation
- recurring social content upload
- social media diagnosis
- integrated digital marketing
- broad marketing consulting

## Social Support Rule

SNS should remain only as support.

Use wording like:

- basic social link connection support
- connect social account links on the website
- help connect existing social links

Avoid wording like:

- SNS marketing
- SNS operation
- Instagram / Facebook diagnosis
- social channel positioning
- regular social posting
- social media management

## Free Check

Free check is a light entry check.

Current free check items:

- 홈페이지 체크
- 모바일 화면 체크
- Google Business Profile 등록 체크
- 기본 SEO 체크

It is not a detailed report.

## AI Diagnosis

AI diagnosis is the paid small diagnostic option.

Current AI diagnosis items:

- 홈페이지 첫인상 및 문의 흐름 심층 체크
- Google Business Profile 기본 정보 심층 체크
- On-page SEO 주요 항목 심층 체크
- 모바일 사용성과 속도 심층 체크

## Homepage CTA Clarification

The homepage `무료 점검 신청하기` CTA points to the same free-check offer, but the homepage CTA section does not list the four free-check items directly.

Current homepage wording communicates the same intent in summary form:

- homepage and Google Business basic status
- basic SEO
- light first check
- optional basic social link connection support

If the homepage needs to match the pricing page more literally later, add the four free-check items near the CTA or link the CTA to the pricing free-check card.

## Files Updated In This Refocus

Main source files changed:

- `src/pages/Home.jsx`
- `src/pages/WebPricing.jsx`
- `src/components/ContactForm.jsx`
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- `src/pages/StarterPackage.jsx`
- `src/pages/Contact.jsx`
- `src/pages/Privacy.jsx`
- `src/pages/Terms.jsx`
- `src/pages/AIBusiness.jsx`
- `src/pages/AICourse.jsx`
- `src/pages/BlogDetail.jsx`
- `src/data/blogPosts.js`
- `scripts/generate-static-pages.mjs`

Git commits:

- `7a5e4ed` on `codex/compact-scale-pass`: `Refocus services on website and SEO setup`
- `c8d9642` on `main`: `Merge service refocus updates`

Build verification:

- `npm run build` passed after the refocus changes.
