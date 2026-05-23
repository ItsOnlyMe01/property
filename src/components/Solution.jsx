import React from 'react';
import { Check, Briefcase, Calendar, Bell, AlertTriangle, FileText, TrendingUp } from 'lucide-react';

export default function Solution() {
  const properties = [
    { name: "Whitefield 3BHK", city: "Bengaluru", price: "₹1.92 Cr", change: "+14.2%", isPositive: true },
    { name: "Sector 62 2BHK", city: "Noida", price: "₹1.10 Cr", change: "+6.1%", isPositive: true },
    { name: "Andheri West 1BHK", city: "Mumbai", price: "₹1.80 Cr", change: "-1.4%", isPositive: false }
  ];

  const heatmapShades = [
    'bg-[#3B82F6]/60', 'bg-[#3B82F6]/40', 'bg-[#3B82F6]/80', 'bg-[#3B82F6]/20', 'bg-[#3B82F6]/10', 'bg-[#3B82F6]/70', 'bg-[#3B82F6]/50', 'bg-[#3B82F6]/60',
    'bg-[#3B82F6]/30', 'bg-[#3B82F6]/10', 'bg-[#3B82F6]/60', 'bg-[#3B82F6]/50', 'bg-[#3B82F6]/30', 'bg-[#3B82F6]/20', 'bg-[#3B82F6]/40', 'bg-[#3B82F6]/70',
    'bg-[#3B82F6]/80', 'bg-[#3B82F6]/40', 'bg-[#3B82F6]/20', 'bg-[#3B82F6]/70', 'bg-[#3B82F6]/50', 'bg-[#3B82F6]/80', 'bg-[#3B82F6]/10', 'bg-[#3B82F6]/30',
    'bg-[#3B82F6]/40', 'bg-[#3B82F6]/70', 'bg-[#3B82F6]/80', 'bg-[#3B82F6]/20', 'bg-[#3B82F6]/10', 'bg-[#3B82F6]/60', 'bg-[#3B82F6]/30', 'bg-[#3B82F6]/50',
    'bg-[#3B82F6]/20', 'bg-[#3B82F6]/50', 'bg-[#3B82F6]/10', 'bg-[#3B82F6]/60', 'bg-[#3B82F6]/70', 'bg-[#3B82F6]/20', 'bg-[#3B82F6]/80', 'bg-[#3B82F6]/40',
    'bg-[#3B82F6]/70', 'bg-[#3B82F6]/80', 'bg-[#3B82F6]/30', 'bg-[#3B82F6]/50', 'bg-[#3B82F6]/40', 'bg-[#3B82F6]/80', 'bg-[#3B82F6]/10', 'bg-[#3B82F6]/60',
    'bg-[#3B82F6]/50', 'bg-[#3B82F6]/20', 'bg-[#3B82F6]/60', 'bg-[#3B82F6]/80', 'bg-[#3B82F6]/20', 'bg-[#3B82F6]/40', 'bg-[#3B82F6]/70', 'bg-[#3B82F6]/30',
    'bg-[#3B82F6]/10', 'bg-[#3B82F6]/60', 'bg-[#3B82F6]/50', 'bg-[#3B82F6]/30', 'bg-[#3B82F6]/80', 'bg-[#3B82F6]/20', 'bg-[#3B82F6]/60', 'bg-[#3B82F6]/40'
  ];

  const alerts = [
    {
      title: "Circle rate revised",
      sub: "Sector 62 +6.1%",
      icon: Bell,
      color: "text-brand-primary bg-brand-primaryBg border-brand-primaryBorder/40"
    },
    {
      title: "Possession delay flagged",
      sub: "Prestige Lakeside · 3mo",
      icon: AlertTriangle,
      color: "text-brand-amber bg-brand-amberBg border-brand-amberBorder"
    },
    {
      title: "RERA filing updated",
      sub: "Godrej Splendour",
      icon: FileText,
      color: "text-[#3B82F6] bg-[#3B82F6]/5 border-[#3B82F6]/15"
    },
    {
      title: "Rental yield uplift",
      sub: "Whitefield +0.4%",
      icon: TrendingUp,
      color: "text-[#10B981] bg-[#10B981]/5 border-[#10B981]/15"
    }
  ];

  return (
    <section id="solution" className="py-20 md:py-28 bg-[#FAFAF8] relative overflow-hidden flex flex-col items-center justify-center border-b border-brand-borderMid/30">
      
      {/* Decorative gradient background glows */}
      <div className="absolute top-1/4 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand-primary/4 rounded-full blur-[90px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand-teal/4 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full space-y-12 sm:space-y-16">
        
        {/* Solution Global Title */}
        <div className="max-w-4xl text-left">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-brand-primary font-sans">
            THE SOLUTION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-brand-navy tracking-tight leading-[1.15] mt-3 font-sans">
            A property intelligence layer for India.
          </h2>
        </div>

        {/* Block 1: Your real-estate portfolio, finally in one place */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-primaryBg border border-brand-primaryBorder/65 text-[9px] font-bold tracking-widest text-brand-primary uppercase mb-4 shadow-[0_1px_5px_rgba(59,130,246,0.02)] font-sans">
              Portfolio
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight leading-[1.2] font-sans mb-4">
              Your real-estate portfolio, finally in one place.
            </h3>
            <p className="text-sm sm:text-base text-brand-slate font-light leading-relaxed mb-6 max-w-xl">
              Add every property — owned, inherited, under-construction or watchlisted. See total value, yield and appreciation in real time.
            </p>
            
            {/* Checklist bullets */}
            <ul className="space-y-3">
              {[
                "Multi-property dashboards",
                "Document vault",
                "Joint-owner views"
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-navy">
                  <div className="w-5 h-5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Mockup */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[420px] bg-white rounded-3xl border border-brand-border shadow-brand-lg p-5 sm:p-6 transition-all duration-300 hover:shadow-brand-md hover:border-brand-primaryBorder/40">
              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-brand-border">
                <span className="text-xs font-bold text-brand-navy font-sans uppercase tracking-wider">Your Portfolio</span>
                <div className="flex items-center gap-1.5 bg-brand-bgAlt border border-brand-borderMid/50 rounded-lg px-2.5 py-1 text-[9px] text-brand-slate font-bold select-none shadow-sm">
                  <Briefcase className="w-3.5 h-3.5 text-brand-slateLight" />
                  3 properties
                </div>
              </div>
              
              {/* List */}
              <div className="mt-4 space-y-3.5">
                {properties.map((prop, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3.5 rounded-2xl border border-brand-border/60 bg-brand-bg/50 hover:bg-white hover:shadow-sm hover:border-brand-borderMid/40 transition-all duration-200">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-brand-navy font-sans tracking-tight">{prop.name}</h4>
                      <span className="text-[10px] text-brand-slateLight font-medium mt-0.5 block">{prop.city}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs sm:text-sm font-extrabold text-brand-navy">{prop.price}</span>
                      <span className={`text-[9px] font-extrabold block mt-0.5 ${prop.isPositive ? 'text-[#10B981]' : 'text-brand-red'}`}>
                        {prop.isPositive ? `▲ ${prop.change}` : `▼ ${prop.change}`}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Block 2: Market signals, not market noise */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Side Heatmap Grid Mockup (reversing visually on desktop) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="w-full max-w-[420px] bg-white rounded-3xl border border-brand-border shadow-brand-lg p-5 sm:p-6 transition-all duration-300 hover:shadow-brand-md hover:border-brand-primaryBorder/40">
              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-brand-border select-none">
                <div>
                  <span className="text-xs font-bold text-brand-navy font-sans uppercase tracking-wider block">Locality Heatmap</span>
                  <span className="text-[9px] text-brand-slateLight font-bold mt-0.5 block">Bengaluru</span>
                </div>
                <div className="flex items-center gap-1.5 bg-brand-bgAlt border border-brand-borderMid/50 rounded-lg px-2.5 py-1 text-[9px] text-brand-slate font-bold shadow-sm">
                  <Calendar className="w-3.5 h-3.5 text-brand-slateLight" />
                  Q3 2025
                </div>
              </div>
              
              {/* Heatmap Grid (8x8 squares) */}
              <div className="grid grid-cols-8 gap-1.5 mt-5">
                {heatmapShades.map((shade, idx) => (
                  <div 
                    key={idx} 
                    className={`aspect-square w-full rounded-md sm:rounded-lg ${shade} transition-all duration-300 hover:scale-[1.12] hover:shadow-sm cursor-pointer`}
                    title={`Density score: ${Math.round(shade.split('/').pop().replace(')', '') * 10)}`}
                  ></div>
                ))}
              </div>

              {/* Lower Scale */}
              <div className="flex justify-between items-center mt-4 text-[9px] font-bold text-brand-slateLight uppercase tracking-wider select-none px-0.5">
                <span>Low ₹7,200/sqft</span>
                <span>High ₹14,800/sqft</span>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left order-1 lg:order-2">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-tealBg border border-brand-tealBorder/65 text-[9px] font-bold tracking-widest text-brand-teal uppercase mb-4 shadow-[0_1px_5px_rgba(13,148,136,0.02)] font-sans">
              Intelligence
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight leading-[1.2] font-sans mb-4">
              Market signals, not market noise.
            </h3>
            <p className="text-sm sm:text-base text-brand-slate font-light leading-relaxed mb-6 max-w-xl">
              We blend registration data, circle rates, builder activity and rental comparables into one continuous price truth.
            </p>
            
            {/* Checklist bullets */}
            <ul className="space-y-3">
              {[
                "Live valuation engine",
                "Locality heatmaps",
                "Yield forecasting"
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-navy">
                  <div className="w-5 h-5 rounded-full bg-brand-tealBg border border-brand-tealBorder/50 flex items-center justify-center text-brand-teal shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Block 3: Smart alerts before the market reacts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-primaryBg border border-brand-primaryBorder/65 text-[9px] font-bold tracking-widest text-brand-primary uppercase mb-4 shadow-[0_1px_5px_rgba(59,130,246,0.02)] font-sans">
              Alerts
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight leading-[1.2] font-sans mb-4">
              Smart alerts before the market reacts.
            </h3>
            <p className="text-sm sm:text-base text-brand-slate font-light leading-relaxed mb-6 max-w-xl">
              Builder delays, circle rate changes, project launches, possession risks — delivered the moment they happen.
            </p>
            
            {/* Checklist bullets */}
            <ul className="space-y-3">
              {[
                "Builder watch",
                "Price-move alerts",
                "Legal & policy updates"
              ].map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-brand-navy">
                  <div className="w-5 h-5 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 flex items-center justify-center text-[#10B981] shrink-0">
                    <Check className="w-3 h-3" strokeWidth={3} />
                  </div>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side Mockup */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[420px] bg-white rounded-3xl border border-brand-border shadow-brand-lg p-5 sm:p-6 transition-all duration-300 hover:shadow-brand-md hover:border-brand-primaryBorder/40">
              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-brand-border select-none">
                <span className="text-xs font-bold text-brand-navy font-sans uppercase tracking-wider">Smart Alerts</span>
                <div className="flex items-center gap-1.5 bg-brand-bgAlt border border-brand-borderMid/50 rounded-lg px-2.5 py-1 text-[9px] text-brand-slate font-bold shadow-sm">
                  Today
                </div>
              </div>
              
              {/* Alert List */}
              <div className="mt-4 space-y-3">
                {alerts.map((alert, idx) => {
                  const AlertIcon = alert.icon;
                  return (
                    <div 
                      key={idx} 
                      className="flex items-start gap-3.5 p-3.5 rounded-2xl border border-brand-border/60 bg-brand-bg/50 hover:bg-white hover:shadow-sm hover:border-brand-borderMid/40 transition-all duration-200"
                    >
                      {/* Icon */}
                      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${alert.color}`}>
                        <AlertIcon className="w-4 h-4" />
                      </div>
                      {/* Text */}
                      <div className="flex-1">
                        <h4 className="text-xs sm:text-sm font-bold text-brand-navy font-sans tracking-tight">{alert.title}</h4>
                        <span className="text-[10px] text-brand-slate font-semibold mt-0.5 block">{alert.sub}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
