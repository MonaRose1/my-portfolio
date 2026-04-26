import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

/**
 * A reusable wrapper that adds a smooth scroll-triggered entry transition
 * (fade-in and slide-up) to any component.
 */
export const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  className = "", 
  id, 
  delay = 0 
}) => {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Custom smooth bezier
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
