"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experiences } from '@/lib/data';
import SectionLabel from '../ui/SectionLabel';
import NeonCard from '../ui/NeonCard';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.exp-card');
      cards.forEach((card: any, i) => {
        const xOffset = i % 2 === 0 ? -50 : 50;
        gsap.fromTo(card, 
          { x: xOffset, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 0.8,
            scrollTrigger: { trigger: card, start: 'top 85%' }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={containerRef} className="py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto relative z-10">
      <SectionLabel>Professional Journey</SectionLabel>
      <h2 className="text-4xl md:text-5xl font-bold mb-16 font-display">Experience</h2>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[23px] md:left-1/2 top-4 bottom-0 w-[2px] bg-[var(--bg-border)] shadow-[var(--glow-sm)]"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const isCurrent = index === 0;
            
            const TitleContent = () => (
              <h4 className="flex items-center flex-wrap gap-2 text-xl font-bold text-[var(--text-primary)]">
                {exp.title}
                {isCurrent && (
                  <span className="text-[10px] md:text-xs uppercase font-bold tracking-wider px-2 py-0.5 rounded-full border border-green-500/50 text-green-400 bg-green-500/10 shadow-[0_0_8px_rgba(74,222,128,0.2)]">
                    Current
                  </span>
                )}
              </h4>
            );

            return (
              <div key={exp.id} className="relative flex flex-col md:flex-row items-start md:items-center w-full exp-card pl-16 md:pl-0">
                {/* Desktop layout elements */}
                <div className={`hidden md:block w-1/2 ${isLeft ? 'pr-12 text-right' : 'pl-12 ml-auto'}`}>
                  {isLeft && <NeonCard className="inline-block text-left relative z-10 w-full">
                    <TitleContent />
                    <div className="text-[var(--neon-primary)] font-medium mb-1 mt-1">{exp.company}</div>
                    <div className="text-sm text-[var(--text-muted)] font-code mb-4">{exp.duration}</div>
                    <ul className="text-[var(--text-secondary)] text-sm space-y-2 list-disc list-inside">
                      {exp.highlights.map((h, i) => <li key={i}>{h}</li>)}
                    </ul>
                  </NeonCard>}
                  {!isLeft && <NeonCard className="inline-block text-left relative z-10 w-full">
                    <TitleContent />
                    <div className="text-[var(--neon-primary)] font-medium mb-1 mt-1">{exp.company}</div>
                    <div className="text-sm text-[var(--text-muted)] font-code mb-4">{exp.duration}</div>
                    <ul className="text-[var(--text-secondary)] text-sm space-y-2 list-disc list-outside ml-3">
                      {exp.highlights.map((h, i) => <li key={i}>{h}</li>)}
                    </ul>
                  </NeonCard>}
                </div>

                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-[3px] z-20 ${isCurrent ? 'border-green-400 shadow-[0_0_10px_rgba(74,222,128,0.6)] animate-pulse' : 'border-[var(--neon-primary)] shadow-[var(--glow-sm)]'}`}></div>

                {/* Mobile Layout */}
                <div className="block md:hidden w-full">
                  <NeonCard>
                    <TitleContent />
                    <div className="text-[var(--neon-primary)] font-medium mb-1 mt-1">{exp.company}</div>
                    <div className="text-sm text-[var(--text-muted)] font-code mb-4">{exp.duration}</div>
                    <ul className="text-[var(--text-secondary)] text-sm space-y-2 list-disc list-outside ml-3">
                      {exp.highlights.map((h, i) => <li key={i}>{h}</li>)}
                    </ul>
                  </NeonCard>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}