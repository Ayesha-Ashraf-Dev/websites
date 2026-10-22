import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PersonalIntro from './components/PersonalIntro';
import ServicesSection from './components/ServicesSection';
import FeaturedProperties from './components/FeaturedProperties';
import PropertyModal from './components/PropertyModal';
import WhyLucas from './components/WhyLucas';
import CommunitiesSection from './components/CommunitiesSection';
import TestimonialsSection from './components/TestimonialsSection';
import MarketCalculatorModal from './components/MarketCalculatorModal';
import ContactSection from './components/ContactSection';
import ConsultationModal from './components/ConsultationModal';
import Footer from './components/Footer';

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [calculatorMode, setCalculatorMode] = useState(null); // 'mortgage' | 'valuation' | null
  const [communityFilter, setCommunityFilter] = useState('all');
  const [prefilledService, setPrefilledService] = useState('');
  const [prefilledPropertyForContact, setPrefilledPropertyForContact] = useState(null);

  // Handlers
  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
  };

  const handleExploreProperties = (community = 'all') => {
    setCommunityFilter(community);
    const elem = document.getElementById('properties');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCommunityFilter = (community) => {
    setCommunityFilter(community);
    const elem = document.getElementById('properties');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenServiceInquiry = (serviceTitle) => {
    setPrefilledService(serviceTitle);
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCalculator = (mode = 'mortgage') => {
    setCalculatorMode(mode);
  };

  const handleScheduleShowing = (property) => {
    setPrefilledPropertyForContact(property);
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#141518] selection:bg-[#C5A880]/20 selection:text-[#8E6D2B]">
      
      {/* 1. NAVIGATION */}
      <Navbar onBookConsultation={handleOpenConsultation} />

      <main>
        {/* 2. HERO SECTION */}
        <Hero
          onBookConsultation={handleOpenConsultation}
          onExploreProperties={handleExploreProperties}
        />

        {/* 3. PERSONAL INTRODUCTION */}
        <PersonalIntro onBookConsultation={handleOpenConsultation} />

        {/* 4. SERVICES SECTION */}
        <ServicesSection
          onOpenServiceInquiry={handleOpenServiceInquiry}
          onOpenCalculator={handleOpenCalculator}
        />

        {/* 5. FEATURED PROPERTIES SHOWCASE */}
        <FeaturedProperties
          filterCommunity={communityFilter}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
        />

        {/* 6. WHY WORK WITH LUCAS */}
        <WhyLucas onBookConsultation={handleOpenConsultation} />

        {/* 7. COMMUNITIES SECTION */}
        <CommunitiesSection onSelectCommunityFilter={handleSelectCommunityFilter} />

        {/* 8. CLIENT TESTIMONIALS */}
        <TestimonialsSection />

        {/* 9. CONTACT / LEAD CAPTURE */}
        <ContactSection
          prefilledService={prefilledService}
          prefilledProperty={prefilledPropertyForContact}
        />
      </main>

      {/* 10. FOOTER */}
      <Footer onSelectCommunityFilter={handleSelectCommunityFilter} />

      {/* Interactive Modals */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          onScheduleShowing={handleScheduleShowing}
        />
      )}

      {isConsultationOpen && (
        <ConsultationModal
          onClose={() => setIsConsultationOpen(false)}
        />
      )}

      {calculatorMode && (
        <MarketCalculatorModal
          initialMode={calculatorMode}
          onClose={() => setCalculatorMode(null)}
          onBookConsultation={() => {
            setCalculatorMode(null);
            setIsConsultationOpen(true);
          }}
        />
      )}

    </div>
  );
}
