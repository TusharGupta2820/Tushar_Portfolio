import React, { useState } from 'react';
import { PROJECTS } from '../../data/portfolioData';
import { DroneTacticalMap } from '../3d/DroneTacticalMap';
import { ArrowRight, Layers, CheckCircle, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { soundFx } from '../../utils/audio';
import { FadeUp, SlideIn, StaggerContainer, StaggerItem } from '../ui/Animations';

interface SelectedWorkProps {
  onSelectProject: (projectId: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'AI & LLM Agents',
    'AI & Education',
    'Cloud & DevOps',
    'Fintech & Analytics',
    'Fintech & Healthcare',
    'Computer Vision & Robotics',
    'Web & Systems'
  ];

  const filteredProjects = selectedCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="work" className="relative py-24 sm:py-32 border-t border-white/10 overflow-hidden w-full">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 space-y-16 relative z-10">
        {/* Section Header */}
        <SlideIn from="left" className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-brand-electric font-semibold tracking-wider">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span>SELECTED WORK // {PROJECTS.length} VERIFIED REPOSITORIES & SYSTEMS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              SELECTED WORK
            </h2>

            <p className="text-base sm:text-lg text-editorial-muted font-sans font-light leading-relaxed">
              Open-source systems, AI agents, cloud architectures, and production products built across GitHub.
            </p>
          </div>

          {/* GitHub Profile Fast Link */}
          <div className="font-mono text-xs text-editorial-dim">
            <a
              href="https://github.com/TusharGupta2820"
              target="_blank"
              rel="noreferrer"
              onClick={() => soundFx.playClick(700)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white transition-all hover:scale-105"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>github.com/TusharGupta2820 ↗</span>
            </a>
          </div>
        </SlideIn>

        {/* Category Filter Bar */}
        <div className="flex items-center gap-2 font-mono text-xs overflow-x-auto pb-2 -mx-2 px-2 scrollbar-none sm:flex-wrap">
          <span className="text-editorial-dim text-[11px] uppercase tracking-wider mr-1 flex items-center gap-1.5 shrink-0">
            <Filter className="w-3.5 h-3.5 text-brand-electric" /> FILTER:
          </span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  soundFx.playClick(650);
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-lg border transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-brand-blue text-white border-brand-blue font-bold shadow-md shadow-brand-blue/20'
                    : 'bg-white/[0.02] border-white/10 text-editorial-muted hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Compositions List */}
        <StaggerContainer className="space-y-16" staggerDelay={0.1}>
          {filteredProjects.map((project) => {
            const isDroneProject = project.id === 'drone-fleet-management';

            return (
              <StaggerItem
                key={project.id}
                className="relative scroll-mt-24"
              >
                {/* Project Editorial Composition Container */}
                <div className="rounded-3xl border border-white/10 bg-[#090b12]/85 backdrop-blur-xl p-6 sm:p-10 lg:p-12 hover:border-brand-blue/30 transition-all duration-300 shadow-2xl space-y-8">
                  {/* Top Metadata Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 font-mono text-xs">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-2xl sm:text-3xl font-display font-extrabold text-brand-electric">
                        {project.number}
                      </span>
                      <div className="h-6 w-[1px] bg-white/10" />
                      <span className="text-editorial-dim uppercase tracking-wider">{project.category}</span>
                      {project.label && (
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 font-bold text-[10px] flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          {project.label}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor="external"
                          onClick={() => soundFx.playClick(700)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>LIVE DEMO ↗</span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          data-cursor="external"
                          onClick={() => soundFx.playClick(700)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-editorial-muted hover:text-white transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          <span>GITHUB REPO ↗</span>
                        </a>
                      )}

                      <button
                        onClick={() => {
                          soundFx.playBlip(850);
                          onSelectProject(project.id);
                        }}
                        data-cursor="project"
                        className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-brand-blue hover:bg-brand-cobalt text-white font-bold transition-all shadow-md shadow-brand-blue/20 hover:scale-105 active:scale-95"
                      >
                        <span>CASE STUDY</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    <div className="lg:col-span-7 space-y-4">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
                        {project.title}
                      </h3>

                      {project.subtitle && (
                        <div className="text-xs sm:text-sm text-brand-electric font-mono">
                          {project.subtitle}
                        </div>
                      )}

                      <p className="text-sm sm:text-base text-editorial-muted font-sans leading-relaxed">
                        {project.description}
                      </p>

                      {/* Verified Impact highlight if present */}
                      {project.impact && (
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>{project.impact}</span>
                        </div>
                      )}

                      {/* Key Capabilities Bullet points */}
                      <div className="space-y-2 pt-2">
                        <div className="font-mono text-[10px] text-editorial-dim uppercase tracking-wider">
                          CORE CAPABILITIES & ENGINEERING HIGHLIGHTS:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-editorial-text">
                          {project.keyCapabilities.slice(0, 4).map((cap, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-electric shrink-0 mt-1.5" />
                              <span>{cap}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right column: Interactive Visual or Architecture Diagram */}
                    <div className="lg:col-span-5 space-y-4">
                      {isDroneProject ? (
                        /* Embedded Interactive 3D Drone Fleet Visualizer */
                        <div className="w-full">
                          <DroneTacticalMap />
                        </div>
                      ) : (
                        /* Interactive Architecture Pipeline Graph */
                        <div className="p-6 rounded-2xl bg-[#0e101b] border border-white/10 space-y-4 font-mono">
                          <div className="flex items-center justify-between text-xs text-brand-electric border-b border-white/10 pb-3">
                            <span className="flex items-center gap-1.5 font-bold">
                              <Layers className="w-3.5 h-3.5 text-brand-blue" />
                              DATA FLOW ARCHITECTURE
                            </span>
                            <span className="text-[10px] text-editorial-dim">
                              TOPOLOGY
                            </span>
                          </div>

                          <div className="space-y-2 text-xs">
                            {project.architectureNodes?.map((node, i) => (
                              <div
                                key={i}
                                className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-between group hover:border-brand-blue/30 transition-colors"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-brand-electric font-bold text-[10px] px-1.5 py-0.2 rounded bg-brand-blue/10">
                                    0{i + 1}
                                  </span>
                                  <span className="text-white text-xs">{node}</span>
                                </div>
                                <span className="text-editorial-dim text-[10px]">→</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Technology Stack Tags Footer */}
                  <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-editorial-dim text-[10px] uppercase tracking-wider mr-1">STACK:</span>
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded bg-white/[0.03] text-editorial-text border border-white/10 font-mono text-[11px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        soundFx.playBlip(850);
                        onSelectProject(project.id);
                      }}
                      className="text-brand-electric hover:text-white transition-colors flex items-center gap-1 text-xs font-semibold"
                    >
                      <span>VIEW 9-STEP CASE STUDY</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};
