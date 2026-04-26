import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Settings2, RotateCw, Palette, Box, Circle, Triangle, Layers, Zap } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

const shapeOptions = [
  { id: 'torusKnot', label: 'Torus Knot', icon: <RotateCw className="w-4 h-4" /> },
  { id: 'sphere', label: 'Sphere', icon: <Circle className="w-4 h-4" /> },
  { id: 'icosahedron', label: 'Icosahedron', icon: <Triangle className="w-4 h-4" /> },
  { id: 'octahedron', label: 'Octahedron', icon: <Box className="w-4 h-4" /> },
  { id: 'dodecahedron', label: 'Dodecahedron', icon: <Layers className="w-4 h-4" /> },
  { id: 'torus', label: 'Torus', icon: <RotateCw className="w-4 h-4" /> },
];

const colorOptions = [
  { id: '#ffffff', label: 'Diamond', class: 'bg-white' },
  { id: '#ffd700', label: 'Gold', class: 'bg-yellow-400' },
  { id: '#00f2ff', label: 'Electric', class: 'bg-cyan-300' },
  { id: '#ff00ff', label: 'Neon', class: 'bg-fuchsia-500' },
  { id: '#8b5cf6', label: 'Royal', class: 'bg-violet-600' },
  { id: '#10b981', label: 'Emerald', class: 'bg-emerald-500' },
  { id: '#6366f1', label: 'Indigo', class: 'bg-indigo-500' },
  { id: '#ef4444', label: 'Ruby', class: 'bg-red-500' },
];

function createGeometry(shape: string): THREE.BufferGeometry {
  switch (shape) {
    case 'torusKnot':
      return new THREE.TorusKnotGeometry(1.2, 0.4, 128, 32);
    case 'sphere':
      return new THREE.SphereGeometry(1.5, 64, 64);
    case 'icosahedron':
      return new THREE.IcosahedronGeometry(1.5, 1);
    case 'octahedron':
      return new THREE.OctahedronGeometry(1.5, 0);
    case 'dodecahedron':
      return new THREE.DodecahedronGeometry(1.5, 0);
    case 'torus':
      return new THREE.TorusGeometry(1.2, 0.5, 32, 64);
    default:
      return new THREE.TorusKnotGeometry(1.2, 0.4, 128, 32);
  }
}

