import React from 'react';
import { Database, ShieldAlert, Bell, TrendingUp, Eye, Shuffle } from 'lucide-react';

export default function Problem() {
  const problems = [
    {
      title: "No centralized tracking",
      desc: "Property records, valuations and documents live across brokers, builders and email threads.",
      icon: Database
    },
    {
      title: "Builder trust issues",
      desc: "Possession delays, quality issues and opaque pricing make every purchase a gamble.",
      icon: ShieldAlert
    },
    {
      title: "No intelligent alerts",
      desc: "Owners learn about price shifts, circle rate revisions and risks months too late.",
      icon: Bell
    },
    {
      title: "Scattered valuations",
      desc: "Bank, builder and broker valuations contradict each other with no source of truth.",
      icon: TrendingUp
    },
    {
      title: "Low ownership visibility",
      desc: "Most owners don't know their real ROI, appreciation or yield at any given moment.",
      icon: Eye
    },
    {
      title: "Fragmented intelligence",
      desc: "Market comparables, rental data and project updates sit in silos no one connects.",
      icon: Shuffle
    }
  ];

  return (
    <section id="problem" className="py-20 md:py-28 bg-white border-y border-brand-borderMid/30 relative overflow-hidden">
      
      {/* Premium background glow spots to elevate aesthetics */}
      <div className="absolute top-1/3 left-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-brand-primary/3 rounded-full blur-[90px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-brand-teal/3 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-4xl text-left mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-primary font-sans">
            THE PROBLEM
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy tracking-tight leading-[1.15] mt-3 font-sans">
            Indian real-estate is the largest asset class — and the least tracked.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-brand-slate font-light leading-relaxed mt-4 max-w-2xl font-sans">
            Owners manage equity portfolios on apps but track property on WhatsApp. FollowProperty fixes that.
          </p>
        </div>

        {/* 6-Card Problem Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index} 
                className="bg-white border border-brand-border/60 rounded-3xl p-6 sm:p-7 shadow-brand hover:shadow-brand-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-primaryBorder/40 group"
              >
                {/* Icon Container with soft background */}
                <div className="w-11 h-11 rounded-2xl bg-brand-primaryBg border border-brand-primaryBorder/45 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5 shrink-0" />
                </div>

                {/* Card Title */}
                <h3 className="text-base sm:text-lg font-bold text-brand-navy mt-5 font-sans leading-tight">
                  {problem.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs sm:text-sm text-brand-slateLight leading-relaxed mt-2.5 font-sans font-medium">
                  {problem.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
