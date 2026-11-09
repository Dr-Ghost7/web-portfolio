'use client';

import React, { useState } from 'react';
import { TECHNICAL_PROJECTS, CREATIVE_PROJECTS, ProjectItem } from '@/lib/projects-data';
import { GraphicDesignModal } from '@/components/GraphicDesignModal';
import { CyberDivider } from '@/components/CyberDivider';
import { cyberAudio } from '@/lib/sounds';
import { ExternalLink, Eye, Gamepad2, Palette, Code2, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from '@/components/icons/GithubIcon';

export function ProjectsDeck() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [creativeFilter, setCreativeFilter] = useState<'all' | 'design' | 'art'>('all');

  const filteredCreative = creativeFilter === 'all'
    ? CREATIVE_PROJECTS
    : CREATIVE_PROJECTS.filter((p) => p.category === creativeFilter);

  const handleCreativeFilter = (filter: 'all' | 'design' | 'art') => {
    cyberAudio.playModeSwitch();
    setCreativeFilter(filter);
  };

  const getBorderAccent = (color: 'yellow' | 'red' | 'white') => {
    switch (color) {
      case 'yellow':
        return 'group-hover:border-[#fcee0a]';
      case 'red':
        return 'group-hover:border-[#ff003c]';
      default:
        return 'group-hover:border-white';
    }
  };

  const getBadgeAccent = (color: 'yellow' | 'red' | 'white') => {
    switch (color) {
      case 'yellow':
        return 'bg-[#fcee0a] text-black';
      case 'red':
        return 'bg-[#ff003c] text-white';
      default:
        return 'bg-white text-black';
    }
  };

  const renderCard = (project: ProjectItem) => (
    <div
      key={project.id}
      onMouseEnter={() => cyberAudio.playHover()}
      className={`group flex flex-col bg-[#0f1016] border border-[#222533] ${getBorderAccent(
        project.accentColor
      )} transition-all duration-300 relative overflow-hidden clip-cyber-card hover:shadow-[0_0_25px_rgba(0,0,0,0.8)]`}
    >
      {/* Card Image Display */}
      <div 
        className="relative aspect-video w-full overflow-hidden bg-[#06080e] cursor-pointer flex items-center justify-center"
        onClick={() => {
          cyberAudio.playClick();
          setSelectedProject(project);
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full ${
            project.id === 'flag-memory-app'
              ? 'object-contain p-2 max-h-full'
              : 'object-cover'
          } group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1016] via-transparent to-transparent opacity-75 pointer-events-none" />

        {/* Laser Scanner sweep line */}
        <div className="laser-scanner opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span
            className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getBadgeAccent(
              project.accentColor
            )}`}
          >
            {project.category === 'web'
              ? 'WEB'
              : project.category === 'gamedev'
              ? 'GAME'
              : project.category === 'design'
              ? 'CANVA'
              : 'ART'}
          </span>
          {project.featured && project.category !== 'art' && (
            <span className="px-2 py-0.5 bg-[#060608]/85 text-[#fcee0a] border border-[#fcee0a]/40 text-[10px] font-bold">
              FEATURED
            </span>
          )}
        </div>

        {/* Inspect button overlay */}
        <button
          onMouseEnter={() => cyberAudio.playHover()}
          onClick={(e) => {
            e.stopPropagation();
            cyberAudio.playClick();
            setSelectedProject(project);
          }}
          className="absolute bottom-3 right-3 px-2.5 py-1 bg-[#060608]/90 text-xs font-bold text-white border border-[#222533] hover:border-[#fcee0a] hover:text-[#fcee0a] transition-all flex items-center gap-1 cursor-pointer"
          title="Inspect Details"
        >
          <Eye size={12} />
          <span>VIEW</span>
        </button>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {project.category === 'art' ? (
            <>
              <div className="text-xs text-[#fcee0a] font-mono font-semibold mb-1">
                Ibis Paint X
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#f5f6fa] group-hover:text-[#fcee0a] transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#a0a5b5] leading-relaxed mb-4">
                {project.description}
              </p>
            </>
          ) : (
            <>
              <div className="text-[11px] text-[#8a8f9d] font-mono mb-1">{project.subtitle}</div>
              <h3 className="text-base sm:text-lg font-bold text-[#f5f6fa] group-hover:text-[#fcee0a] transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-xs text-[#a0a5b5] line-clamp-2 leading-relaxed mb-4">
                {project.description}
              </p>
            </>
          )}
        </div>

        <div>
          {/* Metrics preview (only for non-art projects) */}
          {project.category !== 'art' && project.metrics && (
            <div className="grid grid-cols-3 gap-1.5 py-2 mb-3 border-y border-[#222533]/80 text-center font-mono">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="text-[10px]">
                  <div className="text-[#8a8f9d] truncate">{m.label}</div>
                  <div className="font-bold text-[#f5f6fa] truncate">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {(project.category === 'art'
              ? ['Ibis Paint X', 'Digital Art']
              : project.tags.slice(0, 3)
            ).map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-[#14151f] text-[#c4c8d4] text-[11px] font-mono border border-[#222533]"
              >
                {tag}
              </span>
            ))}
            {project.category !== 'art' && project.tags.length > 3 && (
              <span className="px-1 py-0.5 text-[#8a8f9d] text-[10px] font-mono">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Actions Footer */}
          <div className="pt-2 border-t border-[#222533] flex items-center justify-between gap-2">
            <button
              onMouseEnter={() => cyberAudio.playHover()}
              onClick={() => {
                cyberAudio.playClick();
                setSelectedProject(project);
              }}
              className="text-xs font-bold text-[#fcee0a] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>{project.category === 'art' ? 'View Artwork' : 'Details'}</span>
              <span>→</span>
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => cyberAudio.playHover()}
                  onClick={() => cyberAudio.playClick()}
                  className="p-1.5 bg-[#14151f] text-[#8a8f9d] hover:text-white border border-[#222533] hover:border-[#fcee0a] transition-all"
                  title="View on GitHub"
                >
                  <GithubIcon size={13} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => cyberAudio.playHover()}
                  onClick={() => cyberAudio.playClick()}
                  className="px-2 py-1 bg-[#14151f] hover:bg-[#ff003c] text-white border border-[#222533] hover:border-[#ff003c] transition-all text-[11px] font-bold flex items-center gap-1"
                  title="Play on itch.io"
                >
                  <Gamepad2 size={13} />
                  <span>itch.io</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-[#222533] bg-[#08080a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ======================================================== */}
        {/* PART 1: TECHNICAL & CODE WORKS (WEB APPS & GAMES)         */}
        {/* ======================================================== */}
        <div className="mb-8 pb-4 border-b border-[#222533]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#fcee0a] uppercase tracking-widest mb-1.5">
            <Code2 size={14} />
            <span>01 // TECHNICAL &amp; CODE WORKS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#f5f6fa]">
            WEB APPS, <span className="text-[#fcee0a]">BIOMETRICS &amp; GAME DEV</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#8a8f9d] mt-1 max-w-xl">
            Front-end applications in JavaScript &amp; HTML/CSS, behavioral biometric dynamics, algorithmic simulations, and published Godot title.
          </p>
        </div>

        {/* Technical Grid (4 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {TECHNICAL_PROJECTS.map((project) => renderCard(project))}
        </div>

        {/* ======================================================== */}
        {/* SECTION DIVIDER: CYBER CIRCUIT LINE (NO TEXT)             */}
        {/* ======================================================== */}
        <div className="my-14">
          <CyberDivider />
        </div>

        {/* ======================================================== */}
        {/* PART 2: VISUAL DESIGN & DIGITAL ART (CANVA & IBIS PAINT)  */}
        {/* ======================================================== */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-[#222533]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff003c] uppercase tracking-widest mb-1.5">
              <Palette size={14} />
              <span>02 // VISUAL DESIGN &amp; DIGITAL ART</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#f5f6fa]">
              CANVA GRAPHICS &amp; <span className="text-[#ff003c]">DIGITAL ARTWORKS</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#8a8f9d] mt-1 max-w-xl">
              Posters, editorial typography, and UI onboarding flows in Canva; original digital illustrations and concept art in Ibis Paint X.
            </p>
          </div>

          {/* Sub-filters for creative work */}
          <div className="flex flex-wrap gap-2 text-xs font-bold font-mono">
            <button
              onMouseEnter={() => cyberAudio.playHover()}
              onClick={() => handleCreativeFilter('all')}
              className={`px-3 py-1.5 transition-all border clip-cyber-button cursor-pointer ${
                creativeFilter === 'all'
                  ? 'bg-[#ff003c] text-white border-[#ff003c]'
                  : 'bg-[#13141c] text-[#8a8f9d] border-[#222533] hover:text-white'
              }`}
            >
              All Creative ({CREATIVE_PROJECTS.length})
            </button>
            <button
              onMouseEnter={() => cyberAudio.playHover()}
              onClick={() => handleCreativeFilter('design')}
              className={`px-3 py-1.5 transition-all border clip-cyber-button cursor-pointer ${
                creativeFilter === 'design'
                  ? 'bg-[#fcee0a] text-black border-[#fcee0a]'
                  : 'bg-[#13141c] text-[#8a8f9d] border-[#222533] hover:text-white'
              }`}
            >
              Canva Graphics (3)
            </button>
            <button
              onMouseEnter={() => cyberAudio.playHover()}
              onClick={() => handleCreativeFilter('art')}
              className={`px-3 py-1.5 transition-all border clip-cyber-button cursor-pointer ${
                creativeFilter === 'art'
                  ? 'bg-white text-black border-white'
                  : 'bg-[#13141c] text-[#8a8f9d] border-[#222533] hover:text-white'
              }`}
            >
              Ibis Paint X (3)
            </button>
          </div>
        </div>

        {/* Creative Grid (6 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCreative.map((project) => renderCard(project))}
        </div>
      </div>

      {/* Details Lightbox Modal */}
      <GraphicDesignModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
