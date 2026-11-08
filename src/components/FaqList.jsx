import React from 'react';
import { ChevronDown } from 'lucide-react';

const FaqItem = ({ question, answer, tone = 'light' }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isDark = tone === 'dark';

  return (
    <div className="py-1">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className={`group flex w-full items-center justify-between gap-4 border-b py-4 text-left transition-colors ${
          isDark ? 'border-white/10 text-[#eef3f7]' : 'border-[#e1e6ea] text-[#102133]'
        }`}
      >
        <span className="text-[0.92rem] font-semibold tracking-[-0.02em] sm:text-[0.95rem]">{question}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${isDark ? 'text-[#d8c8af]' : 'text-[#102133]'}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className={`py-4 pl-1 text-[0.9rem] leading-[1.75] ${isDark ? 'text-[#aeb8c1]' : 'text-[#44515d]'}`}>{answer}</p>
      </div>
    </div>
  );
};

const FaqList = ({ items, tone = 'light', className = '' }) => (
  <div className={`border-t ${tone === 'dark' ? 'border-white/10' : 'border-[#e1e6ea]'} ${className}`}>
    {items.map((item) => (
      <FaqItem key={item.question} question={item.question} answer={item.answer} tone={tone} />
    ))}
  </div>
);

export default FaqList;
