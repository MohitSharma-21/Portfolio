import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Cpu, Brain, Code2 } from 'lucide-react';
import { about } from '../data/resumeData';

const icons = [Zap, Cpu, Brain, Code2];

// Reusable fade-up animation hook
function useFadeUp() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return { ref, inView };
}

function SectionLabel({ children }) {
  return (
    <p className="text-indigo-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
      {children}
    </p>
  );
}

export default function About() {
  const { ref, inView } = useFadeUp();

  return (
    <section id="about" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <SectionLabel>About Me</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 leading-tight">
            Engineer by craft,<br />
            <span className="gradient-text">builder by passion.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Summary */}
            <div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {about.summary}
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                I believe great software is invisible — it just works, scales, and delights.
                Whether it's optimizing codec performance for millions of Teams users or shipping
                an LLM-powered copilot, I care deeply about <span className="text-gray-300">quality, speed, and impact</span>.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about.highlights.map((h, i) => {
                const Icon = icons[i];
                return (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                    className="glass-card rounded-2xl p-5 hover:border-indigo-500/20 transition-colors group"
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
