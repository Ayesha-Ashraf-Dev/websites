import React, { useState, useEffect } from 'react';
import { X, MapPin, BedDouble, Bath, Square, Car, Calendar, Share2, Check, ArrowRight } from 'lucide-react';

export default function PropertyModal({ property, onClose, onScheduleShowing }) {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!property) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Sticky Bar */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-stone-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#FAF5EC] border border-[#C5A880] text-[11px] font-bold uppercase tracking-wider text-[#8E6D2B]">
              {property.status}
            </span>
            <span className="text-xs text-stone-500 font-medium">
              Ref ID: {property.id}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-full border border-stone-200 hover:bg-stone-100 text-stone-600 transition-colors"
              title="Share listing link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full border border-stone-200 hover:bg-stone-900 hover:text-white text-stone-700 transition-colors"
              title="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Main Gallery Display */}
          <div>
            <div className="relative h-[320px] sm:h-[420px] rounded-xl overflow-hidden bg-stone-900 mb-3 shadow-inner">
              <img
                src={property.images[selectedImageIdx] || property.images[0]}
                alt={property.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs font-mono">
                Photo {selectedImageIdx + 1} of {property.images.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-2.5">
              {property.images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIdx(idx)}
                  className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedImageIdx === idx ? 'border-[#8E6D2B] scale-[0.98]' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Title, Price & Address Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-stone-200 pb-6 gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs text-[#8E6D2B] font-semibold uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{property.address}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif-luxury text-[#111215]">
                {property.title}
              </h2>
              <p className="text-xs uppercase tracking-wider text-stone-500 font-medium mt-1">
                {property.type} · {property.community}, ON
              </p>
            </div>

            <div className="md:text-right">
              <span className="text-xs font-medium uppercase tracking-wider text-stone-400 block">
                Offered At
              </span>
              <span className="text-3xl sm:text-4xl font-bold text-[#111215] font-display-luxury">
                {property.price} <span className="text-xs font-sans text-stone-500 font-normal">CAD</span>
              </span>
            </div>
          </div>

          {/* Key Property Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 bg-[#FAF9F5] p-4 rounded-xl border border-stone-200">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#8E6D2B]">
                <BedDouble className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-stone-500 uppercase tracking-wider">Bedrooms</p>
                <p className="text-sm font-bold text-stone-900">{property.beds} Suites</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#8E6D2B]">
                <Bath className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-stone-500 uppercase tracking-wider">Bathrooms</p>
                <p className="text-sm font-bold text-stone-900">{property.baths} Luxury Baths</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#8E6D2B]">
                <Square className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-stone-500 uppercase tracking-wider">Interior</p>
                <p className="text-sm font-bold text-stone-900">{property.sqft}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-[#8E6D2B]">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-stone-500 uppercase tracking-wider">Parking</p>
                <p className="text-sm font-bold text-stone-900">{property.garage}</p>
              </div>
            </div>
          </div>

          {/* Architectural Description */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#8E6D2B] mb-2">
              Architectural & Interior Overview
            </h4>
            <p className="text-stone-600 text-sm leading-relaxed font-light">
              {property.description}
            </p>
            <p className="text-xs text-stone-500 mt-2 font-mono">
              Lot Dimension: {property.lot}
            </p>
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#8E6D2B] mb-3">
              Key Residence Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {property.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-stone-700 bg-stone-50 p-2.5 rounded-lg border border-stone-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8E6D2B]" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Direct CTA */}
          <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#FAF9F5] p-5 rounded-xl">
            <div className="flex items-center gap-3">
              <img
                src="/Luca-Profile-Pic.jpg"
                alt="Lucas Frattura"
                className="w-12 h-12 rounded-full object-cover border border-[#C5A880]"
              />
              <div>
                <p className="text-xs font-bold text-stone-900">Advised by Lucas Frattura</p>
                <p className="text-[11px] text-stone-500">Private Showings & Confidential Representation</p>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onScheduleShowing(property);
              }}
              className="w-full sm:w-auto px-6 py-3 bg-[#111215] hover:bg-[#8E6D2B] text-white text-xs font-semibold uppercase tracking-widest rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Calendar className="w-4 h-4 text-[#E2C37E]" />
              <span>Schedule Private Showing</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
