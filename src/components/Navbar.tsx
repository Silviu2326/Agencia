import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Menu, X, ChevronDown, Clock } from 'lucide-react';
import GlassCard from './GlassCard';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimer, setDropdownTimer] = useState<NodeJS.Timeout | null>(
    null
  );
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Servicios',
      path: '/services',
      dropdownItems: [
        {
          name: 'Desarrollo Web',
          path: '/services#web',
          icon: <Code2 className="h-4 w-4" />,
          description: 'Sitios web modernos y responsivos',
        },
        {
          name: 'Landing Pages',
          path: '/services#landing',
          icon: <Code2 className="h-4 w-4" />,
          description: 'Páginas de alto impacto y conversión',
        },
        {
          name: 'Aplicaciones',
          path: '/services#apps',
          icon: <Code2 className="h-4 w-4" />,
          description: 'Soluciones web personalizadas',
        },
        {
          name: 'E-commerce',
          path: '/services#ecommerce',
          icon: <Code2 className="h-4 w-4" />,
          description: 'Tiendas online optimizadas',
        },
      ],
    },
    { name: 'Portafolio', path: '/portfolio' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Blog', path: '/blog' },
  ];

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
      setDropdownTimer(null);
    }
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    const timer = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setDropdownTimer(timer);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gray-900/90 backdrop-blur-xl border-b border-gray-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group relative">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Code2 className="h-10 w-10 text-primary-400 transition-transform duration-300" />
              <div className="absolute inset-0 bg-primary-400/20 blur-xl rounded-full animate-pulse-slow" />
            </motion.div>
            <motion.span
              className="font-bold text-2xl bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Webcraft
            </motion.span>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(link.name)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-300 hover:text-primary-400 flex items-center space-x-1 group ${
                    location.pathname === link.path
                      ? 'text-primary-400'
                      : 'text-gray-300'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.dropdownItems && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        activeDropdown === link.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </Link>

                {/* Enhanced Dropdown Menu */}
                {link.dropdownItems && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64"
                  >
                    <div className="relative py-3">
                      {/* Decorative Elements */}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                        <div className="w-2 h-2 bg-gray-900/95 rotate-45 border-t border-l border-gray-700/50" />
                      </div>

                      <GlassCard className="py-2 bg-gray-900/95 border-gray-700/50">
                        <div className="relative">
                          {link.dropdownItems.map((item, index) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              className="block relative group"
                            >
                              <motion.div
                                initial={{ x: -10, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="px-4 py-3 hover:bg-gray-800/50 transition-colors relative z-10 flex items-start space-x-3"
                              >
                                <div className="p-2 rounded-lg bg-gray-800/50 text-primary-400 group-hover:text-accent-400 transition-colors">
                                  {item.icon}
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-gray-200 group-hover:text-primary-400 transition-colors">
                                    {item.name}
                                  </div>
                                  <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                                    {item.description}
                                  </div>
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </motion.div>

                              {/* Separator */}
                              {index < link.dropdownItems.length - 1 && (
                                <div className="mx-4 border-t border-gray-700/30" />
                              )}
                            </Link>
                          ))}
                        </div>
                      </GlassCard>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}

            {/* Promo Button */}
            <Link
              to="/promo"
              className="relative group overflow-hidden px-6 py-2.5 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Clock className="h-4 w-4" />
              <span className="relative z-10">Oferta Especial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="relative group overflow-hidden px-6 py-2.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Empezar Proyecto</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-400 to-primary-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800 transition-colors"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6 text-primary-400" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 text-primary-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800"
          >
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={link.path}
                  className="relative"
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      location.pathname === link.path
                        ? 'text-primary-400 bg-gray-800'
                        : 'text-gray-300 hover:text-primary-400 hover:bg-gray-800'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>

                  {/* Mobile Dropdown Items */}
                  {link.dropdownItems && (
                    <div className="pl-4 space-y-1">
                      {link.dropdownItems.map((item) => (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="block px-4 py-2 rounded-lg text-sm text-gray-400 hover:text-primary-400 hover:bg-gray-800/50 transition-all duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="p-1.5 rounded-lg bg-gray-800/50 text-primary-400">
                              {item.icon}
                            </div>
                            <div>
                              <div className="font-medium text-gray-300">
                                {item.name}
                              </div>
                              <div className="text-xs text-gray-400">
                                {item.description}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Mobile Promo Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="p-4"
              >
                <Link
                  to="/promo"
                  className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Clock className="h-4 w-4" />
                  Oferta Especial
                </Link>
              </motion.div>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.1 }}
                className="p-4"
              >
                <Link
                  to="/contact"
                  className="block w-full text-center px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Empezar Proyecto
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
