import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Terminal, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { soundFx } from '../../utils/audio';
import { SlideIn, FadeUp } from '../ui/Animations';

export const OpenSourceAndAbout: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 border-t border-white/8 w-full">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 space-y-16">
        {/* About & Open Source */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <SlideIn from="left" className="lg:col-span-6 space-y-6">
            <p className="text-xs text-editorial-dim uppercase tracking-widest font-mono">
              Philosophy & background
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Curious by default.<br />
              <span className="text-brand-electric">Building by choice.</span>
            </h2>

            <div className="space-y-4 text-base text-editorial-muted leading-relaxed font-light">
              <p>
                I'm an Information Technology undergraduate at the University of Mumbai interested in the intersection of artificial intelligence, software engineering, and real-world systems.
              </p>
              <p>
                I enjoy taking ambiguous problems, breaking them into systems, experimenting with technology, and turning ideas into working products.
              </p>
              <p>
                My work spans AI/ML, full-stack engineering, computer vision, real-time systems, cloud infrastructure, and intelligent applications.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/6">
                <span className="text-brand-electric font-medium block mb-1">First-principles thinking</span>
                <span className="text-editorial-dim leading-relaxed block">Deconstructing complex architectures into reliable primitives.</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/6">
                <span className="text-brand-electric font-medium block mb-1">Continuous shipping</span>
                <span className="text-editorial-dim leading-relaxed block">Translating theoretical concepts into production-grade systems.</span>
              </div>
            </div>
          </SlideIn>

          {/* GitHub / Open Source Hub */}
          <FadeUp delay={0.1} className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/6 pb-4 text-xs font-mono">
                <div className="flex items-center gap-2 text-brand-electric">
                  <GithubIcon className="w-4 h-4" />
                  <span>Open Source</span>
                </div>
                <span className="text-editorial-dim">Active repositories</span>
              </div>

              <div className="space-y-2">
                <div className="text-xs text-editorial-dim">GitHub profile:</div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white flex items-center justify-between">
                  <span>@{PERSONAL_INFO.githubDisplay.replace('github.com/', '')}</span>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => soundFx.playClick(700)}
                    className="text-xs px-3.5 py-1.5 rounded-lg bg-brand-blue hover:bg-brand-cobalt text-white font-mono font-medium flex items-center gap-1.5 transition-all"
                  >
                    <span>Visit profile</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Technical Attributes */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs pt-1 font-mono">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-editorial-dim block">REPOSITORIES</span>
                  <span className="text-white font-medium text-sm">16+ Systems</span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-editorial-dim block">LANGUAGES</span>
                  <span className="text-brand-electric font-medium text-sm">Python, TS, C++</span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-editorial-dim block">DEPLOYMENT</span>
                  <span className="text-emerald-400 font-medium text-sm">Docker & Cloud</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/30 border border-white/5 font-mono text-xs text-editorial-muted space-y-1.5">
                <div className="text-brand-electric flex items-center gap-1.5 text-[11px]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>git clone https://github.com/TusharGupta2820/...</span>
                </div>
                <p className="text-[11px] text-editorial-dim font-sans leading-relaxed">
                  Open-source implementations featuring modular microservices, REST APIs, WebSockets, and deep learning model integrations.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};
