import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-transparent text-black border-b border-slate-200/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-black mb-2 text-center animate-fade-in-up">Contact Information</h2>
        <div className="h-px w-24 bg-amber-600 mx-auto mb-10 animate-fade-in-up animate-delay-100"></div>
        <div className="grid md:grid-cols-2 gap-4">
          <a
            href="mailto:eeshwaacholadevangeetha@gmail.com"
            className="flex items-center gap-4 p-5 bg-white/70 backdrop-blur-sm hover:bg-white transition-all duration-300 border border-slate-300/50 hover:border-amber-600 hover:shadow-md rounded-lg"
          >
            <Mail className="w-6 h-6 text-black flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-600 mb-1 uppercase tracking-wide">Email</p>
              <p className="text-sm break-all text-black font-medium">eeshwaacholadevangeetha@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/eeshwaa-chola-devangeetha-06b1a2215/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-white/70 backdrop-blur-sm hover:bg-white transition-all duration-300 border border-slate-300/50 hover:border-amber-600 hover:shadow-md rounded-lg"
          >
            <Linkedin className="w-6 h-6 text-black flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-600 mb-1 uppercase tracking-wide">LinkedIn</p>
              <p className="text-sm text-black font-medium">Connect with me</p>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-slate-300 text-center">
        <p className="text-gray-600 text-xs uppercase tracking-wider">© 2025 Eeshwaa Chola Devangeetha. All rights reserved.</p>
      </div>
    </section>
  );
}
