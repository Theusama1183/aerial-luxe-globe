import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  Float,
  Html,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

/* ---------- Realistic semi-truck ---------- */
function SemiTruck() {
  const ref = useRef<THREE.Group>(null!);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.y = Math.sin(t * 1.4) * 0.03;
  });

  return (
    <group ref={ref} position={[0, -0.35, 0]} rotation={[0, -0.5, 0]}>
      {/* trailer */}
      <mesh castShadow position={[-1.4, 0.55, 0]}>
        <boxGeometry args={[2.4, 1.1, 1.05]} />
        <meshStandardMaterial color="#fafafa" roughness={0.35} metalness={0.4} />
      </mesh>
      {/* trailer ribs */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[-2.5 + i * 0.32, 0.55, 0.531]}>
          <boxGeometry args={[0.02, 1.05, 0.005]} />
          <meshStandardMaterial color="#dddddd" />
        </mesh>
      ))}
      {/* cab */}
      <mesh castShadow position={[0.35, 0.55, 0]}>
        <boxGeometry args={[0.9, 1.1, 1.0]} />
        <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.6} />
      </mesh>
      {/* hood */}
      <mesh castShadow position={[0.95, 0.35, 0]}>
        <boxGeometry args={[0.5, 0.65, 0.95]} />
        <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.6} />
      </mesh>
      {/* windshield */}
      <mesh position={[0.36, 0.85, 0]}>
        <boxGeometry args={[0.55, 0.4, 1.01]} />
        <meshStandardMaterial
          color="#88ccee"
          roughness={0.05}
          metalness={0.9}
          envMapIntensity={1.5}
        />
      </mesh>
      {/* grill */}
      <mesh position={[1.21, 0.35, 0]}>
        <boxGeometry args={[0.02, 0.45, 0.7]} />
        <meshStandardMaterial color="#222" metalness={1} roughness={0.2} />
      </mesh>
      {/* wheels */}
      {[
        [0.9, 0],
        [0.4, 0],
        [-0.6, 0],
        [-1.2, 0],
        [-2.1, 0],
      ].map(([x], i) => (
        <group key={i} position={[x, 0, 0]}>
          {[-0.55, 0.55].map((z, j) => (
            <mesh key={j} position={[0, 0, z]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <cylinderGeometry args={[0.22, 0.22, 0.18, 24]} />
              <meshStandardMaterial color="#0a0a0a" roughness={0.8} />
            </mesh>
          ))}
        </group>
      ))}
      {/* exhaust */}
      <mesh position={[0.2, 1.3, -0.45]}>
        <cylinderGeometry args={[0.05, 0.05, 0.6, 12]} />
        <meshStandardMaterial color="#999" metalness={1} roughness={0.3} />
      </mesh>
    </group>
  );
}

/* ---------- Stacked shipping containers ---------- */
function Container({
  position,
  color,
  label,
}: {
  position: [number, number, number];
  color: string;
  label: string;
}) {
  return (
    <group position={position}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.6, 0.8, 0.8]} />
        <meshStandardMaterial color={color} roughness={0.6} metalness={0.3} />
      </mesh>
      {/* corrugation */}
      {Array.from({ length: 14 }).map((_, i) => (
        <mesh key={i} position={[-0.75 + i * 0.115, 0, 0.401]}>
          <boxGeometry args={[0.01, 0.78, 0.005]} />
          <meshStandardMaterial color="#000" opacity={0.25} transparent />
        </mesh>
      ))}
      <Html position={[0, 0, 0.42]} center distanceFactor={6}>
        <div className="pointer-events-none select-none font-mono text-[10px] font-bold tracking-widest text-black/70">
          {label}
        </div>
      </Html>
    </group>
  );
}

function ContainerStack() {
  return (
    <group position={[-2.2, -0.4, -1.6]} rotation={[0, 0.3, 0]}>
      <Container position={[0, 0.4, 0]} color="#e8e8e8" label="MSC 4421" />
      <Container position={[0, 1.22, 0]} color="#ffffff" label="LOGI 8870" />
      <Container position={[1.65, 0.4, 0]} color="#1a1a1a" label="EVRG 0921" />
    </group>
  );
}

/* ---------- Realistic plane flying across ---------- */
function Airplane() {
  const ref = useRef<THREE.Group>(null!);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.25;
    const x = Math.cos(t) * 4.5;
    const z = Math.sin(t) * 2.8;
    ref.current.position.set(x, 2.2 + Math.sin(t * 2) * 0.1, z);
    ref.current.rotation.y = -t + Math.PI / 2;
    ref.current.rotation.z = Math.sin(t) * 0.1;
  });

  return (
    <group ref={ref} scale={0.45}>
      {/* fuselage */}
      <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
        <capsuleGeometry args={[0.18, 1.6, 8, 16]} />
        <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.6} />
      </mesh>
      {/* nose cone */}
      <mesh position={[1.05, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.18, 0.35, 16]} />
        <meshStandardMaterial color="#ffffff" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* main wings */}
      <mesh castShadow position={[0, -0.05, 0]}>
        <boxGeometry args={[0.45, 0.04, 2.4]} />
        <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.3} />
      </mesh>
      {/* engines */}
      {[-0.7, 0.7].map((z, i) => (
        <mesh key={i} position={[-0.05, -0.18, z]}>
          <cylinderGeometry args={[0.09, 0.09, 0.35, 16]} />
          <meshStandardMaterial color="#111" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
      {/* tail fin */}
      <mesh position={[-0.8, 0.25, 0]}>
        <boxGeometry args={[0.3, 0.45, 0.04]} />
        <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.3} />
      </mesh>
      {/* tail wings */}
      <mesh position={[-0.85, 0, 0]}>
        <boxGeometry args={[0.25, 0.04, 0.9]} />
        <meshStandardMaterial color="#ffffff" metalness={0.5} roughness={0.3} />
      </mesh>
      {/* black stripe */}
      <mesh position={[0, 0.05, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.181, 0.181, 1.6, 16, 1, true]} />
        <meshStandardMaterial color="#111" side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

/* ---------- Ground plane (subtle) ---------- */
function Ground() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.75, 0]}>
      <planeGeometry args={[40, 40]} />
      <meshStandardMaterial color="#f4f4f4" roughness={1} />
    </mesh>
  );
}

function Scene() {
  const group = useRef<THREE.Group>(null!);
  useFrame(({ clock }) => {
    group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.15) * 0.15;
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[4.5, 2.5, 5.5]} fov={38} />
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[6, 8, 4]}
        intensity={1.6}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <directionalLight position={[-5, 3, -4]} intensity={0.4} color="#ffffff" />
      <Environment preset="warehouse" />

      <group ref={group}>
        <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.15}>
          <SemiTruck />
        </Float>
        <ContainerStack />
      </group>

      <Airplane />

      <Ground />
      <ContactShadows
        position={[0, -0.74, 0]}
        opacity={0.55}
        scale={14}
        blur={2.4}
        far={4}
      />
    </>
  );
}

export function Hero3D() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
