'use client';

import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const canvas = document.createElement('canvas');
    canvas.style.pointerEvents = 'none';
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const container = containerRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    container.appendChild(canvas);

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }

    const particles: Particle[] = [];
    const particleCount = 50;
    const colors = ['#3B82F6', '#06B6D4', '#2250c5ff'];

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2.5,
        vy: (Math.random() - 0.5) * 2.5,
        radius: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.fillStyle = '#0F172A';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Boundary wrapping
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        // Add glow
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.3;
        ctx.stroke();
        ctx.globalAlpha = 1;
      });

      // 1. Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 220) {
            ctx.strokeStyle = particles[i].color;
            ctx.lineWidth = 1.5;
            ctx.globalAlpha = 0.3 * (1 - distance / 220);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // 2. Mouse interaction and attractions
      particles.forEach((particle) => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = 200;

        if (distance < minDistance) {
          const angle = Math.atan2(dy, dx);
          const force = (minDistance - distance) / minDistance * 0.2;

          // Attraction: Move towards mouse
          particle.vx += Math.cos(angle) * force;
          particle.vy += Math.sin(angle) * force;

          // Connect particles to mouse
          ctx.strokeStyle = particle.color;
          ctx.lineWidth = 0.8;
          ctx.globalAlpha = 0.4 * (1 - distance / minDistance);
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }

        // Maintain constant movement at all times
        const currentSpeed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
        const minSpeed = 0.8;
        const maxSpeed = 3.5;

        // Auto-boost if too slow
        if (currentSpeed < minSpeed) {
          const boost = minSpeed / (currentSpeed || 0.1);
          particle.vx *= boost;
          particle.vy *= boost;
        }
        // Cap speed if way too fast
        else if (currentSpeed > maxSpeed) {
          const reduction = maxSpeed / currentSpeed;
          particle.vx *= reduction;
          particle.vy *= reduction;
        }

        // Slight friction for organic deceleration within the min/max bounds
        particle.vx *= 0.995;
        particle.vy *= 0.995;
      });

      requestAnimationFrame(animate);
    };

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(canvas)) {
        container.removeChild(canvas);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 bg-background overflow-hidden pointer-events-none"
    />
  );
}
