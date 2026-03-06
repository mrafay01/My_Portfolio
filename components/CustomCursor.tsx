'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive')
      ) {
        document.body.classList.add('cursor-hover');
      }
    };

    const handleMouseOut = () => {
      document.body.classList.remove('cursor-hover');
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    let animationFrameId: number;

    const updatePosition = () => {
      // Smooth interpolation (lerp)
      positionRef.current.x += (mouseRef.current.x - positionRef.current.x) * 0.15;
      positionRef.current.y += (mouseRef.current.y - positionRef.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseRef.current.x}px, ${mouseRef.current.y}px, 0) translate(-50%, -50%)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        body.cursor-hover .cursor-outer {
          width: 80px;
          height: 80px;
          border-color: var(--primary);
          box-shadow: 0 0 40px var(--primary), 0 0 80px rgba(255, 0, 68, 0.4);
          background: rgba(255, 0, 68, 0.1);
          backdrop-filter: blur(4px);
        }
        body.cursor-hover .cursor-inner {
          width: 12px;
          height: 12px;
          background: var(--primary);
        }
      `}</style>

      {/* Cursor outer glow */}
      <div
        ref={cursorRef}
        className="cursor-outer pointer-events-none fixed z-[9999] rounded-full border-2 border-primary transition-[width,height,border-color,box-shadow,background] duration-200"
        style={{
          width: '20px',
          height: '20px',
          boxShadow: '0 0 10px var(--primary), 0 0 15px rgba(255, 0, 68, 0.1)',
          willChange: 'transform',
        }}
      />

      {/* Cursor inner dot */}
      <div
        ref={dotRef}
        className="cursor-inner pointer-events-none fixed z-[9999] rounded-full bg-primary transition-[width,height,background] duration-200"
        style={{
          width: '6px',
          height: '6px',
          boxShadow: '0 0 5px var(--primary)',
          willChange: 'transform',
        }}
      />

      {/* Cursor trail effect */}
      <div
        ref={trailRef}
        className="pointer-events-none fixed z-[9998] rounded-full border border-primary/20 opacity-30 transition-[width,height] duration-300"
        style={{
          width: '14px',
          height: '14px',
          boxShadow: '0 0 5px rgba(255, 0, 68, 0.1)',
          willChange: 'transform',
        }}
      />
    </>
  );
}

