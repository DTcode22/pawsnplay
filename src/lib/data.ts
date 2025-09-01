import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
} from 'lucide-react';
import type {
  ServiceItem,
  TeamMember,
  RichTextContent,
  FooterLinkMap,
  FooterSocialLink,
} from '@/types';

export const ALL_SERVICES: ServiceItem[] = [
  {
    name: 'Grooming',
    image: '/images/services/service2.png',
  },
  {
    name: 'Boarding',
    image: '/images/services/service3.png',
  },
  {
    name: 'Veterinary',
    image: '/images/services/service4.png',
  },
  {
    name: 'Training',
    image: '/images/services/service1.png',
  },
  {
    name: 'Adoption',
    image: '/images/services/service5.png',
  },
];
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Olivia Rhye',
    role: 'Founder & CEO',
    image: '/images/team/member1.jpg',
    socials: [
      { platform: 'twitter', href: '#' },
      { platform: 'linkedin', href: '#' },
    ],
  },
  {
    name: 'Phoenix Baker',
    role: 'Head of Grooming',
    image: '/images/team/member2.jpg',
    socials: [
      { platform: 'twitter', href: '#' },
      { platform: 'linkedin', href: '#' },
    ],
  },
  {
    name: 'Lana Steiner',
    role: 'Lead Veterinarian',
    image: '/images/team/member3.jpg',
    socials: [
      { platform: 'twitter', href: '#' },
      { platform: 'linkedin', href: '#' },
      { platform: 'dribbble', href: '#' },
    ],
  },
  {
    name: 'Demi Wilkinson',
    role: 'Community Manager',
    image: '/images/team/member4.jpg',
    socials: [
      { platform: 'twitter', href: '#' },
      { platform: 'linkedin', href: '#' },
    ],
  },
];
export const RICH_TEXT_CONTENT: RichTextContent = {
  mainHeading: 'A Tale of Wagging Tails and Happy Paws',
  mainParagraph:
    "Our journey began with a simple yet profound love for animals. Inspired by the unwavering companionship and joy they bring to our lives, we embarked on a mission to create a haven where pets and their owners alike could experience unparalleled happiness and care. We're dedicated to fostering a community that celebrates the bond between pets and their human companions.",
  subHeading: 'Our Commitment to Quality',
  subParagraph:
    'Driven by our passion for animal welfare, we hand-select each product and service with meticulous attention to quality and sustainability. From nutritious food and enriching toys to expert grooming and healthcare, every offering is carefully curated to meet the unique needs of our beloved furry friends.',
};
export const FOOTER_LINKS: FooterLinkMap = {
  product: ['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing'],
  company: ['About us', 'Careers', 'Press', 'News', 'Contact'],
  resources: ['Blog', 'Events', 'Help centre', 'Tutorials', 'Support'],
  legal: ['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings'],
  social: ['Twitter', 'LinkedIn', 'Facebook', 'GitHub', 'YouTube'],
};

export const FOOTER_SOCIALS: FooterSocialLink[] = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];
