'use client';

import { motion } from 'framer-motion';
import { Twitter, Linkedin, Dribbble } from 'lucide-react';
import { Container } from '../ui/Container';
import { ScrollReveal } from '../animations/ScrollReveal';

const teamMembers = [
  {
    name: 'Olivia Rhye',
    role: 'Founder & CEO',
    image: '/images/team-1.png',
  },
  {
    name: 'Phoenix Baker',
    role: 'Head of Grooming',
    image: '/images/team-2.png',
  },
  {
    name: 'Lana Steiner',
    role: 'Lead Veterinarian',
    image: '/images/team-3.png',
  },
  {
    name: 'Demi Wilkinson',
    role: 'Community Manager',
    image: '/images/team-4.png',
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-gray-50">
      <Container size="custom">
        <div className="border-b-2 border-gray-200 pb-4 mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-4">
              <span className="text-2xl">🐾</span> Our Team
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 0.1}>
              <div className="text-center">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-medium">{member.role}</p>
                <div className="flex justify-center gap-4 mt-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <Twitter />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <Linkedin />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <Dribbble />
                  </motion.a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamSection;
