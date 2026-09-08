import React from 'react';
import { Instagram, Facebook, MapPin, Clock, Phone, Heart } from 'lucide-react';
import { BrandLogo } from '../ui/BrandLogo';
import { CLINIC_INFO, NAV_ITEMS, WHATSAPP_DEFAULT_URL } from '../../data/landingData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer-section" className="bg-[#1C2B39] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand & Promise */}
          <div className="space-y-4">
            <div className="bg-white p-3 rounded-2xl inline-block shadow-sm">
              <BrandLogo size="sm" />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Cuidamos las sonrisas más pequeñas con la ternura de un hogar y el respaldo de una
              especialista en odontopediatría en Santo Domingo de los Tsáchilas.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                id="footer-instagram-link"
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1580C4]/20 hover:bg-[#EC1E7C] text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#EC1E7C]"
                aria-label="Instagram de Zurident Kids (@zurident_kids)"
              >
                <Instagram className="w-5 h-5 stroke-[2]" />
              </a>
              <a
                id="footer-facebook-link"
                href={CLINIC_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-[#1580C4]/20 hover:bg-[#1580C4] text-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#1580C4]"
                aria-label="Facebook ZuriDent Kids"
              >
                <Facebook className="w-5 h-5 stroke-[2]" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-lg font-heading font-bold text-white mb-4">Secciones</h3>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-[#FFC629] transition-colors focus:outline-none focus:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={WHATSAPP_DEFAULT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#FFC629] font-bold hover:underline"
                >
                  Agendar por WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact details */}
          <div>
            <h3 className="text-lg font-heading font-bold text-white mb-4">Consultorio</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#1580C4] shrink-0 mt-0.5 stroke-[2]" />
                <span>{CLINIC_INFO.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-5 h-5 text-[#3CB878] shrink-0 mt-0.5 stroke-[2]" />
                <div>
                  <span className="font-semibold text-white">Horario estimado:</span>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Lunes a viernes, 9:00 a. m. – 6:00 p. m.
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-5 h-5 text-[#EC1E7C] shrink-0 stroke-[2]" />
                <a
                  href={WHATSAPP_DEFAULT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +593 99 861 9085
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Specialist information */}
          <div>
            <h3 className="text-lg font-heading font-bold text-white mb-4">Profesional a cargo</h3>
            <div className="bg-[#24374a] p-4 rounded-2xl border border-white/10 space-y-2">
              <p className="font-bold text-white text-base">{CLINIC_INFO.doctorName}</p>
              <p className="text-xs text-[#3CB878] font-semibold tracking-wide uppercase">
                {CLINIC_INFO.doctorTitle}
              </p>
              <p className="text-xs text-gray-300 leading-relaxed pt-1">
                Especialista en atención dental pediátrica integral y consejería en lactancia materna.
              </p>
            </div>
            <p className="text-[11px] text-gray-400 mt-3 italic">
              * Nota: Confirmar el horario exacto de atención y enlace de Facebook con Zurident Kids.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {currentYear} Zurident Kids. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 text-center">
            Diseñado con <Heart className="w-3.5 h-3.5 text-[#EC1E7C] fill-[#EC1E7C] inline" /> para las
            familias de Santo Domingo de los Tsáchilas.
          </p>
        </div>
      </div>
    </footer>
  );
};
