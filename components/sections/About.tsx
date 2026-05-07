"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalData } from '@/lib/data';
import SectionLabel from '../ui/SectionLabel';
import Image from 'next/image';
import { useState } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-heading', { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }, {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 1,
        scrollTrigger: { trigger: '.about-heading', start: 'top 80%' }
      });

      gsap.fromTo('.stat-card', 
        { y: 30, opacity: 0 }, 
        { 
          y: 0, opacity: 1, duration: 0.6, stagger: 0.2,
          scrollTrigger: { trigger: '.stats-row', start: 'top 85%' }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10">
      <SectionLabel>Discovery</SectionLabel>
      <h2 className="about-heading text-4xl md:text-5xl font-bold mb-16 font-display">About The Architect</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image Frame */}
        <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
          <div className="absolute inset-0 border-2 border-[var(--neon-primary)] rounded-2xl rotate-3 transition-transform duration-500 hover:rotate-6 shadow-[var(--glow-md)]"></div>
          <div className="absolute inset-0 bg-[var(--bg-card)] rounded-2xl overflow-hidden -rotate-3 z-10 p-2">
             <div className="w-full h-full bg-[var(--bg-border)] rounded-xl overflow-hidden relative group">
                {/* Fallback pattern if image is missing */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--neon-primary)_1px,_transparent_1px)] bg-[size:10px_10px]"></div>
                <Image 
                  src="/MineImage.jpg" 
                  alt="Vaibhav Modi" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 384px" 
                  className="object-cover relative z-10 transition-transform duration-500 group-hover:scale-105" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=600&auto=format&fit=crop';
                  }}
                />
             </div>
          </div>
        </div>

        {/* Right: Bio */}
        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed text-lg">
          {personalData.bio.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          
          {/* Stats Row */}
          <div className="stats-row grid grid-cols-3 gap-4 pt-8">
            <div className="stat-card bg-[var(--bg-card)] border border-[var(--bg-border)] rounded-xl flex flex-col items-center justify-center p-4">
              <span className="text-3xl font-bold text-[var(--neon-primary)] font-code">1+</span>
              <span className="text-xs text-center mt-2 uppercase tracking-wide">Years Exp</span>
            </div>
            <div className="stat-card bg-[var(--bg-card)] border border-[var(--bg-border)] rounded-xl flex flex-col items-center justify-center p-4">
              <span className="text-3xl font-bold text-[var(--neon-primary)] font-code">5+</span>
              <span className="text-xs text-center mt-2 uppercase tracking-wide">Projects</span>
            </div>
            <div className="stat-card bg-[var(--bg-card)] border border-[var(--bg-border)] rounded-xl flex flex-col items-center justify-center p-4">
              <span className="text-3xl font-bold text-[var(--neon-primary)] font-code">8+</span>
              <span className="text-xs text-center mt-2 uppercase tracking-wide">Tech Stack</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}