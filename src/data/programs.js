// 공개 상품은 세 가지입니다. 3개월 프로그램은 항상 SEO 홈페이지 + 구글 비즈니스 프로필을 함께 진행합니다.
// 가격(2026-11-08 기준가): 3개월 프로그램 4,400 (홈페이지 신규 제작 포함) / 기존 홈페이지 재구성 시 3,400 / 월 유지 관리 390.
// 바꿀 때는 이 파일만 고치면 홈과 가격 페이지에 함께 반영됩니다.

export const programsKo = [
  {
    id: 'free-check',
    title: '무료 순위 점검',
    price: '무료',
    priceNote: '영업일 2~3일 내 이메일 회신',
    desc: '키워드 3개 현재 순위, 미노출 원인, 1순위 개선 항목을 이메일로 전달합니다.',
    points: ['키워드 3개 현재 순위', '홈페이지 · 구글 비즈니스 프로필 상태', '1순위 개선 항목'],
    cta: '무료 순위 점검 신청',
    href: '/contact?type=free-check',
    highlight: false,
  },
  {
    id: 'ranking-program',
    title: '구글 상위 노출 3개월 프로그램',
    subtitle: 'SEO 홈페이지 + 구글 비즈니스 프로필',
    price: 'AUD 4,400',
    priceNote: '홈페이지 신규 제작 포함 · 3개월 · 50% + 50% 분할',
    altNote: '기존 홈페이지 재구성 시 AUD 3,400',
    desc: '키워드 선정 → SEO 홈페이지 제작 → 구글 비즈니스 프로필 최적화 → 리뷰 관리 → 월간 리포트. 홈페이지와 프로필을 같은 키워드로 묶어 올립니다.',
    points: [
      '키워드 선정 · 경쟁 업체 분석',
      'SEO 홈페이지 제작 3~5페이지 (기존 홈페이지는 키워드 구조로 재구성)',
      '구글 비즈니스 프로필 최적화 · 홈페이지 연동',
      '리뷰 요청 시스템 · 답글 관리',
      '월간 노출 · 클릭 · 순위 리포트',
    ],
    cta: '프로그램 상담',
    href: '/contact?type=ranking-program',
    highlight: true,
  },
  {
    id: 'monthly-care',
    title: '월 유지 관리',
    price: 'AUD 390',
    priceNote: '월 결제 · 3개월 뒤 선택 · 언제든 중단',
    desc: '순위 유지를 위한 월 관리. 홈페이지 호스팅 · 수정, 프로필 업데이트, 리뷰 답글 포함.',
    points: ['홈페이지 호스팅 · 소규모 수정', '프로필 게시물 · 사진 업데이트', '리뷰 답글 · 요청 관리', '월간 리포트'],
    cta: '유지 관리 문의',
    href: '/contact?type=monthly-care',
    highlight: false,
  },
];

export const programsEn = [
  {
    id: 'free-check',
    title: 'Free Ranking Check',
    price: 'Free',
    priceNote: 'By email within 2–3 business days',
    desc: 'Current rankings for three searches, one reason you are not showing, and one thing to fix first.',
    points: ['Current rank for 3 searches', 'Website and Google profile status', 'One thing to fix first'],
    cta: 'Request Free Check',
    href: '/en/contact?type=free-check',
    highlight: false,
  },
  {
    id: 'ranking-program',
    title: '3-Month Google Ranking Program',
    subtitle: 'SEO website + Google Business Profile',
    price: 'AUD 4,400',
    priceNote: 'New website included · 3 months · paid in two halves',
    altNote: 'AUD 3,400 when restructuring an existing website',
    desc: 'Keywords → SEO website → Google Business Profile → reviews → monthly report. Website and profile built around the same keywords.',
    points: [
      'Keyword and competitor review',
      'SEO website, 3–5 pages (existing sites restructured around keywords)',
      'Google Business Profile optimisation linked to the website',
      'Review request system and replies',
      'Monthly impressions, clicks and rankings report',
    ],
    cta: 'Discuss the Program',
    href: '/en/contact?type=ranking-program',
    highlight: true,
  },
  {
    id: 'monthly-care',
    title: 'Monthly Care',
    price: 'AUD 390',
    priceNote: 'Per month · optional after 3 months · cancel anytime',
    desc: 'Monthly care to hold your rankings. Hosting and small edits, profile updates, review replies.',
    points: ['Website hosting and small edits', 'Profile posts and photos', 'Review replies and requests', 'Monthly report'],
    cta: 'Ask About Monthly Care',
    href: '/en/contact?type=monthly-care',
    highlight: false,
  },
];

