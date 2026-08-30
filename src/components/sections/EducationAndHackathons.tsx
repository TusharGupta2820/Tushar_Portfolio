import React from 'react';
import { EDUCATION, HACKATHONS, EXTRACURRICULAR, CERTIFICATIONS } from '../../data/portfolioData';
import { GraduationCap, Trophy, Award, Users, CheckCircle, BookOpen } from 'lucide-react';

export const EducationAndHackathons: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 border-t border-white/10 overflow-hidden w-full">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 space-y-24 relative z-10">
        {/* Academic Profile / Education */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 font-mono text-xs text-brand-electric font-semibold tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>ACADEMIC FOUNDATION // RESEARCH PROFILE</span>
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#090a10]/90 border border-white/10 shadow-2xl space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div>
                <span className="font-mono text-xs text-brand-electric uppercase tracking-wider block mb-1">
                  UNDERGRADUATE DEGREE
                </span>
                <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
                  {EDUCATION.degree}
                </h3>
                <div className="text-sm sm:text-base text-editorial-muted mt-1 font-sans">
                  {EDUCATION.institution} · {EDUCATION.university}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 text-center font-mono">
                  <span className="text-[10px] text-editorial-dim block">CUMULATIVE GPA</span>
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-brand-electric">
                    {EDUCATION.cgpa}
                  </span>
                  <span className="text-[9px] text-editorial-dim">SCALE 10.0</span>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-center font-mono">
                  <span className="text-[10px] text-editorial-dim block">TIMELINE</span>
                  <span className="text-lg sm:text-xl font-bold text-white">
                    {EDUCATION.period}
                  </span>
                  <span className="text-[9px] text-editorial-dim">MUMBAI, INDIA</span>
                </div>
              </div>
            </div>

            {/* Coursework Grid */}
            <div className="space-y-3">
              <div className="font-mono text-xs text-editorial-dim uppercase tracking-wider flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-brand-blue" />
                <span>CORE COMPUTER SCIENCE & IT CURRICULUM</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 font-mono text-xs">
                {EDUCATION.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-editorial-text hover:border-brand-blue/30 transition-colors"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Proof of Work: Hackathons & Competitive Engineering */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-brand-electric font-semibold tracking-wider">
                <Trophy className="w-4 h-4 text-brand-blue" />
                <span>PROOF OF WORK // COMPETITIVE BUILDS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight mt-2">
                HACKATHONS & AWARDS
              </h2>
            </div>

            <div className="text-left sm:text-right font-mono">
              <span className="text-3xl sm:text-4xl font-display font-black text-brand-electric">15+</span>
              <span className="text-xs text-editorial-dim block">NATIONAL-LEVEL PARTICIPATIONS</span>
            </div>
          </div>

          {/* Major Hackathon Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {HACKATHONS.filter((h) => h.isMajor).map((hack, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-brand-blue/10 via-[#0a0c14] to-[#07080c] border border-brand-blue/30 shadow-xl space-y-4 relative overflow-hidden"
              >
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="px-3.5 py-1 rounded-full bg-brand-blue text-white font-bold tracking-wider text-[11px] shadow-sm">
                    ★ {hack.award}
                  </span>
                  <span className="text-editorial-dim">{hack.location} · {hack.teamsCount}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {hack.name}
                </h3>

                {hack.role && (
                  <div className="text-xs font-mono text-brand-electric">
                    ROLE: {hack.role}
                  </div>
                )}

                <p className="text-sm text-editorial-muted font-sans leading-relaxed">
                  {hack.description}
                </p>
              </div>
            ))}
          </div>

          {/* Other Hackathons Roster */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0a0c13] border border-white/10 space-y-3 font-mono text-xs">
            <div className="text-editorial-dim uppercase tracking-wider text-[11px]">
              ADDITIONAL COMPETITIVE INITIATIVES (15+ TOTAL):
            </div>
            <div className="flex flex-wrap gap-2.5">
              {HACKATHONS.filter((h) => !h.isMajor).map((h, i) => (
                <div
                  key={i}
                  className="px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-white font-mono flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-electric" />
                  <span>{h.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extracurricular & Leadership */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-brand-electric font-semibold tracking-wider">
            <Users className="w-4 h-4" />
            <span>LEADERSHIP & CAMPUS INITIATIVES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            {EXTRACURRICULAR.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#090b12] border border-white/5 hover:border-brand-blue/30 transition-colors space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm font-display">{item.title}</span>
                  <span className="text-[9px] px-2 py-0.5 rounded bg-brand-blue/10 text-brand-electric">
                    {item.role}
                  </span>
                </div>
                <span className="text-[10px] text-editorial-dim block">{item.highlight}</span>
                <p className="text-xs text-editorial-muted font-sans leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications / Learning */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 font-mono text-xs text-brand-electric font-semibold tracking-wider">
            <Award className="w-4 h-4" />
            <span>CERTIFICATIONS & SPECIALIZATIONS // 09 VERIFIED</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 font-mono text-xs">
            {CERTIFICATIONS.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#090b12] border border-white/5 flex items-center gap-3 hover:border-white/20 transition-colors"
              >
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-white font-medium block">{cert.title}</span>
                  <span className="text-[10px] text-editorial-dim">{cert.domain}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
