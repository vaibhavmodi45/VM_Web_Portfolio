import React from 'react';

export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-block mb-4 relative">
      <h3 className="text-[var(--neon-primary)] uppercase font-code tracking-wider text-sm font-semibold">
        {children}
      </h3>
      <div className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-[var(--neon-primary)] shadow-[var(--glow-sm)]"></div>
    </div>
  );
}