'use client';

import React from 'react';
import { cyberAudio } from '@/lib/sounds';

interface DigitalHazardTapeProps {
  className?: string;
}

const TAPE_SEGMENTS = [
  { label: 'CAUTION // ACTIVE REPOSITORY', accent: true },
  { label: 'FRONTEND DEVELOPMENT // REACT 19 & NEXT.JS 15', accent: false },
  { label: 'GODOT 3D ENGINE // HORROR NARRATIVE', accent: false },
  { label: 'BEHAVIORAL BIOMETRICS // TYPELOCK', accent: false },
  { label: 'VISUAL DESIGN // CANVA & IBIS PAINT X', accent: false },
  { label: 'DR-GHOST7 // B.TECH CSE 2027', accent: true },
  { label: 'HIGH INTEGRITY // ZERO PLACEHOLDERS', accent: false },
];

export function DigitalHazardTape({ className = '' }: DigitalHazardTapeProps) {
  const renderTrack = () => (
    <div className="flex items-center space-x-6 whitespace-nowrap">
      {TAPE_SEGMENTS.map((item, idx) => (
        <div key={idx} className="flex items-center space-x-4">
          {/* Arrow Chevron Edge */}
          <span className="flex items-center text-black font-black tracking-tighter text-xs sm:text-sm select-none opacity-90">
            ►►►
          </span>

          {/* Clean Monospace Tag */}
          <span
            className={`font-mono font-black text-[11px] sm:text-xs tracking-wider select-none ${
              item.accent ? 'text-black bg-black/10 px-2 py-0.5 rounded-[1px]' : 'text-black'
            }`}
          >
            {item.label}
          </span>

          {/* Micro Hazard Slash */}
          <span className="text-black/60 font-mono font-bold text-xs select-none">
            ///
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div
      onMouseEnter={() => cyberAudio.playHover()}
      className={`relative w-full overflow-hidden select-none py-2 my-2 ${className}`}
    >
      {/* Outer ambient yellow glow */}
      <div className="absolute inset-0 bg-[#fcee0a]/10 blur-md pointer-events-none" />

      {/* Main Digital Tape Strip with Arrow Ends */}
      <div className="relative w-full bg-[#fcee0a] text-black shadow-[0_0_20px_rgba(252,238,10,0.4)] border-y-2 border-black/40">
        {/* Top Micro Hazard Stripe */}
        <div className="h-[3px] w-full bg-hazard-stripes opacity-80" />

        {/* Scrolling Marquee Ribbon */}
        <div className="py-2 overflow-hidden flex">
          <div className="animate-hazard-tape flex items-center">
            {renderTrack()}
            <div className="mx-6 text-black font-black select-none">►►►</div>
            {renderTrack()}
          </div>
        </div>

        {/* Bottom Micro Hazard Stripe */}
        <div className="h-[3px] w-full bg-hazard-stripes opacity-80" />
      </div>

      {/* Flank Arrow Notch Accents */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-full pointer-events-none bg-gradient-to-r from-[#060608] to-transparent z-10" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-full pointer-events-none bg-gradient-to-l from-[#060608] to-transparent z-10" />
    </div>
  );
}
