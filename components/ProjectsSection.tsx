'use client';

import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useState } from 'react';
import ProjectDetailsModal from './ProjectDetailsModal';

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
    details: [
      {
        image: '/dashboard.png',
        description: 'A sophisticated control center designed for administrative efficiency. It provides a real-time high-level overview of system metrics, active sessions, and user performance at a glance, enabling data-driven decision making.'
      },
      {
        image: '/progress.png',
        description: 'Empowering students with visual feedback through dynamic progress charts. This module tracks individual learning trajectories, curriculum mastery, and attendance patterns, ensuring transparency and motivation throughout the educational journey.'
      },
      {
        image: '/swapping.png',
        description: 'Engineered for flexibility, our advanced session management system allows for seamless tutor re-assignment and schedule adjustments. This resilient architecture ensures zero downtime and maintains session continuity during peak demand.'
      },
      {
        image: '/quran.png',
        description: 'The digital heartbeat of the platform—an interactive Quran viewer featuring high-fidelity typography, integrated highlighting, and context-aware study tools. Designed for an immersive and respectful digital learning experience.'
      },
      {
        image: '/schedule.png',
        description: 'A high-performance calendar engine capable of synchronizing sessions across multiple time zones. It features intuitive drag-and-drop rescheduling, automated conflict detection, and smart notifications for both students and tutors.'
      }
    ]
  },
  {
    title: 'UR Finance - Expense Tracker App',
    description: 'Expense tracker app with real-time expense tracking, budget management, category organization, data visualization, and data export features.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'MongoDB'],
    features: [
      'Real-time expense tracking',
      'Budget management',
      'Category organization',
      'Data visualization',
      'Data export',
    ],
    liveLink: 'https://expense-tracker-green-alpha-78.vercel.app/',
    githubLink: 'https://github.com/mrafay01/expense-tracker',
    image: '/expense.png', // Placeholder
    details: [
      {
        image: '/budget.png',
        description: 'A precise financial planning interface that allows users to set and monitor spending limits across various categories. The system provides real-time progress indicators and alerts, ensuring users stay within their financial boundaries while promoting disciplined saving habits.'
      },
      {
        image: '/debts.png',
        description: 'A dedicated module for tracking liabilities and repayment schedules. It offers a clear visualization of outstanding balances, interest rates, and payment history, empowering users to strategically manage and eliminate debt through organized tracking.'
      },
      {
        image: '/expense.png',
        description: 'The core transactional hub where users can instantly record and categorize new expenditures. Features an intuitive entry system with support for custom tagging, merchant details, and date-stamping for granular financial record-keeping.'
      },
      {
        image: '/reports.png',
        description: 'Advanced data visualization engine that transforms raw financial data into actionable insights. Through dynamic charts and spending breakdowns, users can analyze their consumption patterns over time, identifying areas for potential savings and financial optimization.'
      },
      {
        image: '/transaction.png',
        description: 'A high-fidelity ledger displaying a comprehensive history of all financial activities. Includes powerful filtering and search capabilities, allowing users to quickly audit past spends, verify payment details, and maintain an accurate digital paper trail.'
      },
      {
        image: '/settings.png',
        description: 'Granular configuration panel for personalizing the application experience. Users can manage account preferences, customize currency settings, organize categories, and tune notification parameters to align the tool with their specific financial workflow.'
      }
    ]
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
    githubLink: 'https://github.com/mrafay01/tplus',
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
  {
    title: 'ESP32 Snooker Break Detector',
    description: 'An intelligent hardware project utilizing the ESP32-CAM to detect snooker breaks. Initially prototyped with Python and YOLOv8, the system was optimized for hardware constraints using advanced trigonometry to detect the red ball triangle and its subsequent break to maintain an automated counter.',
    technologies: ['C++', 'Python', 'YOLOv8', 'ESP32-CAM', 'Computer Vision'],
    features: [
      'Real-time snooker break detection',
      'Automated game break counter',
      'Geometric and trigonometric ball detection',
      'Hardware-optimized visual processing',
      'ESP32-CAM integration',
    ],
    image: 'https://images.unsplash.com/photo-1534463868211-1203a5c900a9?q=80&w=1000&auto=format&fit=crop',
    details: [
      {
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop',
        description: 'Hardware Integration: Deployed on the ESP32-CAM microcontroller, this module captures real-time video feeds of the snooker table. By leveraging hardware-optimized processing, the system efficiently handles image streaming and on-device calculations despite strict memory and performance constraints.'
      },
      {
        image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop',
        description: 'AI & Data Processing: Originally prototyped using Python and YOLOv8 for robust object detection. This phase laid the groundwork for understanding ball trajectories and the physics of the break, ensuring that the final mathematical model was grounded in accurate visual data.'
      },
      {
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop',
        description: 'Mathematical Model & Trigonometry: To bypass the memory limits of the ESP32, the AI strategy was pivoted to a highly efficient mathematical approach. By applying basic trigonometry, the system maps out the red balls, identifies the standard triangle formation, and detects when a break disrupts this geometric arrangement.'
      },
      {
        image: 'https://images.unsplash.com/photo-1502570149819-b2260483d302?q=80&w=1000&auto=format&fit=crop',
        description: 'Automated Event Counter: The culmination of the image capture and geographic mapping is a precise, automated counter. When a break occurs, the system registers the exact frame of the split, securely incrementing the break tracking logic for real-time game analysis.'
      }
    ]
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <span className="text-xs font-black uppercase tracking-[0.3em] text-foreground/50">Selected Works</span>
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
                <p className="text-[13px] text-foreground/80 leading-relaxed mb-4 line-clamp-3 font-light">
                  {project.description}
                </p>

                {/* Tech tags - Smaller */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-bold px-2 py-1 rounded bg-white/5 border border-white/20 text-foreground/70 group-hover:border-primary/40 transition-colors"
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
                    <div className="w-full h-full bg-white/[0.03] flex items-center justify-center text-xs uppercase font-black tracking-widest text-foreground/40">
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
                      className="p-1 interactive text-[11px] font-black uppercase tracking-widest text-primary border border-transparent hover:border-primary rounded-[6px] transition-all duration-300 flex items-center gap-1"
                    >
                      Live <ExternalLink size={9} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 interactive text-[11px] font-black uppercase tracking-widest text-gray-100 border border-transparent hover:text-white hover:border-gray-200 rounded-[6px] transition-all duration-300 flex items-center gap-1"
                    >
                      Source <Github size={9} />
                    </a>
                  )}
                  {project.details && (
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setIsModalOpen(true);
                      }}
                      className="p-1 interactive text-[11px] font-black uppercase tracking-widest text-primary border border-transparent hover:border-primary rounded-[8px] transition-all duration-300 flex items-center gap-1"
                    >
                      View <Eye size={9} />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <ProjectDetailsModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
}
