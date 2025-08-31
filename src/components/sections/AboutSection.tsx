'use client';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { ScrollReveal } from '../animations/ScrollReveal';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <Container size="custom">
        <div className="border-b-2 border-gray-200 pb-4 mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-4">
              <span className="text-2xl">🐾</span> About Us
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal
            direction="left"
            className="prose prose-lg text-gray-600 max-w-none"
          >
            <p>
              At Paws n’ Play, our journey began with a simple yet profound love
              for animals. Inspired by the unwavering companionship and joy they
              bring to our lives, we embarked on a mission to create a haven
              where pets and their owners alike could experience unparalleled
              happiness and care.
            </p>
            <p>
              Driven by our passion for animal welfare, we hand-select each
              product and service with meticulous attention to quality and
              sustainability. From nutritious food and enriching toys to expert
              grooming and healthcare, every offering is carefully curated.
            </p>
            <p>
              Join us in our mission to create a world where every pet is
              cherished, every need is met, and every tail wags with happiness.
              Welcome to Paws n’ Play, where pets are family, and love knows no
              bounds.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="relative h-[500px] w-full">
              <motion.div
                className="absolute top-0 left-0 w-[70%] h-[80%] rounded-2xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.03, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/about-1.png"
                  alt="Happy dog with owner"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute bottom-0 right-0 w-[60%] h-[65%] rounded-2xl shadow-2xl overflow-hidden border-8 border-white"
                whileHover={{ scale: 1.03, zIndex: 10 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/images/about-2.png"
                  alt="Playful kitten"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
