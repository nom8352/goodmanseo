import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { workModes } from '../data/serviceApproach';

export default function WorkWays({ locale = 'ko' }) {
  const english = locale === 'en';
  return (
    <section id="ways" className="!max-w-none scroll-mt-24 bg-white py-12 md:py-16">
      <div className="container px-6">
        <div className="max-w-2xl mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#102133]">{english ? 'Choose the help that fits you.' : '어떤 방식이 편하신가요?'}</h2>
          <p className="mt-3 leading-relaxed text-[#44515d]">{english ? 'Learn, work together, or delegate. You do not have to do everything yourself.' : '배우고 싶은 만큼 배우고, 필요한 만큼 도움받으세요. 전부 혼자 하실 필요는 없습니다.'}</p>
        </div>
        <div className="divide-y divide-[#ded8cf] border-y border-[#ded8cf]">
          {(workModes[locale] || workModes.ko).map(mode => (
            <article key={mode.value} className="grid gap-3 py-6 md:grid-cols-[0.65fr_1.6fr_auto] md:items-center md:gap-8">
              <h3 className="text-lg font-extrabold text-[#102133]">{mode.title}</h3>
              <div><p className="text-sm leading-relaxed text-[#44515d]">{mode.description}</p><p className="mt-1 text-sm leading-relaxed text-[#44515d]">{mode.detail}</p></div>
              <Link to={mode.href} className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#102133] underline underline-offset-4">{mode.cta}<ArrowRight size={15} /></Link>
            </article>
          ))}
        </div>
        <p className="mt-5 text-sm leading-relaxed text-[#44515d]">{english ? 'You can also delegate the initial setup and learn to maintain it, or ask for help with one difficult part. Scope and cost are agreed before work begins.' : '처음에는 맡기고 이후 운영 방법을 배우거나, 직접 하다가 어려운 부분만 맡길 수도 있습니다. 작업 범위와 비용은 시작 전에 협의합니다.'}</p>
      </div>
    </section>
  );
}
