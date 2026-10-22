import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';

export default function Navbar({ onBookConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Lucas', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Featured Properties', href: '#properties' },
    { name: 'Why Lucas', href: '#why-lucas' },
    { name: 'Communities', href: '#communities' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Pre-Header Bar */}
      <div className="bg-[#111215] text-[#D8CEBA] text-xs py-2 px-4 border-b border-[#2A2B33] hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center tracking-wider">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
              Woodbridge, Vaughan & Greater Toronto Area
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-stone-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
              Licensed Real Estate Advisor | RECO Registered
            </span>
          </div>
          <div className="flex items-center space-x-5 text-stone-300">
            <a 
              href="tel:4165550188" 
              className="hover:text-[#E2C37E] transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-[#C5A880]" />
              Direct: (416) 555-0188
            </a>
            <span className="text-stone-600">|</span>
            <span className="text-[#C5A880] font-medium">Bespoke Client Advisory</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200/70 py-3.5'
            : 'bg-[#FAF9F5]/90 backdrop-blur-sm border-b border-stone-200/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Title */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white p-1 shadow-sm border border-stone-200/80 flex items-center justify-center group-hover:border-[#C5A880] transition-colors">
              <img 
                src="/logo.png" 
                alt="Lucas Frattura Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#111215] font-display-luxury group-hover:text-[#8E6D2B] transition-colors">
                LUCAS FRATTURA
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-[#787268] font-medium">
                Real Estate Advisor · Woodbridge
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] uppercase tracking-wider font-medium text-stone-600 hover:text-[#111215] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:4165550188"
              className="p-2.5 rounded-full border border-stone-300 text-stone-700 hover:bg-stone-100 hover:text-stone-900 transition-colors"
              title="Call Lucas Direct"
            >
              <Phone className="w-4 h-4 text-[#8E6D2B]" />
            </a>

            <button
              onClick={onBookConsultation}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-all bg-[#111215] rounded-full shadow-sm hover:bg-[#8E6D2B] hover:shadow-md active:scale-[0.98] group"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#E2C37E]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-stone-100 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-4 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-stone-700 hover:text-[#8E6D2B] py-2 border-b border-stone-100 uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookConsultation();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-widest bg-[#111215] text-white rounded-lg hover:bg-[#8E6D2B] transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#E2C37E]" />
                  Book a Consultation
                </button>
                <a
                  href="tel:4165550188"
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold uppercase tracking-widest border border-stone-300 text-stone-800 rounded-lg hover:bg-stone-50 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8E6D2B]" />
                  Call (416) 555-0188
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
