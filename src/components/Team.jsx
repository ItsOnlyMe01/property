import React from 'react';
import { Globe, User, Mail, Code2, Award, Sparkles } from 'lucide-react';
import contentData from '../data/content.js';

export default function Team({ data }) {
  const members = data || contentData.team || [];
  const header = contentData.teamHeader || {
    tagline: "CREATOR & ARCHITECT",
    title: "Meet the Core Team",
    subtitle: "The visionary engineers and analysts building tomorrow's real estate tracking systems."
  };

  // Dynamically extract initials from member name
  const getInitials = (name) => {
    if (!name) return 'RT';
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  // Get dynamic icon based on member role for customized premium feel
  const getRoleIcon = (role) => {
    const r = role.toLowerCase();
    if (r.includes('founder') || r.includes('ceo')) return <Award className="w-3.5 h-3.5" />;
    if (r.includes('developer') || r.includes('engineer') || r.includes('stack')) return <Code2 className="w-3.5 h-3.5" />;
    if (r.includes('design') || r.includes('ux')) return <Sparkles className="w-3.5 h-3.5" />;
    return <User className="w-3.5 h-3.5" />;
  };

  return (
    <section id="team" className="py-24 md:py-32 relative overflow-hidden bg-[#FAFAF8] border-b border-brand-borderMid/40">
      {/* Background ambient lighting */}
      <div className="absolute left-1/4 top-1/3 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute right-1/4 bottom-10 w-[500px] h-[500px] bg-brand-primary/3 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 flex flex-col items-center">
          <div className="inline-block px-4 py-2 rounded-full bg-white border border-brand-border/40 text-[10px] font-bold tracking-widest text-brand-primary uppercase mb-4 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
            {header.tagline}
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-brand-navy tracking-tight mb-4 font-sans leading-tight">
            {header.title}
          </h2>
          <p className="max-w-xl mx-auto text-xs sm:text-base text-brand-slate font-light leading-relaxed">
            {header.subtitle}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-primary to-brand-primaryDark mt-6 rounded-full"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {members.map((member, index) => (
              <div 
                key={index} 
                className="group rounded-3xl bg-white border border-brand-border/40 p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-brand-lg hover:-translate-y-1.5 relative overflow-hidden shadow-[0_4px_24px_rgba(15,22,41,0.01)]"
              >
                {/* Decorative background visual elements */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-primary via-brand-primaryLight to-brand-teal"></div>
                <div className="absolute -right-20 -bottom-20 w-44 h-44 bg-brand-teal/5 rounded-full blur-2xl group-hover:bg-brand-teal/8 transition-colors duration-300"></div>

                {/* Initials Avatar / Profile Ring */}
                <div className="w-20 h-20 rounded-full mx-auto bg-gradient-to-br from-brand-bgAlt to-[#FAFAF8] border border-brand-borderMid/60 flex items-center justify-center mb-6 shadow-inner relative group-hover:scale-105 transition-transform duration-300">
                  {/* Subtle inner animated ring */}
                  <div className="absolute inset-0.5 rounded-full border border-dashed border-brand-primary/20 group-hover:rotate-45 transition-transform duration-700"></div>
                  <span className="font-black text-xl tracking-wider bg-gradient-to-r from-brand-navy to-brand-primary bg-clip-text text-transparent select-none z-10">
                    {getInitials(member.name)}
                  </span>
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-extrabold text-brand-navy mb-1 group-hover:text-brand-primary transition-colors font-sans">
                  {member.name}
                </h3>
                <div className="text-[10px] font-bold tracking-widest text-brand-primary uppercase mb-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-primaryBg border border-brand-primaryBorder/30">
                  {getRoleIcon(member.role)}
                  <span className="ml-1 font-sans">{member.role}</span>
                </div>

                {/* Bio text */}
                <p className="text-xs sm:text-sm text-brand-slate font-light leading-relaxed max-w-md mx-auto mb-6">
                  {member.bio}
                </p>

                {/* Social Actions / Contact */}
                <div className="flex justify-center items-center gap-3 pt-5 border-t border-brand-borderMid/45">
                  <a 
                    href="#team"
                    className="w-9 h-9 rounded-xl bg-[#FAFAF8] border border-brand-borderMid hover:border-brand-primary/40 text-brand-slate hover:text-brand-primary flex items-center justify-center transition-all duration-300 shadow-[0_1px_6px_rgba(0,0,0,0.01)] hover:-translate-y-0.5"
                  >
                    <Globe className="w-3.5 h-3.5" />
                  </a>
                  <a 
                    href="#team"
                    className="w-9 h-9 rounded-xl bg-[#FAFAF8] border border-brand-borderMid hover:border-brand-teal/40 text-brand-slate hover:text-brand-teal flex items-center justify-center transition-all duration-300 shadow-[0_1px_6px_rgba(0,0,0,0.01)] hover:-translate-y-0.5"
                  >
                    <User className="w-3.5 h-3.5" />
                  </a>
                  <a 
                    href="#team"
                    className="w-9 h-9 rounded-xl bg-[#FAFAF8] border border-brand-borderMid hover:border-brand-primary/40 text-brand-slate hover:text-brand-primary flex items-center justify-center transition-all duration-300 shadow-[0_1px_6px_rgba(0,0,0,0.01)] hover:-translate-y-0.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            ))}
        </div>

        {/* Core Values / Beliefs Section */}
        {header.beliefs && (
          <div className="mt-20 max-w-5xl mx-auto rounded-3xl bg-white border border-brand-border/40 p-6 sm:p-10 shadow-brand-md relative overflow-hidden shadow-[0_4px_28px_rgba(15,22,41,0.01)]">
            {/* Subtle glow background */}
            <div className="absolute -left-16 -top-16 w-48 h-48 bg-brand-primary/5 rounded-full blur-2xl"></div>
            <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-brand-teal/5 rounded-full blur-2xl"></div>

            <div className="text-center max-w-2xl mx-auto mb-10 relative z-10 flex flex-col items-center">
              <span className="text-[9px] font-extrabold tracking-widest text-brand-primary uppercase px-3 py-1.5 rounded-md bg-brand-primaryBg border border-brand-primaryBorder/30 mb-3 font-sans">
                {header.beliefs.tagline}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy tracking-tight font-sans">
                {header.beliefs.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {header.beliefs.items.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2 group">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-brand-primaryBg border border-brand-primaryBorder/30 text-brand-primary flex items-center justify-center font-bold text-xs shadow-[0_1px_6px_rgba(59,130,246,0.02)] group-hover:scale-105 transition-transform duration-300">
                      {idx + 1}
                    </div>
                    <h4 className="font-extrabold text-brand-navy text-sm tracking-tight font-sans group-hover:text-brand-primary transition-colors duration-300">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-brand-slateLight font-light leading-relaxed font-sans mt-1">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
