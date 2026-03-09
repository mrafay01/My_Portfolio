'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { GraduationCap, BookOpen, School } from 'lucide-react';

interface Education {
    degree: string;
    institution: string;
    period: string;
    details: string;
    icon: any;
}

const educationData: Education[] = [
    {
        degree: 'Bachelors in Computer Science',
        institution: 'Barani Institute of Information Technology, Rawalpindi',
        period: '2021 – 2025',
        details: 'Majoring in Software Engineering with a focus on modern web technologies and building scalable applications.',
        icon: GraduationCap,
    },
    {
        degree: 'Intermediate in Pre-Engineering',
        institution: 'Islamabad College For Boys, G-10/4, Islamabad',
        period: '2019 – 2021',
        details: 'Focused on core sciences like Mathematics and Physics, providing a strong foundation for computer science.',
        icon: BookOpen,
    },
    {
        degree: 'Matriculation in Science',
        institution: 'Islamabad College For Boys, I-10/1, Islamabad',
        period: '2017 – 2019',
        details: 'Initial academic background in science, setting the stage for advanced studies in engineering and technology.',
        icon: School,
    },
];

export default function EducationSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="education" className="relative scroll-mt-20">
            <div className="w-full mx-auto">
                <ScrollReveal className="mb-8">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl md:text-2xl font-black tracking-tighter uppercase whitespace-nowrap">
                            The <span className="text-primary italic">Academy</span>
                        </h2>
                        <div className="h-px w-full bg-gradient-to-r from-primary/20 to-transparent" />
                    </div>
                </ScrollReveal>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative p-6 rounded-lg bg-white/[0.02] border border-white/10 hover:bg-primary/[0.03] hover:border-primary/40 transition-all cursor-default shadow-sm overflow-hidden"
                            whileHover={{ y: -5 }}
                        >
                            <div className="absolute top-0 right-0 p-4 text-primary/20 group-hover:text-primary/40 transition-colors">
                                <edu.icon size={40} strokeWidth={1} />
                            </div>

                            <div className="relative z-10 h-full flex flex-col">
                                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-2">
                                    {edu.period}
                                </span>
                                <h3 className="text-sm font-black text-foreground group-hover:text-primary transition-colors tracking-tight mb-1">
                                    {edu.degree}
                                </h3>
                                <div className="text-[11px] font-bold text-foreground/50 uppercase tracking-widest mb-4">
                                    {edu.institution}
                                </div>
                                <p className="text-[12px] text-foreground/70 leading-relaxed mt-auto">
                                    {edu.details}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
