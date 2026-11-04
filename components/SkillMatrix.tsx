'use client';

import React from 'react';
import { SKILLS_MATRIX } from '@/lib/projects-data';
import { Cpu, Flame } from 'lucide-react';
import { cyberAudio } from '@/lib/sounds';

export function SkillMatrix() {
  const getAccentBorder = (accent: string) => {
    switch (accent) {
      case 'yellow':
        return 'border-t-4 border-t-[#fcee0a]';
      case 'red':
        return 'border-t-4 border-t-[#ff003c]';
      default:
        return 'border-t-4 border-t-white';
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'MASTER':
        return 'bg-[#fcee0a] text-black';
      case 'ADVANCED':
        return 'bg-[#ff003c] text-white';
      case 'MODERN':
        return 'bg-white text-black';
      case 'ACTIVE':
        return 'bg-[#fcee0a] text-black';
      case 'PUBLISHED':
        return 'bg-emerald-400 text-black';
      case 'FINAL YEAR':
        return 'bg-blue-400 text-black';
      default:
        return 'bg-[#222533] text-white';
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-[#222533] bg-[#08080a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 pb-6 border-b border-[#222533]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#fcee0a] uppercase tracking-widest mb-2">
            <Cpu size={14} />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#f5f6fa]">
            TECHNICAL &amp; <span className="text-[#fcee0a]">CREATIVE SKILLS</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#8a8f9d] mt-2 max-w-2xl leading-relaxed">
            Proficiencies spanning frontend web engineering, digital visual tools, and game programming.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SKILLS_MATRIX.map((cat, idx) => (
            <div
              key={idx}
              onMouseEnter={() => cyberAudio.playHover()}
              className={`p-6 bg-[#0f1016] border border-[#222533] ${getAccentBorder(
                cat.accent
              )} flex flex-col justify-between clip-cyber-corner`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#222533]">
                  <h3 className="text-xs font-bold text-white tracking-widest font-mono">
                    {cat.category}
                  </h3>
                  <span className="text-[10px] text-[#8a8f9d] font-mono">[ 0{idx + 1} ]</span>
                </div>

                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-[#f5f6fa]">{skill.name}</span>
                        <span
                          className={`px-1.5 py-0.2 text-[9px] font-mono font-bold ${getLevelBadge(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#8a8f9d] leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#222533] flex justify-between items-center text-[10px] text-[#8a8f9d] font-mono">
                <span>VERIFIED SKILLSET</span>
                <span className="text-[#fcee0a]">ACTIVE WORKFLOW</span>
              </div>
            </div>
          ))}
        </div>

        {/* The Vanilla JS -> React Advantage */}
        <div className="mt-8 p-6 bg-[#13141c] border border-[#222533] relative">
          <div className="absolute top-0 right-0 px-3 py-1 bg-[#fcee0a] text-black font-bold text-[10px] font-mono">
            PERSPECTIVE
          </div>
          <h4 className="text-xs font-bold text-[#fcee0a] uppercase tracking-wider mb-2 font-mono flex items-center gap-2">
            <Flame size={14} />
            <span>HOW SOLID FOUNDATIONS ELEVATE REACT DEVELOPMENT</span>
          </h4>
          <p className="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
            Having built projects with raw JavaScript and CSS, I understand what happens behind the abstractions—from browser repaint cycles to event listener lifecycles. This allows me to write cleaner, more intentional React 19 and Next.js 15 components without relying on unnecessary dependencies or struggling with state synchronization.
          </p>
        </div>
      </div>
    </section>
  );
}
