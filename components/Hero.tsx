'use client';

import React from 'react';
import { GraduationCap, ArrowRight, Palette, Mail, Code2, Sparkles, FolderGit2 } from 'lucide-react';
import { cyberAudio } from '@/lib/sounds';

interface HeroProps {
  onExploreProjects?: () => void;
  onExploreDesign?: () => void;
}

export function Hero({ onExploreProjects, onExploreDesign }: HeroProps) {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#222533] cyber-grid-bg overflow-hidden">
      {/* Subtle ambient glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#fcee0a]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[350px] h-[350px] bg-[#ff003c]/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Academic Status Bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs mb-6 text-[#8a8f9d]">
          <div className="flex items-center gap-2 px-3 py-1 bg-[#13141c] border border-[#fcee0a]/40 text-[#fcee0a]">
            <GraduationCap size={14} />
            <span className="font-semibold">B.Tech CSE // Final Year (Graduating Mid-2027)</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-[#13141c] border border-[#222533]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[#f5f6fa]">Open to Frontend Opportunities</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-[#13141c] border border-[#222533]">
            <span className="text-[#8a8f9d]">Published Game on itch.io</span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter uppercase leading-none mb-3">
              <span className="block text-[#f5f6fa]">Sinjini</span>
              <span className="block text-[#fcee0a] text-glow-yellow">
                Ghosh<span className="text-[#ff003c]">.</span>
              </span>
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <span className="px-2 py-0.5 bg-[#ff003c] text-white font-bold text-xs clip-tag-slant">
                DEVELOPER &amp; DESIGNER
              </span>
              <span className="text-sm md:text-base text-[#8a8f9d] font-mono">
                Dr-Ghost7 / Miss_StaticMoth
              </span>
            </div>

            {/* Organic Introduction Paragraph */}
            <div className="p-5 sm:p-6 bg-[#13141c] border-l-4 border-[#fcee0a] border-y border-r border-[#222533] mb-8 relative">
              <p className="text-sm sm:text-base text-[#e1e4ed] leading-relaxed mb-3">
                I am a final-year <strong>Computer Science &amp; Engineering</strong> student passionate about creating responsive, interactive web applications and purposeful visual designs. 
              </p>
              <p className="text-sm sm:text-base text-[#c4c8d4] leading-relaxed">
                Having built projects from scratch using <strong>vanilla JavaScript, HTML5, and CSS3</strong>—ranging from biometric touch-dynamics keypads to algorithmic simulations and game mechanics—I bring a deep understanding of core browser fundamentals into modern <strong>React.js and Next.js</strong> workflows. Alongside code, I craft visual identities and illustrations with <strong>Canva, Ibis Paint X, and custom CSS</strong>.
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
                className="px-6 py-3 bg-[#fcee0a] text-black font-extrabold text-xs sm:text-sm tracking-widest uppercase hover:bg-white transition-all clip-cyber-button flex items-center gap-2 cursor-pointer"
              >
                <span>EXPLORE MY WORK</span>
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
                <span>GRAPHICS &amp; ART</span>
              </a>

              <a
                href="#contact"
                onClick={() => cyberAudio.playClick()}
                className="px-5 py-3 bg-transparent text-[#8a8f9d] hover:text-[#fcee0a] border border-[#222533] hover:border-[#fcee0a] font-medium text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer"
              >
                <Mail size={15} />
                <span>CONTACT ME</span>
              </a>
            </div>
          </div>

          {/* Right column: Highlights Summary Card */}
          <div className="lg:col-span-4">
            <div className="p-5 bg-[#0d0e13] border border-[#222533] relative">
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#fcee0a]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#ff003c]" />

              <div className="text-xs font-bold text-[#8a8f9d] border-b border-[#222533] pb-2 mb-4 flex items-center justify-between">
                <span>QUICK PROFILE</span>
                <span className="text-[#fcee0a]">[ ACTIVE ]</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center py-1 border-b border-[#222533]/60">
                  <span className="text-[#8a8f9d]">ACADEMICS</span>
                  <span className="text-white font-semibold">B.Tech CSE (2023–2027)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#222533]/60">
                  <span className="text-[#8a8f9d]">WEB DEVELOPMENT</span>
                  <span className="text-[#fcee0a] font-bold">JavaScript, React, Next.js</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#222533]/60">
                  <span className="text-[#8a8f9d]">STYLING &amp; MARKUP</span>
                  <span className="text-white">HTML5, CSS3, Tailwind</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#222533]/60">
                  <span className="text-[#8a8f9d]">GRAPHICS &amp; ART</span>
                  <span className="text-[#ff003c] font-bold">Canva, Ibis Paint X, CSS</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-[#222533]/60">
                  <span className="text-[#8a8f9d]">GAME &amp; ALGORITHMS</span>
                  <span className="text-white">Godot (GDScript), Python</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-[#8a8f9d]">PUBLISHED GAME</span>
                  <span className="text-[#fcee0a] font-mono font-bold">Gangling Bro&apos;s Forest</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#222533]">
                <div className="text-[10px] text-[#8a8f9d] mb-1 flex justify-between">
                  <span>PORTFOLIO FRAMEWORK</span>
                  <span className="text-[#fcee0a]">REACT 19 + NEXT.JS 15</span>
                </div>
                <div className="w-full h-1.5 bg-[#14151f] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#ff003c] via-[#fcee0a] to-emerald-400 w-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
