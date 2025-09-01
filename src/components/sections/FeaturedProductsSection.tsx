'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ALL_PRODUCTS } from '@/lib/constants';
import { ProductCard } from '../ui/ProductCard';

const categories = ['Random', 'Cats', 'Dogs', 'Fish', 'Birds'];

const shuffleAndSlice = (array: typeof ALL_PRODUCTS, count: number) => {
  return [...array].sort(() => 0.5 - Math.random()).slice(0, count);
};

const FeaturedProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState('Random');
  const [heartedItems, setHeartedItems] = useState<Set<number>>(new Set());

  const [displayedProducts, setDisplayedProducts] = useState(() =>
    shuffleAndSlice(ALL_PRODUCTS, 3)
  );

  const handleHeartToggle = (productId: number) => {
    setHeartedItems((prevHearted) => {
      const newHearted = new Set(prevHearted);
      if (newHearted.has(productId)) {
        newHearted.delete(productId);
      } else {
        newHearted.add(productId);
      }
      return newHearted;
    });
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === 'Random') {
      setDisplayedProducts(shuffleAndSlice(ALL_PRODUCTS, 3));
    } else {
      const filtered = ALL_PRODUCTS.filter((p) => p.category === category);
      setDisplayedProducts(filtered);
    }
  };

  return (
    <section id="shop" className="py-24 bg-gray-50">
      <Container size="custom">
        <div className="border-b border-black/20 pb-4 mb-12">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <h2 className="text-4xl font-medium text-slate-900 flex items-center gap-4">
                <span className="text-3xl">🐾</span> Featured Products
              </h2>
              <div className="w-full max-w-md md:w-auto grid grid-cols-6 md:flex md:flex-wrap md:justify-center items-center gap-2 p-2 bg-gray-200/70 rounded-2xl">
                {categories.map((cat, index) => (
                  <motion.button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`relative w-full md:w-auto px-4 py-3 text-sm font-semibold rounded-xl transition-colors md:col-span-auto ${
                      index < 3 ? 'col-span-2' : 'col-span-3'
                    } ${
                      activeCategory === cat
                        ? 'text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {activeCategory === cat && (
                      <motion.div
                        layoutId="category-pill"
                        className="absolute inset-0 bg-gradient-to-r from-[#101828] to-[#233250] rounded-xl"
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isHearted={heartedItems.has(product.id)}
                onHeartToggle={handleHeartToggle}
              />
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center text-center text-gray-500 h-full min-h-[24rem]">
              <span className="text-4xl mb-4">🐾</span>
              <p className="text-xl font-medium">
                No products found in this category yet!
              </p>
              <p>Check back soon for new arrivals.</p>
            </div>
          )}
        </div>

        <ScrollReveal>
          <div className="mt-16 text-center">
            <motion.a
              href="#"
              className="inline-flex items-center gap-2 text-lg font-semibold text-gray-900 group"
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
