import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.svg';

export default function Navbar({ data, ctaText, onOpenLeadForm }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = data?.links || [];
  const navbarCtaText = ctaText || data?.ctaText || 'Join Waitlist';

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled 
        ? 'py-3.5 bg-[#FAFAF8]/90 backdrop-blur-md border-b border-brand-border shadow-brand' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - FollowProperty using Brand Logo PNG */}
          <div 
            className="flex items-center cursor-pointer select-none group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src={logoImg} 
              alt="Follow Property Logo" 
              className="h-5 sm:h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]" 
            />
          </div>

          {/* Centered Desktop Navigation - dynamically generated links */}
          <div className="hidden md:flex items-center gap-8 bg-white/50 backdrop-blur-[4px] px-6 py-2.5 rounded-full border border-brand-border/50 shadow-[0_2px_18px_rgba(15,22,41,0.02)]">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleScrollTo(link.toLowerCase())}
                className="text-brand-slate hover:text-brand-navy transition-all duration-300 text-xs font-bold tracking-wider cursor-pointer font-sans relative py-0.5 group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop Actions - Join Waitlist pill */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={onOpenLeadForm}
              className="px-6 py-3 rounded-xl font-bold text-xs tracking-wider uppercase bg-gradient-to-r from-brand-primary to-brand-primaryDark text-white shadow-[0_4px_14px_rgba(59,130,246,0.2)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 active:translate-y-0 hover:brightness-105 active:scale-[0.98] transition-all duration-300 cursor-pointer font-sans"
            >
              {navbarCtaText}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-slate hover:text-brand-navy rounded-xl hover:bg-brand-border/5 transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden absolute top-full left-0 w-full h-[calc(100vh-100%)] bg-[#FAFAF8]/98 backdrop-blur-xl border-t border-brand-border/40 origin-top transition-all duration-300 cubic-bezier(0.16,1,0.3,1) z-35 ${
        isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'
      }`}>
        <div className="px-6 py-8 flex flex-col gap-8 h-full justify-between">
          <div className="flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <button
                key={link}
                onClick={() => handleScrollTo(link.toLowerCase())}
                style={{ transitionDelay: `${idx * 50}ms` }}
                className={`text-left text-base font-bold tracking-wide text-brand-navy hover:text-brand-primary transition-all duration-300 py-3 border-b border-brand-border/30 cursor-pointer font-sans transform ${
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
              >
                {link}
              </button>
            ))}
          </div>
          <div className="mb-16 flex flex-col gap-4">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenLeadForm();
              }}
              className="w-full py-4 text-center font-bold text-xs tracking-widest uppercase text-white bg-gradient-to-r from-brand-primary to-brand-primaryDark hover:brightness-105 rounded-xl shadow-[0_4px_14px_rgba(59,130,246,0.2)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.3)] transition-all duration-300 cursor-pointer font-sans"
            >
              {navbarCtaText}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
