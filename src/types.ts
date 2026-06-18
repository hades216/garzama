/**
 * Type declarations for V.L. Garza Roofing & Remodeling
 */

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  materials: string[];
  warranty: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: 'Roofing' | 'Remodeling' | 'Storm Damage';
  location: string;
  imageUrl: string;
  stats: {
    year: string;
    duration: string;
    scope: string;
  };
  highlight: string;
}

export interface Testimonial {
  id: string;
  initials: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
  projectType: string;
}

export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  projectDetails: string;
}
