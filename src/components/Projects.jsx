import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { projects } from '../data/resumeData';

function SectionLabel({ children }) {
  return (
    <p className="text-indigo-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
      {children}
    </p>
  );
}

function TechPill({ tech }) {
  return (
    <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/15">
      {tech}
    </span>
  );
}

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative glass-card rounded-2xl p-7 hover:border-indigo-500/20 transition-all duration-300 flex flex-col"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/5 group-hover:to-purple-600/5 transition-all duration-500 pointer-events-none" />

      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          {project.featured && (
            <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 mb-1.5 block">
              Featured Project
            </span>
          )}
          <h3 className="text-white font-bold text-xl leading-tight group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-500 text-sm mt-0.5">{project.tagline}</p>
        </div>

        {/* Links */}
        <div className="flex gap-2 ml-4 flex-shrink-0">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/8 flex items-center justify-center text-gray-400 hover:text-white transition-all"
              aria-label="GitHub"
            >
              <Github size={16} />
            </motion.a>
          )}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -1 }}
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-indigo-500/20 border border-white/8 flex items-center justify-center text-gray-400 hover:text-indigo-400 transition-all"
              aria-label="Live Demo"
            >
              <ExternalLink size={16} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Bullet points */}
      <ul className="space-y-2.5 mb-6 flex-1">
        {project.bullets.map((b, i) => (
          <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
            <span className="text-indigo-500 mt-1.5 flex-shrink-0 text-xs">▸</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
        {project.tech.map(t => (
          <TechPill key={t} tech={t} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="projects" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionLabel>Projects</SectionLabel>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Things I've <span className="gradient-text">Built</span>
            </h2>
            <motion.a
              href="https://github.com/MohitSharma-21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-400 hover:text-indigo-400 text-sm font-medium transition-colors group"
              whileHover={{ x: 3 }}
            >
              All projects on GitHub
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>

        {/* 2-column grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
