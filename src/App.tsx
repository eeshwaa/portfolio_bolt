import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
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
