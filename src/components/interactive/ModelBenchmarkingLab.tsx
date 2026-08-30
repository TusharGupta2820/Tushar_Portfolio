import React, { useState } from 'react';
import { Cpu, Play, Zap, HardDrive, Gauge, CheckCircle2 } from 'lucide-react';
import { soundFx } from '../../utils/audio';
import { FadeUp } from '../ui/Animations';

type ModelKey = 'deepseek-8b' | 'llama-8b' | 'mistral-7b' | 'yolov8x';
type PrecisionKey = 'fp32' | 'fp16' | 'int8' | 'int4';
type HardwareKey = 'cpu' | 'apple-metal' | 'cuda';

interface ModelMeta {
  name: string;
  params: string;
  baseVramFp32: number; // GB
  baseSpeed: number; // tok/s on CUDA
}

const MODELS: Record<ModelKey, ModelMeta> = {
  'deepseek-8b': { name: 'DeepSeek-R1-Distill-8B', params: '8.03 Billion', baseVramFp32: 16.2, baseSpeed: 28 },
  'llama-8b': { name: 'Llama-3.1-8B-Instruct', params: '8.02 Billion', baseVramFp32: 16.0, baseSpeed: 30 },
  'mistral-7b': { name: 'Mistral-7B-v0.3', params: '7.24 Billion', baseVramFp32: 14.5, baseSpeed: 32 },
  'yolov8x': { name: 'YOLOv8x (Vision Tensor)', params: '68.2 Million', baseVramFp32: 3.2, baseSpeed: 65 },
};

const PRECISION_FACTORS: Record<PrecisionKey, { vramMultiplier: number; speedMultiplier: number; label: string; reduction: string }> = {
  fp32: { vramMultiplier: 1.0, speedMultiplier: 0.55, label: 'FP32 (Single Precision)', reduction: '0% (Baseline)' },
  fp16: { vramMultiplier: 0.5, speedMultiplier: 1.0, label: 'FP16 (Half Precision)', reduction: '50% Memory Saved' },
  int8: { vramMultiplier: 0.28, speedMultiplier: 1.35, label: 'INT8 (8-Bit Quantized)', reduction: '72% Memory Saved' },
  int4: { vramMultiplier: 0.16, speedMultiplier: 1.75, label: 'INT4 (GGUF Q4_K_M)', reduction: '84% Memory Saved' },
};

const HARDWARE_FACTORS: Record<HardwareKey, { speedMult: number; label: string; ttft: number }> = {
  'cpu': { speedMult: 0.35, label: 'Consumer CPU (AVX2)', ttft: 220 },
  'apple-metal': { speedMult: 0.85, label: 'Apple Silicon (Metal)', ttft: 65 },
  'cuda': { speedMult: 1.35, label: 'NVIDIA RTX (CUDA Tensor Cores)', ttft: 35 },
};

