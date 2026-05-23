import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Add property or buying preference",
      desc: "Owners add existing portfolio. Buyers add preferences — location, budget, project."
    },
    {
      number: "02",
      title: "Track market intelligence",
      desc: "We continuously valuate, benchmark and monitor builders, prices and policy."
    },
    {
      number: "03",
      title: "Receive smart alerts & insights",
      desc: "Get prioritised, actionable intelligence — by app, email or WhatsApp."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FAFAF8] border-b border-brand-borderMid/30 relative overflow-hidden">
      
      {/* Subtle decorative glows */}
      <div className="absolute top-1/4 left-1/3 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-brand-primary/3 rounded-full blur-[90px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-brand-teal/3 rounded-full blur-[90px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Block */}
        <div className="max-w-4xl text-left mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-primary font-sans">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy tracking-tight leading-[1.15] mt-3 font-sans">
            From scattered to systematic in three steps.
          </h2>
        </div>

        {/* 3-Step Horizontal Flow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-brand-border/60 rounded-3xl p-6 sm:p-8 shadow-brand hover:shadow-brand-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-primaryBorder/40 group relative"
            >
              {/* Step indicator circle */}
              <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white text-xs font-bold select-none font-sans shrink-0">
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="text-base sm:text-lg font-bold text-brand-navy mt-6 font-sans leading-snug">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-xs sm:text-sm text-brand-slateLight leading-relaxed mt-2.5 font-sans font-medium">
                {step.desc}
              </p>

              {/* Mock visual connection arrows between cards on desktop */}
              {idx < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20">
                  <svg className="w-5 h-5 text-brand-borderMid" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
