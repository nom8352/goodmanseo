---
name: "GoodmanSEO"
description: "A calm, practical online-channel review and cleanup service for local businesses in Australia."
colors:
  accent-primary: "#005b70"
  accent-secondary: "#007a8c"
  accent-tertiary: "#ffffff"
  bg-light: "#f8fafc"
  bg-gradient-from: "#f2fafb"
  bg-gradient-to: "#ecf6f8"
  text-main: "#0f2230"
  text-muted: "#4e6170"
  text-soft: "#7c8f9f"
  glass-border: "rgba(0, 91, 112, 0.08)"
typography:
  display:
    fontFamily: "Outfit, Pretendard, sans-serif"
    fontSize: "clamp(2.2rem, 3.4vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.05em"
rounded:
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
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
    backgroundColor: "{colors.accent-secondary}"
    textColor: "{colors.accent-tertiary}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.75rem"
  button-secondary:
    backgroundColor: "{colors.accent-tertiary}"
    textColor: "{colors.accent-secondary}"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.75rem"
  card-panel:
    backgroundColor: "{colors.accent-tertiary}"
    textColor: "{colors.text-main}"
    rounded: "{rounded.panel}"
    padding: "2rem"
---

# Design System: GoodmanSEO

## 1. Overview

**Creative North Star: "The Calm Online Checkup (청량하고 단정한 온라인 검진)"**

GoodmanSEO는 호주와 한국 소상공인들이 복잡한 기술적 장벽 없이 자신의 온라인 현황(구글, 웹사이트, SNS)을 투명하고 편안하게 진단받을 수 있는 "청량하고 정돈된 1차 검진 데스크" 형태의 시각 체계를 지향합니다. 인위적인 다크 모드 테마에서 탈피하여, 맑은 날씨의 지중해 해변을 연상시키는 맑고 연한 청록 그라디언트 기반의 라이트 테마로 전면 개편되었습니다.

**Key Characteristics:**
- 은은한 청록/블루 그라디언트 배경과 정갈한 백색 카드 패널의 매칭
- 좁은 자간 겹침을 예방하는 Outfit display 한글 서체 규격
- 조작감이 느껴지는 프리미엄 인터랙티브 모션(Hover Lift-up 및 SVG 드로잉)
- 모바일 환경에서의 엄격한 웹 접근성(ARIA) 및 터치 타겟(44x44px 이상) 확보

## 2. Colors

은은한 모닝 코브 청록 색조가 브랜드 신뢰도와 전문적 기술 검진의 기조를 형성합니다.

### Primary
- **Aqua Checkup Teal** (`accent-secondary` / `#007a8c`): 주요 의사결정 CTA 버튼, 성공 상태, 그리고 비주얼적 핵심 텍스트를 강조하는 역할을 맡습니다.

### Secondary
- **Deep Muted Ocean** (`accent-primary` / `#005b70`): 서브 뱃지 라벨 및 강한 강조를 지니는 타이틀 컴포넌트에 활용합니다.

### Neutral
- **Clear Morning** (`bg-gradient-from` / `#f2fafb`): 최상단 배경을 이루는 맑은 해무 청록 톤.
- **Soft Coast** (`bg-gradient-to` / `#ecf6f8`): 페이지 하단으로 가며 퍼지는 은은한 그라디언트 톤.
- **Ocean Ink** (`text-main` / `#0f2230`): 높은 대비를 제공하는 가독성 극대화 남색 텍스트 컬러.
- **Muted Sand** (`text-muted` / `#4e6170`): 서브 타이틀 및 보조 설명 텍스트를 담당하는 다크 그레이-네이비.

### Named Rules
**The Sparse Accent Rule (희소성의 법칙).** 청록색 포인트 컬러는 중요한 폼 전송, 신청 버튼 등 전체 화면 대비 10% 이하의 극소 면적에만 적용하여 희소성을 유지합니다.
**The Contrast Safety Rule (대비 안전 규칙).** 연한 회색 글씨(`text-soft`)는 라이트 배경에서 글씨가 뭉개지므로 본문이나 입력 폼 설명에 절대 단독으로 사용하지 않습니다.

## 3. Typography

**Display Font:** Outfit (Pretendard fallback)
**Body Font:** Pretendard (시스템 기본 fallback)

### Hierarchy
- **Display** (800, `clamp(2.2rem, 3.4vw, 3.6rem)`, 0.95 line-height): 섹션의 주 타이틀과 대제목.
- **Title** (800, `1.45rem`, 1.15 line-height): 요금 카드 패키지명 등.
- **Body** (400, `0.95rem`, 1.7 line-height): 실무 비즈니스 설명문. 줄당 최대 길이는 한글 가독성 기준 60-70자를 넘지 않도록 래핑을 제한합니다.
- **Label** (700, `0.82rem`, 0.05em letter-spacing): 폼의 필드명 및 소형 메타 뱃지 텍스트.

