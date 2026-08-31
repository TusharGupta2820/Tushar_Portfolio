import React from 'react';
import { EDUCATION, HACKATHONS, EXTRACURRICULAR, CERTIFICATIONS } from '../../data/portfolioData';
import { GraduationCap, Trophy, Award, Users, CheckCircle, BookOpen } from 'lucide-react';
import { FadeUp, SlideIn, StaggerContainer, StaggerItem, FloatCard } from '../ui/Animations';

export const EducationAndHackathons: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-32 border-t border-white/8 w-full">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 space-y-20">
        {/* Academic Profile / Education */}
        <SlideIn from="left" className="space-y-6">
          <p className="text-xs text-slate-200 font-bold uppercase tracking-widest font-mono flex items-center gap-2">
            <GraduationCap className="w-3.5 h-3.5 text-brand-electric" /> Academic foundation
          </p>

          <div className="p-6 sm:p-10 rounded-2xl bg-[#0b0e1b] border border-white/15 space-y-8 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/12">
              <div>
                <span className="text-xs text-brand-electric font-bold block mb-1">
                  Undergraduate degree
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {EDUCATION.degree}
                </h3>
                <div className="text-sm sm:text-base text-slate-100 font-semibold mt-1">
                  {EDUCATION.institution} · {EDUCATION.university}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div className="p-3.5 sm:p-4 rounded-xl bg-brand-blue/20 border border-brand-blue/40 text-center font-mono shadow-md">
                  <span className="text-xs text-slate-200 font-bold block">CGPA</span>
                  <span className="text-2xl sm:text-3xl font-bold text-sky-300">
                    {EDUCATION.cgpa}
                  </span>
                  <span className="text-[10px] text-slate-300 font-semibold block">Scale 10.0</span>
                </div>

                <div className="p-3.5 sm:p-4 rounded-xl bg-white/10 border border-white/15 text-center font-mono shadow-md">
                  <span className="text-xs text-slate-200 font-bold block">Timeline</span>
                  <span className="text-base sm:text-lg font-bold text-white">
                    {EDUCATION.period}
                  </span>
                  <span className="text-[10px] text-slate-300 font-semibold block">Mumbai, India</span>
                </div>
              </div>
            </div>

            {/* Coursework Grid */}
            <div className="space-y-3">
              <div className="text-xs text-slate-200 font-bold flex items-center gap-2 font-mono uppercase tracking-wider">
                <BookOpen className="w-4 h-4 text-brand-electric" />
                <span>Core Computer Science & IT coursework</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs font-mono">
                {EDUCATION.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-white/10 border border-white/15 text-white font-bold transition-colors"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SlideIn>

        {/* Hackathons & Awards */}
        <FadeUp className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/12 pb-6">
            <div className="space-y-2">
              <p className="text-xs text-slate-200 font-bold uppercase tracking-widest font-mono flex items-center gap-2">
                <Trophy className="w-3.5 h-3.5 text-brand-electric" /> Competitive builds
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Hackathons & achievements
              </h2>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-3xl font-bold text-brand-electric">15+</span>
              <span className="text-xs text-slate-200 font-bold block font-mono">National-level hackathons</span>
            </div>
          </div>

          {/* Major Hackathon Highlights */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {HACKATHONS.filter((h) => h.isMajor).map((hack, idx) => (
              <StaggerItem key={idx}>
                <FloatCard intensity={3} className="h-full">
                  <div className="p-6 sm:p-8 rounded-2xl bg-[#0b0e1b] border border-white/15 hover:border-brand-blue/40 transition-all duration-300 space-y-4 h-full flex flex-col justify-between shadow-xl">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="px-2.5 py-1 rounded-md bg-amber-500/20 text-amber-200 font-bold border border-amber-500/40">
                          {hack.award}
                        </span>
                        <span className="text-slate-200 font-bold">{hack.location} · {hack.teamsCount}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white">
                        {hack.name}
                      </h3>

                      {hack.role && (
                        <div className="text-xs font-mono text-sky-300 font-bold">
                          Role: {hack.role}
                        </div>
                      )}

                      <p className="text-sm text-slate-100 font-medium leading-relaxed">
                        {hack.description}
                      </p>
                    </div>
                  </div>
                </FloatCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Other Hackathons Roster */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#0b0e1b] border border-white/15 space-y-3 shadow-lg">
            <div className="text-xs text-slate-200 font-bold font-mono uppercase tracking-wider">
              Additional competitive initiatives (15+ total):
            </div>
            <div className="flex flex-wrap gap-2">
              {HACKATHONS.filter((h) => !h.isMajor).map((h, i) => (
                <div
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-xs text-white font-semibold flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-electric" />
                  <span>{h.name}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Leadership & Campus Initiatives */}
        <FadeUp className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs text-slate-200 font-bold uppercase tracking-widest font-mono flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-brand-electric" /> Community
            </p>
            <h3 className="text-2xl font-bold text-white tracking-tight">Leadership & campus initiatives</h3>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" staggerDelay={0.06}>
            {EXTRACURRICULAR.map((item, idx) => (
              <StaggerItem key={idx}>
                <FloatCard className="h-full">
                  <div className="p-5 rounded-xl bg-[#0b0e1b] border border-white/15 hover:border-white/30 transition-colors space-y-2 h-full shadow-lg">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-bold text-white text-sm">{item.title}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-brand-blue/20 text-sky-200 font-bold border border-brand-blue/40 shrink-0">
                        {item.role}
                      </span>
                    </div>
                    <span className="text-xs text-slate-200 font-semibold block">{item.highlight}</span>
                    <p className="text-xs text-slate-100 font-medium leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>
                </FloatCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeUp>

        {/* Certifications */}
        <FadeUp className="space-y-6">
          <div className="space-y-2">
            <p className="text-xs text-slate-200 font-bold uppercase tracking-widest font-mono flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-brand-electric" /> Credentials
            </p>
            <h3 className="text-2xl font-bold text-white tracking-tight">Certifications & specializations</h3>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" staggerDelay={0.04}>
            {CERTIFICATIONS.map((cert, idx) => (
              <StaggerItem key={idx}>
                <div className="p-4 rounded-xl bg-[#0b0e1b] border border-white/15 flex items-center gap-3 hover:border-white/30 transition-colors shadow-md">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-white text-sm font-bold block">{cert.title}</span>
                    <span className="text-xs text-slate-200 font-semibold">{cert.domain}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeUp>
      </div>
    </section>
  );
};
