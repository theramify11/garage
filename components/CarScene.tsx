'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

/* ── Materials defined once outside the component ── */
const bodyMat   = new THREE.MeshStandardMaterial({ color: '#1c1c22', metalness: 0.85, roughness: 0.2 });
const glassMat  = new THREE.MeshStandardMaterial({ color: '#7aaccc', metalness: 0.1, roughness: 0.05, transparent: true, opacity: 0.65 });
const wheelMat  = new THREE.MeshStandardMaterial({ color: '#111111', metalness: 0.2, roughness: 0.8 });
const rimMat    = new THREE.MeshStandardMaterial({ color: '#cccccc', metalness: 0.95, roughness: 0.1 });
const lightMat  = new THREE.MeshStandardMaterial({ color: '#ffee88', emissive: '#ffcc44', emissiveIntensity: 1.5 });
const tailMat   = new THREE.MeshStandardMaterial({ color: '#cc2200', emissive: '#dd1100', emissiveIntensity: 1.2 });
const grillMat  = new THREE.MeshStandardMaterial({ color: '#1a1a1a', metalness: 0.7, roughness: 0.4 });
const rackMat   = new THREE.MeshStandardMaterial({ color: '#333333', metalness: 0.8, roughness: 0.4 });
const stepMat   = new THREE.MeshStandardMaterial({ color: '#1a1a1a', metalness: 0.5, roughness: 0.6 });
const doorMat   = new THREE.MeshStandardMaterial({ color: '#0d0d10', metalness: 0.4, roughness: 0.6 });

