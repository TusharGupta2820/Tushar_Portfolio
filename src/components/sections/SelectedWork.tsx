import React, { useState } from 'react';
import { PROJECTS } from '../../data/portfolioData';
import { DroneTacticalMap } from '../3d/DroneTacticalMap';
import { ArrowRight, Layers, CheckCircle, ExternalLink, Filter } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { soundFx } from '../../utils/audio';
import { SlideIn, StaggerContainer, StaggerItem, FloatCard } from '../ui/Animations';

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
        <SlideIn from="left" className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/8 pb-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs text-editorial-dim uppercase tracking-widest font-mono">
              {PROJECTS.length} projects
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected work</h2>
            <p className="text-base text-editorial-muted leading-relaxed">
              Open-source systems, AI agents, cloud architectures and production products.
            </p>
          </div>

          {/* GitHub link */}
          <div className="text-sm">
            <a
              href="https://github.com/TusharGupta2820"
              target="_blank"
              rel="noreferrer"
              onClick={() => soundFx.playClick(700)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/8 text-editorial-dim hover:text-white hover:border-white/20 transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>github.com/TusharGupta2820 ↗</span>
            </a>
          </div>
        </SlideIn>

        {/* Filter bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none flex-wrap">
          <span className="text-xs text-editorial-dim flex items-center gap-1.5 shrink-0 mr-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {categories.map(cat => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => { soundFx.playClick(650); setSelectedCategory(cat); }}
                className={`px-3 py-1.5 rounded-lg border text-sm transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-brand-blue/90 text-white border-transparent font-medium shadow-md shadow-brand-blue/15'
                    : 'border-white/8 text-editorial-dim hover:text-white hover:border-white/15 bg-white/[0.02]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects */}
        <StaggerContainer className="space-y-10" staggerDelay={0.09}>
          {filteredProjects.map((project) => {
            const isDroneProject = project.id === 'drone-fleet-management';
            return (
              <StaggerItem key={project.id} className="relative scroll-mt-24">
                <FloatCard intensity={3}>
                  <div className="rounded-2xl border border-white/15 bg-[#0b0e1b]/95 hover:border-white/25 transition-all duration-300 p-6 sm:p-8 lg:p-10 space-y-7 shadow-xl">
                  {/* Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/12 text-sm">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-white font-bold font-mono px-2.5 py-1 rounded bg-white/10 border border-white/20">{project.category}</span>
                      {project.label && (
                        <span className="px-2.5 py-1 rounded text-xs bg-amber-500/20 text-amber-200 border border-amber-500/40 font-bold">
                          {project.label}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank" rel="noreferrer"
                          onClick={() => soundFx.playClick(700)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-400/30 text-emerald-300 font-semibold text-xs bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank" rel="noreferrer"
                          onClick={() => soundFx.playClick(700)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/20 text-white font-medium text-xs bg-white/5 hover:bg-white/15 transition-colors"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                          GitHub
                        </a>
                      )}
                      <button
                        onClick={() => { soundFx.playBlip(850); onSelectProject(project.id); }}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-brand-blue hover:bg-brand-cobalt text-white text-xs font-bold transition-all shadow-md shadow-brand-blue/30"
                      >
                        Case study
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
                        <div className="text-xs sm:text-sm text-sky-400 font-bold font-mono tracking-wide">
                          {project.subtitle}
                        </div>
                      )}

                      <p className="text-sm sm:text-base text-slate-100 font-medium font-sans leading-relaxed">
                        {project.description}
                      </p>

                      {/* Verified Impact highlight if present */}
                      {project.impact && (
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 font-mono text-xs font-bold">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{project.impact}</span>
                        </div>
                      )}

                      {/* Capabilities */}
                      <div className="space-y-2 pt-2">
                        <p className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono">Key capabilities</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-slate-100 font-medium">
                          {project.keyCapabilities.slice(0, 4).map((cap, i) => (
                            <div key={i} className="flex items-start gap-2 bg-white/[0.03] p-2 rounded-lg border border-white/10">
                              <span className="w-2 h-2 rounded-full bg-brand-electric shrink-0 mt-1.5" />
                              <span className="text-slate-100 font-medium text-xs sm:text-sm">{cap}</span>
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
                        <div className="p-6 rounded-2xl bg-[#080a14] border border-white/15 space-y-4 font-mono shadow-inner">
                          <div className="flex items-center justify-between text-xs text-slate-200 font-bold border-b border-white/12 pb-3">
                            <span className="flex items-center gap-1.5 text-white">
                              <Layers className="w-3.5 h-3.5 text-brand-electric" />
                              ARCHITECTURE TOPOLOGY
                            </span>
                          </div>

                          <div className="space-y-2 text-xs">
                            {project.architectureNodes?.map((node, i) => (
                              <div
                                key={i}
                                className="p-2.5 rounded-lg bg-white/[0.05] border border-white/12 flex items-center justify-between group hover:border-brand-blue/50 transition-colors"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-brand-electric font-bold text-[11px] px-2 py-0.5 rounded bg-brand-blue/20 border border-brand-blue/40">
                                    0{i + 1}
                                  </span>
                                  <span className="text-white font-bold text-xs">{node}</span>
                                </div>
                                <span className="text-slate-300 font-bold text-xs">→</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Tech stack footer */}
                  <div className="pt-5 border-t border-white/12 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-slate-200 uppercase tracking-wider font-mono mr-1">Stack:</span>
                      {project.technologies.map(t => (
                        <span key={t} className="px-2.5 py-1 rounded text-xs font-semibold text-white border border-white/15 bg-white/10 shadow-sm">
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => { soundFx.playBlip(850); onSelectProject(project.id); }}
                      className="text-brand-electric hover:text-white text-xs font-bold flex items-center gap-1 transition-colors bg-brand-blue/10 px-3 py-1.5 rounded-lg border border-brand-blue/30"
                    >
                      Read case study
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </FloatCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};
