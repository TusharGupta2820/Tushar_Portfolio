import React, { useEffect } from 'react';
import type { ProjectItem } from '../../data/portfolioData';
import { X, ArrowLeft, CheckCircle2, Cpu, Layers, ShieldCheck, Sparkles, Terminal, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { soundFx } from '../../utils/audio';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-50 bg-[#06070a] overflow-y-auto animate-in fade-in duration-200">
      {/* Top Floating Control Bar */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#08090f]/90 backdrop-blur-md font-mono">
        <button
          onClick={() => {
            soundFx.playClick(600);
            onClose();
          }}
          className="flex items-center gap-2 text-xs text-editorial-muted hover:text-white transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-brand-electric" />
          <span>BACK TO WORK</span>
        </button>

        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs font-mono text-emerald-300 font-bold transition-colors"
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
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GITHUB REPO ↗</span>
            </a>
          )}

          <button
            onClick={() => {
              soundFx.playClick(600);
              onClose();
            }}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-editorial-muted hover:text-white"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Case Study Editorial Content */}
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-12 space-y-16">
        {/* Editorial Header */}
        <div className="space-y-4 border-b border-white/10 pb-10">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-brand-electric">
            <span className="px-2 py-0.5 rounded bg-brand-blue/15 border border-brand-blue/30 font-bold">
              PROJECT {project.number}
            </span>
            <span>//</span>
            <span className="text-editorial-muted">{project.category}</span>
            {project.label && (
              <>
                <span>//</span>
                <span className="px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {project.label}
                </span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="text-lg sm:text-xl text-editorial-muted font-sans font-light">
              {project.subtitle}
            </p>
          )}

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 pt-4">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-lg bg-white/[0.03] text-editorial-text border border-white/10 font-mono text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* 9-Step Rigorous Technical Case Study Breakdown */}
        <div className="space-y-14">
          {/* Step 1: The Problem */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-brand-electric font-semibold flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-brand-blue/10 border border-brand-blue/20">STEP 01</span>
              <span>THE PROBLEM</span>
            </div>
            <h2 className="text-2xl font-bold font-display text-white">System Bottlenecks & Failure Modes</h2>
            <p className="text-editorial-muted leading-relaxed font-sans text-base">
              {caseStudy.problem}
            </p>
          </div>

          {/* Step 2: Context & Background */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-brand-electric font-semibold flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-brand-blue/10 border border-brand-blue/20">STEP 02</span>
              <span>CONTEXT & MOTIVATION</span>
            </div>
            <h2 className="text-2xl font-bold font-display text-white">Why This Matters</h2>
            <p className="text-editorial-muted leading-relaxed font-sans text-base">
              {caseStudy.context}
            </p>
          </div>

          {/* Step 3: Technical Approach */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-brand-electric font-semibold flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-brand-blue/10 border border-brand-blue/20">STEP 03</span>
              <span>ENGINEERING APPROACH</span>
            </div>
            <h2 className="text-2xl font-bold font-display text-white">First-Principles Solution Design</h2>
            <p className="text-editorial-muted leading-relaxed font-sans text-base">
              {caseStudy.approach}
            </p>
          </div>

          {/* Step 4: System Architecture Diagram */}
          <div className="space-y-4 p-8 rounded-3xl bg-[#090b12] border border-white/10 font-mono">
            <div className="text-xs text-brand-electric font-semibold flex items-center gap-2 border-b border-white/10 pb-4">
              <Layers className="w-4 h-4 text-brand-blue" />
              <span>STEP 04 // {caseStudy.architecture.title.toUpperCase()}</span>
            </div>

            <div className="space-y-2.5 py-2">
              {caseStudy.architecture.diagram.map((node, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between group hover:border-brand-blue/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-brand-electric font-bold text-xs px-2 py-0.5 rounded bg-brand-blue/10">
                      NODE 0{i + 1}
                    </span>
                    <span className="text-white text-sm font-sans">{node}</span>
                  </div>
                  <span className="text-editorial-dim text-xs">DISPATCH →</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-editorial-dim font-sans pt-2 border-t border-white/5 leading-relaxed">
              {caseStudy.architecture.details}
            </p>
          </div>

          {/* Step 5: Implementation Details */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-brand-electric font-semibold flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-brand-blue" />
              <span>STEP 05 // IMPLEMENTATION STACK</span>
            </div>
            <h2 className="text-2xl font-bold font-display text-white">Building the Pipeline</h2>
            <p className="text-editorial-muted leading-relaxed font-sans text-base">
              {caseStudy.implementation}
            </p>
          </div>

          {/* Step 6: Hard Engineering Challenges */}
          <div className="p-6 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20 space-y-2">
            <div className="font-mono text-xs text-amber-300 font-bold flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>STEP 06 // KEY ENGINEERING CHALLENGES OVERCOME</span>
            </div>
            <p className="text-editorial-text leading-relaxed font-sans text-sm">
              {caseStudy.challenges}
            </p>
          </div>

          {/* Step 7: Verified Results */}
          <div className="space-y-4">
            <div className="font-mono text-xs text-emerald-400 font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>STEP 07 // VERIFIED RESULTS & OUTCOMES</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              {caseStudy.results.map((res, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-emerald-300 flex items-start gap-2.5 font-medium"
                >
                  <span className="text-emerald-400">✓</span>
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 8 & 9: Learnings & Future Work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="font-mono text-xs text-brand-electric font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>STEP 08 // KEY LEARNINGS</span>
              </div>
              <p className="text-xs sm:text-sm text-editorial-muted font-sans leading-relaxed">
                {caseStudy.learnings}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="font-mono text-xs text-brand-electric font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>STEP 09 // ROADMAP & FUTURE WORK</span>
              </div>
              <p className="text-xs sm:text-sm text-editorial-muted font-sans leading-relaxed">
                {caseStudy.futureWork}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-12 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <button
            onClick={() => {
              soundFx.playClick(600);
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors"
          >
            ← CLOSE CASE STUDY
          </button>

          <span className="text-editorial-dim text-[11px]">
            TUSHAR GUPTA // TECHNICAL CASE ARCHIVE
          </span>
        </div>
      </div>
    </div>
  );
};
