'use client';

import React from 'react';
import { Terminal, Shield, Zap, Sparkles, ArrowRight, Code2, Palette, Gamepad2 } from 'lucide-react';
import { cyberAudio } from '@/lib/sounds';

interface HeroProps {
  onExploreProjects?: () => void;
  onExploreDesign?: () => void;
}

export function Hero({ onExploreProjects, onExploreDesign }: HeroProps) {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#222533] cyber-grid-bg overflow-hidden">
      {/* Background ambient neon glow spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#fcee0a]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[350px] h-[350px] bg-[#ff003c]/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Terminal Header Telemetry */}
        <div className="flex flex-wrap items-center gap-3 text-xs mb-6 text-[#8a8f9d]">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#13141c] border border-[#222533]">
            <span className="w-2 h-2 rounded-full bg-[#fcee0a]" />
            <span className="text-[#f5f6fa]">PROTOCOL: <span className="text-[#fcee0a]">REACT_NEXT_HUD</span></span>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-[#13141c] border border-[#222533]">
            <span className="text-[#8a8f9d]">LOCATION:</span>
            <span className="text-[#f5f6fa]">GLOBAL_GRID</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-[#13141c] border border-[#ff003c]/40 text-[#ff003c]">
            <Shield size={12} />
            <span>FRONTEND // VISUAL DESIGN // GAMEDEV</span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter uppercase leading-none mb-4">
              <span className="block text-[#f5f6fa]">SINJINI</span>
              <span className="block text-[#fcee0a] text-glow-yellow">
                GHOSH<span className="text-[#ff003c]">.</span>
              </span>
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <span className="px-2 py-0.5 bg-[#ff003c] text-white font-bold text-xs clip-tag-slant">
                ALIAS
              </span>
              <span className="text-lg md:text-xl text-[#8a8f9d] tracking-widest font-mono">
                DR-GHOST7 // MISS_STATICMOTH
              </span>
            </div>

            {/* Recruiter Punchline */}
            <div className="p-4 sm:p-5 bg-[#13141c] border-l-4 border-[#fcee0a] border-y border-r border-[#222533] mb-8 relative">
              <div className="text-[11px] font-bold text-[#fcee0a] uppercase tracking-wider mb-1 flex items-center gap-2">
                <Zap size={13} className="text-[#fcee0a]" />
                BRIDGING FOUNDATIONS TO PRODUCTION ARCHITECTURE
              </div>
              <p className="text-sm sm:text-base text-[#d1d5db] leading-relaxed">
                Trained through deep, low-level mastery of{' '}
                <strong className="text-white font-bold">Vanilla JavaScript, HTML5 & CSS3</strong>, now engineered in high gear using{' '}
                <strong className="text-[#fcee0a]">React 19</strong> and{' '}
                <strong className="text-[#fcee0a]">Next.js 15 App Router</strong>. Combining analytical computational rigor (AI simulations & game engineering) with a refined eye for{' '}
                <strong className="text-[#ff003c]">graphic design systems</strong> and high-contrast digital aesthetics.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                onClick={() => {
                  cyberAudio.playClick();
                  onExploreProjects?.();
                }}
                className="px-6 py-3 bg-[#fcee0a] text-black font-extrabold text-xs sm:text-sm tracking-widest uppercase hover:bg-white hover:shadow-[0_0_20px_rgba(252,238,10,0.6)] transition-all clip-cyber-button flex items-center gap-2 cursor-pointer"
              >
                <span>VIEW WEB & CODE WORKS</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#projects"
                onClick={() => {
                  cyberAudio.playClick();
                  onExploreDesign?.();
                }}
                className="px-6 py-3 bg-[#13141c] text-[#f5f6fa] hover:text-[#ff003c] border border-[#222533] hover:border-[#ff003c] font-bold text-xs sm:text-sm tracking-widest uppercase transition-all clip-cyber-button flex items-center gap-2 cursor-pointer"
              >
                <Palette size={16} className="text-[#ff003c]" />
                <span>GRAPHIC DESIGN CASE STUDIES</span>
              </a>

              <a
                href="#contact"
                onClick={() => cyberAudio.playClick()}
                className="px-5 py-3 bg-transparent text-[#8a8f9d] hover:text-[#fcee0a] border border-[#222533] hover:border-[#fcee0a] font-medium text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center gap-2"
              >
                <Terminal size={15} />
                <span>TERMINAL TRANSMISSION</span>
              </a>
            </div>
          </div>

          {/* Right column: HUD Diagnostic Telemetry Box */}
          <div className="lg:col-span-4">
            <div className="p-5 bg-[#0d0e13] border border-[#222533] relative">
              {/* Corner tech indicators */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#fcee0a]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#ff003c]" />

              <div className="text-xs font-bold text-[#8a8f9d] border-b border-[#222533] pb-2 mb-4 flex items-center justify-between">
                <span>SYSTEM_TELEMETRY</span>
                <span className="text-[#fcee0a]">[ V1.0.4 ]</span>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-[#222533]/60">
                  <span className="text-[#8a8f9d]">PRIMARY FOCUS</span>
                  <span className="text-[#fcee0a] font-bold">FRONTEND & UI/UX</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#222533]/60">
                  <span className="text-[#8a8f9d]">MODERN STACK</span>
                  <span className="text-white font-mono">REACT 19 // NEXT.JS 15</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#222533]/60">
                  <span className="text-[#8a8f9d]">FOUNDATIONAL</span>
                  <span className="text-[#8a8f9d]">VANILLA JS // HTML5/CSS3</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#222533]/60">
                  <span className="text-[#8a8f9d]">VISUAL DESIGN</span>
                  <span className="text-[#ff003c] font-bold">FIGMA // PHOTOSHOP // AI</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#222533]/60">
                  <span className="text-[#8a8f9d]">GAMEDEV & AI</span>
                  <span className="text-white">GODOT // GDSCRIPT // PYTHON</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#8a8f9d]">STATUS</span>
                  <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 text-[10px] font-bold">
                    AVAILABLE FOR HIRE
                  </span>
                </div>
              </div>

              {/* Mini visual indicator */}
              <div className="mt-5 pt-4 border-t border-[#222533]">
                <div className="text-[10px] text-[#8a8f9d] mb-1 flex justify-between">
                  <span>INTERFACE_OPTIMIZATION</span>
                  <span className="text-[#fcee0a]">100% LIGHTHOUSE</span>
                </div>
                <div className="w-full h-1.5 bg-[#14151f] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#ff003c] via-[#fcee0a] to-emerald-400 w-full animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
