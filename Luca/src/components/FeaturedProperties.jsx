import React, { useState } from 'react';
import { featuredProperties } from '../data/properties';
import { MapPin, BedDouble, Bath, Square, ArrowRight, Eye, Sparkles } from 'lucide-react';

export default function FeaturedProperties({ onSelectProperty, filterCommunity = 'all' }) {
  const [activeFilter, setActiveFilter] = useState(filterCommunity || 'all');

  const communities = ['all', 'Woodbridge', 'Kleinburg', 'Vaughan', 'Thornhill', 'Maple'];

  const filtered = activeFilter === 'all'
    ? featuredProperties
    : featuredProperties.filter(
        p => p.community.toLowerCase() === activeFilter.toLowerCase()
      );

  return (
    <section id="properties" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#C5A880]/40 text-xs font-semibold uppercase tracking-widest text-[#8E6D2B] mb-3">
              Curated Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111215] font-serif-luxury">
              Featured Luxury Properties
            </h2>
            <p className="mt-2 text-stone-600 font-light max-w-xl text-base sm:text-lg">
              Explore premier residential estates across Woodbridge and top Greater Toronto Area communities.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs text-stone-400 font-mono">
            Showing {filtered.length} of {featuredProperties.length} Signature Listings
          </div>
        </div>

        {/* Filter Navigation Bar (Reference Style) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-stone-200">
          {communities.map((comm) => (
            <button
              key={comm}
              onClick={() => setActiveFilter(comm)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                activeFilter.toLowerCase() === comm.toLowerCase()
                  ? 'bg-[#111215] text-white shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900'
              }`}
            >
              {comm === 'all' ? 'All Communities' : comm}
            </button>
          ))}
        </div>

        {/* Properties Grid - Magazine Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filtered.map((property) => (
            <div
              key={property.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Badges */}
                <div className="relative h-72 w-full overflow-hidden bg-stone-900">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Status Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/65 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-[#E2C37E] border border-[#C5A880]/40">
                      {property.status}
                    </span>
                  </div>

                  {/* Location Pill */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-stone-800 flex items-center gap-1 shadow-xs">
                    <MapPin className="w-3 h-3 text-[#8E6D2B]" />
                    <span>{property.community}</span>
                  </div>

                  {/* Quick specs pill floating on bottom of image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs px-3 py-1.5 rounded-lg bg-black/45 backdrop-blur-sm border border-white/10">
                    <span className="flex items-center gap-1">
                      <BedDouble className="w-3.5 h-3.5 text-[#E2C37E]" /> {property.beds} Beds
                    </span>
                    <span className="text-white/40">|</span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-3.5 h-3.5 text-[#E2C37E]" /> {property.baths} Baths
                    </span>
                    <span className="text-white/40">|</span>
                    <span className="flex items-center gap-1">
                      <Square className="w-3.5 h-3.5 text-[#E2C37E]" /> {property.sqft}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Property Type */}
                  <p className="text-[11px] uppercase tracking-widest font-semibold text-[#8E6D2B] mb-1.5">
                    {property.type}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-serif-luxury text-[#111215] group-hover:text-[#8E6D2B] transition-colors leading-snug line-clamp-1">
                    {property.title}
                  </h3>

                  {/* Address */}
                  <p className="text-xs text-stone-500 mt-1 line-clamp-1">
                    {property.address}
                  </p>

                  {/* Price */}
                  <div className="mt-4 pt-4 border-t border-stone-100 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-stone-400 block font-medium">Price</span>
                      <span className="text-2xl font-bold text-[#111215] font-display-luxury">
                        {property.price}
                      </span>
                    </div>
                    <span className="text-xs text-stone-400 font-mono">CAD</span>
                  </div>
                </div>
              </div>

              {/* View Details Button as requested */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectProperty(property)}
                  className="w-full py-3 px-4 bg-[#FAF9F5] hover:bg-[#111215] text-[#111215] hover:text-white border border-stone-200 hover:border-[#111215] text-xs font-semibold uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:border-[#C5A880] cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#8E6D2B] group-hover:text-[#E2C37E] group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Off-Market Inquiry Banner */}
        <div className="mt-16 bg-[#111215] text-white rounded-2xl p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-[#C5A880]/20 to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#E2C37E] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                Discreet Portfolio Access
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-white">
                Seeking a Private Off-Market Estate in Woodbridge or Kleinburg?
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 font-light max-w-xl">
                A notable portion of multi-million dollar Woodbridge residences trade privately without public MLS advertising. Contact Lucas for confidential access.
              </p>
            </div>
            <button
              onClick={() => onSelectProperty(featuredProperties[0])}
              className="px-7 py-3.5 bg-[#8E6D2B] hover:bg-[#a67c33] text-white text-xs font-semibold uppercase tracking-widest rounded-full transition-colors shrink-0 shadow-md cursor-pointer"
            >
              Request Off-Market Portfolio
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
