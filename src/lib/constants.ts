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
  { name: 'Shop', href: '#shop', hasDropdown: false },
  { name: 'Blog', href: '#video', hasDropdown: false },
  { name: 'Contact', href: '#contact', hasDropdown: false },
];

export const BRAND = {
  name: "Paws n' Play",
  logo: '🐾',
  tagline: "Your Pet's Best Friend",
};

export const ALL_PRODUCTS = [
  {
    name: 'Gourmet Salmon Bites',
    category: 'Cats',
    image: '/images/shop/cat1.png',
  },
  {
    name: 'Organic Beef Chunks',
    category: 'Dogs',
    image: '/images/shop/organic-beef-chunks.jpg',
  },
  {
    name: 'Arctic Krill Flakes',
    category: 'Fish',
    image: '/images/shop/arctic-krill-flakes.jpg',
  },
  {
    name: 'Plush Feather Wand',
    category: 'Cats',
    image: '/images/shop/plush-feather-wand.jpg',
  },
  {
    name: 'Durable Chew Toy',
    category: 'Dogs',
    image: '/images/shop/durable-chew-toy.jpg',
  },
  {
    name: 'Sunny Seed Mix',
    category: 'Birds',
    image: '/images/shop/sunny-seed-mix.jpg',
  },
  {
    name: 'Silent Spinner Wheel',
    category: 'Random',
    image: '/images/shop/silent-spinner-wheel.jpg',
  },
  {
    name: 'Cozy Cat Tree',
    category: 'Cats',
    image: '/images/shop/cozy-cat-tree.jpg',
  },
  {
    name: 'Tough Rope Tug',
    category: 'Dogs',
    image: '/images/shop/tough-rope-tug.jpg',
  },
];

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
