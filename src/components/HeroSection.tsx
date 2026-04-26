import React from 'react';
import { ArrowDown, Mail, ExternalLink } from 'lucide-react';

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

import { Abstract3DCanvas } from './Abstract3DCanvas';
import { SectionWrapper } from './SectionWrapper';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Abstract3DCanvas />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80 z-10 pointer-events-none" />

      {/* Content - padded from top to avoid navbar overlap */}
      <SectionWrapper delay={0.2} className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 backdrop-blur-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm text-slate-300">Available for Full-Time Opportunities</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4">
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Maimoona
          </span>
        </h1>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
          <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Naumani
          </span>
        </h1>

        {/* Title */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-600/20 to-violet-600/10 border border-violet-500/30 text-violet-300 text-sm font-medium backdrop-blur-sm">
            Full Stack Developer
          </span>
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600/20 to-cyan-600/10 border border-cyan-500/30 text-cyan-300 text-sm font-medium backdrop-blur-sm">
            ML Engineer
          </span>
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600/20 to-emerald-600/10 border border-emerald-500/30 text-emerald-300 text-sm font-medium backdrop-blur-sm">
            AI Enthusiast
          </span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Computer Science graduate crafting intelligent web applications with modern frameworks 
          and building AI-powered solutions that make a difference.
        </p>

        {/* Creative Developer Quote */}
        <div className="relative max-w-3xl mx-auto mb-10 px-6 py-5 rounded-2xl bg-gradient-to-r from-violet-500/5 via-cyan-500/5 to-emerald-500/5 border border-slate-700/50 backdrop-blur-sm">
          <span className="absolute -top-3 left-6 px-3 py-0.5 text-xs font-mono text-violet-300 bg-slate-950 rounded-full border border-violet-500/30">
            // dev.philosophy
          </span>
          <p className="text-base md:text-lg text-slate-300 italic font-light leading-relaxed">
            <span className="text-violet-400 text-2xl font-serif">"</span>
            I don't just write code — I architect digital experiences where 
            <span className="text-cyan-400 font-medium"> logic dances with creativity </span>
            and every bug is just a feature in disguise waiting to be 
            <span className="text-emerald-400 font-medium"> debugged into brilliance</span>.
            <span className="text-violet-400 text-2xl font-serif">"</span>
          </p>
          <p className="text-xs text-slate-500 mt-2 font-mono">— Maimoona</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            View My Work
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white font-semibold rounded-full hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/MonaRose1/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:bg-slate-700/50 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-300 group"
          >
            <span className="text-slate-400 group-hover:text-violet-400 transition-colors"><GithubIcon /></span>
          </a>
          <a
            href="https://www.linkedin.com/in/maimoona-n/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:bg-slate-700/50 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group"
          >
            <span className="text-slate-400 group-hover:text-cyan-400 transition-colors"><LinkedInIcon /></span>
          </a>
          <a
            href="https://www.kaggle.com/monarosse"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:bg-slate-700/50 hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 group"
          >
            <span className="text-slate-400 group-hover:text-amber-400 transition-colors"><KaggleIcon /></span>
          </a>
          <a
            href="mailto:monadevdizayn@gmail.com"
            className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:bg-slate-700/50 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
          </a>
          <a
            href="https://monarose1.github.io/Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:bg-slate-700/50 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300 group"
          >
            <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-pink-400 transition-colors" />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-slate-500 hover:text-white transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </SectionWrapper>
    </section>
  );
};
