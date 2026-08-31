import React from 'react';
import { EXPERIENCES } from '../../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp } from 'lucide-react';
import { SlideIn, StaggerContainer, StaggerItem, FloatCard } from '../ui/Animations';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 border-t border-white/8 w-full">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 space-y-16">

        {/* Header */}
        <SlideIn from="left" className="space-y-3 max-w-2xl">
          <p className="text-xs text-slate-200 font-bold uppercase tracking-widest font-mono flex items-center gap-2">
            <Briefcase className="w-3.5 h-3.5 text-brand-electric" /> Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Where I've worked
          </h2>
          <p className="text-base text-slate-100 font-medium leading-relaxed">
            Internships and engineering roles across AI strategy, full-stack systems, and web architecture.
          </p>
        </SlideIn>

        {/* Cards */}
        <StaggerContainer className="space-y-6" staggerDelay={0.1}>
          {EXPERIENCES.map((exp) => (
            <StaggerItem key={exp.id}>
              <FloatCard intensity={3}>
                <div className="p-6 sm:p-8 rounded-2xl border border-white/15 bg-[#0b0e1b] hover:border-white/30 transition-all duration-300 space-y-6 shadow-xl">

                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      <p className="text-sky-300 text-sm font-bold mt-0.5">{exp.role}</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-200 font-semibold shrink-0">
                      <span className="flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded border border-white/15">
                        <MapPin className="w-3.5 h-3.5 text-brand-electric" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/20 bg-white/10 text-xs font-bold text-white">
                        <Calendar className="w-3.5 h-3.5 text-sky-400" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <ul className="lg:col-span-8 space-y-2.5">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-100 font-medium leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-brand-electric shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Impact */}
                    <div className="lg:col-span-4 space-y-2">
                      <p className="text-xs text-slate-200 font-bold uppercase tracking-wider font-mono flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Outcomes
                      </p>
                      <StaggerContainer className="space-y-2" staggerDelay={0.06}>
                        {exp.impact.map((imp, idx) => (
                          <StaggerItem key={idx}>
                            <div className="px-3 py-2 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-xs font-bold text-emerald-200 shadow-sm">
                              {imp}
                            </div>
                          </StaggerItem>
                        ))}
                      </StaggerContainer>
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/12">
                    {exp.technologies.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded text-xs font-semibold text-white border border-white/15 bg-white/10">
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
