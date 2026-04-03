import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Eye, Download } from 'lucide-react';
import { personal } from '../data/resumeData';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Academics', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Detect scroll for sticky background blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection('#' + entry.target.id);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach(s => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0d0d0d]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-white font-semibold text-base tracking-wide hover:text-indigo-400 transition-colors"
          whileHover={{ scale: 1.04 }}
        >
          Mohit Sharma
        </motion.button>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                activeSection === link.href
                  ? 'text-indigo-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
              {activeSection === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-indigo-500/10 rounded-lg border border-indigo-500/20"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Resume split button */}
        <div className="hidden md:flex items-center rounded-lg overflow-hidden border border-white/10 hover:border-indigo-500/40 transition-colors">
          <motion.a
            href={personal.resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ backgroundColor: 'rgba(99,102,241,0.15)' }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-gray-300 hover:text-white bg-white/5 border-r border-white/10 transition-colors"
          >
            <Eye size={13} />
            View
          </motion.a>
          <motion.a
            href={personal.resumePDF}
            download
            whileHover={{ backgroundColor: 'rgba(99,102,241,0.15)' }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-gray-300 hover:text-white bg-white/5 transition-colors"
          >
            <Download size={13} />
            Download
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className="md:hidden text-gray-400 hover:text-white transition-colors"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#111]/95 backdrop-blur-xl border-b border-white/5 px-6 pb-6 pt-2"
          >
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="block w-full text-left py-3 text-gray-300 hover:text-indigo-400 transition-colors text-sm font-medium border-b border-white/5"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-4 flex rounded-lg overflow-hidden border border-white/10">
              <a
                href={personal.resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 text-gray-300 text-sm font-semibold border-r border-white/10"
              >
                <Eye size={14} /> View
              </a>
              <a
                href={personal.resumePDF}
                download
                className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-white/5 text-gray-300 text-sm font-semibold"
              >
                <Download size={14} /> Download
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
