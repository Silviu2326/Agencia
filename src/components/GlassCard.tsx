import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`backdrop-blur-lg bg-white/10 rounded-2xl ${className}`}>
      {children}
    </div>
  );
};

export default GlassCard;