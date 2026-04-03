import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Eye, Download } from 'lucide-react';
import { personal } from '../data/resumeData';

// Floating particle blob component
function Blob({ className }) {
  return (
    <div className={`absolute rounded-full blur-3xl opacity-20 animate-pulse-slow ${className}`} />
  );
}

// Stagger container for children
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  const scrollToProjects = () =>
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });

  const scrollToContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0d0d0d]"
    >
      {/* Background gradient blobs */}
      <Blob className="w-[600px] h-[600px] bg-indigo-600 -top-40 -left-40" />
      <Blob className="w-[500px] h-[500px] bg-purple-700 top-1/2 -right-60" />
      <Blob className="w-[400px] h-[400px] bg-blue-700 bottom-20 left-1/3" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
      >
        {/* Badge */}
        <motion.div variants={item} className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-4 leading-none"
        >
          Mohit Kumar{' '}
          <span className="gradient-text">Sharma</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={item}
          className="text-lg md:text-2xl font-medium text-gray-400 mb-3 tracking-wide"
        >
          Software Engineer &nbsp;·&nbsp; Microsoft&nbsp;
          <span className="text-indigo-400">@</span>&nbsp;Hyderabad
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="text-base md:text-lg text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm tracking-wide shadow-lg shadow-indigo-500/25 transition-colors"
          >
            View Projects
          </motion.button>

          {/* Resume split button: View | Download */}
          <div className="flex rounded-xl overflow-hidden border border-white/10 hover:border-indigo-500/40 transition-colors">
            <motion.a
              href={personal.resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ backgroundColor: 'rgba(99,102,241,0.12)' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-5 py-3.5 bg-white/5 text-gray-300 hover:text-white font-semibold text-sm tracking-wide transition-colors border-r border-white/10"
            >
              <Eye size={15} />
              View Resume
            </motion.a>
            <motion.a
              href={personal.resumePDF}
              download
              whileHover={{ backgroundColor: 'rgba(99,102,241,0.12)' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-5 py-3.5 bg-white/5 text-gray-300 hover:text-white font-semibold text-sm tracking-wide transition-colors"
            >
              <Download size={15} />
              Download
            </motion.a>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex justify-center gap-5">
          {[
            { icon: Github, href: personal.github, label: 'GitHub' },
            { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
            { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 text-gray-500 hover:text-indigo-400 transition-colors text-sm font-medium"
              aria-label={label}
            >
              <Icon size={18} />
              <span className="hidden sm:inline">{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 text-gray-600 hover:text-indigo-400 transition-colors"
      >
        <ArrowDown size={20} />
      </motion.button>
    </section>
  );
}
