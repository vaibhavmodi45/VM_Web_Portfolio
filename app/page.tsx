import Hero from '@/components/sections/Hero';

export const metadata = {
  title: 'Vaibhav Modi | Portfolio',
  description: 'Full-Stack Developer & CS Engineer',
};

export default function Home() {
  return (
    <main className="bg-[var(--bg-primary)] min-h-screen text-[var(--text-primary)] font-body selection:bg-[var(--neon-primary)] selection:text-black">
      {/* 1. Navbar will go here */}
      <Hero />
      {/* 3. About */}
      {/* 4. Experience */}
      {/* 5. Skills */}
      {/* 6. Projects */}
      {/* 7. Contact */}
      {/* 8. Footer */}
    </main>
  );
}