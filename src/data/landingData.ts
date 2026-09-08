import { NavItem, WhyUsItem, ServiceItem, ClinicValue, TestimonialItem } from '../types';

export const WHATSAPP_PHONE = '593998619085';
export const WHATSAPP_DISPLAY = '+593 99 861 9085';
export const WHATSAPP_DEFAULT_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent('Hola Zurident Kids, quiero agendar una valoración para mi peque 🦷')}`;

export const CLINIC_INFO = {
  name: 'Zurident Kids',
  tagline: 'Odontopediatría especializada & Consejería en lactancia',
  doctorName: 'Dra. Estefanía Zurita Pozo',
  doctorTitle: 'Especialista en Odontopediatría',
  city: 'Santo Domingo de los Tsáchilas, Ecuador',
  address: 'Av. Quito y Calle Cocaniguas (Altos del Edificio Jalea Real), Santo Domingo de los Tsáchilas, Ecuador',
  googleMapsLink: 'https://www.google.com/maps/search/?api=1&query=Av.+Quito+y+Calle+Cocaniguas%2C+Santo+Domingo+de+los+Ts%C3%A1chilas%2C+Ecuador',
  googleMapsEmbedUrl: 'https://www.google.com/maps?q=Av.+Quito+y+Calle+Cocaniguas,+Santo+Domingo,+Ecuador&output=embed',
  hours: 'Lunes a viernes, 9:00 a. m. – 6:00 p. m. (horario estimado según el tipo de consultorio; no está publicado en el Instagram del cliente — confirmar el horario real con Zurident Kids antes de publicar el sitio)',
  instagramUrl: 'https://www.instagram.com/zurident_kids/',
  facebookUrl: 'https://www.facebook.com/zuridentkids', // Por confirmar url directa de página
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    id: 1,
    tag: 'Especialidad',
    title: 'Especialista, no generalista',
    description:
      'La Dra. Estefanía Zurita Pozo es odontopediatra: cada tratamiento está pensado específicamente para dientes en crecimiento, no adaptado de la odontología de adultos.',
    iconName: 'Award',
  },
  {
    id: 2,
    tag: 'Experiencia Lúdica',
    title: 'Un consultorio hecho para niños',
    description:
      'Sillones, murales y hasta un compañero de consultorio (¡hola, Pepito! 🦒) diseñados para que tu peque llegue con curiosidad, no con miedo.',
    iconName: 'Sparkles',
  },
  {
    id: 3,
    tag: 'Salud Integral',
    title: 'Prevención desde el primer diente',
    description:
      'Desde consejería en lactancia materna hasta el seguimiento de la caída de los dientes de leche: cuidamos la salud bucal de tu hijo/a en cada etapa.',
    iconName: 'ShieldCheck',
  },
];

export const SERVICES_ITEMS: ServiceItem[] = [
  {
    id: 'valoracion',
    title: 'Primera valoración odontopediátrica',
    description:
      'Un primer acercamiento pensado para que tu peque conozca el consultorio sin presión, con revisión completa de su salud bucal.',
    iconName: 'Smile',
  },
  {
    id: 'chequeos',
    title: 'Chequeos preventivos cada 6 meses',
    description:
      'El seguimiento constante es la mejor forma de evitar tratamientos más complejos —y más costosos— más adelante.',
    iconName: 'CalendarCheck',
  },
  {
    id: 'restauraciones',
    title: 'Restauraciones en dientes temporales',
    description:
      'Reparamos y protegemos los dientes de leche dañados para que cumplan su función completa: masticar, hablar y guiar la salida de los dientes definitivos.',
    iconName: 'Shield',
  },
  {
    id: 'educacion',
    title: 'Educación en higiene dental para niños',
    description:
      'Enseñamos a los peques (y a sus papás) la técnica correcta de cepillado y la cantidad ideal de pasta dental para cada edad.',
    iconName: 'Sparkles',
  },
  {
    id: 'lactancia',
    title: 'Consejería en lactancia materna',
    description:
      'Acompañamos a las mamás desde los primeros meses, porque la salud bucal de tu bebé empieza antes de su primer diente.',
    iconName: 'Heart',
  },
  {
    id: 'erupcion',
    title: 'Seguimiento de erupción y caída de dientes de leche',
    description:
      'Monitoreamos cada etapa para anticipar cualquier irregularidad en la llegada de los dientes definitivos.',
    iconName: 'Activity',
  },
];

export const CLINIC_VALUES: ClinicValue[] = [
  {
    title: 'Especialización',
    description: 'Atención exclusiva odontopediátrica adaptada a la anatomía y psicología infantil.',
    iconName: 'GraduationCap',
  },
  {
    title: 'Cercanía',
    description: 'Trato maternal y afectivo para que los niños y sus padres se sientan en confianza.',
    iconName: 'Heart',
  },
  {
    title: 'Prevención',
    description: 'Cultura proactiva de cuidado bucal desde el embarazo y los primeros meses de vida.',
    iconName: 'CalendarCheck',
  },
  {
    title: 'Ambiente sin miedo',
    description: 'Espacios alegres con sillón adaptado, murales y la compañía de Pepito.',
    iconName: 'Smile',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    patientName: 'Familia Zurident (Espacio Reservado)',
    treatment: 'Primera valoración',
    comment:
      'Espacio reservado para testimonio real — el cliente debe proporcionar nombre/inicial del paciente o acudiente, tratamiento recibido, comentario y autorización de uso de imagen.',
    rating: 5,
    isPlaceholder: true,
  },
  {
    id: 't2',
    patientName: 'Papá de Santo Domingo (Espacio Reservado)',
    treatment: 'Chequeo preventivo',
    comment:
      'Espacio reservado para testimonio real — el cliente debe proporcionar nombre/inicial del paciente o acudiente, tratamiento recibido, comentario y autorización de uso de imagen.',
    rating: 5,
    isPlaceholder: true,
  },
  {
    id: 't3',
    patientName: 'Mamá primeriza (Espacio Reservado)',
    treatment: 'Consejería en lactancia materna',
    comment:
      'Espacio reservado para testimonio real — el cliente debe proporcionar nombre/inicial del paciente o acudiente, tratamiento recibido, comentario y autorización de uso de imagen.',
    rating: 5,
    isPlaceholder: true,
  },
  {
    id: 't4',
    patientName: 'Peque valiente (Espacio Reservado)',
    treatment: 'Restauración en diente temporal',
    comment:
      'Espacio reservado para testimonio real — el cliente debe proporcionar nombre/inicial del paciente o acudiente, tratamiento recibido, comentario y autorización de uso de imagen.',
    rating: 5,
    isPlaceholder: true,
  },
];

export const SERVICE_OPTIONS = [
  'Primera valoración',
  'Chequeo preventivo',
  'Restauración de diente temporal',
  'Consejería en lactancia materna',
  'Otro',
] as const;
