import Hero from './components/Hero';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-brand-black">
      {/* BACKGROUND LAYERS */}
      <div className="fixed inset-0 z-0">
        {/* The "Grain" texture */}
        <div className="absolute inset-0 bg-grain" />
        
        {/* Moving Orbs of Light */}
        <div className="shimmer-orb top-[-10%] left-[-10%] bg-pastel-purple animate-float" />
        <div className="shimmer-orb bottom-[-10%] right-[-10%] bg-pastel-blue animate-float" style={{ animationDelay: '-5s' }} />
      </div>

      {/* CONTENT LAYERS */}
      <div className="relative z-10">
        <Hero />
        <Projects />
      </div>
    </main>
  );
}