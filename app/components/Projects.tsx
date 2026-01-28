interface ProjectProps {
  title: string;
  description: string;
  accentColor: "purple" | "blue" | "pink";
}

function ProjectCard({ title, description, accentColor }: ProjectProps) {
  const accentColors = {
    purple: "text-pastel-purple shadow-pastel-purple/10",
    blue: "text-pastel-blue shadow-pastel-blue/10",
    pink: "text-pastel-pink shadow-pastel-pink/10",
  };

  return (
    <div className="group relative rounded-3xl glass-panel p-1 transition-all duration-500 hover:scale-[1.02]">
      {/* Inner card content */}
      <div className="bg-black/40 rounded-[22px] p-8 h-full">
        <h3 className={`text-2xl font-semibold mb-3 ${accentColors[accentColor]}`}>
          {title}
        </h3>
        <p className="text-zinc-400 font-light text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-600 group-hover:text-white transition-colors">
          View Case Study <span>→</span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const myProjects: { title: string; description: string; color: "purple" | "blue" | "pink" }[] = [
    { title: "Lumina", description: "A design system built for the next generation of web apps.", color: "purple" },
    { title: "Nebula", description: "Real-time data visualization with a focus on fluidity.", color: "blue" },
    { title: "Quartz", description: "An experimental physics-based UI playground.", color: "pink" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {myProjects.map((p, i) => (
          <ProjectCard key={i} title={p.title} description={p.description} accentColor={p.color} />
        ))}
      </div>
    </section>
  );
}