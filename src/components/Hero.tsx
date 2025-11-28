import { Scale } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white text-black py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Scale className="w-16 h-16 text-black" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 tracking-tight">
          EESHWAA.C.G
        </h1>
        <p className="text-xl md:text-2xl text-center text-gray-700 font-light tracking-wide mb-12">
          Legal Professional
        </p>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
          <a href="#contact" className="hover:text-black transition-colors duration-300">
            Contact
          </a>
          <a href="#experience" className="hover:text-black transition-colors duration-300">
            Experience
          </a>
          <a href="#education" className="hover:text-black transition-colors duration-300">
            Education
          </a>
          <a href="#publications" className="hover:text-black transition-colors duration-300">
            Publications
          </a>
        </div>
      </div>
    </section>
  );
}
