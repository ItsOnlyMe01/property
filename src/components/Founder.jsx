import React from 'react';
import { Quote, Sparkles, Award } from 'lucide-react';

export default function Founder({ data }) {
  if (!data) return null;

  // Extract initials for the avatar monogram
  const getInitials = (name) => {
    if (!name) return 'FD';
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section id="founder" className="py-24 md:py-32 relative overflow-hidden bg-white border-b border-brand-borderMid/40">
      
      {/* Dynamic ambient background glow in primary blue tint matching the logo */}
      <div className="absolute left-0 bottom-0 w-[450px] h-[450px] bg-brand-primary/4 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute right-0 top-0 w-[350px] h-[350px] bg-brand-teal/3 rounded-full blur-[90px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Decorative Grid overlay - very subtle */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.02)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60"></div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            
            {/* Left Column: Premium Interactive Monogram Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group">
                
                {/* Outermost floating border */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-primary/10 to-brand-teal/5 opacity-50 blur-xl group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"></div>
                
                {/* Main monogram avatar card */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-[#FAFAF8] border border-brand-borderMid/60 flex flex-col items-center justify-center shadow-brand-md overflow-hidden transition-all duration-300 group-hover:shadow-brand-lg group-hover:-translate-y-1">
                  
                  {/* High-end decorative background pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(rgba(59,130,246,0.03)_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none"></div>
                  
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-primary via-brand-primaryLight to-brand-teal"></div>
                  
                  {/* Monogram initials ring */}
                  <div className="relative w-32 h-32 rounded-full bg-gradient-to-tr from-brand-bgAlt to-white border border-brand-borderMid/80 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500">
                    {/* Rotating thin dashed ring inside */}
                    <div className="absolute inset-1 rounded-full border border-dashed border-brand-primary/20 group-hover:rotate-90 transition-transform duration-1000 ease-in-out"></div>
                    <span className="font-extrabold text-4xl tracking-widest bg-gradient-to-br from-brand-navy via-brand-primary to-brand-teal bg-clip-text text-transparent select-none z-10">
                      {getInitials(data.name)}
                    </span>
                  </div>

                  {/* Caption badge */}
                  <div className="mt-6 flex flex-col items-center">
                    <span className="text-[11px] font-bold tracking-widest text-brand-primary uppercase mb-1 font-sans flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 fill-brand-primary/10" />
                      {data.role}
                    </span>
                    <span className="text-[10px] text-brand-slateLight font-medium font-sans">
                      FollowProperty Platform Owner
                    </span>
                  </div>
                  
                  {/* Verification Tag at corner */}
                  <div className="absolute bottom-3 right-3 p-2 rounded-xl bg-brand-primaryBg border border-brand-primaryBorder/30 text-brand-primary">
                    <Award className="w-4 h-4" />
                  </div>

                </div>
              </div>
            </div>

            {/* Right Column: Detailed Bio & Quotes */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-brand-primaryBg border border-brand-primaryBorder/30 text-[10px] font-bold tracking-widest text-brand-primary uppercase shadow-[0_2px_8px_rgba(59,130,246,0.01)] font-sans">
                {data.tagline}
              </div>

              {/* Founder name & designation */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight font-sans">
                  {data.name}
                </h2>
                <p className="text-sm font-semibold text-brand-slate uppercase tracking-wider mt-1 font-sans">
                  {data.role}
                </p>
              </div>

              {/* Stylized Blockquote with large decorative quote icon */}
              <div className="relative p-6 rounded-2xl bg-[#FAFAF8] border border-brand-borderMid/40 shadow-inner overflow-hidden">
                <Quote className="absolute -top-4 -left-2 w-20 h-20 text-brand-primary/5 -rotate-12 pointer-events-none" />
                <p className="relative z-10 text-sm sm:text-base text-brand-navyMid italic font-sans leading-relaxed">
                  "{data.quote}"
                </p>
              </div>

              {/* Main bio paragraph */}
              <p className="text-sm sm:text-base text-brand-slate font-light leading-relaxed font-sans">
                {data.bio}
              </p>

              {/* Bottom stylized divider */}
              <div className="flex items-center gap-4 mt-2">
                <div className="w-16 h-[2px] bg-gradient-to-r from-brand-primary to-brand-teal rounded-full"></div>
                <span className="text-[10px] font-bold tracking-widest text-brand-slateLight uppercase font-sans">
                  DATA INTEGRITY FIRST
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
