import React, { useRef, useState, useEffect } from 'react';
import { Star, MessageSquareQuote, Instagram, ShieldAlert } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { TESTIMONIALS_DATA, CLINIC_INFO } from '../../data/landingData';

export const TestimonialsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInViewport, setIsInViewport] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only run marquee loop when in viewport
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Duplicate items to ensure smooth infinite loop
  const duplicatedItems = [...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA];

  return (
    <section id="testimonios" ref={containerRef} className="py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <SectionHeading
          badge="Experiencias y Confianza"
          badgeColor="yellow"
          title="Lo que dicen las familias que nos visitan"
          subtitle="Compromiso ético de transparencia: los testimonios reales en video se encuentran en las historias de Instagram de la clínica."
        />

        {/* Note banner explaining video stories & transparent placeholder policy */}
        <div className="max-w-3xl mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-[#FFF9E6] border border-[#FFC629]/40 flex items-start gap-3.5 text-xs sm:text-sm text-[#1C2B39]/90">
          <ShieldAlert className="w-5 h-5 text-[#FFC629] shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-semibold text-[#1C2B39]">
              Testimonios reales en video disponibles en Instagram:
            </p>
            <p className="mt-1 text-[#1C2B39]/80">
              Por respeto a la privacidad y derechos de imagen, estos espacios están reservados
              técnicamente para ser activados con las transcripciones autorizadas por los padres de familia.
            </p>
            <a
              href={CLINIC_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-2 font-bold text-[#1580C4] hover:text-[#EC1E7C] transition-colors"
            >
              <Instagram className="w-4 h-4 stroke-[2]" />
              <span>Ver historias destacadas de testimonios en @zurident_kids</span>
            </a>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Carousel Track */}
      <div
        className="relative w-full overflow-hidden py-4 select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          className="flex gap-6 w-max animate-infinite-scroll"
          style={{
            animationPlayState: isInViewport && !isPaused ? 'running' : 'paused',
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[310px] sm:w-[380px] bg-[#F3FAFF] rounded-3xl p-6 sm:p-7 border border-[#1580C4]/15 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between shrink-0"
            >
              <div>
                {/* 5-Star Visual Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#FFC629] fill-[#FFC629]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#1580C4]/10 text-[#1580C4]">
                    {item.treatment}
                  </span>
                </div>

                {/* Quote Icon & Text */}
                <div className="flex items-start gap-2 mb-4">
                  <MessageSquareQuote className="w-5 h-5 text-[#1580C4]/50 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#1C2B39]/80 italic leading-relaxed">
                    "{item.comment}"
                  </p>
                </div>
              </div>

              {/* Patient Badge */}
              <div className="pt-4 border-t border-[#1580C4]/10 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-[#1C2B39]">{item.patientName}</p>
                  <p className="text-gray-500 text-[11px]">Paciente de Odontopediatría</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#3CB878]/15 text-[#3CB878] flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-xs text-gray-500">
          Pausa automática al posar el cursor o mantener presionado en pantalla táctil
        </p>
      </div>
    </section>
  );
};
