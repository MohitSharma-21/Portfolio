import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

/**
 * Root App component — assembles all portfolio sections in order.
 * Each section is self-contained and independently animated.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white overflow-x-hidden">
      {/* Sticky navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        {/* 1. Hero — name, title, CTAs */}
        <Hero />

        {/* 2. About — summary and highlights */}
        <About />

        {/* 3. Skills — languages, frameworks, tools */}
        <Skills />

        {/* 4. Experience — timeline with achievement-focused bullets */}
        <Experience />

        {/* 5. Projects — featured work with bullet points */}
        <Projects />

        {/* 6. Education — IIT BHU */}
        <Education />

        {/* 7. Achievements + Currently Learning */}
        <Achievements />

        {/* 8. Contact — links + form */}
        <Contact />
      </main>
    </div>
  );
}
