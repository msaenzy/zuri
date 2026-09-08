import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { WhyUsSection } from './components/sections/WhyUsSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { AboutSection } from './components/sections/AboutSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_DEFAULT_URL } from './data/landingData';

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-[#FFC629] selection:text-[#1C2B39]">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Main Landing Page Content - Strictly Ordered Sections */}
      <main className="flex-grow">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Por qué elegirnos */}
        <WhyUsSection />

        {/* 3. Oferta / Servicios / Tratamientos */}
        <ServicesSection />

        {/* 4. Sobre nosotros / La clínica */}
        <AboutSection />

        {/* 5. Testimonios */}
        <TestimonialsSection />

        {/* 6. Ubicación y contacto */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button for Quick Access */}
      <aside aria-label="Contacto directo por WhatsApp">
        <a
          id="floating-whatsapp-btn"
          href={WHATSAPP_DEFAULT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 bg-[#3CB878] hover:bg-[#34a56b] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-[#3CB878]/30"
          aria-label="Escribir por WhatsApp a Zurident Kids"
        >
          <MessageCircle className="w-7 h-7 stroke-[2.2] fill-white/10" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2.5 transition-all duration-300 text-sm font-bold">
            ¿Deseas agendar?
          </span>
        </a>
      </aside>
    </div>
  );
}
