'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    title: 'Full Stack Web Developer',
    company: 'Vizion Autos',
    location: 'Islamabad, Pakistan',
    period: 'Jan 2026 – Present',
    description: [
      'Developed and maintained a comprehensive web application for vehicle management and sales tracking',
      'Implemented a robust inventory management system with real-time updates and detailed analytics',
      'Integrated payment gateway solutions and customer management modules for enhanced user experience',
      'Optimized application performance and scalability for high-traffic usage',
    ],
  },
  {
    title: 'Web Developer Intern',
    company: 'T-Plus Technologies',
    location: 'Islamabad, Pakistan',
    period: 'Oct 2025 – Jan 2026',
    description: [
      'Contributed to multiple web-based projects using Next.js, React.js, and Node.js with emphasis on high-performance, scalable UIs',
      'Actively participated in designing reusable components and optimizing application performance',
      'Worked on AI-driven projects involving image processing and machine learning model integration',
      'Gained hands-on experience in data preprocessing, model evaluation, and real-world AI solutions',
    ],
  },
  {
    title: 'Web Developer Intern',
    company: 'Care Pvt. Ltd.',
    location: 'Islamabad, Pakistan',
    period: 'Sep 2025 – Oct 2025',
    description: [
      'Designed and developed a web application to remotely control and monitor an ESP-powered mechanical device',
      'Implemented real-time I/O handling, live status dashboards, and secure communication protocols',
      'Created professional, high-quality websites using Next.js with focus on performance optimization',
      'Ensured responsive design and SEO best practices across all deliverables',
    ],
  },
  {
    title: 'Freelance Web Developer',
    company: 'freelancer.com',
    location: 'Islamabad, Pakistan',
    period: 'Mar 2024 – Present',
    description: [
      'Delivered 10+ web development projects including static websites, e-commerce stores, and documentation platforms',
      'Designed and deployed responsive, production-ready applications using JavaScript, React, and Next.js',
      'Specialized in Shopify Liquid for e-commerce development with focus on performance and UX',
      'Maintained cross-device compatibility and ensured maintainable, scalable code architecture',
    ],
  },
];

export default function ExperienceSection() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="relative scroll-mt-20">
      <div className="w-full mx-auto">
        <ScrollReveal className="mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-xl md:text-2xl font-black tracking-tighter uppercase whitespace-nowrap">
              The <span className="text-primary italic">Roadmap</span>
            </h2>
            <div className="h-px w-full bg-gradient-to-r from-primary/20 to-transparent" />
          </div>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-4"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-8 p-6 rounded-lg bg-white/[0.02] border border-white/10 hover:bg-primary/[0.03] hover:border-primary/40 transition-all cursor-default shadow-sm"
              whileHover={{ x: 5 }}
            >
              {/* Vertical accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/20 group-hover:bg-primary transition-colors rounded-l-lg" />

              {/* Date Side */}
              <div className="lg:col-span-3">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">
                  {exp.period}
                </span>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-9">
                <h3 className="text-sm font-black text-foreground group-hover:text-primary transition-colors tracking-tight">
                  {exp.title}
                </h3>
                <div className="text-[9px] font-bold text-foreground/30 uppercase tracking-widest mb-3">
                  {exp.company} • {exp.location}
                </div>
                <ul className="space-y-1.5">
                  {exp.description.map((point, idx) => (
                    <li key={idx} className="text-[11px] text-foreground/50 leading-relaxed flex items-start gap-2">
                      <span className="text-primary/40 mt-1">/</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
