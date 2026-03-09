'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink, MapPin, Phone, Send } from 'lucide-react';
import Typewriter from './Typewriter';

interface SkillCategory {
    title: string;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        title: 'Frontend',
        skills: ['React.js', 'Nest.js', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
        title: 'Backend',
        skills: ['Node.js', 'Express.js', 'Next.js', 'ASP.NET', 'Python', 'Rest APIs', 'Database Design'],
    },
    {
        title: 'Database',
        skills: ['MongoDB', 'SQL', 'PostgreSQL', 'MySQL'],
    },
    {
        title: 'Tools',
        skills: ['Git', 'Vercel', 'Docker', 'AWS', 'Postman', 'Jira'],
    },
];

export default function Sidebar() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <motion.aside
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col h-full py-2 lg:py-4 gap-12 lg:pr-8 lg:border-r lg:border-white/5 scroll-mt-20 overflow-visible items-center lg:items-start"
        >

            {/* Profile Header */}
            <motion.div variants={itemVariants} className="space-y-6 flex flex-col items-center lg:items-start w-full">
                <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-3xl overflow-hidden border-2 border-primary/20 p-2 backdrop-blur-sm group shadow-[0_0_30px_rgba(255,0,0,0.2)]">
                    <div className="w-full h-full rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <img
                            src="/profile.png"
                            alt="Abdul Rafe"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-0"
                        />
                    </div>
                </div>
                <div className="text-center lg:text-left flex flex-col items-center lg:items-start w-full">
                    <div className="flex items-center gap-4 lg:gap-6 justify-center lg:justify-start w-full">
                        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-none">
                            Abdul <br className="hidden lg:block" />
                            <span className="text-primary italic">Rafe</span>
                        </h1>
                        <button
                            onClick={() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary hover:border-primary transition-all duration-300 shadow-[0_0_15px_rgba(255,0,0,0.15)] hover:shadow-[0_0_25px_rgba(255,0,0,0.5)] overflow-hidden shrink-0"
                            title="Send a Signal"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <Send size={18} className="text-primary group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                        </button>
                    </div>
                    <div className="h-1 w-12 bg-primary rounded-full mt-4 mx-auto lg:mx-0" />
                    <div className="text-xs font-black uppercase tracking-[0.4em] text-primary mt-4 h-4 text-center lg:text-left w-full">
                        <Typewriter
                            words={[
                                'Software Engineer',
                                'Full-Stack Developer',
                                'Next.js Architect',
                                'UI Engineering',
                                'Technical Problem Solver'
                            ]}
                            delay={2500}
                        />
                    </div>
                </div>
            </motion.div>

            {/* Skills - Grid layout for sidebar (Brightened) */}
            <motion.div variants={itemVariants} className="space-y-6 flex-grow border-b border-white/5 pb-3 mb-2">
                <h3 className="text-[11px] font-black text-center uppercase tracking-[0.4em] text-foreground/60">Technical Arsenal</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
                    {skillCategories.map((cat) => (
                        <div key={cat.title} className="group">
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-primary/80 mb-2 group-hover:text-primary transition-colors text-center lg:text-left">{cat.title}</h4>
                            <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
                                {cat.skills.map(skill => (
                                    <span key={skill} className="text-[11px] font-bold px-2 py-1 rounded-sm bg-white/10 border border-white/20 text-foreground/90 hover:text-white hover:border-primary/50 transition-all shadow-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Socials & Contact Meta */}
            <motion.div variants={itemVariants} className="space-y-8">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                    {[
                        { icon: Github, href: 'https://github.com/mrafay01' },
                        { icon: Linkedin, href: 'https://www.linkedin.com/in/abdul-rafe-shahid' },
                        { icon: Mail, href: 'mailto:abdulrafe.me@gmail.com' },
                        { icon: Phone, href: 'tel:+923475643386' }
                    ].map((social, i) => {
                        const isInternal = social.href.startsWith('mailto:') || social.href.startsWith('tel:');

                        return (
                            <a
                                key={i}
                                href={social.href}
                                target={isInternal ? undefined : "_blank"}
                                rel={isInternal ? undefined : "noopener noreferrer"}
                                onClick={(e) => {
                                    if (isInternal) {
                                        e.preventDefault();
                                        window.open(social.href, '_self');
                                    }
                                }}
                                className="interactive p-2.5 rounded-xl bg-white/10 border border-white/10 text-foreground/70 hover:text-primary hover:bg-primary/5 hover:border-primary/20 transition-all"
                            >
                                <social.icon size={16} />
                            </a>
                        );
                    })}
                </div>
                <div className="flex flex-col gap-2 items-center lg:items-start">
                    <div className="flex items-center gap-3 text-[11px] font-black text-foreground/60 uppercase tracking-[0.3em] justify-center lg:justify-start">
                        <MapPin size={12} className="text-primary/80" />
                        Islamabad / Pakistan
                    </div>
                </div>
            </motion.div>
        </motion.aside >
    );
}
