'use client';

import React, { useState } from 'react';
import { Volume2, VolumeX, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { cyberAudio } from '@/lib/sounds';

interface NavbarProps {
  githubLogin?: string;
}

export function Navbar({ githubLogin = 'Dr-Ghost7' }: NavbarProps) {
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);

  const toggleSound = () => {
    const next = !audioEnabled;
    setAudioEnabled(next);
    cyberAudio.enabled = next;
    if (next) cyberAudio.playClick();
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#222533] bg-[#060608]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between tracking-wider">
        {/* Left: Minimal, Clean Logo */}
        <a
          href="#"
          onMouseEnter={() => cyberAudio.playHover()}
          onClick={() => cyberAudio.playClick()}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#13141c] border border-[#fcee0a] flex items-center justify-center font-extrabold text-sm sm:text-base text-[#fcee0a] group-hover:bg-[#fcee0a] group-hover:text-black transition-all">
            SG
          </div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-sm sm:text-base tracking-wider text-[#f5f6fa] group-hover:text-[#fcee0a] transition-colors font-mono">
              SINJINI GHOSH
            </span>
            <span className="w-2 h-2 rounded-full bg-[#fcee0a] animate-pulse hidden sm:inline-block" />
          </div>
        </a>

        {/* Center: Clean Spaced Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-[#9ca3af] font-mono text-xs sm:text-[13px] font-semibold">
          <a
            href="#projects"
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => cyberAudio.playClick()}
            className="hover:text-[#fcee0a] transition-colors"
          >
            <span className="text-[#fcee0a] mr-1">//</span>01.Projects
          </a>
          <a
            href="#skills"
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => cyberAudio.playClick()}
            className="hover:text-[#fcee0a] transition-colors"
          >
            <span className="text-[#fcee0a] mr-1">//</span>02.Skills
          </a>
          <a
            href="#contact"
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => cyberAudio.playClick()}
            className="hover:text-[#ff003c] transition-colors"
          >
            <span className="text-[#ff003c] mr-1">//</span>03.Contact
          </a>
        </nav>

        {/* Right: Only Sound Toggle + GitHub Button (Zero Clutter) */}
        <div className="flex items-center space-x-4">
          {/* Sound Toggle with Mini Animated Audio Wave */}
          <button
            onClick={toggleSound}
            onMouseEnter={() => cyberAudio.playHover()}
            title={audioEnabled ? 'Mute Audio' : 'Enable Audio'}
            className={`flex items-center gap-2 px-3 py-1.5 border transition-all cursor-pointer ${
              audioEnabled
                ? 'border-[#fcee0a]/60 text-[#fcee0a] bg-[#fcee0a]/10 hover:bg-[#fcee0a]/20'
                : 'border-[#222533] text-[#8a8f9d] hover:text-[#f5f6fa]'
            }`}
          >
            {audioEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
            {/* Live animated waveform bars when sound is active */}
            {audioEnabled && (
              <span className="flex items-end gap-0.5 h-3.5">
                <span className="w-0.5 bg-[#fcee0a] eq-bar-1" />
                <span className="w-0.5 bg-[#ff003c] eq-bar-2" />
                <span className="w-0.5 bg-[#fcee0a] eq-bar-3" />
              </span>
            )}
          </button>

          {/* Clean GitHub Link */}
          <a
            href={`https://github.com/${githubLogin}`}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => cyberAudio.playClick()}
            className="flex items-center gap-2 px-3.5 py-1.5 bg-[#13141c] hover:bg-[#fcee0a] text-[#f5f6fa] hover:text-black border border-[#222533] hover:border-[#fcee0a] transition-all font-bold font-mono text-xs clip-cyber-button"
          >
            <GithubIcon size={14} />
            <span className="hidden sm:inline">GitHub</span>
            <ExternalLink size={12} className="opacity-70" />
          </a>
        </div>
      </div>
    </header>
  );
}
