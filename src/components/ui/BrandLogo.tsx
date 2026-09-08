import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const iconDimensions = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
  }[size];

  const titleSize = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
  }[size];

  const kidsSize = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  }[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Isotype: Blue circle + friendly smiling tooth */}
      <div
        className={`${iconDimensions} rounded-full bg-[#1580C4] p-1.5 flex items-center justify-center shadow-sm shrink-0 transition-transform duration-300 hover:scale-105`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
          <path
            d="M32 12 C24 12 16 16 16 25 C16 33 20 39 21 47 C22 53 25 58 28 58 C31 58 31 49 32 49 C33 49 33 58 36 58 C39 58 42 53 43 47 C44 39 48 33 48 25 C48 16 40 12 32 12 Z"
            fill="#FFFFFF"
          />
          <circle cx="26" cy="27" r="2.5" fill="#1C2B39" />
          <circle cx="38" cy="27" r="2.5" fill="#1C2B39" />
          <circle cx="27" cy="26" r="0.8" fill="#FFFFFF" />
          <circle cx="39" cy="26" r="0.8" fill="#FFFFFF" />
          <path
            d="M27 34 C30 38 34 38 37 34"
            stroke="#EC1E7C"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="22" cy="32" r="2.2" fill="#FFA5C8" opacity="0.9" />
          <circle cx="42" cy="32" r="2.2" fill="#FFA5C8" opacity="0.9" />
          {/* Gold Sparkle */}
          <path
            d="M41 16 L42.5 19.5 L46 21 L42.5 22.5 L41 26 L39.5 22.5 L36 21 L39.5 19.5 Z"
            fill="#FFC629"
          />
        </svg>
      </div>

      {/* Typography Lockup */}
      <div className="flex flex-col leading-tight">
        <div className={`font-heading font-bold tracking-tight ${titleSize} flex items-center`}>
          <span className="text-[#1580C4]">Zuri</span>
          <span className="text-[#EC1E7C]">Dent</span>
          <span className={`ml-1.5 font-extrabold tracking-wider ${kidsSize} flex items-center`}>
            <span className="text-[#FFC629]">K</span>
            <span className="text-[#3CB878]">I</span>
            <span className="text-[#EC1E7C]">D</span>
            <span className="text-[#1580C4]">S</span>
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#1C2B39]/70 tracking-wider uppercase -mt-0.5">
            Odontopediatría
          </span>
        )}
      </div>
    </div>
  );
};
