'use client';

import React from 'react';
import { ArrowRight, Palette, Mail, Gamepad2, Sparkles } from 'lucide-react';
import { cyberAudio } from '@/lib/sounds';

interface HeroProps {
  onExploreProjects?: () => void;
  onExploreDesign?: () => void;
}

export function Hero({ onExploreProjects, onExploreDesign }: HeroProps) {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-[#222533] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#fcee0a]/4 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-[#ff003c]/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center sm:text-left">
        {/* Status Pills */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-6 text-xs font-mono">
          <div
            onMouseEnter={() => cyberAudio.playHover()}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#13141c]/90 border border-[#fcee0a]/40 text-[#fcee0a] cursor-default transition-colors hover:border-[#fcee0a]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#fcee0a] animate-ping" />
            <span>B.Tech CSE &apos;27 // Final Year</span>
          </div>

          <div
            onMouseEnter={() => cyberAudio.playHover()}
            className="inline-flex items-center gap-2 px-3 py-1 bg-[#13141c]/90 border border-[#222533] text-[#d1d5db] cursor-default transition-colors hover:border-emerald-400"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Available for Frontend Roles</span>
          </div>

          <a
            href="https://missstaticmoth.itch.io/gangling-bros-forest"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => cyberAudio.playClick()}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 bg-[#13141c]/90 border border-[#ff003c]/40 text-[#ff003c] hover:bg-[#ff003c]/10 transition-colors"
          >
            <Gamepad2 size={13} />
            <span>3D Horror on itch.io ↗</span>
          </a>
        </div>

        {/* Main Name with Interactive Glitch Effect */}
        <h1
          onMouseEnter={() => cyberAudio.playHover()}
          onClick={() => cyberAudio.playLaser()}
          className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-4 glitch-hover cursor-pointer select-none"
        >
          <span className="text-[#f5f6fa]">Sinjini</span>{' '}
          <span className="text-[#fcee0a] text-glow-yellow">
            Ghosh<span className="text-[#ff003c]">.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <div className="flex items-center justify-center sm:justify-start gap-3 mb-6">
          <span
            onMouseEnter={() => cyberAudio.playHover()}
            className="px-2 py-0.5 bg-[#ff003c] text-white font-bold text-xs clip-tag-slant font-mono cursor-default"
          >
            DR-GHOST7
          </span>
          <span className="text-base sm:text-xl text-[#8a8f9d] font-mono tracking-wide">
            Frontend Developer &amp; Visual Designer
          </span>
        </div>

        {/* Short, Clutter-Free Bio */}
        <div className="max-w-2xl p-5 bg-[#13141c]/80 backdrop-blur-sm border-l-4 border-[#fcee0a] border-y border-r border-[#222533] mb-8">
          <p className="text-sm sm:text-base text-[#e1e4ed] leading-relaxed">
            Final-year <strong>Computer Science &amp; Engineering</strong> student crafting responsive web applications with <strong>React.js &amp; Next.js 15</strong>, grounded in low-level <strong>JavaScript &amp; HTML/CSS</strong> mastery.
          </p>
          <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed mt-2">
            Creator of <strong>TypeLock</strong> (behavioral biometrics), <strong>Gangling Bro&apos;s Forest</strong> (3D horror on itch.io), and visual graphics in <strong>Canva &amp; Ibis Paint X</strong>.
          </p>
        </div>

        {/* Clean Action Buttons */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
          <a
            href="#projects"
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => {
              cyberAudio.playClick();
              onExploreProjects?.();
            }}
            className="px-6 py-3 bg-[#fcee0a] text-black font-extrabold text-xs sm:text-sm tracking-widest uppercase hover:bg-white transition-all clip-cyber-button flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(252,238,10,0.35)]"
          >
            <span>EXPLORE WORK</span>
            <ArrowRight size={15} />
          </a>

          <a
            href="#projects"
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => {
              cyberAudio.playClick();
              onExploreDesign?.();
            }}
            className="px-6 py-3 bg-[#13141c] text-[#f5f6fa] hover:text-[#ff003c] border border-[#222533] hover:border-[#ff003c] font-bold text-xs sm:text-sm tracking-widest uppercase transition-all clip-cyber-button flex items-center gap-2 cursor-pointer"
          >
            <Palette size={15} className="text-[#ff003c]" />
            <span>GRAPHICS &amp; ART</span>
          </a>

          <a
            href="#contact"
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => cyberAudio.playClick()}
            className="px-5 py-3 bg-transparent text-[#8a8f9d] hover:text-[#fcee0a] border border-[#222533] hover:border-[#fcee0a] font-medium text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer"
          >
            <Mail size={14} />
            <span>CONTACT</span>
          </a>
        </div>
      </div>
    </section>
  );
}
