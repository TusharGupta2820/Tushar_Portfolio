import React, { useState, useEffect } from 'react';
import { Plane, Radio, Eye, Battery, Compass, Cpu, Layers, Target } from 'lucide-react';
import { soundFx } from '../../utils/audio';

interface DroneData {
  id: string;
  name: string;
  callsign: string;
  status: 'ACTIVE_PATROL' | 'PERIMETER_SURVEILLANCE' | 'MISSION_HOVER';
  lat: number;
  lng: number;
  alt: number; // meters
  battery: number; // percentage
  speed: number; // km/h
  heading: number; // degrees
  aiDetection: {
    object: string;
    confidence: number;
    bbox: [number, number, number, number]; // [top, left, width, height] percentage
  };
  streamLatency: string;
}

type SensorFilter = 'RGB' | 'THERMAL' | 'LIDAR' | 'CANNY';

const DRONES: DroneData[] = [
  {
    id: 'drone-01',
    name: 'Drone 01',
    callsign: 'RECON_ALPHA',
    status: 'ACTIVE_PATROL',
    lat: 19.0760,
    lng: 72.8777,
    alt: 124.5,
    battery: 88,
    speed: 34.2,
    heading: 142,
    aiDetection: {
      object: 'COMMERCIAL_VEHICLE',
      confidence: 98.4,
      bbox: [32, 28, 38, 36],
    },
    streamLatency: '24ms (WebRTC)'
  },
  {
    id: 'drone-02',
    name: 'Drone 02',
    callsign: 'PERIMETER_BETA',
    status: 'PERIMETER_SURVEILLANCE',
    lat: 19.0812,
    lng: 72.8845,
    alt: 180.2,
    battery: 76,
    speed: 48.0,
    heading: 215,
    aiDetection: {
      object: 'CONTAINER_STORAGE',
      confidence: 96.1,
      bbox: [40, 52, 32, 30],
    },
    streamLatency: '28ms (AWS Kinesis)'
  },
  {
    id: 'drone-03',
    name: 'Drone 03',
    callsign: 'SURVEILLANCE_GAMMA',
    status: 'MISSION_HOVER',
    lat: 19.0715,
    lng: 72.8690,
    alt: 95.0,
    battery: 92,
    speed: 12.4,
    heading: 88,
    aiDetection: {
      object: 'PERIMETER_ANOMALY',
      confidence: 94.7,
      bbox: [25, 45, 42, 40],
    },
    streamLatency: '19ms (WebRTC)'
  }
];

