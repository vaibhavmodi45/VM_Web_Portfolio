"use client";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '../ui/SectionLabel';
import { 
  FaReact, FaPython, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaFigma, FaBootstrap
} from 'react-icons/fa';
import { 
  SiTypescript, SiJavascript, SiTailwindcss, SiJquery, SiFlask, SiMysql, SiMongodb, SiPostman
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const ROW_1_SKILLS = [
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'C', textIcon: 'C', color: '#A8B9CC' },
  { name: 'C++', textIcon: 'C++', color: '#00599C' },
];

const ROW_2_SKILLS = [
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Flask', icon: SiFlask, color: '#000000' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
  { name: 'jQuery', icon: SiJquery, color: '#0769AD' },
  { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
];

const SkillItem = ({ skill }: { skill: any }) => (
  <div className="flex-shrink-0 flex items-center justify-center p-4 min-w-[120px] rounded-xl bg-[var(--bg-card)] border border-[var(--bg-border)] group hover:-translate-y-2 hover:border-[var(--neon-primary)] hover:shadow-[var(--glow-md)] transition-all duration-300 mx-4 cursor-default">
    <div className="flex flex-col items-center gap-3">
      {skill.icon ? (
        <skill.icon className="text-4xl group-hover:drop-shadow-[0_0_8px_currentColor] transition-all duration-300" style={{ color: skill.color }} />
      ) : (
        <div className="text-3xl font-extrabold font-display leading-none group-hover:drop-shadow-[0_0_8px_currentColor] transition-all duration-300" style={{ color: skill.color }}>
          {skill.textIcon}
        </div>
      )}
      <span className="text-xs font-semibold tracking-wider text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
        {skill.name}
      </span>
    </div>
  </div>
);

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skills-header', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.6,
          scrollTrigger: { trigger: containerRef.current, start: 'top 80%' }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={containerRef} className="py-24 max-w-[100vw] overflow-hidden relative z-10">
      <div className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto skills-header text-center">
        <SectionLabel>Core Competencies</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 font-display">Technical Arsenal</h2>
      </div>

      <div className="relative w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
        
        {/* Row 1: Right to Left */}
        <div className="flex w-max mb-8 group">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
            {[...ROW_1_SKILLS, ...ROW_1_SKILLS, ...ROW_1_SKILLS].map((skill, i) => (
              <SkillItem key={`r1-${i}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="flex w-max group">
          <div className="flex animate-marquee-reverse group-hover:[animation-play-state:paused] whitespace-nowrap">
            {[...ROW_2_SKILLS, ...ROW_2_SKILLS, ...ROW_2_SKILLS].map((skill, i) => (
              <SkillItem key={`r2-${i}`} skill={skill} />
            ))}
          </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
      `}</style>
    </section>
  );
}