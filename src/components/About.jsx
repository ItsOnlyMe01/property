import React from 'react';
import { Compass, CheckCircle2, ShieldCheck, Database } from 'lucide-react';

export default function About({ data }) {
  if (!data) return null;

  // Split heading dynamically to apply beautiful styling while maintaining zero hardcoding
  const headingText = data.heading || "Indian Real Estate, Decoded with Data.";
  const parts = headingText.split(', ');
  const firstPart = parts[0] ? parts[0] + ',' : '';
  const secondPart = parts[1] || '';

  const featureBlocks = data.featureBlocks || [];

  const getBlockIcon = (type) => {
    switch (type) {
      case 'security':
        return <ShieldCheck className="w-5 h-5" />;
      case 'database':
        return <Database className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  const getBlockColors = (type) => {
    return type === 'database' 
      ? 'bg-brand-tealBg border-brand-tealBorder/50 text-brand-teal' 
      : 'bg-brand-primaryBg border-brand-primaryBorder/50 text-brand-primary';
  };

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-white border-b border-brand-borderMid/40">
      
      {/* Decorative ambient gradient matching brand-primary blue */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-brand-primary/3 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Premium Badges and Interactive Visual Element */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-brand-bgAlt border border-brand-borderMid/50 text-[10px] font-bold tracking-widest text-brand-primary uppercase shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
              <Compass className="w-3.5 h-3.5" />
              {data.tagline}
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-navy tracking-tight leading-[1.1] font-sans">
              {firstPart} <br />
              <span className="bg-gradient-to-r from-brand-primary to-brand-primaryDark bg-clip-text text-transparent">
                {secondPart}
              </span>
            </h2>

            <div className="w-16 h-1.5 bg-gradient-to-r from-brand-primary to-brand-primaryDark rounded-full"></div>

            {/* Structured Feature Blocks */}
            <div className="space-y-4 mt-4">
              {featureBlocks.map((block, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-[#FAFAF8] border border-brand-borderMid/40 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${getBlockColors(block.type)}`}>
                    {getBlockIcon(block.type)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-navy mb-0.5">
                      {block.title}
                    </h4>
                    <p className="text-xs text-brand-slate font-light leading-relaxed">
                      {block.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Content & Descriptive Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="bg-[#FAFAF8] rounded-3xl border border-brand-borderMid/40 p-8 sm:p-10 shadow-brand relative overflow-hidden">
              
              {/* Corner decor glow in brand blue */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-brand-primary/4 rounded-full blur-2xl"></div>

              <h3 className="text-xl font-bold text-brand-navy mb-4">
                {data.title}
              </h3>
              
              <p className="text-sm sm:text-base text-brand-slate font-light leading-relaxed mb-8">
                {data.description}
              </p>

              {/* Dynamic Checklist */}
              {data.checklist && data.checklist.length > 0 && (
                <div className="pt-6 border-t border-brand-borderMid/50 space-y-4">
                  {data.checklist.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      <span className="text-xs font-semibold text-brand-navy font-sans">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Decorative stamp/seal */}
              {data.stamp && (
                <div className="mt-8 p-4 rounded-xl bg-brand-tealBg border border-brand-tealBorder/40 text-brand-teal inline-flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
                  <span className="text-[10px] font-bold tracking-widest uppercase">
                    {data.stamp}
                  </span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
