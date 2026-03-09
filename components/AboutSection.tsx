'use client';

import { motion } from 'framer-motion';
import { Zap, Rocket, Diamond } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function AboutSection() {
  return (
    <section id="about" className="relative scroll-mt-20">
      <div className="w-full mx-auto pt-10 mt-10">
        <div className="grid grid-cols-1 gap-10">
          {/* Header Area */}
          <ScrollReveal direction="left">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-xl md:text-2xl font-black tracking-tighter uppercase">
                The <span className="text-primary italic">Blueprint</span>
              </h2>
              <div className="h-px flex-grow bg-gradient-to-r from-primary/20 to-transparent" />
            </div>
            <p className="text-[11px] text-foreground/50 font-black uppercase tracking-[0.3em] leading-relaxed">
              Architecting digital depth
            </p>
          </ScrollReveal>

          {/* Main Content Area */}
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <ScrollReveal direction="right">
                <p className="text-base md:text-lg text-foreground/80 font-light leading-relaxed">
                  I'm a <span className="text-primary font-bold">Full-Stack Engineer</span> who believes code is a medium for art. I specialize in merging technical rigor with creative fluidity to build meaningful digital experiences.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Excellence', value: '2+ Years', sub: 'Experience', icon: <Rocket size={12} /> },
                  { label: 'Craft', value: '15+ Projects', sub: 'Completed', icon: <Zap size={12} /> }
                ].map((stat, i) => (
                  <ScrollReveal key={i} delay={0.1 * i}>
                    <motion.div
                      className="p-4 rounded-lg border border-white/10 bg-white/[0.02] hover:bg-primary/[0.05] hover:border-primary/40 transition-all group relative overflow-hidden h-full shadow-lg"
                      whileHover={{ y: -3 }}
                    >
                      <div className="absolute top-2 right-2 text-primary/20 group-hover:text-primary/40 transition-colors">
                        {stat.icon}
                      </div>
                      <div className="text-lg font-black text-primary mb-0.5" style={{ textShadow: '0 0 10px rgba(255, 0, 0, 0.3)' }}>{stat.value}</div>
                      <div className="text-[11px] uppercase tracking-widest text-foreground/70 font-black">{stat.label}</div>
                      <div className="text-[10px] uppercase tracking-widest text-primary font-bold">{stat.sub}</div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal delay={0.2} className="mt-8">
              <div className="p-4 border-l-2 border-primary/20 bg-primary/[0.01] rounded-r-lg group hover:bg-primary/[0.02] hover:border-primary/60 transition-colors max-w-2xl">
                <p className="text-[13px] text-foreground/70 italic leading-relaxed font-light hover:text-foreground/90 transition-colors">
                  "Great code isn't just functional, it's predictable, scalable, and inherently beautiful in its structure."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
