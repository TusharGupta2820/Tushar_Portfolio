import React from 'react';
import { Home, Briefcase, Layers, FlaskConical, Award, Wrench, User, Mail } from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface FloatingDockNavProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
}

export const FloatingDockNav: React.FC<FloatingDockNavProps> = ({
  activeSection,
  onSelectSection,
}) => {
  const navItems = [
    { id: 'overview',   label: 'Home',       icon: Home },
    { id: 'work',       label: 'Work',       icon: Briefcase },
    { id: 'systems',    label: 'Systems',    icon: Layers },
    { id: 'research',   label: 'Research',   icon: FlaskConical },
    { id: 'experience', label: 'Experience', icon: Award },
    { id: 'skills',     label: 'Skills',     icon: Wrench },
    { id: 'about',      label: 'About',      icon: User },
    { id: 'contact',    label: 'Contact',    icon: Mail },
  ];

  const handleClick = (id: string) => {
    soundFx.playClick(750);
    onSelectSection(id);
  };

  return (
    <nav className="flex flex-col items-center xl:justify-center fixed h-max bottom-4 xl:bottom-auto xl:right-6 z-50 top-auto xl:top-0 left-1/2 -translate-x-1/2 xl:translate-x-0 w-max xl:w-16 xl:h-screen pointer-events-auto">
      <div className="flex xl:flex-col items-center justify-center gap-y-6 sm:gap-y-8 gap-x-4 sm:gap-x-6 px-4 py-3 sm:py-4 xl:py-6 bg-black/70 dark:bg-[#0a0c16]/90 light:bg-white/90 backdrop-blur-xl border border-white/20 dark:border-white/15 light:border-slate-300 shadow-2xl rounded-full text-white">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`relative flex items-center justify-center p-2.5 rounded-full group transition-all duration-300 ${
                isActive
                  ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/40 scale-110'
                  : 'text-slate-300 hover:text-white hover:bg-white/10 dark:text-slate-400 dark:hover:text-white'
              }`}
              title={item.label}
              aria-label={item.label}
            >
              {/* Tooltip on Desktop hover */}
              <div role="tooltip" className="absolute pr-14 right-0 hidden xl:group-hover:flex pointer-events-none transition-all duration-200">
                <div className="bg-white dark:bg-[#0d0f18] text-slate-900 dark:text-white border border-slate-200 dark:border-white/15 shadow-xl relative flex items-center px-3 py-1.5 rounded-lg text-xs font-mono font-bold capitalize whitespace-nowrap">
                  <span>{item.label}</span>
                  {/* Tooltip Arrow */}
                  <div
                    className="border-solid border-l-white dark:border-l-[#0d0f18] border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2 top-1/2 -translate-y-1/2"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <Icon className="w-5 h-5 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />

              {/* Active glow dot indicator */}
              {isActive && (
                <span className="absolute -bottom-1 xl:top-1/2 xl:-left-1.5 xl:-translate-y-1/2 xl:bottom-auto w-1.5 h-1.5 rounded-full bg-brand-electric shadow-[0_0_8px_#3b82f6]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