export const ModelBenchmarkingLab: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<ModelKey>('deepseek-8b');
  const [precision, setPrecision] = useState<PrecisionKey>('int4');
  const [hardware, setHardware] = useState<HardwareKey>('cuda');
  const contextTokens = 2048;

  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [streamedTokens, setStreamedTokens] = useState<string>('');
  const [tokenCounter, setTokenCounter] = useState<number>(0);

  const model = MODELS[selectedModel];
  const prec = PRECISION_FACTORS[precision];
  const hw = HARDWARE_FACTORS[hardware];

  // Calculations
  const calculatedVram = (model.baseVramFp32 * prec.vramMultiplier + (contextTokens / 8192) * 0.4).toFixed(1);
  const calculatedThroughput = (model.baseSpeed * prec.speedMultiplier * hw.speedMult).toFixed(1);
  const calculatedTtft = Math.round(hw.ttft * (precision === 'fp32' ? 1.4 : 1.0));

  const handleSimulateInference = () => {
    if (isSimulating) return;
    soundFx.playBlip(900);
    setIsSimulating(true);
    setStreamedTokens('');
    setTokenCounter(0);

    const sampleResponse = `[OLLAMA_LOCAL_INFERENCE] Initializing ${model.name} (${prec.label}) on ${hw.label}... KV-cache allocated (${calculatedVram} GB). Prompt tokens analyzed. Executing layer-wise tensor projections with localized weight quantization. Latency stable at ${calculatedTtft}ms TTFT. Zero cloud roundtrips required. Complete local privacy preserved.`;
    const words = sampleResponse.split(' ');
    let currentIdx = 0;

    const interval = setInterval(() => {
      if (currentIdx < words.length) {
        soundFx.playClick(600 + currentIdx * 15, 0.01);
        setStreamedTokens((prev) => (prev ? prev + ' ' + words[currentIdx] : words[currentIdx]));
        setTokenCounter((prev) => prev + 1);
        currentIdx++;
      } else {
        clearInterval(interval);
        setIsSimulating(false);
      }
    }, 60);
  };

  return (
    <FadeUp>
      <div className="w-full rounded-3xl border border-white/10 bg-[#090b14] p-6 sm:p-10 shadow-2xl relative overflow-hidden font-mono">
        {/* Subtle Glow Backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-white/10 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-brand-electric font-bold tracking-wider">
              <Cpu className="w-4 h-4 text-violet-400" />
              <span>INTERACTIVE MODEL BENCHMARKING LAB</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Local Quantization & Compute Latency Simulator
            </h3>
          </div>

          <button
            onClick={handleSimulateInference}
            disabled={isSimulating}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-bold text-xs shadow-lg shadow-violet-600/30 transition-all hover:scale-105 active:scale-95 disabled:opacity-50 self-start lg:self-auto"
          >
            <Play className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
            <span>{isSimulating ? 'STREAMING TENSORS...' : 'BENCHMARK INFERENCE'}</span>
          </button>
        </div>

        {/* Controls and Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          {/* Controls */}
          <div className="lg:col-span-6 space-y-5">
            {/* Model Selection */}
            <div className="space-y-2">
              <label className="text-[10px] text-editorial-dim uppercase tracking-wider block">
                1. SELECT BASE ARCHITECTURE
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(MODELS) as ModelKey[]).map((k) => (
                  <button
                    key={k}
                    onClick={() => {
                      soundFx.playClick(600);
                      setSelectedModel(k);
                    }}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedModel === k
                        ? 'bg-violet-600/20 border-violet-500 text-white shadow-md'
                        : 'bg-white/[0.02] border-white/5 text-editorial-muted hover:border-white/15'
                    }`}
                  >
                    <div className="font-bold text-xs text-white">{MODELS[k].name.split('-')[0]}</div>
                    <div className="text-[10px] text-editorial-dim">{MODELS[k].params}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Precision Quantization */}
            <div className="space-y-2">
              <label className="text-[10px] text-editorial-dim uppercase tracking-wider block">
                2. QUANTIZATION STRATEGY
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                {(Object.keys(PRECISION_FACTORS) as PrecisionKey[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => {
                      soundFx.playClick(700);
                      setPrecision(p);
                    }}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      precision === p
                        ? 'bg-brand-blue/20 border-brand-electric text-white font-bold'
                        : 'bg-white/[0.02] border-white/5 text-editorial-muted hover:border-white/15'
                    }`}
                  >
                    <span className="uppercase block font-bold text-xs">{p}</span>
                    <span className="text-[9px] text-editorial-dim block">{p === 'int4' ? 'Q4_K_M' : p.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Hardware Accelerator Target */}
            <div className="space-y-2">
              <label className="text-[10px] text-editorial-dim uppercase tracking-wider block">
                3. EXECUTION HARDWARE ACCELERATOR
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {(Object.keys(HARDWARE_FACTORS) as HardwareKey[]).map((h) => (
                  <button
                    key={h}
                    onClick={() => {
                      soundFx.playClick(800);
                      setHardware(h);
                    }}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      hardware === h
                        ? 'bg-emerald-600/20 border-emerald-400 text-white font-bold'
                        : 'bg-white/[0.02] border-white/5 text-editorial-muted hover:border-white/15'
                    }`}
                  >
                    <span className="capitalize block font-bold text-xs">
                      {h === 'cuda' ? 'CUDA RTX' : h === 'apple-metal' ? 'Metal M-Series' : 'AVX2 CPU'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Real-time Telemetry Calculations */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            {/* Memory & Efficiency Readout */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                <span className="text-editorial-dim">ACTIVE MODEL METRIC MATRIX</span>
                <span className="text-emerald-400 font-bold text-[11px]">{prec.reduction}</span>
              </div>

              {/* Memory Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-editorial-muted flex items-center gap-1.5">
                    <HardDrive className="w-3.5 h-3.5 text-brand-electric" /> ESTIMATED VRAM FOOTPRINT
                  </span>
                  <span className="text-white font-bold">{calculatedVram} GB</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand-electric to-emerald-400 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((parseFloat(calculatedVram) / 16) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Throughput & TTFT Metrics */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <span className="text-[10px] text-editorial-dim flex items-center gap-1">
                  <Gauge className="w-3.5 h-3.5 text-cyan-400" /> THROUGHPUT
                </span>
                <div className="text-base font-bold text-cyan-300">{calculatedThroughput} tok/s</div>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                <span className="text-[10px] text-editorial-dim flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-400" /> TTFT LATENCY
                </span>
                <div className="text-base font-bold text-amber-300">{calculatedTtft} ms</div>
              </div>
            </div>

            {/* Streaming Output Visualizer */}
            <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 flex flex-col justify-between min-h-[140px] text-xs font-mono">
              <div className="space-y-1">
                <div className="text-[10px] text-editorial-dim flex items-center justify-between pb-1 border-b border-white/5">
                  <span>INFERENCE STREAM TERMINAL</span>
                  {tokenCounter > 0 && <span className="text-emerald-400 font-bold">{tokenCounter} tokens</span>}
                </div>
                <p className="text-editorial-text text-[11px] leading-relaxed pt-1">
                  {streamedTokens || (
                    <span className="text-editorial-dim italic">
                      Click "BENCHMARK INFERENCE" above to simulate token generation pipeline...
                    </span>
                  )}
                </p>
              </div>

              <div className="pt-2 text-[10px] text-editorial-dim flex items-center justify-between border-t border-white/5 mt-2">
                <span className="text-brand-electric flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> EDGE-FIRST PIPELINE
                </span>
                <span>ZERO GPU CLOUD DEPENDENCY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeUp>
  );
};
