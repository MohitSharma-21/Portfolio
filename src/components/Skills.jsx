import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../data/resumeData';

function SectionLabel({ children }) {
  return (
    <p className="text-indigo-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
      {children}
    </p>
  );
}

// Animated skill bar row
function SkillBar({ name, level, delay, inView }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-gray-300 text-sm font-medium">{name}</span>
        <span className="text-gray-600 text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-500"
        />
      </div>
    </div>
  );
}

// Pill badge for tools
function Badge({ children, delay, inView }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3, delay }}
      className="inline-flex px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/8 text-gray-300 hover:border-indigo-500/40 hover:text-indigo-300 hover:bg-indigo-500/5 transition-all cursor-default"
    >
      {children}
    </motion.span>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section-padding bg-[#080808]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel>Technical Skills</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-14">
            Stack &amp; <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500" />
              <h3 className="text-white font-semibold text-base">Languages</h3>
            </div>
            {skills.languages.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} delay={0.2 + i * 0.08} inView={inView} />
            ))}
          </motion.div>

          {/* Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 rounded-full bg-gradient-to-b from-blue-500 to-cyan-500" />
              <h3 className="text-white font-semibold text-base">Frameworks</h3>
            </div>
            {skills.frameworks.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} delay={0.3 + i * 0.08} inView={inView} />
            ))}
          </motion.div>

          {/* Tools & Databases */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 rounded-full bg-gradient-to-b from-emerald-500 to-teal-500" />
              <h3 className="text-white font-semibold text-base">Tools &amp; Platforms</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((t, i) => (
                <Badge key={t} delay={0.4 + i * 0.04} inView={inView}>
                  {t}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
