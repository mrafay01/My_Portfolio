'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink, MapPin } from 'lucide-react';
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
            className="flex flex-col h-full lg:h-screen py-10 lg:py-24 gap-12 lg:pr-8 lg:border-r lg:border-white/5 scroll-mt-20 lg:overflow-y-auto scrollbar-hide"
        >

            {/* Profile Header */}
            <motion.div variants={itemVariants} className="space-y-6">
                <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-3xl overflow-hidden border-2 border-primary/20 p-2 backdrop-blur-sm group shadow-[0_0_30px_rgba(220,20,60,0.2)]">
                    <div className="w-full h-full rounded-2xl overflow-hidden relative">
                        <div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <img
                            src="/profile.png"
                            alt="Abdul Rafe"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-0"
                        />
                    </div>
                </div>
                <div>
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-white leading-none">
                        Abdul <br />
                        <span className="text-primary italic">Rafe</span>
                    </h1>
                    <div className="h-1 w-12 bg-primary rounded-full mt-4" />
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mt-4 h-4 text-left">
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
                <h3 className="text-[9px] font-black uppercase tracking-[0.4em] text-foreground/40">Technical Arsenal</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
                    {skillCategories.map((cat) => (
                        <div key={cat.title} className="group">
                            <h4 className="text-[8px] font-black uppercase tracking-widest text-primary/60 mb-2 group-hover:text-primary transition-colors">{cat.title}</h4>
                            <div className="flex flex-wrap gap-1.5">
                                {cat.skills.map(skill => (
                                    <span key={skill} className="text-[10px] font-bold px-2 py-1 rounded-sm bg-white/10 border border-white/20 text-foreground/80 hover:text-white hover:border-primary/50 transition-all shadow-sm">
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
                <div className="flex items-center gap-3">
                    {[
                        { icon: Github, href: 'https://github.com/mrafay01' },
                        { icon: Linkedin, href: 'https://www.linkedin.com/in/abdul-rafe-shahid' },
                        { icon: Mail, href: 'mailto:abdulrafe.me@gmail.com' }
                    ].map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            target="_blank"
                            className="interactive p-2.5 rounded-xl bg-white/10 border border-white/10 text-foreground/50 hover:text-primary hover:bg-primary/5 hover:border-primary/20 transition-all"
                        >
                            <social.icon size={16} />
                        </a>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 text-[9px] font-black text-foreground/40 uppercase tracking-[0.3em]">
                        <MapPin size={12} className="text-primary/60" />
                        Islamabad / Pakistan
                    </div>
                </div>
            </motion.div>
        </motion.aside>
    );
}
