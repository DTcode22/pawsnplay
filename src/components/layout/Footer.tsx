'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { FOOTER_LINKS, FOOTER_SOCIALS } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <Container size="custom" className="py-16">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pb-12 border-b border-white/20">
          <div>
            <h3 className="text-xl font-semibold">Join our newsletter</h3>
            <p className="text-gray-400 mt-1">
              Stay up to date with our latest news and products.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 bg-white/10 rounded-lg border border-white/20 focus:ring-2 focus:ring-yellow-400 focus:outline-none placeholder:text-gray-400"
            />
            <motion.button
              type="submit"
              className="w-full sm:w-auto bg-white text-gray-900 font-semibold px-5 py-2.5 rounded-lg whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-16">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 pr-8">
            <div className="flex items-center gap-3">
              <div className="text-2xl">🐾</div>
              <span className="text-xl font-bold">Paws n&apos; Play</span>
            </div>
            <p className="mt-4 text-gray-400">
              Where every pet&apos;s dream comes true.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold capitalize text-gray-300 mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/20">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Paws n&apos; Play. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {FOOTER_SOCIALS.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-gray-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
