import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface SpinningTextBadgeProps {
  onClick?: () => void;
  text?: string;
}

export const SpinningTextBadge: React.FC<SpinningTextBadgeProps> = ({
  onClick,
  text = 'EXPLORE PROJECTS • PROOF OF WORK • SYSTEMS LAB • ',
}) => {
  return (
    <button
      onClick={() => {
        soundFx.playClick(800);
        if (onClick) onClick();
      }}
      className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center group cursor-pointer"
      title="View projects"
    >
      {/* Outer ambient glow */}
      <div className="absolute inset-0 rounded-full bg-brand-blue/20 blur-xl group-hover:bg-brand-blue/40 transition-all duration-500" />

      {/* Spinning SVG Text */}
      <svg
        className="w-full h-full animate-[spin_12s_linear_infinite] group-hover:animate-[spin_6s_linear_infinite] transition-all"
        viewBox="0 0 200 200"
      >
        <path
          id="textPath"
          d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          fill="none"
        />
        <text className="text-[12.5px] font-mono font-bold uppercase fill-slate-300 dark:fill-slate-200 light:fill-slate-800 tracking-[0.22em]">
          <textPath href="#textPath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center Circle Button with Arrow */}
      <div className="absolute inset-4 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0a0c16] border border-white/20 dark:border-white/20 light:border-slate-300 light:bg-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:border-brand-electric transition-all duration-300">
        <ArrowUpRight className="w-7 h-7 text-brand-electric group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </button>
  );
};
