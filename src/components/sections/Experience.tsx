import React from 'react';
import { EXPERIENCES } from '../../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp } from 'lucide-react';
import { SlideIn, StaggerContainer, StaggerItem, FloatCard } from '../ui/Animations';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 sm:py-36 border-t border-white/10 overflow-hidden w-full">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 space-y-20 relative z-10">

        {/* Section Header */}
        <SlideIn from="left" className="max-w-3xl space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs text-brand-electric font-semibold tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>PROFESSIONAL TIMELINE // 04 ROLES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            EXPERIENCE
          </h2>

          <p className="text-base sm:text-lg text-editorial-muted font-sans font-light leading-relaxed">
            Internships, engineering leadership, and product deployment across AI strategy, full-stack systems, and web architecture.
          </p>
        </SlideIn>

        {/* Experience Cards — staggered reveal */}
        <StaggerContainer className="space-y-8" staggerDelay={0.12} containerDelay={0.05}>
          {EXPERIENCES.map((exp, index) => (
            <StaggerItem key={exp.id}>
              <FloatCard intensity={4}>
                <div className="p-6 sm:p-8 lg:p-10 rounded-3xl border border-white/10 bg-[#090a10]/80 backdrop-blur-md hover:border-brand-blue/30 transition-all duration-300 shadow-xl space-y-6">
                  {/* Header Info */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xl sm:text-2xl font-bold font-display text-white">
                          {exp.company}
                        </span>
                        <span className="font-mono text-xs text-editorial-dim px-2 py-0.5 rounded bg-white/5">
                          0{index + 1}
                        </span>
                      </div>
                      <div className="text-sm sm:text-base text-brand-electric font-mono font-medium mt-0.5">
                        {exp.role}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-editorial-muted">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-brand-blue" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-white">
                        <Calendar className="w-3.5 h-3.5 text-brand-electric" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Focus Areas & Achievements */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8 space-y-4">
                      <div className="font-mono text-[10px] text-editorial-dim uppercase tracking-wider">
                        RESPONSIBILITIES & ENGINEERING HIGHLIGHTS:
                      </div>

                      <ul className="space-y-2.5 text-xs sm:text-sm text-editorial-text font-sans leading-relaxed">
                        {exp.achievements.map((ach, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-brand-electric shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact Cards — staggered pop-in */}
                    <div className="lg:col-span-4 space-y-3">
                      <div className="font-mono text-[10px] text-editorial-dim uppercase tracking-wider flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-emerald-400" />
                        <span>REPORTED OUTCOMES:</span>
                      </div>

                      <StaggerContainer className="space-y-2.5" staggerDelay={0.07}>
                        {exp.impact.map((imp, idx) => (
                          <StaggerItem key={idx}>
                            <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs font-mono text-emerald-300 font-medium">
                              ✓ {imp}
                            </div>
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                    </div>
                  </div>

                  {/* Technologies strip */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="text-[10px] text-editorial-dim uppercase tracking-wider mr-1">FOCUS:</span>
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded bg-white/[0.03] text-editorial-muted border border-white/5 text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
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
