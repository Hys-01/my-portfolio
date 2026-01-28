"use client";
import { motion } from "framer-motion";
import { Folder, ExternalLink, Star, GitFork } from "lucide-react";

// --- EDIT here ---
const PROJECTS = [
  {
    title: "YouTube Autoplay",
    description: "A JavaScript injection to disable automatic queuing of videos in a playlist",
    tags: ["JavaScript", "YouTube", "Script", "Browser", "Extension"],
    link: "https://github.com/Hys-01/YT-Autoplay-Off",
    stars: 1,
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-4 w-full bg-black text-white" id="projects">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3"
        >
          <span className="text-purple-500">01.</span> Featured Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group block p-6 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
    >
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Top Icons */}
        <div className="flex justify-between items-start mb-4 relative z-10">
            <Folder className="text-purple-400" size={40} strokeWidth={1.5} />
            <div className="flex gap-4 text-gray-400">
                <ExternalLink size={20} className="hover:text-white transition-colors" />
            </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors relative z-10">
            {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-6 h-20 overflow-hidden relative z-10">
            {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto relative z-10">
            {project.tags.map((tag: string) => (
                <span key={tag} className="text-xs font-mono text-purple-300 bg-purple-500/10 px-2 py-1 rounded">
                    {tag}
                </span>
            ))}
        </div>
    </motion.a>
  );
}