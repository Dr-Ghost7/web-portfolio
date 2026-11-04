'use client';

import React from 'react';
import { ChevronUp, Mail } from 'lucide-react';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { cyberAudio } from '@/lib/sounds';

export function Footer() {
  const scrollToTop = () => {
    cyberAudio.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050507] border-t border-[#222533] py-12 text-sm font-mono text-[#9ca3af]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Status */}
        <div className="space-y-1.5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-white font-extrabold text-base tracking-wider">
            <span className="text-[#fcee0a]">&gt;&gt;</span>
            <span>SINJINI GHOSH</span>
            <span className="text-[#ff003c]">//</span>
            <span>PORTFOLIO</span>
          </div>
          <div className="text-xs sm:text-sm text-[#8a8f9d]">
            Next.js 15 App Router • React 19 • TypeScript • Tailwind CSS
          </div>
        </div>

        {/* Center: System info */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-[#a1a6b4]">
          <span className="flex items-center gap-1.5 font-semibold text-[#f5f6fa]">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>B.Tech CSE &apos;27</span>
          </span>
          <span>•</span>
          <a
            href="https://github.com/Dr-Ghost7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            github.com/Dr-Ghost7
          </a>
          <span>•</span>
          <a
            href="mailto:sguse001@gmail.com"
            className="text-[#fcee0a] font-bold hover:underline"
          >
            sguse001@gmail.com
          </a>
        </div>

        {/* Right: Return to top */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToTop}
            className="px-4 py-2 bg-[#13141c] hover:bg-[#fcee0a] text-white hover:text-black border border-[#222533] hover:border-[#fcee0a] transition-all flex items-center gap-2 font-bold cursor-pointer clip-cyber-button text-xs sm:text-sm"
            title="Return to top"
          >
            <span>TOP</span>
            <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
