import { FileText } from 'lucide-react';

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
    <section id="publications" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Published Papers</h2>
        <div className="space-y-6 mb-16">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="border-l-4 border-slate-300 pl-6 py-4 hover:border-amber-600 hover:bg-slate-50 transition-all duration-300 rounded-r-lg"
            >
              <div className="flex items-start gap-3">
                <FileText className="w-6 h-6 text-slate-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{pub.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{pub.venue}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Internships</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {internships.map((internship, index) => (
            <div
              key={index}
              className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-amber-600 hover:shadow-md transition-all duration-300"
            >
              <p className="text-slate-800 font-medium">{internship}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
