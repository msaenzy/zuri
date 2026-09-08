export interface NavItem {
  label: string;
  href: string;
}

export interface WhyUsItem {
  id: number;
  title: string;
  description: string;
  tag: string;
  iconName: 'Award' | 'Sparkles' | 'ShieldCheck';
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Smile' | 'CalendarCheck' | 'Shield' | 'Sparkles' | 'Heart' | 'Activity';
}

export interface ClinicValue {
  title: string;
  description: string;
  iconName: 'GraduationCap' | 'Heart' | 'CalendarCheck' | 'Smile';
}

export interface TestimonialItem {
  id: string;
  patientName: string;
  treatment: string;
  comment: string;
  rating: number;
  isPlaceholder: boolean;
}

export interface ContactFormData {
  nombre: string;
  servicio: string;
  horario: string;
}
