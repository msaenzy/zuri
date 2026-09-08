// Centralizador de rutas e importaciones de imágenes para Zurident Kids
// Aquí puedes cambiar o enlazar tus archivos locales de src/assets/img/

import draEstefaniaLocal from '../assets/img/equipo/dra-estefania-zurita.png';
import pepitoSvg from '../assets/img/mascota/pepito-jirafa.svg';
import logoSvg from '../assets/img/logo/logo.svg';

export const IMAGES = {
  // Imagen de la Dra. Estefanía Zurita Pozo
  draEstefania: {
    src: draEstefaniaLocal,
    fallback: 'https://images.unsplash.com/photo-1594824813576-2e8696b9f291?auto=format&fit=crop&w=800&q=80',
    alt: 'Dra. Estefanía Zurita Pozo, especialista en Odontopediatría en Zurident Kids',
  },

  // Foto del consultorio (sillón dental azul infantil)
  consultorio: {
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=900&q=80',
    alt: 'Consultorio odontopediátrico Zurident Kids con sillón dental infantil adaptado',
  },

  // Mascota Pepito jirafa
  pepito: {
    src: pepitoSvg,
    alt: 'Mascota oficial Pepito jirafa de Zurident Kids',
  },

  // Logotipo oficial
  logo: {
    src: logoSvg,
    alt: 'Logo oficial Zurident Kids',
  },
};
