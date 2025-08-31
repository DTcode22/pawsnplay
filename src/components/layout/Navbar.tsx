'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: 'Services',
      hasDropdown: true,
      dropdownItems: ['Dog Walking', 'Pet Sitting', 'Grooming', 'Training'],
    },
    {
      name: 'About Us',
      hasDropdown: true,
      dropdownItems: ['Our Story', 'Team', 'Mission', 'Reviews'],
    },
    { name: 'Gallery', hasDropdown: false },
    { name: 'Blog', hasDropdown: false },
    { name: 'Contact', hasDropdown: false },
  ];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col justify-center items-center h-20">
        <div className="flex justify-between items-center w-full max-w-[1440px] px-8">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 text-2xl">🐾</div>
            <span
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              Paws n' Play
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <motion.button
                    className={`flex items-center gap-2 px-0 py-1 text-base font-semibold transition-colors cursor-pointer duration-300 hover:text-opacity-100 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                    onClick={() => handleDropdownToggle(item.name)}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                    <motion.div
                      animate={{
                        rotate: activeDropdown === item.name ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                ) : (
                  <motion.a
                    href={`#${item.name.toLowerCase().replace(' ', '-')}`}
                    className={`text-base font-semibold transition-colors duration-300 hover:text-opacity-100 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-gray-900'
                        : 'text-white/80 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.name}
                  </motion.a>
                )}

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.name && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <motion.a
                          key={dropdownItem}
                          href={`#${dropdownItem
                            .toLowerCase()
                            .replace(' ', '-')}`}
                          className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                          whileHover={{ x: 5 }}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropdownItem}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            className={`hidden lg:flex items-center justify-center px-5 py-2.5 text-base font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm ${
              isScrolled
                ? 'bg-gray-900 text-white hover:bg-gray-800'
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Service
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled
                ? 'text-gray-900 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    <motion.a
                      href={`#${item.name.toLowerCase().replace(' ', '-')}`}
                      className="block py-2 text-lg font-semibold text-gray-900 hover:text-gray-600 transition-colors duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.a>
                  </div>
                ))}
                <motion.button
                  className="w-full mt-4 bg-gray-900 text-white py-3 px-6 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Service
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
