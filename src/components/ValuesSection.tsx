import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Coffee, Heart } from 'lucide-react';

const values = [
  {
    icon: <Brain className="h-8 w-8" />,
    title: 'Innovación',
    description: 'Siempre a la vanguardia de la tecnología',
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Pasión',
    description: 'Amamos lo que hacemos',
  },
  {
    icon: <Coffee className="h-8 w-8" />,
    title: 'Dedicación',
    description: 'Comprometidos con la excelencia',
  },
];

const ValuesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
              <div className="relative p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-primary-500/50 transition-all">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1 + index * 0.2 }}
                  className="mb-4 p-3 bg-primary-500/10 rounded-xl inline-block text-primary-400"
                >
                  {value.icon}
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                  className="text-xl font-semibold text-white mb-2"
                >
                  {value.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.2 }}
                  className="text-gray-400"
                >
                  {value.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;