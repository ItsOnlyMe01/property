import React from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  Building2, 
  Bell, 
  BarChart3, 
  Sparkles, 
  Eye, 
  Briefcase, 
  Zap 
} from 'lucide-react';

export default function Platform({ onOpenLeadForm }) {
  const capabilities = [
    {
      title: "Live Market Valuation",
      desc: "Continuous valuations blending circle rates, comparables and registration data.",
      icon: TrendingUp
    },
    {
      title: "Builder Monitoring",
      desc: "Track 8,000+ builders for delays, complaints, RERA status and project pace.",
      icon: Building2
    },
    {
      title: "Smart Alerts",
      desc: "Price moves, possession risk and policy updates the moment they matter.",
      icon: Bell
    },
    {
      title: "Rental Analytics",
      desc: "Yields, vacancy benchmarks and rental comparables by locality.",
      icon: BarChart3
    },
    {
      title: "Appreciation Forecasting",
      desc: "Forward-looking price models trained on 10+ years of Indian data.",
      icon: Sparkles
    },
    {
      title: "Watchlist Dashboard",
      desc: "Pre-buy intelligence for properties you're evaluating.",
      icon: Eye
    },
    {
      title: "Portfolio Management",
      desc: "All properties, all owners, one source of truth.",
      icon: Briefcase
    },
    {
      title: "Investment Insights",
      desc: "Personalised recommendations based on your goals and risk.",
      icon: Zap
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-white border-b border-brand-borderMid/30 relative overflow-hidden">
      
      {/* Background visual glows */}
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-brand-primary/2 rounded-full blur-[80px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-brand-teal/2 rounded-full blur-[95px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Block with CTA Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 select-none">
          <div className="max-w-2xl text-left">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-primary font-sans">
              PLATFORM
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy tracking-tight leading-[1.15] mt-3 font-sans">
              Everything you need to own property intelligently.
            </h2>
          </div>
          
          {/* Explore Platform CTA Button */}
          <div className="shrink-0 text-left">
            <button
              onClick={onOpenLeadForm}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-brand-borderMid text-xs font-extrabold tracking-wider text-brand-navy bg-white hover:bg-brand-bgAlt hover:border-brand-navy transition-all duration-300 shadow-sm cursor-pointer hover:shadow-brand font-sans"
            >
              Explore platform
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 8-Card Platform Capability Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {capabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-white border border-brand-border/60 rounded-3xl p-6 shadow-brand hover:shadow-brand-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-primaryBorder/40 group"
              >
                {/* Icon Container with soft background */}
                <div className="w-10 h-10 rounded-2xl bg-brand-primaryBg border border-brand-primaryBorder/45 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <Icon className="w-4 h-4 shrink-0" />
                </div>

                {/* Card Title */}
                <h3 className="text-sm sm:text-base font-bold text-brand-navy mt-5 font-sans leading-tight">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs text-brand-slateLight leading-relaxed mt-2 font-sans font-medium">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
