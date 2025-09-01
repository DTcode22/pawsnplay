'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import { Container } from '../ui/Container';
import { ScrollReveal } from '../animations/ScrollReveal';
import { VideoModal } from '../ui/VideoModal';

const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const YOUTUBE_VIDEO_ID = 'e_2k4p3t9bQ'; // A cute pet video from YouTube

  return (
    <>
      <section id="video" className="py-24 bg-white">
        <Container size="custom">
          <div className="border-b-2 border-gray-200 pb-4 mb-16">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-4">
                <span className="text-2xl">🐾</span> Our Story
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal
              direction="left"
              className="prose prose-lg text-gray-600 max-w-none"
            >
              <h3 className="text-3xl font-semibold text-gray-900">
                A Tale of Wagging Tails
              </h3>
              <p>
                Discover the heart and soul behind Paws n&apos;Play. Our journey
                is one of passion, dedication, and an endless love for animals.
                Watch our story to see how a small dream grew into a thriving
                community for pet lovers everywhere.
              </p>
              <p>
                We believe every pet deserves the best. From our carefully
                selected products to our compassionate services, every aspect of
                Paws n&apos; Play is designed to enrich the lives of pets and
                their families.
              </p>
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="mt-4 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Video
              </motion.button>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src="/images/video-thumbnail.png"
                  alt="Video thumbnail of a happy dog"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <PlayCircle className="w-20 h-20 text-white/80" />
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoId={YOUTUBE_VIDEO_ID}
      />
    </>
  );
};

export default VideoSection;
