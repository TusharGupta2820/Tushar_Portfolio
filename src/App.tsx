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
import { Background3D } from './components/3d/Background3D';
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
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('tushar-portfolio-theme') as 'dark' | 'light') || 'dark';
    }
    return 'dark';
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

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-editorial-text selection:bg-brand-blue selection:text-white relative w-full overflow-x-hidden transition-colors duration-300">
      {/* Interactive 3D Ambient Background Canvas */}
      <Background3D />

      {/* Short loading sequence */}
      {isLoading && <LoadingSequence onComplete={() => setIsLoading(false)} />}

      {/* Fluid custom desktop cursor */}
      <CustomCursor />

      {/* Fixed Header Navigation */}
      <Navigation
        activeSection={activeSection}
        onSelectSection={handleNavigateSection}
        onOpenCommandMenu={() => setCommandMenuOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Section-Wise Content View with 3D Page Transitions */}
      <main className="relative z-10 w-full pt-16 min-h-[85vh]">
        <AnimatePresence mode="wait">
          {/* OVERVIEW / HERO */}
          {activeSection === 'overview' && (
            <SectionTransition key="overview">
              <Hero
                onOpenResumeModal={() => setResumeModalOpen(true)}
                onNavigate={handleNavigateSection}
              />
            </SectionTransition>
          )}

          {/* WORK */}
          {activeSection === 'work' && (
            <SectionTransition key="work">
              <SelectedWork onSelectProject={handleSelectProject} />
            </SectionTransition>
          )}

          {/* SYSTEMS LAB */}
          {activeSection === 'systems' && (
            <SectionTransition key="systems">
              <section id="systems" className="py-24 sm:py-32 w-full">
                <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 space-y-8">
                  <div className="max-w-2xl space-y-3">
                    <p className="text-xs text-slate-200 font-bold uppercase tracking-widest font-mono flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-electric" /> Architecture & topologies
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                      Systems I build
                    </h2>
                    <p className="text-base text-slate-100 font-medium leading-relaxed font-light">
                      From frontend component orchestration to high-throughput async gateways, distributed telemetry, and local model inference.
                    </p>
                  </div>
                  <SystemsLab3D />
                </div>
              </section>
            </SectionTransition>
          )}

          {/* RESEARCH */}
          {activeSection === 'research' && (
            <SectionTransition key="research">
              <ResearchExplorations onSelectResearch={handleSelectResearch} />
            </SectionTransition>
          )}

          {/* EXPERIENCE */}
          {activeSection === 'experience' && (
            <SectionTransition key="experience">
              <Experience />
            </SectionTransition>
          )}

          {/* SKILLS */}
          {activeSection === 'skills' && (
            <SectionTransition key="skills">
              <TechnicalSkills />
            </SectionTransition>
          )}

          {/* ABOUT & PROOF OF WORK */}
          {activeSection === 'about' && (
            <SectionTransition key="about">
              <OpenSourceAndAbout />
              <EducationAndHackathons />
            </SectionTransition>
          )}

          {/* CONTACT & FOOTER */}
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
        onNavigate={handleNavigateSection}
        onToggleTheme={toggleTheme}
      />

      {/* Modals & Command Palette */}
      <CommandMenu
        isOpen={commandMenuOpen}
        onClose={() => setCommandMenuOpen(false)}
        onSelectProject={handleSelectProject}
        onSelectResearch={handleSelectResearch}
        onOpenResume={() => setResumeModalOpen(true)}
        onSelectSection={handleNavigateSection}
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
