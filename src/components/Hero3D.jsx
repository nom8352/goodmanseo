import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';

const AnimatedSphere = () => {
  const mesh = useRef();

  useFrame((state) => {
    const { clock } = state;
    mesh.current.rotation.x = clock.getElapsedTime() * 0.05;
    mesh.current.rotation.y = clock.getElapsedTime() * 0.08;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.45} floatIntensity={0.9}>
      <Sphere ref={mesh} args={[1, 100, 200]} scale={1.65}>
        <MeshDistortMaterial
          color="#6f8f9b"
          attach="material"
          distort={0.18}
          speed={0.8}
          roughness={0.18}
          metalness={0.45}
        />
      </Sphere>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute left-0 top-0 h-full w-full -z-10 overflow-hidden bg-[#0c1116]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.38} />
        <pointLight position={[10, 10, 10]} intensity={0.55} color="#5b7480" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={0.45} color="#8da7b1" />
        <Stars radius={90} depth={42} count={1200} factor={2.5} saturation={0} fade speed={0.35} />
        <AnimatedSphere />
      </Canvas>
      <div className="hero-orb hero-orb--one" />
      <div className="hero-orb hero-orb--two" />
      <div className="hero-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c1116]/45 to-[#0c1116]" />
    </div>
  );
};

export default Hero3D;
