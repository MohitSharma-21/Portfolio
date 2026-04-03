import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { personal } from '../data/resumeData';

function SectionLabel({ children }) {
  return (
    <p className="text-indigo-400 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
      {children}
    </p>
  );
}

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'mohitsharma2107',
    href: personal.linkedin,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'MohitSharma-21',
    href: personal.github,
    color: 'from-gray-500 to-gray-400',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="contact" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <SectionLabel>Contact</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Open to new opportunities, collaborations, or just a good engineering conversation.
          </p>
        </motion.div>

        {/* Contact links — centered, full width */}
        <div className="space-y-4">
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== 'Phone' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-white/10 transition-all group"
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.color} p-0.5 flex-shrink-0`}>
                <div className="w-full h-full rounded-[10px] bg-[#1a1a1a] flex items-center justify-center">
                  <link.icon size={16} className="text-white" />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-gray-600 text-xs font-medium uppercase tracking-wider">{link.label}</p>
                <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors break-all">
                  {link.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-5xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-600 text-xs"
      >
        <p>© 2026 Mohit Sharma. Crafted with React &amp; Tailwind.</p>
        <div className="flex gap-4">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
          <a href={`mailto:${personal.email}`} className="hover:text-indigo-400 transition-colors">Email</a>
        </div>
      </motion.div>
    </section>
  );
}
