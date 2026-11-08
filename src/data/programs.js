// 공개 상품은 세 가지뿐입니다. 홈페이지 제작은 필요한 경우에만 별도로 안내합니다.
// 가격은 2026-11-08 확정 기준가입니다(3개월 2,900 / 월 390 / 홈페이지 1,900부터). 바꿀 때는 이 파일만 고치면 홈과 가격 페이지에 함께 반영됩니다.

export const programsKo = [
  {
    id: 'free-check',
    title: '무료 순위 점검',
    price: '무료',
    priceNote: '2~3일 안에 이메일로',
    desc: '손님이 칠 검색어 3개로 지금 몇 위인지, 안 나오는 이유 한 가지, 먼저 고칠 것 한 가지를 정리해 드립니다.',
    points: ['검색어 3개 현재 순위', '구글 프로필 상태', '먼저 고칠 것 1가지'],
    cta: '무료 순위 점검 신청',
    href: '/contact?type=free-check',
    highlight: false,
  },
  {
    id: 'ranking-program',
    title: '구글 상위 노출 3개월 프로그램',
    price: 'AUD 2,900',
    priceNote: '3개월 · 월 환산 약 970 · 절반씩 분할 결제',
    desc: '검색어 선정부터 프로필, 리뷰 흐름, 홈페이지 정리, 월 리포트까지. 순위가 움직이는 데 필요한 기간을 한 번에 잡습니다.',
    points: [
      '검색어 선정 · 경쟁 가게 확인',
      '구글 프로필 세팅 · 정리',
      '리뷰 요청 문구 · 링크 · 답글',
      '홈페이지 문구·제목 정리 (없으면 1페이지 제작 포함)',
      '매달 노출·클릭·순위 리포트',
    ],
    cta: '프로그램 상담하기',
    href: '/contact?type=ranking-program',
    highlight: true,
  },
  {
    id: 'monthly-care',
    title: '월 유지 관리',
    price: 'AUD 390',
    priceNote: '월 결제 · 3개월 뒤 선택 · 언제든 중단',
    desc: '올라간 순위를 지키는 단계입니다. 프로필 소식과 사진, 리뷰 답글, 작은 수정, 호스팅까지 맡기세요.',
    points: ['프로필 소식 · 사진 업데이트', '리뷰 답글 · 요청 관리', '홈페이지 작은 수정 · 호스팅 포함', '월 리포트'],
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
  title: '홈페이지 제작 (필요한 경우)',
  price: 'AUD 1,900부터',
  priceNote: '3~5페이지 · 1회 결제',
  desc: '프로그램의 1페이지로 부족하고 서비스별 페이지가 필요한 경우에만 안내합니다. 검색어에 맞춘 제목과 문구로 처음부터 만듭니다.',
  points: [
    '소개 · 서비스 · 문의 페이지 구성',
    '모바일 화면 기본 세팅',
    '검색어에 맞춘 제목 · 문구',
    'Search Console · Analytics 등록',
    '프로그램과 함께 진행하면 상담 시 조정',
  ],
  cta: '홈페이지 제작 문의',
  href: '/contact?type=website',
};

export const programMonths = [
  {
    label: '1개월 차',
    title: '기준을 잡습니다',
    items: ['검색어 3~5개 확정, 경쟁 가게 3곳 확인', '구글 프로필 세팅 · 정리', '홈페이지 제목 · 문구 정리 (없으면 1페이지 제작)', 'Search Console · Analytics 연결'],
  },
  {
    label: '2개월 차',
    title: '쌓이게 만듭니다',
    items: ['리뷰 요청 문구 · 링크 · QR 전달', '사진 · 서비스 설명 보강', '지역 · 서비스 문장 추가', '첫 번째 리포트'],
  },
  {
    label: '3개월 차',
    title: '숫자를 보고 고칩니다',
    items: ['순위 변화 확인 후 수정', '안 되는 작업 멈추고 되는 쪽으로', '유지 관리 여부 결정', '최종 리포트'],
  },
];

export const pricingFaqs = [
  {
    question: '얼마나 걸리나요?',
    answer:
      '보통 첫 변화는 4~8주 사이에 보이기 시작하고, 3개월을 한 단위로 봅니다. 경쟁이 심한 검색어는 더 걸릴 수 있어서, 무료 점검 때 예상 기간을 솔직하게 말씀드립니다.',
  },
  {
    question: '홈페이지가 없어도 되나요?',
    answer:
      '네. 구글 프로필만으로 시작할 수 있고, 필요하면 3개월 프로그램 안에서 1페이지 홈페이지를 만들어 드립니다. 서비스별로 여러 페이지가 필요한 경우에만 홈페이지 제작을 따로 안내합니다.',
  },
  {
    question: '효과가 보장되나요?',
    answer:
      '아니요. 순위는 구글이 정하기 때문에 어떤 업체도 보장할 수 없습니다. 대신 한 일을 전부 보여드리고, 매달 노출·클릭·순위를 숫자로 보고하고, 효과 없는 작업은 멈춥니다.',
  },
  {
    question: '결제는 어떻게 진행되나요?',
    answer:
      '3개월 프로그램은 시작할 때 절반(AUD 1,450), 두 달째에 나머지 절반을 결제합니다. 월 유지 관리는 매달 결제이고 언제든 중단할 수 있습니다. 홈페이지 제작은 계약 시 50%, 검수 완료 시 50%입니다.',
  },
  {
    question: '중도 취소 시 환불은요?',
    answer:
      '작업 시작 전에는 전액 환불해 드립니다. 작업이 시작된 뒤에는 진행된 단계와 투입된 시간에 따라 협의해서 부분 환불합니다.',
  },
  {
    question: '호스팅이나 도메인도 맡길 수 있나요?',
    answer:
      '월 유지 관리에 호스팅이 포함됩니다. 도메인은 사장님 명의로 직접 구매하시도록 도와드리고, 연결은 저희가 합니다. 도메인이 사장님 것이어야 나중에 어떤 업체와 일해도 문제가 없습니다.',
  },
  {
    question: '브리즈번이 아니어도 되나요?',
    answer:
      '네. 전 과정이 온라인이라 호주 어디든 진행할 수 있습니다. 다만 로컬 검색이라 지역을 정해서 작업하고, 한국어 상담과 영어 검색 노출 모두 지원합니다.',
  },
];
