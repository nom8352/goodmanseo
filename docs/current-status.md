# Current Status

Last updated: 2026-06-25

## Current Project Direction

GoodmanSEO is currently framed as a practical online-channel review and cleanup service:

`Google, website, Instagram, and Facebook are reviewed together so a local business can see what is missing and what to fix first.`

The website is also moving into a lighter "integrated digital solution" presentation, but the positioning guardrail remains:

- start from a free online check / free diagnosis
- keep Google Business Profile, website, Instagram, and Facebook connected
- explain what customers see before they inquire
- help the owner choose the next practical step

Avoid turning GoodmanSEO into a generic website agency or abstract marketing consultancy.

## Latest Work Summary Source

`docs/work-summary.md` was added as a project report on 2026-06-16. It records:

- light aqua / Mediterranean-style visual redesign
- build verification claim: `npm run build` passed
- quality audit claim: `19.5 / 20`
- SEO audit claim: `100 / 100`
- new legal pages: `/privacy`, `/terms`
- new static prerender and sitemap entries for `/ai-business`, `/privacy`, `/terms`
- design-system sync for `DESIGN.md` and `.impeccable/design.json`

Treat those scores as report claims unless re-verified in the current thread.

Additional work log:

- `docs/2026-06-25-work-log.md`: records the June 25 blog expansion, generated blog images, AI course landing page, homepage/menu/AI mentoring links, YouTube embed, build checks, and pushed commit hashes.

## Local Wiki Status

Karpathy-style LLM wiki initialized and updated on 2026-06-16:

- `wiki/index.md`
- `wiki/schema.md`
- `wiki/log.md`
- `wiki/sources/`
- `wiki/concepts/`
- `wiki/workflows/`

Use this wiki as the structured project memory layer after reading `CLAUDE.md` and this file.

## Impeccable Status

Official `pbakaus/impeccable` project-local Codex setup is present:

- `.agents/skills/impeccable/`
- `.codex/hooks.json`
- `PRODUCT.md`
- `DESIGN.md`
- `.impeccable/design.json`
- `.impeccable/live/config.json`

Use `PRODUCT.md` and `DESIGN.md` as canonical design context. `.impeccable.md` is legacy context only.

Current design context from `DESIGN.md`:

- clear light theme, not the older dark theme
- aqua teal accent `#007a8c`
- deep muted ocean `#005b70`
- white cards over soft aqua gradients
- Pretendard body text, Outfit display headings
- accessible mobile targets and explicit ARIA labels

## Website Status

Current source-level site changes visible on 2026-06-25:

- homepage now uses a code-built `HeroDevicesVisual` device/dashboard visual, not the older imported `src/assets/home-hero-channels.png`
- homepage H1 rotates through problem-led phrases:
  - `비즈니스, 홈페이지가 없나요?`
  - `구글에서, 검색이 안 되시나요?`
  - `인스타, 페북 시작하기 힘드신가요?`
- homepage support copy says Google, homepage, and SNS are managed together to create a trusted online environment
- homepage CTA language is now `무료 진단 신청`
- homepage includes a compact `굳팀장 AI 실무 강의` bridge section linking to `/ai-course`
- pricing page hero is now `고객의 성장을 만드는 통합 디지털 솔루션`
- pricing page is focused on homepage packages, diagnostics, SEO & marketing, and FAQ
- AI page is now a light-theme service page around `AI 실전 멘토링`, `스튜디오 그룹`, and `워크숍 & 교육`
- AI page includes an `온라인 강의` bridge section linking to `/ai-course` and `https://inf.run/xfxvT`
- `/ai-course` is a course-style landing page for the GoodmanSEO / 굳팀장 Codex AI 실무 자동화 course
- `/ai-course` embeds the YouTube intro video via `https://www.youtube-nocookie.com/embed/kuCymkvGF9w`
- contact page/form now prefers `무료 진단` in the form selector while some pricing copy still says `무료 점검`
- footer now links to `/privacy` and `/terms`
- `src/App.jsx` includes `/privacy`, `/terms`, and `/ai-course`
- `scripts/generate-static-pages.mjs` and `public/sitemap.xml` include `/ai-business`, `/ai-course`, `/privacy`, and `/terms`
- top navigation includes `AI 강의`

## Current Offer Snapshot

Visible in current source:

