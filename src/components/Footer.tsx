import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

// Custom icons
const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const KaggleIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 32 32">
    <path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 13 9 L 15 9 L 15 16.367188 L 19.628906 12.089844 L 22.148438 12.089844 L 17.511719 16.367188 L 22.480469 23 L 20.042969 23 L 16.140625 17.496094 L 15 18.574219 L 15 23 L 13 23 Z" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: '3D Lab', href: '#3d-lab' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <GithubIcon />,
      href: 'https://github.com/MonaRose1/',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon />,
      href: 'https://www.linkedin.com/in/maimoona-n/',
    },
    {
      name: 'Kaggle',
      icon: <KaggleIcon />,
      href: 'https://www.kaggle.com/monarosse',
    },
  ];

  return (
    <footer className="relative bg-slate-900 border-t border-slate-800">
      {/* Main Footer */}
      <SectionWrapper className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center gap-2 group">
              <img 
                src="public\logo.png" 
                alt="Mona.Dev Logo" 
                className="h-10 w-auto transform group-hover:scale-105 transition-transform duration-300"
              />
            </a>
            <p className="text-slate-400 text-sm max-w-xs">
              Full Stack Developer & ML Engineer crafting intelligent web applications 
              and AI-powered solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-400 hover:text-white hover:border-violet-500/50 transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a
                href="mailto:monadevdizayn@gmail.com"
                className="block text-slate-400 hover:text-white transition-colors text-sm"
              >
                monadevdizayn@gmail.com
              </a>
              <p className="text-slate-400 text-sm">
                Some where on Earth
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="https://www.kaggle.com/monarosse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors text-sm"
                >
                  <KaggleIcon />
                  Kaggle
                </a>
                <a
                  href="https://monarose1.github.io/Portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 transition-colors text-sm"
                >
                  View Old Portfolio →
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm flex items-center gap-1">
              © {currentYear} Mona.Devdizayn. Crafted with
              <Heart className="w-4 h-4 text-rose-500 inline mx-1" />
              in Pakistan
            </p>
            
            <button
              onClick={scrollToTop}
              className="p-3 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-xl text-white hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
