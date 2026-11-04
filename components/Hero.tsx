'use client';

import React from 'react';
import { GraduationCap, ArrowRight, Palette, Mail, Activity, Sparkles } from 'lucide-react';
import { CyberParticles } from '@/components/CyberParticles';
import { cyberAudio } from '@/lib/sounds';

interface HeroProps {
  onExploreProjects?: () => void;
  onExploreDesign?: () => void;
}

export function Hero({ onExploreProjects, onExploreDesign }: HeroProps) {
  return (
    <section className="relative pt-10 pb-14 md:pt-16 md:pb-20 border-b border-[#222533] cyber-grid-bg overflow-hidden">
      {/* Interactive moving cyber particle canvas */}
      <CyberParticles />

      {/* Ambient neon glow spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#fcee0a]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[350px] h-[350px] bg-[#ff003c]/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pointer-events-none">
        {/* Status Bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs mb-5 text-[#8a8f9d] pointer-events-auto">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#13141c]/90 backdrop-blur-sm border border-[#fcee0a]/40 text-[#fcee0a]">
            <GraduationCap size={14} />
            <span className="font-semibold font-mono">B.Tech CSE // Final Year (Class of &apos;27)</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 bg-[#13141c]/90 backdrop-blur-sm border border-[#222533]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[#f5f6fa] font-mono">Available for Frontend Roles</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-[#13141c]/90 backdrop-blur-sm border border-[#ff003c]/40 text-[#ff003c]">
            <Activity size={12} className="animate-pulse" />
            <span className="font-mono">3D Horror Game on itch.io</span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 pointer-events-auto">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter uppercase leading-none mb-3">
              <span className="block text-[#f5f6fa]">Sinjini</span>
              <span className="block text-[#fcee0a] text-glow-yellow">
                Ghosh<span className="text-[#ff003c]">.</span>
              </span>
            </h1>

            <div className="flex items-center gap-3 mb-5">
              <span className="px-2 py-0.5 bg-[#ff003c] text-white font-bold text-xs clip-tag-slant font-mono">
                DEVELOPER &amp; DESIGNER
              </span>
              <span className="text-sm md:text-base text-[#8a8f9d] font-mono">
                Dr-Ghost7 / Miss_StaticMoth
              </span>
            </div>

            {/* Concise Organic Introduction */}
            <div className="p-4 sm:p-5 bg-[#13141c]/90 backdrop-blur-sm border-l-4 border-[#fcee0a] border-y border-r border-[#222533] mb-6 relative">
              <p className="text-sm sm:text-base text-[#e1e4ed] leading-relaxed mb-2">
                Final-year <strong>Computer Science &amp; Engineering</strong> student building responsive web applications with <strong>React.js &amp; Next.js 15</strong>, grounded in low-level <strong>JavaScript &amp; HTML/CSS</strong> mastery.
              </p>
              <p className="text-xs sm:text-sm text-[#9ca3af] leading-relaxed">
                Developer of <strong>TypeLock</strong> (behavioral biometrics), <strong>Gangling Bro&apos;s Forest</strong> (3D horror on itch.io), and creator of visual designs in <strong>Canva &amp; Ibis Paint X</strong>.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3.5">
              <a
                href="#projects"
                onClick={() => {
                  cyberAudio.playClick();
                  onExploreProjects?.();
                }}
                className="px-5 py-2.5 bg-[#fcee0a] text-black font-extrabold text-xs sm:text-sm tracking-widest uppercase hover:bg-white transition-all clip-cyber-button flex items-center gap-2 cursor-pointer"
              >
                <span>EXPLORE WORK</span>
                <ArrowRight size={15} />
              </a>

              <a
                href="#projects"
                onClick={() => {
                  cyberAudio.playClick();
                  onExploreDesign?.();
                }}
                className="px-5 py-2.5 bg-[#13141c] text-[#f5f6fa] hover:text-[#ff003c] border border-[#222533] hover:border-[#ff003c] font-bold text-xs sm:text-sm tracking-widest uppercase transition-all clip-cyber-button flex items-center gap-2 cursor-pointer"
              >
                <Palette size={15} className="text-[#ff003c]" />
                <span>GRAPHICS &amp; ART</span>
              </a>

              <a
                href="#contact"
                onClick={() => cyberAudio.playClick()}
                className="px-4 py-2.5 bg-transparent text-[#8a8f9d] hover:text-[#fcee0a] border border-[#222533] hover:border-[#fcee0a] font-medium text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer"
              >
                <Mail size={14} />
                <span>CONTACT</span>
              </a>
            </div>
          </div>

          {/* Right column: Highlights Summary Card with Animated Equalizer */}
          <div className="lg:col-span-4 pointer-events-auto">
            <div className="p-4 sm:p-5 bg-[#0d0e13]/95 backdrop-blur-sm border border-[#222533] relative clip-cyber-card">
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#fcee0a]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#ff003c]" />

              <div className="text-xs font-bold text-[#8a8f9d] border-b border-[#222533] pb-2 mb-3 flex items-center justify-between font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>TELEMETRY</span>
                </div>
                {/* Dancing Equalizer Waveform */}
                <div className="flex items-end gap-1 h-4">
                  <span className="w-1 bg-[#fcee0a] eq-bar-1" />
                  <span className="w-1 bg-[#ff003c] eq-bar-2" />
                  <span className="w-1 bg-[#fcee0a] eq-bar-3" />
                  <span className="w-1 bg-emerald-400 eq-bar-4" />
                </div>
              </div>

              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex justify-between items-center py-1 border-b border-[#222533]/60">
                  <span className="text-[#8a8f9d]">STATUS</span>
                  <span className="text-white font-semibold">B.Tech CSE (Mid-2027)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#222533]/60">
                  <span className="text-[#8a8f9d]">WEB STACK</span>
                  <span className="text-[#fcee0a] font-bold">React 19 // Next.js 15</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#222533]/60">
                  <span className="text-[#8a8f9d]">GAME DEV</span>
                  <span className="text-[#ff003c] font-bold">3D Horror (Godot)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#222533]/60">
                  <span className="text-[#8a8f9d]">GRAPHICS</span>
                  <span className="text-white">Canva // Ibis Paint X</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#8a8f9d]">LIVE TITLE</span>
                  <a
                    href="https://missstaticmoth.itch.io/gangling-bros-forest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#fcee0a] hover:underline font-bold"
                  >
                    Gangling Bro&apos;s Forest ↗
                  </a>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#222533]">
                <div className="text-[10px] text-[#8a8f9d] mb-1 flex justify-between font-mono">
                  <span>SYSTEM_LOAD</span>
                  <span className="text-[#fcee0a]">NOMINAL [60 FPS]</span>
                </div>
                <div className="w-full h-1 bg-[#14151f] overflow-hidden">
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
