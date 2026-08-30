import React from 'react';
import { PERSONAL_INFO, KEY_NUMBERS } from '../../data/portfolioData';
import { HeroPortrait } from '../ui/HeroPortrait';
import { ArrowRight, FileText, MapPin, Sparkles, FolderGit2, FlaskConical, Code, Briefcase, Wrench, UserCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { soundFx } from '../../utils/audio';
import { FadeUp, SlideIn, StaggerContainer, StaggerItem, ScaleUp, Counter, FloatCard } from '../ui/Animations';

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
        <FadeUp duration={0.5}>
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
        </FadeUp>

        {/* Hero Grid: Editorial Text on Left, Portrait Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Bio */}
          <SlideIn from="left" className="lg:col-span-7 space-y-6 lg:pr-4">
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
            <FadeUp delay={0.3} className="flex flex-wrap items-center gap-3.5 pt-4 font-mono text-xs">
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
            </FadeUp>
          </SlideIn>

          {/* Right Column: 3D Tilt Portrait Card */}
          <SlideIn from="right" delay={0.1} className="lg:col-span-5 relative flex items-center justify-center">
            <HeroPortrait imageSrc="/tushar.jpg" />
          </SlideIn>
        </div>

        {/* Key Numbers — animated counters with stagger */}
        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4 pt-8 border-t border-white/10 font-mono"
          staggerDelay={0.08}
          containerDelay={0.1}
        >
          {KEY_NUMBERS.map((num, i) => (
            <StaggerItem key={i}>
              <FloatCard className="p-3.5 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-blue/30 transition-colors h-full">
                <div className="text-xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white group-hover:text-brand-electric transition-colors">
                  <Counter value={num.value} />
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-editorial-text mt-1">
                  {num.label}
                </div>
                <div className="text-[9px] sm:text-[10px] text-editorial-dim mt-0.5">
                  {num.context}
                </div>
              </FloatCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Section Quick-Jump Hub — staggered gateway cards */}
        <FadeUp delay={0.15} className="space-y-3 sm:space-y-4 pt-4 sm:pt-6">
          <div className="font-mono text-[11px] sm:text-xs text-editorial-dim uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-electric" />
            <span>DIRECT PORTFOLIO GATEWAYS // CLICK TO OPEN</span>
          </div>

          <StaggerContainer
            className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-2 sm:gap-3.5 font-mono text-xs"
            staggerDelay={0.06}
          >
            {[
              { id: 'work', icon: <FolderGit2 className="w-4 h-4" />, label: 'SELECTED WORK', sub: '16 Systems & Code', num: '01', color: 'text-brand-electric', hover: 'hover:bg-brand-blue/15 hover:border-brand-electric' },
              { id: 'research', icon: <FlaskConical className="w-4 h-4" />, label: 'RESEARCH', sub: 'Empirical Hypotheses', num: '02', color: 'text-violet-400', hover: 'hover:bg-violet-600/15 hover:border-violet-400' },
              { id: 'systems', icon: <Code className="w-4 h-4" />, label: 'SYSTEMS LAB', sub: '7 Architectural Layers', num: '03', color: 'text-cyan-400', hover: 'hover:bg-cyan-600/15 hover:border-cyan-400' },
              { id: 'experience', icon: <Briefcase className="w-4 h-4" />, label: 'EXPERIENCE', sub: '4 Roles & Internships', num: '04', color: 'text-indigo-400', hover: 'hover:bg-indigo-600/15 hover:border-indigo-400' },
              { id: 'skills', icon: <Wrench className="w-4 h-4" />, label: 'SKILLS', sub: 'Technical Taxonomy', num: '05', color: 'text-emerald-400', hover: 'hover:bg-emerald-600/15 hover:border-emerald-400' },
              { id: 'about', icon: <UserCheck className="w-4 h-4" />, label: 'PROOF OF WORK', sub: 'TCET, Hackathons & OS', num: '06', color: 'text-amber-400', hover: 'hover:bg-amber-600/15 hover:border-amber-400' },
            ].map((item) => (
              <StaggerItem key={item.id}>
                <button
                  onClick={() => handleNav(item.id)}
                  className={`w-full p-4 rounded-xl bg-[#0d0f18] border border-white/10 text-left transition-all group shadow-md ${item.hover}`}
                >
                  <div className={`flex items-center justify-between ${item.color} mb-2`}>
                    {item.icon}
                    <span className="text-[10px] text-editorial-dim group-hover:text-white">{item.num} →</span>
                  </div>
                  <div className="font-bold text-white text-sm">{item.label}</div>
                  <div className="text-[10px] text-editorial-muted mt-1">{item.sub}</div>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeUp>
      </div>
    </section>
  );
};
