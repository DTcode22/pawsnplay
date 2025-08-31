'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/HeroSection';
import { LoadingScreen } from '@/components/animations/LoadingScreen';
import { ScrollProgress } from '@/components/animations/ScrollProgress';
import FeaturedProductsSection from '@/components/sections/FeaturedProductsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import AboutSection from '@/components/sections/AboutSection';
import TeamSection from '@/components/sections/TeamsSection';
import VideoSection from '@/components/sections/VideoSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <ScrollProgress />
      <Navbar />
      <Hero />
      <FeaturedProductsSection />
      <ServicesSection />
      <AboutSection />
      <TeamSection />
      <VideoSection />
      <ContactSection />
      <Footer />
    </motion.main>
  );
}
