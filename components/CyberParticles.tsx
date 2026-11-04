'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  pulseSpeed: number;
}

export function CyberParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Cyberpunk color palette: vibrant yellow, neon crimson, electric cyan, pure ghost white
    const colors = ['#fcee0a', '#ff003c', '#ffffff', '#00f0ff'];
    // Sized for high visibility across desktop & mobile screens
    const particleCount = Math.min(68, Math.max(36, Math.floor((width * height) / 16000)));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: -Math.random() * 0.55 - 0.25, // steady upward drift
        size: Math.random() * 2.4 + 1.4, // larger, distinct ember size (up to 3.8px)
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.45, // bold alpha between 0.45 and 0.85
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    let frame = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      frame++;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Subtle shimmering pulse
        const dynamicAlpha = Math.min(
          1,
          Math.max(0.3, p.alpha + Math.sin(frame * p.pulseSpeed) * 0.15)
        );

        // Wrap around viewport edges
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        // Render glowing particle
        ctx.save();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = dynamicAlpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.size > 2 ? 8 : 4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Connect nearby particles with luminous cyber laser lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            ctx.save();
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = (1 - dist / 115) * 0.28;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            ctx.restore();
          }
        }

        // Connect to mouse cursor with bright glowing cyber thread
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 135) {
          ctx.save();
          ctx.strokeStyle = '#fcee0a';
          ctx.shadowColor = '#fcee0a';
          ctx.shadowBlur = 6;
          ctx.globalAlpha = (1 - mDist / 135) * 0.55;
          ctx.lineWidth = 1.3;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-100"
    />
  );
}
