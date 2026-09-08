import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_DEFAULT_URL } from '../../data/landingData';

interface WhatsAppButtonProps {
  id?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'navbar';
  children?: React.ReactNode;
  customUrl?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  id,
  className = '',
  variant = 'primary',
  children,
  customUrl,
}) => {
  const url = customUrl || WHATSAPP_DEFAULT_URL;

  const baseStyles =
    'inline-flex items-center justify-center gap-2.5 font-bold transition-all duration-200 active:scale-95 focus:outline-none focus:ring-4 select-none';

  const variants = {
    primary:
      'bg-[#EC1E7C] hover:bg-[#d8156e] text-white px-7 py-3.5 rounded-2xl shadow-md hover:shadow-lg focus:ring-[#EC1E7C]/30 text-base sm:text-lg',
    secondary:
      'bg-[#1580C4] hover:bg-[#116ba5] text-white px-6 py-3 rounded-2xl shadow-sm hover:shadow-md focus:ring-[#1580C4]/30 text-base',
    navbar:
      'bg-[#EC1E7C] hover:bg-[#d8156e] text-white px-4 sm:px-5 py-2.5 rounded-2xl text-sm sm:text-base shadow-sm hover:shadow focus:ring-[#EC1E7C]/25',
  };

  return (
    <a
      id={id}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <MessageCircle className="w-5 h-5 shrink-0 stroke-[2.2]" />
      <span>{children || 'Agendar por WhatsApp'}</span>
    </a>
  );
};
