import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Abstract3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x8b5cf6, 2, 100);
    pointLight1.position.set(-10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 2, 100);
    pointLight2.position.set(10, -10, -10);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xec4899, 1.5, 100);
    pointLight3.position.set(0, 15, 5);
    scene.add(pointLight3);

    // Create geometries with custom materials
    const geometries: { mesh: THREE.Mesh; speedX: number; speedY: number; floatSpeed: number; floatOffset: number }[] = [];

    // Main torus knot (centerpiece) - Solid glowing version
    const torusKnotGeometry = new THREE.TorusKnotGeometry(2.2, 0.6, 128, 32);
    const torusKnotMaterial = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      emissive: 0x6d28d9,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: false,
    });
    
    const torusKnot = new THREE.Mesh(torusKnotGeometry, torusKnotMaterial);
    
    // Add an outer glowing wireframe
    const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.3 });
    const wireframeGeo = new THREE.WireframeGeometry(torusKnotGeometry);
    const wireframe = new THREE.LineSegments(wireframeGeo, wireframeMaterial);
    wireframe.scale.set(1.02, 1.02, 1.02); // Slightly larger
    
    const torusKnotGroup = new THREE.Group();
    torusKnotGroup.add(torusKnot);
    torusKnotGroup.add(wireframe);
    torusKnotGroup.position.set(0, 0, -5);
    scene.add(torusKnotGroup);
    
    geometries.push({ mesh: torusKnotGroup as unknown as THREE.Mesh, speedX: 0.003, speedY: 0.002, floatSpeed: 0.5, floatOffset: 0 });

    // Floating spheres
    const spherePositions: [number, number, number, string][] = [
      [-5, 3, -3, '#8b5cf6'],
      [5, -2, -4, '#06b6d4'],
      [-4, -3, -2, '#ec4899'],
      [4, 3, -5, '#10b981'],
      [-6, 0, -6, '#f59e0b'],
      [6, -1, -3, '#6366f1'],
    ];

    spherePositions.forEach(([x, y, z, color], index) => {
      const geometry = new THREE.IcosahedronGeometry(0.8, 0);
      const material = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.7,
        roughness: 0.2,
        metalness: 0.8,
        transparent: true,
        opacity: 0.9,
      });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(x, y, z);
      scene.add(sphere);
      geometries.push({ 
        mesh: sphere, 
        speedX: 0.005 + Math.random() * 0.01, 
        speedY: 0.003 + Math.random() * 0.01,
        floatSpeed: 0.3 + Math.random() * 0.4,
        floatOffset: index * 0.5
      });
    });

    // Octahedrons
    const octaPositions: [number, number, number, string][] = [
      [-3, 2, -1, '#ec4899'],
      [3, 1, -2, '#8b5cf6'],
      [0, -4, -4, '#06b6d4'],
    ];

    octaPositions.forEach(([x, y, z, color], index) => {
      const geometry = new THREE.OctahedronGeometry(0.6);
      const material = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.7,
        metalness: 0.7,
        roughness: 0.3,
        transparent: true,
        opacity: 0.95,
      });
      const octa = new THREE.Mesh(geometry, material);
      octa.position.set(x, y, z);
      scene.add(octa);
      geometries.push({ 
        mesh: octa, 
        speedX: 0.008 + Math.random() * 0.005, 
        speedY: 0.005 + Math.random() * 0.005,
        floatSpeed: 0.4 + Math.random() * 0.3,
        floatOffset: index * 0.7 + 2
      });
    });

    // Particle system
    const particleCount = 800;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const particleColors = [
      new THREE.Color(0x8b5cf6),
      new THREE.Color(0x06b6d4),
      new THREE.Color(0xec4899),
      new THREE.Color(0x10b981),
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const color = particleColors[Math.floor(Math.random() * particleColors.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Neural network visualization
    const networkGroup = new THREE.Group();
    const nodePositions: THREE.Vector3[] = [];
    
    // Create network nodes
    const layers = [5, 8, 8, 6, 3];
    let x = -4;
    layers.forEach((nodeCount) => {
      for (let i = 0; i < nodeCount; i++) {
        const y = (i - nodeCount / 2) * 0.5;
        const nodeGeometry = new THREE.SphereGeometry(0.08, 16, 16);
        const nodeMaterial = new THREE.MeshBasicMaterial({
          color: 0x8b5cf6,
          transparent: true,
          opacity: 0.8,
        });
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        node.position.set(x, y, -8);
        networkGroup.add(node);
        nodePositions.push(new THREE.Vector3(x, y, -8));
      }
      x += 2;
    });

    scene.add(networkGroup);

    // Camera position
    camera.position.z = 8;

    // Mouse interaction setup
    const mouse = new THREE.Vector2();
    let mouseX = 0;
    let mouseY = 0;
    const raycaster = new THREE.Raycaster();

    const handleMouseMove = (event: MouseEvent) => {
      // For camera following
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      // For raycasting accuracy
      mouse.x = mouseX;
      mouse.y = mouseY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Dynamic Vectors for animation
    const baseScale = new THREE.Vector3(1, 1, 1);
    const hoverScale = new THREE.Vector3(1.3, 1.3, 1.3);

    // Animation
    let animationId: number;
    const startTime = performance.now();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Update Raycaster
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);
      const intersectedObjects = intersects.map(hit => hit.object);

      // Animate geometries
      geometries.forEach((item) => {
        item.mesh.rotation.x += item.speedX;
        item.mesh.rotation.y += item.speedY;
        // Float logic
        item.mesh.position.y += Math.sin(elapsedTime * item.floatSpeed + item.floatOffset) * 0.004;
        
        // Interactive Scaling (Scale up if hovered)
        const isHovered = item.mesh.children.length > 0 
           ? item.mesh.children.some(child => intersectedObjects.includes(child)) // For Group
           : intersectedObjects.includes(item.mesh); // For Mesh
           
        if (isHovered) {
          item.mesh.scale.lerp(hoverScale, 0.1);
          item.mesh.rotation.y += 0.02; // Rotate faster when hovered
        } else {
          item.mesh.scale.lerp(baseScale, 0.05);
        }
      });

      // Animate particles
      particles.rotation.y = elapsedTime * 0.02;
      particles.rotation.x = elapsedTime * 0.01;

      // Animate network
      networkGroup.rotation.y = Math.sin(elapsedTime * 0.3) * 0.15;

      // Camera follows mouse slightly
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
      camera.position.y += (mouseY * 2 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Responsive Screens Handling
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0" />;
};
