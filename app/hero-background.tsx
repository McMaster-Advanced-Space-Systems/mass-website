"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// 3D value noise (trilinear interpolation of hashed lattice points)
function hash3(x: number, y: number, z: number) {
  const s = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453;
  return s - Math.floor(s);
}

function valueNoise3(x: number, y: number, z: number) {
  const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
  const xf = x - xi, yf = y - yi, zf = z - zi;
  const sx = xf * xf * (3 - 2 * xf);
  const sy = yf * yf * (3 - 2 * yf);
  const sz = zf * zf * (3 - 2 * zf);
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
  return lerp(
    lerp(
      lerp(hash3(xi, yi, zi), hash3(xi + 1, yi, zi), sx),
      lerp(hash3(xi, yi + 1, zi), hash3(xi + 1, yi + 1, zi), sx),
      sy
    ),
    lerp(
      lerp(hash3(xi, yi, zi + 1), hash3(xi + 1, yi, zi + 1), sx),
      lerp(hash3(xi, yi + 1, zi + 1), hash3(xi + 1, yi + 1, zi + 1), sx),
      sy
    ),
    sz
  );
}

function fbm(x: number, y: number, z: number) {
  let value = 0;
  let amplitude = 0.5;
  let frequency = 1;
  for (let i = 0; i < 5; i++) {
    value += amplitude * valueNoise3(x * frequency, y * frequency, z * frequency);
    amplitude *= 0.5;
    frequency *= 2;
  }
  return value;
}

// Equirectangular earth-like texture: noise continents over ocean, polar ice
function createPlanetTexture() {
  const width = 1024;
  const height = 512;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;
  const image = ctx.createImageData(width, height);
  const data = image.data;

  for (let y = 0; y < height; y++) {
    const lat = (y / height - 0.5) * Math.PI;
    for (let x = 0; x < width; x++) {
      const lon = (x / width) * Math.PI * 2;
      // sample noise on the sphere surface so the texture wraps seamlessly
      const nx = Math.cos(lat) * Math.cos(lon) * 3.4;
      const ny = Math.sin(lat) * 3.4;
      const nz = Math.cos(lat) * Math.sin(lon) * 3.4;
      const n = fbm(nx, ny, nz);

      let r: number, g: number, b: number;
      if (n > 0.52) {
        // land: green lowlands to brown highlands
        const t = Math.min((n - 0.52) / 0.35, 1);
        r = 55 + t * 60;
        g = 125 - t * 40;
        b = 55 - t * 20;
      } else {
        // ocean: deep to shallow blue
        const t = Math.pow(n / 0.5, 2);
        r = 6 + t * 20;
        g = 30 + t * 55;
        b = 70 + t * 100;
      }
      // polar ice caps
      const ice = Math.abs(lat) / (Math.PI / 2) + n * 0.12;
      if (ice > 0.86) {
        const t = Math.min((ice - 0.86) / 0.08, 1);
        r = r + (235 - r) * t;
        g = g + (240 - g) * t;
        b = b + (245 - b) * t;
      }
      const i = (y * width + x) * 4;
      data[i] = r;
      data[i + 1] = g;
      data[i + 2] = b;
      data[i + 3] = 255;
    }
  }
  ctx.putImageData(image, 0, 0);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current!;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 10;

    // Planet
    const texture = createPlanetTexture();
    const planet = new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 64),
      new THREE.MeshStandardMaterial({ map: texture, roughness: 0.9 })
    );
    planet.rotation.z = THREE.MathUtils.degToRad(-15); // axial tilt
    scene.add(planet);

    // Atmosphere: fresnel rim glow on a slightly larger back-facing sphere
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(1.06, 64, 64),
      new THREE.ShaderMaterial({
        vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          void main() {
            float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, -1.0)), 3.0);
            gl_FragColor = vec4(0.35, 0.6, 1.0, 1.0) * intensity;
          }
        `,
        side: THREE.BackSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
      })
    );
    scene.add(atmosphere);

    // Lighting
    const sun = new THREE.DirectionalLight(0xffffff, 2.2);
    sun.position.set(-4, 3, 5);
    scene.add(sun);
    scene.add(new THREE.AmbientLight(0x334466, 0.5));

    // Stars
    const starCount = 900;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = -12 - Math.random() * 10;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const stars = new THREE.Points(
      starGeometry,
      new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.07,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.85,
      })
    );
    scene.add(stars);

    // Anchor the planet to the bottom-right corner of the viewport
    const layout = () => {
      const aspect = window.innerWidth / window.innerHeight;
      camera.aspect = aspect;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
      const halfW = halfH * aspect;
      const radius = Math.min(halfW, halfH) * 0.55;
      planet.scale.setScalar(radius);
      atmosphere.scale.setScalar(radius);
      planet.position.set(halfW - radius * 0.85, -halfH + radius * 0.6, 0);
      atmosphere.position.copy(planet.position);
    };
    layout();
    window.addEventListener("resize", layout);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frameId = 0;
    const animate = () => {
      planet.rotation.y += 0.0012;
      stars.rotation.z += 0.00005;
      renderer.render(scene, camera);
      if (!reducedMotion) frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", layout);
      planet.geometry.dispose();
      (planet.material as THREE.Material).dispose();
      atmosphere.geometry.dispose();
      (atmosphere.material as THREE.Material).dispose();
      starGeometry.dispose();
      stars.material.dispose();
      texture.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
