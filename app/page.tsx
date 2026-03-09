'use client';

import ParticleBackground from '@/components/ParticleBackground';
import Sidebar from '@/components/Sidebar';
import StickyTabs from '@/components/StickyTabs';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <main className="relative bg-background text-foreground selection:bg-primary selection:text-white pb-10">
      {/* Dynamic Background */}
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-start">
          {/* Static Identity Hub (Left) */}
          <div className="w-full lg:w-1/3 lg:h-[90vh] lg:sticky lg:top-10 flex flex-col justify-center flex-shrink-0">
            <Sidebar />
          </div>

          {/* Dynamic Content Feed (Right) */}
          <div className="w-full lg:w-2/3 py-8 lg:py-24 space-y-24 md:space-y-32 flex-grow">
            <StickyTabs />

            <AboutSection />
            <SectionDivider />
            <ExperienceSection />
            <SectionDivider />
            <EducationSection />
            <SectionDivider />
            <ProjectsSection />
          </div>
        </div>
      </div>

      {/* Connection Hub (Full-Width Footer) */}
      <div className="relative z-10 mt-10 border-t border-white/5 bg-background/50 backdrop-blur-sm scroll-mt-12">
        <div className="max-w-6xl mx-auto px-6">
          <ContactSection />

          <footer className="py-2 mt-5 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col items-center md:items-start gap-2">
                <p className="text-[10px] uppercase font-black tracking-[0.4em] text-foreground/40">
                  Abdul Rafe • Web Developer
                </p>
                <p className="text-[10px] text-primary/60 uppercase tracking-widest font-bold">
                  Crafting Digital Excellence
                </p>
              </div>

              <div className="text-right">
                <p className="text-[10px] text-foreground/30 uppercase tracking-[0.2em]">
                  © 2026. Built with Next.js
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}
