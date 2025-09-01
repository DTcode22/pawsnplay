'use client';

import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <Container size="custom">
        <div className="border-b border-black/20 pb-4 mb-16">
          <ScrollReveal>
            <h2 className="text-4xl font-medium text-slate-900 flex items-center gap-4">
              <span className="text-3xl">🐾</span> About Us
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-16 items-center">
          <ScrollReveal>
            <div className="prose prose-xl text-slate-800 max-w-none space-y-6">
              <p>
                At Paws n’ Play, our journey began with a simple yet profound
                love for animals. Inspired by the unwavering companionship and
                joy they bring to our lives, we embarked on a mission to create
                a haven where pets and their owners alike could experience
                unparalleled happiness and care.
              </p>
              <p>
                Driven by our passion for animal welfare, we hand-select each
                product and service with meticulous attention to quality and
                sustainability. From nutritious food and enriching toys to
                expert grooming and healthcare, every offering is carefully
                curated.
              </p>
              <p>
                At Paws n&apos; Play, customer satisfaction isn&apos;t just a
                goal – it&apos;s our guiding principle. We go above and beyond
                to ensure every interaction leaves tails wagging and hearts
                smiling.
              </p>
              <p>
                Join us in our mission to create a world where every pet is
                cherished, every need is met, and every tail wags with
                happiness. Welcome to Paws n’ Play, where pets are family, and
                love knows no bounds.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="relative h-[550px] w-full">
              <div className="absolute top-0 left-[15%] w-[85%] h-[90%] rounded-xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/about/about1.webp"
                  alt="A delicious looking bowl of pet food"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 85vw, 42.5vw"
                />
              </div>
              <div className="absolute z-10 bottom-0 left-0 sm:w-[36%] w-[50%] h-[36%] rounded-2xl shadow-2xl overflow-hidden border-12 border-white">
                <Image
                  src="/images/about/about2.webp"
                  alt="A chew toy for pets"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 36vw, 18vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
