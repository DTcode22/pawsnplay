'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import Image from 'next/image';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-dog-cropped2.webp"
          alt="Happy dog sitting in a field"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: 'top center' }}
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-4 h-4 bg-white/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-40 right-40 w-6 h-6 bg-white/10 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      <Container
        className="relative z-10 flex flex-col justify-center h-full"
        size="custom"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
        >
          <div className="max-w-[630px]">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-normal leading-tight tracking-wide text-white mb-5"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  letterSpacing: '0.02em',
                  lineHeight: '100%',
                }}
              >
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Pawsitively Perfect:
                </motion.span>
                <br />
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Where Every Pet&apos;s
                </motion.span>
                <br />
                <motion.span
                  className="inline-block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Dream Comes True!
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-base md:text-lg font-semibold leading-relaxed text-white max-w-[630px] opacity-95"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Welcome to Paws n&apos; Play, the ultimate destination for pet
                lovers! Explore a world of tail-wagging joy and furry
                companionship with our wide range of products and services. From
                pampering essentials to playful toys, we&apos;re here to make
                every moment with your pet pawsitively perfect!
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
            >
              <motion.button
                className="group relative flex items-center justify-center gap-3 px-7 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-full transition-all duration-300 overflow-hidden hover:bg-white hover:text-gray-900 hover:border-white hover:shadow-2xl"
                style={{ fontFamily: 'Inter, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ borderRadius: '50px' }}
                />
                <span className="relative z-10 group-hover:text-gray-900 transition-colors duration-300">
                  Get Started
                </span>
                <motion.div
                  className="relative z-10 text-2xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  🐾
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                  style={{ borderRadius: '50px' }}
                />
              </motion.button>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
                  whileHover={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                  transition={{ duration: 0.3 }}
                >
                  <Play className="w-5 h-5 ml-1" fill="currentColor" />
                </motion.div>
                <span className="font-medium">Watch Our Story</span>
              </motion.button>

              <motion.div
                className="h-8 w-px bg-white/30"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              />

              <motion.div
                className="text-white/60 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                <div className="font-medium">Trusted by 10,000+ pet owners</div>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-yellow-400"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 1.8 + i * 0.1 }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                  <span className="ml-2 text-xs">4.9/5 rating</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Container>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.div
          className="flex flex-col items-center text-white/60 cursor-pointer hover:text-white/80 transition-colors duration-300"
          onClick={() => {
            const nextSection = document.querySelector('#shop');
            nextSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ArrowRight className="w-5 h-5 rotate-90" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
