import { Scale } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Scale className="w-16 h-16 text-amber-400" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 tracking-tight">
          EESHWAA.C.G
        </h1>
        <p className="text-xl md:text-2xl text-center text-slate-300 font-light tracking-wide">
          Legal Professional
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-slate-300">
          <a href="#contact" className="hover:text-amber-400 transition-colors duration-300">
            Contact
          </a>
          <a href="#experience" className="hover:text-amber-400 transition-colors duration-300">
            Experience
          </a>
          <a href="#education" className="hover:text-amber-400 transition-colors duration-300">
            Education
          </a>
          <a href="#publications" className="hover:text-amber-400 transition-colors duration-300">
            Publications
          </a>
        </div>
      </div>
    </section>
  );
}
