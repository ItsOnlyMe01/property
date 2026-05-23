import React from 'react';
import { FileText, Building2, BarChart3, ShieldCheck } from 'lucide-react';

export default function TrustAndData() {
  const stats = [
    { value: "12M+", label: "Registration records" },
    { value: "8K+", label: "Builders monitored" },
    { value: "480+", label: "Localities priced daily" },
    { value: "99.4%", label: "Valuation accuracy" }
  ];

  const layers = [
    {
      title: "Registration data",
      desc: "Sub-registrar records across 14 Indian states.",
      icon: FileText
    },
    {
      title: "Builder rates",
      desc: "Project-level live pricing from 8,000+ developers.",
      icon: Building2
    },
    {
      title: "Market comparables",
      desc: "Listings, transactions and resale benchmarks.",
      icon: BarChart3
    },
    {
      title: "Govt. circle rates",
      desc: "State circle rate updates monitored continuously.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="trust-data" className="py-20 md:py-28 bg-white border-b border-brand-borderMid/30 relative overflow-hidden">
      
      {/* Decorative premium glows */}
      <div className="absolute top-1/4 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand-primary/2 rounded-full blur-[90px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-brand-teal/2 rounded-full blur-[95px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, description, and stats grid */}
          <div className="lg:col-span-5 flex flex-col items-start text-left w-full">
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-primary font-sans">
              TRUST & DATA
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy tracking-tight leading-[1.15] mt-3 font-sans">
              A valuation engine built on the most complete Indian real-estate dataset.
            </h2>
            <p className="text-sm sm:text-base text-brand-slate font-light leading-relaxed mt-4 max-w-xl font-sans">
              Our pricing models blend four data layers updated continuously — so what you see on FollowProperty matches what the market is actually doing.
            </p>

            {/* Visual Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8 w-full">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="bg-brand-bg/50 border border-brand-border/60 rounded-3xl p-5 hover:bg-white hover:shadow-brand transition-all duration-300 select-none"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-brand-primary block tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-xs text-brand-slateLight font-bold uppercase tracking-wider mt-1 block leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 feature cards representing data layers */}
          <div className="lg:col-span-7 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
              {layers.map((layer, idx) => {
                const Icon = layer.icon;
                return (
                  <div 
                    key={idx} 
                    className="bg-white border border-brand-border/60 rounded-3xl p-6 sm:p-7 shadow-brand hover:shadow-brand-md transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-primaryBorder/40 group"
                  >
                    {/* Icon Container with soft background */}
                    <div className="w-10 h-10 rounded-2xl bg-brand-primaryBg border border-brand-primaryBorder/45 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 mb-4 shrink-0">
                      <Icon className="w-4.5 h-4.5 shrink-0" />
                    </div>

                    {/* Card Title */}
                    <h3 className="text-sm sm:text-base font-bold text-brand-navy font-sans leading-tight">
                      {layer.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs sm:text-sm text-brand-slateLight leading-relaxed mt-2 font-sans font-medium">
                      {layer.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
