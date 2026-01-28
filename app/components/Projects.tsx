function ProjectCard({ title, description, accentColor }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl glass p-8 transition-all hover:border-${accentColor}/50 border border-white/5`}>
      {/* The "Gloss" Shine Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
      
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-zinc-500 text-sm leading-relaxed">{description}</p>
      
      {/* Bottom Accent Line */}
      <div className={`mt-6 h-px w-full bg-gradient-to-r from-transparent via-pastel-${accentColor}/20 to-transparent`} />
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
      
      {/* The Grid - This is what makes it look like a professional site */}
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