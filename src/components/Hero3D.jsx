import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';

const AnimatedSphere = () => {
  const mesh = useRef();

  useFrame((state) => {
    const { clock } = state;
    mesh.current.rotation.x = clock.getElapsedTime() * 0.1;
    mesh.current.rotation.y = clock.getElapsedTime() * 0.14;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.8}>
      <Sphere ref={mesh} args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#8ad7ff"
          attach="material"
          distort={0.38}
          speed={1.4}
          roughness={0.05}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute left-0 top-0 h-full w-full -z-10 overflow-hidden bg-[#0b0f16]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.45} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8ad7ff" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1.1} color="#d8ff72" />
        <Stars radius={100} depth={50} count={3500} factor={4} saturation={0} fade speed={0.8} />
        <AnimatedSphere />
      </Canvas>
      <div className="hero-orb hero-orb--one" />
      <div className="hero-orb hero-orb--two" />
      <div className="hero-grid" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0f16]/30 to-[#0b0f16]" />
    </div>
  );
};

export default Hero3D;
