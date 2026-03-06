'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image?: string;
  liveLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    title: 'Online Quran Tutor',
    description: 'A comprehensive platform enabling flexible scheduling, easy tutor hiring, and efficient class management with real-time progress tracking.',
    technologies: ['React.js', 'ASP.NET', 'SQL', 'Real-time Updates'],
    features: [
      'Flexible class scheduling system',
      'Tutor discovery and hiring',
      'Real-time class management',
      'Student progress tracking',
      'Parent monitoring dashboard',
    ],
    githubLink: 'https://github.com/mrafay01/Online-Quran-Tutor',
    image: '/oqt.png', // Placeholder
  },
  {
    title: 'T-Plus Technologies Website',
    description: 'Professional company website featuring clean animations, modern components, and responsive design for showcasing services and projects.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Smooth scroll animations',
      'Interactive components',
      'Responsive design',
      'Professional UI/UX',
      'SEO optimized',
    ],
    liveLink: 'https://tplustechnologies.com',
    image: '/tplus.png', // Placeholder
  },
  {
    title: 'Stellar Talent HR Website',
    description: 'Static website for HR recruitment company with engaging animations and interactive JavaScript components for enhanced user experience.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Animated hero section',
      'Interactive job listings',
      'Smooth transitions',
      'Mobile responsive',
      'Fast loading',
    ],
    liveLink: 'https://stellartalentllc.com',
    image: '/stellartalent.png', // Placeholder
  },
  {
    title: 'SportFit Documentation',
    description: 'Comprehensive live documentation for web application using Docusaurus, providing developers with detailed API references and guides.',
    technologies: ['Next.js', 'Tailwind CSS', 'Docusaurus'],
    features: [
      'Comprehensive API documentation',
      'Search functionality',
      'Code examples',
      'Version management',
      'Community contributions',
    ],
    liveLink: 'https://docs.sportfit.app',
    image: '/docusaurus.png', // Placeholder
  },
  {
    title: 'Alams Aviation',
    description: 'Aviation company website with engaging animations and interactive JavaScript components for enhanced user experience.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Animated hero section',
      'Interactive job listings',
      'Smooth transitions',
      'Mobile responsive',
      'Fast loading',
    ],
    liveLink: 'https://alamsaviation.com',
    image: '/alamsaviation.png', // Placeholder
  },
  {
    title: 'Seezuna Website',
    description: 'Electronics and accessories website with engaging animations and interactive JavaScript components for enhanced user experience.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Animated hero section',
      'Interactive job listings',
      'Smooth transitions',
      'Mobile responsive',
      'Fast loading',
    ],
    image: '/seezuna.png', // Placeholder
    githubLink: 'https://github.com/mrafay01/seezuna-website',
  },
];

export default function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="relative scroll-mt-20">
      <div className="w-full mx-auto">
        {/* Compact Title */}
        <ScrollReveal className="mb-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase whitespace-nowrap">
              The <span className="text-primary italic">Portfolios</span>
            </h2>
            <div className="hidden sm:block h-px flex-grow mx-8 bg-gradient-to-r from-primary/20 to-transparent" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/20">Selected Works</span>
          </div>
        </ScrollReveal>

        {/* Projects Grid - More Compact (3 Cols) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative flex flex-col p-5 rounded-lg border border-primary/20 bg-white/[0.01] hover:bg-primary/[0.03] hover:border-primary/40 transition-all overflow-hidden"
              whileHover={{ y: -5 }}
            >
              {/* Subtle background number */}
              <div className="absolute top-0 right-0 p-3 text-3xl font-black text-white/[0.02] select-none group-hover:text-primary/5 transition-colors">
                0{index + 1}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-base font-black text-foreground mb-1.5 group-hover:text-primary transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-[11px] text-foreground/60 leading-relaxed mb-4 line-clamp-3 font-light">
                  {project.description}
                </p>

                {/* Tech tags - Smaller */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-bold px-2 py-1 rounded bg-white/5 border border-white/20 text-foreground/40 group-hover:border-primary/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Image Section at the bottom */}
                <div className="mt-6 relative w-full aspect-video rounded-md overflow-hidden border border-white/10 group-hover:border-primary/30 transition-all">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} Preview`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full bg-white/[0.03] flex items-center justify-center text-[10px] uppercase font-black tracking-widest text-foreground/10">
                      Project Visualization
                    </div>
                  )}
                  {/* Overlay for better integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                </div>

                {/* Links - Minimal */}
                <div className="flex gap-4 mt-6 pt-4 border-t border-white/5">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive text-[9px] font-black uppercase tracking-widest text-primary hover:text-primary-glow flex items-center gap-1 transition-all"
                    >
                      Live <ExternalLink size={9} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive text-[9px] font-black uppercase tracking-widest text-foreground/30 hover:text-foreground flex items-center gap-1 transition-all"
                    >
                      Source <Github size={9} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
