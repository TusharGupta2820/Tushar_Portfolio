import React from 'react';
import { RESEARCH_TOPICS, CURRENTLY_EXPLORING } from '../../data/portfolioData';
import { FlaskConical, ArrowRight, Sparkles, HelpCircle } from 'lucide-react';
import { soundFx } from '../../utils/audio';
import { ModelBenchmarkingLab } from '../interactive/ModelBenchmarkingLab';
import { SlideIn, StaggerContainer, StaggerItem, FadeUp, FloatCard } from '../ui/Animations';

interface ResearchExplorationsProps {
  onSelectResearch: (topicId: string) => void;
}

export const ResearchExplorations: React.FC<ResearchExplorationsProps> = ({ onSelectResearch }) => {
  return (
    <section id="research" className="relative py-28 sm:py-36 border-t border-white/10 overflow-hidden w-full">
      {/* Background Subtle Lab Ambience */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 space-y-16 relative z-10">
        {/* Section Header */}
        <SlideIn from="left" className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-violet-400 font-semibold tracking-wider">
              <FlaskConical className="w-4 h-4" />
              <span>RESEARCH / EXPLORATIONS</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              RESEARCH / EXPLORATIONS
            </h2>

            <p className="text-base sm:text-lg text-editorial-muted font-sans font-light leading-relaxed">
              Questions I'm exploring at the intersection of artificial intelligence and software systems.
            </p>
          </div>

          {/* Non-published factual disclaimer badge */}
          <div className="font-mono text-[11px] text-editorial-dim px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 self-start lg:self-end">
            OPEN NOTEBOOK // ACTIVE EMPIRICAL INQUIRIES
          </div>
        </SlideIn>

        {/* Interactive Neural Model Benchmarking Laboratory */}
        <ModelBenchmarkingLab />

        {/* Currently Exploring Badges Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0c0e17] border border-white/10 space-y-3">
          <div className="font-mono text-xs text-violet-400 font-bold tracking-wider uppercase flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> CURRENTLY EXPLORING
          </div>

          <div className="flex flex-wrap gap-2.5">
            {CURRENTLY_EXPLORING.map((item) => (
              <span
                key={item}
                className="font-mono text-xs px-3.5 py-1.5 rounded-lg bg-violet-500/10 text-violet-300 border border-violet-500/20 font-medium"
              >
                ● {item}
              </span>
            ))}
          </div>
        </div>

        {/* Research Topics Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.09}>
          {RESEARCH_TOPICS.map((topic) => (
            <StaggerItem key={topic.id}>
              <FloatCard intensity={6} className="h-full">
                <div
                  onClick={() => {
                    soundFx.playBlip(900);
                    onSelectResearch(topic.id);
                  }}
                  data-cursor="explore"
                  className="p-6 sm:p-8 rounded-2xl bg-[#090a10]/90 border border-white/10 hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-lg hover:shadow-violet-500/10 h-full"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-violet-400 font-bold">{topic.category}</span>
                      <span className="text-[10px] text-editorial-dim px-2 py-0.5 rounded bg-white/5">
                        {topic.status}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-display text-white group-hover:text-violet-300 transition-colors">
                      {topic.title}
                    </h3>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                      <div className="font-mono text-[10px] text-editorial-dim uppercase tracking-wider flex items-center gap-1">
                        <HelpCircle className="w-3 h-3 text-brand-electric" /> RESEARCH QUESTION:
                      </div>
                      <p className="text-xs sm:text-sm text-editorial-text font-sans line-clamp-3 italic leading-relaxed">
                        "{topic.question}"
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between font-mono text-xs text-editorial-dim group-hover:text-violet-300 transition-colors">
                    <span>OPEN NOTEBOOK</span>
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
