import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Cpu, Brain, Code2 } from 'lucide-react';
import { about } from '../data/resumeData';

const icons = [Zap, Cpu, Brain, Code2];

const interestEmoji = {
  Travelling: '✈️',
  Sports: '⚽',
  Movies: '🎬',
  Adventure: '🏔️',
};

function SectionLabel({ children }) {
  return (
    <p className="text-indigo-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
      {children}
    </p>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <SectionLabel>About Me</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
            Engineer by craft,{' '}
            <span className="gradient-text">builder by passion.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Left — bio wrapped in a card to match height */}
            <div className="glass-card rounded-2xl p-7 flex flex-col justify-between gap-6">
              <div className="space-y-4">
                <p className="text-gray-400 text-base leading-relaxed">{about.summary}</p>
                <p className="text-gray-500 text-base leading-relaxed">{about.passion}</p>
              </div>

              {/* Interests */}
              <div>
                <p className="text-gray-600 text-xs font-semibold uppercase tracking-widest mb-3">
                  Beyond the screen
                </p>
                <div className="flex flex-wrap gap-2">
                  {about.interests.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/8 text-gray-300 text-sm"
                    >
                      <span>{interestEmoji[item]}</span>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {about.highlights.map((h, i) => {
                const Icon = icons[i];
                return (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                    className="glass-card rounded-2xl p-5 hover:border-indigo-500/20 transition-colors group flex flex-col"
                  >
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-3 group-hover:bg-indigo-500/20 transition-colors">
                      <Icon size={18} className="text-indigo-400" />
                    </div>
                    <p className="text-white font-semibold text-sm mb-1">{h.label}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{h.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
