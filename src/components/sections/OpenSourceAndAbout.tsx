import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Terminal, Sparkles, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';
import { soundFx } from '../../utils/audio';

export const OpenSourceAndAbout: React.FC = () => {
  return (
    <section id="about" className="relative py-28 sm:py-36 border-t border-white/10 overflow-hidden w-full">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 space-y-24 relative z-10">
        {/* About Section: Curious by default. Building by choice. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs text-brand-electric font-semibold tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>PHILOSOPHY & BACKGROUND</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
              CURIOUS BY DEFAULT.<br />
              <span className="text-brand-electric">BUILDING BY CHOICE.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-editorial-muted font-sans font-light leading-relaxed">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="text-brand-electric font-bold block mb-1">01 / FIRST-PRINCIPLES</span>
                <span className="text-editorial-dim text-[11px] leading-relaxed block">Deconstructing complex architectures into reliable primitives.</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <span className="text-brand-electric font-bold block mb-1">02 / CONTINUOUS SHIPPING</span>
                <span className="text-editorial-dim text-[11px] leading-relaxed block">Translating theoretical research into high-throughput code.</span>
              </div>
            </div>
          </div>

          {/* GitHub / Open Source Hub */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#090b12] border border-white/10 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs">
                <div className="flex items-center gap-2 text-brand-electric font-bold">
                  <GithubIcon className="w-4 h-4" />
                  <span>CODE / OPEN SOURCE</span>
                </div>
                <span className="text-editorial-dim">ACTIVE REPOSITORIES</span>
              </div>

              <div className="space-y-2">
                <div className="font-mono text-xs text-editorial-dim">GITHUB HANDLE:</div>
                <div className="text-xl sm:text-2xl font-bold font-mono text-white flex items-center justify-between">
                  <span>@{PERSONAL_INFO.githubDisplay.replace('github.com/', '')}</span>
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="external"
                    onClick={() => soundFx.playClick(700)}
                    className="text-xs px-3.5 py-1.5 rounded-lg bg-brand-blue hover:bg-brand-cobalt text-white font-mono font-medium flex items-center gap-1.5 transition-all"
                  >
                    <span>VISIT REPOS</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Technical Code Commit / Repository Attributes */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs pt-2">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-editorial-dim block">PRIMARY REPOS</span>
                  <span className="text-white font-bold text-sm">7+ Full Systems</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-editorial-dim block">LANGUAGES</span>
                  <span className="text-brand-electric font-bold text-sm">Python, TS, C++</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 col-span-2 sm:col-span-1">
                  <span className="text-[10px] text-editorial-dim block">METHODOLOGY</span>
                  <span className="text-emerald-400 font-bold text-sm">CI/CD & Docker</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 font-mono text-xs text-editorial-muted space-y-2">
                <div className="text-brand-electric flex items-center gap-1.5 text-[11px]">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>git clone https://github.com/TusharGupta2820/...</span>
                </div>
                <p className="text-[11px] text-editorial-dim font-sans leading-relaxed">
                  Open-source implementations featuring clean modular microservices, REST APIs, WebSockets, and deep learning model integrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
