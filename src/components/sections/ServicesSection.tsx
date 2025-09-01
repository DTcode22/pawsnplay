'use client';

import { Container } from '@/components/ui/Container';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { ALL_SERVICES } from '@/lib/data';

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <Container size="custom">
        <div className="border-b border-black/20 pb-4 mb-8">
          <ScrollReveal>
            <h2 className="sm:text-4xl font-medium text-slate-900 flex items-center gap-4">
              <span className="text-3xl">🐾</span> Services
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4">
          {ALL_SERVICES.map((service, index) => {
            const isLastItem = index === ALL_SERVICES.length - 1;

            if (isLastItem) {
              return (
                <ServiceCard
                  key={service.name}
                  name={service.name}
                  image={service.image}
                  className="col-span-2 h-[200px] sm:h-[400px] lg:col-start-3 lg:row-start-1 lg:row-span-2 lg:h-full"
                />
              );
            }

            return (
              <ServiceCard
                key={service.name}
                name={service.name}
                image={service.image}
                className="aspect-square"
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
