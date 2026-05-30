import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function Globe() {
  const ref = useRef<THREE.Mesh>(null!);
  const wireRef = useRef<THREE.LineSegments>(null!);

  useFrame((_, dt) => {
    ref.current.rotation.y += dt * 0.15;
    wireRef.current.rotation.y += dt * 0.15;
  });

  return (
    <group>
      <mesh ref={ref}>
        <sphereGeometry args={[1.6, 64, 64]} />
        <meshStandardMaterial color="#111111" roughness={0.4} metalness={0.2} />
      </mesh>
      <lineSegments ref={wireRef}>
        <edgesGeometry args={[new THREE.SphereGeometry(1.62, 24, 16)]} />
        <lineBasicMaterial color="#ffffff" transparent opacity={0.35} />
      </lineSegments>
      {/* Latitude rings */}
      {[-0.6, 0, 0.6].map((y, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]} position={[0, y, 0]}>
          <torusGeometry args={[Math.sqrt(Math.max(0.01, 1.62 ** 2 - y ** 2)), 0.004, 8, 64]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.25} />
        </mesh>
      ))}
    </group>
  );
}

function Truck() {
  return (
    <group scale={0.18}>
      {/* cab */}
      <mesh position={[-0.6, 0.2, 0]}>
        <boxGeometry args={[0.8, 0.7, 0.9]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* trailer */}
      <mesh position={[0.7, 0.3, 0]}>
        <boxGeometry args={[1.6, 0.9, 0.95]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* wheels */}
      {[-0.9, -0.3, 0.3, 1.1].map((x, i) => (
        <mesh key={i} position={[x, -0.25, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.18, 0.18, 1, 16]} />
          <meshStandardMaterial color="#111111" />
        </mesh>
      ))}
    </group>
  );
}

function Plane() {
  return (
    <group scale={0.22}>
      {/* fuselage */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.15, 0.15, 1.8, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* nose */}
      <mesh position={[0.95, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <coneGeometry args={[0.15, 0.4, 16]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* wings */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.5, 0.05, 1.6]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      {/* tail */}
      <mesh position={[-0.8, 0.2, 0]}>
        <boxGeometry args={[0.25, 0.4, 0.05]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

type OrbitItem = {
  radius: number;
  tilt: number;
  speed: number;
  phase: number;
  yOffset: number;
  type: "truck" | "plane";
};

function Orbiter({ item }: { item: OrbitItem }) {
  const group = useRef<THREE.Group>(null!);
  const tiltRef = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * item.speed + item.phase;
    const x = Math.cos(t) * item.radius;
    const z = Math.sin(t) * item.radius;
    group.current.position.set(x, item.yOffset, z);
    group.current.rotation.y = -t + Math.PI / 2;
  });

  return (
    <group ref={tiltRef} rotation={[item.tilt, 0, 0]}>
      <group ref={group}>
        {item.type === "truck" ? <Truck /> : <Plane />}
      </group>
    </group>
  );
}

function Scene() {
  const items: OrbitItem[] = useMemo(
    () => [
      { radius: 2.3, tilt: 0.15, speed: 0.6, phase: 0, yOffset: 0, type: "truck" },
      { radius: 2.3, tilt: 0.15, speed: 0.6, phase: Math.PI, yOffset: 0, type: "truck" },
      { radius: 2.8, tilt: -0.6, speed: 0.45, phase: 1.1, yOffset: 0.2, type: "plane" },
      { radius: 2.9, tilt: 0.7, speed: 0.4, phase: 2.4, yOffset: -0.1, type: "plane" },
      { radius: 2.5, tilt: -0.25, speed: 0.55, phase: 3.7, yOffset: 0.1, type: "truck" },
    ],
    []
  );

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <directionalLight position={[-5, -3, -5]} intensity={0.3} color="#ffffff" />
      <Stars radius={50} depth={20} count={1500} factor={3} fade speed={0.5} />
      <Globe />
      {items.map((it, i) => (
        <Orbiter key={i} item={it} />
      ))}
    </>
  );
}

export function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 1.2, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <Scene />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.4}
          minPolarAngle={Math.PI / 2.6}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Suspense>
    </Canvas>
  );
}
