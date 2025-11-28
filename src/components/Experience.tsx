import { Building2 } from 'lucide-react';

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
    <section id="experience" className="py-16 px-6 bg-transparent border-b border-slate-200/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-black mb-2 text-center animate-fade-in-up">Professional Experience</h2>
        <div className="h-px w-24 bg-amber-600 mx-auto mb-10 animate-fade-in-up animate-delay-100"></div>

        <div className="mb-12">
          <h3 className="text-xl font-serif font-semibold text-black mb-6 border-b border-amber-200 pb-2 animate-fade-in-up animate-delay-200">Business Projects</h3>
          <div
            key="project"
            className="bg-white border border-gray-300 p-6 shadow-sm"
          >
            <div className="flex items-start gap-3 mb-4">
              <Building2 className="w-5 h-5 text-black flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-black">{businessProject.title}</h3>
                <p className="text-base text-gray-700 font-medium">{businessProject.company}</p>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{businessProject.period}</p>
              </div>
            </div>
            <ul className="space-y-2 mt-4 border-t border-gray-200 pt-4">
              {businessProject.highlights.map((highlight, idx) => (
                <li key={idx} className="text-gray-700 text-sm leading-relaxed pl-4">
                  <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mr-3"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-serif font-semibold text-black mb-6 border-b border-amber-200 pb-2 animate-fade-in-up animate-delay-200">Employment History</h3>
        <div className="space-y-6">
          {otherExperiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm border border-slate-300/50 p-6 shadow-lg rounded-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <Building2 className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-black">{exp.title}</h3>
                  <p className="text-base text-gray-700 font-medium">{exp.company}</p>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">{exp.period}</p>
                </div>
              </div>
              <ul className="space-y-2 mt-4 border-t border-gray-200 pt-4">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-gray-700 text-sm leading-relaxed pl-4">
                    <span className="inline-block w-1.5 h-1.5 bg-black rounded-full mr-3"></span>
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
