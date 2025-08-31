'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/HeroSection';
import { LoadingScreen } from '@/components/animations/LoadingScreen';
import { ScrollProgress } from '@/components/animations/ScrollProgress';

// Placeholder components - to be replaced with actual sections
const ServicesSection = () => (
  <section
    id="services"
    className="min-h-screen bg-gray-50 flex items-center justify-center"
  >
    <div className="text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
      <p className="text-gray-600">Premium pet care services coming soon...</p>
    </div>
  </section>
);

const AboutSection = () => (
  <section
    id="about"
    className="min-h-screen bg-white flex items-center justify-center"
  >
    <div className="text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
      <p className="text-gray-600">Learn about our mission and team...</p>
    </div>
  </section>
);

const VideoSection = () => (
  <section
    id="video"
    className="min-h-screen bg-gray-100 flex items-center justify-center"
  >
    <div className="text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
      <p className="text-gray-600">Watch our video presentation...</p>
    </div>
  </section>
);

const ContactSection = () => (
  <section
    id="contact"
    className="min-h-screen bg-gray-900 text-white flex items-center justify-center"
  >
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-300">Get in touch for premium pet care...</p>
    </div>
  </section>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
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
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Other Sections - Placeholders for now */}
      <ServicesSection />
      <AboutSection />
      <VideoSection />
      <ContactSection />
    </motion.main>
  );
}
