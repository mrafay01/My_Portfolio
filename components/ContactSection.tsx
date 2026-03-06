'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { Mail, Linkedin, Github, ExternalLink, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abdulrafe.me@gmail.com',
      href: 'mailto:abdulrafe.me@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/abdul-rafe-shahid',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'GitHub Profile',
      href: 'https://github.com/mrafay01',
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="relative py-8 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal className="mb-4">
          <div className="flex items-center gap-4">
            <h2 className="text-xl md:text-2xl font-black tracking-tighter uppercase whitespace-nowrap">
              The <span className="text-primary italic">Signal</span>
            </h2>
            <div className="h-px flex-grow bg-gradient-to-r from-primary/20 to-transparent" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Sidebar - Extra Compact */}
          <div className="md:col-span-4 space-y-4">
            <ScrollReveal direction="left">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/30 mb-4">Availability: Open</p>
              <div className="space-y-3">
                {contactLinks.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all group interactive"
                  >
                    <div className="p-2 rounded-md bg-white/5 text-primary group-hover:bg-primary/10 transition-colors">
                      <item.icon size={14} />
                    </div>
                    <div>
                      <div className="text-[7px] uppercase tracking-widest text-foreground/30 font-bold">{item.label}</div>
                      <div className="text-[10px] font-medium text-foreground/70">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Form - Compact & Fast */}
          <div className="md:col-span-8">
            <ScrollReveal direction="right">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <motion.div variants={itemVariants} className="space-y-1">
                  <label htmlFor="name" className="text-[9px] font-black uppercase tracking-widest text-foreground/60 ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Identity"
                    className="w-full bg-white/[0.03] border border-white/20 rounded-lg px-4 py-2.5 text-[10px] text-foreground placeholder:text-foreground/20 focus:border-primary/60 focus:bg-primary/5 outline-none transition-all shadow-inner"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-1">
                  <label htmlFor="email" className="text-[9px] font-black uppercase tracking-widest text-foreground/60 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Coordinate"
                    className="w-full bg-white/[0.03] border border-white/20 rounded-lg px-4 py-2.5 text-[10px] text-foreground placeholder:text-foreground/20 focus:border-primary/60 focus:bg-primary/5 outline-none transition-all shadow-inner"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="sm:col-span-2 space-y-1">
                  <label htmlFor="message" className="text-[9px] font-black uppercase tracking-widest text-foreground/60 ml-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your vision..."
                    rows={4}
                    className="w-full bg-white/[0.03] border border-white/20 rounded-lg px-4 py-3 text-[10px] text-foreground placeholder:text-foreground/20 focus:border-primary/60 focus:bg-primary/5 outline-none transition-all resize-none shadow-inner"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="interactive w-full py-2.5 bg-primary text-foreground text-[9px] font-black uppercase tracking-[0.4em] rounded-lg hover:shadow-[0_0_15px_rgba(220,20,60,0.3)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 group"
                  >
                    {submitted ? 'Transmitted' : 'Initiate Sequence'}
                    <Send size={10} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
