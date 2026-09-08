import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const headlineWords = [
    'Cuidamos',
    'las',
    'sonrisas',
    'más',
    'pequeñas,',
    'con',
    'amor',
    'de',
    'mamá',
    'y',
    'respaldo',
    'de',
    'especialista',
  ];

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen pt-28 sm:pt-32 pb-16 lg:pb-24 flex items-center bg-gradient-to-b from-[#F3FAFF] via-white to-white overflow-hidden"
    >
      {/* Decorative background ambient shapes */}
      <div className="absolute top-20 right-[-5%] w-96 h-96 rounded-full bg-[#1580C4]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-80 h-80 rounded-full bg-[#EC1E7C]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-[#FFC629]/15 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top pill badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1580C4]/10 border border-[#1580C4]/20 text-[#1580C4] text-xs sm:text-sm font-bold uppercase tracking-wider mb-6 transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#FFC629] fill-[#FFC629]" />
              <span>Odontopediatría en Santo Domingo</span>
            </div>

            {/* H1 Headline with word-by-word stagger animation */}
            <h1
              id="hero-headline"
              className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-heading font-bold text-[#1C2B39] tracking-tight leading-[1.18] mb-6"
            >
              {headlineWords.map((word, idx) => {
                const isSpecial =
                  word === 'sonrisas' ||
                  word === 'pequeñas,' ||
                  word === 'amor' ||
                  word === 'especialista';
                let specialColorClass = '';
                if (word === 'sonrisas' || word === 'pequeñas,') specialColorClass = 'text-[#1580C4]';
                if (word === 'amor') specialColorClass = 'text-[#EC1E7C]';
                if (word === 'especialista') specialColorClass = 'text-[#1580C4]';

                return (
                  <span
                    key={`${word}-${idx}`}
                    className={`inline-block mr-2.5 transition-all duration-500 ease-out ${specialColorClass}`}
                    style={{
                      transitionDelay: isVisible ? `${idx * 40}ms` : '0ms',
                      transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#1C2B39]/85 font-normal leading-relaxed max-w-xl mb-8">
              Odontopediatría en Santo Domingo de los Tsáchilas, pensada para que tu peque pierda el
              miedo al dentista desde su primera visita.
            </p>

            {/* CTA Group with 0.4s delay fade */}
            <div
              className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-90 translate-y-3'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <WhatsAppButton id="hero-primary-cta" variant="primary">
                Agendar por WhatsApp
              </WhatsAppButton>

              <a
                id="hero-secondary-cta"
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border-2 border-[#1580C4] text-[#1580C4] hover:bg-[#F3FAFF] font-bold text-base transition-colors focus:outline-none focus:ring-4 focus:ring-[#1580C4]/20"
              >
                <span>Conoce nuestros servicios</span>
                <ArrowRight className="w-4 h-4 stroke-[2.2]" />
              </a>
            </div>

            {/* Trust badge tags */}
            <div className="mt-10 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-[#1C2B39]/70 font-semibold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#3CB878]" />
                Atención 100% pediátrica
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FFC629]" />
                Compañero Pepito 🦒
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#EC1E7C]" />
                Dra. Estefanía Zurita Pozo
              </span>
            </div>
          </div>

          {/* Right Column: Authentic Pediatric Clinic Representation & Pepito Mascot */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Photo Frame Container with rounded-3xl and subtle layered glow */}
              <div className="relative z-10 rounded-3xl overflow-hidden bg-white shadow-xl border-4 border-white">
                {/* Visual pediatric clinic illustration/photo with authentic cheerful pediatric dental details */}
                <div className="relative aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-gradient-to-tr from-[#1580C4]/10 via-[#F3FAFF] to-white flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80"
                    alt="Consultorio odontopediátrico Zurident Kids con sillón dental infantil adaptado y ambiente cálido para niños"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  {/* Overlay gradient badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B39]/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <p className="text-xs uppercase font-bold tracking-widest text-[#FFC629]">
                      Consultorio Zurident Kids
                    </p>
                    <p className="text-lg font-heading font-bold text-white">
                      Diseñado para sonrisas tranquilas y sin miedo
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Mascot Badge: Pepito 🦒 */}
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 z-20 bg-white p-3.5 sm:p-4 rounded-2xl shadow-xl border-2 border-[#FFC629]/30 flex items-center gap-3 animate-gentle-bounce">
                <div className="w-12 h-12 rounded-xl bg-[#FFF9E6] flex items-center justify-center p-1">
                  <img
                    src="/src/assets/img/mascota/pepito-jirafa.svg"
                    alt="Mascota Pepito jirafa de Zurident Kids"
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-[#FFC629] uppercase tracking-wide">
                      Mascota oficial
                    </span>
                    <span className="text-sm">🦒</span>
                  </div>
                  <p className="text-sm font-heading font-bold text-[#1C2B39]">¡Hola, soy Pepito!</p>
                </div>
              </div>

              {/* Specialist accreditation floating tag */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 z-20 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-lg border border-[#1580C4]/20 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#3CB878] animate-ping" />
                <span className="text-xs sm:text-sm font-bold text-[#1580C4]">
                  Odontopediatra Especialista
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
