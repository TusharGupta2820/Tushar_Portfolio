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
    { id: 'all',        label: 'All',                icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'languages',  label: 'Languages',           icon: <Code className="w-3.5 h-3.5" /> },
    { id: 'frameworks', label: 'Frameworks & ML',     icon: <Cpu className="w-3.5 h-3.5" /> },
    { id: 'tools',      label: 'Tools & Cloud',       icon: <Wrench className="w-3.5 h-3.5" /> },
    { id: 'concepts',   label: 'Architecture',        icon: <Terminal className="w-3.5 h-3.5" /> },
    { id: 'databases',  label: 'Databases & Infra',   icon: <Database className="w-3.5 h-3.5" /> },
    { id: 'aiTools',    label: 'AI tooling',          icon: <Sparkles className="w-3.5 h-3.5" /> },
  ];

  const SkillCard: React.FC<{ name: string; desc: string; level?: string; accent?: boolean }> = ({
    name, desc, level, accent,
  }) => (
    <FloatCard className="h-full">
      <div className="p-4 rounded-xl bg-white/[0.025] border border-white/6 hover:border-white/14 transition-colors space-y-2 group h-full">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/5 group-hover:scale-110 transition-transform">
              <SkillLogo name={name} className="w-4.5 h-4.5" />
            </div>
            <span className={`font-medium text-sm ${accent ? 'text-brand-electric' : 'text-white'}`}>
              {name}
            </span>
          </div>
          {level && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-editorial-dim border border-white/5 shrink-0">
              {level}
            </span>
          )}
        </div>
        <p className="text-xs text-editorial-dim leading-relaxed">{desc}</p>
      </div>
    </FloatCard>
  );

  const SkillGroup: React.FC<{
    title: string;
    icon: React.ReactNode;
    items: { name: string; desc: string; level?: string }[];
    accent?: boolean;
  }> = ({ title, icon, items, accent }) => (
    <FadeUp className="space-y-3">
      <p className="text-xs text-editorial-dim flex items-center gap-1.5">
        {icon} {title}
      </p>
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3" staggerDelay={0.04}>
        {items
          .filter(s =>
            s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            s.desc.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map(item => (
            <StaggerItem key={item.name}>
              <SkillCard
                name={item.name}
                desc={item.desc}
                level={(item as { level?: string }).level}
                accent={accent}
              />
            </StaggerItem>
          ))}
      </StaggerContainer>
    </FadeUp>
  );

  return (
    <section id="skills" className="relative py-24 sm:py-32 border-t border-white/8 w-full">
      <div className="w-full max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-14 xl:px-18 2xl:px-24 space-y-12">

        {/* Header */}
        <SlideIn from="left" className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <p className="text-xs text-editorial-dim uppercase tracking-widest font-mono flex items-center gap-2">
              <Code className="w-3.5 h-3.5" /> Skills
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Technical skills</h2>
            <p className="text-base text-editorial-muted leading-relaxed">
              A structured map across languages, frameworks, cloud, and ML runtimes.
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-72 text-sm">
            <Search className="w-3.5 h-3.5 text-editorial-dim absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search e.g. FastAPI…"
              className="w-full bg-white/[0.025] border border-white/8 rounded-lg pl-9 pr-3.5 py-2 text-white placeholder:text-editorial-dim focus:outline-none focus:border-brand-electric/50 transition-colors"
            />
          </div>
        </SlideIn>

        {/* Filter tabs */}
        <FadeUp delay={0.04}>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none flex-wrap">
            {categories.map(cat => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => { soundFx.playClick(650); setActiveCategory(cat.id); }}
                  className={`px-3.5 py-1.5 rounded-lg border text-sm transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    active
                      ? 'bg-brand-blue/90 text-white border-transparent font-medium shadow-md shadow-brand-blue/15'
                      : 'border-white/8 text-editorial-dim hover:text-white hover:border-white/15 bg-white/[0.02]'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </FadeUp>

        {/* Skill groups */}
        <div className="space-y-10">
          {(activeCategory === 'all' || activeCategory === 'languages') && (
            <SkillGroup title="Languages" icon={<Code className="w-3.5 h-3.5" />} items={TECHNICAL_SKILLS.languages} />
          )}
          {(activeCategory === 'all' || activeCategory === 'frameworks') && (
            <SkillGroup title="Frameworks & machine learning" icon={<Cpu className="w-3.5 h-3.5" />} items={TECHNICAL_SKILLS.frameworksAndLibraries} />
          )}
          {(activeCategory === 'all' || activeCategory === 'tools') && (
            <SkillGroup title="Cloud platforms, DevOps & tools" icon={<Wrench className="w-3.5 h-3.5" />} items={TECHNICAL_SKILLS.toolsAndPlatforms} />
          )}
          {(activeCategory === 'all' || activeCategory === 'concepts') && (
            <SkillGroup title="Architecture & concepts" icon={<Terminal className="w-3.5 h-3.5" />} items={TECHNICAL_SKILLS.conceptsAndPractices} />
          )}
          {(activeCategory === 'all' || activeCategory === 'databases') && (
            <SkillGroup title="Databases & infrastructure" icon={<Database className="w-3.5 h-3.5" />} items={TECHNICAL_SKILLS.databasesAndInfrastructure} />
          )}
          {(activeCategory === 'all' || activeCategory === 'aiTools') && (
            <SkillGroup title="AI runtimes & open models" icon={<Sparkles className="w-3.5 h-3.5" />} items={TECHNICAL_SKILLS.aiTools} accent />
          )}

          {/* Soft skills — clean chip row */}
          <FadeUp>
            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/6 space-y-3">
              <p className="text-xs text-editorial-dim flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" /> Collaboration & soft skills
              </p>
              <StaggerContainer className="flex flex-wrap gap-2" staggerDelay={0.03}>
                {TECHNICAL_SKILLS.softSkills.map(skill => (
                  <StaggerItem key={skill}>
                    <span className="text-xs px-3 py-1.5 rounded-lg bg-emerald-500/8 text-emerald-300/80 border border-emerald-500/15">
                      {skill}
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
