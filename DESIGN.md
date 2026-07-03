---
name: "GoodmanSEO"
description: "A calm, practical online-channel review and cleanup service for Korean local businesses in Australia."
colors:
  accent-primary: "#102133"
  accent-secondary: "#2d6fa3"
  accent-tertiary: "#ffffff"
  bg-light: "#f7f2ec"
  bg-gradient-from: "#f7f2ec"
  bg-gradient-to: "#eee7df"
  bg-dark-band: "#102133"
  footer-bg: "#0f2132"
  text-main: "#102133"
  text-muted: "#44515d"
  text-soft: "#687582"
  text-on-dark: "#eef3f7"
  text-on-dark-muted: "#aab5bd"
  warm-panel: "#f7f2ec"
  glass-border: "rgba(16, 33, 51, 0.1)"
typography:
  logo:
    fontFamily: "Outfit, Pretendard, sans-serif"
    fontSize: "clamp(1.12rem, 1.28vw, 1.32rem)"
    fontWeight: 800
    letterSpacing: "0.02em"
  hero:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "clamp(1.8rem, 4vw, 3.6rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  sectionTitle:
    fontFamily: "Outfit, Pretendard, sans-serif"
    fontSize: "clamp(1.45rem, 2.05vw, 2.15rem)"
    fontWeight: 800
    lineHeight: 1.18
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "0.78rem to 0.86rem on compact homepage sections"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Lora, Georgia, serif"
    fontSize: "0.82rem"
    fontWeight: 400
    fontStyle: "italic"
rounded:
  button: "0.2rem to 0.25rem"
  card: "0.35rem to 0.7rem"
  panel: "0.45rem"
  pill: "Use sparingly; not the default homepage shape"
spacing:
  compactSectionY: "3rem to 4rem"
  compactGridGap: "0.75rem to 1rem"
  cardPadding: "1rem to 1.25rem"
components:
  button-primary:
    backgroundColor: "{colors.accent-primary}"
    textColor: "{colors.accent-tertiary}"
    rounded: "{rounded.button}"
    fontSize: "0.76rem to 0.82rem"
    fontWeight: 800
  button-secondary:
    backgroundColor: "rgba(255,255,255,0.6)"
    textColor: "{colors.accent-primary}"
    borderColor: "#aeb6bc"
    rounded: "{rounded.button}"
  dark-card:
    backgroundColor: "rgba(255,255,255,0.07)"
    borderColor: "rgba(255,255,255,0.1)"
    textColor: "{colors.text-on-dark}"
    rounded: "{rounded.panel}"
  warm-cta-panel:
    backgroundColor: "{colors.warm-panel}"
    textColor: "{colors.text-main}"
    rounded: "{rounded.panel}"
---

# Design System: GoodmanSEO

## 1. Overview

**Creative North Star: "Quiet Navy Checkup Desk"**

GoodmanSEO의 메인페이지는 참고 이미지처럼 신뢰감 있는 진한 남색, 따뜻한 오프화이트 배경, 조밀한 정보 밀도, 정돈된 카드 UI를 기준으로 한다. 비즈니스 컨설팅 문구를 따라 하지는 않고, 포지셔닝은 계속 `홈페이지 + 구글 비즈니스 + 기본 SEO + 소셜 링크 연결`을 현실적으로 정리해주는 온라인 점검 서비스로 유지한다.

현재 메인페이지 디자인은 예전 청록/라이트 테마보다 우선한다.

Key characteristics:

- 히어로는 따뜻한 오프화이트 배경, 세리프 메인 문구, 산세리프 메뉴/로고 조합
- 히어로 오른쪽은 생성한 여성 상담자 이미지와 4개의 작은 플로팅 카드만 사용
- `혹시 이런 문제로 고민하고 계신가요?` 섹션은 전체 폭 흰색 배경, 작은 타이포, 조밀한 그리드
- 서비스 소개, 강의 배너, 업종별 샘플 사이트는 진한 남색 풀폭 밴드 안에서 같은 톤으로 처리
- 푸터는 같은 계열의 진한 남색, 완전 흰색이 아닌 블루그레이 텍스트, 작은 소셜 아이콘 사용

## 2. Colors

### Primary

- **Goodman Navy** (`#102133`): 메인 메뉴 CTA, 어두운 섹션 밴드, 버튼, 핵심 텍스트.
- **Footer Navy** (`#0f2132`): 푸터 전용 배경. 메인 남색보다 살짝 깊게 둔다.

### Secondary

- **Muted Blue Accent** (`#2d6fa3`): 그래프/상승 수치 같은 작은 강조에만 사용한다. 섹션 라벨이나 큰 텍스트를 파랗게 만들지 않는다.
- **Warm Line Accent** (`#d8c8af`): 어두운 카드 안 아이콘/작은 링크 강조에 사용한다.

### Neutral

- **Warm Off-White** (`#f7f2ec`): 히어로와 CTA 패널 배경.
- **Soft Warm Base** (`#eee7df`): 바디 그라데이션 하단.
- **Ink** (`#102133`): 라이트 배경의 주요 텍스트.
- **Muted Ink** (`#44515d` / `#566471`): 라이트 배경 설명문.
- **Dark Muted Text** (`#aab5bd` / `#aeb8c1`): 남색 배경의 설명문.
- **Dark Primary Text** (`#eef3f7`): 남색 배경의 제목. 완전 흰색은 제한적으로만 사용한다.

### Rules

