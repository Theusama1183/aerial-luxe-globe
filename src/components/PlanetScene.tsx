import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Sphere } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";

function Planet({ mouse }: { mouse: { x: number; y: number } }) {
  const ref = useRef<THREE.Group>(null!);
  const atmos = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.y = t * 0.08 + mouse.x * 0.4;
    ref.current.rotation.x = -0.2 + mouse.y * 0.2;
    if (atmos.current) {
      const m = atmos.current.material as THREE.MeshBasicMaterial;
      m.opacity = 0.18 + Math.sin(t * 1.2) * 0.04;
    }
  });
  return (
    <group ref={ref} position={[0, 0, 0]}>
      {/* core */}
      <Sphere args={[1.6, 96, 96]}>
        <meshStandardMaterial
          color="#0e0e0e"
          roughness={0.45}
          metalness={0.7}
          emissive="#1a1a1a"
        />
      </Sphere>
      {/* wireframe overlay */}
      <Sphere args={[1.61, 48, 48]}>
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.12} />
      </Sphere>
      {/* atmosphere */}
      <mesh ref={atmos}>
        <sphereGeometry args={[1.78, 64, 64]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.18}
          side={THREE.BackSide}
        />
      </mesh>
      {/* rings */}
      {[2.4, 2.7, 3.0].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2.2, 0, i * 0.3]}>
          <torusGeometry args={[r, 0.004, 12, 200]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.25 - i * 0.06} />
        </mesh>
      ))}
    </group>
  );
}

export function PlanetScene() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 3, 5]} intensity={1.4} />
        <directionalLight position={[-4, -2, -3]} intensity={0.4} color="#aaccff" />
        <Stars radius={50} depth={50} count={3500} factor={4} fade speed={1} />
        <Planet mouse={mouse} />
      </Suspense>
    </Canvas>
  );
}
