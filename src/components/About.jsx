import React from 'react';
import { Eye, Sparkles, Database } from 'lucide-react';

export default function About() {
  const cards = [
    {
      title: "Transparency",
      desc: "100% verified sub-registrar registry files and open builder indices.",
      icon: Eye
    },
    {
      title: "Simplicity",
      desc: "We decode institutional valuation formulas into simple stock-style dashboards.",
      icon: Sparkles
    },
    {
      title: "Data-driven",
      desc: "Valuations and pricing updates backed by over 12M+ transactional records.",
      icon: Database
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAFAF8] border-b border-brand-borderMid/30 relative overflow-hidden">
      
      {/* Background decorative glows */}
      <div className="absolute top-1/4 right-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-brand-primary/3 rounded-full blur-[90px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-brand-teal/3 rounded-full blur-[90px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-start text-left">
        
        {/* Small subtle badge */}
        <div className="inline-block px-3.5 py-1.5 rounded-full bg-white border border-brand-borderMid/50 text-[9px] font-bold tracking-widest text-brand-primary uppercase mb-4 shadow-[0_1px_5px_rgba(0,0,0,0.01)] font-sans">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary inline-block mr-1.5 animate-pulse"></span>
          About FollowProperty
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight font-sans max-w-2xl leading-tight">
          Building smarter real-estate intelligence for India.
        </h2>

        {/* Short Text */}
        <p className="text-sm sm:text-base text-brand-slate font-light leading-relaxed mt-4 max-w-xl font-sans">
          FollowProperty helps property buyers and owners track and understand real-estate with clearer insights and smarter data.
        </p>

        {/* 3 Small Minimal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx} 
                className="bg-white border border-brand-border/60 rounded-3xl p-6 shadow-brand hover:shadow-brand-md transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primaryBorder/40 group text-left"
              >
                {/* Minimal Icon Container */}
                <div className="w-9 h-9 rounded-xl bg-brand-primaryBg border border-brand-primaryBorder/45 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 mb-4 shrink-0">
                  <Icon className="w-4.5 h-4.5" />
                </div>

                {/* Card Title */}
                <h3 className="text-sm sm:text-base font-bold text-brand-navy font-sans leading-tight">
                  {card.title}
                </h3>

                {/* Supporting Line */}
                <p className="text-xs text-brand-slateLight leading-relaxed mt-2 font-sans font-medium">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Founder Note Block at the Bottom */}
        <div className="mt-12 pt-8 border-t border-brand-border/40 max-w-3xl text-left w-full">
          <p className="text-xs sm:text-sm text-brand-slateLight italic leading-relaxed font-sans font-medium">
            “Real-estate is one of the biggest financial decisions people make, yet most owners still lack clear visibility into their own property.”
          </p>
          <div className="flex items-center gap-3 mt-4 select-none">
            <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white text-[10px] font-black font-sans shrink-0">
              FD
            </div>
            <div>
              <h5 className="text-xs font-bold text-brand-navy font-sans">Fritz Dsouza</h5>
              <span className="text-[9px] text-brand-slateLight font-bold uppercase tracking-wider font-sans">Founder, FollowProperty</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
