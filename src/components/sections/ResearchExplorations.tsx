import React from 'react';
import { RESEARCH_TOPICS, CURRENTLY_EXPLORING } from '../../data/portfolioData';
import { FlaskConical, ArrowRight, HelpCircle } from 'lucide-react';
import { soundFx } from '../../utils/audio';
import { ModelBenchmarkingLab } from '../interactive/ModelBenchmarkingLab';
import { SlideIn, StaggerContainer, StaggerItem, FloatCard, FadeUp } from '../ui/Animations';

interface ResearchExplorationsProps {
  onSelectResearch: (topicId: string) => void;
}

export const ResearchExplorations: React.FC<ResearchExplorationsProps> = ({ onSelectResearch }) => {
  return (
    <section id="research" className="relative py-24 sm:py-32 border-t border-white/8 w-full">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 space-y-12">
        {/* Section Header */}
        <SlideIn from="left" className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/8 pb-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs text-editorial-dim uppercase tracking-widest font-mono flex items-center gap-2">
              <FlaskConical className="w-3.5 h-3.5 text-violet-400" /> Research & explorations
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Research & experiments
            </h2>

            <p className="text-base text-editorial-muted leading-relaxed">
              Inquiries and benchmarks exploring artificial intelligence, model inference, and software systems.
            </p>
          </div>

          <div className="text-xs text-editorial-dim px-3 py-1.5 rounded-lg border border-white/8 bg-white/[0.02] self-start lg:self-end">
            Open notebook & empirical notes
          </div>
        </SlideIn>

        {/* Interactive Neural Model Benchmarking Laboratory */}
        <ModelBenchmarkingLab />

        {/* Currently Exploring Strip */}
        <FadeUp>
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0b0e1a] border border-white/15 space-y-3 shadow-lg">
            <p className="text-xs text-slate-200 font-bold uppercase tracking-wider flex items-center gap-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" /> Current explorations
            </p>

            <div className="flex flex-wrap gap-2">
              {CURRENTLY_EXPLORING.map((item) => (
                <span
                  key={item}
                  className="text-xs px-3 py-1.5 rounded-lg bg-violet-500/20 text-violet-200 border border-violet-400/40 font-semibold shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Research Topics Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
          {RESEARCH_TOPICS.map((topic) => (
            <StaggerItem key={topic.id}>
              <FloatCard intensity={4} className="h-full">
                <div
                  onClick={() => {
                    soundFx.playBlip(900);
                    onSelectResearch(topic.id);
                  }}
                  className="p-6 sm:p-7 rounded-2xl bg-[#0a0c16] border border-white/15 hover:border-violet-500/50 transition-all duration-300 flex flex-col justify-between group cursor-pointer h-full space-y-6 shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-violet-300 font-bold font-mono px-2 py-0.5 rounded bg-violet-500/15 border border-violet-500/30">{topic.category}</span>
                      <span className="text-xs font-semibold text-white px-2 py-0.5 rounded border border-white/20 bg-white/10">
                        {topic.status}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                      {topic.title}
                    </h3>

                    <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/12 space-y-1">
                      <div className="text-xs text-slate-200 font-bold flex items-center gap-1.5">
                        <HelpCircle className="w-3.5 h-3.5 text-violet-400" /> Research question
                      </div>
                      <p className="text-xs text-slate-100 font-medium italic leading-relaxed">
                        "{topic.question}"
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/12 flex items-center justify-between text-xs font-bold text-slate-200 group-hover:text-violet-300 transition-colors">
                    <span>Read research notes</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-violet-400" />
                  </div>
                </div>
              </FloatCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
