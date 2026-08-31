import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, Maximize2, Minimize2, Sparkles, Send, Trash2 } from 'lucide-react';
import { soundFx } from '../../utils/audio';
import confetti from 'canvas-confetti';
import { PROJECTS, PERSONAL_INFO } from '../../data/portfolioData';

interface InteractiveTerminalProps {
  onSelectProject: (id: string) => void;
  onNavigate: (section: string) => void;
  onToggleTheme: () => void;
}

interface CommandLog {
  id: string;
  type: 'input' | 'output' | 'error' | 'success' | 'ai' | 'matrix';
  content: string | React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  onSelectProject,
  onNavigate,
  onToggleTheme,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [inputVal, setInputVal] = useState<string>('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [isInferring, setIsInferring] = useState<boolean>(false);

  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: 'init-1',
      type: 'output',
      content: (
        <div className="space-y-1 text-xs">
          <div className="text-brand-electric font-bold">
            TusharOS Interactive Neural Terminal v2.6.4 [x86_64-tcet-kernel]
          </div>
          <div className="text-editorial-dim">
            Type <span className="text-emerald-400 font-bold">'help'</span> for command roster or try <span className="text-amber-300 font-bold">'sudo hire'</span>, <span className="text-cyan-400 font-bold">'ai-infer &lt;prompt&gt;'</span>, <span className="text-violet-400 font-bold">'projects'</span>.
          </div>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [logs, isOpen]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    soundFx.playBlip(750);
    const newLogId = Date.now().toString();

    // Add input command to logs
    const newLogs: CommandLog[] = [
      ...logs,
      { id: `${newLogId}-in`, type: 'input', content: `$ ${trimmed}` },
    ];

    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const parts = trimmed.split(' ');
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1).join(' ');

    switch (cmd) {
      case 'help':
        newLogs.push({
          id: `${newLogId}-out`,
          type: 'output',
          content: (
            <div className="space-y-1 text-xs font-mono">
              <div className="text-brand-electric font-bold">AVAILABLE COMMANDS:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] pt-1">
                <div><span className="text-emerald-400 font-bold">help</span> — Display command manual</div>
                <div><span className="text-emerald-400 font-bold">projects</span> — List all 16 systems & case studies</div>
                <div><span className="text-emerald-400 font-bold">open &lt;num&gt;</span> — Launch project modal (e.g. 'open 1')</div>
                <div><span className="text-emerald-400 font-bold">skills</span> — Display technical capability taxonomy</div>
                <div><span className="text-emerald-400 font-bold">ai-infer &lt;msg&gt;</span> — Stream local LLM inference simulation</div>
                <div><span className="text-emerald-400 font-bold">drone-hud</span> — Inspect real-time aerospace telemetry</div>
                <div><span className="text-emerald-400 font-bold">sudo hire</span> — Initiate collaboration + confetti burst</div>
                <div><span className="text-emerald-400 font-bold">theme</span> — Toggle Light / Dark UI mode</div>
                <div><span className="text-emerald-400 font-bold">nav &lt;sec&gt;</span> — Jump to section (work, research, skills)</div>
                <div><span className="text-emerald-400 font-bold">clear</span> — Wipe terminal logs</div>
              </div>
            </div>
          ),
        });
        break;

      case 'projects':
      case 'work':
        newLogs.push({
          id: `${newLogId}-out`,
          type: 'output',
          content: (
            <div className="space-y-1.5 text-xs font-mono">
              <div className="text-brand-electric font-bold">16 VERIFIED SYSTEMS:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-[11px]">
                {PROJECTS.map((p, i) => (
                  <div key={p.id} className="flex items-center gap-1.5">
                    <span className="text-emerald-400 font-bold">[{i + 1}]</span>
                    <span className="text-white">{p.title}</span>
                    <span className="text-editorial-dim text-[10px]">({p.category})</span>
                  </div>
                ))}
              </div>
              <div className="text-[10px] text-editorial-dim pt-1">
                Type <span className="text-amber-300 font-bold">'open 1'</span> to inspect GyaanSetu AI or <span className="text-amber-300 font-bold">'open 2'</span> for DevOps-AI.
              </div>
            </div>
          ),
        });
        break;

      case 'open': {
        const num = parseInt(args, 10);
        if (!isNaN(num) && num >= 1 && num <= PROJECTS.length) {
          const proj = PROJECTS[num - 1];
          onSelectProject(proj.id);
          newLogs.push({
            id: `${newLogId}-out`,
            type: 'success',
            content: `Launching 9-step case study for [${proj.number}] ${proj.title}...`,
          });
        } else {
          newLogs.push({
            id: `${newLogId}-err`,
            type: 'error',
            content: `Invalid project index. Specify 1 to ${PROJECTS.length} (e.g. 'open 1').`,
          });
        }
        break;
      }

      case 'skills':
        newLogs.push({
          id: `${newLogId}-out`,
          type: 'output',
          content: (
            <div className="space-y-2 text-xs font-mono">
              <div className="text-brand-electric font-bold">TECHNICAL TAXONOMY:</div>
              <div className="text-[11px] space-y-1 text-editorial-text">
                <div><span className="text-emerald-400 font-bold">[LANGUAGES]</span> Python, TypeScript, JavaScript, C++, C, Java, SQL</div>
                <div><span className="text-cyan-400 font-bold">[AI & ML]</span> PyTorch, Ollama, YOLOv8, LangChain, OpenCV, Whisper, PaddleOCR</div>
                <div><span className="text-violet-400 font-bold">[WEB & CLOUD]</span> React, Next.js, FastAPI, Node.js, Docker, Redis, PostgreSQL</div>
                <div><span className="text-amber-400 font-bold">[ARCH]</span> Microservices, WebRTC, WebSocket Streams, RAG Vector Stores</div>
              </div>
            </div>
          ),
        });
        break;

      case 'sudo':
      case 'hire':
        if (trimmed.includes('hire') || cmd === 'hire') {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
          onNavigate('contact');
          newLogs.push({
            id: `${newLogId}-out`,
            type: 'success',
            content: (
              <div className="space-y-1">
                <div className="text-emerald-400 font-bold">🎉 PERMISSION GRANTED: ACCESS LEVEL ROOT</div>
                <div>Dispatching to contact terminal... Direct email: {PERSONAL_INFO.email}</div>
              </div>
            ),
          });
        } else {
          newLogs.push({
            id: `${newLogId}-err`,
            type: 'error',
            content: `User '${PERSONAL_INFO.name}' is in the sudoers file. Try 'sudo hire'.`,
          });
        }
        break;

      case 'theme':
        onToggleTheme();
        newLogs.push({
          id: `${newLogId}-out`,
          type: 'success',
          content: 'Theme mode toggled successfully.',
        });
        break;

      case 'nav':
        if (args) {
          onNavigate(args.toLowerCase());
          newLogs.push({
            id: `${newLogId}-out`,
            type: 'success',
            content: `Navigating to ${args.toUpperCase()} section...`,
          });
        } else {
          newLogs.push({
            id: `${newLogId}-err`,
            type: 'error',
            content: "Usage: nav <overview|work|research|systems|experience|skills|about|contact>",
          });
        }
        break;

      case 'drone-status':
      case 'drone-hud':
        newLogs.push({
          id: `${newLogId}-out`,
          type: 'output',
          content: (
            <div className="space-y-1 text-xs font-mono text-cyan-300">
              <div className="font-bold">AEROSPACE DRONE FLEET TELEMETRY:</div>
              <div>• DRONE-01 [SURVEILLANCE]: ALT 120m | BATTERY 84% | SPEED 14.2 m/s | YOLOv8: 4 TARGETS</div>
              <div>• DRONE-02 [TACTICAL]: ALT 85m | BATTERY 91% | SPEED 18.0 m/s | WEBRTC: 30 FPS OK</div>
              <div>• DRONE-03 [RECON]: ALT 140m | BATTERY 68% | SPEED 11.5 m/s | GEOFENCE: NORMAL</div>
            </div>
          ),
        });
        break;

      case 'ai-infer':
      case 'ask':
        if (!args) {
          newLogs.push({
            id: `${newLogId}-err`,
            type: 'error',
            content: "Usage: ai-infer <your prompt> (e.g. 'ai-infer how does local LLM quantization work?')",
          });
        } else {
          setIsInferring(true);
          newLogs.push({
            id: `${newLogId}-ai`,
            type: 'ai',
            content: (
              <div className="space-y-1 text-xs font-mono">
                <div className="text-violet-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  <span>LOCAL_MODEL_INFERENCE :: Llama-3.1-8B-Q4_K_M (Ollama Engine)</span>
                </div>
                <p className="text-editorial-text leading-relaxed font-sans">
                  "Synthesizing response for '{args}'... Local INT4 quantization maps weights to 4-bit discrete buckets, cutting memory from 16GB down to ~5.2GB with negligible perplexity shift, delivering 22 tokens/sec on local consumer hardware."
                </p>
                <div className="text-[10px] text-emerald-400">
                  TTFT: 48ms · Throughput: 24.1 tok/s · VRAM: 5.2GB · Compression: 67.5%
                </div>
              </div>
            ),
          });
          setTimeout(() => setIsInferring(false), 400);
        }
        break;

      case 'clear':
        setLogs([]);
        return;

      default:
        newLogs.push({
          id: `${newLogId}-err`,
          type: 'error',
          content: `Command not recognized: '${cmd}'. Type 'help' for the command directory.`,
        });
    }

