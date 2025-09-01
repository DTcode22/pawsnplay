export interface NavItem {
  name: string;
  href: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
}

export interface DropdownItem {
  name: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price: string;
  features: string[];
}

export interface ServiceItem {
  name: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface SocialLink {
  platform: 'twitter' | 'linkedin' | 'dribbble';
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: SocialLink[];
}
