'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TypewriterProps {
    words: string[];
    className?: string;
    delay?: number; // How long to wait before deleting
    typingSpeed?: number;
    deletingSpeed?: number;
}

export default function Typewriter({
    words,
    className = '',
    delay = 2000,
    typingSpeed = 100,
    deletingSpeed = 50
}: TypewriterProps) {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor logic
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    // Main typing/deleting logic
    useEffect(() => {
        if (index === words.length) return;

        if (subIndex === words[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), delay);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? deletingSpeed : typingSpeed, Math.random() * 100));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, delay, typingSpeed, deletingSpeed]);

    return (
        <div className={`inline-flex items-center ${className}`}>
            <span className="whitespace-nowrap">
                {words[index].substring(0, subIndex)}
            </span>
            <motion.span
                animate={{ opacity: blink ? 1 : 0 }}
                transition={{ duration: 0 }}
                className="ml-1 text-primary font-bold"
            >
                _
            </motion.span>
        </div>
    );
}
