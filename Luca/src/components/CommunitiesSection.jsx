import React, { useState } from 'react';
import { communitiesData } from '../data/communities';
import { MapPin, ArrowUpRight, Compass, Sparkles } from 'lucide-react';

export default function CommunitiesSection({ onSelectCommunityFilter }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="communities" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#C5A880]/40 text-xs font-semibold uppercase tracking-widest text-[#8E6D2B] mb-3">
            Local Territory & Neighborhoods
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111215] font-serif-luxury">
            Premier Communities Served
          </h2>
          <div className="w-16 h-[2px] bg-[#C5A880] mx-auto mt-4 mb-5" />
          <p className="text-base sm:text-lg text-stone-600 font-light leading-relaxed">
            From the historic estates of Woodbridge and secluded sanctuaries of Kleinburg to the dynamic skyline of Vaughan, explore the communities we represent.
          </p>
        </div>

        {/* 6 Communities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communitiesData.map((community) => (
            <div
              key={community.id}
              onMouseEnter={() => setHoveredId(community.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-[#FAF9F5] rounded-2xl overflow-hidden border border-stone-200 shadow-xs hover:shadow-xl hover:border-[#C5A880] transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-60 w-full overflow-hidden bg-stone-900">
                  <img
                    src={community.image}
                    alt={`${community.name}, Ontario`}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.9]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111215]/85 via-[#111215]/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-[#E2C37E] border border-white/10">
                      {community.tag}
                    </span>
                  </div>

                  {/* Location Title Over Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-white">
                      {community.name}
                    </h3>
                    <p className="text-xs text-[#E2C37E] font-medium tracking-wide">
                      {community.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  {/* Price & Vibe strip */}
                  <div className="grid grid-cols-2 gap-2 pb-4 mb-4 border-b border-stone-200/80">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">Avg Luxury Range</p>
                      <p className="text-xs sm:text-sm font-bold text-stone-900">{community.avgPrice}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">Atmosphere</p>
                      <p className="text-xs text-stone-700 font-medium line-clamp-1">{community.vibe}</p>
                    </div>
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed font-light mb-4">
                    {community.description}
                  </p>

                  {/* Key Highlights / Landmarks */}
                  <div className="space-y-1.5 pt-1">
                    <p className="text-[10px] uppercase tracking-wider text-[#8E6D2B] font-bold">
                      Notable Highlights:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {community.keyFeatures.map((feat, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-white border border-stone-200 text-[11px] text-stone-600"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectCommunityFilter(community.name)}
                  className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#111215] text-[#111215] hover:text-white border border-stone-300 hover:border-[#111215] text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                >
                  <span>Explore {community.name} Properties</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8E6D2B]" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Local Relocation Consultation Callout */}
        <div className="mt-16 bg-[#FAF9F5] rounded-2xl p-6 sm:p-8 border border-[#C5A880]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white border border-[#C5A880] flex items-center justify-center text-[#8E6D2B] shrink-0 shadow-2xs">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-stone-900">
                Unsure which GTA community best matches your lifestyle?
              </h4>
              <p className="text-xs text-stone-500 font-light mt-0.5">
                Lucas offers private community orientation tours, reviewing schools, private clubs, and micro-pocket nuances.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-[#111215] hover:bg-[#8E6D2B] text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
          >
            Request Community Tour
          </a>
        </div>

      </div>
    </section>
  );
}
