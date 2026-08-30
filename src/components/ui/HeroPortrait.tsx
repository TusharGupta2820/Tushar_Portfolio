import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Sparkles, ShieldCheck, Terminal, User, Camera } from 'lucide-react';

interface HeroPortraitProps {
  imageSrc?: string;
}

export const HeroPortrait: React.FC<HeroPortraitProps> = ({
  imageSrc = '/tushar.jpg',
}) => {
  const [imageError, setImageError] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div className="relative w-full max-w-[420px] mx-auto select-none group perspective-1000">
      {/* Outer Ambient Glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-brand-blue/30 via-violet-600/20 to-cyan-400/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Main Tiltable Portrait Card */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="relative rounded-3xl border border-brand-blue/30 bg-[#0a0c16]/90 backdrop-blur-xl p-4 sm:p-5 shadow-2xl overflow-hidden font-mono"
      >
        {/* HUD Top Bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[11px]">
          <div className="flex items-center gap-1.5 text-brand-electric font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>OPERATOR_ID // {PERSONAL_INFO.name}</span>
          </div>
          <span className="text-[10px] text-editorial-dim px-2 py-0.5 rounded bg-white/5 border border-white/5">
            TCET // IT'27
          </span>
        </div>

        {/* Picture Container / Frame */}
        <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-[#06070d] flex items-center justify-center group-hover:border-brand-blue/50 transition-colors shadow-inner">
          {/* Tech grid texture in background */}
          <div className="absolute inset-0 tech-grid opacity-25 pointer-events-none" />

          {/* User's Headshot */}
          {!imageError ? (
            <img
              src={imageSrc}
              alt={PERSONAL_INFO.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            /* Fallback placeholder if missing */
            <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center space-y-4">
              <div className="relative p-6 rounded-full bg-brand-blue/10 border border-brand-blue/30 text-brand-electric">
                <User className="w-16 h-16 text-brand-electric stroke-[1.5]" />
                <span className="absolute bottom-0 right-0 p-1.5 rounded-full bg-emerald-400 border-2 border-[#06070d] animate-pulse" />
              </div>

              <div className="space-y-1">
                <h4 className="font-display font-bold text-white text-base">
                  {PERSONAL_INFO.name}
                </h4>
                <p className="text-[11px] text-editorial-muted font-mono">
                  AI Engineer & Full-Stack Developer
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-dashed border-white/15 text-[10px] text-editorial-dim max-w-[240px] leading-relaxed">
                <Camera className="w-3.5 h-3.5 mx-auto mb-1 text-brand-electric" />
                Place your photo in <span className="text-white font-bold font-mono">public/tushar.jpg</span> to display here automatically.
              </div>
            </div>
          )}

          {/* Futuristic Corner Brackets */}
          <span className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-brand-electric" />
          <span className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-brand-electric" />
          <span className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-brand-electric" />
          <span className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-brand-electric" />

          {/* Bottom Overlay Pill on Photo */}
          <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-[10px] z-10">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>STATUS: AVAILABLE</span>
            </div>
            <span className="text-editorial-dim">MUMBAI, IN</span>
          </div>
        </div>

        {/* Card Footer Telemetry */}
        <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-editorial-dim">
          <div className="flex items-center gap-1">
            <Terminal className="w-3 h-3 text-brand-electric" />
            <span>AI / ML & FULL-STACK</span>
          </div>
          <div className="flex items-center gap-1 text-brand-electric">
            <Sparkles className="w-3 h-3" />
            <span>CGPA {PERSONAL_INFO.cgpa}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
