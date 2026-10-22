import React, { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, Clock, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function ContactSection({ prefilledService = '', prefilledProperty = null }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    intent: prefilledService.toLowerCase().includes('sell') ? 'Selling' : prefilledService.toLowerCase().includes('invest') ? 'Investing' : 'Buying',
    community: 'Woodbridge',
    priceRange: '$2M - $4M',
    message: prefilledProperty 
      ? `Hello Lucas, I am interested in scheduling a private viewing for ${prefilledProperty.title} at ${prefilledProperty.address}.`
      : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate luxury inquiry dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Info on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 cols): Strong Personal Brand Presentation */}
          <div className="lg:col-span-5 space-y-8">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#C5A880]/40 text-xs font-semibold uppercase tracking-widest text-[#8E6D2B] mb-3">
                Direct Advisory Connection
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111215] font-serif-luxury">
                Ready for your next move?
              </h2>
              <div className="w-14 h-[2px] bg-[#C5A880] mt-4 mb-4" />
              <p className="text-base text-stone-600 font-light leading-relaxed">
                Whether you are planning to acquire a premier residence, reposition an existing estate, or build long-term wealth through GTA real estate, Lucas Frattura is ready to advise you.
              </p>
            </div>

            {/* Lucas Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-[#FAF9F5] border border-stone-200/90 shadow-xs space-y-6">
              <div className="flex items-center gap-4 pb-5 border-b border-stone-200">
                <div className="relative">
                  <img
                    src="/Luca-Profile-Pic.jpg"
                    alt="Lucas Frattura"
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#C5A880] shadow-sm"
                  />
                  <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display-luxury text-[#111215]">
                    Lucas Frattura
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#8E6D2B] font-semibold">
                    Real Estate Advisor
                  </p>
                  <p className="text-[11px] text-stone-500">
                    Woodbridge, Ontario · York Region
                  </p>
                </div>
              </div>

              {/* Direct Touchpoints */}
              <div className="space-y-3.5 text-xs">
                <a
                  href="tel:4165550188"
                  className="flex items-center gap-3 text-stone-700 hover:text-[#8E6D2B] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#8E6D2B] group-hover:border-[#8E6D2B]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-stone-400 font-medium block">Direct Mobile</span>
                    <span className="font-semibold text-stone-900">(416) 555-0188</span>
                  </div>
                </a>

                <a
                  href="mailto:lucas@lucasfrattura.ca"
                  className="flex items-center gap-3 text-stone-700 hover:text-[#8E6D2B] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#8E6D2B] group-hover:border-[#8E6D2B]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-stone-400 font-medium block">Confidential Email</span>
                    <span className="font-semibold text-stone-900">lucas@lucasfrattura.ca</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-stone-700">
                  <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#8E6D2B]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-stone-400 font-medium block">Advisory Office</span>
                    <span className="font-semibold text-stone-900">Woodbridge, ON L4L 4Y7</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-200/80 flex items-center gap-2 text-[11px] text-stone-500 font-light">
                <ShieldCheck className="w-4 h-4 text-[#8E6D2B] shrink-0" />
                <span>Strict confidentiality & non-disclosure assured.</span>
              </div>
            </div>

          </div>

          {/* Right Column (7 cols): Contact Form */}
          <div className="lg:col-span-7 bg-[#FAF9F5] p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-lg relative">
            
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif-luxury text-stone-900">
                  Thank You, {formData.name}
                </h3>
                <p className="text-stone-600 text-sm max-w-md mx-auto font-light leading-relaxed">
                  Your advisory inquiry has been delivered directly to Lucas Frattura. Lucas will review your requirements and reach out within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        intent: 'Buying',
                        community: 'Woodbridge',
                        priceRange: '$2M - $4M',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-full border border-stone-300 text-xs font-semibold uppercase tracking-wider text-stone-700 hover:bg-white"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Intent Selection Pills (Buying / Selling / Investing) as requested */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    How Can Lucas Guide You? <span className="text-[#8E6D2B]">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {['Buying', 'Selling', 'Investing'].map((intent) => (
                      <button
                        type="button"
                        key={intent}
                        onClick={() => setFormData({ ...formData, intent })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all border cursor-pointer ${
                          formData.intent === intent
                            ? 'bg-[#111215] text-white border-[#111215] shadow-xs'
                            : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                        }`}
                      >
                        {intent}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name, Email, Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Your Full Name <span className="text-[#8E6D2B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Michael De Luca"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#8E6D2B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Email Address <span className="text-[#8E6D2B]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. michael@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#8E6D2B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Phone Number <span className="text-[#8E6D2B]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(416) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#8E6D2B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Preferred Community
                    </label>
                    <select
                      value={formData.community}
                      onChange={(e) => setFormData({ ...formData, community: e.target.value })}
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#8E6D2B]"
                    >
                      <option value="Woodbridge">Woodbridge</option>
                      <option value="Kleinburg">Kleinburg</option>
                      <option value="Vaughan">Vaughan</option>
                      <option value="Thornhill">Thornhill</option>
                      <option value="Maple">Maple</option>
                      <option value="Concord">Concord</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    How Can Lucas Help? <span className="text-stone-400 font-normal">(Timeline, budget, or property questions)</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell Lucas about your goals, questions about buying or selling in Woodbridge, or specific property interests..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:ring-1 focus:ring-[#8E6D2B]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#111215] hover:bg-[#8E6D2B] text-white font-semibold text-xs uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-60"
                >
                  {loading ? (
                    <span>Delivering Inquiry to Lucas...</span>
                  ) : (
                    <>
                      <span>Send Advisory Inquiry</span>
                      <ArrowRight className="w-4 h-4 text-[#E2C37E]" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-stone-400 font-light">
                  Protected by standard fiduciary real estate privacy. Your information is never sold or shared.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
