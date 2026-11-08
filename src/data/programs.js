// 공개 상품은 세 가지뿐입니다. 홈페이지 제작은 필요한 경우에만 별도로 안내합니다.
// 가격은 2026-11-08 확정 기준가입니다(3개월 2,900 / 월 390 / 홈페이지 1,900부터). 바꿀 때는 이 파일만 고치면 홈과 가격 페이지에 함께 반영됩니다.

export const programsKo = [
  {
    id: 'free-check',
    title: '무료 순위 점검',
    price: '무료',
    priceNote: '2~3일 안에 이메일로',
    desc: '키워드 3개 현재 순위, 미노출 원인, 1순위 개선 항목을 이메일로 전달합니다.',
    points: ['키워드 3개 현재 순위', '구글 비즈니스 프로필 상태', '1순위 개선 항목'],
    cta: '무료 순위 점검 신청',
    href: '/contact?type=free-check',
    highlight: false,
  },
  {
    id: 'ranking-program',
    title: '구글 상위 노출 3개월 프로그램',
    price: 'AUD 2,900',
    priceNote: '3개월 · 월 환산 약 970 · 절반씩 분할 결제',
    desc: '키워드 선정 → 프로필 최적화 → 리뷰 관리 → 온페이지 SEO → 월간 리포트. 순위 변동에 필요한 3개월을 한 프로그램으로.',
    points: [
      '키워드 선정 · 경쟁 업체 분석',
      '구글 비즈니스 프로필 최적화',
      '리뷰 요청 시스템 · 답글 관리',
      '홈페이지 온페이지 SEO (없으면 1페이지 제작 포함)',
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
    desc: '확보한 순위 유지. 프로필 업데이트, 리뷰 답글, 홈페이지 수정, 호스팅 포함.',
    points: ['프로필 게시물 · 사진 업데이트', '리뷰 답글 · 요청 관리', '홈페이지 소규모 수정 · 호스팅', '월간 리포트'],
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
    priceNote: 'By email within 2–3 days',
    desc: 'Current rankings for three searches, one reason you are not showing, and one thing to fix first.',
    points: ['Current rank for 3 searches', 'Google profile status', 'One thing to fix first'],
    cta: 'Request Free Check',
    href: '/en/contact?type=free-check',
    highlight: false,
  },
  {
    id: 'ranking-program',
    title: '3-Month Google Ranking Program',
    price: 'AUD 2,900',
    priceNote: '3 months · about 970 per month · paid in two halves',
    desc: 'Keyword selection, profile, review flow, website alignment and monthly reports in one program.',
    points: [
      'Keyword and competitor review',
      'Google profile setup and cleanup',
      'Review request wording, links and replies',
      'Website copy and titles (one-page site included if needed)',
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
    desc: 'Keep the rankings you have earned. Profile posts and photos, review replies, small edits and hosting.',
    points: ['Profile posts and photos', 'Review replies and requests', 'Small website edits and hosting', 'Monthly report'],
    cta: 'Ask About Monthly Care',
    href: '/en/contact?type=monthly-care',
    highlight: false,
  },
];

export const websiteOption = {
  id: 'website',
  title: '홈페이지 제작 (필요 시)',
  price: 'AUD 1,900부터',
  priceNote: '3~5페이지 · 1회 결제',
  desc: '서비스별 페이지가 필요한 경우. 키워드 기준 제목 · 문구로 제작합니다.',
  points: [
    '소개 · 서비스 · 문의 페이지',
    '모바일 최적화',
    '키워드 기반 제목 · 메타 설정',
    'Search Console · Analytics 등록',
    '프로그램 동시 진행 시 할인 상담',
  ],
  cta: '홈페이지 제작 문의',
  href: '/contact?type=website',
};

export const programMonths = [
  {
    label: '1개월 차',
    title: '세팅',
    items: ['키워드 3~5개 확정 · 경쟁 업체 3곳 분석', '구글 비즈니스 프로필 최적화', '홈페이지 온페이지 SEO (없으면 1페이지 제작)', 'Search Console · Analytics 연결'],
  },
  {
    label: '2개월 차',
    title: '축적',
    items: ['리뷰 요청 시스템 세팅 (문구 · 링크 · QR)', '사진 · 서비스 설명 보강', '지역 · 서비스 페이지 콘텐츠 추가', '1차 리포트'],
  },
  {
    label: '3개월 차',
    title: '검증 · 조정',
    items: ['순위 변동 분석 · 수정', '효과 없는 작업 중단 · 교체', '유지 관리 전환 여부 결정', '최종 리포트'],
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
      '네. 구글 비즈니스 프로필만으로 시작 가능하고, 필요 시 프로그램 안에서 1페이지 홈페이지를 제작합니다. 서비스별 페이지가 필요한 경우만 홈페이지 제작을 별도 안내합니다.',
  },
  {
    question: '효과가 보장되나요?',
    answer:
      '보장하지 않습니다. 순위는 구글이 결정합니다. 대신 작업 내역 전체 공개, 월간 수치 보고, 효과 없는 작업 중단을 원칙으로 합니다.',
  },
  {
    question: '결제는 어떻게 진행되나요?',
    answer:
      '3개월 프로그램: 시작 시 50%(AUD 1,450), 2개월 차 50%. 월 유지 관리: 월 결제, 언제든 해지. 홈페이지 제작: 계약 시 50%, 검수 완료 시 50%.',
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
