import React from 'react';
import { Compass, UserCheck, MessageSquare, ShieldCheck, Check, Award, ArrowUpRight } from 'lucide-react';

export default function WhyLucas({ onBookConsultation }) {
  const benefits = [
    {
      icon: Compass,
      title: 'Local Market Expertise',
      description: 'Deep understanding of Woodbridge and surrounding communities.',
      details: 'Comprehensive knowledge of historical appreciation trends, zoning bylaws, local builders, school catchment performance, and micro-neighborhood values.'
    },
    {
      icon: UserCheck,
      title: 'Personalized Approach',
      description: 'Every client receives guidance tailored to their goals.',
      details: 'No cookie-cutter strategies. Your timeline, financial thresholds, and lifestyle aspirations dictate our customized roadmap.'
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      description: 'A smooth experience from first conversation to closing.',
      details: 'Prompt updates, total transparency, and proactive check-ins. You will never be left wondering what happens next in your transaction.'
    },
    {
      icon: ShieldCheck,
      title: 'Trusted Representation',
      description: 'Professional support throughout the journey.',
      details: 'Fiduciary integrity that protects your interests unconditionally during delicate counter-offers, home inspections, and legal contingencies.'
    }
  ];

  return (
    <section id="why-lucas" className="py-20 lg:py-28 bg-[#FAF9F5] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C5A880]/40 text-xs font-semibold uppercase tracking-widest text-[#8E6D2B] mb-3">
            The Lucas Frattura Standard
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111215] font-serif-luxury">
            Why Discerning Clients Work with Lucas
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A880] mx-auto mt-4 mb-5" />
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Real estate advisory elevated to the highest echelon of personal trust, quantitative market precision, and white-glove execution.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-stone-200/80 shadow-xs hover:shadow-xl hover:border-[#C5A880] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF5EC] border border-[#C5A880]/40 flex items-center justify-center text-[#8E6D2B] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold font-serif-luxury text-stone-300 group-hover:text-[#C5A880] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Benefit Title (Required) */}
                  <h3 className="text-lg font-bold text-stone-900 mb-2 font-display-luxury group-hover:text-[#8E6D2B] transition-colors">
                    {benefit.title}
                  </h3>

                  {/* Primary statement requested by user */}
                  <p className="text-sm font-medium text-stone-800 leading-snug mb-3">
                    {benefit.description}
                  </p>

                  {/* Supporting detail */}
                  <p className="text-xs text-stone-500 font-light leading-relaxed">
                    {benefit.details}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#8E6D2B]">
                  <Check className="w-3.5 h-3.5" />
                  <span>Guaranteed Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparative Advantage Table / Banner */}
        <div className="mt-16 bg-white rounded-2xl p-8 sm:p-10 border border-stone-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#8E6D2B]">
                Fiduciary Commitment
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-stone-900">
                A Refreshing Alternative to Traditional Volume Brokerages
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                Large brokerage teams often delegate listings to junior assistants. With Lucas Frattura, every phone call, property showing, pricing review, and counter-offer is managed by Lucas directly.
              </p>
              
              <button
                onClick={onBookConsultation}
                className="mt-2 px-6 py-3 bg-[#111215] hover:bg-[#8E6D2B] text-white text-xs font-semibold uppercase tracking-widest rounded-full transition-colors flex items-center gap-2 group cursor-pointer"
              >
                <span>Experience the Difference</span>
                <ArrowUpRight className="w-4 h-4 text-[#E2C37E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#FAF9F5] border border-stone-200">
                <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">Standard Real Estate Practice</p>
                <ul className="space-y-2 text-xs text-stone-500">
                  <li className="flex items-center gap-2">✕ Automated listing blast without story</li>
                  <li className="flex items-center gap-2">✕ Client passed between assistants</li>
                  <li className="flex items-center gap-2">✕ Reactive price reductions under pressure</li>
                  <li className="flex items-center gap-2">✕ Limited micro-neighborhood insight</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-[#FAF5EC] border border-[#C5A880]/60 shadow-xs">
                <p className="text-xs font-bold text-[#8E6D2B] uppercase tracking-wider mb-2">The Lucas Frattura Advisory</p>
                <ul className="space-y-2 text-xs text-stone-800 font-medium">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#8E6D2B]" /> Cinematic bespoke marketing strategy</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#8E6D2B]" /> 100% direct advisor representation</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#8E6D2B]" /> Firm mathematical valuation defenses</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#8E6D2B]" /> Hyper-local Woodbridge insider access</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
