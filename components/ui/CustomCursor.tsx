"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only activate on devices with a fine pointer (e.g., mouse)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    // Apply global class to hide the default browser cursor
    document.body.classList.add('custom-cursor-active');

    const ring = ringRef.current;
    if (!ring) return;

    // Center the custom element by shifting it exactly half its width/height
    gsap.set(ring, { xPercent: -50, yPercent: -50 });
    
    // Slight delay on the ring for the smooth follow effect
    const xRing = gsap.quickTo(ring, "x", { duration: 0.15, ease: "power3.out" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.15, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      xRing(e.clientX);
      yRing(e.clientY);

      // Unhide cursor when movement detected
      if (ring.style.opacity === "0") {
        gsap.to(ring, { opacity: 1, duration: 0.3 });
      }
    };

    const onMouseLeave = () => {
      gsap.to(ring, { opacity: 0, duration: 0.3 });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Define what counts as highly interactive
      if (target.closest('a, button, input, textarea, select, [role="button"], .project-card, .exp-card, .skill-category')) {
        gsap.to(ring, { 
          scale: 1.5, 
          backgroundColor: "rgba(0, 200, 255, 0.1)", 
          borderColor: "#00c8ff",
          duration: 0.3 
        });
      } else {
        gsap.to(ring, { 
          scale: 1, 
          backgroundColor: "transparent", 
          borderColor: "#475569", // plain dark border (using text-muted color for visibility)
          duration: 0.3 
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseout', onMouseLeave);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseout', onMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
      document.body.classList.remove('custom-cursor-active');
    };
  }, []);

  return (
    <div 
      ref={ringRef}
      className="fixed top-0 left-0 w-8 h-8 border-[1.5px] border-[#475569] rounded-full pointer-events-none z-[9998] hidden md:block"
      style={{ opacity: 0 }}
    />
  );
}
