import React, { useEffect } from 'react';
import type { ResearchTopic } from '../../data/portfolioData';
import { X, ArrowLeft, FlaskConical, HelpCircle, Lightbulb, TestTube2, Sparkles, ArrowRight, Compass } from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface ResearchNoteModalProps {
  topic: ResearchTopic | null;
  onClose: () => void;
}

export const ResearchNoteModal: React.FC<ResearchNoteModalProps> = ({ topic, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (topic) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [topic, onClose]);

  if (!topic) return null;

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
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-violet-400" />
          <span>BACK TO RESEARCH LAB</span>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-[11px] px-2.5 py-1 rounded bg-violet-500/10 text-violet-300 border border-violet-500/20 font-mono">
            {topic.status}
          </span>

          <button
            onClick={() => {
              soundFx.playClick(600);
              onClose();
            }}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-editorial-muted hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Research Notebook Page Content */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 py-12 space-y-12">
        {/* Header */}
        <div className="border-b border-white/10 pb-8 space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs text-violet-400">
            <FlaskConical className="w-4 h-4" />
            <span>RESEARCH LAB NOTEBOOK // {topic.category.toUpperCase()}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
            {topic.title}
          </h1>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {topic.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-2.5 py-0.5 rounded bg-white/[0.03] text-editorial-muted border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 5-Step Scientific Exploration Chain */}
        <div className="space-y-6">
          {/* 01: Question */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
            <div className="font-mono text-xs text-brand-electric font-bold tracking-widest flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-brand-blue" />
              <span>01 / THE CORE RESEARCH QUESTION</span>
            </div>
            <p className="text-base sm:text-lg font-medium text-white font-sans leading-relaxed">
              "{topic.question}"
            </p>
          </div>

          {/* Flow indicator */}
          <div className="flex justify-center opacity-40">
            <ArrowRight className="w-4 h-4 text-violet-400 rotate-90" />
          </div>

          {/* 02: Hypothesis */}
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
            <div className="font-mono text-xs text-violet-400 font-bold tracking-widest flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-violet-400" />
              <span>02 / HYPOTHESIS & INTUITION</span>
            </div>
            <p className="text-sm sm:text-base text-editorial-text font-sans leading-relaxed">
              {topic.hypothesis}
            </p>
          </div>

          {/* Flow indicator */}
          <div className="flex justify-center opacity-40">
            <ArrowRight className="w-4 h-4 text-violet-400 rotate-90" />
          </div>

          {/* 03: Experiment */}
          <div className="p-6 rounded-2xl bg-[#0c0e17] border border-white/10 space-y-2">
            <div className="font-mono text-xs text-cyan-400 font-bold tracking-widest flex items-center gap-2">
              <TestTube2 className="w-4 h-4 text-cyan-400" />
              <span>03 / SYSTEM PROTOTYPE & EXPERIMENTAL SETUP</span>
            </div>
            <p className="text-sm sm:text-base text-editorial-muted font-sans leading-relaxed">
              {topic.experiment}
            </p>
          </div>

          {/* Flow indicator */}
          <div className="flex justify-center opacity-40">
            <ArrowRight className="w-4 h-4 text-violet-400 rotate-90" />
          </div>

          {/* 04: Observation */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/20 to-transparent border border-emerald-500/20 space-y-2">
            <div className="font-mono text-xs text-emerald-400 font-bold tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>04 / EMPIRICAL OBSERVATION & BENCHMARK</span>
            </div>
            <p className="text-sm sm:text-base text-white font-sans leading-relaxed">
              {topic.observation}
            </p>
          </div>

          {/* Flow indicator */}
          <div className="flex justify-center opacity-40">
            <ArrowRight className="w-4 h-4 text-violet-400 rotate-90" />
          </div>

          {/* 05: Next Question */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-brand-electric/30 space-y-2">
            <div className="font-mono text-xs text-brand-electric font-bold tracking-widest flex items-center gap-2">
              <Compass className="w-4 h-4 text-brand-electric" />
              <span>05 / THE NEXT FRONTIER QUESTION</span>
            </div>
            <p className="text-sm sm:text-base font-semibold text-white font-sans leading-relaxed">
              "{topic.nextQuestion}"
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-8 flex items-center justify-between font-mono text-xs">
          <span className="text-editorial-dim">
            RESEARCH LOG // TUSHAR GUPTA
          </span>

          <button
            onClick={() => {
              soundFx.playClick(600);
              onClose();
            }}
            className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-bold transition-all"
          >
            RETURN TO EXPLORATIONS
          </button>
        </div>
      </div>
    </div>
  );
};
