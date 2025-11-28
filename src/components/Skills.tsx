import { Scale } from 'lucide-react';

const skills = [
  'Legal Research & Drafting',
  'Contract Negotiation & Compliance',
  'Alternative Dispute Resolution (ADR)',
  'Intellectual Property & Data Protection',
  'Corporate & Employment Law Advisory',
  'Public Speaking & Legal Advocacy',
  'Client Advisory & Communication',
  'Strategic Problem-Solving & Decision-Making'
];

export default function Skills() {
  return (
    <section className="py-16 px-6 bg-transparent border-b border-slate-200/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-black mb-2 text-center animate-fade-in-up">Areas of Expertise</h2>
        <div className="h-px w-24 bg-amber-600 mx-auto mb-10 animate-fade-in-up animate-delay-100"></div>
        <div className="grid md:grid-cols-2 gap-3 animate-fade-in animate-delay-200">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-white/80 backdrop-blur-sm border border-slate-300/50 hover:bg-amber-50/90 hover:border-amber-600 hover:shadow-md transition-all duration-300 rounded-md"
            >
              <Scale className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
              <span className="text-gray-900 text-sm font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
