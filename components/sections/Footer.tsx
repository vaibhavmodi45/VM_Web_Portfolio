import React from 'react';
import { personalData, socialLinks } from '@/lib/data';
import { Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#030608] border-t border-[var(--neon-primary)]/30 relative z-10 pt-16 pb-8">
      <div className="absolute top-0 left-0 w-full h-[1px] shadow-[0_0_10px_rgba(0,200,255,0.5)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <div className="text-2xl font-bold font-code text-[var(--text-primary)] mb-4 flex items-center">
              <span className="text-[var(--neon-primary)] mr-1">&lt;</span>
              VM
              <span className="text-[var(--neon-primary)] ml-1">/&gt;</span>
            </div>
            <p className="text-[var(--text-secondary)]">
              Crafting scalable and robust digital experiences with modern web technologies.
            </p>
          </div>

          <div className="md:text-center">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-[var(--text-secondary)] hover:text-[var(--neon-primary)] transition-colors">About</a>
              <a href="#experience" className="text-[var(--text-secondary)] hover:text-[var(--neon-primary)] transition-colors">Experience</a>
              <a href="#projects" className="text-[var(--text-secondary)] hover:text-[var(--neon-primary)] transition-colors">Projects</a>
            </nav>
          </div>

          <div className="md:text-right">
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="flex gap-4 md:justify-end">
              <Link href={socialLinks.github} target="_blank" className="text-[var(--text-secondary)] hover:text-[var(--neon-primary)] transition-colors">
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link href={socialLinks.linkedin} target="_blank" className="text-[var(--text-secondary)] hover:text-[var(--neon-primary)] transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link href={socialLinks.leetcode} target="_blank" className="text-[var(--text-secondary)] hover:text-[var(--neon-primary)] transition-colors">
                <Code2 className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center text-[var(--text-muted)] text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with <span className="text-red-500">❤️</span> in India</p>
        </div>
      </div>
    </footer>
  );
}