- 파란색 포인트는 작은 그래프, 수치, 상태 강조에만 쓴다.
- `Common Issues`, `Our Solutions`, `Sample Websites` 같은 라벨은 회색 섞인 네이비/블루그레이로 낮춘다.
- 남색 섹션은 반드시 화면 양쪽 끝까지 가는 full-width band로 처리한다.
- 흰색 텍스트는 남색 CTA 버튼처럼 대비가 필요한 곳에만 쓰고, 푸터/섹션 본문은 `#aab5bd` 계열을 우선한다.

## 3. Typography

### Families

- **Logo / nav / section heading:** Outfit + Pretendard fallback. 로고에는 세리프를 쓰지 않는다.
- **Hero headline:** Lora / Georgia 계열 세리프. 히어로 메인 문구에만 세리프의 고급감을 사용한다.
- **Body:** Pretendard. 한글 본문은 작고 또렷하게 유지한다.
- **Small labels:** Lora italic can be used for one-line section labels, but keep size small and color muted.

### Homepage Scale

- Hero headline: `clamp(1.8rem, 4vw, 3.6rem)`, `font-weight: 700`, `line-height: 1.15`.
- Compact section H2: `clamp(1.45rem, 2.05vw, 2.15rem)`, `line-height: 1.18`.
- Dark/compact section body: `0.78rem` mobile to `0.86rem` desktop.
- Card title: about `0.82rem` to `0.875rem`.
- Card body: about `0.68rem` to `0.76rem`.

### Rules

- 섹션 제목과 카드 본문을 크게 키우지 않는다. 참고 이미지처럼 조밀하고 스캔 가능한 밀도를 유지한다.
- Display letter-spacing은 `-0.04em`보다 좁히지 않는다.
- 버튼과 메뉴 글자는 같은 강한 산세리프 톤을 공유한다.

## 4. Layout

- 전역 `section` 기본값이 `max-width: 1200px`를 걸 수 있으므로, full-width band가 필요한 홈 섹션에는 `max-w-none px-0`을 명시한다.
- 히어로 높이는 여성 이미지가 허리 살짝 아래까지 보이는 정도를 기준으로 한다. 과도하게 긴 히어로를 피한다.
- 히어로 텍스트는 상단 쪽에 붙여 참고 이미지처럼 첫 화면에서 바로 읽히게 한다.
- 서비스 소개, 강의 배너, 샘플 사이트는 서로 벌어지지 않게 한 남색 흐름으로 읽히게 한다.
- 카드 그리드는 큰 그림자보다 낮은 대비의 반투명 표면과 작은 gap을 우선한다.

## 5. Components

### Navigation / Logo

- 로고 `GOODMANSEO`는 산세리프, 굵게, 살짝 자간을 둔다.
- 로고 서브라인은 작고 넓은 자간을 유지한다.
- 메뉴 텍스트와 CTA 버튼 텍스트는 같은 산세리프 톤으로 맞춘다.

### Hero Visual

- 여성 상담자 이미지는 `img/home-hero-consultant.png`를 사용한다.
- 플로팅 카드는 4개만 사용한다: Inquiry Flow, Client Review, Google, Revenue.
- 카드는 여성 몸 위를 덮지 않도록 배치하고, 여성 이미지가 카드보다 위에 오게 한다.
- 카드들은 일렬 정렬이 아니라 약간 어긋난 자연스러운 배치를 유지하되, 서로 겹치지 않게 한다.
- 여성 뒤 투명 박스는 유지 가능하나 장식 과잉으로 키우지 않는다.

### Buttons

- 홈페이지 CTA 버튼은 pill이 아니라 작게 깎인 직사각형(`0.2rem` to `0.25rem`)을 기본으로 한다.
- Primary: 진한 남색 배경 + 흰색 텍스트.
- Secondary: 흰색/반투명 배경 + 남색 텍스트 + 얇은 보더.
- 버튼 폰트는 메뉴와 같은 강한 산세리프 계열을 사용한다.

### Dark Cards

- 서비스와 샘플 카드: `bg-white/[0.07]`, `border-white/10`, 작은 radius.
- 아이콘은 작은 크기, warm line accent 또는 muted light tone.
- 본문은 완전 흰색이 아니라 `#aab5bd` 계열.

### Footer

- 배경은 `#0f2132`.
- 푸터 로고는 메인 로고와 같은 산세리프 계열.
- 텍스트는 작고 얇게, `#aebbc7` / `#8fa0af` 중심.
- 소셜 아이콘은 작은 원형, 낮은 대비 보더, hover에서만 밝아지게 한다.

## 6. Do's and Don'ts

### Do

- 메인페이지 디자인은 참고 이미지의 남색/오프화이트/조밀한 비즈니스 톤을 기준으로 맞춘다.
- 문구와 구조를 임의로 바꾸지 말고, 사용자가 요청한 시각 요소만 조정한다.
- 로컬 비즈니스 사장님이 빠르게 이해할 수 있도록 짧은 한글 문장과 작은 정보 단위를 유지한다.
- 빌드 전에는 `npm run build`로 확인한다.

### Don't

- 예전 청록/아쿠아 테마로 메인페이지를 되돌리지 않는다.
- 로고에 세리프를 쓰지 않는다.
- 섹션마다 큰 히어로급 제목을 반복하지 않는다.
- 카드/버튼을 과하게 둥글게 만들지 않는다.
- 진한 남색 섹션을 1200px 안에 갇히게 만들지 않는다.
- 점수 게이지/개선 포인트 CTA 섹션은 현재 홈에서는 제거된 상태이므로 다시 넣지 않는다.
