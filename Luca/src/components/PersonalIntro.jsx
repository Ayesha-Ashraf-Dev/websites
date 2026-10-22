import React from 'react';
import { Target, HeartHandshake, MapPinned, Sparkles, Check, Phone, ArrowUpRight } from 'lucide-react';

export default function PersonalIntro({ onBookConsultation }) {
  const commitments = [
    {
      icon: Target,
      title: 'Understanding Your True Needs',
      description: 'Before viewing a single property, we sit down to unpack your lifestyle goals, financial timeline, and long-term vision. You get counsel tailored to your family, not a generic sales pitch.'
    },
    {
      icon: HeartHandshake,
      title: 'Personalized Strategic Advice',
      description: 'Every decision is backed by comprehensive comparables, micro-market analytics, and clear risk assessment. You remain in complete control with transparent guidance at every turn.'
    },
    {
      icon: MapPinned,
      title: 'Deep Local Market Knowledge',
      description: 'Living and breathing Woodbridge and the GTA gives you access to nuanced street-by-street values, upcoming infrastructure developments, and private off-market listings before the public.'
    },
    {
      icon: Sparkles,
      title: 'Making the Complex Simple',
      description: 'From staging and cinematic marketing to legal coordination and tough counter-offers, every detail is orchestrated smoothly so your transition is effortless and rewarding.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#C5A880]/40 text-xs font-semibold uppercase tracking-widest text-[#8E6D2B] mb-3">
            Personal Brand & Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111215] font-serif-luxury">
            Real Estate Guidance Built Around Your Goals
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A880] mx-auto mt-4 mb-5" />
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            I don’t believe in one-size-fits-all transactions. My advisory is built on one simple principle: your interests, peace of mind, and financial clarity always come first.
          </p>
        </div>

        {/* Editorial Presentation: Lucas Image Presentation & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (5 cols): Lucas Portrait with Editorial Frame & Monogram */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Luxury Frame Accent */}
              <div className="absolute -inset-3 bg-[#FAF9F5] border border-stone-200 rounded-3xl -z-10 shadow-sm" />
              
              <div className="rounded-2xl overflow-hidden shadow-xl border border-stone-200 relative bg-stone-900 group">
                <img
                  src="/Luca-Profile-Pic.jpg"
                  alt="Lucas Frattura - Woodbridge Real Estate Advisor"
                  className="w-full h-[520px] object-cover object-top filter brightness-[0.98] group-hover:scale-102 transition-transform duration-700"
                />
                
                {/* Overlay Vignette with Monogram Accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111215] via-[#111215]/20 to-transparent" />
                
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C5A880]/50 shadow-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-900">
                    Your Dedicated Advisor
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#E2C37E] font-medium mb-1">
                    Direct Representation
                  </p>
                  <h4 className="text-2xl font-bold font-display-luxury text-white">
                    Lucas Frattura
                  </h4>
                  <p className="text-xs text-stone-300 mt-1 font-light">
                    Lifelong Woodbridge resident serving discerning GTA buyers, sellers, and investors.
                  </p>
                  
                  {/* Signature mark concept */}
                  <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
                    <span className="font-serif-luxury italic text-sm text-stone-300">
                      "Excellence through personal integrity."
                    </span>
                    <img 
                      src="/logo.png" 
                      alt="LF Monogram" 
                      className="w-7 h-7 object-contain opacity-90 invert brightness-200"
                    />
                  </div>
                </div>

              </div>

              {/* Floating Quote Badge */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white p-4 rounded-xl shadow-xl border border-stone-200 max-w-xs hidden sm:block">
                <div className="flex items-center gap-2 text-[#8E6D2B] mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">The Lucas Difference</span>
                </div>
                <p className="text-xs text-stone-600 leading-snug">
                  You work directly with me — no handoffs to junior agents or automated call centers.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column (7 cols): Personal Story & 4 Commitments */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#111215] font-display-luxury leading-tight">
                "Real estate in Woodbridge is deeply personal. Behind every transaction is a family’s next chapter or an investor’s legacy."
              </h3>
              <p className="mt-4 text-stone-600 leading-relaxed font-light">
                As a passionate real estate advisor based in Woodbridge, Ontario, I founded my practice on a clear distinction: <strong className="font-medium text-stone-900">I am not a transactional brokerage; I am your personal advisor</strong>. 
              </p>
              <p className="mt-3 text-stone-600 leading-relaxed font-light">
                Whether you are stepping into the luxury market for the first time, downsizing from a historic estate, or seeking strategic high-yield acquisitions across Vaughan and the Greater Toronto Area, I provide the nuanced insights, discretion, and relentless negotiation support you need to make confident choices.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {commitments.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 rounded-xl bg-[#FAF9F5] border border-stone-200/70 hover:border-[#C5A880] transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#8E6D2B] shadow-2xs mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-stone-900 uppercase tracking-wide mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-stone-100">
              <button
                onClick={onBookConsultation}
                className="px-7 py-3.5 bg-[#111215] hover:bg-[#8E6D2B] text-white text-xs font-semibold uppercase tracking-widest rounded-full transition-all duration-300 shadow-sm flex items-center gap-2 group cursor-pointer"
              >
                <span>Schedule a Private Conversation</span>
                <ArrowUpRight className="w-4 h-4 text-[#E2C37E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <a
                href="tel:4165550188"
                className="px-6 py-3.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold uppercase tracking-widest rounded-full transition-colors flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#8E6D2B]" />
                <span>Direct: (416) 555-0188</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
