import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';

const AnimatedSphere = () => {
  const mesh = useRef();
  
  useFrame((state) => {
    const { clock } = state;
    mesh.current.rotation.x = clock.getElapsedTime() * 0.1;
    mesh.current.rotation.y = clock.getElapsedTime() * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={mesh} args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#00f2ff"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0}
          metalness={1}
        />
      </Sphere>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#7000ff" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#00f2ff" />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <AnimatedSphere />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
    </div>
  );
};

export default Hero3D;
