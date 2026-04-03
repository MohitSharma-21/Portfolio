import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { achievements, currentlyLearning } from '../data/resumeData';
import { BookOpen } from 'lucide-react';

function SectionLabel({ children }) {
  return (
    <p className="text-indigo-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
      {children}
    </p>
  );
}

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="achievements" className="section-padding bg-[#080808]">
      <div className="max-w-5xl mx-auto" ref={ref}>

        {/* ─── Achievements ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionLabel>Recognition</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            What I'm <span className="gradient-text">Proud Of</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-6 hover:border-indigo-500/20 transition-all group"
              >
                {/* Emoji icon */}
                <div className="text-3xl mb-4">{a.icon}</div>

                {/* Metric badge */}
                <div className="inline-flex px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold mb-3">
                  {a.metric}
                </div>

                <h3 className="text-white font-bold text-base mb-2 group-hover:text-indigo-300 transition-colors">
                  {a.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── Currently Learning ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <BookOpen size={20} className="text-indigo-400" />
            <h3 className="text-white font-bold text-xl">
              Currently <span className="gradient-text">Learning</span>
            </h3>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentlyLearning.map((item, i) => (
              <motion.div
                key={item.topic}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.08 }}
                className="glass-card rounded-xl p-4 hover:border-indigo-500/20 transition-colors"
              >
                <p className="text-indigo-400 font-semibold text-sm mb-1">{item.topic}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
