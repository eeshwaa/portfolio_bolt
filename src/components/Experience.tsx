import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Co-Founder & Legal-Tech Strategist',
    company: 'ResolveIQ (AI-Powered ADR Platform)',
    period: '2025',
    highlights: [
      'Developed ResolveIQ, an AI-driven platform integrating case management, ADR-focused video conferencing, legal research, and a career pathway hub',
      'Built the problem-solution model, workflow automation, and AI features such as smart scheduling, transcription, sentiment analysis, and precedent extraction',
      'Created SaaS revenue tiers (Solo, Firm, Institutional) and conducted market research across Canadian ADR and legal sectors',
      'Designed the go-to-market plan targeting law firms, ADR bodies, and law schools'
    ]
  },
  {
    title: 'Executive Head Legal',
    company: 'Celcom Solutions Global Pvt. Ltd.',
    period: '2023–2025',
    highlights: [
      'Ensured corporate compliance (IT laws, data protection, IP, contracts)',
      'Drafted/negotiated SaaS, vendor, and licensing agreements',
      'Managed disputes, arbitration, and litigation coordination',
      'Advised on M&A, due diligence, and employment law matters',
      'Handled regulatory liaison for seamless business operations'
    ]
  },
  {
    title: 'Legal Executive',
    company: 'Attire of Arts',
    period: '2024–2025',
    highlights: [
      'Ensured compliance with consumer and IP laws in the fashion sector',
      'Drafted/negotiated vendor and brand collaboration contracts',
      'Managed trademark/copyright protection and infringement prevention',
      'Developed compliance policies for ethical sourcing and sustainability'
    ]
  },
  {
    title: 'Advocate',
    company: 'Sylaw Law Associates',
    period: '2024',
    highlights: [
      'Drafted pleadings, case briefs, and assisted in court matters and litigation strategy',
      'Conducted legal research, precedent analysis, and handled client communications',
      'Reviewed and contributed to drafting agreements and compliance documents'
    ]
  },
  {
    title: 'Legal Executive',
    company: 'Kalanjiyam NGO',
    period: '2023',
    highlights: [
      'Drafted/reviewed legal documents and compliance filings',
      'Conducted research on welfare laws and supported due-diligence tasks',
      'Coordinated with government bodies for project-related legal needs'
    ]
  },
  {
    title: 'Legal Intern',
    company: 'WhatAboutLaw PC',
    period: '2024',
    highlights: [
      'Assisted in drafting Judicial Review applications, Memoranda of Fact and Law, and Applicant Replies before the Federal Court',
      'Conducted legal research on immigration and administrative law, with emphasis on mandamus and procedural fairness',
      'Collaborated with senior counsel on litigation strategy and maintained case law banks'
    ]
  }
];

export default function Experience() {
  const businessProject = experiences[0];
  const otherExperiences = experiences.slice(1);

  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-12 text-center">Professional Experience</h2>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-black mb-8">Business Projects</h3>
          <div
            key="project"
            className="border-l-4 border-black pl-6 py-4 hover:bg-gray-50 transition-colors duration-300 rounded-r-lg"
          >
            <div className="flex items-start gap-3 mb-3">
              <Briefcase className="w-6 h-6 text-black flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-black">{businessProject.title}</h3>
                <p className="text-lg text-gray-800 font-semibold">{businessProject.company}</p>
                <p className="text-sm text-gray-600 mt-1">{businessProject.period}</p>
              </div>
            </div>
            <ul className="space-y-2 mt-4">
              {businessProject.highlights.map((highlight, idx) => (
                <li key={idx} className="text-gray-700 leading-relaxed pl-4">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mr-3"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="text-3xl font-bold text-black mb-8">Employment History</h3>
        <div className="space-y-8">
          {otherExperiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-4 border-black pl-6 py-4 hover:bg-gray-50 transition-colors duration-300 rounded-r-lg"
            >
              <div className="flex items-start gap-3 mb-3">
                <Briefcase className="w-6 h-6 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-black">{exp.title}</h3>
                  <p className="text-lg text-gray-800 font-semibold">{exp.company}</p>
                  <p className="text-sm text-gray-600 mt-1">{exp.period}</p>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-gray-700 leading-relaxed pl-4">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mr-3"></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
