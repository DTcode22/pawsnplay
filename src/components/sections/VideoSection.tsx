'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { VideoModal } from '@/components/ui/VideoModal';
import { RICH_TEXT_CONTENT } from '@/lib/data';
import Image from 'next/image';

const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const YOUTUBE_VIDEO_ID = '7P4OxUN4Jd0';

  return (
    <>
      <section id="blog" className="py-24 bg-white">
        <Container size="custom">
          <div className="border-b border-black/20 pb-4 mb-16">
            <ScrollReveal>
              <h2 className="text-4xl font-medium text-slate-900 flex items-center gap-4">
                <span className="text-3xl">🐾</span> Blog
              </h2>
            </ScrollReveal>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 flex flex-col gap-10">
              <ScrollReveal>
                <h3 className="text-4xl font-semibold text-gray-900 tracking-tight">
                  {RICH_TEXT_CONTENT.mainHeading}
                </h3>
              </ScrollReveal>

              <div className="prose prose-xl text-gray-600 max-w-none space-y-8">
                <ScrollReveal delay={0.1}>
                  <p>{RICH_TEXT_CONTENT.mainParagraph}</p>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <h4 className="text-2xl font-semibold text-gray-900">
                    {RICH_TEXT_CONTENT.subHeading}
                  </h4>
                  <p>{RICH_TEXT_CONTENT.subParagraph}</p>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={0.3}>
                <motion.button
                  className="px-6 py-4 bg-gradient-to-r from-slate-900 to-slate-700 text-white font-semibold text-lg rounded-lg cursor-pointer shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read more
                </motion.button>
              </ScrollReveal>
            </div>

            <ScrollReveal className="w-full lg:w-1/2">
              <div
                className="h-[400px] sm:h-[600px] relative rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setIsModalOpen(true)}
              >
                <Image
                  src="/images/thumbnail.webp"
                  alt="Happy dog looking up"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/40 transition-colors">
                    <Play
                      className="w-12 h-12 sm:w-20 sm:h-20 text-white"
                      fill="currentColor"
                    />
                  </div>
                </div>
              </div>
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
