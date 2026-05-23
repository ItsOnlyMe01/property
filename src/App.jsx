import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Platform from './components/Platform';
import HowItWorks from './components/HowItWorks';
import TrustAndData from './components/TrustAndData';
import WatchlistFlow from './components/WatchlistFlow';
import About from './components/About';
import Team from './components/Team';
import FAQ from './components/FAQ';
import LeadForm from './components/LeadForm';

// Import our central copy JSON file
import contentData from './data/content.json';

export default function App() {
  const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);

  const handleOpenLeadForm = () => setIsLeadFormOpen(true);
  const handleCloseLeadForm = () => setIsLeadFormOpen(false);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-navy flex flex-col relative font-sans antialiased selection:bg-brand-primary selection:text-white">
      {/* Header / Navbar */}
      <Navbar 
        data={contentData.navbar} 
        ctaText={contentData.hero.cta}
        onOpenLeadForm={handleOpenLeadForm} 
      />

      {/* Page Sections */}
      <main className="flex-1 relative z-10">
        
        {/* Hero Section */}
        <Hero 
          data={contentData.hero} 
          onOpenLeadForm={handleOpenLeadForm} 
        />

        {/* The Problem Section */}
        <Problem />

        {/* Watchlist Section (Appraisal Radar Setup) */}
        <WatchlistFlow 
          data={contentData.watchlistSection} 
        />

        {/* The Solution Section */}
        <Solution />

        {/* The Platform Capabilities Section */}
        <Platform onOpenLeadForm={handleOpenLeadForm} />

        {/* The How It Works Section */}
        <HowItWorks />

        {/* The Trust And Data Section */}
        <TrustAndData />

        {/* The About Us Section */}
        <About />

        {/* Team Section */}
        <Team 
          data={contentData.team} 
        />

        {/* FAQ Section */}
        <FAQ 
          data={contentData.faq} 
        />

      </main>

      {/* Footer Section */}
      <footer className="relative z-10 bg-brand-bgAlt border-t border-brand-borderMid py-12 text-sm text-brand-slate">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          
          {/* Left Column: Logo & Address */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-brand-navy text-base tracking-tight">{contentData.navbar.logo}</span>
              <span className="text-[10px] font-bold tracking-widest text-brand-primary uppercase">
                {contentData.footer?.stamp || 'PLATFORM'}
              </span>
            </div>
            {contentData.footer?.address && (
              <p className="text-xs text-brand-slate font-light text-center md:text-left mt-1">
                {contentData.footer.address}
              </p>
            )}
          </div>

          {/* Right Column: Copyrights */}
          <div className="flex flex-col items-center md:items-end gap-1.5">
            <p className="text-xs text-center md:text-right font-light">
              © {new Date().getFullYear()} {contentData.navbar.logo}. All rights reserved.
            </p>
            <p className="text-[10px] text-brand-slateLight tracking-wide font-sans">
              {contentData.footer?.tagline || 'Data transparency analytics.'}
            </p>
          </div>

        </div>
      </footer>

      {/* Lead Form Modal */}
      <LeadForm 
        isOpen={isLeadFormOpen} 
        onClose={handleCloseLeadForm} 
        ctaText={contentData.hero.cta}
      />
    </div>
  );
}
