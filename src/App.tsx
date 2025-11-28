import Hero from './components/Hero';
import SkillsMarquee from './components/SkillsMarquee';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-stone-50 to-slate-50">
      <Hero />
      <SkillsMarquee />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Publications />
      <Contact />
    </div>
  );
}

export default App;