- 무료 점검 / 무료 진단: free entry check
- 퀵 진단: `AUD 149`
- 온라인 올인원 진단: `AUD 289`
- 스타터 홈페이지: `AUD 795`, original `AUD 1,095`
- 비즈니스 홈페이지: `AUD 1,890`
- 성장형 홈페이지: `AUD 3,500`
- SEO All-in-One 스타트 패키지: `AUD 950`
- SEO 월관리: `AUD 795 / month`
- 구글 비즈니스 프로필: `AUD 300`
- GBP maintenance add-on: `AUD 95 / month`

AI page currently shows service cards rather than public prices.

## Legal / SEO Status

New legal routes:

- `/privacy`: 개인정보처리방침, 시행일자 2026년 6월 16일
- `/terms`: 이용약관, 시행일자 2026년 6월 16일

Static/SEO updates:

- `/ai-business`, `/ai-course`, `/privacy`, and `/terms` are registered in `scripts/generate-static-pages.mjs`
- `/ai-business`, `/ai-course`, `/privacy`, and `/terms` are registered in `public/sitemap.xml`
- blog detail pages are generated from `src/data/blogPosts.js`
- blog detail SEO images are generated from each post's `image` value

## Blog Status

Current blog structure:

- image card list layout
- detail pages render each article's hero image and image metadata
- 14 practical articles aligned with Google Business Profile, homepage, SEO, channel consistency, AI web design, and online operations
- generated article images live under `public/blog/`

The blog remains supporting content for trust, search intent, and conversion rather than a magazine-style section.

## Social Content Status

Two-week Instagram schedule previously prepared:

- 2026-04-13 10:00
- 2026-04-15 10:00
- 2026-04-17 10:00
- 2026-04-20 10:00
- 2026-04-22 10:00
- 2026-04-24 10:00

Six rewritten post themes:

1. Instagram alone is not enough
2. Four things customers check first
3. What the free check actually reviews
4. Small businesses need the basics first
5. Inquiries drop when channels are disconnected
6. How does my business look online right now?

## Social Asset Status

Planner asset folder:

- `F:\Antigravity\goodmanseo\.codex-social\planner-assets`

Card news status checked on 2026-06-16:

- root-level Instagram card images exist as `ig-post-01.png` to `ig-post-20.png`
- `.codex-social/planner-assets` contains PNG working assets, TXT copy files, and cropped/fallback JPEG files
- no dedicated card-news Markdown files were found in the project
- detailed inventory is saved in `docs/cardnews-inventory.md`

## Notion / Meta Notes

Important Notion references from previous work:

- `리포지셔닝 및 가격 방향 재정리 - 2026-04-11`
- `마감 리포트 - 2026-04-11`
- `마감 리포트 - 2026-04-11 추가 반영`
- `SNS 포스팅 6개 재작성 및 분석 - 2026-04-12`

Meta planner note:

- Instagram planner scheduling was previously working in Meta Business Suite.
- Facebook Page / Instagram connection had mixed portfolio and individual ownership states.
- If future work touches Meta setup again, verify ownership and page access before troubleshooting planner issues.

## Known Local-Only / Uncommitted Changes

As of this update, the main site changes from June 25 have been committed and pushed. The working tree still has unrelated untracked files. Treat them as active user/project work.

Notable current local untracked items include:

- `.codex-social/`
- `.impeccable/critique/`
- `_workspace/`
- `deisngMD/`
- `img/here.png`
- `src/assets/home-hero-channels.png`
- `참고이미지/`

Do not assume these are already deployed or pushed unless GitHub state is checked.

## Open Alignment Questions

- `무료 점검` and `무료 진단` are both used. Decide whether to standardize one term.
- `src/assets/home-hero-channels.png` still exists locally but current `Home.jsx` does not import it.
- `/starter-package` still exists and may conflict with the newer `/pricing` starter package details.
- Current pricing copy includes the phrase `비즈니스 홈페이지 요금제 혜택 전형 포함`; verify whether `전형` is a typo for `전부` or another intended word.
- AI page no longer exposes earlier AI prices in the visible page. Confirm whether prices should remain hidden or return to pricing.

## Recommended Next Step

Review the current rendered site after the June 25 updates:

1. Confirm `/ai-course` renders the YouTube embed correctly on desktop and mobile.
2. Decide `무료 점검` vs `무료 진단`.
3. Decide whether `/starter-package` should remain public.
4. Re-run `npm run build` if a deploy/push is planned.
