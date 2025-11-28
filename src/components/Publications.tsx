import { ScrollText } from 'lucide-react';

const publications = [
  {
    title: 'Environs and Sustainable Development in Our Country India',
    venue: 'National Conference, School of Law, Sathyabama Institute of Science and Technology, Chennai, India'
  },
  {
    title: 'Live in Relationship in India is Still a Taboo?',
    venue: 'Seminar on Changing Dimensions of Family Law in India, School of Excellence in Law, Tamil Nadu Dr. Ambedkar Law University'
  },
  {
    title: 'A Study on Identifying Suspected Serial Sexual Offenders Using Forensic DNA Evidence',
    venue: 'National Conference on Modern Trends in Technology and its Impact on Crime and Justice System, Vellore Institute of Technology'
  },
  {
    title: 'Cryptocurrencies in India - Issues and Challenges',
    venue: 'Birmingham Law School 11th Conference of the Postgraduate and Early Professionals/Academics Network of the Society of International Economic Law (PEPA/SIEL) 2022'
  },
  {
    title: 'A Study on Balancing Privacy and National Security',
    venue: 'National Conference Data Protection and Security in Digital Governance-Legal Issues and Challenges, MGR Law University'
  }
];

const internships = [
  'Murugavel Advocate\'s Office',
  'P.V.S. Giridhar and Sai Associates',
  'KOVISE Foundation – International Arbitration',
  'Celcom Solutions Global Private Limited, Chennai',
  'Office Ministry of Corporate Affairs – South Region under Regional Director'
];

export default function Publications() {
  return (
    <section id="publications" className="py-16 px-6 bg-transparent border-b border-slate-200/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-black mb-2 text-center animate-fade-in-up">Publications & Research</h2>
        <div className="h-px w-24 bg-amber-600 mx-auto mb-10 animate-fade-in-up animate-delay-100"></div>
        <div className="space-y-4 mb-12 animate-fade-in animate-delay-200">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-slate-300/50 p-5 hover:border-amber-600 hover:shadow-lg transition-all duration-300 rounded-lg"
            >
              <div className="flex items-start gap-3">
                <ScrollText className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-base font-semibold text-black mb-2">{pub.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{pub.venue}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-serif font-semibold text-black mb-4 border-b border-amber-200 pb-2 animate-fade-in-up animate-delay-200">Internships</h3>
        <div className="grid md:grid-cols-2 gap-3 animate-fade-in animate-delay-300">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="p-4 bg-white/80 backdrop-blur-sm border border-slate-300/50 hover:border-amber-600 hover:shadow-md transition-all duration-300 rounded-md"
            >
              <p className="text-gray-900 text-sm font-medium">{internship}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
