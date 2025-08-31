'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { ScrollReveal } from '../animations/ScrollReveal';

const categories = ['Random', 'Cats', 'Dogs', 'Fish', 'Birds'];

const products = [
  {
    name: 'Gourmet Salmon Bites',
    category: 'Cats',
    image: '/images/featured-product-1.png',
  },
  {
    name: 'Organic Beef Chunks',
    category: 'Dogs',
    image: '/images/featured-product-2.png',
  },
  {
    name: 'Arctic Krill Flakes',
    category: 'Fish',
    image: '/images/featured-product-3.png',
  },
];

const FeaturedProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Random');

  return (
    <section id="shop" className="py-24 bg-gray-50">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Featured Products
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-2 p-1 bg-gray-200/70 rounded-full">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded-full transition-colors ${
                    activeCategory === cat
                      ? 'text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="category-pill"
                      className="absolute inset-0 bg-gray-900 rounded-full"
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.name} delay={index * 0.1}>
              <motion.div
                className="group relative block w-full h-96 rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ y: -8 }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {product.name}
                  </h3>
                  <p className="text-yellow-300 font-semibold mt-1">
                    For {product.category}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 text-center">
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 text-lg font-semibold text-gray-900"
              whileHover={{ gap: '12px' }}
            >
              View More{' '}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default FeaturedProductsSection;
