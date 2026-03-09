'use client';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Share2, Box, Cpu, Layers } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ProjectDetail {
    image: string;
    description: string;
}

interface Project {
    title: string;
    description: string;
    technologies: string[];
    features: string[];
    image?: string;
    liveLink?: string;
    githubLink?: string;
    details?: ProjectDetail[];
}

export default function ProjectDetailsModal({
    project,
    isOpen,
    onClose
}: {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        if (isOpen) {
            setActiveIndex(0);
            setDirection(0);
        }
    }, [isOpen, project]);

    if (!project) return null;

    const paginate = (newDirection: number) => {
        if (!project.details) return;
        setDirection(newDirection);
        setActiveIndex((prev) => (prev + newDirection + project.details!.length) % project.details!.length);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0,
        }),
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent showCloseButton={false} className="max-w-[95vw] lg:max-w-7xl h-[90vh] lg:h-auto lg:max-h-[90vh] overflow-hidden flex flex-col p-0 border-white/10 bg-background/95 backdrop-blur-2xl shadow-[0_0_50px_-12px_rgba(var(--primary),0.2)]">
                {/* Header with Background Glow */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

                <DialogHeader className="p-6 md:p-8 pb-4 md:pb-6 border-b border-white/5 relative z-10 shrink-0">
                    <div className="flex items-center justify-between">
                        <div className="space-y-1">
                            <DialogTitle className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                                {project.title}
                            </DialogTitle>
                            <DialogDescription className="text-[11px] font-black uppercase tracking-[0.3em] text-primary/60">
                                Strategic Visual Breakdown
                            </DialogDescription>
                        </div>
                        <div className="flex items-center gap-3">
                            {project.githubLink && (
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-primary/20 transition-all text-foreground/40 hover:text-primary group"
                                >
                                    <Share2 size={18} className="group-hover:rotate-12 transition-transform" />
                                </a>
                            )}
                            <button
                                onClick={onClose}
                                className="p-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-primary/20 transition-all text-foreground/40 hover:text-primary"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </DialogHeader>

                <div className="flex-1 overflow-hidden">
                    <ScrollArea className="h-full">
                        <div className="flex flex-col lg:flex-row h-full">
                            {/* Left Column: Visual Tour (Takes more space) */}
                            <div className="flex-1 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-white/5">
                                {project.details && project.details.length > 0 && (
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-4 flex-1">
                                                <h4 className="text-[11px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                                                    <Layers size={12} /> System Interface Tour
                                                </h4>
                                                <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
                                            </div>

                                            <div className="flex items-center gap-3 ml-6">
                                                <div className="flex gap-1.5 hidden sm:flex">
                                                    {project.details.map((_, i) => (
                                                        <div
                                                            key={i}
                                                            className={`h-1 transition-all duration-300 rounded-full ${i === activeIndex ? 'w-5 bg-primary' : 'w-1.5 bg-white/10'}`}
                                                        />
                                                    ))}
                                                </div>
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => paginate(-1)}
                                                        className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-primary/10 hover:border-primary/40 transition-all text-white/40 hover:text-primary active:scale-95"
                                                    >
                                                        <ChevronLeft size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => paginate(1)}
                                                        className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-primary/10 hover:border-primary/40 transition-all text-white/40 hover:text-primary active:scale-95"
                                                    >
                                                        <ChevronRight size={18} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 group/tour">
                                            <AnimatePresence initial={false} custom={direction} mode="wait">
                                                <motion.div
                                                    key={activeIndex}
                                                    custom={direction}
                                                    variants={variants}
                                                    initial="enter"
                                                    animate="center"
                                                    exit="exit"
                                                    transition={{
                                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                                        opacity: { duration: 0.2 }
                                                    }}
                                                    className="absolute inset-0"
                                                >
                                                    <img
                                                        src={project.details[activeIndex].image}
                                                        alt={`Technical Focus ${activeIndex + 1}`}
                                                        className="w-full h-full object-contain p-4 lg:p-8"
                                                    />
                                                </motion.div>
                                            </AnimatePresence>
                                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                                            {/* Overlay Label */}
                                            <div className="absolute bottom-6 left-8 z-20 py-1.5 px-3.5 rounded-full bg-primary/90 text-[11px] font-black uppercase tracking-widest italic shadow-lg">
                                                Module {String(activeIndex + 1).padStart(2, '0')}
                                            </div>
                                        </div>

                                        <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md shadow-inner">
                                            <div className="absolute top-0 left-0 w-1.5 h-full bg-primary/40 rounded-full" />
                                            <p className="text-[14px] md:text-[15px] text-foreground/90 leading-relaxed font-light italic tracking-tight">
                                                "{project.details[activeIndex].description}"
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Right Column: Specs & Overview (Fixed width on desktop) */}
                            <div className="w-full lg:w-[450px] p-6 md:p-8 space-y-10 lg:overflow-y-auto bg-white/[0.01]">
                                {/* Overview Section */}
                                <section className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <h4 className="text-[11px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                                            <Box size={12} /> Project Brief
                                        </h4>
                                        <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
                                    </div>
                                    <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-light mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <Badge key={tech} variant="outline" className="text-[11px] font-black uppercase tracking-[0.1em] border-primary/20 bg-primary/5 text-primary/90 px-2.5 py-1">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </section>

                                {/* Architecture Section */}
                                <section className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <h4 className="text-[11px] font-black uppercase tracking-widest text-primary flex items-center gap-2">
                                            <Cpu size={12} /> Core Architecture
                                        </h4>
                                        <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
                                    </div>
                                    <div className="grid grid-cols-1 gap-3">
                                        {project.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5 group transition-all hover:bg-white/[0.06] hover:border-primary/20">
                                                <div className="w-2 h-2 rounded-full bg-primary/40 group-hover:bg-primary transition-all duration-500 shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                                                <span className="text-[12px] text-foreground/70 group-hover:text-foreground/90 transition-colors uppercase tracking-widest font-bold">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>
                        </div>
                    </ScrollArea>
                </div>
            </DialogContent>
        </Dialog>
    );
}
