'use client';

import React from 'react';

interface CyberDividerProps {
  className?: string;
}

export function CyberDivider({ className = '' }: CyberDividerProps) {
  return (
    <div className={`relative w-full py-6 flex items-center justify-center overflow-hidden select-none ${className}`}>
      {/* Background glow streak */}
      <div className="absolute w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#fcee0a]/30 to-transparent blur-[2px]" />

      <div className="relative w-full max-w-7xl px-4 sm:px-6 flex items-center justify-center">
        {/* Left Tapered Line */}
        <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#222533] to-[#fcee0a]" />

        {/* Left Tech Notch */}
        <div className="flex items-center space-x-1 mx-2">
          <span className="w-1.5 h-1.5 bg-[#fcee0a] rotate-45" />
          <span className="w-1 h-3 bg-[#fcee0a]/60 skew-x-[-20deg]" />
          <span className="w-1 h-3 bg-[#fcee0a]/30 skew-x-[-20deg]" />
        </div>

        {/* Center Geometric Cyber Core */}
        <div className="relative px-3 py-1 flex items-center gap-2">
          {/* Outer diamond bracket */}
          <div className="w-3 h-3 border border-[#fcee0a] rotate-45 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-[#fcee0a] animate-pulse" />
          </div>

          {/* Central chamfered bar */}
          <div className="h-[2px] w-16 sm:w-28 bg-[#fcee0a] shadow-[0_0_10px_rgba(252,238,10,0.8)]" />

          {/* Core center node */}
          <div className="w-2.5 h-2.5 bg-[#ff003c] rotate-45" />

          {/* Right chamfered bar */}
          <div className="h-[2px] w-16 sm:w-28 bg-[#fcee0a] shadow-[0_0_10px_rgba(252,238,10,0.8)]" />

          {/* Outer diamond bracket */}
          <div className="w-3 h-3 border border-[#fcee0a] rotate-45 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-[#fcee0a] animate-pulse" />
          </div>
        </div>

        {/* Right Tech Notch */}
        <div className="flex items-center space-x-1 mx-2">
          <span className="w-1 h-3 bg-[#fcee0a]/30 skew-x-[20deg]" />
          <span className="w-1 h-3 bg-[#fcee0a]/60 skew-x-[20deg]" />
          <span className="w-1 h-1.5 bg-[#fcee0a] rotate-45" />
        </div>

        {/* Right Tapered Line */}
        <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#222533] to-[#fcee0a]" />
      </div>

      {/* Travelling Light Beam Animation */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-48 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent cyber-divider-pulse" />
      </div>
    </div>
  );
}
