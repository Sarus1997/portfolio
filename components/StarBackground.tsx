"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface StarLayer extends THREE.Points {
  opacities: number[];
  twinkleSpeed: number[];
  rotationSpeed: number;
}

const EnhancedStarBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const fallingStars = useRef<THREE.Group[]>([]);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    //* พื้นผิวดาวที่ได้รับการปรับปรุงพร้อมการเรืองแสง
    const createStarTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.2, "rgba(255, 255, 255, 0.8)");
      gradient.addColorStop(0.4, "rgba(255, 255, 255, 0.4)");
      gradient.addColorStop(0.7, "rgba(255, 255, 255, 0.1)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);

      return new THREE.CanvasTexture(canvas);
    };

    const starTexture = createStarTexture();

    const createStarLayer = (
      count: number,
      size: number,
      color: number,
      distance: number,
      baseSpeed: number
    ): StarLayer => {
      const geometry = new THREE.BufferGeometry();
      const vertices: number[] = [];
      const opacities: number[] = [];
      const twinkleSpeed: number[] = [];

      for (let i = 0; i < count; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const r = distance * Math.cbrt(Math.random());

        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        vertices.push(x, y, z);
        opacities.push(Math.random() * Math.PI * 2);
        twinkleSpeed.push(Math.random() * 0.02 + 0.01);
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(vertices, 3)
      );

      const material = new THREE.PointsMaterial({
        color,
        size,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        map: starTexture || undefined,
        depthWrite: false,
        sizeAttenuation: true,
      });

      const points = new THREE.Points(
        geometry,
        material
      ) as unknown as StarLayer;
      points.opacities = opacities;
      points.twinkleSpeed = twinkleSpeed;
      points.rotationSpeed = baseSpeed;
      return points;
    };

    //* ชั้นดาวผสมหลากสีสันที่มีการเคลื่อนไหวช้ามาก
    const starLayers = [
      createStarLayer(150, 0.025, 0xffffff, 2.0, 0.0000008), //* White bright stars
      createStarLayer(200, 0.02, 0xadd8e6, 1.8, 0.000001), //* Light blue
      createStarLayer(300, 0.018, 0xffe4e1, 1.6, 0.0000012), //* Soft pink
      createStarLayer(400, 0.015, 0xe0ffff, 1.4, 0.0000015), //* Cyan
      createStarLayer(500, 0.012, 0xffd700, 1.2, 0.0000009), //* Gold
      createStarLayer(600, 0.01, 0xdda0dd, 1.0, 0.0000011), //* Plum
      createStarLayer(800, 0.008, 0x87ceeb, 0.8, 0.0000013), //* Sky blue
      createStarLayer(300, 0.015, 0xff69b4, 1.5, 0.000001), //* Hot pink
      createStarLayer(250, 0.013, 0x98fb98, 1.3, 0.0000012), //* Pale green
      createStarLayer(350, 0.011, 0xffa07a, 1.1, 0.000001), //* Light salmon
      createStarLayer(200, 0.016, 0xb0e0e6, 1.7, 0.0000009), //* Powder blue
      createStarLayer(180, 0.014, 0xffb6c1, 1.4, 0.0000013), //* Light pink
      createStarLayer(220, 0.012, 0xe6e6fa, 1.2, 0.000001), //* Lavender
      createStarLayer(280, 0.01, 0xffefd5, 0.9, 0.0000012), //* Papaya whip
    ];

    starLayers.forEach((layer) => scene.add(layer));

    //* ดาวตกแบบสมจริง (อุกกาบาต)
    const createFallingStar = () => {
      const group = new THREE.Group();

      //* แกนสีขาว-น้ำเงินสดใส (อุกกาบาตร้อน)
      const coreGeometry = new THREE.SphereGeometry(0.006, 8, 8);
      const coreMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffee,
        transparent: true,
        opacity: 1,
      });
      const core = new THREE.Mesh(coreGeometry, coreMaterial);

      //* แสงเรืองรองภายใน (ขาว-เหลือง)
      const innerGlowGeometry = new THREE.SphereGeometry(0.012, 8, 8);
      const innerGlowMaterial = new THREE.MeshBasicMaterial({
        color: 0xffeeaa,
        transparent: true,
        opacity: 0.7,
      });
      const innerGlow = new THREE.Mesh(innerGlowGeometry, innerGlowMaterial);

      //* แสงเรืองรองภายนอก (สีส้ม)
      const outerGlowGeometry = new THREE.SphereGeometry(0.02, 8, 8);
      const outerGlowMaterial = new THREE.MeshBasicMaterial({
        color: 0xff8833,
        transparent: true,
        opacity: 0.4,
      });
      const outerGlow = new THREE.Mesh(outerGlowGeometry, outerGlowMaterial);

      //* เส้นทางลาดเอียงยาว
      const trailSegments = 12;
      for (let i = 0; i < trailSegments; i++) {
        const progress = i / trailSegments;
        const size = 0.003 * (1 - progress * 0.7);
        const length = 0.08;

        const segmentGeometry = new THREE.ConeGeometry(size, length, 6);
        const opacity = (1 - progress) * 0.6;

        //* ไล่เฉดสีจากเหลืองส้มไปจนถึงแดง
        const color = new THREE.Color();
        color.setHSL(0.08 - progress * 0.08, 1, 0.5);

        const segmentMaterial = new THREE.MeshBasicMaterial({
          color: color,
          transparent: true,
          opacity: opacity,
        });

        const segment = new THREE.Mesh(segmentGeometry, segmentMaterial);
        segment.position.y = -0.04 - i * length * 0.95;
        segment.rotation.x = Math.PI;

        group.add(segment);
      }

      group.add(outerGlow);
      group.add(innerGlow);
      group.add(core);

      //* เริ่มจากขวาบน เลื่อนไปทางซ้ายเฉียงลง (เส้นทางอุกกาบาตที่สมจริง)
      const startX = Math.random() * 2 + 1;
      const startY = Math.random() * 1 + 1.5;
      const startZ = Math.random() * 0.5 - 0.25;

      group.position.set(startX, startY, startZ);

      //* การเคลื่อนไหวแบบทแยงมุม (45-60 องศา)
      const speed = Math.random() * 0.008 + 0.012;
      const angle = Math.PI * (0.2 + Math.random() * 0.15); //* 36-54 องศา

      group.userData.velocity = {
        x: -Math.cos(angle) * speed,
        y: -Math.sin(angle) * speed,
        z: (Math.random() - 0.5) * speed * 0.15,
      };

      //* คำนวณการหมุนให้สอดคล้องกับทิศทางการเคลื่อนที่
      const moveAngle = Math.atan2(
        group.userData.velocity.y,
        group.userData.velocity.x
      );
      group.rotation.z = moveAngle - Math.PI / 2;

      group.userData.life = 1.0;
      group.userData.speedDecay = 0.9995;

      scene.add(group);
      fallingStars.current.push(group);
    };

    const fallingStarInterval = setInterval(createFallingStar, 3000);

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.000001; //* ลดลงอีก 10 เท่า ให้เดินช้ากว่าเดิมมาก

      //* เคลื่อนไหวชั้นดาวด้วยการเคลื่อนไหวช้ามาก
      starLayers.forEach((layer, index) => {
        layer.rotation.y += layer.rotationSpeed * 0.5; //* ลด rotation ให้ช้าลง
        layer.rotation.x = Math.sin(time * 0.005 + index) * 0.005; //* oscillation เล็กและช้าลง

        const positions = layer.geometry.attributes.position
          .array as Float32Array;

        for (let i = 0; i < layer.opacities.length; i++) {
          layer.opacities[i] += layer.twinkleSpeed[i] * 0.2; //* twinkle ช้าลง

          const idx = i * 3;
          const baseY = positions[idx + 1];
          positions[idx + 1] = baseY + Math.sin(time * 0.02 + i) * 0.00005; //* การเคลื่อนที่แกน Y ช้ามาก

          //* ⭐ เพิ่ม movement แนวนอน (X-axis) แบบช้าๆ
          const baseX = positions[idx];
          positions[idx] = baseX + Math.sin(time * 0.015 + i * 0.3) * 0.00005;
        }

        layer.geometry.attributes.position.needsUpdate = true;
        (layer.material as THREE.PointsMaterial).opacity =
          0.6 + Math.sin(time * 0.05) * 0.01; //* opacity change ช้าลง
      });

      //* แอนิเมชั่น ดาวตก (อุกกาบาต)
      fallingStars.current.forEach((group, index) => {
        group.userData.velocity.x *= group.userData.speedDecay;
        group.userData.velocity.y *= group.userData.speedDecay;
        group.userData.velocity.z *= group.userData.speedDecay;

        group.position.x += group.userData.velocity.x;
        group.position.y += group.userData.velocity.y;
        group.position.z += group.userData.velocity.z;

        group.userData.life -= 0.003; //* decay ช้าลง

        const life = Math.max(group.userData.life, 0);

        group.children.forEach((child, idx) => {
          if (
            child instanceof THREE.Mesh &&
            child.material instanceof THREE.MeshBasicMaterial
          ) {
            if (idx >= group.children.length - 3) {
              child.material.opacity = life;
            } else {
              const baseOpacity = (1 - idx / (group.children.length - 3)) * 0.6;
              child.material.opacity = baseOpacity * life;
            }
          }
        });

        if (
          group.position.y < -2 ||
          group.position.x < -3 ||
          group.userData.life <= 0
        ) {
          scene.remove(group);
          group.children.forEach((child) => {
            if (child instanceof THREE.Mesh) {
              child.geometry.dispose();
              (child.material as THREE.Material).dispose();
            }
          });
          fallingStars.current.splice(index, 1);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(fallingStarInterval);
      if (mountRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);

      starLayers.forEach((layer) => {
        layer.geometry.dispose();
        (layer.material as THREE.PointsMaterial).dispose();
      });

      // eslint-disable-next-line react-hooks/exhaustive-deps
      fallingStars.current.forEach((group) => {
        group.children.forEach((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry.dispose();
            (child.material as THREE.Material).dispose();
          }
        });
      });

      starTexture?.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -10,
        overflow: "hidden",
        background: `
      radial-gradient(circle at 20% 20%, rgba(20, 30, 60, 0.5), transparent 35%),
      radial-gradient(circle at 80% 80%, rgba(50, 10, 70, 0.4), transparent 35%),
      radial-gradient(ellipse at center, #01040c 0%, #000612 40%, #000000 100%)
    `,
      }}
    />
  );
};

export default EnhancedStarBackground;
