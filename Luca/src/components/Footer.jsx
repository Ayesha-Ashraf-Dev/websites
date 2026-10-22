import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

// Custom sleek SVGs for social media icons
const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
  </svg>
);

export default function Footer({ onSelectCommunityFilter }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About Lucas', href: '#about' },
    { name: 'Advisory Services', href: '#services' },
    { name: 'Featured Properties', href: '#properties' },
    { name: 'Why Work With Lucas', href: '#why-lucas' },
    { name: 'Communities Served', href: '#communities' },
    { name: 'Client Testimonials', href: '#testimonials' },
    { name: 'Private Consultation', href: '#contact' }
  ];

  const communities = [
    'Woodbridge',
    'Vaughan',
    'Kleinburg',
    'Maple',
    'Thornhill',
    'Concord'
  ];

  return (
    <footer className="bg-[#111215] text-stone-300 pt-16 pb-12 border-t border-[#26272F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-stone-800">
          
          {/* Brand & Identity Column (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-white p-1 border border-[#C5A880] flex items-center justify-center shrink-0">
                <img
                  src="/logo.png"
                  alt="Lucas Frattura Gold Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white font-display-luxury">
                  LUCAS FRATTURA
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-[#E2C37E] font-medium">
                  Real Estate Advisor · Woodbridge, Ontario
                </p>
              </div>
            </div>

            <p className="text-xs text-stone-400 font-light leading-relaxed max-w-sm">
              Providing personalized, high-trust real estate guidance across Woodbridge, Vaughan, Kleinburg, and the Greater Toronto Area. Built on fiduciary integrity, discreet representation, and local market mastery.
            </p>

            {/* Social Media Placeholders as requested */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold block mb-3">
                Connect With Lucas Online
              </span>
              <div className="flex items-center gap-2.5">
                {[
                  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com' },
                  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://linkedin.com' },
                  { icon: FacebookIcon, label: 'Facebook', href: 'https://facebook.com' },
                  { icon: YoutubeIcon, label: 'YouTube', href: 'https://youtube.com' }
                ].map((soc, idx) => {
                  const Icon = soc.icon;
                  return (
                    <a
                      key={idx}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-stone-900 border border-stone-700/80 flex items-center justify-center text-stone-400 hover:text-[#E2C37E] hover:border-[#C5A880] transition-colors"
                      aria-label={soc.label}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-[#C5A880] pl-2.5">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-stone-400 hover:text-[#E2C37E] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Communities Served (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-[#C5A880] pl-2.5">
              Communities
            </h4>
            <ul className="space-y-2 text-xs">
              {communities.map((comm) => (
                <li key={comm}>
                  <button
                    onClick={() => onSelectCommunityFilter(comm)}
                    className="text-stone-400 hover:text-[#E2C37E] transition-colors text-left cursor-pointer"
                  >
                    {comm}, ON
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white border-l-2 border-[#C5A880] pl-2.5">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-stone-400">
              <a href="tel:4165550188" className="flex items-center gap-2 hover:text-[#E2C37E] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>(416) 555-0188</span>
              </a>
              <a href="mailto:lucas@lucasfrattura.ca" className="flex items-center gap-2 hover:text-[#E2C37E] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>lucas@lucasfrattura.ca</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880] shrink-0 mt-0.5" />
                <span>Woodbridge, Ontario, Canada</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Compliance Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-light">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
            <span>
              Lucas Frattura is a registered Real Estate Advisor in Ontario, Canada under RECO (Real Estate Council of Ontario). All MLS® data and listings are subject to verification.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Lucas Frattura. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C5A880]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
