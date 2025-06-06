
import { useEffect, useRef } from 'react';

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<any>(null);

  useEffect(() => {
    const loadThreeJS = async () => {
      const THREE = await import('three');
      
      if (!mountRef.current) return;

      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      mountRef.current.appendChild(renderer.domElement);

      // Get current CSS custom properties for dynamic colors
      const getComputedColor = (property: string) => {
        return getComputedStyle(document.documentElement).getPropertyValue(property).trim();
      };

      // Galaxy particles
      const galaxyGeometry = new THREE.BufferGeometry();
      const galaxyCount = 8000;
      const positions = new Float32Array(galaxyCount * 3);
      const colors = new Float32Array(galaxyCount * 3);
      const sizes = new Float32Array(galaxyCount);

      // Galaxy spiral parameters
      const radius = 50;
      const branches = 4;
      const spin = 1;
      const randomness = 0.5;
      const randomnessPower = 3;

      // Use more vibrant theme colors for the galaxy
      const primaryColor = getComputedColor('--color-primary-material');
      const secondaryColor = getComputedColor('--color-secondary-material');
      const tertiaryColor = getComputedColor('--color-tertiary-material');

      // Convert CSS colors to THREE.js colors with increased saturation
      const colorInside = new THREE.Color(primaryColor).multiplyScalar(1.5);
      const colorMiddle = new THREE.Color(secondaryColor).multiplyScalar(1.3);
      const colorOutside = new THREE.Color(tertiaryColor).multiplyScalar(1.2);

      for (let i = 0; i < galaxyCount; i++) {
        const i3 = i * 3;

        // Position
        const galaxyRadius = Math.random() * radius;
        const branchAngle = (i % branches) / branches * Math.PI * 2;
        const spinAngle = galaxyRadius * spin;

        const randomX = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * galaxyRadius;
        const randomY = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * galaxyRadius;
        const randomZ = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * randomness * galaxyRadius;

        positions[i3] = Math.cos(branchAngle + spinAngle) * galaxyRadius + randomX;
        positions[i3 + 1] = randomY;
        positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * galaxyRadius + randomZ;

        // Create gradient from inside to outside with more vibrant colors
        const mixedColor = colorInside.clone();
        const radiusRatio = galaxyRadius / radius;
        
        if (radiusRatio < 0.5) {
          mixedColor.lerp(colorMiddle, radiusRatio * 2);
        } else {
          mixedColor.copy(colorMiddle);
          mixedColor.lerp(colorOutside, (radiusRatio - 0.5) * 2);
        }

        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;

        // Size
        sizes[i] = Math.random() * 6;
      }

      galaxyGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      galaxyGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      galaxyGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      // Galaxy material with enhanced blending
      const galaxyMaterial = new THREE.PointsMaterial({
        size: 0.1,
        sizeAttenuation: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
      });

      const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial);
      scene.add(galaxy);

      // Additional star field with theme colors
      const starsGeometry = new THREE.BufferGeometry();
      const starsCount = 2000;
      const starsPositions = new Float32Array(starsCount * 3);
      const starsColors = new Float32Array(starsCount * 3);

      for (let i = 0; i < starsCount; i++) {
        const i3 = i * 3;
        
        starsPositions[i3] = (Math.random() - 0.5) * 200;
        starsPositions[i3 + 1] = (Math.random() - 0.5) * 200;
        starsPositions[i3 + 2] = (Math.random() - 0.5) * 200;

        // Mix of white and theme colors for stars
        const starColor = Math.random() > 0.7 ? colorInside.clone().multiplyScalar(0.8) : new THREE.Color(0xffffff);
        starsColors[i3] = starColor.r;
        starsColors[i3 + 1] = starColor.g;
        starsColors[i3 + 2] = starColor.b;
      }

      starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
      starsGeometry.setAttribute('color', new THREE.BufferAttribute(starsColors, 3));

      const starsMaterial = new THREE.PointsMaterial({
        size: 0.02,
        transparent: true,
        opacity: 0.9,
        vertexColors: true,
        blending: THREE.AdditiveBlending
      });

      const stars = new THREE.Points(starsGeometry, starsMaterial);
      scene.add(stars);

      // Nebula clouds with theme colors
      const nebulaGeometry = new THREE.SphereGeometry(80, 32, 32);
      
      const nebulaMaterial1 = new THREE.MeshBasicMaterial({
        color: new THREE.Color(primaryColor).multiplyScalar(0.6),
        transparent: true,
        opacity: 0.15,
        side: THREE.DoubleSide
      });

      const nebula1 = new THREE.Mesh(nebulaGeometry, nebulaMaterial1);
      nebula1.position.set(30, 20, -50);
      scene.add(nebula1);

      const nebulaMaterial2 = new THREE.MeshBasicMaterial({
        color: new THREE.Color(secondaryColor).multiplyScalar(0.7),
        transparent: true,
        opacity: 0.12,
        side: THREE.DoubleSide
      });

      const nebula2 = new THREE.Mesh(nebulaGeometry, nebulaMaterial2);
      nebula2.position.set(-40, -30, -60);
      scene.add(nebula2);

      camera.position.z = 30;

      // Animation
      const animate = () => {
        requestAnimationFrame(animate);

        // Rotate galaxy
        galaxy.rotation.y += 0.001;
        
        // Rotate stars slowly
        stars.rotation.x += 0.0005;
        stars.rotation.y += 0.0003;

        // Pulse nebulas
        nebula1.rotation.x += 0.002;
        nebula1.rotation.y += 0.001;
        nebula2.rotation.x -= 0.001;
        nebula2.rotation.y += 0.002;

        renderer.render(scene, camera);
      };

      animate();
      sceneRef.current = { scene, camera, renderer, galaxy, stars };

      // Handle resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    };

    loadThreeJS();
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 -z-10"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default ThreeBackground;
