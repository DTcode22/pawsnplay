import type { ServiceItem, TeamMember } from '@/types';

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
