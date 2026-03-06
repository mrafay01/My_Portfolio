'use client';

import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className = '',
  style = {},
}: ScrollRevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.3,
  });

  const initialPosition = {
    up: { opacity: 0, y: 30 },
    left: { opacity: 0, x: -30 },
    right: { opacity: 0, x: 30 },
  };

  return (
    <motion.div
      ref={ref}
      initial={initialPosition[direction]}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : initialPosition[direction]}
      transition={{ duration, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
