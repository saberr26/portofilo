import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, useTexture } from '@react-three/drei';
import { useMemo, useCallback } from 'react';
import * as THREE from 'three';

const Background3D = () => {
  const count = window.innerWidth < 768 ? 1000 : 2000;
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const radius = 5;
    
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      
      positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(theta);
    }
    return positions;
  }, [count]);

  const onCreated = useCallback(({ gl }) => {
    gl.setPixelRatio(Math.min(2, window.devicePixelRatio));
    gl.toneMapping = THREE.ACESFilmicToneMapping;
    gl.outputEncoding = THREE.sRGBEncoding;
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        onCreated={onCreated}
        performance={{ min: 0.5 }}
      >
        <color attach="background" args={['#050816']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        
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
            size={0.015}
            color="#6750A4"
            sizeAttenuation
            transparent
            opacity={0.6}
            depthWrite={false}
          />
        </points>

        <Sphere args={[1, 32, 32]}>
          <meshStandardMaterial
            color="#6750A4"
            roughness={0.7}
            metalness={0.3}
            wireframe
            transparent
            opacity={0.3}
          />
        </Sphere>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Background3D;