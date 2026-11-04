'use client';

import React, { useEffect } from 'react';
import { X, ExternalLink, Palette, CheckCircle2, AlertCircle, Layers } from 'lucide-react';
import { ProjectItem } from '@/lib/projects-data';
import { cyberAudio } from '@/lib/sounds';

interface GraphicDesignModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function GraphicDesignModal({ project, onClose }: GraphicDesignModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        cyberAudio.playClick();
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d0e13] border-2 border-[#fcee0a] overflow-y-auto clip-cyber-card shadow-[0_0_50px_rgba(252,238,10,0.25)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top HUD Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3 bg-[#13141c] border-b border-[#222533]">
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2.5 h-2.5 bg-[#fcee0a] rounded-none animate-pulse" />
            <span className="text-[#8a8f9d]">DATA_INSPECTOR //</span>
            <span className="text-[#fcee0a] font-bold">{project.id.toUpperCase()}</span>
          </div>

          <button
            onClick={() => {
              cyberAudio.playClick();
              onClose();
            }}
            className="p-1.5 text-[#8a8f9d] hover:text-[#ff003c] border border-transparent hover:border-[#ff003c] hover:bg-[#ff003c]/10 transition-all cursor-pointer"
            title="Close Protocol (Esc)"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Main Visual Render */}
          <div className="relative aspect-video sm:aspect-[21/9] w-full overflow-hidden border border-[#222533] bg-[#060608]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e13] via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-2">
              <div>
                <span className="px-2 py-0.5 bg-[#ff003c] text-white text-[10px] font-bold tracking-widest uppercase">
                  {project.category.toUpperCase()}
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold text-[#f5f6fa] tracking-tight mt-1">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#fcee0a] font-mono">{project.subtitle}</p>
              </div>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#fcee0a] text-black text-xs font-bold flex items-center gap-1.5 hover:bg-white transition-colors"
                >
                  <span>SOURCE_REPO</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </div>

          {/* Color Palette Swatches if available */}
          {project.details?.palette && (
            <div className="p-4 bg-[#13141c] border border-[#222533]">
              <div className="text-xs font-bold text-[#8a8f9d] uppercase mb-3 flex items-center gap-2">
                <Palette size={14} className="text-[#fcee0a]" />
                <span>CHROMATIC SPECIFICATION // PALETTE</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {project.details.palette.map((color, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 bg-[#060608] border border-[#222533]">
                    <div
                      className="w-6 h-6 border border-white/20 flex-shrink-0"
                      style={{ backgroundColor: color }}
                    />
                    <div className="text-[11px] font-mono text-[#d1d5db]">
                      <div className="text-[9px] text-[#8a8f9d]">HEX</div>
                      <div className="font-bold">{color}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Summary & Deliverables */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-bold text-[#fcee0a] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Layers size={13} />
                  <span>PROJECT CONTEXT & ROLE</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.details?.deliverables && (
                <div>
                  <h4 className="text-xs font-bold text-[#8a8f9d] uppercase tracking-wider mb-2">
                    CORE DELIVERABLES
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#d1d5db]">
                    {project.details.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-[#fcee0a] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Right: Technical Challenges & Tags */}
            <div className="space-y-4">
              {project.details?.challenges && (
                <div className="p-4 bg-[#14151f] border-l-2 border-[#ff003c] border-y border-r border-[#222533]">
                  <h4 className="text-xs font-bold text-[#ff003c] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <AlertCircle size={13} />
                    <span>DESIGN & TECHNICAL CHALLENGES</span>
                  </h4>
                  <p className="text-xs text-[#d1d5db] leading-relaxed">
                    {project.details.challenges}
                  </p>
                </div>
              )}

              {/* Metrics HUD */}
              {project.metrics && (
                <div className="grid grid-cols-3 gap-2">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-2.5 bg-[#060608] border border-[#222533] text-center">
                      <div className="text-[9px] text-[#8a8f9d] uppercase">{m.label}</div>
                      <div className="text-xs font-bold text-[#fcee0a] mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Tags */}
              <div>
                <div className="text-[10px] text-[#8a8f9d] uppercase mb-2">TECHNOLOGIES & TOOLING</div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-[#13141c] text-[#f5f6fa] border border-[#222533] text-[11px] font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#13141c] border-t border-[#222533] flex justify-end">
          <button
            onClick={() => {
              cyberAudio.playClick();
              onClose();
            }}
            className="px-4 py-1.5 bg-[#222533] hover:bg-[#fcee0a] text-white hover:text-black text-xs font-bold uppercase transition-all clip-cyber-button"
          >
            DISMISS_VIEW [ESC]
          </button>
        </div>
      </div>
    </div>
  );
}
