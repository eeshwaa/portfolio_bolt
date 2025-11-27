import { Mail, Phone, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <a
            href="tel:+14378723439"
            className="flex items-center gap-4 p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300"
          >
            <Phone className="w-8 h-8 text-amber-400 flex-shrink-0" />
            <div>
              <p className="text-sm text-slate-400 mb-1">Phone</p>
              <p className="text-lg">+1 (437) 872-3439</p>
            </div>
          </a>

          <a
            href="mailto:eeshwaacholadevangeetha@gmail.com"
            className="flex items-center gap-4 p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300"
          >
            <Mail className="w-8 h-8 text-amber-400 flex-shrink-0" />
            <div>
              <p className="text-sm text-slate-400 mb-1">Email</p>
              <p className="text-lg break-all">eeshwaacholadevangeetha@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/eeshwaa-chola-devangeetha-06b1a2215/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors duration-300"
          >
            <Linkedin className="w-8 h-8 text-amber-400 flex-shrink-0" />
            <div>
              <p className="text-sm text-slate-400 mb-1">LinkedIn</p>
              <p className="text-lg">Connect with me</p>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-slate-800 text-center">
        <p className="text-slate-400">© 2025 Eeshwaa C.G. All rights reserved.</p>
      </div>
    </section>
  );
}
