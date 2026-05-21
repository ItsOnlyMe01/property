import React, { useState } from 'react';
import { X, Check, Lock, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.svg';
import contentData from '../data/content.js';

export default function LeadForm({ isOpen, onClose, ctaText }) {
  const strings = contentData.leadForm || {};
  const campaign = contentData.marketCampaign;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    phone: '',
    interest: 'own'
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = strings.errors?.firstNameRequired || 'First name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = strings.errors?.lastNameRequired || 'Last name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = strings.errors?.emailRequired || 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = strings.errors?.emailInvalid || 'Please enter a valid email address';
    }
    if (!formData.city.trim()) {
      newErrors.city = strings.errors?.cityRequired || 'City is required';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = strings.errors?.phoneRequired || 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = strings.errors?.phoneInvalid || 'Please enter a valid 10-digit phone number';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate waitlist registration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        phone: '',
        interest: 'own'
      });
    }, 1500);
  };

  const interestOptions = strings.interestOptions || [
    { value: "buy", label: "Looking to Buy" },
    { value: "own", label: "Already Own Property" }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
      {/* Dark premium backdrop overlay */}
      <div 
        className="absolute inset-0 bg-[#0F1629]/40 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-brand-borderMid/50 shadow-brand-lg overflow-hidden z-10 transition-all duration-300 max-h-[90vh] flex flex-col animate-scaleIn">
        
        {/* Top brand bar in electric blue and teal gradient */}
        <div className="h-1.5 w-full bg-gradient-to-r from-brand-primary via-brand-primaryLight to-brand-teal"></div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-brand-slate hover:text-brand-navy hover:bg-[#FAFAF8] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-10 overflow-y-auto">
          {!isSuccess ? (
            <>
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <img 
                    src={logoImg} 
                    alt="Follow Property Logo" 
                    className="h-6 sm:h-7 w-auto object-contain" 
                  />
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-brand-primaryBg border border-brand-primaryBorder/30 text-[9px] font-bold tracking-widest text-brand-primary uppercase mb-3">
                  {strings.waitlistBadge || '★ WAITLIST OPEN'}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight font-sans mb-2">
                  {strings.title || 'Request Early Access'}
                </h3>
                <p className="text-xs sm:text-sm text-brand-slate font-light leading-relaxed">
                  {strings.subtitle || 'Join our exclusive priority waitlist to secure first-access allocations and yield intelligence dashboards.'}
                </p>
              </div>

              {/* Form Input fields */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* First Name & Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-[10px] font-bold uppercase tracking-wider text-brand-slate mb-2 font-sans">
                      {strings.firstNameLabel || 'First Name'} <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder={strings.firstNamePlaceholder || 'e.g. Rahul'}
                      className={`w-full px-4 py-3.5 rounded-xl text-sm text-brand-navy bg-white border border-brand-borderMid/50 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all duration-200 placeholder-brand-slateLight/75 ${
                        errors.firstName ? 'border-brand-red focus:border-brand-red focus:ring-brand-red/10' : ''
                      }`}
                    />
                    {errors.firstName && (
                      <p className="text-xs text-brand-red mt-1.5 font-semibold font-sans">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-[10px] font-bold uppercase tracking-wider text-brand-slate mb-2 font-sans">
                      {strings.lastNameLabel || 'Last Name'} <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder={strings.lastNamePlaceholder || 'e.g. Sharma'}
                      className={`w-full px-4 py-3.5 rounded-xl text-sm text-brand-navy bg-white border border-brand-borderMid/50 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all duration-200 placeholder-brand-slateLight/75 ${
                        errors.lastName ? 'border-brand-red focus:border-brand-red focus:ring-brand-red/10' : ''
                      }`}
                    />
                    {errors.lastName && (
                      <p className="text-xs text-brand-red mt-1.5 font-semibold font-sans">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-brand-slate mb-2 font-sans">
                    {strings.emailLabel || 'Email Address'} <span className="text-brand-red">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={strings.emailPlaceholder || 'rahul@example.com'}
                    className={`w-full px-4 py-3.5 rounded-xl text-sm text-brand-navy bg-white border border-brand-borderMid/50 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all duration-200 placeholder-brand-slateLight/75 ${
                      errors.email ? 'border-brand-red focus:border-brand-red focus:ring-brand-red/10' : ''
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-brand-red mt-1.5 font-semibold font-sans">{errors.email}</p>
                  )}
                </div>

                {/* City & Phone Number */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-[10px] font-bold uppercase tracking-wider text-brand-slate mb-2 font-sans">
                      {strings.cityLabel || 'City'} <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder={strings.cityPlaceholder || 'e.g. Gurgaon'}
                      className={`w-full px-4 py-3.5 rounded-xl text-sm text-brand-navy bg-white border border-brand-borderMid/50 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all duration-200 placeholder-brand-slateLight/75 ${
                        errors.city ? 'border-brand-red focus:border-brand-red focus:ring-brand-red/10' : ''
                      }`}
                    />
                    {errors.city && (
                      <p className="text-xs text-brand-red mt-1.5 font-semibold font-sans">{errors.city}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-wider text-brand-slate mb-2 font-sans">
                      {strings.phoneLabel || 'Phone Number'} <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={strings.phonePlaceholder || '9876543210'}
                      className={`w-full px-4 py-3.5 rounded-xl text-sm text-brand-navy bg-white border border-brand-borderMid/50 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all duration-200 placeholder-brand-slateLight/75 ${
                        errors.phone ? 'border-brand-red focus:border-brand-red focus:ring-brand-red/10' : ''
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-brand-red mt-1.5 font-semibold font-sans">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Interest Dropdown */}
                <div>
                  <label htmlFor="interest" className="block text-[10px] font-bold uppercase tracking-wider text-brand-slate mb-2 font-sans">
                    {strings.interestLabel || 'Looking For'}
                  </label>
                  <div className="relative">
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl text-sm text-brand-navy bg-white border border-brand-borderMid/50 focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all duration-200 appearance-none cursor-pointer pr-10 font-sans font-medium"
                    >
                      {interestOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-slateLight">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Premium Live EOI Campaign Card */}
                {campaign && (
                  <div className="relative overflow-hidden rounded-2xl border border-rose-100 bg-[#FFFDFE] p-4.5 shadow-[0_2px_12px_rgba(225,29,72,0.03)] group">
                    {/* Pulse alert indicator line at top */}
                    <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-rose-500 via-rose-400 to-rose-500 animate-pulse"></div>
                    
                    <div className="flex flex-col gap-2.5">
                      {/* Title Header with live badge */}
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-rose-50 border border-rose-100/60 text-[9px] font-extrabold tracking-widest text-[#E11D48] uppercase animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-ping"></span>
                          {campaign.closingSoonText || 'EOI WINDOW CLOSING SOON'}
                        </span>
                        <span className="text-[10px] font-bold text-brand-primary tracking-tight font-sans">
                          ⚡ {campaign.eoiCount} EOI Applications
                        </span>
                      </div>

                      {/* Main Campaign content */}
                      <div className="text-left font-sans">
                        <p className="text-[11px] font-extrabold text-brand-navy leading-normal">
                          {campaign.inauguralOffer} on <span className="text-[#E11D48] underline decoration-rose-300 decoration-2 underline-offset-2 font-black">{campaign.deadline}</span>
                        </p>
                        <p className="text-[9px] text-brand-slateLight font-medium mt-1">
                          {campaign.thankYouText}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 mt-4 rounded-xl text-xs font-bold tracking-widest uppercase text-white bg-gradient-to-r from-brand-primary to-brand-primaryDark shadow-[0_4px_14px_rgba(59,130,246,0.2)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer font-sans"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      {strings.buttonLoadingText || 'securing portal...'}
                    </>
                  ) : (
                    <>
                      {ctaText || strings.buttonText || 'Get Early Access'}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>

                {/* Privacy Lock footer */}
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-brand-slateLight pt-2">
                  <Lock className="w-3 h-3" />
                  {strings.privacyText || 'Your data is protected by bank-grade security ledgers.'}
                </div>

              </form>
            </>
          ) : (
            /* Success Panel content */
            <div className="text-center py-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-brand-tealBg border border-brand-tealBorder flex items-center justify-center mb-6 text-brand-teal shadow-brand-md">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h3 className="text-2xl font-extrabold text-brand-navy mb-3 font-sans tracking-tight">
                {strings.successTitle || 'Successfully Registered!'}
              </h3>
              <p className="text-sm text-brand-slate font-light leading-relaxed mb-8 max-w-sm mx-auto font-sans">
                {strings.successSubtitle || 'Thank you for applying. A representative will contact you shortly to review your priority access portal.'}
              </p>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="w-full py-3.5 rounded-xl text-sm font-semibold tracking-wide text-brand-navy bg-[#FAFAF8] hover:bg-[#F4F3EF] border border-brand-borderMid transition-colors cursor-pointer"
              >
                {strings.successCloseText || 'Close Panel'}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
