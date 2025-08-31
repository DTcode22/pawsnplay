'use client';

import { motion } from 'framer-motion';
import { Mail, MessageCircle, MapPin, Phone } from 'lucide-react';
import { Container } from '../ui/Container';
import { ScrollReveal } from '../animations/ScrollReveal';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Our friendly team is here to help.',
    contact: 'hello@pawsnplay.com',
  },
  {
    icon: MapPin,
    title: 'Office',
    description: 'Come say hello at our office HQ.',
    contact: '123 Cuddle Street, Petville, PV 45678',
  },
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'We are available 24/7 for you.',
    contact: 'Start a chat now',
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Mon-Fri from 8am to 5pm.',
    contact: '+1 (555) 000-0000',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <Container size="custom">
        <div className="border-b-2 border-white/20 pb-4 mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
              <span className="text-2xl">🐾</span> Get in Touch
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal direction="left" className="flex flex-col gap-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-start"
                  whileHover={{ y: -5 }}
                >
                  <div className="mb-4">
                    <item.icon className="w-6 h-6 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-400 mt-1 mb-3">{item.description}</p>
                  <a
                    href="#"
                    className="font-medium text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    {item.contact}
                  </a>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <form action="#" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm text-gray-900 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm text-gray-900 focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm text-gray-900 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm text-gray-900 focus:ring-purple-500 focus:border-purple-500"
                  ></textarea>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="agree"
                      name="agree"
                      type="checkbox"
                      className="focus:ring-purple-500 h-4 w-4 text-purple-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="agree"
                      className="font-medium text-gray-700"
                    >
                      You agree to our friendly privacy policy.
                    </label>
                  </div>
                </div>
                <div>
                  <motion.button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send message
                  </motion.button>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