function SuvCarMesh({ rotation }: { rotation: number }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = rotation;
    }
  });

  const wheelPositions = useMemo<[number, number, number][]>(() => [
    [1.25, -0.02, 1.04],
    [1.25, -0.02, -1.04],
    [-1.25, -0.02, 1.04],
    [-1.25, -0.02, -1.04],
  ], []);

  const crossbarX = useMemo(() => [-0.7, 0, 0.7], []);

  return (
    <group ref={groupRef} position={[0, -0.3, 0]}>
      {/* Main body */}
      <mesh material={bodyMat} position={[0, 0.28, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.2, 0.65, 1.95]} />
      </mesh>
      {/* Cabin */}
      <mesh material={bodyMat} position={[0.05, 0.82, 0]} castShadow>
        <boxGeometry args={[2.5, 0.78, 1.82]} />
      </mesh>
      {/* Roof */}
      <mesh material={bodyMat} position={[0, 1.25, 0]} castShadow>
        <boxGeometry args={[2.3, 0.08, 1.72]} />
      </mesh>
      {/* Hood slope */}
      <mesh material={bodyMat} position={[1.55, 0.6, 0]} rotation={[0, 0, -0.35]} castShadow>
        <boxGeometry args={[0.85, 0.08, 1.9]} />
      </mesh>
      {/* Rear slope */}
      <mesh material={bodyMat} position={[-1.45, 0.7, 0]} rotation={[0, 0, 0.22]} castShadow>
        <boxGeometry args={[0.55, 0.08, 1.88]} />
      </mesh>
      {/* Windscreen */}
      <mesh material={glassMat} position={[0.85, 0.9, 0]} rotation={[0, 0, -0.5]}>
        <boxGeometry args={[0.72, 0.06, 1.6]} />
      </mesh>
      {/* Rear window */}
      <mesh material={glassMat} position={[-1.05, 0.88, 0]} rotation={[0, 0, 0.38]}>
        <boxGeometry args={[0.55, 0.05, 1.55]} />
      </mesh>
      {/* Side windows */}
      <mesh material={glassMat} position={[0.12, 0.92, 0.96]}>
        <boxGeometry args={[1.55, 0.42, 0.04]} />
      </mesh>
      <mesh material={glassMat} position={[0.12, 0.92, -0.96]}>
        <boxGeometry args={[1.55, 0.42, 0.04]} />
      </mesh>
      {/* Front bumper */}
      <mesh material={grillMat} position={[2.12, 0.18, 0]} castShadow>
        <boxGeometry args={[0.18, 0.38, 1.75]} />
      </mesh>
      {/* Grill */}
      <mesh material={grillMat} position={[2.1, 0.38, 0]}>
        <boxGeometry args={[0.15, 0.22, 1.3]} />
      </mesh>
      {/* Rear bumper */}
      <mesh material={grillMat} position={[-2.12, 0.18, 0]} castShadow>
        <boxGeometry args={[0.18, 0.38, 1.78]} />
      </mesh>
      {/* Headlights */}
      <mesh material={lightMat} position={[2.06, 0.46, 0.72]}>
        <boxGeometry args={[0.08, 0.14, 0.36]} />
      </mesh>
      <mesh material={lightMat} position={[2.06, 0.46, -0.72]}>
        <boxGeometry args={[0.08, 0.14, 0.36]} />
      </mesh>
      {/* Tail lights */}
      <mesh material={tailMat} position={[-2.06, 0.45, 0.72]}>
        <boxGeometry args={[0.08, 0.18, 0.38]} />
      </mesh>
      <mesh material={tailMat} position={[-2.06, 0.45, -0.72]}>
        <boxGeometry args={[0.08, 0.18, 0.38]} />
      </mesh>
      {/* Door lines */}
      <mesh material={doorMat} position={[0.28, 0.32, 0.98]}>
        <boxGeometry args={[0.02, 0.6, 0.01]} />
      </mesh>
      <mesh material={doorMat} position={[-0.58, 0.32, 0.98]}>
        <boxGeometry args={[0.02, 0.6, 0.01]} />
      </mesh>
      {/* Wheels */}
      {wheelPositions.map((pos, i) => (
        <group key={i} position={pos} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={wheelMat} castShadow>
            <torusGeometry args={[0.36, 0.14, 12, 28]} />
          </mesh>
          <mesh material={rimMat}>
            <cylinderGeometry args={[0.22, 0.22, 0.14, 16]} />
          </mesh>
          {[0, Math.PI / 3, -Math.PI / 3, Math.PI / 1.5].map((r, j) => (
            <mesh key={j} material={rimMat} rotation={[0, 0, r]}>
              <boxGeometry args={[0.42, 0.04, 0.04]} />
            </mesh>
          ))}
        </group>
      ))}
      {/* Roof rack rails */}
      <mesh material={rackMat} position={[0, 1.3, 0.76]}>
        <boxGeometry args={[2.0, 0.04, 0.05]} />
      </mesh>
      <mesh material={rackMat} position={[0, 1.3, -0.76]}>
        <boxGeometry args={[2.0, 0.04, 0.05]} />
      </mesh>
      {/* Crossbars */}
      {crossbarX.map((x) => (
        <mesh key={x} material={rackMat} position={[x, 1.31, 0]}>
          <boxGeometry args={[0.04, 0.04, 1.55]} />
        </mesh>
      ))}
      {/* Running boards */}
      <mesh material={stepMat} position={[0, -0.06, 1.0]}>
        <boxGeometry args={[2.2, 0.08, 0.18]} />
      </mesh>
      <mesh material={stepMat} position={[0, -0.06, -1.0]}>
        <boxGeometry args={[2.2, 0.08, 0.18]} />
      </mesh>
    </group>
  );
}

function Scene({ scrollY }: { scrollY: number }) {
  const rotation = (scrollY / 700) * Math.PI * 2;

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 8, 5]} intensity={2.0} castShadow />
      <directionalLight position={[-5, 4, -4]} intensity={0.7} color="#b0ccff" />
      <pointLight position={[0, 4, 3]} intensity={1.0} color="#fff8ee" />
      <pointLight position={[0, 2, -4]} intensity={0.6} color="#ff8833" />

      <Float speed={1.2} rotationIntensity={0.03} floatIntensity={0.25}>
        <SuvCarMesh rotation={rotation} />
      </Float>

      <ContactShadows
        position={[0, -0.65, 0]}
        opacity={0.4}
        scale={9}
        blur={2}
        far={4}
      />
    </>
  );
}

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
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      <Scene scrollY={scrollY} />
    </Canvas>
  );
}
