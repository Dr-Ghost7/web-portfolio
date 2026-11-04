'use client';

import React from 'react';

export function HudTicker() {
  const items = [
    'SYS_STATUS: ONLINE',
    "B.TECH CSE '27 (FINAL YEAR)",
    'STACK: REACT 19 // NEXT.JS 15 // TS',
    "GAME: GANGLING BRO'S FOREST (3D HORROR ON ITCH.IO)",
    'GRAPHICS: CANVA // IBIS PAINT X',
    'BIO_KEYPAD: TYPELOCK LIVE',
    'AI_SIM: A* VS Q-LEARNING',
    'GITHUB: @DR-GHOST7',
  ];

  return (
    <div className="w-full bg-[#0a0c12] border-y border-[#222533] overflow-hidden py-2 select-none relative z-20">
      <div className="flex w-max animate-marquee space-x-8 text-[11px] font-mono tracking-widest text-[#8a8f9d]">
        {/* Double array for infinite seamless looping */}
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center space-x-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fcee0a] animate-ping" />
            <span className="text-white font-medium">{text}</span>
            <span className="text-[#ff003c]">//</span>
          </div>
        ))}
      </div>
    </div>
  );
}
