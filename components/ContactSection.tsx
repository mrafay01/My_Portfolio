'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { Mail, Linkedin, Github, ExternalLink, MapPin, Send, Phone } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
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
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 347 5643386',
      href: 'tel:+923475643386',
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
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-foreground/50 mb-4">Availability: Open</p>
              <div className="space-y-3">
                {contactLinks.map((item, i) => {
                  const isInternal = item.href.startsWith('mailto:') || item.href.startsWith('tel:');

                  return (
                    <a
                      key={i}
                      href={item.href}
                      target={isInternal ? undefined : "_blank"}
                      rel={isInternal ? undefined : "noopener noreferrer"}
                      onClick={(e) => {
                        if (isInternal) {
                          e.preventDefault();
                          window.open(item.href, '_self');
                        }
                      }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all group interactive"
                    >
                      <div className="p-2 rounded-md bg-white/5 text-primary group-hover:bg-primary/10 transition-colors">
                        <item.icon size={14} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-foreground/50 font-bold">{item.label}</div>
                        <div className="text-[11px] font-medium text-foreground/90">{item.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Form - Compact & Fast */}
          <div className="md:col-span-8">
            <ScrollReveal direction="right">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <motion.div variants={itemVariants} className="space-y-1">
                  <label htmlFor="name" className="text-[11px] font-black uppercase tracking-widest text-foreground/70 ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Identity"
                    className="w-full bg-white/[0.03] border border-white/20 rounded-lg px-4 py-2.5 text-[12px] text-foreground placeholder:text-foreground/40 focus:border-primary/60 focus:bg-primary/5 outline-none transition-all shadow-inner"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="space-y-1">
                  <label htmlFor="email" className="text-[11px] font-black uppercase tracking-widest text-foreground/70 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Coordinate"
                    className="w-full bg-white/[0.03] border border-white/20 rounded-lg px-4 py-2.5 text-[12px] text-foreground placeholder:text-foreground/40 focus:border-primary/60 focus:bg-primary/5 outline-none transition-all shadow-inner"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="sm:col-span-2 space-y-1">
                  <label htmlFor="message" className="text-[11px] font-black uppercase tracking-widest text-foreground/70 ml-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your vision..."
                    rows={4}
                    className="w-full bg-white/[0.03] border border-white/20 rounded-lg px-4 py-3 text-[12px] text-foreground placeholder:text-foreground/40 focus:border-primary/60 focus:bg-primary/5 outline-none transition-all resize-none shadow-inner"
                    required
                  />
                </motion.div>
                <motion.div variants={itemVariants} className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`interactive w-full py-2.5 text-foreground text-[11px] font-black uppercase tracking-[0.4em] rounded-lg transition-all flex items-center justify-center gap-2 group ${status === 'loading' ? 'bg-primary/50 cursor-not-allowed' :
                      status === 'success' ? 'bg-green-600 shadow-[0_0_15px_rgba(22,163,74,0.3)]' :
                        status === 'error' ? 'bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.3)]' :
                          'bg-primary hover:shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:scale-[1.01]'
                      }`}
                  >
                    {status === 'loading' ? 'Transmitting...' :
                      status === 'success' ? 'Transmitted' :
                        status === 'error' ? 'Retry Message' :
                          'Initiate Sequence'}
                    <Send size={10} className={`${status === 'loading' ? 'animate-pulse' : 'group-hover:translate-x-1'} transition-transform`} />
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
