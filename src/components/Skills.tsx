import { CheckCircle2 } from 'lucide-react';

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
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12 text-center">Expertise</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-black transition-all duration-300"
            >
              <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <span className="text-gray-900 text-lg">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
