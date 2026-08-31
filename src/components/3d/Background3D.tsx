import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Deterministic pseudo-random helper for constellation coordinates
function pseudoRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function generateConstellationData(count: number) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  const colorBlue = new THREE.Color('#3b82f6');
  const colorCyan = new THREE.Color('#38bdf8');
  const colorViolet = new THREE.Color('#8b5cf6');

  const nodeCoords: THREE.Vector3[] = [];
  let seed = 12345;

  for (let i = 0; i < count; i++) {
    const x = (pseudoRandom(seed++) - 0.5) * 22;
    const y = (pseudoRandom(seed++) - 0.5) * 16;
    const z = (pseudoRandom(seed++) - 0.5) * 12;

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    nodeCoords.push(new THREE.Vector3(x, y, z));

    const rVal = pseudoRandom(seed++);
    const randColor = rVal > 0.6 ? colorBlue : rVal > 0.3 ? colorCyan : colorViolet;
    colors[i * 3] = randColor.r;
    colors[i * 3 + 1] = randColor.g;
    colors[i * 3 + 2] = randColor.b;
  }

  // Connect nearby nodes with lines
  const lineCoords: number[] = [];
  const maxDist = 3.5;
  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      const dist = nodeCoords[i].distanceTo(nodeCoords[j]);
      if (dist < maxDist) {
        lineCoords.push(nodeCoords[i].x, nodeCoords[i].y, nodeCoords[i].z);
        lineCoords.push(nodeCoords[j].x, nodeCoords[j].y, nodeCoords[j].z);
      }
    }
  }

  return { positions, colors, linePositions: new Float32Array(lineCoords) };
}

function StarfieldAndNodes() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouseRef = useRef<[number, number]>([0, 0]);

  // Generate constellation nodes and particles
  const { positions, colors, linePositions } = useMemo(() => generateConstellationData(120), []);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const { pointer } = state;
    
    // Smooth camera / group tilt based on mouse position
    mouseRef.current[0] = THREE.MathUtils.damp(mouseRef.current[0], pointer.x * 0.4, 3, delta);
    mouseRef.current[1] = THREE.MathUtils.damp(mouseRef.current[1], pointer.y * 0.4, 3, delta);

    pointsRef.current.rotation.y = mouseRef.current[0] * 0.5 + state.clock.elapsedTime * 0.02;
    pointsRef.current.rotation.x = -mouseRef.current[1] * 0.5 + state.clock.elapsedTime * 0.01;

    if (linesRef.current) {
      linesRef.current.rotation.y = pointsRef.current.rotation.y;
      linesRef.current.rotation.x = pointsRef.current.rotation.x;
    }
  });

  return (
    <group>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.065}
          vertexColors
          transparent
          opacity={0.65}
          sizeAttenuation
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.12} />
      </lineSegments>
    </group>
  );
}

export const Background3D: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-70">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ antialias: false, powerPreference: 'low-power', alpha: true }}
        style={{ pointerEvents: 'none' }}
      >
        <ambientLight intensity={0.5} />
        <StarfieldAndNodes />
      </Canvas>
    </div>
  );
};

export default Background3D;
