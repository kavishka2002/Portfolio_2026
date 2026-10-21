"use client";
import * as THREE from "three";
import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Scene({ reduced, count }: { reduced: boolean; count: number }) {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const rings = useRef<THREE.Group>(null);
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 2.4 + Math.random() * 2.8, t = Math.random() * Math.PI * 2, p = Math.acos(2 * Math.random() - 1);
      a[i * 3] = r * Math.sin(p) * Math.cos(t); a[i * 3 + 1] = r * Math.sin(p) * Math.sin(t); a[i * 3 + 2] = r * Math.cos(p);
    }
    return a;
  }, [count]);
  useFrame((s, d) => {
    const k = Math.min(1, d * 3);
    if (group.current) {
      group.current.rotation.x += (s.pointer.y * 0.35 - group.current.rotation.x) * k;
      group.current.rotation.y += (s.pointer.x * 0.5 - group.current.rotation.y) * k;
      group.current.position.y = Math.min(window.scrollY, 800) * 0.0018;
    }
    if (!reduced) {
      if (core.current) { core.current.rotation.y += d * 0.2; core.current.rotation.x += d * 0.08; }
      if (rings.current) rings.current.rotation.z += d * 0.1;
    }
  });
  return (
    <group ref={group}>
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 3, 5]} intensity={60} color="#6ea8ff" />
      <pointLight position={[-4, -2, 3]} intensity={30} color="#5eead4" />
      <Float speed={reduced ? 0 : 1.2} floatIntensity={0.6} rotationIntensity={0.2}>
        <mesh ref={core}>
          <icosahedronGeometry args={[1.3, 1]} />
          <meshStandardMaterial color="#10131c" metalness={0.8} roughness={0.25} flatShading />
          <mesh scale={1.015}><icosahedronGeometry args={[1.3, 1]} /><meshBasicMaterial wireframe color="#6ea8ff" transparent opacity={0.55} /></mesh>
        </mesh>
      </Float>
      <group ref={rings} rotation={[1.1, 0.3, 0]}>
        <mesh><torusGeometry args={[2.1, 0.008, 8, 120]} /><meshBasicMaterial color="#5eead4" transparent opacity={0.6} /></mesh>
        <mesh rotation={[0.6, 0.4, 0]}><torusGeometry args={[2.7, 0.006, 8, 120]} /><meshBasicMaterial color="#6ea8ff" transparent opacity={0.4} /></mesh>
      </group>
      <points>
        <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
        <pointsMaterial size={0.025} color="#c9d6ff" transparent opacity={0.7} sizeAttenuation depthWrite={false} />
      </points>
    </group>
  );
}

export default function HeroScene() {
  const wrap = useRef<HTMLDivElement>(null);
  const [ok, setOk] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    try { const c = document.createElement("canvas"); setOk(!!(c.getContext("webgl2") || c.getContext("webgl"))); } catch { setOk(false); }
    setMobile(window.innerWidth < 768);
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    if (wrap.current) io.observe(wrap.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={wrap} className="absolute inset-0" aria-hidden="true">
      {ok && (
        <Canvas dpr={[1, mobile ? 1.25 : 1.75]} camera={{ position: [0, 0, mobile ? 9 : 7], fov: 45 }} frameloop={visible ? "always" : "never"} gl={{ antialias: !mobile, powerPreference: "high-performance" }}>
          <Scene reduced={reduced} count={mobile ? 250 : 800} />
        </Canvas>
      )}
    </div>
  );
}
