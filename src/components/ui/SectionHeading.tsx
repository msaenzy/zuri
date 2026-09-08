import React from 'react';

interface SectionHeadingProps {
  id?: string;
  badge?: string;
  badgeColor?: 'blue' | 'pink' | 'mint' | 'yellow';
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  badge,
  badgeColor = 'blue',
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  const badgeBg = {
    blue: 'bg-[#1580C4]/10 text-[#1580C4]',
    pink: 'bg-[#EC1E7C]/10 text-[#EC1E7C]',
    mint: 'bg-[#3CB878]/15 text-[#2b8858]',
    yellow: 'bg-[#FFC629]/25 text-[#9a6a00]',
  }[badgeColor];

  return (
    <div
      id={id}
      className={`max-w-3xl mb-12 sm:mb-16 ${centered ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {badge && (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide uppercase mb-3.5 ${badgeBg}`}
        >
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#1C2B39] tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[#1C2B39]/80 font-normal max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
