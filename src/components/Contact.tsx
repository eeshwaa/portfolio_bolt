import { Mail, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white text-black border-t border-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Contact</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <a
            href="mailto:eeshwaacholadevangeetha@gmail.com"
            className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 border border-gray-200"
          >
            <Mail className="w-8 h-8 text-black flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600 mb-1">Email</p>
              <p className="text-lg break-all text-black">eeshwaacholadevangeetha@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/eeshwaa-chola-devangeetha-06b1a2215/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300 border border-gray-200"
          >
            <Linkedin className="w-8 h-8 text-black flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-600 mb-1">LinkedIn</p>
              <p className="text-lg text-black">Connect with me</p>
            </div>
          </a>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-200 text-center">
        <p className="text-gray-600">© 2025 Eeshwaa C.G. All rights reserved.</p>
      </div>
    </section>
  );
}
