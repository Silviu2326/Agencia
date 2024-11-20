import React from 'react';
import { motion } from 'framer-motion';

const AnimatedHeroBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center mix-blend-overlay" />
      </div>

      {/* Animated gradient orbs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-secondary-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            top: `${20 + i * 30}%`,
            left: `${20 + i * 20}%`,
            width: '40rem',
            height: '40rem',
            opacity: 0.3 - i * 0.05,
          }}
        />
      ))}

      {/* Animated lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scaleX: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
    </div>
  );
};

export default AnimatedHeroBackground;