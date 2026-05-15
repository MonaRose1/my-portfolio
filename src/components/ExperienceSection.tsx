import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  type: 'fulltime' | 'internship' | 'simulation' | 'freelance';
  current?: boolean;
  roles?: { title: string; period: string; location: string; description: string }[];
}

export const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: 'Full Stack Developer & AI Automation Engineer',
      company: 'Freelance (Collaboration with Hanzla Bin Shakeel)',
      location: 'Remote',
      period: 'Apr 2026 - Present',
      description: [
        'Partnering with university senior on high-impact full-stack and AI automation projects',
        'Designing and implementing intelligent automation workflows and scalable web architectures',
        'Focusing on cutting-edge AI integration and efficient system orchestration',
      ],
      technologies: ['React.js', 'Node.js', 'AI Automation', 'n8n', 'Python', 'LangChain'],
      type: 'freelance',
      current: true,
    },
    {
      title: 'MERN Stack Developer',
      company: 'Meta Binaire',
      location: 'Islamabad, Pakistan · Hybrid',
      period: 'Dec 2025 - Mar 2026',
      description: [
        'Built scalable web apps with MongoDB, Express, React, and Node.js',
        'Designed RESTful APIs and collaborated with cross-functional teams',
        'Developed responsive and performant front-end interfaces using React.js',
        'Worked on full-stack features and contributed to production-level code',
      ],
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git'],
      type: 'fulltime',
    },
    {
      title: 'COO & Graphic Designer',
      company: 'Nextive.online',
      location: 'Mianwali District, Punjab, Pakistan',
      period: 'Jul 2025 - Jan 2026',
      description: [
        'Led operations as COO — driving strategy execution and overseeing projects & teams for optimal performance',
        'Focused on operational excellence and delivering measurable results',
        'Served as Lead Graphic Designer, creating visual branding and marketing materials',
        'Managed cross-functional coordination between design, development, and management teams',
      ],
      technologies: ['Leadership', 'Operations', 'Adobe Illustrator', 'Adobe Photoshop', 'Strategy', 'Team Management'],
      type: 'fulltime',
      roles: [
        { title: 'Chief Operating Officer', period: 'Aug 2025 - Jan 2026 · 6 mos', location: 'Hybrid', description: 'Leading operations, driving strategy execution, and overseeing projects & teams.' },
        { title: 'Graphic Designer', period: 'Jul 2025 - Jan 2026 · 7 mos', location: 'Remote', description: 'Lead Graphic Designer for the company.' },
      ],
    },
    {
      title: 'Graphic Designer',
      company: 'Self-employed',
      location: 'On-site',
      period: 'Jan 2024 - Present',
      description: [
        'Providing professional graphic design services independently',
        'Creating visual content, branding, and digital marketing assets',
        'Working with various clients on diverse design projects',
      ],
      technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Branding', 'UI Design'],
      type: 'freelance',
      current: true,
    },
    {
      title: 'MERN Stack Intern',
      company: '10Pearls',
      location: 'Remote, Pakistan',
      period: 'Sep 2025 - Nov 2025',
      description: [
        'Worked on frontend/backend web development projects using the MERN stack',
        'Collaborated with teams using Git for version control and code reviews',
        'Improved skills in problem-solving & API integration',
        'Built responsive and interactive user interfaces',
      ],
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Git'],
      type: 'internship',
    },
    {
      title: 'Software Development Intern',
      company: 'Forage (Datacom Simulation)',
      location: 'Remote',
      period: 'Jul 2025',
      description: [
        'Completed a simulation focused on how the software development team at Datacom approaches their work',
        'Reviewed a web application and planned for future improvements',
        'Identified the root cause of bugs and implemented fixes to improve the application',
      ],
      technologies: ['Software Development', 'Bug Fixing', 'Code Review', 'Agile'],
      type: 'simulation',
    },
    {
      title: 'Lead Designer & Social Media Content Manager',
      company: 'We Make Designs For',
      location: 'Remote',
      period: '2024 - 2025',
      description: [
        'Created and managed content for social media, web banners, and promo ads',
        'Designed major visuals for brands like "Complex Care Concepts" and "Bella Construction"',
      ],
      technologies: ['Graphic Design', 'Social Media Management', 'Content Creation', 'Branding'],
      type: 'fulltime',
    },
    {
      title: 'Freelance Graphic Designer',
      company: 'HM4Designs (Partnership)',
      location: 'Remote',
      period: '2022 - 2025',
      description: [
        'Led creative direction for branding, book designs, and marketing materials',
        'Delivered impactful visual identities aligned with client vision',
        'Developed UI/UX and website designs integrated with custom coding',
      ],
      technologies: ['Graphic Design', 'UI/UX Design', 'Web Design', 'Coding', 'Branding'],
      type: 'freelance',
    },
  ];

  const getTypeBadge = (type: string, current?: boolean) => {
    if (current && type === 'freelance') {
      return {
        className: 'bg-pink-500/10 text-pink-400 border border-pink-500/20',
        label: 'Freelance',
      };
    }
    switch (type) {
      case 'fulltime':
        return {
          className: 'bg-violet-500/10 text-violet-400 border border-violet-500/20',
          label: 'Full-time',
        };
      case 'internship':
        return {
          className: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
          label: 'Internship',
        };
      case 'simulation':
        return {
          className: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
          label: 'Simulation',
        };
      case 'freelance':
        return {
          className: 'bg-pink-500/10 text-pink-400 border border-pink-500/20',
          label: 'Freelance',
        };
      default:
        return { className: '', label: '' };
    }
  };

  const getIconGradient = (type: string) => {
    switch (type) {
      case 'fulltime':
        return 'from-violet-500/20 to-cyan-500/20 border-violet-500/30';
      case 'internship':
        return 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30';
      case 'simulation':
        return 'from-amber-500/20 to-orange-500/20 border-amber-500/30';
      case 'freelance':
        return 'from-pink-500/20 to-rose-500/20 border-pink-500/30';
      default:
        return 'from-violet-500/20 to-cyan-500/20 border-violet-500/30';
    }
  };

  return (
    <section id="experience" className="relative py-24 bg-slate-950">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-violet-500/5 rounded-full filter blur-3xl" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-pink-500/5 rounded-full filter blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionWrapper className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm text-slate-400 mb-4">
            <Briefcase className="w-4 h-4 text-violet-400" />
            Career Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From internships to full-time roles — building real-world products and leading teams
          </p>
        </SectionWrapper>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-emerald-500 transform md:-translate-x-px" />

          {experiences.map((exp, idx) => {
            const badge = getTypeBadge(exp.type, exp.current);
            const isLeft = idx % 2 === 0;

            return (
              <SectionWrapper
                key={idx}
                delay={idx * 0.1}
                className={`relative mb-12 md:mb-16 ${
                  isLeft ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-auto'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-6 z-10">
                  <div className={`w-4 h-4 rounded-full border-4 border-slate-950 ${
                    exp.current
                      ? 'bg-emerald-500 shadow-lg shadow-emerald-500/50'
                      : 'bg-gradient-to-br from-violet-500 to-cyan-500'
                  }`} />
                  {exp.current && (
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-emerald-500 animate-ping opacity-30" />
                  )}
                </div>

                {/* Content card */}
                <div className={`ml-8 md:ml-0 ${isLeft ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 group hover:shadow-lg hover:shadow-violet-500/5">
                    {/* Header */}
                    <div className={`flex items-start gap-4 mb-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`p-3 bg-gradient-to-br ${getIconGradient(exp.type)} rounded-xl border flex-shrink-0`}>
                        <Briefcase className="w-6 h-6 text-violet-400" />
                      </div>
                      <div className={`flex-1 ${isLeft ? 'md:text-right' : ''}`}>
                        <h3 className="text-lg font-semibold text-white group-hover:text-violet-300 transition-colors">
                          {exp.title}
                        </h3>
                        <div className="text-cyan-400 font-medium">{exp.company}</div>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className={`flex flex-wrap gap-3 text-sm text-slate-500 mb-4 ${isLeft ? 'md:justify-end' : ''}`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${badge.className}`}>
                        {badge.label}
                      </span>
                    </div>

                    {/* Sub-roles (for Nextive.online) */}
                    {exp.roles && (
                      <div className={`mb-4 space-y-2 ${isLeft ? 'md:text-right' : ''}`}>
                        {exp.roles.map((role, ri) => (
                          <div key={ri} className="pl-4 border-l-2 border-violet-500/30 py-1">
                            <div className="text-sm font-semibold text-slate-300">{role.title}</div>
                            <div className="text-xs text-slate-500">{role.period} · {role.location}</div>
                            <div className="text-xs text-slate-400 mt-0.5">{role.description}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Description */}
                    <ul className={`space-y-2 mb-4 ${isLeft ? 'md:text-right' : ''}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className={`text-slate-400 text-sm flex items-start gap-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                          <span className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-xs text-slate-400 hover:text-violet-300 hover:border-violet-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            );
          })}
        </div>

        <SectionWrapper className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Companies', value: '8+', icon: '🏢' },
            { label: 'Roles Held', value: '9+', icon: '👩‍💻' },
            { label: 'Months Experience', value: '36+', icon: '📅' },
            { label: 'Skills Applied', value: '30+', icon: '⚡' },
          ].map((stat, i) => (
            <div key={i} className="bg-slate-900/40 border border-slate-800/50 rounded-xl p-4 text-center hover:border-violet-500/30 transition-colors">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">{stat.value}</div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </div>
          ))}
        </SectionWrapper>

        {/* Currently seeking */}
        <SectionWrapper className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300">Open to full-time roles & exciting collaborations</span>
            <Sparkles className="w-4 h-4 text-violet-400" />
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
};
