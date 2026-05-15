import React from 'react';
import { Award, Shield, BookOpen, Trophy } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialId?: string;
  icon: React.ReactNode;
  gradient: string;
}

export const CertificationsSection: React.FC = () => {
  const mainCertifications: Certification[] = [
    {
      title: 'Datacom – Software Development Job Simulation',
      issuer: 'Forage',
      date: 'July 2025',
      description: 'Completed a real-world simulation on team collaboration and agile software development.',
      credentialId: 'PpFywcfLDLzWxvW2w',
      icon: <Shield className="w-6 h-6" />,
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Graphic Design Training',
      issuer: 'DigiSkills Training Program – DSTP 2.0 (Batch 02)',
      date: 'July 2022 – October 2022',
      description: 'Completed comprehensive online training in Adobe Photoshop, Illustrator, branding, and layout design.',
      icon: <Award className="w-6 h-6" />,
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Mobile Application Development',
      issuer: 'University of Mianwali - BSCS',
      date: '2025',
      description: 'Completed coursework focused on modern mobile app development tools and methodologies.',
      icon: <BookOpen className="w-6 h-6" />,
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      title: 'CodeQuest Programming & Graphic Design Competition',
      issuer: 'NexGen Computing Society, University of Mianwali',
      date: '2025',
      description: 'Showcased technical and creative problem-solving by developing visual solutions and code under competition constraints.',
      icon: <Trophy className="w-6 h-6" />,
      gradient: 'from-violet-500 to-purple-600',
    },
  ];

  return (
    <section id="certifications" className="relative py-24 bg-slate-900/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-emerald-500/5 rounded-full filter blur-3xl" />
      </div>

      <SectionWrapper className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-sm text-blue-400 mb-4">
            <Award className="w-4 h-4" />
            Certifications & Achievements
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A track record of continuous learning, specialized training, and competitive excellence
          </p>
        </div>

        {/* Main Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {mainCertifications.map((cert, idx) => (
            <div
              key={idx}
              className="group bg-slate-950/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 bg-gradient-to-br ${cert.gradient} rounded-xl text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {cert.title}
                    </h3>
                    <span className="text-xs font-medium text-slate-500 bg-slate-800/50 px-2 py-1 rounded-md">
                      {cert.date}
                    </span>
                  </div>
                  <div className="text-blue-400 text-sm font-medium mb-3">{cert.issuer}</div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  
                  {cert.credentialId && (
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-mono bg-slate-900/80 p-2 rounded-lg border border-slate-800">
                      <span className="text-slate-600 uppercase tracking-wider">Credential ID:</span>
                      <span className="text-blue-300/80">{cert.credentialId}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
};
