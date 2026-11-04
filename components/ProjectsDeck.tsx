'use client';

import React, { useState } from 'react';
import { PROJECTS_DATA, ProjectItem } from '@/lib/projects-data';
import { GraphicDesignModal } from '@/components/GraphicDesignModal';
import { cyberAudio } from '@/lib/sounds';
import { ExternalLink, Eye, Gamepad2, Palette, Code2, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/icons/GithubIcon';

interface ProjectsDeckProps {
  initialFilter?: 'all' | 'web' | 'gamedev' | 'design' | 'art';
}

export function ProjectsDeck({ initialFilter = 'all' }: ProjectsDeckProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'gamedev' | 'design' | 'art'>(initialFilter);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  const handleFilterClick = (filter: 'all' | 'web' | 'gamedev' | 'design' | 'art') => {
    cyberAudio.playModeSwitch();
    setActiveFilter(filter);
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

  const getCategoryLabel = (cat: 'web' | 'gamedev' | 'design' | 'art') => {
    switch (cat) {
      case 'web':
        return 'WEB & APPS';
      case 'gamedev':
        return 'GAME DEV';
      case 'design':
        return 'GRAPHIC DESIGN';
      case 'art':
        return 'DIGITAL ART';
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-[#222533] bg-[#08080a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#222533]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#fcee0a] uppercase tracking-widest mb-2">
              <span className="w-2 h-2 bg-[#fcee0a]" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#f5f6fa]">
              PROJECTS, <span className="text-[#fcee0a]">DESIGN &amp; ART</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#8a8f9d] mt-2 max-w-xl">
              Web applications, behavioral biometric systems, algorithmic simulations, published itch.io game, and original graphic design &amp; digital art.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 text-xs font-bold font-mono">
            <button
              onClick={() => handleFilterClick('all')}
              className={`px-3 py-1.5 sm:px-3.5 sm:py-2 transition-all border clip-cyber-button cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#fcee0a] text-black border-[#fcee0a]'
                  : 'bg-[#13141c] text-[#8a8f9d] border-[#222533] hover:text-white hover:border-[#8a8f9d]'
              }`}
            >
              All Works ({PROJECTS_DATA.length})
            </button>

            <button
              onClick={() => handleFilterClick('web')}
              className={`px-3 py-1.5 sm:px-3.5 sm:py-2 transition-all border clip-cyber-button cursor-pointer ${
                activeFilter === 'web'
                  ? 'bg-[#fcee0a] text-black border-[#fcee0a]'
                  : 'bg-[#13141c] text-[#8a8f9d] border-[#222533] hover:text-white hover:border-[#8a8f9d]'
              }`}
            >
              Web &amp; Apps (3)
            </button>

            <button
              onClick={() => handleFilterClick('gamedev')}
              className={`px-3 py-1.5 sm:px-3.5 sm:py-2 transition-all border clip-cyber-button cursor-pointer ${
                activeFilter === 'gamedev'
                  ? 'bg-emerald-400 text-black border-emerald-400'
                  : 'bg-[#13141c] text-[#8a8f9d] border-[#222533] hover:text-white hover:border-emerald-400'
              }`}
            >
              Game Dev (1)
            </button>

            <button
              onClick={() => handleFilterClick('design')}
              className={`px-3 py-1.5 sm:px-3.5 sm:py-2 transition-all border clip-cyber-button cursor-pointer ${
                activeFilter === 'design'
                  ? 'bg-[#ff003c] text-white border-[#ff003c]'
                  : 'bg-[#13141c] text-[#8a8f9d] border-[#222533] hover:text-white hover:border-[#ff003c]'
              }`}
            >
              Canva Design (3)
            </button>

            <button
              onClick={() => handleFilterClick('art')}
              className={`px-3 py-1.5 sm:px-3.5 sm:py-2 transition-all border clip-cyber-button cursor-pointer ${
                activeFilter === 'art'
                  ? 'bg-white text-black border-white'
                  : 'bg-[#13141c] text-[#8a8f9d] border-[#222533] hover:text-white hover:border-white'
              }`}
            >
              Digital Art (3)
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => cyberAudio.playHover()}
              className={`group flex flex-col bg-[#0f1016] border border-[#222533] ${getBorderAccent(
                project.accentColor
              )} transition-all duration-300 relative overflow-hidden clip-cyber-card hover:shadow-[0_0_25px_rgba(0,0,0,0.8)]`}
            >
              {/* Card Image */}
              <div 
                className="relative aspect-video w-full overflow-hidden bg-[#060608] cursor-pointer"
                onClick={() => {
                  cyberAudio.playClick();
                  setSelectedProject(project);
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1016] via-transparent to-transparent opacity-80" />

                {/* Category & Status Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span
                    className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getBadgeAccent(
                      project.accentColor
                    )}`}
                  >
                    {getCategoryLabel(project.category)}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-0.5 bg-[#060608]/80 text-[#fcee0a] border border-[#fcee0a]/40 text-[10px] font-bold">
                      FEATURED
                    </span>
                  )}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    cyberAudio.playClick();
                    setSelectedProject(project);
                  }}
                  className="absolute bottom-3 right-3 px-2.5 py-1 bg-[#060608]/90 text-xs font-bold text-white border border-[#222533] hover:border-[#fcee0a] hover:text-[#fcee0a] transition-all flex items-center gap-1 cursor-pointer"
                  title="Inspect Details"
                >
                  <Eye size={12} />
                  <span>VIEW FULL</span>
                </button>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] text-[#8a8f9d] font-mono mb-1">{project.subtitle}</div>
                  <h3 className="text-lg font-bold text-[#f5f6fa] group-hover:text-[#fcee0a] transition-colors mb-2.5">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#a0a5b5] line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Metrics preview */}
                  {project.metrics && (
                    <div className="grid grid-cols-3 gap-1.5 py-2 mb-3 border-y border-[#222533]/80 text-center">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="text-[10px]">
                          <div className="text-[#8a8f9d] truncate">{m.label}</div>
                          <div className="font-bold text-[#f5f6fa] truncate">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-1.5 py-0.5 bg-[#14151f] text-[#8a8f9d] text-[10px] font-mono border border-[#222533]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-1 py-0.5 text-[#8a8f9d] text-[10px]">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-2 border-t border-[#222533] flex items-center justify-between gap-2">
                    <button
                      onClick={() => {
                        cyberAudio.playClick();
                        setSelectedProject(project);
                      }}
                      className="text-xs font-bold text-[#fcee0a] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Details</span>
                      <span>→</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
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
          ))}
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
