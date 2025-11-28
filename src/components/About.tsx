export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-black mb-2 text-center">Professional Profile</h2>
        <div className="h-px w-24 bg-amber-600 mx-auto mb-8"></div>
        <div className="bg-white p-8 border border-slate-300 shadow-sm">
          <p className="text-gray-800 leading-loose text-base text-justify">
            A results-driven legal professional with experience in litigation, corporate compliance,
            ADR, and immigration research across India and Canada. Skilled in legal drafting, negotiation,
            and tribunal work. I bring a strong interest in legal innovation and co-founded ResolveIQ,
            an AI-powered ADR platform that blends legal expertise with modern technology to deliver
            efficient, client-focused solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
