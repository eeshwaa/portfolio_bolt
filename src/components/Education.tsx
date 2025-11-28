import { BookOpen, Trophy, Shield } from 'lucide-react';

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

const certifications = [
  'Completed SafeTalk Certification'
];

const achievements = [
  'University 4th Rank in Undergraduation - B.A.LLB(Hons) Sathyabama Institute of Science and Technology',
  'Winner of Shri Lakhan Pal Mangala – Saraswati Law College, Haryana',
  'Runner-up of Sree Narayana Law College, 1st All India Virtual Moot Court Competition'
];

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-black mb-2 text-center">Education & Qualifications</h2>
        <div className="h-px w-24 bg-black mx-auto mb-10"></div>
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-50 p-5 border border-gray-300 hover:bg-white hover:border-black transition-all duration-300"
            >
              <BookOpen className="w-8 h-8 text-black mb-3" />
              <h3 className="text-base font-semibold text-black mb-2">{edu.degree}</h3>
              <p className="text-gray-700 text-sm mb-1">{edu.institution}</p>
              <p className="text-xs text-gray-500 uppercase tracking-wide">{edu.period}</p>
              {edu.highlight && (
                <div className="mt-3 pt-3 border-t border-gray-300">
                  <p className="text-gray-900 font-medium text-xs">{edu.highlight}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <h3 className="text-xl font-serif font-semibold text-black mb-4 border-b border-gray-300 pb-2">Certifications</h3>
        <div className="space-y-3 mb-12">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-300 hover:bg-white hover:border-black transition-all duration-300"
            >
              <Shield className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
              <p className="text-gray-900 text-sm font-medium">{certification}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-serif font-semibold text-black mb-4 border-b border-gray-300 pb-2">Achievements</h3>
        <div className="space-y-3">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-gray-50 border border-gray-300 hover:bg-white hover:border-black transition-all duration-300"
            >
              <Trophy className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
              <p className="text-gray-900 text-sm font-medium">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
