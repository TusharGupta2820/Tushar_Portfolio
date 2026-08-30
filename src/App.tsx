import { useState, useEffect } from 'react';
import { LoadingSequence } from './components/ui/LoadingSequence';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navigation } from './components/ui/Navigation';
import { CommandMenu } from './components/ui/CommandMenu';
import { ResumeModal } from './components/ui/ResumeModal';
import { CaseStudyModal } from './components/modals/CaseStudyModal';
import { ResearchNoteModal } from './components/modals/ResearchNoteModal';
import { InteractiveTerminal } from './components/ui/InteractiveTerminal';
import { ScrollProgressBar, Scroll3DReveal } from './components/ui/Animations';

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

  // ScrollSpy to update active navigation item on scroll
  useEffect(() => {
    const sectionIds = ['overview', 'work', 'systems', 'research', 'experience', 'skills', 'about', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    if (sectionId === 'overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        const yOffset = -70;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-editorial-text selection:bg-brand-blue selection:text-white relative w-full overflow-x-hidden transition-colors duration-300">
      {/* 3D Scroll Progress Line */}
      <ScrollProgressBar />

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

      {/* Continuous Single-Page Flow with 3D Scroll Reveals */}
      <main className="relative z-10 w-full pt-6 space-y-12">
        {/* OVERVIEW / HERO */}
        <section id="overview" className="w-full">
          <Hero
            onOpenResumeModal={() => setResumeModalOpen(true)}
            onNavigate={handleNavigateSection}
          />
        </section>

        {/* WORK */}
        <section id="work" className="w-full">
          <Scroll3DReveal>
            <SelectedWork onSelectProject={handleSelectProject} />
          </Scroll3DReveal>
        </section>

        {/* SYSTEMS LAB */}
        <section id="systems" className="py-24 sm:py-32 border-t border-white/8 w-full">
          <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 space-y-8">
            <Scroll3DReveal>
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
            </Scroll3DReveal>

            <Scroll3DReveal delay={0.1}>
              <SystemsLab3D />
            </Scroll3DReveal>
          </div>
        </section>

        {/* RESEARCH */}
        <section id="research" className="w-full">
          <Scroll3DReveal>
            <ResearchExplorations onSelectResearch={handleSelectResearch} />
          </Scroll3DReveal>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="w-full">
          <Scroll3DReveal>
            <Experience />
          </Scroll3DReveal>
        </section>

        {/* SKILLS */}
        <section id="skills" className="w-full">
          <Scroll3DReveal>
            <TechnicalSkills />
          </Scroll3DReveal>
        </section>

        {/* ABOUT & PROOF OF WORK */}
        <section id="about" className="w-full">
          <Scroll3DReveal>
            <OpenSourceAndAbout />
          </Scroll3DReveal>
          <Scroll3DReveal delay={0.1}>
            <EducationAndHackathons />
          </Scroll3DReveal>
        </section>

        {/* CONTACT & FOOTER */}
        <section id="contact" className="w-full">
          <Scroll3DReveal>
            <ContactAndFooter />
          </Scroll3DReveal>
        </section>
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
