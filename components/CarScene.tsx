'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

/* ────────────────────────────────────────────────────────────────
   SUV Car Mesh — built entirely from Three.js geometry
   Represents a premium SUV (Fortuner/Prado silhouette)
──────────────────────────────────────────────────────────────── */
function SuvCarMesh({ rotation }: { rotation: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotation;
    }
  });

  // Materials
  const bodyMat = new THREE.MeshPhysicalMaterial({
    color: '#1a1a1e',
    metalness: 0.9,
    roughness: 0.15,
    reflectivity: 1,
    clearcoat: 1,
    clearcoatRoughness: 0.05,
  });
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: '#8ab4c9',
    metalness: 0.1,
    roughness: 0.05,
    transmission: 0.6,
    transparent: true,
    opacity: 0.7,
  });
  const wheelMat = new THREE.MeshPhysicalMaterial({
    color: '#111111',
    metalness: 0.3,
    roughness: 0.7,
  });
  const rimMat = new THREE.MeshPhysicalMaterial({
    color: '#c8c8c8',
    metalness: 0.95,
    roughness: 0.1,
  });
  const lightMat = new THREE.MeshStandardMaterial({
    color: '#ffdd88',
    emissive: '#ffcc44',
    emissiveIntensity: 1.2,
  });
  const grillMat = new THREE.MeshPhysicalMaterial({
    color: '#222222',
    metalness: 0.8,
    roughness: 0.3,
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0]}>
      {/* ── Main body lower ── */}
      <mesh material={bodyMat} position={[0, 0.28, 0]} castShadow>
        <boxGeometry args={[4.2, 0.65, 1.95]} />
      </mesh>

      {/* ── Cabin / roofline ── */}
      <mesh material={bodyMat} position={[0.05, 0.82, 0]} castShadow>
        <boxGeometry args={[2.5, 0.78, 1.82]} />
      </mesh>

      {/* ── Roof ── */}
      <mesh material={bodyMat} position={[0, 1.25, 0]} castShadow>
        <boxGeometry args={[2.3, 0.08, 1.72]} />
      </mesh>

      {/* ── Front hood slope ── */}
      <mesh material={bodyMat} position={[1.55, 0.6, 0]} rotation={[0, 0, -0.35]} castShadow>
        <boxGeometry args={[0.85, 0.08, 1.9]} />
      </mesh>

      {/* ── Rear slope ── */}
      <mesh material={bodyMat} position={[-1.45, 0.7, 0]} rotation={[0, 0, 0.22]} castShadow>
        <boxGeometry args={[0.55, 0.08, 1.88]} />
      </mesh>

      {/* ── Windscreen ── */}
      <mesh material={glassMat} position={[0.85, 0.9, 0]} rotation={[0, 0, -0.5]} castShadow>
        <boxGeometry args={[0.72, 0.06, 1.6]} />
      </mesh>

      {/* ── Rear window ── */}
      <mesh material={glassMat} position={[-1.05, 0.88, 0]} rotation={[0, 0, 0.38]} castShadow>
        <boxGeometry args={[0.55, 0.05, 1.55]} />
      </mesh>

      {/* ── Side windows (left) ── */}
      <mesh material={glassMat} position={[0.12, 0.92, 0.96]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1.55, 0.42, 0.04]} />
      </mesh>
      {/* ── Side windows (right) ── */}
      <mesh material={glassMat} position={[0.12, 0.92, -0.96]} rotation={[0, 0, 0]}>
        <boxGeometry args={[1.55, 0.42, 0.04]} />
      </mesh>

      {/* ── Front bumper ── */}
      <mesh material={grillMat} position={[2.12, 0.18, 0]} castShadow>
        <boxGeometry args={[0.18, 0.38, 1.75]} />
      </mesh>

      {/* ── Front grill ── */}
      <mesh material={grillMat} position={[2.1, 0.38, 0]} castShadow>
        <boxGeometry args={[0.15, 0.22, 1.3]} />
      </mesh>

      {/* ── Rear bumper ── */}
      <mesh material={grillMat} position={[-2.12, 0.18, 0]} castShadow>
        <boxGeometry args={[0.18, 0.38, 1.78]} />
      </mesh>

      {/* ── Headlights (left pair) ── */}
      <mesh material={lightMat} position={[2.06, 0.46, 0.72]}>
        <boxGeometry args={[0.08, 0.14, 0.36]} />
      </mesh>
      <mesh material={lightMat} position={[2.06, 0.46, -0.72]}>
        <boxGeometry args={[0.08, 0.14, 0.36]} />
      </mesh>

      {/* ── Tail lights ── */}
      <mesh material={new THREE.MeshStandardMaterial({ color: '#cc2200', emissive: '#ee1100', emissiveIntensity: 1.0 })} position={[-2.06, 0.45, 0.72]}>
        <boxGeometry args={[0.08, 0.18, 0.38]} />
      </mesh>
      <mesh material={new THREE.MeshStandardMaterial({ color: '#cc2200', emissive: '#ee1100', emissiveIntensity: 1.0 })} position={[-2.06, 0.45, -0.72]}>
        <boxGeometry args={[0.08, 0.18, 0.38]} />
      </mesh>

      {/* ── Door lines (thin extruded strips) ── */}
      <mesh material={new THREE.MeshPhysicalMaterial({ color: '#0d0d10', metalness: 0.5, roughness: 0.5 })} position={[0.28, 0.32, 0.98]}>
        <boxGeometry args={[0.02, 0.6, 0.01]} />
      </mesh>
      <mesh material={new THREE.MeshPhysicalMaterial({ color: '#0d0d10', metalness: 0.5, roughness: 0.5 })} position={[-0.58, 0.32, 0.98]}>
        <boxGeometry args={[0.02, 0.6, 0.01]} />
      </mesh>

      {/* ── Wheels (4) ── */}
      {([
        [1.25, -0.02, 1.04],
        [1.25, -0.02, -1.04],
        [-1.25, -0.02, 1.04],
        [-1.25, -0.02, -1.04],
      ] as [number, number, number][]).map((pos, i) => (
        <group key={i} position={pos} rotation={[Math.PI / 2, 0, 0]}>
          {/* Tyre */}
          <mesh material={wheelMat} castShadow>
            <torusGeometry args={[0.36, 0.14, 16, 32]} />
          </mesh>
          {/* Rim centre disk */}
          <mesh material={rimMat}>
            <cylinderGeometry args={[0.24, 0.24, 0.16, 20]} />
          </mesh>
          {/* Spoke 1 */}
          <mesh material={rimMat} rotation={[0, 0, 0]}>
            <boxGeometry args={[0.44, 0.04, 0.04]} />
          </mesh>
          {/* Spoke 2 */}
          <mesh material={rimMat} rotation={[0, 0, Math.PI / 3]}>
            <boxGeometry args={[0.44, 0.04, 0.04]} />
          </mesh>
          {/* Spoke 3 */}
          <mesh material={rimMat} rotation={[0, 0, -Math.PI / 3]}>
            <boxGeometry args={[0.44, 0.04, 0.04]} />
          </mesh>
          {/* Spoke 4 */}
          <mesh material={rimMat} rotation={[0, 0, Math.PI / 1.5]}>
            <boxGeometry args={[0.44, 0.04, 0.04]} />
          </mesh>
        </group>
      ))}

      {/* ── Roof rack (SUV style) ── */}
      <mesh material={new THREE.MeshPhysicalMaterial({ color: '#333', metalness: 0.8, roughness: 0.4 })} position={[0, 1.3, 0.76]}>
        <boxGeometry args={[2.0, 0.04, 0.05]} />
      </mesh>
      <mesh material={new THREE.MeshPhysicalMaterial({ color: '#333', metalness: 0.8, roughness: 0.4 })} position={[0, 1.3, -0.76]}>
        <boxGeometry args={[2.0, 0.04, 0.05]} />
      </mesh>
      {/* Crossbars */}
      {[-0.7, 0, 0.7].map((x) => (
        <mesh key={x} material={new THREE.MeshPhysicalMaterial({ color: '#555', metalness: 0.7, roughness: 0.4 })} position={[x, 1.31, 0]}>
          <boxGeometry args={[0.04, 0.04, 1.55]} />
        </mesh>
      ))}

      {/* ── Side step / running board ── */}
      <mesh material={new THREE.MeshPhysicalMaterial({ color: '#1a1a1a', metalness: 0.6, roughness: 0.5 })} position={[0, -0.06, 1.0]}>
        <boxGeometry args={[2.2, 0.08, 0.18]} />
      </mesh>
      <mesh material={new THREE.MeshPhysicalMaterial({ color: '#1a1a1a', metalness: 0.6, roughness: 0.5 })} position={[0, -0.06, -1.0]}>
        <boxGeometry args={[2.2, 0.08, 0.18]} />
      </mesh>
    </group>
  );
}

/* ── Scene wrapper with scroll-driven rotation ── */
function Scene({ scrollY }: { scrollY: number }) {
  // Map scrollY (px) → full 360° across viewport height
  const rotation = (scrollY / 700) * Math.PI * 2;

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={1.8} castShadow shadow-mapSize={[2048, 2048]} />
      <directionalLight position={[-5, 4, -5]} intensity={0.6} color="#a0c0ff" />
      <pointLight position={[0, 4, 3]} intensity={0.8} color="#fff8ee" />
      <pointLight position={[0, 2, -4]} intensity={0.5} color="#ff8833" />
      <Environment preset="city" />

      <Float speed={1.4} rotationIntensity={0.04} floatIntensity={0.3}>
        <SuvCarMesh rotation={rotation} />
      </Float>

      <ContactShadows
        position={[0, -0.62, 0]}
        opacity={0.45}
        scale={10}
        blur={2.5}
        far={4}
      />
    </>
  );
}

/* ── Exported component ── */
export default function CarScene() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 1.2, 6.5], fov: 42 }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <Scene scrollY={scrollY} />
    </Canvas>
  );
}
