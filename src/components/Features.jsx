import React from 'react';
import { BarChart3, Bell, Landmark, ShieldCheck } from 'lucide-react';
import contentData from '../data/content.js';

export default function Features({ data }) {
  const features = data || contentData.features || [];
  const header = contentData.featuresHeader || {
    tagline: "CORE CAPABILITIES",
    title: "Engineered for Complete Transparency"
  };

  // Map icon component per feature title index for clean styling
  const getFeatureIcon = (index) => {
    switch (index) {
      case 0:
        return <Landmark className="w-6 h-6 text-brand-primary" />;
      case 1:
        return <Bell className="w-6 h-6 text-brand-teal" />;
      case 2:
        return <BarChart3 className="w-6 h-6 text-brand-primary" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-brand-primary" />;
    }
  };

  const getFeatureIconBg = (index) => {
    return index === 1 ? 'bg-brand-tealBg border-brand-tealBorder/40' : 'bg-brand-primaryBg border-brand-primaryBorder/40';
  };

  return (
    <section id="features" className="py-20 md:py-28 relative overflow-hidden bg-brand-bgAlt border-t border-brand-borderMid/50">
      
      {/* Container wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12 sm:mb-16 flex flex-col items-center">
          <div className="inline-block px-4 py-2 rounded-full bg-white border border-brand-border/40 text-[9px] font-bold tracking-widest text-brand-slate uppercase mb-3 shadow-[0_1px_5px_rgba(0,0,0,0.01)]">
            {header.tagline}
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-brand-navy tracking-tight font-sans">
            {header.title}
          </h3>
        </div>

        {/* Responsive grid for key features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-2 sm:px-0">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl border border-brand-border/40 p-6 sm:p-8 hover:-translate-y-1 hover:shadow-brand-md transition-all duration-300 flex flex-col items-start group shadow-[0_4px_24px_rgba(15,22,41,0.01)]"
            >
              {/* Dynamic Icon with conditional theme bg */}
              <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 shadow-inner transition-all duration-300 group-hover:scale-[1.04] ${getFeatureIconBg(idx)}`}>
                {getFeatureIcon(idx)}
              </div>

              <h4 className="text-lg font-bold text-brand-navy mb-2 font-sans">
                {feature.title}
              </h4>

              <p className="text-xs sm:text-sm text-brand-slate font-light leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
