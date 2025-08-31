'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode } from 'react';

interface ParallaxBackgroundProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxBackground = ({
  children,
  speed = 0.5,
  className = '',
}: ParallaxBackgroundProps) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 1000 * speed]);

  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  );
};