### Named Rules
**The No-Cramped Display Rule (자간 마지노선).** 디자인 Scaffold 도구들의 training default(자간 -0.05em~-0.08em)는 글자가 겹쳐 비전문적으로 보이므로, display 헤드라인의 자간 마지노선은 항상 **`-0.04em`** 이상을 유지합니다.

## 4. Elevation

본 시스템은 화이트 패널과 연청록 배경의 입체감을 주기 위해 1px의 얇은 보더 라인과 매우 미세하고 은은한 청록 섀도우를 조합하여 깊이감을 투사합니다.

### Shadow Vocabulary
- **Mild Checkup shadow** (`shadow-md shadow-[#007a8c]/5`): 폼 카드 및 2열 자주 묻는 질문(FAQ) 등 주 패널에 외곽선 가독성을 보완하기 위해 은은하게 깔리는 청록계열 서브 섀도우.
- **Interactive Button Lift** (`hover:shadow-lg hover:shadow-[#007a8c]/20`): 버튼 호버 시 위로 감속 Deceleration 솟아오름 모션과 함께 퍼지는 청록 광택 섀도우.

### Named Rules
**The Anti-Ghost-Card Rule (그림자 남용 방지).** 1px 실선 테두리(`border-[#e2e8f0]`)와 거대 그림자(`shadow-2xl` 등)를 한 컨테이너에 동시에 병용하여 비주얼 피로도를 높이는 행위를 전면 배제합니다.

## 5. Components

### Buttons
- **Shape:** primary/secondary CTA는 알약 형태(`rounded-full / 9999px`)를 사용하며, 입력 폼 하단 제출 버튼은 실물 인풋 규격과의 조화를 위해 모서리가 깎인 사각형 형태(`rounded-lg`)를 사용합니다.
- **Primary CTA:** 청록색 `#007a8c` 배경에 백색 텍스트.
- **Hover Motion:** 호버 시 `hover:-translate-y-0.5` 및 `transition-[background-color,transform,box-shadow]`를 구체 지정하여 레이아웃 리페인트를 방지하고 매끄러운 60fps 렌더링 성능을 보장합니다.

### Cards / Containers
- **Corner Style:** 대형 카드는 `rounded-3xl` 반경을 사용하여 지나치게 날카롭거나 과도하게 동그란(32px 이상) AI tells를 극복합니다.
- **Background:** 순수 백색(`bg-white`) 배경을 사용해 그라디언트 배경 위에서 명확하게 도드라지게 연출합니다.

### Inputs / Fields
- **Focus:** 포커스 시 입력 창의 테두리가 `#007a8c`로 변하고, 연한 청록 포커스 링(`box-shadow: 0 0 0 4px rgba(0, 91, 112, 0.08)`)이 부드럽게 켜집니다.

### Navigation
- 상단 고정형 헤더 바로써 스크롤 시 반투명 라이트 글래스 블러(`backdrop-blur-2xl bg-white/80`)가 적용되어 뒤쪽 그라디언트 광원을 투과시킵니다.

### Signature Component
- **3D FAQ Robot Icon:** 자주 묻는 질문(FAQ) 섹션 좌측에 위치하는 눈 깜빡임(Blink) 애니메이션이 탑재된 입체형 3D 로봇 그래픽 일러스트 컴포넌트입니다.

## 6. Do's and Don'ts

### Do:
- **Do** 모든 인터랙티브 링크와 메뉴 버튼에 웹 접근성 표준을 준수하는 `aria-label`을 반드시 기재합니다.
- **Do** 모바일 터치 접근성을 위해 푸터의 소셜 채널 링크 등의 규격을 최소 `44px (h-11 w-11)` 이상으로 준수합니다.
- **Do** 한글 문구의 자연스러운 줄바꿈을 위해 `word-break: keep-all` 속성을 텍스트 블록에 필수 선언합니다.

### Don't:
- **Don't** 1px 테두리와 16px 이상의 거대 섀도우를 함께 혼용하여 SaaS 클리셰(Ghost-card)를 남용하지 않습니다.
- **Don't** 그라디언트 텍스트(`background-clip: text`)를 사용하지 않으며 단색 굵기 밸런스로 핵심을 전달합니다.
- **Don't** 단순 장식을 위한 뜬금없는 유틸리티 모노스페이스 서체나 대각선 스트라이프 패턴을 렌더링하지 않습니다.