    setLogs(newLogs);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIndex + 1 < history.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(history[history.length - 1 - nextIdx] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  return (
    <>
      {/* Floating Bottom-Right Terminal Launch Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => {
            soundFx.playBlip(800);
            setIsOpen(!isOpen);
          }}
          className="px-4 py-2.5 rounded-full bg-[#0d0f18] hover:bg-[#151928] text-white border border-brand-blue/30 shadow-2xl shadow-brand-blue/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 font-mono text-xs group"
          title="Open TusharOS Interactive Terminal"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <Terminal className="w-4 h-4 text-brand-electric group-hover:rotate-12 transition-transform" />
          <span className="font-bold tracking-wider hidden sm:inline text-brand-electric">
            {isOpen ? 'CLOSE TERMINAL' : '>_ TusharOS REPL'}
          </span>
        </button>
      </div>

      {/* Terminal Modal / Drawer */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 ${
            isExpanded
              ? 'inset-3 sm:inset-6 md:inset-10'
              : 'bottom-20 right-3 sm:right-6 w-[calc(100vw-24px)] sm:w-[540px] md:w-[620px] h-[480px] max-h-[75vh]'
          } rounded-3xl border border-brand-blue/30 bg-[#080a12]/95 backdrop-blur-xl shadow-2xl shadow-black/80 overflow-hidden font-mono flex flex-col`}
        >
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#05060a]/90 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={() => setIsOpen(false)} />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)} />
              </div>
              <span className="text-brand-electric font-bold tracking-wider text-[11px]">
                tushar@ai-systems:~ (bash)
              </span>
            </div>

            <div className="flex items-center gap-2 text-editorial-dim">
              <button
                onClick={() => setLogs([])}
                className="p-1 hover:text-white transition-colors"
                title="Clear Logs"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-1 hover:text-white transition-colors"
                title={isExpanded ? 'Minimize' : 'Maximize'}
              >
                {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:text-white transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Terminal Output Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs">
            {logs.map((log) => (
              <div
                key={log.id}
                className={`${
                  log.type === 'input'
                    ? 'text-brand-electric font-bold'
                    : log.type === 'error'
                    ? 'text-rose-400'
                    : log.type === 'success'
                    ? 'text-emerald-300'
                    : 'text-editorial-text'
                } leading-relaxed`}
              >
                {log.content}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Command Prompt Input Bar */}
          <div className="p-3 border-t border-white/10 bg-[#05060a]/90 flex items-center gap-2">
            <span className="text-emerald-400 font-bold text-xs">tushar@sys:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help', 'projects', 'sudo hire'..."
              className="flex-1 bg-transparent text-xs text-white placeholder:text-editorial-dim focus:outline-none font-mono"
            />
            <button
              onClick={() => executeCommand(inputVal)}
              disabled={isInferring || !inputVal.trim()}
              className="p-1.5 rounded-lg bg-brand-blue/20 hover:bg-brand-blue text-brand-electric hover:text-white transition-all disabled:opacity-30"
              title="Run Command"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
