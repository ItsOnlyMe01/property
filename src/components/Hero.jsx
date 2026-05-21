import React from 'react';
import { ArrowRight, Home, ShieldCheck } from 'lucide-react';
import contentData from '../data/content.js';

export default function Hero({ data, onOpenLeadForm }) {
  if (!data) return null;

  const stats = data.stats || [];
  const badgeText = data.badge || 'LIVE MARKET INTELLIGENCE';
  const securityText = data.securityText || 'Secure waitlist registry allocation • Zero spam guarantee';
  const campaign = contentData.marketCampaign;

  return (
    <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden flex flex-col justify-center items-center bg-[#FAFAF8]">
      
      {/* Decorative gradient glow in electric blue brand color */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-brand-primary/5 rounded-full blur-[80px] sm:blur-[140px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Live Market Intelligence Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primaryBg border border-brand-primaryBorder/60 mb-6 sm:mb-8 shadow-[0_2px_10px_rgba(59,130,246,0.02)]">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
          <span className="text-[9px] sm:text-xs font-bold tracking-widest text-brand-primary uppercase font-sans">
            {badgeText}
          </span>
        </div>

        {/* Dynamic, Bold Fintech Headline */}
        <h1 className="max-w-4xl mx-auto text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-navy leading-[1.15] sm:leading-[1.08] mb-6 font-sans px-2">
          {data.title}
        </h1>

        {/* Dynamic Subheadline */}
        <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-brand-slate font-light leading-relaxed mb-10 px-4 sm:px-0">
          {data.subtitle}
        </p>

        {/* High-Converting Join the Waitlist CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 w-full max-w-sm sm:max-w-md px-4 sm:px-0">
          <button
            onClick={onOpenLeadForm}
            className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase bg-gradient-to-r from-brand-primary to-brand-primaryDark hover:brightness-105 text-white shadow-brand-primary transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer font-sans"
          >
            <Home className="w-4 h-4 fill-white/10" />
            {data.cta}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dynamic Urgency / EOI FOMO Banner */}
        {campaign && (
          <div className="w-full max-w-2xl mx-auto rounded-2xl bg-gradient-to-r from-brand-primary/5 via-brand-teal/5 to-brand-primary/5 border border-brand-primaryBorder/30 p-5 sm:p-6 mb-12 shadow-[0_4px_24px_rgba(59,130,246,0.02)] relative overflow-hidden group">
            
            {/* Top high-end micro-animation bar */}
            <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-brand-primary via-brand-teal to-brand-primary animate-pulse"></div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left relative z-10">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-extrabold tracking-widest text-[#E11D48] bg-rose-50 border border-rose-100 rounded px-2.5 py-0.5 self-center md:self-start uppercase animate-pulse">
                  ⚡ {campaign.closingSoonText || 'EOI WINDOW CLOSING SOON'}
                </span>
                <p className="text-xs sm:text-sm font-semibold text-brand-navy mt-1.5 font-sans">
                  {campaign.inauguralOffer} on <span className="text-[#E11D48] font-bold underline decoration-dotted">{campaign.deadline}</span>
                </p>
                <p className="text-[10px] sm:text-xs text-brand-slate font-light italic font-sans">
                  "{campaign.thankYouText}"
                </p>
              </div>

              {/* Number display counter */}
              <div className="flex items-center gap-3 bg-white border border-brand-borderMid/50 p-2.5 sm:p-3 rounded-xl shadow-brand-sm group-hover:scale-[1.02] transition-transform duration-300 select-none">
                <div className="text-center">
                  <span className="block text-2xl sm:text-3xl font-black text-brand-primary tracking-tight font-sans">
                    {campaign.eoiCount}
                  </span>
                  <span className="block text-[8px] sm:text-[9px] font-extrabold tracking-widest text-brand-slate uppercase font-sans">
                    {campaign.badge}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Trust Stats grid */}
        {stats.length > 0 && (
          <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-4 py-8 border-y border-brand-borderMid/60 bg-white/30 backdrop-blur-[2px] rounded-2xl mb-12">
            {stats.map((stat, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center justify-center ${
                  idx < stats.length - 1 ? 'border-r border-brand-borderMid/50' : ''
                }`}
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mb-0.5 sm:mb-1">
                  {stat.value}
                </span>
                <span className="text-[9px] sm:text-xs font-bold tracking-widest text-brand-slate uppercase font-sans">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Security / Trust Seal */}
        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-brand-slateLight tracking-wide font-sans mb-8">
          <ShieldCheck className="w-4 h-4 text-brand-teal" />
          {securityText}
        </div>

        {/* Mouse scroll animated wheel indicator */}
        <div className="flex flex-col items-center gap-1.5 animate-bounce opacity-60 select-none pointer-events-none">
          <div className="w-5 h-8 rounded-full border-2 border-brand-slate flex justify-center p-1">
            <span className="w-1 h-1.5 rounded-full bg-brand-slate animate-bounce"></span>
          </div>
        </div>

      </div>
    </section>
  );
}
