import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { experience } from '../data/resumeData';

function SectionLabel({ children }) {
  return (
    <p className="text-indigo-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
      {children}
    </p>
  );
}

function TechPill({ tech }) {
  return (
    <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 text-gray-400 border border-white/8">
      {tech}
    </span>
  );
}

function ExperienceCard({ exp, index, inView, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative pl-8"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-3 top-10 bottom-0 w-px bg-gradient-to-b from-indigo-500/30 to-transparent" />
      )}

      {/* Timeline dot — green for current role, indigo for past */}
      <div className={`absolute left-0 top-2 w-6 h-6 rounded-full bg-[#1a1a1a] border-2 flex items-center justify-center ${
        exp.duration.includes('Present') ? 'border-green-500/60' : 'border-indigo-500/60'
      }`}>
        <div className={`w-2 h-2 rounded-full ${
          exp.duration.includes('Present') ? 'bg-green-400 animate-pulse' : 'bg-indigo-400'
        }`} />
      </div>

      {/* Card */}
      <div className="glass-card rounded-2xl p-6 mb-6 hover:border-indigo-500/20 transition-colors group">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-white font-bold text-lg group-hover:text-indigo-300 transition-colors">
              {exp.role}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              {/* Company badge */}
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold"
                style={{ backgroundColor: `${exp.color}18`, color: exp.color, border: `1px solid ${exp.color}35` }}
              >
                {exp.company}
              </span>
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-1 sm:justify-end">
              <Calendar size={11} />
              <span>{exp.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-600 text-xs sm:justify-end">
              <MapPin size={11} />
              <span>{exp.location}</span>
            </div>
          </div>
        </div>

        {/* Bullets */}
        <ul className="space-y-2.5 mb-5">
          {exp.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
              <span className="text-indigo-500 mt-1.5 flex-shrink-0 text-xs">▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {exp.tech.map(t => (
            <TechPill key={t} tech={t} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="experience" className="section-padding bg-[#080808]">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionLabel>Work Experience</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Where I've <span className="gradient-text">Worked</span>
          </h2>
        </motion.div>

        <div>
          {experience.map((exp, i) => (
            <ExperienceCard
              key={`${exp.company}-${i}`}
              exp={exp}
              index={i}
              inView={inView}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
