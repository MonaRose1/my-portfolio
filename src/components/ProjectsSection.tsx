import React, { useState } from 'react';
import { ExternalLink, Code, Brain, Database, Globe } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: 'fullstack' | 'ml' | 'ai';
  icon: React.ReactNode;
  gradient: string;
  features: string[];
}

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fullstack' | 'ml' | 'ai'>('all');

  const projects: Project[] = [
    {
      title: 'AI-Powered Web Application',
      description: 'Full-stack application integrating machine learning models for real-time predictions with a responsive React frontend.',
      technologies: ['React.js', 'Node.js', 'Python', 'TensorFlow', 'MongoDB'],
      category: 'fullstack',
      icon: <Globe className="w-6 h-6" />,
      gradient: 'from-violet-500 to-purple-600',
      features: [
        'Real-time ML predictions',
        'Responsive UI/UX design',
        'RESTful API integration',
        'User authentication & authorization',
      ],
    },
    {
      title: 'Deep Learning Image Classifier',
      description: 'CNN-based image classification system with transfer learning, achieving high accuracy on custom datasets.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'CNN', 'NumPy'],
      category: 'ml',
      icon: <Brain className="w-6 h-6" />,
      gradient: 'from-cyan-500 to-blue-600',
      features: [
        'Transfer learning implementation',
        'Custom data augmentation',
        'Model optimization & tuning',
        'Performance visualization',
      ],
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'End-to-end data science project with feature engineering, model training, and interactive visualizations.',
      technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Power BI', 'SQL'],
      category: 'ml',
      icon: <Database className="w-6 h-6" />,
      gradient: 'from-emerald-500 to-teal-600',
      features: [
        'Data preprocessing pipeline',
        'Multiple ML model comparison',
        'Interactive dashboards',
        'Automated reporting',
      ],
    },
    {
      title: 'Agentic AI System',
      description: 'AI orchestration system using CrewAI and LangGraph for automated task completion and decision making.',
      technologies: ['Python', 'CrewAI', 'LangGraph', 'n8n', 'APIs'],
      category: 'ai',
      icon: <Code className="w-6 h-6" />,
      gradient: 'from-pink-500 to-rose-600',
      features: [
        'Multi-agent collaboration',
        'Workflow automation',
        'API integrations',
        'Task orchestration',
      ],
    },
    {
      title: 'E-Commerce Platform',
      description: 'Complete MERN stack e-commerce solution with payment integration, admin dashboard, and inventory management.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Stripe'],
      category: 'fullstack',
      icon: <Globe className="w-6 h-6" />,
      gradient: 'from-amber-500 to-orange-600',
      features: [
        'Payment gateway integration',
        'Admin dashboard',
        'Inventory management',
        'Order tracking system',
      ],
    },
    {
      title: 'NLP Sentiment Analyzer',
      description: 'Natural language processing application for sentiment analysis using LSTM neural networks and transformers.',
      technologies: ['Python', 'PyTorch', 'LSTM', 'Transformers', 'NLTK'],
      category: 'ml',
      icon: <Brain className="w-6 h-6" />,
      gradient: 'from-indigo-500 to-purple-600',
      features: [
        'Text preprocessing pipeline',
        'LSTM/Transformer models',
        'Multi-language support',
        'Real-time analysis API',
      ],
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'ai', label: 'AI Systems' },
  ] as const;

  return (
    <section id="projects" className="relative py-24 bg-slate-900/50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-3xl" />
      </div>

      <SectionWrapper className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of projects showcasing full-stack development and AI/ML expertise
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-lg shadow-violet-500/20'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 border border-slate-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-slate-950/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300"
            >
              {/* Header */}
              <div className={`p-6 bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm text-white">
                    {project.icon}
                  </div>
                  <span className={`px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white border border-white/20`}>
                    {project.category === 'fullstack' ? 'Full Stack' : project.category === 'ml' ? 'ML' : 'AI'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mt-4">{project.title}</h3>
                <p className="text-white/70 text-sm mt-2">{project.description}</p>
              </div>

              {/* Features */}
              <div className="p-6">
                <h4 className="text-sm font-medium text-slate-400 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <h4 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-1 bg-slate-800/50 border border-slate-700/50 rounded-md text-xs text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/MonaRose1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-full text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
          >
            <span>View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </SectionWrapper>
    </section>
  );
};
