import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import Navbar from '@/components/Navbar';
import ParticlesBg from '@/components/ui/ParticlesBg';

export const metadata = {
  title: 'Vaibhav Modi | Portfolio',
  description: 'Full-Stack Developer & CS Engineer',
};

export default function Home() {
  return (
    <main className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] font-body selection:bg-[var(--neon-primary)] selection:text-black overflow-x-hidden">
      <ParticlesBg />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}