import blog1 from '../assets/blog1.png';
import blog3 from '../assets/blog3.png';

export const blogPosts = [
  {
    id: 'google-maps-setup',
    date: '2024.03.13',
    author: 'Goodman SEO',
    title: '구글 지도에서 우리 매장이 안 보인다면? 지금 당장 세팅해야 하는 이유',
    excerpt: '손님은 먼저 구글에서 가게를 찾습니다.',
    category: '구글 지도/검색',
    image: blog1,
    content: [
      '손님은 먼저 구글과 구글 지도를 봅니다.',
      '주소, 전화번호, 사진, 영업시간이 깔끔하면 신뢰가 생깁니다.',
      '이 기본 정보만 잘 정리돼도 문의가 훨씬 쉬워집니다.',
    ],
  },
  {
    id: 'why-business-needs-website',
    date: '2024.03.12',
    author: 'Goodman SEO',
    title: "인스타그램만 열심히 하면 될까? 내 비즈니스에 '진짜' 홈페이지가 필요한 이유",
    excerpt: 'SNS만으로는 중요한 정보를 다 보여주기 어렵습니다.',
    category: '홈페이지 기본기',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    content: [
      'SNS는 관심을 끌기 좋습니다.',
      '하지만 가격, 서비스, 문의 방법은 홈페이지가 더 보기 쉽습니다.',
      'SNS와 홈페이지를 같이 써야 손님이 덜 헷갈립니다.',
    ],
  },
  {
    id: 'online-basics-for-small-business',
    date: '2024.03.11',
    author: 'Goodman SEO',
    title: "비싼 마케팅 업체에 속지 마세요. 소상공인에게 진짜 필요한 '온라인 기본기'",
    excerpt: '처음에는 거창한 마케팅보다 기본 세팅이 더 중요합니다.',
    category: '온라인 기본 세팅',
    image: blog3,
    content: [
      '처음부터 어려운 마케팅을 할 필요는 없습니다.',
      '먼저 보여야 하고, 보기 좋아야 하고, 문의가 와야 합니다.',
      '그 기본기를 한 번에 정리하는 것이 홈페이지와 구글 기본 세팅입니다.',
    ],
  },
];

export const getBlogPostById = (id) => blogPosts.find((post) => post.id === id);

