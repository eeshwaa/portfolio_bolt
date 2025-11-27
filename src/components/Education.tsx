import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'B.A. LL.B (Hons.)',
    institution: 'Sathyabama Institute of Science & Technology, India',
    period: '2018 - 2023',
    highlight: 'University 4th Rank'
  },
  {
    degree: 'Alternative Dispute Resolution - PG Honours',
    institution: 'Humber College, Canada',
    period: '2024 - 2025'
  },
  {
    degree: 'Victimology',
    institution: 'Humber College, Canada',
    period: '2025 - Present'
  }
];

const achievements = [
  'University 4th Rank in Undergraduation - B.A.LLB(Hons) Sathyabama Institute of Science and Technology',
  'Winner of Shri Lakhan Pal Mangala – Saraswati Law College, Haryana',
  'Runner-up of Sree Narayana Law College, 1st All India Virtual Moot Court Competition'
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Education</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <GraduationCap className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
              <p className="text-slate-700 mb-2">{edu.institution}</p>
              <p className="text-sm text-slate-600">{edu.period}</p>
              {edu.highlight && (
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-amber-700 font-semibold text-sm">{edu.highlight}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Achievements</h2>
        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Award className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <p className="text-slate-800 text-lg">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