export const DroneTacticalMap: React.FC = () => {
  const [selectedDroneId, setSelectedDroneId] = useState<string>('drone-01');
  const [viewMode, setViewMode] = useState<'HUD_VISION' | 'TACTICAL_GRID'>('HUD_VISION');
  const [sensorFilter, setSensorFilter] = useState<SensorFilter>('RGB');
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [tick, setTick] = useState<number>(0);

  const selectedDrone = DRONES.find((d) => d.id === selectedDroneId) || DRONES[0];

  // Dynamic telemetry tick simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTick((t) => (t + 1) % 1000);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const handleManualScan = () => {
    soundFx.playBlip(950);
    setIsScanning(true);
    setTimeout(() => {
      soundFx.playClick(800, 0.05);
      setIsScanning(false);
    }, 800);
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#0a0c13] overflow-hidden shadow-2xl font-mono">
      {/* Header Aerospace Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0d0f1a]/90 text-xs">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-brand-electric font-semibold">
            <Radio className="w-3.5 h-3.5 animate-pulse text-brand-blue" />
            AEROSPACE OPS // FLEET COMMAND
          </span>
          <span className="text-editorial-dim">|</span>
          <span className="text-editorial-muted hidden sm:inline">COORDINATION: WEBRTC / AWS KINESIS</span>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 mt-2 sm:mt-0 bg-black/40 p-1 rounded-md border border-white/5">
          <button
            onClick={() => {
              soundFx.playClick(700);
              setViewMode('HUD_VISION');
            }}
            className={`px-2.5 py-1 rounded text-[11px] transition-colors flex items-center gap-1.5 ${
              viewMode === 'HUD_VISION'
                ? 'bg-brand-blue text-white font-medium shadow'
                : 'text-editorial-muted hover:text-white'
            }`}
          >
            <Eye className="w-3 h-3" />
            LIVE VISION HUD
          </button>
          <button
            onClick={() => {
              soundFx.playClick(700);
              setViewMode('TACTICAL_GRID');
            }}
            className={`px-2.5 py-1 rounded text-[11px] transition-colors flex items-center gap-1.5 ${
              viewMode === 'TACTICAL_GRID'
                ? 'bg-brand-blue text-white font-medium shadow'
                : 'text-editorial-muted hover:text-white'
            }`}
          >
            <Layers className="w-3 h-3" />
            TACTICAL GRID
          </button>
        </div>
      </div>

      {/* Drone Selection Tabs & Sensor Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between border-b border-white/10 bg-[#08090e] text-xs">
        <div className="grid grid-cols-3 flex-1">
          {DRONES.map((drone) => {
            const isSelected = drone.id === selectedDroneId;
            return (
              <button
                key={drone.id}
                onClick={() => {
                  soundFx.playBlip(900);
                  setSelectedDroneId(drone.id);
                }}
                className={`p-3 text-left transition-all border-r border-white/10 flex flex-col gap-0.5 relative ${
                  isSelected
                    ? 'bg-brand-blue/15 text-white'
                    : 'text-editorial-dim hover:text-editorial-muted hover:bg-white/[0.02]'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-blue shadow-[0_0_8px_#3b82f6]" />
                )}
                <div className="flex items-center justify-between">
                  <span className="font-bold tracking-wider text-[11px]">{drone.name}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <span className="text-[10px] text-brand-electric">{drone.callsign}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Sensor Filter Chips */}
        {viewMode === 'HUD_VISION' && (
          <div className="flex items-center gap-1 p-2 bg-black/30 border-t sm:border-t-0 sm:border-l border-white/10 text-[10px]">
            <span className="text-editorial-dim px-1 hidden md:inline">SENSOR:</span>
            {(['RGB', 'THERMAL', 'LIDAR', 'CANNY'] as SensorFilter[]).map((f) => (
              <button
                key={f}
                onClick={() => {
                  soundFx.playClick(750);
                  setSensorFilter(f);
                }}
                className={`px-2 py-1 rounded transition-all ${
                  sensorFilter === f
                    ? 'bg-brand-blue text-white font-bold'
                    : 'text-editorial-muted hover:text-white hover:bg-white/5'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Tactical Screen */}
      <div className={`relative min-h-[340px] sm:min-h-[380px] p-4 flex flex-col justify-between overflow-hidden transition-colors duration-300 ${
        sensorFilter === 'THERMAL' ? 'bg-[#150a1d]' : sensorFilter === 'LIDAR' ? 'bg-[#04171a]' : sensorFilter === 'CANNY' ? 'bg-[#0d0d0d]' : 'bg-[#05060a]'
      }`}>
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />

        {viewMode === 'HUD_VISION' ? (
          /* Live AI Computer Vision HUD Overlay */
          <div className={`relative w-full h-full flex-1 flex flex-col justify-between rounded-lg border p-4 overflow-hidden transition-all duration-300 ${
            sensorFilter === 'THERMAL'
              ? 'border-purple-500/40 bg-purple-950/40 text-purple-200'
              : sensorFilter === 'LIDAR'
              ? 'border-cyan-500/40 bg-cyan-950/40 text-cyan-200'
              : sensorFilter === 'CANNY'
              ? 'border-emerald-500/40 bg-black/90 text-emerald-200'
              : 'border-brand-blue/30 bg-black/70 text-brand-electric/90'
          }`}>
            {/* Top HUD metrics */}
            <div className="flex items-center justify-between text-[11px] border-b border-white/10 pb-2 z-10">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 bg-red-500/20 text-red-400 border border-red-500/40 rounded text-[9px] font-bold tracking-widest animate-pulse">
                  REC ● RTSP://FEED
                </span>
                <span>LATENCY: {selectedDrone.streamLatency}</span>
                <span className="text-[10px] text-editorial-dim">[{sensorFilter} · FRAME #{tick}]</span>
              </div>

              <button
                onClick={handleManualScan}
                disabled={isScanning}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-brand-blue/20 hover:bg-brand-blue text-brand-electric hover:text-white border border-brand-blue/40 text-[10px] font-bold transition-all"
              >
                <Target className={`w-3 h-3 ${isScanning ? 'animate-spin' : ''}`} />
                <span>{isScanning ? 'ACQUIRING...' : 'SCAN TARGET'}</span>
              </button>
            </div>

            {/* Simulated AI Object Detection Bounding Box */}
            <div className="relative flex-1 my-3 flex items-center justify-center">
              {/* Synthetic Camera Crosshairs */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-32 h-32 border border-dashed border-brand-electric rounded-full animate-spin" style={{ animationDuration: '24s' }} />
                <div className="absolute w-4 h-4 border-t-2 border-l-2 border-brand-electric" />
                <div className="absolute w-4 h-4 border-b-2 border-r-2 border-brand-electric" />
              </div>

              {/* Dynamic Bounding Box */}
              <div
                className={`relative border-2 rounded transition-all duration-700 ${
                  isScanning ? 'border-amber-400 scale-105 shadow-[0_0_25px_rgba(251,191,36,0.5)]' : 'border-brand-electric bg-brand-blue/10 shadow-[0_0_15px_rgba(96,165,250,0.3)]'
                }`}
                style={{
                  width: `${selectedDrone.aiDetection.bbox[2]}%`,
                  height: `${selectedDrone.aiDetection.bbox[3]}%`,
                  minHeight: '140px',
                  minWidth: '180px'
                }}
              >
                {/* Bbox Corner Accents */}
                <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-white" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-white" />
                <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-white" />
                <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-white" />

                {/* AI Target Tag */}
                <div className="absolute -top-6 left-0 bg-brand-blue text-white text-[9px] px-2 py-0.5 font-bold tracking-wider rounded-t flex items-center gap-1 shadow">
                  <Cpu className="w-3 h-3" />
                  {selectedDrone.aiDetection.object} [{selectedDrone.aiDetection.confidence}%]
                </div>

                <div className="absolute bottom-2 right-2 text-[8px] bg-black/60 px-1.5 py-0.5 rounded">
                  {isScanning ? 'LOCKING TENSOR COORD...' : 'TARGET_LOCK :: BBOX_TRACK'}
                </div>
              </div>
            </div>

            {/* Bottom HUD bar */}
            <div className="flex items-center justify-between text-[10px] text-editorial-dim pt-2 border-t border-white/10 z-10">
              <span className="text-emerald-400">STATUS: {selectedDrone.status}</span>
              <span>GEO: {selectedDrone.lat.toFixed(4)}° N, {selectedDrone.lng.toFixed(4)}° E</span>
              <span className="hidden sm:inline">TERRAFORM_IAC: PROVISIONED</span>
            </div>
          </div>
        ) : (
          /* Tactical Coordinate Map Screen */
          <div className="relative w-full h-full flex-1 flex flex-col justify-between rounded-lg border border-white/10 bg-[#080a11] p-4">
            <div className="flex items-center justify-between text-xs text-brand-electric">
              <span className="flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-brand-blue" />
                TACTICAL RADAR & AIRSPACE GRID
              </span>
              <span className="text-editorial-dim text-[10px]">RADAR RANGE: 5.0 KM</span>
            </div>

            {/* Visual Radar Screen */}
            <div className="relative flex-1 my-4 flex items-center justify-center">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full border border-brand-blue/20 bg-brand-blue/[0.02] flex items-center justify-center">
                {/* Concentric rings */}
                <div className="absolute inset-4 rounded-full border border-dashed border-white/10" />
                <div className="absolute inset-12 rounded-full border border-white/5" />
                
                {/* Crosshairs */}
                <div className="absolute inset-x-0 top-1/2 h-[1px] bg-white/10" />
                <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/10" />

                {/* Radar Sweep Line */}
                <div 
                  className="absolute top-1/2 left-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent to-brand-electric origin-left animate-spin"
                  style={{ animationDuration: '4s' }}
                />

                {/* All 3 Drone Nodes Plotted */}
                {DRONES.map((drone, idx) => {
                  const offsets = [
                    { x: -35, y: -20 },
                    { x: 45, y: -30 },
                    { x: -10, y: 40 },
                  ][idx];
                  const isCurrent = drone.id === selectedDroneId;

                  return (
                    <div
                      key={drone.id}
                      style={{
                        transform: `translate(${offsets.x}px, ${offsets.y}px)`
                      }}
                      className="absolute flex flex-col items-center cursor-pointer group"
                      onClick={() => {
                        soundFx.playClick(650);
                        setSelectedDroneId(drone.id);
                      }}
                    >
                      <div className={`relative p-1 rounded-full border ${isCurrent ? 'border-brand-electric bg-brand-blue text-white shadow-[0_0_12px_#3b82f6]' : 'border-white/30 bg-black/80 text-editorial-muted'}`}>
                        <Plane className="w-3.5 h-3.5" style={{ transform: `rotate(${drone.heading}deg)` }} />
                        {isCurrent && <span className="absolute -inset-1 rounded-full border border-brand-electric animate-ping opacity-75" />}
                      </div>
                      <span className="text-[8px] bg-black/80 px-1 py-0.2 rounded mt-1 font-bold text-white border border-white/10">
                        {drone.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="text-[10px] text-editorial-muted text-center">
              Click any drone node on radar or tabs above to introspect flight path and telemetry.
            </div>
          </div>
        )}

        {/* Real-time Telemetry Data Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 pt-3 border-t border-white/10 text-xs">
          <div className="p-2 rounded bg-white/[0.02] border border-white/5 flex items-center justify-between">
            <span className="text-editorial-dim text-[10px]">ALTITUDE</span>
            <span className="font-bold text-white text-[11px]">{selectedDrone.alt} m</span>
          </div>
          <div className="p-2 rounded bg-white/[0.02] border border-white/5 flex items-center justify-between">
            <span className="text-editorial-dim text-[10px] flex items-center gap-1">
              <Battery className="w-3 h-3 text-emerald-400" /> BATT
            </span>
            <span className="font-bold text-emerald-400 text-[11px]">{selectedDrone.battery}%</span>
          </div>
          <div className="p-2 rounded bg-white/[0.02] border border-white/5 flex items-center justify-between">
            <span className="text-editorial-dim text-[10px]">SPEED</span>
            <span className="font-bold text-white text-[11px]">{selectedDrone.speed} km/h</span>
          </div>
          <div className="p-2 rounded bg-white/[0.02] border border-white/5 flex items-center justify-between">
            <span className="text-editorial-dim text-[10px] flex items-center gap-1">
              <Compass className="w-3 h-3 text-brand-electric" /> HEADING
            </span>
            <span className="font-bold text-brand-electric text-[11px]">{selectedDrone.heading}°</span>
          </div>
        </div>
      </div>
    </div>
  );
};
