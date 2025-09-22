import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, Center, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, color, scale = 1 }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.8}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
};

const ConnectingLines = () => {
  const points = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-3, 0, 0),
      new THREE.Vector3(-1, 1, 0),
      new THREE.Vector3(1, -1, 0),
      new THREE.Vector3(3, 0, 0),
    ]);
    return curve.getPoints(50);
  }, []);

  const lineRef = useRef();
  
  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <line ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#f97316" transparent opacity={0.5} />
    </line>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 50 }}
        performance={{ min: 0.5 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f97316" />
        
        <FloatingShape position={[-3, 2, 0]} color="#f97316" scale={0.8} />
        <FloatingShape position={[3, -1, 0]} color="#fb923c" scale={0.6} />
        <FloatingShape position={[0, 1, -2]} color="#fdba74" scale={0.7} />
        <FloatingShape position={[-2, -2, 1]} color="#fed7aa" scale={0.5} />
        
        <ConnectingLines />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;