import React from 'react';

interface NeonCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function NeonCard({ children, className = '' }: NeonCardProps) {
  return (
    <div className={`bg-[var(--bg-card)] border border-[var(--bg-border)] rounded-xl p-6 transition-all duration-300 hover:border-[var(--neon-primary)] hover:shadow-[var(--glow-sm)] hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
}