import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { NAV_ITEMS, WHATSAPP_PHONE } from '../../data/landingData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#1580C4]/10 py-3'
          : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo Link */}
        <a
          id="navbar-logo-link"
          href="#inicio"
          onClick={closeMenu}
          className="focus:outline-none focus:ring-2 focus:ring-[#1580C4] rounded-xl p-1 -m-1"
          aria-label="Zurident Kids - Volver al inicio"
        >
          <BrandLogo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          id="desktop-nav"
          className="hidden md:flex items-center gap-1 lg:gap-2"
          aria-label="Navegación principal"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 rounded-xl text-base font-semibold text-[#1C2B39]/85 hover:text-[#1580C4] hover:bg-[#F3FAFF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#1580C4]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <WhatsAppButton id="navbar-whatsapp-cta" variant="navbar" />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:+${WHATSAPP_PHONE}`}
            className="p-2 text-[#1580C4] rounded-xl hover:bg-[#F3FAFF] focus:outline-none focus:ring-2 focus:ring-[#1580C4]"
            aria-label="Llamar a Zurident Kids"
          >
            <PhoneCall className="w-5 h-5 stroke-[2.2]" />
          </a>
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1C2B39] rounded-xl hover:bg-[#F3FAFF] focus:outline-none focus:ring-2 focus:ring-[#1580C4]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[2.2]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[2.2]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-white border-b border-gray-100 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200"
        >
          <nav className="flex flex-col gap-1.5" aria-label="Navegación móvil">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="px-4 py-3 rounded-xl text-lg font-semibold text-[#1C2B39] hover:bg-[#F3FAFF] hover:text-[#1580C4] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-gray-100">
              <WhatsAppButton
                id="mobile-menu-whatsapp-btn"
                variant="primary"
                className="w-full justify-center"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
