import React from 'react';
import {
  Smile,
  CalendarCheck,
  Shield,
  Sparkles,
  Heart,
  Activity,
  ArrowRight,
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { SERVICES_ITEMS, WHATSAPP_PHONE } from '../../data/landingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const ServicesSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const renderServiceIcon = (iconName: string) => {
    const iconProps = { className: 'w-7 h-7 stroke-[2]', 'aria-hidden': true };
    switch (iconName) {
      case 'Smile':
        return <Smile {...iconProps} className="w-7 h-7 text-[#1580C4] stroke-[2]" />;
      case 'CalendarCheck':
        return <CalendarCheck {...iconProps} className="w-7 h-7 text-[#3CB878] stroke-[2]" />;
      case 'Shield':
        return <Shield {...iconProps} className="w-7 h-7 text-[#1580C4] stroke-[2]" />;
      case 'Sparkles':
        return <Sparkles {...iconProps} className="w-7 h-7 text-[#FFC629] stroke-[2]" />;
      case 'Heart':
        return <Heart {...iconProps} className="w-7 h-7 text-[#EC1E7C] stroke-[2]" />;
      case 'Activity':
        return <Activity {...iconProps} className="w-7 h-7 text-[#3CB878] stroke-[2]" />;
      default:
        return <Smile {...iconProps} className="w-7 h-7 text-[#1580C4] stroke-[2]" />;
    }
  };

  return (
    <section id="servicios" ref={ref} className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Nuestra Oferta Clínica"
          badgeColor="pink"
          title="Tratamientos pensados exclusivamente para niños"
          subtitle="Acompañamos el crecimiento de la sonrisa de tu peque con procedimientos indoloros, preventivos y explicados con amor."
        />

        {/* Services Grid with incremental delay stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_ITEMS.map((service, idx) => {
            const encodedServiceMessage = encodeURIComponent(
              `Hola Zurident Kids, me interesa agendar para el servicio: ${service.title} 🦷`
            );
            const waServiceUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodedServiceMessage}`;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative bg-[#F3FAFF] rounded-3xl p-8 border border-[#1580C4]/10 hover:border-[#1580C4]/40 hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                style={{
                  transitionDelay: isVisible ? `${idx * 90}ms` : '0ms',
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isVisible ? 1 : 0.9,
                }}
              >
                <div>
                  {/* Icon container */}
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xs flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {renderServiceIcon(service.iconName)}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#1C2B39] mb-3 leading-snug group-hover:text-[#1580C4] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-base text-[#1C2B39]/80 font-normal leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#1580C4]/10 flex items-center justify-between">
                  <a
                    href={waServiceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1580C4] group-hover:text-[#EC1E7C] transition-colors focus:outline-none focus:underline"
                  >
                    <span>Consultar por WhatsApp</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.2] group-hover:translate-x-1 transition-transform" />
                  </a>
                  <span className="text-xs font-semibold text-gray-400">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance banner below services */}
        <div className="mt-14 p-6 sm:p-8 bg-[#F3FAFF] rounded-3xl border border-[#1580C4]/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-heading font-bold text-[#1C2B39]">
              ¿No sabes qué servicio necesita tu hijo/a?
            </h4>
            <p className="text-sm sm:text-base text-[#1C2B39]/80 mt-1">
              La <strong>primera valoración odontopediátrica</strong> es el paso ideal para conocer su salud bucal sin compromiso ni estrés.
            </p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Zurident Kids, deseo una primera valoración para mi hijo/a 🦷')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-[#1580C4] hover:bg-[#116ba5] text-white font-bold text-sm sm:text-base transition-colors shadow-sm"
          >
            Agendar primera cita
          </a>
        </div>
      </div>
    </section>
  );
};
