import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useMemo } from 'react';
import * as THREE from 'three';

const Background3D = () => {
  const count = 2000;
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5] }}
        gl={{ antialias: true }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#050816']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <points>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={count}
              array={positions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.02}
            color="#6750A4"
            sizeAttenuation
            transparent
            opacity={0.8}
          />
        </points>

        <Sphere args={[1, 64, 64]}>
          <meshStandardMaterial
            color="#6750A4"
            roughness={0.5}
            metalness={0.5}
            wireframe
          />
        </Sphere>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Background3D;