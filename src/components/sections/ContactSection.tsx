import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Send,
  ExternalLink,
  Calendar,
  User,
  HelpCircle,
  AlertCircle,
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import {
  CLINIC_INFO,
  SERVICE_OPTIONS,
  WHATSAPP_PHONE,
} from '../../data/landingData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const ContactSection: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    nombre: '',
    servicio: 'Primera valoración',
    horario: 'Por la mañana (9:00 a. m. – 12:00 m.)',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombre.trim()) return;

    // Exact required message structure:
    // "Hola, soy [Nombre]. Me interesa [Servicio] y mi horario preferente es [Horario]. ¿Podrían ayudarme a agendar?"
    const message = `Hola, soy ${formData.nombre.trim()}. Me interesa ${formData.servicio} y mi horario preferente es ${formData.horario}. ¿Podrían ayudarme a agendar?`;
    const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;

    setSubmitted(true);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contacto" ref={ref} className="py-20 sm:py-28 bg-[#F3FAFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Ubicación y Contacto"
          badgeColor="blue"
          title="Visítanos o agenda directamente por WhatsApp"
          subtitle="Estamos ubicados en una zona central y accesible de Santo Domingo de los Tsáchilas, en los Altos del Edificio Jalea Real."
        />

        {/* Opposite Lateral Slide-in Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (Slide from Left): Form & Quick Info */}
          <div
            className="lg:col-span-6 transition-all duration-700 ease-out"
            style={{
              transform: isVisible ? 'translateX(0)' : 'translateX(-24px)',
              opacity: isVisible ? 1 : 0.9,
            }}
          >
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#EC1E7C] block mb-1">
                  Reserva Rápida
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#1C2B39]">
                  Agenda tu cita con la doctora
                </h3>
                <p className="text-sm text-[#1C2B39]/70 mt-1">
                  Completa los datos y te redirigiremos a WhatsApp con tu mensaje listo para enviar.
                </p>
              </div>

              <form id="contact-appointment-form" onSubmit={handleSubmit} className="space-y-5">
                {/* Field 1: Nombre */}
                <div>
                  <label
                    htmlFor="form-nombre"
                    className="block text-xs font-bold uppercase tracking-wider text-[#1C2B39] mb-1.5"
                  >
                    Nombre del acudiente o peque *
                  </label>
                  <div className="relative">
                    <User className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="form-nombre"
                      type="text"
                      required
                      placeholder="Ej. María Pérez y Mateo"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:border-[#1580C4] focus:ring-4 focus:ring-[#1580C4]/15 outline-none text-base text-[#1C2B39] transition-all bg-[#F3FAFF]/30"
                    />
                  </div>
                </div>

                {/* Field 2: Servicio de interés */}
                <div>
                  <label
                    htmlFor="form-servicio"
                    className="block text-xs font-bold uppercase tracking-wider text-[#1C2B39] mb-1.5"
                  >
                    Servicio de interés *
                  </label>
                  <div className="relative">
                    <HelpCircle className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      id="form-servicio"
                      value={formData.servicio}
                      onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                      className="w-full pl-12 pr-10 py-3.5 rounded-2xl border border-gray-200 focus:border-[#1580C4] focus:ring-4 focus:ring-[#1580C4]/15 outline-none text-base text-[#1C2B39] transition-all bg-[#F3FAFF]/30 appearance-none cursor-pointer"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Field 3: Horario preferente */}
                <div>
                  <label
                    htmlFor="form-horario"
                    className="block text-xs font-bold uppercase tracking-wider text-[#1C2B39] mb-1.5"
                  >
                    Horario preferente *
                  </label>
                  <div className="relative">
                    <Calendar className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="form-horario"
                      type="text"
                      required
                      placeholder="Ej. Lunes por la mañana o Martes 3pm"
                      value={formData.horario}
                      onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                      className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 focus:border-[#1580C4] focus:ring-4 focus:ring-[#1580C4]/15 outline-none text-base text-[#1C2B39] transition-all bg-[#F3FAFF]/30"
                    />
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Puedes indicar los días u horas que mejor te convengan.
                  </p>
                </div>

                {/* Submit button */}
                <button
                  id="submit-appointment-btn"
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-[#EC1E7C] hover:bg-[#d8156e] text-white font-bold text-base sm:text-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 active:scale-98 focus:outline-none focus:ring-4 focus:ring-[#EC1E7C]/25"
                >
                  <Send className="w-5 h-5 stroke-[2.2]" />
                  <span>Enviar y Agendar por WhatsApp</span>
                </button>

                {submitted && (
                  <p className="text-center text-xs text-[#3CB878] font-bold mt-2">
                    ¡Ventana de WhatsApp abierta con tu mensaje redactado!
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Right Column (Slide from Right): Map & Exact Location Info */}
          <div
            className="lg:col-span-6 flex flex-col gap-6 transition-all duration-700 ease-out"
            style={{
              transform: isVisible ? 'translateX(0)' : 'translateX(24px)',
              opacity: isVisible ? 1 : 0.9,
            }}
          >
            {/* Embedded Google Maps Container */}
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 overflow-hidden">
              <div className="w-full h-72 sm:h-80 rounded-2xl overflow-hidden relative bg-gray-100">
                <iframe
                  id="google-maps-embed"
                  title="Ubicación de Zurident Kids en Santo Domingo de los Tsáchilas"
                  src={CLINIC_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-1">
                <div>
                  <p className="text-xs uppercase font-bold text-[#1580C4] tracking-wide">
                    Altos del Edificio Jalea Real
                  </p>
                  <p className="text-sm font-semibold text-[#1C2B39]">
                    Av. Quito y Calle Cocaniguas
                  </p>
                </div>
                <a
                  id="open-in-google-maps-btn"
                  href={CLINIC_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1580C4] hover:bg-[#116ba5] text-white text-sm font-bold shadow-xs transition-colors shrink-0"
                >
                  <span>Abrir en Mapa</span>
                  <ExternalLink className="w-4 h-4 stroke-[2]" />
                </a>
              </div>
            </div>

            {/* Address & Hours Detail Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1580C4]/10 text-[#1580C4] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-base font-heading font-bold text-[#1C2B39]">
                    Dirección exacta
                  </h4>
                  <p className="text-sm text-[#1C2B39]/80 mt-0.5 leading-relaxed">
                    {CLINIC_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-[#3CB878]/10 text-[#3CB878] flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-base font-heading font-bold text-[#1C2B39]">
                    Horario de atención
                  </h4>
                  <p className="text-sm text-[#1C2B39]/80 mt-0.5 leading-relaxed">
                    {CLINIC_INFO.hours}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                <div className="w-12 h-12 rounded-2xl bg-[#EC1E7C]/10 text-[#EC1E7C] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h4 className="text-base font-heading font-bold text-[#1C2B39]">
                    WhatsApp directo
                  </h4>
                  <p className="text-sm font-semibold text-[#1580C4] mt-0.5">
                    +593 99 861 9085
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
