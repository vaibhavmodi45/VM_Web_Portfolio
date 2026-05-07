"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Github, Linkedin, Code2, Globe, MonitorPlay } from 'lucide-react';
import { personalData, socialLinks } from '@/lib/data';
import Link from 'next/link';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Basic Hero GSAP Animation
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-text-1', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2 });
      gsap.fromTo('.hero-text-2', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.4 });
      gsap.fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.6 });
      gsap.fromTo('.hero-code-card', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.8 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center relative overflow-hidden py-24 px-6 md:px-12 lg:px-24">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--neon-primary)]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--neon-primary)]/30 bg-[var(--neon-primary)]/10 text-[var(--neon-primary)] font-code text-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--neon-primary)] animate-pulse" />
            WELCOME TO MY UNIVERSE
          </div>
          
          <div className="space-y-4">
            <h1 className="hero-text-1 text-5xl md:text-7xl font-bold leading-tight">
              Crafting Digital
            </h1>
            <h1 className="hero-text-2 text-5xl md:text-7xl font-bold leading-tight text-gradient" style={{textShadow: "var(--glow-text)"}}>
              Masterpieces
            </h1>
          </div>

          <p className="hero-text-2 text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            I&apos;m {personalData.name}, a passionate {personalData.role.split('&')[0]} 
            dedicated to building high-performance, user-centric web applications.
          </p>

          <div className="hero-cta flex gap-4">
            <Link href={socialLinks.github} target="_blank" className="p-3 rounded-lg border border-[var(--bg-border)] hover:border-[var(--neon-primary)] hover:shadow-[var(--glow-sm)] transition-all bg-[var(--bg-card)]">
              <Github className="w-5 h-5 text-[var(--text-secondary)] hover:text-[var(--neon-primary)]" />
            </Link>
            <Link href={socialLinks.linkedin} target="_blank" className="p-3 rounded-lg border border-[var(--bg-border)] hover:border-[var(--neon-primary)] hover:shadow-[var(--glow-sm)] transition-all bg-[var(--bg-card)]">
              <Linkedin className="w-5 h-5 text-[var(--text-secondary)] hover:text-[var(--neon-primary)]" />
            </Link>
            <Link href={socialLinks.leetcode} target="_blank" className="p-3 rounded-lg border border-[var(--bg-border)] hover:border-[var(--neon-primary)] hover:shadow-[var(--glow-sm)] transition-all bg-[var(--bg-card)]">
              <Code2 className="w-5 h-5 text-[var(--text-secondary)] hover:text-[var(--neon-primary)]" />
            </Link>
          </div>

          <div className="hero-cta flex gap-4 pt-4">
            <a href="#contact" className="px-8 py-3 rounded-lg bg-[var(--neon-primary)] text-[#05080f] font-semibold hover:shadow-[var(--glow-md)] transition-all">
              Let&apos;s Collaborate
            </a>
            <a href={personalData.resume} target="_blank" rel="noreferrer" className="px-8 py-3 rounded-lg border border-[var(--neon-primary)] text-[var(--neon-primary)] hover:bg-[var(--neon-primary)]/10 hover:shadow-[var(--glow-sm)] transition-all">
              Get Resume
            </a>
          </div>
        </div>

        {/* Right Column (Code Card) */}
        <div className="lg:col-span-5 hidden lg:block hero-code-card">
          <div className="bg-[#0d1117] rounded-xl border border-[var(--neon-primary)]/50 shadow-[var(--glow-md)] overflow-hidden animate-[float_6s_ease-in-out_infinite]">
            <div className="flex px-4 py-3 border-b border-white/10 bg-white/5">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-4 text-xs font-code text-[var(--neon-primary)]">Portfolio.ts</div>
            </div>
            <div className="p-6 font-code text-sm leading-relaxed overflow-x-auto text-[var(--text-primary)]">
              <div className="flex"><span className="text-gray-500 w-6">01</span><span className="text-purple-400">const</span><span className="text-blue-300 ml-2">developer</span> <span className="text-cyan-400">=</span> {'{'}</div>
              <div className="flex"><span className="text-gray-500 w-6">02</span><span className="ml-4">name:</span> <span className="text-green-300">'Vaibhav Modi'</span>,</div>
              <div className="flex"><span className="text-gray-500 w-6">03</span><span className="ml-4">focus:</span> <span className="text-green-300">'Full-Stack Dev'</span>,</div>
              <div className="flex"><span className="text-gray-500 w-6">04</span><span className="ml-4">skills:</span> [<span className="text-green-300">'React'</span>, <span className="text-green-300">'Node'</span>, <span className="text-green-300">'Python'</span>, <span className="text-green-300">'AI'</span>],</div>
              <div className="flex"><span className="text-gray-500 w-6">05</span><span className="ml-4">passionate:</span> <span className="text-orange-400">true</span>,</div>
              <div className="flex"><span className="text-gray-500 w-6">06</span><span className="ml-4">motto:</span> <span className="text-green-300">"Build to Impact"</span></div>
              <div className="flex"><span className="text-gray-500 w-6">07</span>{'};'}</div>
              <div className="flex"><span className="text-gray-500 w-6">08</span><span className="text-blue-300">developer</span>.<span className="text-yellow-200">showcase</span>();</div>
            </div>
          </div>
        </div>
      </div>
{/* Custom Float animation in CSS */}
<style dangerouslySetInnerHTML={{__html: `
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
}
`}} />
    </section>
  );
}