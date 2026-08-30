import React, { useState } from 'react';
import { TECHNICAL_SKILLS } from '../../data/portfolioData';
import { Code, Terminal, Cpu, Database, Wrench, Sparkles, Search, Layers, HeartHandshake } from 'lucide-react';
import { SkillLogo } from '../ui/SkillLogo';
import { soundFx } from '../../utils/audio';
import { FadeUp, StaggerContainer, StaggerItem, SlideIn, FloatCard } from '../ui/Animations';

export const TechnicalSkills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'ALL DISCIPLINES', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'languages', label: 'LANGUAGES', icon: <Code className="w-3.5 h-3.5" /> },
    { id: 'frameworks', label: 'FRAMEWORKS & ML', icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'tools', label: 'TOOLS & CLOUD', icon: <Wrench className="w-3.5 h-3.5" /> },
    { id: 'concepts', label: 'CONCEPTS & ARCHITECTURE', icon: <Terminal className="w-3.5 h-3.5" /> },
    { id: 'databases', label: 'DATABASES & INFRA', icon: <Database className="w-3.5 h-3.5" /> },
    { id: 'aiTools', label: 'AI TOOLING & RUNTIMES', icon: <Sparkles className="w-3.5 h-3.5" /> },
  ];

  /** Reusable skill card component with 3D tilt */
  const SkillCard: React.FC<{ name: string; desc: string; level?: string; accent?: boolean }> = ({
    name,
    desc,
    level,
    accent,
  }) => (
    <FloatCard className="h-full">
      <div className="p-5 rounded-2xl bg-[#090b12] border border-white/5 hover:border-brand-blue/30 transition-colors space-y-2 group h-full">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/5 group-hover:scale-110 transition-transform">
              <SkillLogo name={name} className="w-5 h-5" />
            </div>
            <span className={`font-mono font-bold text-sm ${accent ? 'text-brand-electric' : 'text-white'}`}>
              {name}
            </span>
          </div>
          {level && (
            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-white/5 text-editorial-dim shrink-0">
              {level}
            </span>
          )}
        </div>
        <p className="text-xs text-editorial-muted font-sans leading-relaxed">{desc}</p>
      </div>
    </FloatCard>
  );

  /** Renders a category group with label + staggered grid */
  const SkillGroup: React.FC<{
    title: string;
    icon: React.ReactNode;
    items: { name: string; desc: string; level?: string }[];
    accent?: boolean;
  }> = ({ title, icon, items, accent }) => (
    <FadeUp className="space-y-4">
      <div className="font-mono text-xs text-brand-electric font-bold tracking-wider uppercase flex items-center gap-2">
        {icon} {title}
      </div>
      <StaggerContainer
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        staggerDelay={0.05}
      >
        {items
          .filter(
            (s) =>
              s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              s.desc.toLowerCase().includes(searchQuery.toLowerCase()),
          )
          .map((item) => (
            <StaggerItem key={item.name}>
              <SkillCard name={item.name} desc={item.desc} level={(item as { level?: string }).level} accent={accent} />
            </StaggerItem>
          ))}
      </StaggerContainer>
    </FadeUp>
  );

  return (
    <section id="skills" className="relative py-28 sm:py-36 border-t border-white/10 overflow-hidden w-full">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 space-y-16 relative z-10">

        {/* Section Header */}
        <SlideIn from="left" className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs text-brand-electric font-semibold tracking-wider">
              <Code className="w-4 h-4" />
              <span>TECHNICAL TAXONOMY // CAPABILITIES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
              TECHNICAL SKILLS
            </h2>

            <p className="text-base sm:text-lg text-editorial-muted font-sans font-light leading-relaxed">
              Structured technical map across foundational languages, deep learning runtimes, cloud infrastructure, and distributed architectures.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full lg:w-80 font-mono text-xs">
            <Search className="w-3.5 h-3.5 text-editorial-dim absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. FastAPI)..."
              className="w-full bg-[#0a0c14] border border-white/10 rounded-xl pl-10 pr-3.5 py-2.5 text-white placeholder:text-editorial-dim focus:outline-none focus:border-brand-electric/50"
            />
          </div>
        </SlideIn>

        {/* Category Tabs */}
        <FadeUp delay={0.05}>
          <div className="flex items-center gap-2 font-mono text-xs overflow-x-auto pb-2 -mx-2 px-2 scrollbar-none sm:flex-wrap">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    soundFx.playClick(650);
                    setActiveCategory(cat.id);
                  }}
                  className={`px-4 py-2.5 rounded-xl border transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                    isSelected
                      ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/20 font-bold'
                      : 'bg-white/[0.02] border-white/10 text-editorial-muted hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </FadeUp>

        {/* Skills Grid — each category group */}
        <div className="space-y-12">
          {(activeCategory === 'all' || activeCategory === 'languages') && (
            <SkillGroup
              title="PROGRAMMING LANGUAGES"
              icon={<Code className="w-3.5 h-3.5" />}
              items={TECHNICAL_SKILLS.languages}
            />
          )}

          {(activeCategory === 'all' || activeCategory === 'frameworks') && (
            <SkillGroup
              title="FRAMEWORKS, LIBRARIES & MACHINE LEARNING"
              icon={<Cpu className="w-3.5 h-3.5" />}
              items={TECHNICAL_SKILLS.frameworksAndLibraries}
            />
          )}

          {(activeCategory === 'all' || activeCategory === 'tools') && (
            <SkillGroup
              title="CLOUD PLATFORMS, DEVOPS & TOOLS"
              icon={<Wrench className="w-3.5 h-3.5" />}
              items={TECHNICAL_SKILLS.toolsAndPlatforms}
            />
          )}

          {(activeCategory === 'all' || activeCategory === 'concepts') && (
            <SkillGroup
              title="CORE CONCEPTS & ARCHITECTURAL PRACTICES"
              icon={<Terminal className="w-3.5 h-3.5" />}
              items={TECHNICAL_SKILLS.conceptsAndPractices}
            />
          )}

          {(activeCategory === 'all' || activeCategory === 'databases') && (
            <SkillGroup
              title="DATABASES & OBSERVABILITY INFRASTRUCTURE"
              icon={<Database className="w-3.5 h-3.5" />}
              items={TECHNICAL_SKILLS.databasesAndInfrastructure}
            />
          )}

          {(activeCategory === 'all' || activeCategory === 'aiTools') && (
            <SkillGroup
              title="AI RUNTIMES, OPEN MODELS & TOOLING"
              icon={<Sparkles className="w-3.5 h-3.5" />}
              items={TECHNICAL_SKILLS.aiTools}
              accent
            />
          )}

          {/* Soft Skills Strip */}
          <FadeUp>
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0d0f18] border border-white/10 space-y-3">
              <div className="font-mono text-xs text-emerald-400 font-bold tracking-wider uppercase flex items-center gap-2">
                <HeartHandshake className="w-4 h-4" /> CORE COLLABORATIVE STRENGTHS
              </div>
              <StaggerContainer className="flex flex-wrap gap-2.5" staggerDelay={0.04}>
                {TECHNICAL_SKILLS.softSkills.map((skill) => (
                  <StaggerItem key={skill}>
                    <span className="font-mono text-xs px-4 py-2 rounded-xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium">
                      ✓ {skill}
                    </span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};
