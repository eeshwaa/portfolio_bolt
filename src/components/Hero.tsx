import { Scale } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white text-black py-20 px-6 border-b border-gray-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <Scale className="w-12 h-12 text-black" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3 tracking-tight whitespace-nowrap">
            EESHWAA CHOLA DEVAN GEETHA
          </h1>
          <div className="h-px w-32 bg-black mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-gray-600 font-light uppercase tracking-widest">
            Legal Professional
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider font-medium text-gray-700">
          <a href="#about" className="hover:text-black border-b border-transparent hover:border-black transition-all duration-300 pb-1">
            Profile
          </a>
          <a href="#experience" className="hover:text-black border-b border-transparent hover:border-black transition-all duration-300 pb-1">
            Experience
          </a>
          <a href="#education" className="hover:text-black border-b border-transparent hover:border-black transition-all duration-300 pb-1">
            Education
          </a>
          <a href="#publications" className="hover:text-black border-b border-transparent hover:border-black transition-all duration-300 pb-1">
            Publications
          </a>
          <a href="#contact" className="hover:text-black border-b border-transparent hover:border-black transition-all duration-300 pb-1">
            Contact
          </a>
        </nav>
      </div>
    </section>
  );
}
