import React from 'react';
import { PERSONAL_INFO, KEY_NUMBERS } from '../../data/portfolioData';
import { HeroPortrait } from '../ui/HeroPortrait';
import { SpinningTextBadge } from '../ui/SpinningTextBadge';
import { ArrowRight, FileText, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';
import { soundFx } from '../../utils/audio';
import { FadeUp, SlideIn, StaggerContainer, StaggerItem, Counter, FloatCard } from '../ui/Animations';

interface HeroProps {
  onOpenResumeModal: () => void;
  onNavigate?: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, onNavigate }) => {
  const handleNav = (sec: string) => {
    soundFx.playClick(650);
    onNavigate?.(sec);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-32 pb-16 overflow-hidden w-full">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 relative z-10 space-y-16">

        {/* ── Top breadcrumb bar ─────────────────── */}
        <FadeUp duration={0.4}>
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/12 text-sm text-slate-200 font-semibold">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand-electric" />
              <span>{PERSONAL_INFO.location}</span>
              <span className="opacity-40 mx-1">·</span>
              <span className="text-white">{PERSONAL_INFO.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-100">{PERSONAL_INFO.institution}</span>
              <span className="opacity-40 mx-1">·</span>
              <span className="text-brand-electric font-bold bg-brand-blue/15 px-2.5 py-0.5 rounded border border-brand-blue/30">CGPA {PERSONAL_INFO.cgpa}</span>
            </div>
          </div>
        </FadeUp>

        {/* ── Main grid ─────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left — headline + bio + actions */}
          <SlideIn from="left" className="lg:col-span-7 space-y-8">

            {/* Availability tag — small, clean */}
            <div className="inline-flex items-center gap-2 text-sm text-slate-100 font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/15">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>{PERSONAL_INFO.heroSubtext}</span>
            </div>

            {/* Headline — confident */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-white tracking-tight leading-[1.1]">
                Building intelligent<br />
                <span className="text-brand-electric">systems</span> for<br />
                the real world.
              </h1>

              <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed max-w-2xl">
                {PERSONAL_INFO.heroIntro}
              </p>
            </div>

            {/* Actions */}
            <FadeUp delay={0.2} className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleNav('work')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-cobalt text-white text-sm font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-brand-blue/35"
                >
                  <span>View my work</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => { soundFx.playBlip(800); onOpenResumeModal(); }}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 bg-white/5 text-sm text-white hover:border-white/40 hover:bg-white/10 transition-all font-semibold"
                >
                  <FileText className="w-4 h-4 text-brand-electric" />
                  <span>Résumé</span>
                </button>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank" rel="noreferrer"
                  onClick={() => soundFx.playClick(700)}
                  className="p-3 rounded-xl border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10 transition-all"
                  title="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank" rel="noreferrer"
                  onClick={() => soundFx.playClick(700)}
                  className="p-3 rounded-xl border border-white/15 bg-white/5 text-white hover:text-brand-electric hover:border-white/30 hover:bg-white/10 transition-all"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>

              {/* Spinning Circular Text Badge */}
              <div className="hidden sm:block">
                <SpinningTextBadge onClick={() => handleNav('work')} />
              </div>
            </FadeUp>
          </SlideIn>

          {/* Right — portrait */}
          <SlideIn from="right" delay={0.08} className="lg:col-span-5 flex items-center justify-center">
            <HeroPortrait imageSrc="/tushar.jpg" />
          </SlideIn>
        </div>

        {/* ── Key numbers ───────────────────────── */}
        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-8 border-t border-white/12"
          staggerDelay={0.07}
        >
          {KEY_NUMBERS.map((num, i) => (
            <StaggerItem key={i}>
              <FloatCard className="h-full">
                <div className="p-4 sm:p-5 rounded-xl bg-[#0b0d18] border border-white/15 hover:border-white/30 transition-colors h-full shadow-lg">
                  <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                    <Counter value={num.value} />
                  </div>
                  <div className="text-sm font-bold text-white mt-1">{num.label}</div>
                  <div className="text-xs text-slate-200 font-semibold mt-0.5">{num.context}</div>
                </div>
              </FloatCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ── Section quick-jump — clean list layout */}
        <FadeUp delay={0.1}>
          <div className="space-y-3 pt-2">
            <p className="text-xs text-slate-200 font-bold uppercase tracking-widest font-mono">Jump to</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-2">
              {[
                { id: 'work',       label: 'Selected work',   count: '16 projects' },
                { id: 'research',   label: 'Research',        count: 'Inquiries' },
                { id: 'systems',    label: 'Systems lab',     count: '7 layers' },
                { id: 'experience', label: 'Experience',      count: '4 roles' },
                { id: 'skills',     label: 'Skills',          count: 'Tech stack' },
                { id: 'about',      label: 'About me',        count: 'Education' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="p-3.5 rounded-xl border border-white/15 hover:border-brand-blue/50 bg-[#0c0e1a] hover:bg-white/[0.08] text-left transition-all group shadow-md"
                >
                  <div className="text-sm font-bold text-white group-hover:text-brand-electric transition-colors">
                    {item.label}
                  </div>
                  <div className="text-xs text-slate-200 font-semibold mt-0.5">{item.count}</div>
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
};
