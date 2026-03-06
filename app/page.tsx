'use client';

import ParticleBackground from '@/components/ParticleBackground';
import Sidebar from '@/components/Sidebar';
import DotNav from '@/components/DotNav';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <main className="relative bg-background text-foreground selection:bg-primary selection:text-white">
      {/* Dynamic Background */}
      <ParticleBackground />

      {/* Global Navigation Control */}
      <DotNav />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Static Identity Hub (Left) */}
          <div className="lg:w-1/3 lg:h-screen lg:sticky lg:top-0">
            <Sidebar />
          </div>

          {/* Dynamic Content Feed (Right) */}
          <div className="lg:w-2/3 py-10 lg:py-24 space-y-24">
            <AboutSection />
            <SectionDivider />
            <ExperienceSection />
            <SectionDivider />
            <ProjectsSection />
          </div>
        </div>
      </div>

      {/* Connection Hub (Full-Width Footer) */}
      <div className="relative z-10 mt-20 border-t border-white/5 bg-background/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <ContactSection />

          <footer className="py-8 mt-5 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col items-center md:items-start gap-2">
                <p className="text-[10px] uppercase font-black tracking-[0.4em] text-foreground/40">
                  Abdul Rafe • Software Engineer
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
