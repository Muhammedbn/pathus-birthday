import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, MeshWobbleMaterial, Stars, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, color, speed, distort }) => {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
      <Sphere ref={mesh} args={[1, 100, 200]} position={position} scale={0.5}>
        <MeshDistortMaterial
          color={color}
          speed={distort}
          distort={0.4}
          radius={1}
        />
      </Sphere>
    </Float>
  );
};

const HeartShape = ({ position }) => {
  const mesh = useRef();
  useFrame((state) => {
    mesh.current.rotation.y += 0.01;
    mesh.current.position.y += Math.sin(state.clock.elapsedTime) * 0.005;
  });

  const heartShape = new THREE.Shape();
  heartShape.moveTo(0, 0);
  heartShape.bezierCurveTo(0, 0, -0.5, 1, -1, 1);
  heartShape.bezierCurveTo(-2, 1, -2, -0.5, -2, -0.5);
  heartShape.bezierCurveTo(-2, -1.5, -1, -2.5, 0, -3.5);
  heartShape.bezierCurveTo(1, -2.5, 2, -1.5, 2, -0.5);
  heartShape.bezierCurveTo(2, -0.5, 2, 1, 1, 1);
  heartShape.bezierCurveTo(0.5, 1, 0, 0, 0, 0);

  const extrudeSettings = { depth: 0.5, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 0.1, bevelThickness: 0.1 };

  return (
    <mesh ref={mesh} position={position} rotation={[Math.PI, 0, 0]} scale={0.3}>
      <extrudeGeometry args={[heartShape, extrudeSettings]} />
      <meshStandardMaterial color="#ff69b4" metalness={0.7} roughness={0.2} />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      
      <FloatingShape position={[-3, 2, -2]} color="#d4af37" speed={2} distort={2} />
      <FloatingShape position={[3, -2, -1]} color="#8e44ad" speed={3} distort={3} />
      <FloatingShape position={[-4, -3, -3]} color="#ff69b4" speed={1.5} distort={4} />
      
      <HeartShape position={[0, 0, 0]} />
      <HeartShape position={[2, 3, -4]} />
      <HeartShape position={[-5, 1, -5]} />

      <Environment preset="city" />
    </>
  );
};

const ThreeScene = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