export const Interactive3DSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const mainMeshRef = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const orbitGroupRef = useRef<THREE.Group | null>(null);
  const animFrameRef = useRef<number>(0);
  const startTimeRef = useRef(performance.now());

  const [shape, setShape] = useState('torusKnot');
  const [color, setColor] = useState('#6366f1');
  const [wireframe, setWireframe] = useState(true);
  const [distort, setDistort] = useState(0.4);
  const [speed, setSpeed] = useState(1);
  const [particleCount, setParticleCount] = useState(500);

  // Track latest state for animation loop
  const stateRef = useRef({ shape, color, wireframe, distort, speed, particleCount });
  useEffect(() => {
    stateRef.current = { shape, color, wireframe, distort, speed, particleCount };
  }, [shape, color, wireframe, distort, speed, particleCount]);

  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 6);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.insertBefore(renderer.domElement, container.firstChild);
    rendererRef.current = renderer;

    // Lighting - intensified and colorful for maximum shine
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 2.5, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 2.0, 100);
    pointLight2.position.set(-10, -10, -10);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x06b6d4, 2.0, 100);
    pointLight3.position.set(0, 10, -10);
    scene.add(pointLight3);

    // Main mesh with premium shining material
    const geometry = createGeometry('torusKnot');
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#6366f1'),
      metalness: 0.9,
      roughness: 0.05,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      iridescence: 0.8,
      iridescenceIOR: 1.5,
      sheen: 1.0,
      sheenColor: new THREE.Color('#ffffff'),
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    });
    const mainMesh = new THREE.Mesh(geometry, material);
    scene.add(mainMesh);
    mainMeshRef.current = mainMesh;

    // Particles
    const pCount = 500;
    const pPositions = new Float32Array(pCount * 3);
    const pColors = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      pPositions[i * 3] = (Math.random() - 0.5) * 20;
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      const c = new THREE.Color('#8b5cf6');
      pColors[i * 3] = c.r;
      pColors[i * 3 + 1] = c.g;
      pColors[i * 3 + 2] = c.b;
    }
    const pGeometry = new THREE.BufferGeometry();
    pGeometry.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    pGeometry.setAttribute('color', new THREE.BufferAttribute(pColors, 3));
    const pMaterial = new THREE.PointsMaterial({ size: 0.04, vertexColors: true, transparent: true, opacity: 0.6, sizeAttenuation: true });
    const particles = new THREE.Points(pGeometry, pMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Orbiting shapes
    const orbitGroup = new THREE.Group();
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 3 + Math.random();
      const y = (Math.random() - 0.5) * 3;
      const size = 0.1 + Math.random() * 0.15;
      const geo = new THREE.OctahedronGeometry(size, 0);
      const mat = new THREE.MeshStandardMaterial({ color: '#8b5cf6', metalness: 0.8, roughness: 0.2, transparent: true, opacity: 0.7 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
      orbitGroup.add(mesh);
    }
    scene.add(orbitGroup);
    orbitGroupRef.current = orbitGroup;

    // Mouse interaction for orbit controls
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };
    let rotationVelocity = { x: 0, y: 0 };

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouse.x;
      const dy = e.clientY - prevMouse.y;
      rotationVelocity.x += dy * 0.003;
      rotationVelocity.y += dx * 0.003;
      prevMouse = { x: e.clientX, y: e.clientY };
    };
    const handleMouseUp = () => { isDragging = false; };

    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    renderer.domElement.addEventListener('mousemove', handleMouseMove);
    renderer.domElement.addEventListener('mouseup', handleMouseUp);
    renderer.domElement.addEventListener('mouseleave', handleMouseUp);

    // Touch support
    const handleTouchStart = (e: TouchEvent) => {
      isDragging = true;
      prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const dx = e.touches[0].clientX - prevMouse.x;
      const dy = e.touches[0].clientY - prevMouse.y;
      rotationVelocity.x += dy * 0.003;
      rotationVelocity.y += dx * 0.003;
      prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const handleTouchEnd = () => { isDragging = false; };

    renderer.domElement.addEventListener('touchstart', handleTouchStart);
    renderer.domElement.addEventListener('touchmove', handleTouchMove);
    renderer.domElement.addEventListener('touchend', handleTouchEnd);

    // Animation
    const animate = () => {
      animFrameRef.current = requestAnimationFrame(animate);
      const elapsed = (performance.now() - startTimeRef.current) * 0.001;
      const s = stateRef.current;

      // Update main mesh geometry if shape changed
      if (mainMeshRef.current) {
        const currentGeo = mainMeshRef.current.geometry;
        const newGeo = createGeometry(s.shape);
        if (currentGeo !== newGeo) {
          mainMeshRef.current.geometry.dispose();
          mainMeshRef.current.geometry = newGeo;
        }
        // Update material
        const mat = mainMeshRef.current.material as THREE.MeshPhysicalMaterial;
        mat.color.set(s.color);
        mat.wireframe = s.wireframe;
        
        // Dynamic iridescence for 'shine' effect
        mat.iridescence = Math.sin(elapsed * 0.5) * 0.5 + 0.5;
        
        mainMeshRef.current.rotation.x = Math.sin(elapsed * s.speed * 0.3) * 0.5 + rotationVelocity.x;
        mainMeshRef.current.rotation.y += s.speed * 0.005 + rotationVelocity.y;
      }

      // Dampen rotation velocity
      rotationVelocity.x *= 0.95;
      rotationVelocity.y *= 0.95;

      // Animate particles
      if (particlesRef.current) {
        particlesRef.current.rotation.y = elapsed * 0.02;
        particlesRef.current.rotation.x = elapsed * 0.01;
        // Update particle count
        const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
        const currentCount = positions.length / 3;
        if (currentCount !== s.particleCount) {
          particlesRef.current.geometry.dispose();
          const newPositions = new Float32Array(s.particleCount * 3);
          const newColors = new Float32Array(s.particleCount * 3);
          const c = new THREE.Color(s.color);
          for (let i = 0; i < s.particleCount; i++) {
            newPositions[i * 3] = (Math.random() - 0.5) * 20;
            newPositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            newPositions[i * 3 + 2] = (Math.random() - 0.5) * 20;
            newColors[i * 3] = c.r;
            newColors[i * 3 + 1] = c.g;
            newColors[i * 3 + 2] = c.b;
          }
          const newGeo = new THREE.BufferGeometry();
          newGeo.setAttribute('position', new THREE.BufferAttribute(newPositions, 3));
          newGeo.setAttribute('color', new THREE.BufferAttribute(newColors, 3));
          particlesRef.current.geometry = newGeo;
        } else {
          const colors = particlesRef.current.geometry.attributes.color.array as Float32Array;
          const c = new THREE.Color(s.color);
          for (let i = 0; i < s.particleCount; i++) {
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
          }
          particlesRef.current.geometry.attributes.color.needsUpdate = true;
        }
      }

      // Animate orbit group
      if (orbitGroupRef.current) {
        orbitGroupRef.current.rotation.y = elapsed * 0.15 * s.speed;
        orbitGroupRef.current.children.forEach((child) => {
          const mesh = child as THREE.Mesh;
          const mat = mesh.material as THREE.MeshStandardMaterial;
          mat.color.set(s.color);
        });
      }

      // Update point light color
      pointLight1.color.set(s.color);

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousedown', handleMouseDown);
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      renderer.domElement.removeEventListener('mouseup', handleMouseUp);
      renderer.domElement.removeEventListener('mouseleave', handleMouseUp);
      renderer.domElement.removeEventListener('touchstart', handleTouchStart);
      renderer.domElement.removeEventListener('touchmove', handleTouchMove);
      renderer.domElement.removeEventListener('touchend', handleTouchEnd);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  const resetToDefault = () => {
    setShape('torusKnot');
    setColor('#6366f1');
    setWireframe(true);
    setDistort(0.4);
    setSpeed(1);
    setParticleCount(500);
  };

  return (
    <section id="3d-lab" className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-violet-500/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-3xl" />
      </div>

      <SectionWrapper className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 mb-6">
            <Zap className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-slate-300">Interactive 3D Playground</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              3D Design Lab
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Explore the intersection of code and creativity. Customize the 3D element below — 
            change shapes, colors, and animation parameters in real-time.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* 3D Canvas */}
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm" style={{ height: '500px' }}>
              <div ref={containerRef} className="absolute inset-0 cursor-grab active:cursor-grabbing" />

              {/* Canvas overlay hint */}
              <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-slate-950/80 backdrop-blur-sm rounded-lg border border-slate-800 z-10">
                <p className="text-xs text-slate-500 flex items-center gap-1.5">
                  <RotateCw className="w-3 h-3" />
                  Drag to rotate • Auto-rotates
                </p>
              </div>
            </div>
          </div>

          {/* Controls Panel */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800 backdrop-blur-sm border border-slate-600 rounded-2xl p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Settings2 className="w-5 h-5 text-violet-400" />
                <h3 className="text-lg font-semibold text-white">Customize</h3>
              </div>

              {/* Shape Selector */}
              <div className="mb-6">
                <label className="text-sm font-medium text-slate-200 mb-3 block">Shape</label>
                <div className="grid grid-cols-3 gap-2">
                  {shapeOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setShape(opt.id)}
                      className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all duration-200 text-xs font-medium ${
                        shape === opt.id
                          ? 'bg-violet-500/30 border-violet-400 text-violet-200 shadow-lg shadow-violet-500/20'
                          : 'bg-slate-700 border-slate-500 text-slate-200 hover:border-violet-400 hover:bg-slate-600'
                      }`}
                    >
                      {opt.icon}
                      <span className="truncate">{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selector */}
              <div className="mb-6">
                <label className="text-sm font-medium text-slate-200 mb-3 flex items-center gap-2">
                  <Palette className="w-4 h-4 text-violet-400" />
                  Color
                </label>
                <div className="flex flex-wrap gap-2">
                  {colorOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setColor(opt.id)}
                      className={`w-9 h-9 rounded-lg ${opt.class} transition-all duration-200 border-2 ${
                        color === opt.id
                          ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-800 scale-110 border-white'
                          : 'border-transparent hover:scale-110 hover:border-white/50'
                      }`}
                      title={opt.label}
                    />
                  ))}
                </div>
              </div>

              {/* Wireframe Toggle */}
              <div className="mb-6">
                <label className="text-sm font-medium text-slate-200 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  Wireframe
                </label>
                <button
                  onClick={() => setWireframe(!wireframe)}
                  className={`w-full py-2.5 rounded-xl border-2 transition-all duration-200 text-sm font-semibold ${
                    wireframe
                      ? 'bg-violet-500/30 border-violet-400 text-violet-200 shadow-lg shadow-violet-500/20'
                      : 'bg-slate-700 border-slate-500 text-slate-200 hover:border-violet-400 hover:bg-slate-600'
                  }`}
                >
                  {wireframe ? '✦ Wireframe ON' : '○ Wireframe OFF'}
                </button>
              </div>

              {/* Distortion Slider */}
              <div className="mb-5">
                <label className="text-sm font-medium text-slate-200 mb-2 flex justify-between">
                  <span>Distortion</span>
                  <span className="text-violet-300 font-mono">{distort.toFixed(2)}</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={distort}
                  onChange={(e) => setDistort(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-violet-400"
                />
              </div>

              {/* Speed Slider */}
              <div className="mb-5">
                <label className="text-sm font-medium text-slate-200 mb-2 flex justify-between">
                  <span>Speed</span>
                  <span className="text-cyan-300 font-mono">{speed.toFixed(1)}x</span>
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="3"
                  step="0.1"
                  value={speed}
                  onChange={(e) => setSpeed(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
              </div>

              {/* Particle Count */}
              <div className="mb-2">
                <label className="text-sm font-medium text-slate-200 mb-2 flex justify-between">
                  <span>Particles</span>
                  <span className="text-emerald-300 font-mono">{particleCount}</span>
                </label>
                <input
                  type="range"
                  min="100"
                  max="1500"
                  step="100"
                  value={particleCount}
                  onChange={(e) => setParticleCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
              </div>

              {/* Reset Button */}
              <button
                onClick={resetToDefault}
                className="w-full mt-6 py-2.5 bg-slate-700 border-2 border-slate-500 rounded-xl text-slate-200 hover:text-white hover:border-violet-400 hover:bg-slate-600 transition-all duration-200 text-sm font-semibold"
              >
                ↺ Reset to Default
              </button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};
