"use client";

/**
 * FloatingSphere — animated 3D metallic sphere using MeshDistortMaterial from Drei.
 * Morphs/distorts continuously creating an organic, liquid metal feel.
 * Used as a decorative background element in the Hero section.
 */
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Environment } from "@react-three/drei";
import * as THREE from "three";

function DistortSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.15;
    meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
  });

  return (
    <Sphere ref={meshRef} args={[1.2, 32, 32]}>
      <MeshDistortMaterial
        color="#4f46e5"
        attach="material"
        distort={0.45}
        speed={2}
        roughness={0.05}
        metalness={0.9}
        envMapIntensity={1.5}
      />
    </Sphere>
  );
}

export function FloatingSphere() {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        right: "-5%",
        top: "50%",
        transform: "translateY(-50%)",
        width: "50vw",
        height: "50vw",
        maxWidth: 700,
        maxHeight: 700,
        opacity: 0.6,
      }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 3.5], fov: 50 }}
        gl={{ alpha: true, antialias: false, powerPreference: "default" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#6366f1" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f59e0b" />
        <Environment preset="city" />
        <DistortSphere />
      </Canvas>
    </div>
  );
}
