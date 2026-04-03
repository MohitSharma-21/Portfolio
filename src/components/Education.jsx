import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Star } from 'lucide-react';
import { education } from '../data/resumeData';

function SectionLabel({ children }) {
  return (
    <p className="text-indigo-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
      {children}
    </p>
  );
}

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="education" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionLabel>Education</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card rounded-2xl p-8 hover:border-indigo-500/20 transition-colors"
        >
          {/* Institution header */}
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap size={26} className="text-indigo-400" />
            </div>

            <div className="flex-1">
              <h3 className="text-white font-bold text-xl leading-tight mb-1">
                {education.institution}
              </h3>
              <p className="text-gray-400 text-sm font-medium mb-1">{education.degree}</p>
              <p className="text-gray-600 text-xs">{education.duration}</p>
            </div>

            {/* CGPA badge */}
            <div className="flex-shrink-0 text-right">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/25">
                <Star size={12} className="text-amber-400" />
                <span className="text-amber-400 font-bold text-sm">CGPA {education.cgpa}</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/5 mt-6 pt-6">
            <p className="text-gray-600 text-xs uppercase tracking-widest font-semibold mb-3">Highlights</p>
            <ul className="space-y-2">
              {education.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-gray-400 text-sm">
                  <span className="text-indigo-500 mt-0.5 flex-shrink-0">▸</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
