import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonials';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? testimonialsData.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === testimonialsData.length - 1 ? 0 : current + 1));
  };

  const currentTestimonial = testimonialsData[activeIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#C5A880]/40 text-xs font-semibold uppercase tracking-widest text-[#8E6D2B] mb-3">
            Client Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111215] font-serif-luxury">
            Reflections of Trust & Success
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A880] mx-auto mt-4 mb-5" />
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            Real experiences from families, professionals, and investors guided by Lucas Frattura.
          </p>
          
          {/* Explicit disclaimer that these are placeholder examples as requested */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-300 text-[11px] text-stone-500 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span>Note: Client testimonials below are illustrative placeholder examples representing typical client experiences.</span>
          </div>
        </div>

        {/* Featured Testimonial Hero Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-xl relative">
          
          {/* Large Quote Mark Accent */}
          <div className="absolute top-6 right-8 text-stone-100 pointer-events-none">
            <Quote className="w-24 h-24 text-[#FAF5EC]" />
          </div>

          <div className="relative z-10">
            {/* Top Row: Stars + Example Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-1.5 text-[#C5A880]">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                <span className="text-xs font-bold text-stone-900 ml-2">5.0 Out of 5.0 Rating</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold uppercase tracking-wider">
                  Example Case Study
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  {currentTestimonial.verifiedSale}
                </span>
              </div>
            </div>

            {/* Quote Body */}
            <blockquote className="text-lg sm:text-xl md:text-2xl font-serif-luxury text-stone-800 leading-relaxed italic mb-8">
              "{currentTestimonial.quote}"
            </blockquote>

            {/* Bottom Row: Client Identity & Pagination */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-stone-100 pt-6 gap-4">
              <div>
                <h4 className="text-base font-bold text-stone-900 font-display-luxury">
                  {currentTestimonial.clientName}
                </h4>
                <p className="text-xs text-[#8E6D2B] font-medium">
                  {currentTestimonial.role}
                </p>
                <p className="text-[11px] text-stone-400 mt-0.5">
                  {currentTestimonial.location} · {currentTestimonial.year}
                </p>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="p-3 rounded-full border border-stone-200 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-colors cursor-pointer text-stone-700"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-stone-400 font-mono">
                  0{activeIndex + 1} / 0{testimonialsData.length}
                </span>
                <button
                  onClick={next}
                  className="p-3 rounded-full border border-stone-200 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-colors cursor-pointer text-stone-700"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* 3-Column Review Cards Grid Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          {testimonialsData.slice(0, 3).map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`p-6 rounded-2xl bg-white border transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? 'border-[#8E6D2B] shadow-md ring-1 ring-[#8E6D2B]/30'
                  : 'border-stone-200/80 hover:border-stone-300 hover:shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex text-[#C5A880]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span className="text-[9px] uppercase tracking-wider text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded">
                  Example
                </span>
              </div>
              <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4 italic">
                "{item.quote}"
              </p>
              <div className="border-t border-stone-100 pt-3">
                <p className="text-xs font-bold text-stone-900">{item.clientName}</p>
                <p className="text-[10px] text-[#8E6D2B]">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
