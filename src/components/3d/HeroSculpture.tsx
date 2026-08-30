import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, TorusKnot } from '@react-three/drei';
import * as THREE from 'three';
import { Sparkles, Layers, RefreshCw } from 'lucide-react';
import { soundFx } from '../../utils/audio';

type GeometryMode = 'polytope' | 'lattice' | 'torus' | 'constellation';

interface NeuralPolytopeProps {
  mouse: React.MutableRefObject<[number, number]>;
  mode: GeometryMode;
  speed: number;
}

// Inner Neural Polytope & Dynamic Tensor Network
function NeuralPolytope({ mouse, mode, speed }: NeuralPolytopeProps) {
  const meshRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Mesh>(null);
  const ringRef2 = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate constellation nodes (synaptic coordinates)
  const [particlePositions, particleColors] = useMemo(() => {
    const count = mode === 'constellation' ? 320 : 180;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const color1 = new THREE.Color('#3b82f6'); // Cobalt
    const color2 = new THREE.Color('#8b5cf6'); // Violet
    const color3 = new THREE.Color('#38bdf8'); // Electric cyan

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = (mode === 'constellation' ? 1.8 : 2.4) + Math.random() * 1.6;

      const sinPhi = Math.sin(phi);
      positions[i * 3] = r * sinPhi * Math.cos(theta);
      positions[i * 3 + 1] = r * sinPhi * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const mixed = Math.random() > 0.6 ? color1 : Math.random() > 0.3 ? color3 : color2;
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }
    return [positions, colors];
  }, [mode]);

  useFrame((_, delta) => {
    if (!meshRef.current) return;

    // Smooth cursor tracking with dampening
    const targetX = mouse.current[0] * 0.45;
    const targetY = mouse.current[1] * 0.45;

    meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05 + delta * 0.15 * speed;
    meshRef.current.rotation.x += (-targetY - meshRef.current.rotation.x) * 0.05 + delta * 0.08 * speed;

    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.35 * speed;
      coreRef.current.rotation.z += delta * 0.25 * speed;
    }
    if (ringRef1.current) {
      ringRef1.current.rotation.x += delta * 0.25 * speed;
      ringRef1.current.rotation.y += delta * 0.18 * speed;
    }
    if (ringRef2.current) {
      ringRef2.current.rotation.y -= delta * 0.22 * speed;
      ringRef2.current.rotation.z += delta * 0.14 * speed;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.08 * speed;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Central Interactive Geometric Core */}
      {mode === 'polytope' && (
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.4, 1]} />
          <meshStandardMaterial
            wireframe
            color="#2563eb"
            emissive="#1d4ed8"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      )}

      {mode === 'lattice' && (
        <mesh ref={coreRef}>
          <octahedronGeometry args={[1.6, 2]} />
          <meshStandardMaterial
            wireframe
            color="#06b6d4"
            emissive="#0891b2"
            emissiveIntensity={0.7}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      )}

      {mode === 'torus' && (
        <TorusKnot args={[1.1, 0.28, 100, 16]} ref={coreRef}>
          <meshStandardMaterial
            wireframe
            color="#8b5cf6"
            emissive="#6d28d9"
            emissiveIntensity={0.6}
            roughness={0.3}
          />
        </TorusKnot>
      )}

      {/* Inner Glowing Synapse Nucleus */}
      <Sphere args={[0.55, 32, 32]}>
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.65} />
      </Sphere>

      {/* Primary Orbital Data Ring */}
      <mesh ref={ringRef1}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#6d28d9" emissiveIntensity={0.5} />
      </mesh>

      {/* Secondary Orbital Coordinate Ring */}
      <mesh ref={ringRef2} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[3.1, 0.015, 16, 120]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={0.4} />
      </mesh>

      {/* Outer Constellation Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[particleColors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={mode === 'constellation' ? 0.075 : 0.055}
          vertexColors
          transparent
          opacity={0.85}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

export const HeroSculpture: React.FC = () => {
  const mouse = useRef<[number, number]>([0, 0]);
  const [mode, setMode] = useState<GeometryMode>('polytope');
  const [speed, setSpeed] = useState<number>(1);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((clientY - rect.top) / rect.height) * 2 - 1);
    mouse.current = [x, y];
  };

  const handleSwitchMode = (newMode: GeometryMode) => {
    soundFx.playBlip(750);
    setMode(newMode);
  };

  const toggleSpeed = () => {
    soundFx.playClick(800);
    setSpeed((prev) => (prev === 1 ? 2 : prev === 2 ? 0.5 : 1));
  };

  return (
    <div className="flex flex-col items-center w-full space-y-3">
      <div
        onPointerMove={handlePointerMove}
        className="relative w-full h-[360px] sm:h-[440px] lg:h-[500px] flex items-center justify-center select-none rounded-3xl border border-white/5 bg-transparent overflow-hidden"
      >
        {/* Background Technical Grid Glow */}
        <div className="absolute inset-0 bg-radial-gradient from-brand-blue/10 via-transparent to-transparent pointer-events-none" />

        {/* Subtle Coordinate HUD markers */}
        <div className="absolute top-4 left-4 font-mono text-[10px] text-editorial-dim tracking-wider flex flex-col gap-0.5 pointer-events-none">
          <span className="flex items-center gap-1.5 font-bold text-brand-electric">
            <Sparkles className="w-3 h-3" />
            SYS.GEOM // {mode.toUpperCase()}
          </span>
          <span>LAT: 19.0760° N · LON: 72.8777° E</span>
        </div>

        <div className="absolute bottom-4 right-4 font-mono text-[10px] text-editorial-dim tracking-wider text-right pointer-events-none">
          <span className="text-brand-electric">TENSOR_LATTICE :: LIVE</span>
          <div className="flex items-center justify-end gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-electric animate-ping" />
            <span className="text-editorial-muted">60 FPS // THREE.JS</span>
          </div>
        </div>

        {/* Canvas Layer */}
        <Canvas
          camera={{ position: [0, 0, 7.2], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} color="#60a5fa" />
          <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#8b5cf6" />
          <pointLight position={[0, 0, 0]} intensity={1.5} color="#3b82f6" distance={6} />

          <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
            <NeuralPolytope mouse={mouse} mode={mode} speed={speed} />
          </Float>
        </Canvas>
      </div>

      {/* Interactive 3D Geometry Mode Controls */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 font-mono text-[11px]">
        <button
          onClick={() => handleSwitchMode('polytope')}
          className={`px-3 py-1 rounded-xl transition-all flex items-center gap-1.5 ${
            mode === 'polytope'
              ? 'bg-brand-blue text-white font-bold shadow-md shadow-brand-blue/30'
              : 'text-editorial-muted hover:text-white hover:bg-white/5'
          }`}
        >
          <Layers className="w-3 h-3" />
          <span>POLYTOPE</span>
        </button>

        <button
          onClick={() => handleSwitchMode('lattice')}
          className={`px-3 py-1 rounded-xl transition-all flex items-center gap-1.5 ${
            mode === 'lattice'
              ? 'bg-cyan-600 text-white font-bold shadow-md shadow-cyan-600/30'
              : 'text-editorial-muted hover:text-white hover:bg-white/5'
          }`}
        >
          <span>LATTICE</span>
        </button>

        <button
          onClick={() => handleSwitchMode('torus')}
          className={`px-3 py-1 rounded-xl transition-all flex items-center gap-1.5 ${
            mode === 'torus'
              ? 'bg-violet-600 text-white font-bold shadow-md shadow-violet-600/30'
              : 'text-editorial-muted hover:text-white hover:bg-white/5'
          }`}
        >
          <span>TORUS</span>
        </button>

        <button
          onClick={() => handleSwitchMode('constellation')}
          className={`px-3 py-1 rounded-xl transition-all flex items-center gap-1.5 ${
            mode === 'constellation'
              ? 'bg-emerald-600 text-white font-bold shadow-md shadow-emerald-600/30'
              : 'text-editorial-muted hover:text-white hover:bg-white/5'
          }`}
        >
          <span>SWARM</span>
        </button>

        <div className="h-4 w-[1px] bg-white/10 mx-1" />

        <button
          onClick={toggleSpeed}
          className="px-2.5 py-1 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-brand-electric font-bold transition-all flex items-center gap-1"
          title="Toggle Rotation Speed"
        >
          <RefreshCw className="w-2.5 h-2.5" />
          <span>{speed}x</span>
        </button>
      </div>
    </div>
  );
};
