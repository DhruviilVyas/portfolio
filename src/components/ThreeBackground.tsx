"use client";
import { Sparkles, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useEffect } from "react";

function RotatingObjects() {
  const torus = useRef<THREE.Mesh>(null);
  const cube = useRef<THREE.Mesh>(null);

  // Animate rotation smoothly
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (torus.current) {
      torus.current.rotation.x = t * 0.3;
      torus.current.rotation.y = t * 0.4;
    }
    if (cube.current) {
      cube.current.rotation.x = t * 0.5;
      cube.current.rotation.y = t * 0.6;
    }
  });

  return (
    <>
      <mesh ref={torus} position={[2, 0, -6]}>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial
          color="#ff00ff"
          emissive="#ff00ff"
          emissiveIntensity={1.5}
        />
      </mesh>

      <mesh ref={cube} position={[-2, 1, -4]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={1.2}
        />
      </mesh>
    </>
  );
}

function MovingStars() {
  // ✅ Use the correct type instead of any
  const starsRef = useRef<THREE.Points | null>(null);

  // Subtle rotation for galaxy effect
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.02;
    if (starsRef.current) {
      starsRef.current.rotation.x = t * 0.2;
      starsRef.current.rotation.y = t * 0.4;
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={120}
      depth={70}
      count={8000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
}

export default function ThreeBackground() {
  // Prevent resize distortion
  useEffect(() => {
    const handleResize = () => {
      const canvas = document.querySelector("canvas");
      if (canvas) {
        canvas.style.width = "100vw";
        canvas.style.height = "100vh";
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />

        <Sparkles count={500} scale={10} size={4} speed={0.5} color="#00ffff" />
        <MovingStars />
        <RotatingObjects />
      </Canvas>
    </div>
  );
}
