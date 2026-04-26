import React from 'react';
import { SectionWrapper } from './SectionWrapper';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
  gradient: string;
}

export const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      gradient: 'from-violet-500 to-purple-500',
      skills: [
        { name: 'Python', level: 90, color: 'bg-violet-500' },
        { name: 'JavaScript', level: 85, color: 'bg-violet-400' },
        { name: 'C++', level: 70, color: 'bg-violet-600' },
        { name: 'SQL', level: 80, color: 'bg-purple-500' },
      ],
    },
    {
      title: 'Frontend Development',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      gradient: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'React.js', level: 85, color: 'bg-cyan-500' },
        { name: 'Redux', level: 75, color: 'bg-cyan-400' },
        { name: 'HTML5/CSS3', level: 90, color: 'bg-blue-500' },
        { name: 'SCSS/Tailwind', level: 85, color: 'bg-cyan-600' },
      ],
    },
    {
      title: 'Backend Development',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      gradient: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'Node.js/Express', level: 80, color: 'bg-emerald-500' },
        { name: 'FastAPI', level: 75, color: 'bg-teal-500' },
        { name: 'RESTful APIs', level: 85, color: 'bg-emerald-400' },
        { name: 'MongoDB', level: 80, color: 'bg-emerald-600' },
        { name: 'MySQL', level: 80, color: 'bg-teal-400' },
        { name: 'PostgreSQL', level: 70, color: 'bg-teal-600' },
      ],
    },
    {
      title: 'AI/ML & Deep Learning',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: 'from-pink-500 to-rose-500',
      skills: [
        { name: 'TensorFlow', level: 80, color: 'bg-pink-500' },
        { name: 'PyTorch', level: 75, color: 'bg-rose-500' },
        { name: 'Scikit-Learn', level: 85, color: 'bg-pink-400' },
        { name: 'CNNs/RNNs/LSTMs', level: 75, color: 'bg-rose-400' },
        { name: 'CrewAI/LangGraph', level: 70, color: 'bg-pink-600' },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      gradient: 'from-amber-500 to-orange-500',
      skills: [
        { name: 'Git/GitHub', level: 90, color: 'bg-amber-500' },
        { name: 'Docker', level: 65, color: 'bg-orange-500' },
        { name: 'CI/CD', level: 70, color: 'bg-amber-400' },
        { name: 'AWS', level: 60, color: 'bg-orange-400' },
        { name: 'Jest/PyTest', level: 75, color: 'bg-amber-600' },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 bg-slate-900/50">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(100 116 139 / 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <SectionWrapper className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development and AI engineering
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-slate-950/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${category.gradient} text-white`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-slate-300">{skill.name}</span>
                      <span className="text-xs text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-12 text-center">
          <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
            Other Competencies
          </h4>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Problem Solving', 'Data Structures', 'Algorithms', 'OOP',
              'Agile/SCRUM', 'Linux/Bash', 'Postman', 'Power BI', 
              'Tableau', 'Matplotlib', 'Seaborn', 'Jupyter Notebook',
              'Google Colab', 'n8n Automation', 'MERN Stack'
            ].map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm text-slate-400 hover:border-violet-500/30 hover:text-slate-300 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};
