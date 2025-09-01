'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Plus, Minus, CheckCircle } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  isHearted: boolean;
  onHeartToggle: (productId: number) => void;
}

export const ProductCard = ({
  product,
  isHearted,
  onHeartToggle,
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2500);
  };

  return (
    <div className="group relative block w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute bottom-24 right-1/3 bg-green-500/90 text-white px-3 py-1.5 rounded-full text-sm flex items-center gap-2 z-20 shadow-lg"
          >
            <CheckCircle size={18} />
            <span>Added to Cart!</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 p-6 flex flex-col text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex justify-between items-start">
          <p className="text-2xl font-bold">${product.price}</p>
          <motion.button
            onClick={() => onHeartToggle(product.id)}
            whileTap={{ scale: 0.9 }}
            className="focus:outline-none"
            aria-label={
              isHearted ? 'Remove from favorites' : 'Add to favorites'
            }
          >
            <Heart
              className={`w-7 h-7 cursor-pointer transition-all ${
                isHearted
                  ? 'fill-red-500 text-red-500'
                  : 'hover:fill-red-500/50 hover:text-red-500'
              }`}
            />
          </motion.button>
        </div>

        <div className="my-auto text-center">
          <h3 className="text-3xl font-bold">{product.name}</h3>
          <p className="mt-2 max-w-xs mx-auto text-white/90">
            {product.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <div className="flex items-center justify-between w-28 px-4 py-3 bg-gradient-to-r from-[#101828] to-[#233250] rounded-lg text-white font-bold shadow-[inset_-4px_-5px_4px_rgba(0,0,0,0.35),_inset_5px_4px_4px_rgba(0,0,0,0.25)]">
            <motion.button
              onClick={handleDecrement}
              whileTap={{ scale: 0.85 }}
              className="focus:outline-none"
            >
              <Minus size={20} />
            </motion.button>
            <span className="text-xl tabular-nums">{quantity}</span>
            <motion.button
              onClick={handleIncrement}
              whileTap={{ scale: 0.85 }}
              className="focus:outline-none"
            >
              <Plus size={20} />
            </motion.button>
          </div>
          <motion.button
            onClick={handleAddToCart}
            whileTap={{ scale: 0.95 }}
            className="flex-grow sm:flex-grow-0 w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#101828] to-[#233250] rounded-lg text-white text-lg font-semibold shadow-[5px_4px_4px_rgba(0,0,0,0.25)]"
          >
            Add to cart
          </motion.button>
        </div>
      </div>
    </div>
  );
};
