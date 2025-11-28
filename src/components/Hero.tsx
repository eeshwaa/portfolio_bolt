export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3 tracking-tight whitespace-nowrap">
            EESHWAA CHOLA DEVAN GEETHA
          </h1>
          <div className="h-px w-32 bg-amber-500 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-amber-400 font-light uppercase tracking-widest">
            Legal Professional
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider font-medium text-slate-300">
          <a href="#about" className="hover:text-amber-400 border-b border-transparent hover:border-amber-400 transition-all duration-300 pb-1">
            Profile
          </a>
          <a href="#experience" className="hover:text-amber-400 border-b border-transparent hover:border-amber-400 transition-all duration-300 pb-1">
            Experience
          </a>
          <a href="#education" className="hover:text-amber-400 border-b border-transparent hover:border-amber-400 transition-all duration-300 pb-1">
            Education
          </a>
          <a href="#publications" className="hover:text-amber-400 border-b border-transparent hover:border-amber-400 transition-all duration-300 pb-1">
            Publications
          </a>
          <a href="#contact" className="hover:text-amber-400 border-b border-transparent hover:border-amber-400 transition-all duration-300 pb-1">
            Contact
          </a>
        </nav>
      </div>
    </section>
  );
}
