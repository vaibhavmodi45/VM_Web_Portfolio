"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '@/lib/data';
import SectionLabel from '../ui/SectionLabel';
import NeonCard from '../ui/NeonCard';
import GlowButton from '../ui/GlowButton';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card', 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, opacity: 1, duration: 0.8, stagger: 0.3,
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10">
      <SectionLabel>Projects Showcase</SectionLabel>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Featured Creations</h2>
      <p className="text-[var(--text-secondary)] mb-16 max-w-2xl text-lg">A selection of impactful digital solutions, built with focus on scalability and exceptional UX.</p>

      <div className="space-y-24">
        {projects.map((project, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div key={project.id} className="project-card flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
              
              <div className={`w-full lg:w-1/2 relative group rounded-xl overflow-hidden border border-[var(--bg-border)] bg-[var(--bg-card)] aspect-video ${!isLeft ? 'lg:order-2' : ''}`}>
                <div className="absolute inset-0 bg-[var(--neon-primary)]/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500"></div>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 50vw" 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop';
                  }}
                />
              </div>

              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold text-[var(--text-primary)]">{project.title}</h3>
                <NeonCard className="p-6 text-[var(--text-secondary)] leading-relaxed relative z-20">
                  {project.description}
                </NeonCard>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="font-code text-xs px-3 py-1 rounded-full bg-[var(--neon-primary)]/10 text-[var(--neon-primary)] border border-[var(--neon-primary)]/30">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  {project.live !== "#" && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--neon-primary)] text-[#05080f] font-semibold hover:shadow-[var(--glow-md)] transition-all">
                      <ExternalLink className="w-4 h-4"/> Live Demo
                    </a>
                  )}
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--neon-primary)] text-[var(--neon-primary)] hover:bg-[var(--neon-primary)]/10 hover:shadow-[var(--glow-sm)] transition-all">
                    <FaGithub className="w-4 h-4" /> Source Code
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}