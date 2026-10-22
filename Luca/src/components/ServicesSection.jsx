import React, { useState } from 'react';
import { Home, TrendingUp, Key, ArrowRight, CheckCircle2, Calculator, ShieldCheck, Camera } from 'lucide-react';

export default function ServicesSection({ onOpenServiceInquiry, onOpenCalculator }) {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'buying',
      number: '01',
      title: 'Buying a Home',
      tagline: 'Exclusive Access & Confident Representation',
      description: 'Helping clients find the right property and navigate every step confidently.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      highlights: [
        'Private off-market & pocket listings in Woodbridge and Kleinburg',
        'In-depth neighborhood valuation & historical price trend analysis',
        'Rigorous architectural inspection & structural due diligence oversight',
        'Strategic negotiation tailored to secure fair value in competitive offers'
      ],
      primaryActionText: 'Start Your Home Search',
      secondaryActionText: 'Mortgage Calculator'
    },
    {
      id: 'selling',
      number: '02',
      title: 'Selling Your Home',
      tagline: 'Maximized Exposure & Premium Value Positioning',
      description: 'Strategic guidance, property positioning, marketing, and negotiation support.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      highlights: [
        'High-definition architectural photography & cinematic 4K video tours',
        'Targeted digital syndication reaching qualified GTA & international buyers',
        'Professional home staging consultation to maximize perceived square footage',
        'Meticulous contract defense and firm closing term management'
      ],
      primaryActionText: 'Request Property Valuation',
      secondaryActionText: 'View Marketing Strategy'
    },
    {
      id: 'investing',
      number: '03',
      title: 'Real Estate Investment',
      tagline: 'Data-Driven Yield & Capital Appreciation',
      description: 'Helping clients identify opportunities and make informed decisions.',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      highlights: [
        'Cash flow modeling, cap-rate forecasting, and tenant demographic vetting',
        'Pre-construction assignment vetting & VIP developer allocations',
        'Multi-unit, land assembly, and infill redevelopment opportunities in Vaughan',
        '1031/Capital gains tax coordination alongside your legal/accounting team'
      ],
      primaryActionText: 'Explore Investment Portfolios',
      secondaryActionText: 'Cap-Rate Analysis'
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-stone-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C5A880]/40 text-xs font-semibold uppercase tracking-widest text-[#8E6D2B] mb-3">
              Advisory Disciplines
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111215] font-serif-luxury">
              Bespoke Real Estate Services
            </h2>
            <p className="mt-2 text-stone-600 font-light max-w-xl text-base sm:text-lg">
              Tailored advisory programs designed to preserve capital, elevate lifestyle, and secure exceptional outcomes.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <button
              onClick={() => onOpenCalculator('mortgage')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-stone-300 hover:border-stone-900 text-stone-800 text-xs uppercase tracking-wider font-semibold transition-all shadow-xs cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#8E6D2B]" />
              <span>Financial Calculators</span>
            </button>
          </div>
        </div>

        {/* 3 Luxury Service Cards (Reference Inspired) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Card Image Header with Dark Gradient */}
              <div>
                <div className="relative h-60 w-full overflow-hidden bg-stone-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.92]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111215]/80 via-transparent to-black/20" />
                  
                  {/* Category Pill & Number */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold uppercase tracking-widest text-[#E2C37E] border border-white/10">
                      Service {service.number}
                    </span>
                    <span className="text-white/80 font-serif-luxury text-lg italic">
                      Woodbridge, ON
                    </span>
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold font-display-luxury text-white">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#E2C37E] font-medium tracking-wide">
                      {service.tagline}
                    </p>
                  </div>
                </div>

                {/* Card Body Content */}
                <div className="p-6">
                  {/* Primary Supporting Text requested by user */}
                  <p className="text-stone-700 font-medium text-sm leading-relaxed border-l-2 border-[#C5A880] pl-3 py-1 mb-5 bg-[#FAF9F5] rounded-r-md">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-3 mb-6">
                    {service.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-stone-600 leading-normal">
                        <CheckCircle2 className="w-4 h-4 text-[#8E6D2B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 border-t border-stone-100 flex flex-col gap-2.5">
                <button
                  onClick={() => onOpenServiceInquiry(service.title)}
                  className="w-full py-3 px-4 bg-[#111215] hover:bg-[#8E6D2B] text-white text-xs font-semibold uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
                >
                  <span>{service.primaryActionText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E2C37E] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenCalculator(service.id === 'buying' ? 'mortgage' : service.id === 'selling' ? 'valuation' : 'investment')}
                  className="w-full py-2 px-3 text-stone-500 hover:text-stone-900 text-[11px] font-semibold uppercase tracking-wider transition-colors text-center cursor-pointer"
                >
                  {service.secondaryActionText} →
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Advisory Trust Bar Below Services */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF5EC] border border-[#C5A880] flex items-center justify-center text-[#8E6D2B] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-stone-900">
                Independent, Fiduciary Client Representation
              </h4>
              <p className="text-xs text-stone-500 font-light mt-0.5">
                Lucas works exclusively with a limited roster of clients per quarter to guarantee uncompromising personal attention.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenServiceInquiry('General Advisory')}
            className="px-6 py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
          >
            Inquire for Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
