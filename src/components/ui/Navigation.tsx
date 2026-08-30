import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Volume2, VolumeX, Command, FileText, Menu, X, Sparkles, Sun, Moon } from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface NavigationProps {
  activeSection: string;
  onSelectSection: (sectionId: string) => void;
  onOpenCommandMenu: () => void;
  onOpenResumeModal: () => void;
  theme?: 'dark' | 'light';
  onToggleTheme?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onSelectSection,
  onOpenCommandMenu,
  onOpenResumeModal,
  theme = 'dark',
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    soundFx.setMuted(nextMuted);
    if (!nextMuted) {
      soundFx.playClick(800, 0.05);
    }
  };

  const navLinks = [
    { id: 'overview', label: 'OVERVIEW' },
    { id: 'work', label: 'WORK' },
    { id: 'research', label: 'RESEARCH' },
    { id: 'systems', label: 'SYSTEMS' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (id: string) => {
    soundFx.playClick(650);
    setMobileMenuOpen(false);
    onSelectSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#08090d]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
            : 'py-4.5 bg-[#08090d]/80 backdrop-blur-sm border-b border-white/5'
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 flex items-center justify-between">
          {/* Brand Logo / Left Identity */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleLinkClick('overview')}
              className="flex items-center gap-2.5 group text-left"
            >
              <span className="font-display font-bold text-base sm:text-lg tracking-wide text-white group-hover:text-brand-electric transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-brand-electric font-mono text-xs hidden sm:inline opacity-80">
                // IT'27
              </span>
            </button>

            {/* Status Pill Indicator */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 font-mono text-[10px] text-brand-electric">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{PERSONAL_INFO.status}</span>
            </div>
          </div>

          {/* Desktop Navigation Links with Active Underline */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-mono text-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-2 font-medium tracking-wider transition-all group flex flex-col items-center ${
                    isActive ? 'text-white font-bold' : 'text-editorial-muted hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.id === 'overview' && <Sparkles className="w-3 h-3 text-brand-electric" />}
                    <span>{link.label}</span>
                  </span>

                  {/* Active / Hover Underline */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full transition-all duration-300 ${
                      isActive
                        ? 'w-full bg-brand-electric shadow-[0_0_12px_#3b82f6] opacity-100'
                        : 'w-0 bg-brand-electric group-hover:w-full opacity-60'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Action Utilities: Theme Toggle, Resume, Command Menu & Sound FX */}
          <div className="flex items-center gap-2">
            {/* Light / Dark Theme Switcher Button */}
            {onToggleTheme && (
              <button
                onClick={() => {
                  soundFx.playBlip(900);
                  onToggleTheme();
                }}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-editorial-muted hover:text-white transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5"
                title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
                aria-label="Toggle Theme Mode"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 animate-in spin-in-180 duration-300" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-500 animate-in spin-in-180 duration-300" />
                )}
              </button>
            )}

            {/* Quick Resume Button */}
            <button
              onClick={() => {
                soundFx.playBlip(750);
                onOpenResumeModal();
              }}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 font-mono text-xs text-white transition-all hover:scale-105 active:scale-95 font-medium"
              title="View & Download Resume"
            >
              <FileText className="w-3.5 h-3.5 text-brand-electric" />
              <span>RESUME</span>
            </button>

            {/* Command Palette Trigger (Ctrl+K / Cmd+K) */}
            <button
              onClick={() => {
                soundFx.playBlip(800);
                onOpenCommandMenu();
              }}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-editorial-muted hover:text-white font-mono text-xs transition-colors"
              title="Open Command Palette (Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5" />
              <span className="text-[10px] text-editorial-dim">⌘K</span>
            </button>

            {/* Audio Feedback Toggle */}
            <button
              onClick={toggleAudio}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-editorial-muted hover:text-white transition-colors"
              title={isMuted ? 'Unmute UI Audio FX' : 'Mute UI Audio FX'}
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-editorial-dim" />
              ) : (
                <Volume2 className="w-4 h-4 text-brand-electric" />
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                soundFx.playClick(600);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0c13] border-b border-white/10 px-6 py-6 font-mono text-xs flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
              <div className="flex items-center gap-2 text-brand-electric">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{PERSONAL_INFO.status}</span>
              </div>

              {onToggleTheme && (
                <button
                  onClick={onToggleTheme}
                  className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/10 text-xs"
                >
                  {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-500" />}
                  <span>{theme === 'dark' ? 'LIGHT THEME' : 'DARK THEME'}</span>
                </button>
              )}
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`py-2 text-left transition-all flex items-center justify-between border-b border-white/5 ${
                    isActive
                      ? 'text-brand-electric font-bold pl-2 border-brand-electric'
                      : 'text-editorial-muted hover:text-white hover:pl-2'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-editorial-dim">{isActive ? '●' : '→'}</span>
                </button>
              );
            })}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full py-2.5 rounded-lg bg-brand-blue text-white font-bold text-center flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                VIEW RESUME / PROFILE
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
