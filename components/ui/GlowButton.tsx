import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'primary' | 'outline';
}

export default function GlowButton({ children, icon: Icon, variant = 'primary', className = '', ...props }: GlowButtonProps) {
  const baseClasses = "flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.03]";
  const variants = {
    primary: "bg-[var(--neon-primary)] text-[#05080f] hover:shadow-[var(--glow-md)]",
    outline: "border border-[var(--neon-primary)] text-[var(--neon-primary)] hover:bg-[var(--neon-primary)]/10 hover:shadow-[var(--glow-sm)]"
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {Icon && <Icon className="w-5 h-5" />}
      {children}
    </button>
  );
}