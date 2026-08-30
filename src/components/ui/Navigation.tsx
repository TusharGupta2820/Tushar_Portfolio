import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Volume2, VolumeX, Command, FileText, Menu, X, Sun, Moon } from 'lucide-react';
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
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    soundFx.setMuted(nextMuted);
    if (!nextMuted) soundFx.playClick(800, 0.05);
  };

  const navLinks = [
    { id: 'overview', label: 'Home' },
    { id: 'work',     label: 'Work' },
    { id: 'systems',  label: 'Systems' },
    { id: 'research', label: 'Research' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills',   label: 'Skills' },
    { id: 'about',    label: 'About' },
    { id: 'contact',  label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    soundFx.playClick(650);
    setMobileMenuOpen(false);
    onSelectSection(id);

    if (id === 'overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-[#0a0a0f]/92 backdrop-blur-xl border-b border-white/8 shadow-sm'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 flex items-center justify-between">

          {/* Brand */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleLinkClick('overview')}
              className="flex items-center gap-2.5 group"
            >
              <span className="font-sans font-semibold text-base text-white group-hover:text-brand-electric transition-colors tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </button>

            {/* Availability pill */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 font-mono text-[10px] text-editorial-dim">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
              <span>Open to work</span>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 text-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-3 py-2 rounded-md font-medium transition-colors ${
                    isActive
                      ? 'text-white'
                      : 'text-editorial-dim hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-[1.5px] rounded-full bg-brand-electric/70" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right utilities */}
          <div className="flex items-center gap-1.5">
            {/* Theme toggle */}
            {onToggleTheme && (
              <button
                onClick={() => { soundFx.playBlip(900); onToggleTheme(); }}
                className="p-2 rounded-md text-editorial-dim hover:text-white hover:bg-white/5 transition-colors"
                title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
                aria-label="Toggle theme"
              >
                {theme === 'dark'
                  ? <Sun className="w-4 h-4" />
                  : <Moon className="w-4 h-4" />}
              </button>
            )}

            {/* Resume button */}
            <button
              onClick={() => { soundFx.playBlip(750); onOpenResumeModal(); }}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-white/12 text-sm text-editorial-dim hover:text-white hover:border-white/25 transition-all font-medium"
              title="View résumé"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Résumé</span>
            </button>

            {/* Command palette */}
            <button
              onClick={() => { soundFx.playBlip(800); onOpenCommandMenu(); }}
              className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-md border border-white/8 text-editorial-dim hover:text-white hover:bg-white/5 text-xs transition-colors"
              title="Command palette (⌘K)"
            >
              <Command className="w-3.5 h-3.5" />
              <span className="text-[10px] text-editorial-dim/70">⌘K</span>
            </button>

            {/* Audio toggle */}
            <button
              onClick={toggleAudio}
              className="p-2 rounded-md text-editorial-dim hover:text-white hover:bg-white/5 transition-colors"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted
                ? <VolumeX className="w-4 h-4" />
                : <Volume2 className="w-4 h-4" />}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => { soundFx.playClick(600); setMobileMenuOpen(!mobileMenuOpen); }}
              className="lg:hidden p-2 rounded-md text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0a0f]/98 backdrop-blur-xl border-t border-white/8 px-6 py-5 flex flex-col gap-1 animate-in slide-in-from-top-3 duration-200">
            <div className="flex items-center justify-between pb-3 mb-1 border-b border-white/8 text-xs text-editorial-dim">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                <span>{PERSONAL_INFO.status}</span>
              </div>
              {onToggleTheme && (
                <button
                  onClick={onToggleTheme}
                  className="flex items-center gap-1.5 px-2 py-1 rounded border border-white/10 text-xs text-editorial-dim hover:text-white"
                >
                  {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                  <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
                </button>
              )}
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`py-2.5 px-2 text-left text-sm rounded-md transition-all flex items-center justify-between ${
                    isActive
                      ? 'text-white font-medium bg-white/5'
                      : 'text-editorial-dim hover:text-white hover:bg-white/3'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-electric/70" />}
                </button>
              );
            })}

            <div className="pt-3 mt-1 border-t border-white/8">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenResumeModal(); }}
                className="w-full py-2.5 rounded-lg bg-brand-blue/90 text-white text-sm font-medium flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                View résumé
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
