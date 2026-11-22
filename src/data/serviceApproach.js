export const approachSeo = {
  ko: { title: 'AI 실전 코칭 · 홈페이지 · 온라인 마케팅', description: '홈페이지와 온라인 마케팅, AI로 직접 배우거나 굳맨과 함께 진행하세요. 시간이 없거나 어렵다면 제작과 설정을 맡길 수도 있습니다.' },
  en: { title: 'AI Coaching · Websites · Online Marketing', description: 'Learn to use AI for your website and marketing, work alongside GoodmanSEO, or have us handle the agreed work for you.' },
};

export const workModes = {
  ko: [
    { value: 'learn', title: '직접 배우기', description: '강의로 기본기를 익히고 내 속도에 맞춰 적용하고 싶은 분께.', detail: '현재 제공 중인 강의의 내용과 수강 방법을 확인하세요.', cta: 'AI 강의 살펴보기', href: '/ai-course' },
    { value: 'coach', title: '함께 진행하기', description: '직접 해보되 방향을 잡아주고 결과를 점검해줄 사람이 필요한 분께.', detail: '내 사업의 실제 과제로 실습하고, 막히는 부분을 함께 풀어갑니다.', cta: 'AI 실전 코칭 보기', href: '/ai-business' },
    { value: 'done-for-you', title: '맡겨서 진행하기', description: '시간이 없거나 직접 하기 어려워 제작과 설정을 맡기고 싶은 분께.', detail: '기존 제작·SEO 서비스를 이용하거나 필요한 작업 범위를 상담하세요.', cta: '제작·대행 가격 보기', href: '/pricing#website-packages' },
  ],
  en: [
    { value: 'learn', title: 'Learn it yourself', description: 'Learn the basics and apply them at your own pace.', detail: 'Explore the content and enrolment details of our existing course.', cta: 'Explore the course (Korean)', href: '/ai-course' },
    { value: 'coach', title: 'Work together', description: 'Do the work yourself with guidance and feedback along the way.', detail: 'Practise on a real task from your business, with help where you get stuck.', cta: 'Ask about coaching', href: '/en/contact?type=ai-mentoring&mode=coach' },
    { value: 'done-for-you', title: 'Have us handle it', description: 'For when time or technical difficulties make doing it yourself impractical.', detail: 'Discuss website production, search setup or a specific task you need handled.', cta: 'Discuss your project', href: '/en/contact?type=general-inquiry&mode=done-for-you' },
  ],
};

export const getWorkMode = (value) => ['learn', 'coach', 'done-for-you'].includes(value) ? value : 'unsure';
export const workModeLabel = (value, locale = 'ko') =>
  (workModes[locale] || workModes.ko).find(mode => mode.value === value)?.title || (locale === 'en' ? 'Help me choose' : '상담 후 결정');
