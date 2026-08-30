import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingSequence } from './components/ui/LoadingSequence';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navigation } from './components/ui/Navigation';
import { CommandMenu } from './components/ui/CommandMenu';
import { ResumeModal } from './components/ui/ResumeModal';
import { CaseStudyModal } from './components/modals/CaseStudyModal';
import { ResearchNoteModal } from './components/modals/ResearchNoteModal';
import { InteractiveTerminal } from './components/ui/InteractiveTerminal';
import { SectionTransition } from './components/ui/Animations';

import { Hero } from './components/sections/Hero';
import { SelectedWork } from './components/sections/SelectedWork';
import { SystemsLab3D } from './components/3d/SystemsLab3D';
import { ResearchExplorations } from './components/sections/ResearchExplorations';
import { Experience } from './components/sections/Experience';
import { TechnicalSkills } from './components/sections/TechnicalSkills';
import { EducationAndHackathons } from './components/sections/EducationAndHackathons';
import { OpenSourceAndAbout } from './components/sections/OpenSourceAndAbout';
import { ContactAndFooter } from './components/sections/ContactAndFooter';

import { PROJECTS, RESEARCH_TOPICS } from './data/portfolioData';
import type { ProjectItem, ResearchTopic } from './data/portfolioData';

export function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [commandMenuOpen, setCommandMenuOpen] = useState<boolean>(false);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [activeResearch, setActiveResearch] = useState<ResearchTopic | null>(null);

  // Theme Management
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('tushar-portfolio-theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('tushar-portfolio-theme', 'light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
      localStorage.setItem('tushar-portfolio-theme', 'dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSelectProject = (projectId: string) => {
    const found = PROJECTS.find((p) => p.id === projectId);
    if (found) setActiveProject(found);
  };

  const handleSelectResearch = (topicId: string) => {
    const found = RESEARCH_TOPICS.find((r) => r.id === topicId);
    if (found) setActiveResearch(found);
  };

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-editorial-text selection:bg-brand-blue selection:text-white relative w-full overflow-x-hidden transition-colors duration-300">
      {/* Short high-prestige loading sequence */}
      {isLoading && <LoadingSequence onComplete={() => setIsLoading(false)} />}

      {/* Fluid custom desktop cursor */}
      <CustomCursor />

      {/* Fixed Sticky Header Navigation */}
      <Navigation
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        onOpenCommandMenu={() => setCommandMenuOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Single-Section Content Area */}
      <main className="relative z-10 w-full pt-16">
        <AnimatePresence mode="wait">
          {activeSection === 'overview' && (
            <SectionTransition key="overview">
              <Hero
                onOpenResumeModal={() => setResumeModalOpen(true)}
                onNavigate={handleSelectSection}
              />
            </SectionTransition>
          )}

          {activeSection === 'work' && (
            <SectionTransition key="work">
              <SelectedWork onSelectProject={handleSelectProject} />
            </SectionTransition>
          )}

          {activeSection === 'research' && (
            <SectionTransition key="research">
              <ResearchExplorations onSelectResearch={handleSelectResearch} />
            </SectionTransition>
          )}

          {activeSection === 'systems' && (
            <SectionTransition key="systems">
              <section id="systems" className="py-24 sm:py-32 relative w-full">
                <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 space-y-6">
                  <div className="max-w-2xl space-y-3">
                    <p className="text-xs text-editorial-dim uppercase tracking-widest font-mono flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-electric" /> Architecture & topologies
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                      Systems I build
                    </h2>
                    <p className="text-base text-editorial-muted leading-relaxed font-light">
                      From frontend component orchestration to high-throughput async gateways, distributed telemetry, and local model inference.
                    </p>
                  </div>
                  <SystemsLab3D />
                </div>
              </section>
            </SectionTransition>
          )}

          {activeSection === 'experience' && (
            <SectionTransition key="experience">
              <Experience />
            </SectionTransition>
          )}

          {activeSection === 'skills' && (
            <SectionTransition key="skills">
              <TechnicalSkills />
            </SectionTransition>
          )}

          {activeSection === 'about' && (
            <SectionTransition key="about">
              <OpenSourceAndAbout />
              <EducationAndHackathons />
            </SectionTransition>
          )}

          {activeSection === 'contact' && (
            <SectionTransition key="contact">
              <ContactAndFooter />
            </SectionTransition>
          )}
        </AnimatePresence>
      </main>

      {/* Interactive Developer REPL Terminal */}
      <InteractiveTerminal
        onSelectProject={handleSelectProject}
        onNavigate={handleSelectSection}
        onToggleTheme={toggleTheme}
      />

      {/* Modals & Command Palette */}
      <CommandMenu
        isOpen={commandMenuOpen}
        onClose={() => setCommandMenuOpen(false)}
        onSelectProject={handleSelectProject}
        onSelectResearch={handleSelectResearch}
        onOpenResume={() => setResumeModalOpen(true)}
        onSelectSection={handleSelectSection}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      <ResearchNoteModal
        topic={activeResearch}
        onClose={() => setActiveResearch(null)}
      />
    </div>
  );
}

export default App;
