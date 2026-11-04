'use client';

import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ExternalLink, SlidersHorizontal } from 'lucide-react';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { cyberAudio, SoundTheme } from '@/lib/sounds';

interface NavbarProps {
  githubLogin?: string;
}

export function Navbar({ githubLogin = 'Dr-Ghost7' }: NavbarProps) {
  const [time, setTime] = useState<string>('');
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);
  const [currentTheme, setCurrentTheme] = useState<SoundTheme>('holo');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    const next = !audioEnabled;
    setAudioEnabled(next);
    cyberAudio.enabled = next;
    if (next) cyberAudio.playClick();
  };

  const cycleSoundTheme = () => {
    const themes: SoundTheme[] = ['holo', 'laser', 'mechanical'];
    const nextIdx = (themes.indexOf(currentTheme) + 1) % themes.length;
    const nextTheme = themes[nextIdx];
    setCurrentTheme(nextTheme);
    cyberAudio.setTheme(nextTheme);
  };

  const getThemeLabel = (theme: SoundTheme) => {
    switch (theme) {
      case 'holo':
        return 'HOLO-CHIME';
      case 'laser':
        return 'LASER-PULSE';
      case 'mechanical':
        return 'MECH-RELAY';
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#222533] bg-[#060608]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between text-xs tracking-wider">
        {/* Left: Branding & Status */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            onClick={() => cyberAudio.playClick()}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-8 h-8 bg-[#13141c] border border-[#fcee0a] flex items-center justify-center font-bold text-[#fcee0a] group-hover:bg-[#fcee0a] group-hover:text-black transition-all">
              SG
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-bold text-sm tracking-widest text-[#f5f6fa] group-hover:text-[#fcee0a] transition-colors">
                <span>SINJINI GHOSH</span>
              </div>
              <div className="text-[10px] text-[#8a8f9d] uppercase">
                PORTFOLIO // <span className="text-[#ff003c]">DR-GHOST7</span>
              </div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 border border-[#222533] bg-[#0d0e13] text-[#8a8f9d]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-emerald-400 font-medium">B.TECH CSE &apos;27</span>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 text-[#8a8f9d]">
          <a
            href="#projects"
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => cyberAudio.playClick()}
            className="hover:text-[#fcee0a] transition-colors flex items-center gap-1"
          >
            <span className="text-[#fcee0a]">//</span> 01.PROJECTS
          </a>
          <a
            href="#github"
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => cyberAudio.playClick()}
            className="hover:text-[#fcee0a] transition-colors flex items-center gap-1"
          >
            <span className="text-[#fcee0a]">//</span> 02.GITHUB
          </a>
          <a
            href="#skills"
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => cyberAudio.playClick()}
            className="hover:text-[#fcee0a] transition-colors flex items-center gap-1"
          >
            <span className="text-[#fcee0a]">//</span> 03.SKILLS
          </a>
          <a
            href="#contact"
            onMouseEnter={() => cyberAudio.playHover()}
            onClick={() => cyberAudio.playClick()}
            className="hover:text-[#ff003c] transition-colors flex items-center gap-1"
          >
            <span className="text-[#ff003c]">//</span> 04.CONTACT
          </a>
        </nav>

        {/* Right: Audio Theme Selector, Audio Toggle, Clock, GitHub */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Sound Theme Selector */}
          {audioEnabled && (
            <button
              onClick={cycleSoundTheme}
              title="Click to cycle SFX Profiles (Holo-Chime / Laser / Mechanical)"
              className="hidden sm:flex items-center gap-1.5 px-2 py-1 bg-[#13141c] hover:bg-[#222533] border border-[#222533] text-[10px] font-mono text-[#fcee0a] cursor-pointer transition-colors"
            >
              <SlidersHorizontal size={11} className="text-[#8a8f9d]" />
              <span>SFX: {getThemeLabel(currentTheme)}</span>
            </button>
          )}

          {/* Master Sound Toggle */}
          <button
            onClick={toggleSound}
            title={audioEnabled ? 'Mute Audio' : 'Enable Audio'}
            className={`p-2 border transition-all cursor-pointer ${
              audioEnabled
                ? 'border-[#fcee0a]/60 text-[#fcee0a] bg-[#fcee0a]/10 hover:bg-[#fcee0a]/20'
                : 'border-[#222533] text-[#8a8f9d] hover:text-[#f5f6fa]'
            }`}
          >
            {audioEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
          </button>

          {/* Clock */}
          <div className="hidden xl:flex items-center px-2 py-1 bg-[#0d0e13] border border-[#222533] text-[#8a8f9d] text-[11px]">
            <span className="text-[#fcee0a] mr-1.5">TIME</span>
            <span>{time || '--:--:--'}</span>
          </div>

          {/* GitHub Button */}
          <a
            href={`https://github.com/${githubLogin}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => cyberAudio.playClick()}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#13141c] hover:bg-[#fcee0a] text-[#f5f6fa] hover:text-black border border-[#222533] hover:border-[#fcee0a] transition-all font-bold clip-cyber-button"
          >
            <GithubIcon size={14} />
            <span className="hidden sm:inline">GITHUB</span>
            <ExternalLink size={12} className="opacity-70" />
          </a>
        </div>
      </div>
    </header>
  );
}
