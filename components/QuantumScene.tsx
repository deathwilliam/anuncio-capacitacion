
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Stars, Environment, Box } from '@react-three/drei';
import * as THREE from 'three';

// Define typed elements for React Three Fiber to avoid JSX intrinsic element errors
const MeshStandardMaterial = 'meshStandardMaterial' as any;
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;
const SpotLight = 'spotLight' as any;
const Group = 'group' as any;
const Mesh = 'mesh' as any;
const SphereGeometry = 'sphereGeometry' as any;
const CylinderGeometry = 'cylinderGeometry' as any;

const NetworkNode = ({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.position.y = position[1] + Math.sin(t * 1.5 + position[0]) * 0.15;
      ref.current.rotation.x = t * 0.2;
      ref.current.rotation.z = t * 0.1;
    }
  });

  return (
    <Sphere ref={ref} args={[1, 32, 32]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        envMapIntensity={1}
        clearcoat={0.5}
        metalness={0.6}
        roughness={0.1}
        distort={0.3}
        speed={1}
      />
    </Sphere>
  );
};

const DataPulse = () => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
       const t = state.clock.getElapsedTime();
       ref.current.rotation.y = t * 0.3;
       ref.current.scale.setScalar(1 + Math.sin(t * 0.5) * 0.05);
    }
  });

  return (
    <Torus ref={ref} args={[3, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
      {/* Fix: Use capitalized component to avoid JSX intrinsic element error */}
      <MeshStandardMaterial color="#C5A059" emissive="#C5A059" emissiveIntensity={0.8} transparent opacity={0.4} />
    </Torus>
  );
}

export const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* Fix: Use capitalized components for Three.js lights */}
        <AmbientLight intensity={0.7} />
        <PointLight position={[10, 10, 10]} intensity={1.5} />
        <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.4}>
          <NetworkNode position={[0, 0, 0]} color="#C5A059" scale={1.4} />
          <DataPulse />
        </Float>
        
        <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
           <NetworkNode position={[-4, 2, -3]} color="#2563EB" scale={0.4} />
           <NetworkNode position={[4, -1, -4]} color="#D946EF" scale={0.5} />
           <NetworkNode position={[-2, -3, -2]} color="#10B981" scale={0.3} />
        </Float>

        <Environment preset="city" />
        <Stars radius={100} depth={50} count={2000} factor={6} saturation={0} fade speed={1.5} />
      </Canvas>
    </div>
  );
};

export const DigitalNetworkScene: React.FC = () => {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        {/* Fix: Use capitalized components for Three.js lights */}
        <AmbientLight intensity={0.8} />
        <SpotLight position={[5, 5, 5]} angle={0.25} penumbra={1} intensity={2.5} color="#C5A059" />
        <Environment preset="studio" />
        
        <Float rotationIntensity={0.5} floatIntensity={0.3} speed={1.2}>
          {/* Fix: Use capitalized component for Three.js group */}
          <Group>
            {/* Central Connectivity Hub */}
            <Box args={[1, 1, 1]}>
              {/* Fix: Use capitalized component for Three.js material */}
              <MeshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
            </Box>
            
            {/* Orbiting Elements representing different social platforms/businesses */}
            {[...Array(6)].map((_, i) => (
                /* Fix: Use capitalized component for Three.js group */
                <Group key={i} rotation={[0, (i * Math.PI * 2) / 6, 0]}>
                    {/* Fix: Use capitalized component for Three.js mesh */}
                    <Mesh position={[2, 0, 0]}>
                        {/* Fix: Use capitalized component for Three.js geometry */}
                        <SphereGeometry args={[0.2, 16, 16]} />
                        {/* Fix: Use capitalized component for Three.js material */}
                        <MeshStandardMaterial 
                            color={i % 2 === 0 ? "#C5A059" : "#333"} 
                            emissive={i % 2 === 0 ? "#C5A059" : "#000"}
                            emissiveIntensity={0.5}
                        />
                    </Mesh>
                    {/* Fix: Use capitalized component for Three.js mesh */}
                    <Mesh rotation={[0, 0, Math.PI / 2]} position={[1, 0, 0]}>
                        {/* Fix: Use capitalized component for Three.js geometry */}
                        <CylinderGeometry args={[0.01, 0.01, 2, 8]} />
                        {/* Fix: Use capitalized component for Three.js material */}
                        <MeshStandardMaterial color="#C5A059" transparent opacity={0.3} />
                    </Mesh>
                </Group>
            ))}

            {/* Glowing Rings */}
            <Torus args={[2.2, 0.01, 16, 100]} rotation={[Math.PI / 2.5, 0, 0]}>
               {/* Fix: Use capitalized component for Three.js material */}
               <MeshStandardMaterial color="#C5A059" emissive="#C5A059" emissiveIntensity={1} />
            </Torus>
             <Torus args={[2.5, 0.005, 16, 100]} rotation={[-Math.PI / 3, 0, 0]}>
               {/* Fix: Use capitalized component for Three.js material */}
               <MeshStandardMaterial color="#444" transparent opacity={0.5} />
            </Torus>
          </Group>
        </Float>
      </Canvas>
    </div>
  );
}
