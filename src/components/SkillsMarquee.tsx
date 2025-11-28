const legalSkills = [
  'Legal Research & Case Law Analysis (IRPA/IRPR, Federal Court jurisprudence, Administrative Law)',
  'Drafting Memoranda of Fact & Law, Affidavits, Legal Submissions & Tribunal Documents',
  'Litigation Support, Evidence Review & Procedural Documentation',
  'Mediation, Negotiation & Conflict Resolution (ADR-trained)',
  'Stakeholder Engagement & Dispute Systems Design',
  'Trauma-Informed & Client-Centred Practice',
  'Victimology Assessments, Crisis Awareness & Ethical Decision-Making',
  'Immigration Law Support (GCMS analysis, visa refusals, mandamus preparation)',
  'Client Interviewing, Intake, Confidential Communication',
  'Cross-Cultural Communication & Professional Ethics',
  'Academic Legal Writing, Report Development & Research Synthesis'
];

const technicalSkills = [
  'CanLII, IRB Portal, Lexum, Legal Databases',
  'MS Office Suite, Google Workspace',
  'Case Management Tools',
  'Data Interpretation & Analytical Tools'
];

export default function SkillsMarquee() {
  const allSkills = [...legalSkills, ...technicalSkills];
  const duplicatedSkills = [...allSkills, ...allSkills];

  return (
    <section className="py-8 bg-slate-800 border-y border-amber-500/30 overflow-hidden">
      <div className="mb-6">
        <h3 className="text-center text-amber-400 text-sm uppercase tracking-widest font-semibold mb-3">
          Legal Skills
        </h3>
        <div className="relative">
          <div className="flex animate-scroll-left">
            {duplicatedSkills.slice(0, legalSkills.length * 2).map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-2 mx-2 bg-slate-700/50 border border-slate-600 rounded-sm"
              >
                <span className="text-white text-sm whitespace-nowrap">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-center text-amber-400 text-sm uppercase tracking-widest font-semibold mb-3">
          Technical Skills
        </h3>
        <div className="relative">
          <div className="flex animate-scroll-right">
            {[...technicalSkills, ...technicalSkills, ...technicalSkills].map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-2 mx-2 bg-slate-700/50 border border-slate-600 rounded-sm"
              >
                <span className="text-white text-sm whitespace-nowrap">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 90s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
