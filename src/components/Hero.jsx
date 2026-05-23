import React from 'react';
import { ArrowRight, Home, ShieldCheck } from 'lucide-react';

export default function Hero({ data, onOpenLeadForm }) {
  if (!data) return null;

  const stats = data.stats || [];
  const badgeText = data.badge || 'Interested in Gurgaon real estate? Join our waitlist to get early access.';
  const securityText = data.securityText || 'Secure waitlist registry allocation • Zero spam guarantee';

  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-40 overflow-hidden bg-[#FAFAF8] w-full flex items-center justify-center">

      {/* Decorative gradient glow in electric blue brand color */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-brand-primary/5 rounded-full blur-[80px] sm:blur-[140px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Column - Content & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            {/* Live Indicator Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primaryBg border border-brand-primaryBorder/60 mb-6 shadow-[0_2px_12px_rgba(59,130,246,0.03)] hover:scale-[1.01] transition-transform duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"></span>
              <span className="text-[9px] sm:text-xs font-bold tracking-wider text-brand-primary uppercase font-sans">
                LIVE MARKET INTELLIGENCE
              </span>
            </div>

            {/* Smart Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-navy leading-[1.12] mb-5 sm:mb-6 font-sans">
              Track Property Like an <span className="text-brand-primary bg-gradient-to-r from-brand-primary to-brand-primaryLight bg-clip-text text-transparent">Investment</span>
            </h1>

            {/* Subheadline */}
            <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-brand-slate font-light leading-relaxed mb-12 sm:mb-8">
              {data.subtitle}
            </p>

            {/* CTA Button Block */}
            <div className="w-full max-w-md">
              <button
                onClick={onOpenLeadForm}
                className="w-full sm:w-auto px-10 py-4.5 rounded-full font-bold text-xs sm:text-sm tracking-widest uppercase bg-gradient-to-r from-brand-primary to-brand-primaryDark text-white shadow-[0_4px_16px_rgba(59,130,246,0.2)] hover:shadow-[0_8px_24px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer font-sans"
              >
                <Home className="w-4 h-4 fill-white/10" />
                {data.cta}
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Highlight / Trust Line replacing EOI */}
              <p className="hidden sm:flex text-[11px] sm:text-xs text-brand-slate font-semibold mt-4 items-center gap-2.5 text-left bg-brand-bgAlt/50 border border-brand-border/40 py-2.5 px-4 rounded-2xl w-full">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 animate-ping"></span>
                <span>{badgeText}</span>
              </p>

              {/* Quick-Scroll link to Radar */}
              <button
                onClick={() => document.getElementById('watchlist')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-9 sm:mt-4 text-xs font-bold text-brand-primary hover:text-brand-primaryDark flex items-center gap-1.5 hover:underline cursor-pointer select-none transition-all duration-200"
              >
                📊 Already own property? Configure your 10-second Appraisal Radar →
              </button>
            </div>

            {/* Gurgaon/Indian Trust Stats */}
            {stats.length > 0 && (
              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-10 sm:pt-8 border-t border-brand-border/40 mt-16 sm:mt-10 w-full">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-xl sm:text-2xl md:text-3xl font-black text-brand-navy tracking-tight leading-none mb-1.5">
                      {stat.value}
                    </span>
                    <span className="text-[8px] sm:text-[9px] font-extrabold tracking-widest text-brand-slateLight uppercase font-sans">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Security Guarantee Seal */}
            <div className="flex items-center gap-2 text-[10px] sm:text-xs text-brand-slateLight tracking-wide font-sans mt-14 sm:mt-8">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              {securityText}
            </div>

          </div>

          {/* Right Column - Premium Interactive Dashboard Mockup */}
          <div className="hidden lg:flex lg:col-span-5 w-full justify-center lg:justify-end">
            <div className="w-full max-w-[460px] bg-white rounded-3xl border border-brand-border shadow-brand-lg p-5 sm:p-6 relative overflow-hidden transition-all duration-500 hover:shadow-brand-primary/10 hover:border-brand-primaryBorder/40">

              {/* Web Browser Top Header bar */}
              <div className="flex items-center justify-between pb-4 border-b border-brand-border">
                {/* Red, Yellow, Green mock controls */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
                </div>

                {/* Mock Address Bar */}
                <div className="flex-1 max-w-[210px] mx-auto bg-brand-bgAlt border border-brand-borderMid/40 rounded-lg px-2.5 py-1 text-center select-none truncate">
                  <span className="text-[9px] text-brand-slate font-medium font-sans">followproperty.com</span>
                </div>

                {/* Live Badge */}
                <div className="flex items-center gap-1 bg-[#10B981]/10 border border-[#10B981]/25 px-2 py-0.5 rounded text-[9px] text-[#10B981] font-extrabold uppercase tracking-widest shrink-0 select-none">
                  <span className="w-1 h-1 rounded-full bg-[#10B981] animate-pulse"></span>
                  Live
                </div>
              </div>

              {/* Main App Workspace */}
              <div className="mt-5 space-y-4">

                {/* 3 Metric Cards Grid */}
                <div className="grid grid-cols-3 gap-2.5">
                  {/* Card 1: Portfolio Value */}
                  <div className="bg-brand-bg/60 border border-brand-border/60 rounded-2xl p-3 flex flex-col justify-between">
                    <span className="text-[9px] text-brand-slateLight font-bold uppercase tracking-wider">Portfolio Value</span>
                    <span className="text-sm sm:text-base font-extrabold text-brand-navy mt-1">₹4.82 Cr</span>
                    <span className="text-[8px] text-[#10B981] font-bold mt-1 inline-flex items-center gap-0.5">
                      ▲ +8.4% <span className="text-brand-slateLight font-medium">YoY</span>
                    </span>
                  </div>

                  {/* Card 2: Rental Yield */}
                  <div className="bg-brand-bg/60 border border-brand-border/60 rounded-2xl p-3 flex flex-col justify-between">
                    <span className="text-[9px] text-brand-slateLight font-bold uppercase tracking-wider">Rental Yield</span>
                    <span className="text-sm sm:text-base font-extrabold text-brand-navy mt-1">3.6%</span>
                    <span className="text-[8px] text-[#10B981] font-bold mt-1 inline-flex items-center gap-0.5">
                      ▲ +0.4% <span className="text-brand-slateLight font-medium">gain</span>
                    </span>
                  </div>

                  {/* Card 3: Risk Alerts */}
                  <div className="bg-brand-bg/60 border border-brand-border/60 rounded-2xl p-3 flex flex-col justify-between">
                    <span className="text-[9px] text-brand-slateLight font-bold uppercase tracking-wider">Risk Alerts</span>
                    <span className="text-sm sm:text-base font-extrabold text-brand-navy mt-1">2</span>
                    <span className="text-[8px] text-brand-amber font-extrabold mt-1 inline-flex items-center gap-0.5 animate-pulse">
                      ⚠️ Builder delay
                    </span>
                  </div>
                </div>

                {/* Appreciation Section with Live Waveform Chart */}
                <div className="bg-brand-bg/60 border border-brand-border/60 rounded-2xl p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <span className="text-[9px] text-brand-slateLight font-bold uppercase tracking-wider block">Appreciation — Sector 65, Gurgaon</span>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-lg sm:text-xl font-extrabold text-brand-navy">₹1.92 Cr</span>
                        <span className="text-xs font-bold text-[#10B981] inline-flex items-center">▲ +14.2%</span>
                      </div>
                    </div>
                    {/* Time Horizon Badge */}
                    <div className="flex items-center bg-white border border-brand-borderMid/50 rounded-lg px-2 py-0.5 text-[9px] text-brand-slate font-bold shadow-sm select-none">
                      12m
                    </div>
                  </div>

                  {/* Elegant SVG Area and Line Chart representing growth */}
                  <div className="h-28 w-full mt-3 relative">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="wave-grad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.22" />
                          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.00" />
                        </linearGradient>
                      </defs>

                      {/* Area beneath curve */}
                      <path
                        d="M 0,85 C 40,78 60,62 100,68 C 140,74 180,50 220,55 C 260,60 280,38 300,18 L 300,100 L 0,100 Z"
                        fill="url(#wave-grad)"
                      />

                      {/* The curve itself */}
                      <path
                        d="M 0,85 C 40,78 60,62 100,68 C 140,74 180,50 220,55 C 260,60 280,38 300,18"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />

                      {/* Interactive Highlight Dot */}
                      <circle cx="300" cy="18" r="4.5" fill="#3B82F6" />
                      <circle cx="300" cy="18" r="9" fill="#3B82F6" opacity="0.35" className="animate-ping" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Widgets Row (Smart Alert & Builder Watch) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                  {/* Widget 1: Smart Alert */}
                  <div className="bg-brand-bg/60 border border-brand-border/60 rounded-2xl p-3 flex flex-col gap-1.5 hover:bg-white hover:shadow-brand transition-all duration-300">
                    <div className="flex items-center gap-1.5 text-brand-primary font-bold text-[9px] uppercase tracking-widest">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                      Smart Alert
                    </div>
                    <p className="text-[10.5px] text-brand-slate leading-relaxed font-semibold">
                      Circle rate revised for Sector 65 — valuation up 6.1%.
                    </p>
                  </div>

                  {/* Widget 2: Builder Watch */}
                  <div className="bg-brand-bg/60 border border-brand-border/60 rounded-2xl p-3 flex flex-col gap-1.5 hover:bg-white hover:shadow-brand transition-all duration-300">
                    <div className="flex items-center gap-1.5 text-brand-amber font-bold text-[9px] uppercase tracking-widest">
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Builder Watch
                    </div>
                    <p className="text-[10.5px] text-brand-slate leading-relaxed font-semibold">
                      Possession delay on Sector 82 Project — 3 month risk.
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
