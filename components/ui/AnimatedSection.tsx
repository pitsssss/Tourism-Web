'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fade-up' | 'fade-left' | 'fade-right' | 'fade';
  delay?: number;
  duration?: number;
}

export default function AnimatedSection({
  children,
  className = '',
  animationType = 'fade-up',
  delay = 0,
  duration = 0.6,
}: AnimatedSectionProps) {
  const animations = {
    'fade-up': {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
    },
    'fade-left': {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
    },
    'fade-right': {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
    },
    'fade': {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    },
  };

  const animationProps = animations[animationType];

  return (
    <motion.section
      initial={animationProps.initial}
      whileInView={animationProps.animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}