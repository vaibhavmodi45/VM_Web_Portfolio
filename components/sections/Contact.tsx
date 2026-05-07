"use client";
import React, { useState } from 'react';
import { personalData, socialLinks } from '@/lib/data';
import SectionLabel from '../ui/SectionLabel';
import NeonCard from '../ui/NeonCard';
import GlowButton from '../ui/GlowButton';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Message ready to send (Demo only)');
    setTimeout(() => setFormStatus(''), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative z-10">
      <SectionLabel>Communication</SectionLabel>
      <h2 className="text-4xl md:text-5xl font-bold mb-16 font-display">Let's Connect</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left: Contact Form */}
        <NeonCard className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-code text-[var(--text-secondary)]">Name</label>
              <input 
                type="text" 
                id="name" 
                required 
                className="w-full bg-[var(--bg-primary)] border border-[var(--bg-border)] rounded-md px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--neon-primary)] focus:ring-1 focus:ring-[var(--neon-primary)] transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-code text-[var(--text-secondary)]">Email</label>
              <input 
                type="email" 
                id="email" 
                required 
                className="w-full bg-[var(--bg-primary)] border border-[var(--bg-border)] rounded-md px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--neon-primary)] focus:ring-1 focus:ring-[var(--neon-primary)] transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-code text-[var(--text-secondary)]">Message</label>
              <textarea 
                id="message" 
                required 
                rows={5}
                className="w-full bg-[var(--bg-primary)] border border-[var(--bg-border)] rounded-md px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--neon-primary)] focus:ring-1 focus:ring-[var(--neon-primary)] transition-all resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            <GlowButton type="submit" className="w-full justify-center" icon={Send}>
              Send Message
            </GlowButton>
            {formStatus && <p className="text-[var(--neon-primary)] text-sm font-code mt-4 text-center">{formStatus}</p>}
          </form>
        </NeonCard>

        {/* Right: Info & Socials */}
        <div className="space-y-8">
          <div className="space-y-6">
            <a href={`mailto:${personalData.email}`} className="flex items-center gap-6 p-4 rounded-xl hover:bg-[var(--bg-card)] transition-colors group border border-transparent hover:border-[var(--bg-border)]">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--bg-card)] text-[var(--neon-primary)] group-hover:shadow-[var(--glow-sm)] transition-shadow">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[var(--text-secondary)] text-sm font-code mb-1">Email</h4>
                <p className="text-[var(--text-primary)] text-lg">{personalData.email}</p>
              </div>
            </a>

            <a href={`tel:${personalData.phone.replace(/\s+/g, '')}`} className="flex items-center gap-6 p-4 rounded-xl hover:bg-[var(--bg-card)] transition-colors group border border-transparent hover:border-[var(--bg-border)]">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--bg-card)] text-[var(--neon-primary)] group-hover:shadow-[var(--glow-sm)] transition-shadow">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[var(--text-secondary)] text-sm font-code mb-1">Phone</h4>
                <p className="text-[var(--text-primary)] text-lg">{personalData.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-6 p-4 rounded-xl">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--bg-card)] text-[var(--neon-primary)]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[var(--text-secondary)] text-sm font-code mb-1">Location</h4>
                <p className="text-[var(--text-primary)] text-lg">{personalData.location}</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[var(--bg-border)]">
            <h4 className="text-xl font-bold mb-6">Social Presence</h4>
            <div className="flex gap-4">
              <a href={socialLinks.github} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--bg-card)] border border-[var(--bg-border)] hover:border-[var(--neon-primary)] hover:text-[var(--neon-primary)] hover:shadow-[var(--glow-sm)] transition-all">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--bg-card)] border border-[var(--bg-border)] hover:border-[var(--neon-primary)] hover:text-[var(--neon-primary)] hover:shadow-[var(--glow-sm)] transition-all">
                <FaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}