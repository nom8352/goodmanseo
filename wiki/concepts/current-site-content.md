# Current Site Content Snapshot

Last updated: 2026-06-16

This note summarizes the current business-facing site content from source files. Use it as the quick reference before changing homepage copy, pricing copy, business offers, AI business, legal pages, or inquiry flow.

## Source Note

- `source`: `src/pages/Home.jsx`, `src/pages/WebPricing.jsx`, `src/pages/AIBusiness.jsx`, `src/pages/Contact.jsx`, `src/components/ContactForm.jsx`, `src/pages/Privacy.jsx`, `src/pages/Terms.jsx`, `docs/work-summary.md`
- `observed_on`: 2026-06-16
- `summary`: Current homepage message, checked channels, service funnel, offer names, pricing, AI business content, legal pages, and inquiry form types.
- `limits`: This is a source-code snapshot plus a local report summary, not a live production deployment audit. Re-check GitHub/Cloudflare before treating it as public-live content.
- `next_check`: Re-check whenever homepage, pricing, AI business, legal, or contact form copy changes.

## Homepage Content

### Core Message

Current homepage SEO title:

> 구글 · 홈페이지 · SNS 통합 마케팅

Current rotating homepage H1 phrases:

- `비즈니스, 홈페이지가 없나요?`
- `구글에서, 검색이 안 되시나요?`
- `인스타, 페북 시작하기 힘드신가요?`

Current supporting copy:

> 구글, 홈페이지, SNS를 통합 관리하여  
> 고객이 신뢰하고 선택하는 온라인 환경을 만듭니다.

Current homepage SEO description:

> GoodmanSEO는 구글 비즈니스 프로필, 홈페이지, 인스타그램, 페이스북을 함께 보고 먼저 고칠 부분을 무료로 점검해드립니다.

### Hero Promise

The homepage should communicate:

- customers check online credibility before they inquire
- Google, website, and SNS need to work together
- GoodmanSEO diagnoses what is missing and what to fix first
- the first step is a free diagnosis / free check

### Hero Visual

Current `Home.jsx` uses a code-built right-side visual component:

- `HeroDevicesVisual`

It shows device/dashboard style channel and performance cues. The local file `src/assets/home-hero-channels.png` still exists, but current `Home.jsx` does not import it.

### Homepage Sections

Current section structure:

- `혹시 이런 문제로 고민하고 계신가요?`
- `서비스 소개`
- `진행 과정`
- final CTA: `내 비즈니스는 고객에게 어떻게 보일까요?`

Problem examples:

- 구글 검색에 노출되지 않아요
- 홈페이지가 오래되고 취약해요
- 리뷰가 없거나 평가가 낮아요
- SNS는 하는데 문의가 없어요
- 업체 정보가 제각각 달라요
- 경쟁업체보다 신뢰감이 떨어져요

Service cards:

- 홈페이지 제작
- 구글 비즈니스 관리
- SNS 마케팅
- 리뷰 관리
- AI 자동화

Process steps:

1. 무료 진단 신청
2. 온라인 상태 분석
3. 개선 제안서 전달
4. 실행 및 관리

Primary homepage CTA:

- `무료 진단 신청` -> `/contact`

Secondary homepage CTA:

- `서비스 및 가격 보기` -> `/pricing`

## Business Funnel

### Claim Note

- `claim`: GoodmanSEO's current funnel moves from free diagnosis/check to paid diagnosis, then website, SEO, Google Business Profile, or AI/marketing execution.
- `evidence`: `src/pages/Home.jsx`, `src/pages/WebPricing.jsx`, `src/pages/AIBusiness.jsx`, `src/pages/Contact.jsx`
- `confidence`: high
- `drift_risk`: medium
- `verification`: Re-open the source pages and compare CTA targets, package arrays, and contact form inquiry types.

Current funnel:

1. Free check / free diagnosis
2. Paid diagnosis
3. Website / SEO / Google Business Profile execution
4. AI automation, marketing support, or ongoing optimization

## Pricing And Service Content

### Pricing Page Core Message

Current pricing H1:

> 고객의 성장을 만드는  
> 통합 디지털 솔루션

Supporting copy:

> AI 기술과 데이터 기반 전략으로 비즈니스의 모든 순간을 함께합니다.

### Free And Diagnostic Offers

From `src/pages/WebPricing.jsx`:

- 무료 점검: free, basic check of Google Business Profile, website, and SNS exposure
- AI 진단: `AUD 149`, one-time

### Website Packages

From `src/pages/WebPricing.jsx`:

