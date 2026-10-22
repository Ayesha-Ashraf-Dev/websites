import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Award, Star, Compass, CheckCircle2, ChevronRight, Phone } from 'lucide-react';

export default function Hero({ onBookConsultation, onExploreProperties }) {
  const [activeIntent, setActiveIntent] = useState('buy');
  const [selectedCommunity, setSelectedCommunity] = useState('Woodbridge');
  const [budgetRange, setBudgetRange] = useState('$2M - $4M');

  const handleQuickSearch = (e) => {
    e.preventDefault();
    onExploreProperties(selectedCommunity);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-[#FAF9F5]">
      {/* Subtle architectural background grid & radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[550px] h-[550px] bg-[#E8D29F]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badge: Personal Brand & Territory */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 shadow-xs text-xs font-medium text-stone-800">
            <span className="w-2 h-2 rounded-full bg-[#B88737] animate-pulse" />
            <span className="font-semibold tracking-wider uppercase text-[11px] text-[#8E6D2B]">
              Woodbridge & GTA Luxury Advisory
            </span>
            <span className="text-stone-300">|</span>
            <span className="text-stone-600">Lucas Frattura</span>
          </div>
        </div>

        {/* Main Grid: Headline + Supporting Text & Prominent Lucas Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (7 cols): Copy, CTAs, Search Bar */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#111215] leading-[1.12]">
              Helping You Make <span className="font-serif-luxury font-normal italic text-[#8E6D2B]">Confident</span> Real Estate Decisions in Woodbridge & Beyond
            </h1>

            <p className="text-lg sm:text-xl text-stone-600 font-light leading-relaxed max-w-2xl">
              Personalized guidance for buying, selling, and investing in the Greater Toronto Area.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onBookConsultation}
                className="px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-white bg-[#111215] rounded-full shadow-lg hover:bg-[#8E6D2B] transition-all duration-300 hover:shadow-xl active:scale-[0.98] flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#E2C37E] transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onExploreProperties('all')}
                className="px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#111215] bg-white border border-stone-300 rounded-full hover:border-stone-900 hover:bg-stone-50 transition-all duration-300 shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Properties</span>
              </button>
            </div>

            {/* Micro Trust Points */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8E6D2B]" />
                Zero-obligation private consultation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8E6D2B]" />
                Exclusive off-market opportunities
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8E6D2B]" />
                Direct advisor representation
              </span>
            </div>

            {/* Interactive Quick Property Finder Bar (Reference Style) */}
            <div className="mt-4 bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/80 shadow-md">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                  Quick Advisory Finder
                </span>
                <div className="flex gap-1.5">
                  {[
                    { id: 'buy', label: 'Buying' },
                    { id: 'sell', label: 'Selling' },
                    { id: 'invest', label: 'Investing' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveIntent(tab.id)}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                        activeIntent === tab.id
                          ? 'bg-[#111215] text-white shadow-xs'
                          : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleQuickSearch} className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3.5 items-center">
                <div>
                  <label className="block text-[11px] font-medium text-stone-500 uppercase tracking-wider mb-1">
                    Community
                  </label>
                  <select
                    value={selectedCommunity}
                    onChange={(e) => setSelectedCommunity(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 text-stone-800 text-xs sm:text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-[#8E6D2B] focus:outline-none"
                  >
                    <option value="Woodbridge">Woodbridge</option>
                    <option value="Kleinburg">Kleinburg</option>
                    <option value="Vaughan">Vaughan</option>
                    <option value="Thornhill">Thornhill</option>
                    <option value="Maple">Maple</option>
                    <option value="Concord">Concord</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-stone-500 uppercase tracking-wider mb-1">
                    Budget / Value Range
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 text-stone-800 text-xs sm:text-sm rounded-lg px-3 py-2 focus:ring-1 focus:ring-[#8E6D2B] focus:outline-none"
                  >
                    <option value="$1.5M - $2.5M">$1.5M - $2.5M</option>
                    <option value="$2M - $4M">$2.0M - $4.0M</option>
                    <option value="$4M - $6M">$4.0M - $6.0M</option>
                    <option value="$6M+">$6.0M+ (Ultra-Luxury)</option>
                  </select>
                </div>

                <div className="pt-2 sm:pt-4">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-[#8E6D2B] hover:bg-[#7e5224] text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <span>View Matches</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </div>

          </div>

          {/* Right Column (5 cols): Prominent Lucas Professional Photo with Luxury Accents */}
          <div className="lg:col-span-5 relative">
            <div className="relative max-w-md mx-auto">
              
              {/* Backing decorative architectural frame */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-[#C5A880]/30 to-[#FAF9F5] rounded-3xl transform rotate-1 scale-[1.02] border border-[#C5A880]/40 -z-10" />

              {/* Main Portrait Card */}
              <div className="relative bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-2xl">
                
                {/* Photo Container */}
                <div className="relative h-[440px] sm:h-[480px] w-full overflow-hidden bg-stone-100">
                  <img
                    src="/Luca-Profile-Pic.jpg"
                    alt="Lucas Frattura - Real Estate Advisor"
                    className="w-full h-full object-cover object-top filter contrast-[1.02] hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle luxury gradient vignette at bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111215]/90 via-[#111215]/20 to-transparent" />

                  {/* Top-Right LF Monogram Gold Seal */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2 rounded-2xl border border-[#C5A880]/60 shadow-lg flex items-center gap-2">
                    <img
                      src="/logo.png"
                      alt="LF Monogram"
                      className="w-8 h-8 object-contain"
                    />
                    <div className="pr-1 text-left">
                      <p className="text-[10px] uppercase font-bold tracking-widest text-[#111215]">Advisor</p>
                      <p className="text-[9px] text-[#8E6D2B] font-semibold">Woodbridge, ON</p>
                    </div>
                  </div>

                  {/* Overlaid Info on Photo Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex text-[#E2C37E]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold text-stone-200">5.0 Star Rated Advisor</span>
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-white font-display-luxury">
                      Lucas Frattura
                    </h3>
                    <p className="text-xs text-stone-300 font-light">
                      Personal Real Estate Guidance Tailored To Your Life Goals
                    </p>
                  </div>
                </div>

                {/* Bottom Card Strip: Quick Call & Availability */}
                <div className="p-4 bg-[#111215] text-white flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-stone-300 font-medium">Currently Accepting</p>
                      <p className="text-xs text-[#E2C37E] font-semibold">New Buyer & Seller Clients</p>
                    </div>
                  </div>
                  <a
                    href="tel:4165550188"
                    className="px-3.5 py-1.5 bg-[#8E6D2B] hover:bg-[#9e6d2b] text-white text-xs font-medium rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call Lucas</span>
                  </a>
                </div>

              </div>

              {/* Floating Stat Pill Left */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white py-2.5 px-4 rounded-xl shadow-xl border border-stone-200 hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#FAF5EC] border border-[#C5A880]/50 flex items-center justify-center text-[#8E6D2B]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-stone-900">$120M+</div>
                  <div className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">
                    Career Volume Guided
                  </div>
                </div>
              </div>

              {/* Floating Stat Pill Right */}
              <div className="absolute -top-4 -left-4 sm:-left-5 bg-white py-2 px-3.5 rounded-xl shadow-xl border border-stone-200 hidden sm:flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900">Local Authority</div>
                  <div className="text-[9px] uppercase tracking-wider text-stone-500 font-medium">
                    Woodbridge Resident
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Editorial Metrics Banner (Christie's / Reference Style) */}
        <div className="mt-16 pt-10 border-t border-stone-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-white/60 border border-stone-200/50">
            <div className="text-2xl sm:text-3xl font-bold font-serif-luxury text-[#111215]">$120M+</div>
            <div className="text-xs font-medium uppercase tracking-wider text-stone-500 mt-1">Transaction Volume</div>
          </div>
          <div className="p-4 rounded-xl bg-white/60 border border-stone-200/50">
            <div className="text-2xl sm:text-3xl font-bold font-serif-luxury text-[#111215]">98.8%</div>
            <div className="text-xs font-medium uppercase tracking-wider text-stone-500 mt-1">List-to-Sale Ratio</div>
          </div>
          <div className="p-4 rounded-xl bg-white/60 border border-stone-200/50">
            <div className="text-2xl sm:text-3xl font-bold font-serif-luxury text-[#111215]">14 Days</div>
            <div className="text-xs font-medium uppercase tracking-wider text-stone-500 mt-1">Avg. Days to Offer</div>
          </div>
          <div className="p-4 rounded-xl bg-white/60 border border-stone-200/50">
            <div className="text-2xl sm:text-3xl font-bold font-serif-luxury text-[#111215]">100%</div>
            <div className="text-xs font-medium uppercase tracking-wider text-stone-500 mt-1">Client Centric Focus</div>
          </div>
        </div>

      </div>
    </section>
  );
}
