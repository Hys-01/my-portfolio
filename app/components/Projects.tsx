// 1. Define what a Project looks like (The "Type")
interface ProjectProps {
  title: string;
  description: string;
  accentColor: string;
}

// 2. Apply the type to the component
function ProjectCard({ title, description, accentColor }: ProjectProps) {
  // We map the color string to a specific class so Tailwind can find it during build
  const accentClasses: Record<string, string> = {
    purple: "hover:border-pastel-purple/50 text-pastel-purple/80",
    blue: "hover:border-pastel-blue/50 text-pastel-blue/80",
    pink: "hover:border-pastel-pink/50 text-pastel-pink/80",
  };

  const lineClasses: Record<string, string> = {
    purple: "via-pastel-purple/20",
    blue: "via-pastel-blue/20",
    pink: "via-pastel-pink/20",
  };

  return (
    <div className={`group relative overflow-hidden rounded-2xl glass p-8 transition-all border border-white/5 ${accentClasses[accentColor] || ""}`}>
      {/* The "Gloss" Shine Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
      
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-zinc-500 text-sm leading-relaxed">{description}</p>
      
      {/* Bottom Accent Line */}
      <div className={`mt-6 h-px w-full bg-gradient-to-r from-transparent ${lineClasses[accentColor]} to-transparent`} />
    </div>
  );
}

export default function Projects() {
  const myProjects = [
    { title: "Project Alpha", description: "A high-end dashboard with real-time gloss metrics.", color: "purple" },
    { title: "Project Beta", description: "Minimalist e-commerce with glassmorphism UI.", color: "blue" },
    { title: "Project Gamma", description: "Experimental pastel physics engine.", color: "pink" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-12 text-center">Selected Works</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myProjects.map((p, i) => (
          <ProjectCard 
            key={i} 
            title={p.title} 
            description={p.description} 
            accentColor={p.color} 
          />
        ))}
      </div>
    </section>
  );
}