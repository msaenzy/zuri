import React, { useState } from 'react';
import { GraduationCap, Heart, CalendarCheck, Smile, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { CLINIC_INFO, CLINIC_VALUES } from '../../data/landingData';
import { IMAGES } from '../../data/images';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const AboutSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });
  const [imageSrc, setImageSrc] = useState(IMAGES.draEstefania.src);

  const renderValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#1580C4] stroke-[2]" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-[#EC1E7C] stroke-[2]" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-[#3CB878] stroke-[2]" />;
      case 'Smile':
        return <Smile className="w-6 h-6 text-[#FFC629] stroke-[2]" />;
      default:
        return <Smile className="w-6 h-6 text-[#1580C4] stroke-[2]" />;
    }
  };

  return (
    <section id="nosotros" ref={ref} className="py-20 sm:py-28 bg-[#F3FAFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Conoce a Zurident Kids"
          badgeColor="mint"
          title="Odontopediatría con amor y excelencia clínica"
          subtitle="Un espacio donde la salud bucal infantil se cuida con respeto, empatía y dedicación exclusiva."
        />

        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-90 scale-[0.98]'
          }`}
        >
          {/* Left Column: Doctora Presentation & Photo card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl border-4 border-white">
                <img
                  src={imageSrc}
                  alt={IMAGES.draEstefania.alt}
                  onError={() => setImageSrc(IMAGES.draEstefania.fallback)}
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C2B39]/85 via-[#1C2B39]/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs uppercase font-bold tracking-widest text-[#FFC629]">
                    Odontopediatra a cargo
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white">
                    {CLINIC_INFO.doctorName}
                  </h3>
                  <p className="text-sm text-[#F3FAFF]/90 font-medium">
                    {CLINIC_INFO.doctorTitle}
                  </p>
                </div>
              </div>

              {/* Doctor guarantee badge */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3CB878]/15 flex items-center justify-center text-[#3CB878]">
                  <CheckCircle2 className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1C2B39]">Atención Personalizada</p>
                  <p className="text-xs text-gray-500">Sin prisas, al ritmo del niño</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy & 4 Values */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100 mb-8">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#1C2B39] mb-4">
                Nuestra Historia y Propósito
              </h3>
              {/* Exact quote from business prompt */}
              <p className="text-base sm:text-lg text-[#1C2B39]/85 leading-relaxed font-normal">
                Zurident Kids nace del trabajo de la Dra. Estefanía Zurita Pozo, especialista en
                Odontopediatría, con un compromiso simple: que ir al dentista sea una experiencia
                tranquila —incluso divertida— para los niños de Santo Domingo de los Tsáchilas. Cada
                rincón del consultorio, desde los murales hasta Pepito, nuestro compañero de
                aventuras, está pensado para acompañar a tu peque desde su primer diente hasta su
                sonrisa definitiva.
              </p>
            </div>

            {/* 4 Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CLINIC_VALUES.map((val) => (
                <div
                  key={val.title}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F3FAFF] flex items-center justify-center shrink-0">
                    {renderValueIcon(val.iconName)}
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-[#1C2B39] mb-1">
                      {val.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#1C2B39]/70 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
