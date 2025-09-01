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
    id: 1,
    name: 'Gourmet Salmon Bites',
    category: 'Cats',
    image: '/images/shop/cat1.webp',
    price: '15.99',
    description: 'Premium, grain-free salmon bites for a shiny coat.',
  },
  {
    id: 2,
    name: 'Organic Beef Chunks',
    category: 'Dogs',
    image: '/images/shop/organic-beef-chunks.webp',
    price: '22.50',
    description: 'Hearty, organic beef chunks for strong muscles.',
  },
  {
    id: 3,
    name: 'Arctic Krill Flakes',
    category: 'Fish',
    image: '/images/shop/arctic-krill-flakes.webp',
    price: '9.99',
    description: 'Color-enhancing krill flakes for vibrant aquarium life.',
  },
  {
    id: 4,
    name: 'Plush Feather Wand',
    category: 'Cats',
    image: '/images/shop/plush-feather-wand.webp',
    price: '7.00',
    description:
      "Interactive feather wand to engage your cat's hunting instincts.",
  },
  {
    id: 5,
    name: 'Durable Chew Toy',
    category: 'Dogs',
    image: '/images/shop/durable-chew-toy.webp',
    price: '12.99',
    description:
      'Built to last, this chew toy is perfect for aggressive chewers.',
  },
  {
    id: 6,
    name: 'Sunny Seed Mix',
    category: 'Birds',
    image: '/images/shop/sunny-seed-mix.webp',
    price: '11.25',
    description:
      'A nutritious and delicious seed mix for happy, healthy birds.',
  },
  {
    id: 7,
    name: 'Cozy Cat Tree',
    category: 'Cats',
    image: '/images/shop/cozy-cat-tree.webp',
    price: '79.99',
    description:
      'Multi-level cat tree with scratching posts and a comfy hideaway.',
  },
  {
    id: 8,
    name: 'Tough Rope Tug',
    category: 'Dogs',
    image: '/images/shop/tough-rope-tug.webp',
    price: '14.50',
    description: 'Durable rope toy for games of tug-of-war with your dog.',
  },
];

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
