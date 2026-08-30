import React from 'react';
import { PERSONAL_INFO, KEY_NUMBERS } from '../../data/portfolioData';
import { HeroPortrait } from '../ui/HeroPortrait';
import { ArrowRight, FileText, MapPin, Sparkles, FolderGit2, FlaskConical, Code, Briefcase, Wrench, UserCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { soundFx } from '../../utils/audio';

interface HeroProps {
  onOpenResumeModal: () => void;
  onNavigate?: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onNavigate }) => {
  const handleNav = (sec: string) => {
    soundFx.playClick(650);
    if (onNavigate) {
      onNavigate(sec);
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-24 sm:pt-28 pb-12 overflow-hidden w-full">
      {/* Background Subtle Lab Grids */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-blue/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 relative z-10 space-y-12">
        {/* Top Metadata Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 text-xs font-mono text-editorial-dim">
          <div className="flex items-center gap-2.5">
            <MapPin className="w-3.5 h-3.5 text-brand-electric" />
            <span className="text-editorial-text">{PERSONAL_INFO.location}</span>
            <span className="text-white/20">/</span>
            <span>{PERSONAL_INFO.duration}</span>
          </div>

          <div className="flex items-center gap-2.5">
            <span className="text-editorial-muted">{PERSONAL_INFO.institution}</span>
            <span className="text-white/20">/</span>
            <span className="text-brand-electric font-bold">CGPA {PERSONAL_INFO.cgpa}</span>
          </div>
        </div>

        {/* Hero Grid: Editorial Text on Left, Portrait Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Bio */}
          <div className="lg:col-span-7 space-y-6 lg:pr-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue/10 border border-brand-blue/25 text-brand-electric font-mono text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{PERSONAL_INFO.heroSubtext}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.12]">
              I BUILD <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-electric via-white to-brand-electric">INTELLIGENT SYSTEMS</span> FOR THE REAL WORLD.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-editorial-muted font-sans font-light leading-relaxed max-w-3xl">
              {PERSONAL_INFO.heroIntro}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4 font-mono text-xs">
              <button
                onClick={() => handleNav('work')}
                data-cursor="explore"
                className="px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-cobalt text-white font-bold tracking-wider transition-all flex items-center gap-2.5 shadow-lg shadow-brand-blue/25 hover:scale-105 active:scale-95"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  soundFx.playBlip(800);
                  onOpenResumeModal();
                }}
                className="px-5 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-white font-medium transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <FileText className="w-4 h-4 text-brand-electric" />
                <span>RESUME / CV</span>
              </button>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="external"
                onClick={() => soundFx.playClick(700)}
                className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-editorial-muted hover:text-white transition-all flex items-center gap-2"
                title="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="hidden sm:inline">GITHUB ↗</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor="external"
                onClick={() => soundFx.playClick(700)}
                className="p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-editorial-muted hover:text-white transition-all flex items-center gap-2"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-brand-electric" />
                <span className="hidden sm:inline">LINKEDIN ↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Portrait Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroPortrait imageSrc="/tushar.jpg" />
          </div>
        </div>

        {/* Refined Key Numbers Metadata Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4 pt-8 border-t border-white/10 font-mono">
          {KEY_NUMBERS.map((num, i) => (
            <div
              key={i}
              className="p-3.5 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-blue/30 transition-colors group"
            >
              <div className="text-xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white group-hover:text-brand-electric transition-colors">
                {num.value}
              </div>
              <div className="text-[11px] sm:text-xs font-bold text-editorial-text mt-1">
                {num.label}
              </div>
              <div className="text-[9px] sm:text-[10px] text-editorial-dim mt-0.5">
                {num.context}
              </div>
            </div>
          ))}
        </div>

        {/* Section Quick-Jump Hub on Overview Screen */}
        <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
          <div className="font-mono text-[11px] sm:text-xs text-editorial-dim uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-electric" />
            <span>DIRECT PORTFOLIO GATEWAYS // CLICK TO OPEN</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-2 sm:gap-3.5 font-mono text-xs">
            <button
              onClick={() => handleNav('work')}
              className="p-4 rounded-xl bg-[#0d0f18] hover:bg-brand-blue/15 border border-white/10 hover:border-brand-electric text-left transition-all group shadow-md"
            >
              <div className="flex items-center justify-between text-brand-electric mb-2">
                <FolderGit2 className="w-4 h-4" />
                <span className="text-[10px] text-editorial-dim group-hover:text-white">01 →</span>
              </div>
              <div className="font-bold text-white text-sm">SELECTED WORK</div>
              <div className="text-[10px] text-editorial-muted mt-1">16 Systems & Code</div>
            </button>

            <button
              onClick={() => handleNav('research')}
              className="p-4 rounded-xl bg-[#0d0f18] hover:bg-violet-600/15 border border-white/10 hover:border-violet-400 text-left transition-all group shadow-md"
            >
              <div className="flex items-center justify-between text-violet-400 mb-2">
                <FlaskConical className="w-4 h-4" />
                <span className="text-[10px] text-editorial-dim group-hover:text-white">02 →</span>
              </div>
              <div className="font-bold text-white text-sm">RESEARCH</div>
              <div className="text-[10px] text-editorial-muted mt-1">Empirical Hypotheses</div>
            </button>

            <button
              onClick={() => handleNav('systems')}
              className="p-4 rounded-xl bg-[#0d0f18] hover:bg-cyan-600/15 border border-white/10 hover:border-cyan-400 text-left transition-all group shadow-md"
            >
              <div className="flex items-center justify-between text-cyan-400 mb-2">
                <Code className="w-4 h-4" />
                <span className="text-[10px] text-editorial-dim group-hover:text-white">03 →</span>
              </div>
              <div className="font-bold text-white text-sm">SYSTEMS LAB</div>
              <div className="text-[10px] text-editorial-muted mt-1">7 Architectural Layers</div>
            </button>

            <button
              onClick={() => handleNav('experience')}
              className="p-4 rounded-xl bg-[#0d0f18] hover:bg-indigo-600/15 border border-white/10 hover:border-indigo-400 text-left transition-all group shadow-md"
            >
              <div className="flex items-center justify-between text-indigo-400 mb-2">
                <Briefcase className="w-4 h-4" />
                <span className="text-[10px] text-editorial-dim group-hover:text-white">04 →</span>
              </div>
              <div className="font-bold text-white text-sm">EXPERIENCE</div>
              <div className="text-[10px] text-editorial-muted mt-1">4 Roles & Internships</div>
            </button>

            <button
              onClick={() => handleNav('skills')}
              className="p-4 rounded-xl bg-[#0d0f18] hover:bg-emerald-600/15 border border-white/10 hover:border-emerald-400 text-left transition-all group shadow-md"
            >
              <div className="flex items-center justify-between text-emerald-400 mb-2">
                <Wrench className="w-4 h-4" />
                <span className="text-[10px] text-editorial-dim group-hover:text-white">05 →</span>
              </div>
              <div className="font-bold text-white text-sm">SKILLS</div>
              <div className="text-[10px] text-editorial-muted mt-1">Technical Taxonomy</div>
            </button>

            <button
              onClick={() => handleNav('about')}
              className="p-4 rounded-xl bg-[#0d0f18] hover:bg-amber-600/15 border border-white/10 hover:border-amber-400 text-left transition-all group shadow-md"
            >
              <div className="flex items-center justify-between text-amber-400 mb-2">
                <UserCheck className="w-4 h-4" />
                <span className="text-[10px] text-editorial-dim group-hover:text-white">06 →</span>
              </div>
              <div className="font-bold text-white text-sm">PROOF OF WORK</div>
              <div className="text-[10px] text-editorial-muted mt-1">TCET, Hackathons & OS</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
