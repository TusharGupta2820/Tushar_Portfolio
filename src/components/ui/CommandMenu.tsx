import React, { useState, useEffect } from 'react';
import { Search, X, FolderGit2, FlaskConical, Code, Send, FileText, ArrowRight } from 'lucide-react';
import { PROJECTS, RESEARCH_TOPICS } from '../../data/portfolioData';
import { soundFx } from '../../utils/audio';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
  onSelectResearch: (topicId: string) => void;
  onOpenResume: () => void;
  onSelectSection?: (sectionId: string) => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({
  isOpen,
  onClose,
  onSelectProject,
  onSelectResearch,
  onOpenResume,
  onSelectSection,
}) => {
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        soundFx.playBlip(800);
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredResearch = RESEARCH_TOPICS.filter(
    (r) =>
      r.title.toLowerCase().includes(query.toLowerCase()) ||
      r.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleNav = (sectionId: string) => {
    soundFx.playClick(600);
    onClose();
    if (onSelectSection) {
      onSelectSection(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-in fade-in duration-150">
      <div className="w-full max-w-2xl bg-[#0d0f18] border border-white/15 rounded-2xl shadow-2xl overflow-hidden font-mono flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 bg-[#080a11]">
          <Search className="w-4 h-4 text-brand-electric mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, research notes, systems, skills, or experience..."
            className="w-full bg-transparent text-sm text-white placeholder:text-editorial-dim focus:outline-none font-sans"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-editorial-dim hover:text-white mr-1">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs text-editorial-muted hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-4 space-y-6 flex-1 text-xs">
          {/* Quick Actions */}
          <div>
            <div className="text-[10px] text-editorial-dim uppercase tracking-wider mb-2">QUICK ACTIONS</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <button
                onClick={() => {
                  soundFx.playBlip(750);
                  onClose();
                  onOpenResume();
                }}
                className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-brand-blue/15 hover:border-brand-blue/30 border border-white/5 text-left transition-colors flex items-center gap-2 group"
              >
                <FileText className="w-3.5 h-3.5 text-brand-electric group-hover:scale-110 transition-transform" />
                <span className="text-white">View Resume</span>
              </button>

              <button
                onClick={() => handleNav('systems')}
                className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-brand-blue/15 hover:border-brand-blue/30 border border-white/5 text-left transition-colors flex items-center gap-2 group"
              >
                <Code className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span className="text-white">Systems Lab</span>
              </button>

              <button
                onClick={() => handleNav('contact')}
                className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-brand-blue/15 hover:border-brand-blue/30 border border-white/5 text-left transition-colors flex items-center gap-2 group"
              >
                <Send className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-white">Contact Tushar</span>
              </button>
            </div>
          </div>

          {/* Projects Category */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="text-[10px] text-editorial-dim uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FolderGit2 className="w-3 h-3 text-brand-electric" />
                <span>PROJECTS ({filteredProjects.length})</span>
              </div>
              <div className="space-y-1.5">
                {filteredProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      soundFx.playBlip(900);
                      onClose();
                      onSelectProject(project.id);
                    }}
                    className="w-full p-2.5 rounded-lg bg-white/[0.02] hover:bg-brand-blue/10 border border-white/5 hover:border-brand-blue/30 text-left transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-bold text-white group-hover:text-brand-electric flex items-center gap-2">
                        <span className="text-editorial-dim text-[10px]">{project.number}</span>
                        <span>{project.title}</span>
                      </div>
                      <div className="text-[10px] text-editorial-muted font-sans mt-0.5">
                        {project.category} · {project.technologies.slice(0, 3).join(', ')}
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-editorial-dim group-hover:text-brand-electric group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Research Notes Category */}
          {filteredResearch.length > 0 && (
            <div>
              <div className="text-[10px] text-editorial-dim uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FlaskConical className="w-3 h-3 text-violet-400" />
                <span>RESEARCH NOTES ({filteredResearch.length})</span>
              </div>
              <div className="space-y-1.5">
                {filteredResearch.map((res) => (
                  <button
                    key={res.id}
                    onClick={() => {
                      soundFx.playBlip(900);
                      onClose();
                      onSelectResearch(res.id);
                    }}
                    className="w-full p-2.5 rounded-lg bg-white/[0.02] hover:bg-violet-500/10 border border-white/5 hover:border-violet-500/30 text-left transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-bold text-white group-hover:text-violet-300">
                        {res.title}
                      </div>
                      <div className="text-[10px] text-editorial-dim font-sans line-clamp-1 mt-0.5">
                        {res.question}
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-editorial-dim group-hover:text-violet-300 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation Tip */}
        <div className="px-4 py-2.5 border-t border-white/10 bg-[#080a11] text-[10px] text-editorial-dim flex items-center justify-between">
          <span>Use <strong>ESC</strong> to dismiss · Press <strong>ENTER</strong> to open</span>
          <span className="text-brand-electric">TUSHAR GUPTA // PORTFOLIO SEARCH</span>
        </div>
      </div>
    </div>
  );
};
