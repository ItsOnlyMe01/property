import React, { useState } from 'react';
import { 
  Home, 
  Briefcase, 
  Layers, 
  TreePine, 
  Building2, 
  Factory, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  MapPin,
  X
} from 'lucide-react';

const iconMap = {
  Home,
  Briefcase,
  Layers,
  TreePine,
  Building2,
  Factory
};

export default function WatchlistFlow({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showOptional, setShowOptional] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    mainCategory: '',
    specificType: '',
    city: '',
    locality: '',
    budget: '',
    preApprovedBank: '',
    loanAmount: '',
    downPayment: '',
    possessionYear: '',
    preferredBuilder: ''
  });

  if (!data) return null;

  const categories = data.categories || [];
  const cities = data.cities || [];
  const banks = data.banks || [];
  const years = Array.from({ length: 12 }, (_, i) => (new Date().getFullYear() + i).toString());

  const handleFieldChange = (key, value) => {
    setForm(prev => ({
      ...prev,
      [key]: value
    }));
    if (error) setError('');
  };

  const selectedCategory = categories.find(c => c.id === form.mainCategory);

  const requiredFilled = 
    form.mainCategory && 
    form.specificType && 
    form.city && 
    form.locality.trim() && 
    form.budget;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!requiredFilled) {
      setError('Please fill out all required fields.');
      return;
    }

    setError('');
    setSubmitting(true);

    // Simulate standard watchlist submit
    setTimeout(() => {
      setSubmitting(false);
      try {
        // Save parameters to sessionStorage exactly like their codebase does
        sessionStorage.setItem('watchlistFilters', JSON.stringify(form));
        console.log('Watchlist saved to sessionStorage:', form);
        
        // Show high-end success toast
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 4000);

        // Reset form except primary selections for cleaner UX
        setForm({
          mainCategory: '',
          specificType: '',
          city: '',
          locality: '',
          budget: '',
          preApprovedBank: '',
          loanAmount: '',
          downPayment: '',
          possessionYear: '',
          preferredBuilder: ''
        });
        setShowOptional(false);
      } catch (err) {
        console.error('Session storage error:', err);
        setError('Could not write configuration. Please try again.');
      }
    }, 1200);
  };

  return (
    <section id="watchlist" className="py-16 md:py-24 relative overflow-hidden bg-white border-b border-brand-borderMid/40">
      
      {/* Absolute Success Toast */}
      {showToast && (
        <div className="fixed top-24 right-4 sm:right-8 bg-white border-l-4 border-brand-teal p-5 rounded-2xl shadow-brand-lg z-50 animate-bounce flex items-center gap-4 max-w-sm border border-brand-borderMid/50">
          <div className="w-10 h-10 rounded-full bg-brand-tealBg flex items-center justify-center text-brand-teal shrink-0">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-brand-navy font-sans">
              {data.successTitle || 'Radar Activated!'}
            </h4>
            <p className="text-[11px] text-brand-slate font-light mt-0.5 font-sans leading-relaxed">
              {data.successSubtitle || 'Appreciation radar parameters written to sessionStorage.'}
            </p>
          </div>
        </div>
      )}

      {/* Decorative glows inside section */}
      <div className="absolute right-1/4 top-1/4 w-[400px] h-[400px] bg-brand-primary/3 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute left-1/4 bottom-10 w-[350px] h-[350px] bg-brand-teal/3 rounded-full blur-[90px] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {!isOpen ? (
          /* Closed State: Ultra-clean, borderless, matching landing page aesthetics */
          <div className="max-w-3xl mx-auto text-center py-6 sm:py-10 animate-fadeIn">
            {/* Small subtle pill badge */}
            <div className="inline-block px-3.5 py-1.5 rounded-full bg-white border border-brand-borderMid/50 text-[9px] font-bold tracking-widest text-brand-primary uppercase mb-4 shadow-[0_1px_5px_rgba(0,0,0,0.01)] font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary inline-block mr-1.5 animate-pulse"></span>
              {data.badge || 'VALUATION RADAR'}
            </div>
            
            <h3 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight font-sans mb-4">
              {data.title}
            </h3>
            
            <p className="text-sm sm:text-base text-brand-slate font-light leading-relaxed mb-8 max-w-xl mx-auto">
              {data.subtitle}
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => setIsOpen(true)}
                className="px-8 py-4 rounded-full font-bold text-xs sm:text-sm tracking-wider uppercase text-white bg-gradient-to-r from-brand-primary to-brand-primaryDark hover:brightness-105 shadow-brand-primary transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer font-sans"
              >
                {data.ctaText}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Opened State: Beautifully framed card for the full wizard flow */
          <div className="bg-[#FAFAF8] rounded-3xl border border-brand-borderMid/50 p-6 sm:p-10 shadow-brand-md overflow-hidden relative animate-fadeIn">
            
            {/* High-end gradient border top */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-primary via-brand-primaryLight to-brand-teal"></div>
            
            {/* Elegant Header with Collapse Icon */}
            <div className="text-center max-w-2xl mx-auto mb-10 relative">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute -top-1 -right-1 sm:top-0 sm:right-0 p-2 rounded-full hover:bg-brand-borderMid/10 text-brand-slateLight hover:text-brand-navy transition-all duration-200 cursor-pointer"
                title={data.collapseText}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-block px-3.5 py-1.5 rounded-full bg-white border border-brand-borderMid/50 text-[9px] font-bold tracking-widest text-brand-primary uppercase mb-4 shadow-[0_1px_5px_rgba(0,0,0,0.01)] font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary inline-block mr-1.5"></span>
                CONFIGURING RADAR
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight font-sans mb-3">
                {data.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-brand-slate font-light leading-relaxed max-w-xl mx-auto">
                {data.subtitle}
              </p>
            </div>

            {/* Wizard Form */}
            <form onSubmit={handleSubmit} className="space-y-6 pt-6 border-t border-brand-borderMid/50">
              
              {/* Field 01: Main Category (Custom dynamic grid) */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-navy mb-3 font-sans">
                  1. Main Category <span className="text-brand-primary">*</span>
                </label>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {categories.map((cat) => {
                    const IconComponent = iconMap[cat.icon] || Home;
                    const isSelected = form.mainCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          handleFieldChange('mainCategory', cat.id);
                          handleFieldChange('specificType', ''); // Reset child type
                        }}
                        className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                          isSelected 
                            ? 'border-brand-primary bg-brand-primaryBg shadow-[0_2px_8px_rgba(59,130,246,0.06)]' 
                            : 'border-brand-borderMid/50 bg-white hover:border-brand-borderMid/80'
                        }`}
                      >
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isSelected ? 'bg-brand-primary text-white' : 'bg-brand-bgAlt text-brand-slate'
                        }`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className={`text-xs font-bold font-sans tracking-tight leading-tight ${
                          isSelected ? 'text-brand-primaryDark' : 'text-brand-navyMid'
                        }`}>
                          {cat.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Field 02: Specific Type (Dropdown) */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-navy mb-2 font-sans">
                  2. Specific Type <span className="text-brand-primary">*</span>
                </label>
                <div className="relative">
                  <select
                    disabled={!form.mainCategory}
                    value={form.specificType}
                    onChange={(e) => handleFieldChange('specificType', e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm text-brand-navy bg-white border border-brand-borderMid/50 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all duration-200 appearance-none cursor-pointer pr-10 font-sans font-medium"
                  >
                    <option value="">
                      {form.mainCategory ? 'Choose specific property type...' : 'Select a main category first'}
                    </option>
                    {selectedCategory?.types?.map((typeOption) => (
                      <option key={typeOption} value={typeOption}>
                        {typeOption}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-slateLight">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Field 03 & 04: City & Locality (Side-by-side) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* City select */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-navy mb-2 font-sans">
                    3. City <span className="text-brand-primary">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={form.city}
                      onChange={(e) => handleFieldChange('city', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm text-brand-navy bg-white border border-brand-borderMid/50 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all duration-200 appearance-none cursor-pointer pr-10 font-sans font-medium"
                    >
                      <option value="">Select city...</option>
                      {cities.map((cityOption) => (
                        <option key={cityOption} value={cityOption}>
                          {cityOption}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-slateLight">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Locality text input */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-navy mb-2 font-sans">
                    4. Locality / Sector <span className="text-brand-primary">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Sector 49, Whitefield"
                      value={form.locality}
                      onChange={(e) => handleFieldChange('locality', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm text-brand-navy bg-white border border-brand-borderMid/50 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all duration-200 placeholder-brand-slateLight/75"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 text-brand-slateLight">
                      <MapPin className="w-4 h-4" />
                    </div>
                  </div>
                </div>

              </div>

              {/* Field 05: Budget */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-navy mb-2 font-sans">
                  5. Budget (₹) <span className="text-brand-primary">*</span>
                </label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="e.g. 7500000"
                    value={form.budget}
                    onChange={(e) => handleFieldChange('budget', e.target.value)}
                    className="w-full pl-9 pr-4 py-3 rounded-xl text-xs sm:text-sm text-brand-navy bg-white border border-brand-borderMid/50 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all duration-200 placeholder-brand-slateLight/75"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-xs font-bold text-brand-slateLight">
                    ₹
                  </div>
                </div>
                {form.budget && (
                  <p className="text-[10px] text-brand-primary font-bold mt-1.5 font-sans pl-1">
                    ≈ ₹{(Number(form.budget) / 100000).toFixed(1)} Lakh
                  </p>
                )}
              </div>

              {/* Collapsible Accordion Segment: Optional Parameters */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowOptional(!showOptional)}
                  className="flex items-center justify-between w-full py-3.5 px-4 rounded-xl border border-brand-borderMid/40 bg-white hover:bg-brand-bgAlt transition-colors cursor-pointer text-left font-sans"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-slate flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                    Optional Setup parameters
                  </span>
                  <ChevronDown className={`w-4 h-4 text-brand-slateLight transition-transform duration-300 ${
                    showOptional ? 'transform rotate-180' : ''
                  }`} />
                </button>

                {showOptional && (
                  <div className="mt-4 p-4 rounded-2xl border border-brand-borderMid/30 bg-white space-y-4 animate-fadeIn">
                    
                    {/* Pre-approved Bank */}
                    <div>
                      <label className="block text-[9px] font-bold uppercase tracking-wider text-brand-slate mb-2 font-sans">
                        Pre-approved Bank
                      </label>
                      <div className="relative">
                        <select
                          value={form.preApprovedBank}
                          onChange={(e) => handleFieldChange('preApprovedBank', e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl text-xs text-brand-navy bg-white border border-brand-borderMid/50 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all duration-250 appearance-none cursor-pointer pr-10 font-sans"
                        >
                          <option value="">Select pre-approved bank (if any)</option>
                          {banks.map((bankOption) => (
                            <option key={bankOption} value={bankOption}>
                              {bankOption}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-slateLight">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Loan & Downpayment side by side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      {/* Loan Amount */}
                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-wider text-brand-slate mb-2 font-sans">
                          Loan Amount (₹)
                        </label>
                        <input
                          type="number"
                          placeholder="e.g. 5000000"
                          value={form.loanAmount}
                          onChange={(e) => handleFieldChange('loanAmount', e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl text-xs text-brand-navy bg-white border border-brand-borderMid/50 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all duration-200"
                        />
                      </div>

                      {/* Down Payment */}
                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-wider text-brand-slate mb-2 font-sans">
                          Down Payment (₹)
                        </label>
                        <input
                          type="number"
                          placeholder="e.g. 2500000"
                          value={form.downPayment}
                          onChange={(e) => handleFieldChange('downPayment', e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl text-xs text-brand-navy bg-white border border-brand-borderMid/50 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all duration-200"
                        />
                      </div>

                    </div>

                    {/* Possession Year & Preferred Builder */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      
                      {/* Possession Year */}
                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-wider text-brand-slate mb-2 font-sans">
                          Possession Year
                        </label>
                        <div className="relative">
                          <select
                            value={form.possessionYear}
                            onChange={(e) => handleFieldChange('possessionYear', e.target.value)}
                            className="w-full px-4 py-2.5 rounded-xl text-xs text-brand-navy bg-white border border-brand-borderMid/50 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all duration-250 appearance-none cursor-pointer pr-10 font-sans"
                          >
                            <option value="">When do you want possession?</option>
                            {years.map((yearOption) => (
                              <option key={yearOption} value={yearOption}>
                                {yearOption}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-slateLight">
                            <ChevronDown className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Preferred Builder */}
                      <div>
                        <label className="block text-[9px] font-bold uppercase tracking-wider text-brand-slate mb-2 font-sans">
                          Preferred Builder
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. DLF, M3M, Godrej"
                          value={form.preferredBuilder}
                          onChange={(e) => handleFieldChange('preferredBuilder', e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl text-xs text-brand-navy bg-white border border-brand-borderMid/50 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all duration-200 placeholder-brand-slateLight/75"
                        />
                      </div>

                    </div>

                  </div>
                )}
              </div>

              {/* Error Box */}
              {error && (
                <div className="p-3.5 rounded-xl bg-brand-redBg border border-brand-red/20 text-brand-red text-xs font-semibold font-sans">
                  {error}
                </div>
              )}

              {/* Submit Trigger Action */}
              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-4 rounded-full text-xs sm:text-sm font-extrabold tracking-wider uppercase text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 cursor-pointer font-sans ${
                  requiredFilled 
                    ? 'bg-gradient-to-r from-brand-primary to-brand-primaryDark shadow-brand-primary hover:brightness-105' 
                    : 'bg-brand-slateLight cursor-not-allowed opacity-60'
                }`}
              >
                {submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    activating appraisal radar...
                  </>
                ) : (
                  <>
                    Create My Watchlist
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Close Setup Action */}
              <div className="flex justify-center pt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2 rounded-full font-bold text-[10px] uppercase tracking-wider text-brand-slate hover:text-brand-navy hover:bg-brand-borderMid/5 transition-all duration-250 flex items-center gap-1.5 cursor-pointer font-sans"
                >
                  <X className="w-3.5 h-3.5 text-brand-slateLight" />
                  {data.collapseText}
                </button>
              </div>

              <p className="text-[10px] text-brand-slateLight font-light text-center leading-relaxed">
                <span className="text-brand-primary font-bold">*</span> Required fields • Optional setup parameters help customize daily scrap alerts
              </p>

            </form>
          </div>
        )}
      </div>
    </section>
  );
}
