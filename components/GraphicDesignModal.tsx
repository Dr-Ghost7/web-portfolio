'use client';

import React, { useEffect } from 'react';
import { X, ExternalLink, Palette, CheckCircle2, Gamepad2, Maximize2 } from 'lucide-react';
import { GithubIcon } from '@/components/icons/GithubIcon';
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
      cyberAudio.playModeSwitch();
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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={() => {
        cyberAudio.playClick();
        onClose();
      }}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0d0e13] border-2 border-[#fcee0a] overflow-y-auto clip-cyber-card shadow-[0_0_50px_rgba(252,238,10,0.25)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top HUD Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-2.5 bg-[#13141c] border-b border-[#222533]">
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 bg-[#fcee0a] animate-pulse" />
            <span className="text-[#8a8f9d] font-mono">//</span>
            <span className="text-[#fcee0a] font-bold font-mono">{project.title.toUpperCase()}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.image}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => cyberAudio.playHover()}
              onClick={() => cyberAudio.playClick()}
              className="p-1.5 text-[#8a8f9d] hover:text-[#fcee0a] border border-[#222533] hover:border-[#fcee0a] transition-all flex items-center gap-1 text-[11px] font-mono"
              title="Open full resolution file"
            >
              <Maximize2 size={13} />
              <span className="hidden sm:inline">ORIGINAL</span>
            </a>

            <button
              onMouseEnter={() => cyberAudio.playHover()}
              onClick={() => {
                cyberAudio.playClick();
                onClose();
              }}
              className="p-1.5 text-[#8a8f9d] hover:text-[#ff003c] border border-transparent hover:border-[#ff003c] hover:bg-[#ff003c]/10 transition-all cursor-pointer"
              title="Close (Esc)"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 space-y-4">
          {/* Main Visual Display (Uncropped, Full view) */}
          <div className="relative w-full bg-[#050608] border border-[#222533] flex items-center justify-center p-2 min-h-[220px] max-h-[55vh] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="max-h-[50vh] w-auto max-w-full object-contain rounded-sm shadow-xl"
            />
          </div>

          {/* Title & Metadata Strip */}
          <div className="flex flex-wrap items-end justify-between gap-3 pb-3 border-b border-[#222533]">
            <div>
              <span className="px-2 py-0.5 bg-[#ff003c] text-white text-[10px] font-bold tracking-widest uppercase">
                {project.category.toUpperCase()}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#f5f6fa] tracking-tight mt-1">
                {project.title}
              </h2>
              <p className="text-xs text-[#fcee0a] font-mono">{project.subtitle}</p>
            </div>

            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => cyberAudio.playHover()}
                  onClick={() => cyberAudio.playClick()}
                  className="px-3 py-1.5 bg-[#14151f] hover:bg-[#fcee0a] text-white hover:text-black border border-[#222533] hover:border-[#fcee0a] text-xs font-bold flex items-center gap-1.5 transition-colors font-mono"
                >
                  <GithubIcon size={13} />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => cyberAudio.playHover()}
                  onClick={() => cyberAudio.playClick()}
                  className="px-3 py-1.5 bg-[#ff003c] hover:bg-white text-white hover:text-black text-xs font-bold flex items-center gap-1.5 transition-colors font-mono"
                >
                  <Gamepad2 size={13} />
                  <span>Play on itch.io</span>
                  <ExternalLink size={11} />
                </a>
              )}
            </div>
          </div>

          {/* Short 1-Sentence Description */}
          <p className="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
            {project.description}
          </p>

          {/* Quick Deliverables / Points */}
          {project.details?.deliverables && (
            <div className="pt-2">
              <ul className="space-y-1.5 text-xs text-[#c4c8d4]">
                {project.details.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-[#fcee0a] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Color Palette Swatches if available */}
          {project.details?.palette && (
            <div className="p-3 bg-[#13141c] border border-[#222533]">
              <div className="text-[10px] font-bold text-[#8a8f9d] uppercase mb-2 flex items-center gap-1.5 font-mono">
                <Palette size={12} className="text-[#fcee0a]" />
                <span>PALETTE</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {project.details.palette.map((color, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 p-1 bg-[#060608] border border-[#222533]">
                    <div
                      className="w-4 h-4 border border-white/20 flex-shrink-0"
                      style={{ backgroundColor: color }}
                    />
                    <div className="text-[10px] font-mono text-[#d1d5db] truncate">
                      {color}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.map((t, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-[#13141c] text-[#8a8f9d] border border-[#222533] text-[10px] font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-2.5 bg-[#13141c] border-t border-[#222533] flex justify-between items-center">
          <div className="text-[10px] text-[#8a8f9d] font-mono">
            {project.details?.timeline || 'Portfolio'}
          </div>
          <button
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => {
              cyberAudio.playClick();
              onClose();
            }}
            className="px-3.5 py-1 bg-[#222533] hover:bg-[#fcee0a] text-white hover:text-black text-xs font-bold uppercase transition-all clip-cyber-button cursor-pointer"
          >
            CLOSE [ESC]
          </button>
        </div>
      </div>
    </div>
  );
}
