import { Scale } from 'lucide-react';

const skills = [
  'Legal Research & Drafting',
  'Contract Negotiation & Compliance',
  'Alternative Dispute Resolution (ADR)',
  'Intellectual Property & Data Protection',
  'Corporate & Employment Law Advisory',
  'Public Speaking & Legal Advocacy',
  'Client Advisory & Communication',
  'Strategic Problem-Solving'
];

export default function Hero() {
  return (
    <section className="relative bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Scale className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 tracking-tight">
          EESHWAA.C.G
        </h1>
        <p className="text-xl md:text-2xl text-center text-gray-400 font-light tracking-wide mb-12">
          Legal Professional
        </p>

        <div className="mb-12 pb-12 border-b border-gray-800">
          <h2 className="text-sm font-semibold text-center text-gray-300 mb-6 uppercase tracking-wider">Expertise</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="text-center px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
          <a href="#contact" className="hover:text-white transition-colors duration-300">
            Contact
          </a>
          <a href="#experience" className="hover:text-white transition-colors duration-300">
            Experience
          </a>
          <a href="#education" className="hover:text-white transition-colors duration-300">
            Education
          </a>
          <a href="#publications" className="hover:text-white transition-colors duration-300">
            Publications
          </a>
        </div>
      </div>
    </section>
  );
}
