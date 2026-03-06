'use client';

import { motion } from 'framer-motion';

interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div className={`relative h-32 flex items-center justify-center overflow-hidden ${className}`}>
      {/* Animated gradient line */}
      <motion.div
        className="absolute inset-0 flex items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="h-px flex-1 bg-gradient-to-r from-transparent via-primary to-transparent"
          style={{
            boxShadow: '0 0 20px var(--primary)',
          }}
          animate={{
            boxShadow: [
              '0 0 10px var(--primary)',
              '0 0 20px var(--primary)',
              '0 0 10px var(--primary)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Center glow dot */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-primary z-10"
        style={{
          boxShadow: '0 0 10px var(--primary)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          boxShadow: [
            '0 0 5px var(--primary)',
            '0 0 15px var(--primary)',
            '0 0 5px var(--primary)',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </div>
  );
}
