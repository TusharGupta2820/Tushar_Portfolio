import React, { useState } from 'react';
import { SYSTEMS_ARCHITECTURE_LAYERS } from '../../data/portfolioData';
import type { SystemArchitectureLayer } from '../../data/portfolioData';
import { Layers, ArrowDown, Activity, Server, Cpu, Database, Cloud, Radio, Sparkles, Play } from 'lucide-react';
import { soundFx } from '../../utils/audio';
import { StaggerContainer, StaggerItem, FadeUp } from '../ui/Animations';

const LAYER_ICONS: Record<string, React.ReactNode> = {
  FRONTEND: <Layers className="w-4 h-4 text-brand-electric" />,
  'APPLICATION LAYER': <Server className="w-4 h-4 text-brand-blue" />,
  'REAL-TIME': <Radio className="w-4 h-4 text-cyan-400" />,
  'AI / ML': <Cpu className="w-4 h-4 text-violet-400" />,
  DATA: <Database className="w-4 h-4 text-emerald-400" />,
  INFRASTRUCTURE: <Cloud className="w-4 h-4 text-indigo-400" />,
  OBSERVABILITY: <Activity className="w-4 h-4 text-amber-400" />,
};

export const SystemsLab3D: React.FC = () => {
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(0);
  const [simulatingFlow, setSimulatingFlow] = useState<boolean>(false);
  const [flowStep, setFlowStep] = useState<number>(-1);

  const activeLayer: SystemArchitectureLayer = SYSTEMS_ARCHITECTURE_LAYERS[activeLayerIndex] || SYSTEMS_ARCHITECTURE_LAYERS[0];

  const handleSimulateFlow = () => {
    if (simulatingFlow) return;
    soundFx.playBlip(750);
    setSimulatingFlow(true);
    setFlowStep(0);

    const totalSteps = SYSTEMS_ARCHITECTURE_LAYERS.length;
    let current = 0;

    const interval = setInterval(() => {
      current++;
      if (current < totalSteps) {
        soundFx.playClick(500 + current * 60, 0.02);
        setFlowStep(current);
        setActiveLayerIndex(current);
      } else {
        clearInterval(interval);
        setSimulatingFlow(false);
        setFlowStep(-1);
      }
    }, 450);
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#08090f] p-6 sm:p-8 overflow-hidden shadow-2xl relative">
      {/* Background Subtle Tech Dots */}
      <div className="absolute inset-0 tech-dots opacity-25 pointer-events-none" />

      {/* Top Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/8 gap-4 relative z-10">
        <div>
          <div className="flex items-center gap-2 text-xs text-brand-electric mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-electric" />
            Interactive Systems Architecture
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-white">
            End-to-end system topologies
          </h3>
        </div>

        <button
          onClick={handleSimulateFlow}
          disabled={simulatingFlow}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-blue hover:bg-brand-cobalt text-white font-mono text-xs font-semibold shadow-lg shadow-brand-blue/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
        >
          <Play className={`w-3.5 h-3.5 ${simulatingFlow ? 'animate-spin' : ''}`} />
          {simulatingFlow ? `PROPAGATING LAYER 0${flowStep + 1}...` : 'SIMULATE REQUEST FLOW'}
        </button>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 relative z-10">
        {/* Left Column: Vertical Layer Topology */}
        <StaggerContainer className="lg:col-span-7 flex flex-col gap-2.5" staggerDelay={0.05}>
          {SYSTEMS_ARCHITECTURE_LAYERS.map((layer: SystemArchitectureLayer, idx: number) => {
            const isSelected = activeLayerIndex === idx;
            const isFlowing = flowStep === idx;
            const isConnected =
              activeLayer &&
              (activeLayer.connectedTo.includes(layer.name) ||
                layer.connectedTo.includes(activeLayer.name));

            return (
              <StaggerItem key={layer.layer} className="relative group">
                <button
                  onClick={() => {
                    soundFx.playClick(600 + idx * 40);
                    setActiveLayerIndex(idx);
                  }}
                  onMouseEnter={() => {
                    soundFx.playClick(700, 0.01);
                  }}
                  className={`w-full p-3.5 rounded-xl border transition-all text-left flex items-center justify-between ${
                    isSelected
                      ? 'bg-brand-blue/25 border-brand-electric shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                      : isFlowing
                      ? 'bg-brand-electric/30 border-brand-electric animate-pulse'
                      : isConnected
                      ? 'bg-brand-violet/20 border-brand-violet/50 text-white'
                      : 'bg-[#0d0f17] border-white/15 text-slate-100 hover:border-white/30 hover:bg-[#121522]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-white font-bold px-2 py-0.5 rounded bg-black/60 border border-white/15">
                      {layer.layer}
                    </span>
                    <div className="flex items-center gap-2">
                      {LAYER_ICONS[layer.name]}
                      <span className="font-mono font-bold text-xs sm:text-sm tracking-wide text-white">
                        {layer.name}
                      </span>
                    </div>
                  </div>

                  {/* Technology Tags Badges */}
                  <div className="flex items-center gap-1.5 flex-wrap justify-end">
                    {layer.tech.slice(0, 3).map((t: string) => (
                      <span
                        key={t}
                        className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-white/10 text-white border border-white/15"
                      >
                        {t}
                      </span>
                    ))}
                    {layer.tech.length > 3 && (
                      <span className="font-mono text-xs font-bold text-slate-200">
                        +{layer.tech.length - 3}
                      </span>
                    )}
                  </div>
                </button>

                {/* Connecting arrow line to next layer */}
                {idx < SYSTEMS_ARCHITECTURE_LAYERS.length - 1 && (
                  <div className="flex justify-center my-0.5 opacity-50">
                    <ArrowDown className="w-3.5 h-3.5 text-brand-electric" />
                  </div>
                )}
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Right Column: Layer Inspector & Active Telemetry */}
        <FadeUp delay={0.1} className="lg:col-span-5 flex flex-col justify-between rounded-xl border border-white/15 bg-[#0d0f18] p-5 font-mono shadow-xl">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-white/12 text-xs">
              <span className="text-brand-electric font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                LAYER INSPECTOR // {activeLayer.layer}
              </span>
              <span className="text-emerald-400 font-mono text-[10px] font-bold">STATUS: OPTIMIZED</span>
            </div>

            <div className="mt-4">
              <span className="text-xs text-slate-200 font-bold uppercase tracking-widest">LAYER NAME</span>
              <h4 className="text-lg font-bold text-white font-display mt-0.5">
                {activeLayer.name}
              </h4>
            </div>

            <div className="mt-4">
              <span className="text-xs text-slate-200 font-bold uppercase tracking-widest">ROLE & SPECIFICATION</span>
              <p className="text-xs text-slate-100 font-medium font-sans mt-1 leading-relaxed">
                {activeLayer.description}
              </p>
            </div>

            <div className="mt-4">
              <span className="text-xs text-slate-200 font-bold uppercase tracking-widest">COMPONENTS & STACK</span>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {activeLayer.tech.map((tech: string) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-1 rounded bg-brand-blue/20 text-sky-200 border border-brand-blue/40 font-mono font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <span className="text-xs text-slate-200 font-bold uppercase tracking-widest">TOPOLOGY CONNECTIONS</span>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {activeLayer.connectedTo.map((conn: string) => (
                  <span
                    key={conn}
                    className="text-xs px-2 py-0.5 rounded bg-white/10 text-white font-semibold border border-white/15 font-mono"
                  >
                    ⇄ {conn}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/12 text-xs text-slate-200 font-semibold flex items-center justify-between">
            <span>PIPELINE: ASYNC / REACTIVE</span>
            <span className="text-brand-electric font-bold">THROUGHPUT: ZERO BOTTLENECK</span>
          </div>
        </FadeUp>
      </div>
    </div>
  );
};
