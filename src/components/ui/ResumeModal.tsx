import React from 'react';
import { X, Printer, ExternalLink, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, HACKATHONS, CERTIFICATIONS, TECHNICAL_SKILLS } from '../../data/portfolioData';
import { soundFx } from '../../utils/audio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    soundFx.playClick(700);
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0d0f18] border border-white/20 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Action Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#08090f] shrink-0 font-mono">
          <div className="flex items-center gap-2 text-xs text-brand-electric font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>OFFICIAL CURRICULUM VITAE // TUSHAR GUPTA</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / PDF</span>
            </button>

            <button
              onClick={() => {
                soundFx.playClick(600);
                onClose();
              }}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-editorial-dim hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#0b0d14] text-editorial-text font-sans">
          {/* Header Identity */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-3xl font-display font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm sm:text-base text-brand-electric font-mono font-medium mt-1">
              {PERSONAL_INFO.primaryPositioning}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-4 text-xs font-mono text-editorial-muted">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                {PERSONAL_INFO.location}
              </span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 hover:text-white">
                <Mail className="w-3.5 h-3.5 text-brand-blue" />
                {PERSONAL_INFO.email}
              </a>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-blue" />
                {PERSONAL_INFO.phone}
              </span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white">
                <ExternalLink className="w-3.5 h-3.5 text-brand-blue" />
                {PERSONAL_INFO.githubDisplay}
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-brand-electric uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-blue" /> EDUCATION
            </h2>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <h3 className="font-bold text-white text-base font-display">
                    {EDUCATION.degree} (CGPA: {EDUCATION.cgpa})
                  </h3>
                  <div className="text-xs text-editorial-muted mt-0.5">
                    {EDUCATION.institution} · {EDUCATION.university}
                  </div>
                </div>
                <span className="font-mono text-xs text-brand-electric mt-1 sm:mt-0 font-medium">
                  {EDUCATION.period}
                </span>
              </div>
              <div className="mt-3 text-xs text-editorial-muted">
                <span className="font-mono text-white text-[11px] block mb-1">Relevant Coursework:</span>
                <p className="leading-relaxed">
                  {EDUCATION.coursework.join(' · ')}
                </p>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-brand-electric uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-blue" /> INTERNSHIP & PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <h3 className="font-bold text-white text-sm sm:text-base">
                        {exp.company} — <span className="text-brand-electric font-normal">{exp.role}</span>
                      </h3>
                      <div className="text-xs text-editorial-dim font-mono">{exp.location}</div>
                    </div>
                    <span className="font-mono text-xs text-editorial-muted mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-3 space-y-1.5 text-xs text-editorial-muted list-disc list-inside leading-relaxed">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>

                  {exp.impact.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {exp.impact.map((imp, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                          ✓ {imp}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements & Hackathons */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-brand-electric uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-blue" /> HACKATHONS & AWARDS (15+ NATIONAL PARTICIPATIONS)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HACKATHONS.filter((h) => h.isMajor).map((h, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs">{h.name}</span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-brand-blue/20 text-brand-electric border border-brand-blue/30">
                      {h.award}
                    </span>
                  </div>
                  <div className="text-[10px] text-editorial-dim font-mono mt-0.5">
                    {h.location} · {h.teamsCount}
                  </div>
                  <p className="text-xs text-editorial-muted mt-2">{h.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-brand-electric uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-blue" /> TECHNICAL PROFICIENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-mono text-white text-[11px] font-bold block mb-1">Languages:</span>
                <span className="text-editorial-muted">{TECHNICAL_SKILLS.languages.map((l) => `${l.name}${l.level === 'Basic' ? ' (Basic)' : ''}`).join(', ')}</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-mono text-white text-[11px] font-bold block mb-1">Frameworks & Libraries:</span>
                <span className="text-editorial-muted">{TECHNICAL_SKILLS.frameworksAndLibraries.map((f) => f.name).join(', ')}</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-mono text-white text-[11px] font-bold block mb-1">Databases & Infrastructure:</span>
                <span className="text-editorial-muted">{TECHNICAL_SKILLS.databasesAndInfrastructure.map((d) => d.name).join(', ')}</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="font-mono text-white text-[11px] font-bold block mb-1">AI & Tooling:</span>
                <span className="text-editorial-muted">{TECHNICAL_SKILLS.aiTools.map((a) => a.name).join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold tracking-widest text-brand-electric uppercase mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-brand-blue" /> CERTIFICATIONS & CREDENTIALS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-editorial-muted">{cert.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-3 border-t border-white/10 bg-[#08090f] flex items-center justify-between text-xs font-mono text-editorial-dim">
          <span>SOURCE OF TRUTH VERIFIED · TCET UNIVERSITY OF MUMBAI</span>
          <span className="text-brand-electric">TUSHAR GUPTA // RESUME</span>
        </div>
      </div>
    </div>
  );
};
