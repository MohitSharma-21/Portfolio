import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, Send, CheckCircle } from 'lucide-react';
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
  {
    icon: Phone,
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, '')}`,
    color: 'from-emerald-500 to-teal-500',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  // Form state
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  // Opens mailto with pre-filled content
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Hi Mohit,\n\n${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.open(`mailto:${personal.email}?subject=${subject}&body=${body}`);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto" ref={ref}>
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

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'Phone' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-white/10 transition-all group"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${link.color} p-0.5`}>
                  <div className="w-full h-full rounded-[10px] bg-[#1a1a1a] flex items-center justify-center">
                    <link.icon size={16} className="text-white" />
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 text-xs font-medium uppercase tracking-wider">{link.label}</p>
                  <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="glass-card rounded-2xl p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-500 text-xs font-medium uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-500 text-xs font-medium uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-500 text-xs font-medium uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="What's on your mind?"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/8 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                  sent
                    ? 'bg-green-600/80 text-white'
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20'
                }`}
              >
                {sent ? (
                  <>
                    <CheckCircle size={16} />
                    Message sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="max-w-5xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-600 text-xs"
      >
        <p>© 2024 Mohit Kumar Sharma. Crafted with React &amp; Tailwind.</p>
        <div className="flex gap-4">
          <a href={personal.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">GitHub</a>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
          <a href={`mailto:${personal.email}`} className="hover:text-indigo-400 transition-colors">Email</a>
        </div>
      </motion.div>
    </section>
  );
}
