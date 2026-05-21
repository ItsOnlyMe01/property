import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

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
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]" 
            />
          </div>

          {/* Centered Desktop Navigation - dynamically generated links */}
          <div className="hidden md:flex items-center gap-8 bg-white/40 backdrop-blur-[2px] px-6 py-2 rounded-full border border-brand-borderMid/30 shadow-[0_2px_12px_rgba(0,0,0,0.01)]">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleScrollTo(link.toLowerCase())}
                className="text-brand-slate hover:text-brand-primary transition-colors text-xs font-semibold tracking-wide cursor-pointer font-sans"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Desktop Actions - Join Waitlist pill */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={onOpenLeadForm}
              className="px-6 py-3 rounded-xl font-bold text-xs tracking-wider bg-gradient-to-r from-brand-primary to-brand-primaryDark hover:brightness-105 text-white shadow-brand-primary transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer font-sans"
            >
              {navbarCtaText}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-slate hover:text-brand-navy transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div className={`md:hidden fixed top-[71px] left-0 w-full h-[calc(100vh-71px)] bg-[#FAFAF8]/98 backdrop-blur-lg border-t border-brand-border transition-all duration-300 ease-in-out z-35 ${
        isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        <div className="px-6 py-8 flex flex-col gap-6 h-full justify-between">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleScrollTo(link.toLowerCase())}
                className="text-left text-base font-semibold text-brand-navy hover:text-brand-primary transition-colors py-2.5 border-b border-brand-border cursor-pointer font-sans"
              >
                {link}
              </button>
            ))}
          </div>
          <div className="mb-12 flex flex-col gap-4">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenLeadForm();
              }}
              className="w-full py-4 text-center font-bold text-sm tracking-wide text-white bg-gradient-to-r from-brand-primary to-brand-primaryDark hover:brightness-105 rounded-xl shadow-brand-primary transition-all duration-300 cursor-pointer font-sans"
            >
              {navbarCtaText}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
