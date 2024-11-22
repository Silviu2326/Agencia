import React from 'react';
import { motion } from 'framer-motion';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
}) => {
  const baseStyles =
    'relative overflow-hidden rounded-full font-medium transition-all duration-300';

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800
      hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5
      text-white
    `,
    secondary: `
      bg-white hover:bg-gray-50
      text-blue-600 hover:text-blue-700
      border border-blue-200 hover:border-blue-300
      hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5
    `,
    outline: `
      bg-transparent hover:bg-blue-50
      text-blue-600 hover:text-blue-700
      border-2 border-blue-600
      hover:-translate-y-0.5
    `,
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      )}
    </motion.button>
  );
};

export default GradientButton;
