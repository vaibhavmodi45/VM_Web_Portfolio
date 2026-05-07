"use client";
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPos = window.scrollY + 200;
      
      sections.forEach((section: any) => {
        if (section && section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-[#05080f]/80 backdrop-blur-md shadow-lg border-b border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-3 items-center">
        
        {/* Logo */}
        <a href="#" className="text-2xl font-bold font-code text-[var(--text-primary)] flex items-center group">
          <span className="text-[var(--neon-primary)] mr-1 group-hover:drop-shadow-[var(--glow-sm)] transition-all">&lt;</span>
          VM
          <span className="text-[var(--neon-primary)] ml-1 group-hover:drop-shadow-[var(--glow-sm)] transition-all">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex justify-center items-center gap-8 font-code text-sm">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`relative py-2 group text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-[var(--neon-primary)] transition-all duration-300 shadow-[var(--glow-sm)] ${activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="flex justify-end lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-[var(--text-primary)] focus:outline-none">
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-[#05080f] border-b border-[var(--bg-border)] transition-transform duration-300 origin-top ${mobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}>
        <div className="flex flex-col py-4 px-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-lg font-code py-2 border-b border-[var(--bg-border)] ${activeSection === link.href.substring(1) ? 'text-[var(--neon-primary)]' : 'text-[var(--text-secondary)]'}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}