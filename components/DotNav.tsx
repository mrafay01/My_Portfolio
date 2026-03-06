'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Roadmap' },
    { id: 'projects', label: 'Works' },
    { id: 'contact', label: 'Signal' },
];

export default function DotNav() {
    const [activeSection, setActiveSection] = useState('about');
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }

            // Special case for bottom of page
            if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
                setActiveSection('contact');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6">
            {sections.map((section) => (
                <div
                    key={section.id}
                    className="group relative flex items-center"
                    onMouseEnter={() => setHoveredSection(section.id)}
                    onMouseLeave={() => setHoveredSection(null)}
                >
                    {/* Section Label */}
                    <AnimatePresence>
                        {(hoveredSection === section.id || activeSection === section.id) && (
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 10 }}
                                exit={{ opacity: 0, x: -10 }}
                                className="absolute left-4 text-[9px] font-black uppercase tracking-[0.3em] text-primary whitespace-nowrap pointer-events-none"
                            >
                                {section.label}
                            </motion.span>
                        )}
                    </AnimatePresence>

                    {/* Dot */}
                    <button
                        onClick={() => scrollToSection(section.id)}
                        className="interactive relative w-3 h-3 flex items-center justify-center"
                    >
                        <motion.div
                            animate={{
                                scale: activeSection === section.id ? 1.5 : 1,
                                backgroundColor: activeSection === section.id ? 'var(--primary)' : 'rgba(255, 255, 255, 0.1)',
                                boxShadow: activeSection === section.id ? '0 0 10px var(--primary)' : 'none',
                            }}
                            className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
                        />
                        {activeSection === section.id && (
                            <motion.div
                                layoutId="activeDotRing"
                                className="absolute inset-0 border border-primary rounded-full"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </button>
                </div>
            ))}
        </nav>
    );
}