- 스타터 홈페이지: `AUD 795`, original `AUD 1,095`
- 비즈니스 홈페이지: `AUD 1,890`
- 성장형 홈페이지: `AUD 3,500`

### SEO And Google Business Profile

From `src/pages/WebPricing.jsx`:

- SEO All-in-One 스타트 패키지: `AUD 950`
- SEO 월관리: `AUD 795 / month`
- 구글 비즈니스 프로필: `AUD 300`
- 유지 관리 추가 시: `AUD 95 / month`

The current pricing page does not show the older separate monthly management and AI education pricing sections.

## AI Business Page Content

### Core Message

Current AI business hero:

> 내 비즈니스에  
> 진짜 도움 되는 솔루션

Supporting copy:

> 상품 설명, 리뷰 답변, 고객 응대까지 반복 업무는 AI가 대신!  
> 실무에 적용 가능한 맞춤형 자동화 & 마케팅 솔루션을 만나보세요.

The page should read as practical automation and marketing support, not a generic AI lecture.

### Current AI Services

From `src/pages/AIBusiness.jsx`:

- `AI 실전 멘토링`: industry-specific AI strategy, content/review/customer-response automation, practical AI tool usage
- `스튜디오 그룹`: Google/Meta ad operation, search/content marketing strategy, brand growth data analysis
- `워크숍 & 교육`: team workshop, automation system education, custom curriculum

Current visible page does not expose public prices for these services.

### Closing CTA

- `무료 진단 및 1:1 맞춤 상담 신청하기` -> `/contact`

## Contact And Inquiry Flow

### Contact Page

Current contact page H1:

> 지금 상황에 맞는  
> 진단 또는 문의를  
> 남겨보세요.

Supporting copy:

> 나에게 필요한 진단 유형을 선택하고 간단한 정보를 남겨주시면,  
> 확인 후 영업일 기준 24시간 이내에 연락드리겠습니다.

### Contact Form Types

From `src/components/ContactForm.jsx`:

- `free-check`: label `무료 진단`, heading `무료 점검 신청`
- `quick-diagnosis`: label `AI 진단`
- `general-inquiry`: label `일반 문의`

Form fields:

- 업체명
- 담당자 이름
- 연락처
- 업종 / 지역
- 홈페이지 주소
- Google Business Profile 링크
- Instagram 링크
- Facebook 링크
- inquiry-specific message field

Submission endpoint:

- `https://formsubmit.co/ajax/goodmanseo.sydney@gmail.com`

Fallback:

- `mailto:goodmanseo.sydney@gmail.com`

## Legal Pages

New legal pages:

- `/privacy`: 개인정보처리방침, 시행일자 2026년 6월 16일
- `/terms`: 이용약관, 시행일자 2026년 6월 16일

Footer links now point to these pages.

## SEO / Static Page Notes

From current source and `docs/work-summary.md`:

- `/ai-business`, `/privacy`, and `/terms` are listed in `scripts/generate-static-pages.mjs`
- `/ai-business`, `/privacy`, and `/terms` are listed in `public/sitemap.xml`
- `docs/work-summary.md` claims `npm run build` passed and SEO score reached `100 / 100`; re-run locally before relying on those as current verification.

## Messaging Guardrails

### Decision Note

- `decision`: The current site should still lead with customer-visible online channels, even though the design/copy has moved toward a broader integrated digital solution presentation.
- `reason`: The strongest audience need remains practical clarity: how the business appears online and what should be fixed first.
- `applies_to`: homepage, pricing, AI business, contact form, blog, social content
- `revisit_if`: the business intentionally changes into a pure website agency, SEO agency, AI training business, or ad agency.

Preserve:

- practical Korean
- free check / free diagnosis first
- Google + website + Instagram + Facebook together
- what is missing
- what to fix first
- inquiry flow

Avoid:

- generic website agency copy
- abstract "online structure" language as the lead message
- long educational copy on the homepage
- making AI business sound disconnected from GoodmanSEO's online operations funnel

## Quick Verification Checklist

Before relying on this note:

1. Check `src/pages/Home.jsx` for current rotating H1 phrases, support copy, visual component, and CTA targets.
2. Check `src/pages/WebPricing.jsx` for package names and prices.
3. Check `src/pages/AIBusiness.jsx` for AI service names and whether prices are visible.
4. Check `src/components/ContactForm.jsx` for inquiry types and form fields.
5. Check `src/App.jsx`, `scripts/generate-static-pages.mjs`, and `public/sitemap.xml` for route/static/SEO state.
6. Check `docs/current-status.md` for any newer positioning decisions.

