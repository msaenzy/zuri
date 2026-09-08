import React from 'react';
import { Award, Sparkles, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { WHY_US_ITEMS } from '../../data/landingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const WhyUsSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-8 h-8 text-[#1580C4] stroke-[2]" />;
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-[#FFC629] stroke-[2]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[#3CB878] stroke-[2]" />;
      default:
        return <Award className="w-8 h-8 text-[#1580C4] stroke-[2]" />;
    }
  };

  const getCardBorder = (id: number) => {
    switch (id) {
      case 1:
        return 'hover:border-[#1580C4]/40 hover:shadow-[#1580C4]/10';
      case 2:
        return 'hover:border-[#FFC629]/50 hover:shadow-[#FFC629]/10';
      case 3:
        return 'hover:border-[#3CB878]/50 hover:shadow-[#3CB878]/10';
      default:
        return 'hover:border-[#1580C4]/40';
    }
  };

  return (
    <section id="por-que-elegirnos" ref={ref} className="py-20 sm:py-28 bg-[#F3FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Diferenciales de Zurident Kids"
          badgeColor="blue"
          title="¿Por qué elegirnos para cuidar a tu peque?"
          subtitle="Cada detalle de nuestro consultorio y práctica clínica está pensado para que la experiencia dental sea positiva y segura."
        />

        {/* 3 Cards with stagger animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_US_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              id={`why-us-card-${item.id}`}
              className={`bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 flex flex-col justify-between ${getCardBorder(
                item.id
              )}`}
              style={{
                transitionDelay: isVisible ? `${idx * 160}ms` : '0ms',
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                opacity: isVisible ? 1 : 0.85,
              }}
            >
              <div>
                {/* Icon box */}
                <div className="w-16 h-16 rounded-2xl bg-[#F3FAFF] flex items-center justify-center mb-6 border border-gray-100">
                  {getIcon(item.iconName)}
                </div>

                <span className="text-xs font-bold uppercase tracking-wider text-[#EC1E7C] mb-2 block">
                  {item.tag}
                </span>

                <h3 className="text-2xl font-heading font-bold text-[#1C2B39] mb-4 leading-snug">
                  {item.title}
                </h3>

                <p className="text-[#1C2B39]/80 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-50 flex items-center text-xs font-semibold text-[#1580C4]">
                <span>Zurident Kids · Santo Domingo</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