// 가격 페이지 "SEO 홈페이지 제작" 섹션. 프로그램에 포함되는 홈페이지의 사양입니다.
export const websiteSpec = {
  id: 'website',
  title: 'SEO 홈페이지 제작',
  price: '프로그램 포함',
  priceNote: '3~5페이지 · 신규 제작 또는 기존 홈페이지 재구성',
  desc: '구글 상위 노출의 기반입니다. 키워드 구조로 페이지를 설계하고 구글 비즈니스 프로필과 연동합니다.',
  points: [
    '키워드 기준 페이지 구조 (소개 · 서비스 · 지역 · 문의)',
    '페이지별 제목 · 메타 · 본문 키워드 반영',
    '모바일 최적화 · 속도',
    '전화 · 문의폼 · 구글 프로필 연동',
    'Search Console · Analytics 등록',
  ],
  note: '홈페이지만 단독으로 필요한 경우는 상담 후 안내합니다.',
  cta: '홈페이지 문의',
  href: '/contact?type=website',
};

export const programMonths = [
  {
    label: '1개월 차',
    title: '세팅',
    items: ['키워드 3~5개 확정 · 경쟁 업체 3곳 분석', 'SEO 홈페이지 제작 착수 (기존 홈페이지는 재구성)', '구글 비즈니스 프로필 최적화', 'Search Console · Analytics 연결'],
  },
  {
    label: '2개월 차',
    title: '오픈 · 축적',
    items: ['홈페이지 오픈 · 구글 비즈니스 프로필 연동', '리뷰 요청 시스템 세팅 (문구 · 링크 · QR)', '지역 · 서비스 페이지 콘텐츠 보강', '1차 리포트'],
  },
  {
    label: '3개월 차',
    title: '검증 · 조정',
    items: ['순위 변동 분석 · 수정', '결과 기반 작업 조정', '유지 관리 전환 여부 결정', '최종 리포트'],
  },
];

export const pricingFaqs = [
  {
    question: '기간은 얼마나 걸리나요?',
    answer:
      '첫 변화는 보통 4~8주, 기본 단위는 3개월입니다. 경쟁 키워드는 더 걸릴 수 있어 무료 점검 때 예상 기간을 안내합니다.',
  },
  {
    question: '홈페이지가 없어도 되나요?',
    answer:
      '구글 상위 노출은 홈페이지와 구글 비즈니스 프로필을 함께 올리는 작업입니다. 홈페이지가 없으면 프로그램 안에서 SEO 홈페이지(3~5페이지)를 제작하고, 기존 홈페이지는 키워드 구조로 재구성합니다.',
  },
  {
    question: '효과가 보장되나요?',
    answer:
      '보장하지 않습니다. 순위는 구글이 결정합니다. 대신 매월 작업 내용과 노출 · 클릭 · 순위 변화를 리포트로 공유하고, 결과에 따라 작업을 조정합니다.',
  },
  {
    question: '결제는 어떻게 진행되나요?',
    answer:
      '3개월 프로그램: 시작 시 50%, 2개월 차 50%. 월 유지 관리: 월 결제, 언제든 해지.',
  },
  {
    question: '추가 비용이 있나요?',
    answer:
      '프로그램 금액에 홈페이지 제작(3~5페이지), 구글 비즈니스 프로필 최적화, 리뷰 시스템, 3개월 작업, 월간 리포트, 3개월 호스팅이 포함됩니다. 도메인 구매비(사장님 명의), 로고 · 사진 촬영, 광고비, 추가 페이지 제작은 별도입니다.',
  },
  {
    question: '중도 취소 시 환불은요?',
    answer:
      '작업 시작 전 100% 환불. 시작 후에는 진행 단계와 투입 시간 기준으로 부분 환불을 협의합니다.',
  },
  {
    question: '호스팅이나 도메인도 맡길 수 있나요?',
    answer:
      '월 유지 관리에 호스팅 포함. 도메인은 사장님 명의로 구매하고 연결은 저희가 진행합니다. 도메인 소유권은 반드시 사장님께 있어야 합니다.',
  },
  {
    question: '브리즈번이 아니어도 되나요?',
    answer:
      '가능합니다. 전 과정 온라인 진행. 단, 로컬 SEO 특성상 대상 지역을 정해 작업합니다. 한국어 상담, 영어 키워드 노출.',
  },
];
