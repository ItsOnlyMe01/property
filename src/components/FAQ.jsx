import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import contentData from '../data/content.json';

export default function FAQ({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = data || contentData.faq || [];
  const header = contentData.faqHeader || {
    tagline: "KNOWLEDGE BASE",
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about the FollowProperty real estate intelligence network."
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 relative overflow-hidden bg-brand-bgAlt border-t border-brand-borderMid/50">
      
      {/* Background glow in brand electric blue */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-[600px] bg-brand-primary/3 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-block px-3.5 py-1.5 rounded-full bg-white border border-brand-borderMid/50 text-[10px] font-bold tracking-widest text-brand-primary uppercase mb-4 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
            <HelpCircle className="w-3.5 h-3.5 inline mr-1 text-brand-primary" />
            {header.tagline}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-navy tracking-tight mb-4 font-sans leading-tight text-center">
            {header.title}
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-brand-slate font-light leading-relaxed">
            {header.subtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-primaryDark mt-6 rounded-full"></div>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div 
                key={index} 
                className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${
                  isOpen 
                    ? 'border-brand-primary/40 shadow-brand-md' 
                    : 'border-brand-borderMid/40 hover:border-brand-borderMid/80'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none transition-colors duration-300 cursor-pointer"
                >
                  <span className={`font-semibold text-base sm:text-lg pr-4 transition-colors duration-300 font-sans ${
                    isOpen ? 'text-brand-primary' : 'text-brand-navy'
                  }`}>
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-brand-primaryBg text-brand-primary' : 'bg-[#FAFAF8] text-brand-slateLight'
                  }`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`} />
                  </div>
                </button>

                {/* Accordion Content Panel */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] border-t border-brand-borderMid/30 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <p className="p-6 text-sm sm:text-base text-brand-slate font-light leading-relaxed bg-[#FAFAF8]/50 font-sans">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
