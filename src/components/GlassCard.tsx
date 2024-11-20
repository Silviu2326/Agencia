import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hover = true,
}) => {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : undefined}
      className={`
        relative overflow-hidden rounded-2xl
        bg-gray-900/80 backdrop-blur-xl
        border border-gray-700/50
        shadow-lg shadow-black/10
        transition-all duration-300
        ${
          hover
            ? 'hover:shadow-xl hover:shadow-primary-500/10 hover:border-gray-600/50'
            : ''
        }
        ${className}
      `}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/10 to-gray-900/50" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-600/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800/50 to-transparent" />
      </div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassCard;
