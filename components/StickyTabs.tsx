'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
    { id: 'about', label: 'Blueprint', fullLabel: 'Blueprint' },
    { id: 'experience', label: 'Roadmap', fullLabel: 'Roadmap' },
    { id: 'education', label: 'Academy', fullLabel: 'Academy' },
    { id: 'projects', label: 'Works', fullLabel: 'Portfolios' },
    { id: 'contact', label: 'Signal', fullLabel: 'Signal' },
];

export default function StickyTabs() {
    const [activeTab, setActiveTab] = useState('about');
    const [isSticky, setIsSticky] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            // 1. Check stickiness
            if (navRef.current) {
                const rect = navRef.current.getBoundingClientRect();
                setIsSticky(rect.top <= 0);
            }

            // 2. Determine active section using absolute document coordinates
            const threshold = 160; // Offset for better feel
            const scrollPosition = window.scrollY + threshold;

            // Handle Top level lock
            if (window.scrollY < 100) {
                setActiveTab('about');
                return;
            }

            let currentSection = 'about';

            tabs.forEach((tab) => {
                const element = document.getElementById(tab.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const absoluteTop = rect.top + window.scrollY;
                    if (scrollPosition >= absoluteTop) {
                        currentSection = tab.id;
                    }
                }
            });

            // Handle Absolute Bottom override (Strict)
            const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 50);
            if (isAtBottom) {
                currentSection = 'contact';
            }

            setActiveTab(currentSection);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial sync
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // Header offset
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav
            ref={navRef}
            className="sticky top-0 z-40 py-4 transition-all duration-500"
        >
            <div className={`
                w-full p-1.5 rounded-2xl border border-white/20 
                backdrop-blur-[20px] bg-white/[0.03]
                transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]
                ${isSticky ? 'border-primary/30 bg-black/40' : ''}
            `}>
                <div className="flex items-center justify-center w-full">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => scrollToSection(tab.id)}
                            className={`
                                relative flex-1 min-w-0 px-1 py-2 sm:px-2 md:px-4 rounded-xl 
                                text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.2em] transition-all duration-300 group overflow-hidden text-center ${activeTab === tab.id ? 'text-white' : 'text-foreground/60 hover:text-white/80'}
                            `}
                        >
                            {/* Glossy Background for Active Tab */}
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="activeTabBg"
                                    className="absolute inset-0 bg-gradient-to-br from-primary via-[#ff2d55] to-[#c70039] shadow-[0_0_20px_rgba(255,0,68,0.4)]"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                >
                                    {/* Base Shine */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent opacity-40 pointer-events-none" />

                                    {/* Animated Highlight Beam */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg]"
                                        animate={{ x: ['-150%', '150%'] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                    />

                                    {/* Glass Structure Layers */}
                                    <div className="absolute inset-0 shadow-[inset_0_0_12px_rgba(255,255,255,0.3)] rounded-xl border-t border-white/30" />
                                </motion.div>
                            )}

                            {/* Label — short on mobile, full on md+ */}
                            <span className="relative z-10 truncate block md:hidden">{tab.label}</span>
                            <span className="relative z-10 truncate hidden md:block">{tab.fullLabel}</span>

                            {/* Hover Indicator */}
                            {activeTab !== tab.id && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileHover={{ opacity: 1, scale: 1 }}
                                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary/40"
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Glossy Progress Bar */}
            <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ width: 0 }}
                animate={{ width: isSticky ? '100%' : '0%' }}
                transition={{ duration: 0.8 }}
            />
        </nav>
    );
}
