import React from 'react';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

export const AboutSection: React.FC = () => {
  const certifications = [
    'AI For Everyone - DeepLearning.AI',
    'IBM Data Science Professional Certificate',
    'Google Advanced Data Analytics Certificate',
  ];

  return (
    <section id="about" className="relative py-24 bg-slate-950">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-violet-500/10 rounded-full filter blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl" />
      </div>

      <SectionWrapper className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Passionate about building intelligent systems and beautiful web experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-violet-500 rounded-full" />
                Professional Summary
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Computer Science graduate and Full Stack Developer with a strong foundation in 
                building scalable web applications and AI-powered solutions. Proficient in the 
                MERN stack, Python, TensorFlow, and Scikit-Learn, with hands-on experience in 
                Deep Learning and model optimization.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Skilled in designing Agentic systems using frameworks like CrewAI and LangGraph, 
                and building automation pipelines with n8n. Passionate about applying technical 
                knowledge in full stack development and AI orchestration to contribute to 
                high-impact projects in professional roles.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-violet-500/10 to-violet-500/5 border border-violet-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-violet-400 mb-1">3.34</div>
                <div className="text-sm text-slate-400">CGPA</div>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-1">BS</div>
                <div className="text-sm text-slate-400">Graduate</div>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-6">
            {/* Education */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                Education
              </h3>
              
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-violet-500/30">
                  <div className="absolute left-0 top-0 w-3 h-3 bg-violet-500 rounded-full -translate-x-[7px]" />
                  <h4 className="font-semibold text-white">Bachelor of Science: Computer Science</h4>
                  <p className="text-slate-400 text-sm mt-1">University of Mianwali, Punjab</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      04/2022 - 2026 (Graduated)
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      Mianwali, Pakistan
                    </span>
                  </div>
                </div>
                
                <div className="relative pl-6 border-l-2 border-slate-700">
                  <div className="absolute left-0 top-0 w-3 h-3 bg-slate-600 rounded-full -translate-x-[7px]" />
                  <h4 className="font-semibold text-white">ICS - Certificate of Higher Education</h4>
                  <p className="text-slate-400 text-sm mt-1">PAEC Model College For Girls Chashma</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-400" />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-violet-500/30 transition-colors"
                  >
                    <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};
