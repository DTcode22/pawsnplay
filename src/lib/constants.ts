export const NAVIGATION_ITEMS = [
  {
    name: 'Services',
    href: '#services',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Dog Walking', href: '#dog-walking' },
      { name: 'Pet Sitting', href: '#pet-sitting' },
      { name: 'Grooming', href: '#grooming' },
      { name: 'Training', href: '#training' },
    ],
  },
  {
    name: 'About Us',
    href: '#about',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Our Story', href: '#our-story' },
      { name: 'Team', href: '#team' },
      { name: 'Mission', href: '#mission' },
      { name: 'Reviews', href: '#reviews' },
    ],
  },
  { name: 'Gallery', href: '#gallery', hasDropdown: false },
  { name: 'Blog', href: '#blog', hasDropdown: false },
  { name: 'Contact', href: '#contact', hasDropdown: false },
];

export const BRAND = {
  name: "Paws n' Play",
  logo: '🐾',
  tagline: "Your Pet's Best Friend",
};

// Animation variants
export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  staggerChildren: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};
