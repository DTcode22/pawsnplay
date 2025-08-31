'use client';

import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { ScrollReveal } from '../animations/ScrollReveal';

const services = [
  {
    name: 'Grooming',
    image: '/images/service-grooming.png',
    grid: 'md:col-span-1',
  },
  {
    name: 'Boarding',
    image: '/images/service-boarding.png',
    grid: 'md:col-span-1',
  },
  {
    name: 'Adoption',
    image: '/images/service-adoption.png',
    grid: 'md:col-span-1 md:row-span-2',
  },
  {
    name: 'Veterinary',
    image: '/images/service-veterinary.png',
    grid: 'md:col-span-2',
  },
];

const ServiceCard = ({
  name,
  image,
  grid,
}: {
  name: string;
  image: string;
  grid: string;
}) => (
  <ScrollReveal
    className={`relative rounded-2xl overflow-hidden shadow-lg h-64 md:h-auto ${grid}`}
  >
    <motion.div
      className="group w-full h-full"
      whileHover="hover"
      initial="rest"
    >
      <motion.img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
        variants={{
          rest: { scale: 1.05 },
          hover: { scale: 1.15 },
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
      <motion.h3
        className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white text-shadow"
        variants={{
          rest: { letterSpacing: '0.05em', opacity: 0.9 },
          hover: { letterSpacing: '0.1em', opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
      >
        {name}
      </motion.h3>
    </motion.div>
  </ScrollReveal>
);

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <Container>
        <div className="border-b-2 border-gray-200 pb-4 mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-4">
              <span className="text-2xl">🐾</span> Our Services
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:auto-rows-[18rem]">
          {services.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
