'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '../animations/ScrollReveal';

interface ServiceCardProps {
  name: string;
  image: string;
  className?: string;
}

export const ServiceCard = ({
  name,
  image,
  className = '',
}: ServiceCardProps) => (
  <ScrollReveal className={`relative rounded-xl overflow-hidden ${className}`}>
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
          rest: { scale: 1 },
          hover: { scale: 1.1 },
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      />
      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-300" />
      <motion.h3
        className="absolute inset-0 flex items-center justify-center md:text-5xl text-2xl font-bold text-white text-shadow"
        variants={{
          rest: { opacity: 0.9 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
      >
        {name}
      </motion.h3>
    </motion.div>
  </ScrollReveal>
);
