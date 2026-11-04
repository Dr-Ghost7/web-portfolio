'use client';

import React, { useState } from 'react';
import { Terminal, Send, Check, Copy, Mail, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { cyberAudio } from '@/lib/sounds';

export function TerminalContact() {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    'TRANSMISSION_TERMINAL v2.4 // SECURE CHANNEL ESTABLISHED',
    'TYPE "help" FOR AVAILABLE PROTOCOLS, OR TRANSMIT DIRECTLY BELOW.',
  ]);

  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const directEmail = 'sinjinighosh.contact@gmail.com'; // Placeholder or customizable

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    cyberAudio.playClick();
    const newLogs = [...terminalOutput, `> ${terminalInput}`];

    switch (cmd) {
      case 'help':
        newLogs.push(
          'COMMANDS:',
          '  projects    - Jump to Dev & Design artifacts',
          '  github      - Connect to GitHub telemetry',
          '  skills      - Query competency matrix',
          '  email       - Reveal secure transmission frequency',
          '  hire        - Request recruitment coordinates',
          '  clear       - Purge terminal buffer'
        );
        break;
      case 'projects':
        window.location.hash = '#projects';
        newLogs.push('ROUTING // SECTOR_01 PROJECTS DECK LOADED.');
        break;
      case 'github':
        window.open('https://github.com/Dr-Ghost7', '_blank');
        newLogs.push('OPENING // GITHUB.COM/DR-GHOST7 TELEMETRY LINK.');
        break;
      case 'skills':
        window.location.hash = '#skills';
        newLogs.push('ROUTING // SECTOR_03 CORE COMPETENCIES LOADED.');
        break;
      case 'email':
        newLogs.push(`FREQUENCY: ${directEmail}`);
        break;
      case 'hire':
        newLogs.push(
          'STATUS: IMMEDIATELY AVAILABLE FOR FULL-TIME / CONTRACT ROLES.',
          'SPECIALIZATION: REACT.JS, NEXT.JS, TAILWIND, FIGMA & GRAPHIC SYSTEMS.'
        );
        break;
      case 'clear':
        setTerminalOutput([]);
        setTerminalInput('');
        return;
      default:
        newLogs.push(`UNKNOWN PROTOCOL: "${cmd}". TYPE "help" FOR DIRECTIVES.`);
    }

    setTerminalOutput(newLogs);
    setTerminalInput('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    cyberAudio.playModeSwitch();
    // Create mailto link as direct fall-through
    const mailto = `mailto:${directEmail}?subject=${encodeURIComponent(
      `Transmission from ${formName}`
    )}&body=${encodeURIComponent(`From: ${formName} (${formEmail})\n\n${formMessage}`)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    cyberAudio.playClick();
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-[#222533] bg-[#060608] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-10 pb-6 border-b border-[#222533]">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff003c] uppercase tracking-widest mb-2">
            <Terminal size={14} />
            <span>SECTOR_04 // COMMUNICATIONS HUB</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#f5f6fa]">
            INITIALIZE <span className="text-[#ff003c]">TRANSMISSION</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#8a8f9d] mt-2 max-w-xl">
            Reach out regarding frontend engineering roles, Next.js / React projects, or design system collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Interactive Terminal CLI */}
          <div className="lg:col-span-6 flex flex-col bg-[#0b0c10] border border-[#222533] p-4 font-mono clip-cyber-corner">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#222533] text-xs text-[#8a8f9d]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff003c]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#fcee0a]" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 text-white font-bold">TERMINAL // SHELL</span>
              </div>
              <span className="text-[10px] text-[#fcee0a]">INTERACTIVE_CLI</span>
            </div>

            {/* Terminal Log Output */}
            <div className="flex-1 min-h-[220px] max-h-[300px] overflow-y-auto space-y-1.5 text-xs text-[#d1d5db] mb-3 pr-1">
              {terminalOutput.map((log, idx) => (
                <div
                  key={idx}
                  className={`${
                    log.startsWith('>')
                      ? 'text-[#fcee0a] font-bold'
                      : log.startsWith('COMMANDS')
                      ? 'text-[#ff003c] font-bold'
                      : 'text-[#8a8f9d]'
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>

            {/* Command Input Form */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 border-t border-[#222533] pt-3">
              <span className="text-[#fcee0a] text-xs font-bold">&gt;</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type 'help', 'hire', 'projects', 'clear'..."
                className="flex-1 bg-transparent text-xs text-[#f5f6fa] focus:outline-none placeholder-[#8a8f9d]/50 font-mono"
              />
              <button
                type="submit"
                className="px-2.5 py-1 bg-[#14151f] hover:bg-[#fcee0a] text-white hover:text-black text-[11px] font-bold transition-colors cursor-pointer"
              >
                EXEC
              </button>
            </form>
          </div>

          {/* Right Column: Direct Transmission Form */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#0f1016] border border-[#222533] p-6 clip-cyber-card">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>DIRECT PROTOCOL DISPATCH</span>
                <span className="text-[#fcee0a] text-xs font-mono">[ ENCRYPTED ]</span>
              </h3>

              {submitted ? (
                <div className="p-6 bg-[#13141c] border border-emerald-500/40 text-center space-y-3">
                  <div className="w-10 h-10 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check size={20} />
                  </div>
                  <h4 className="text-sm font-bold text-white">TRANSMISSION DISPATCHED</h4>
                  <p className="text-xs text-[#8a8f9d]">
                    Your default mail client has been opened. I will respond to your communication promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 bg-[#222533] hover:bg-[#fcee0a] text-white hover:text-black text-xs font-bold transition-all"
                  >
                    SEND ANOTHER TRANSMISSION
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono text-[#8a8f9d] mb-1">
                        SENDER_NAME //
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Recruit Director / Sarah"
                        className="w-full px-3 py-2 bg-[#060608] border border-[#222533] focus:border-[#fcee0a] text-xs text-white placeholder-[#8a8f9d]/40 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono text-[#8a8f9d] mb-1">
                        RETURN_FREQUENCY //
                      </label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="e.g. contact@company.com"
                        className="w-full px-3 py-2 bg-[#060608] border border-[#222533] focus:border-[#fcee0a] text-xs text-white placeholder-[#8a8f9d]/40 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#8a8f9d] mb-1">
                      MESSAGE_PAYLOAD //
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      placeholder="Detail opportunity, role specifications, or project inquiry..."
                      className="w-full px-3 py-2 bg-[#060608] border border-[#222533] focus:border-[#fcee0a] text-xs text-white placeholder-[#8a8f9d]/40 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#ff003c] hover:bg-[#ff003c]/90 text-white font-extrabold text-xs uppercase tracking-widest transition-all clip-cyber-button flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(255,0,60,0.4)]"
                  >
                    <Send size={14} />
                    <span>DISPATCH DIRECT MESSAGE</span>
                  </button>
                </form>
              )}
            </div>

            {/* Quick Contact Metadata */}
            <div className="mt-6 pt-4 border-t border-[#222533] flex flex-wrap items-center justify-between gap-3 text-xs">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 text-[#8a8f9d] hover:text-[#fcee0a] transition-colors cursor-pointer"
                title="Copy Email Address"
              >
                <Mail size={13} />
                <span>{directEmail}</span>
                {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
              </button>

              <a
                href="https://github.com/Dr-Ghost7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#8a8f9d] hover:text-white transition-colors"
              >
                <GithubIcon size={13} />
                <span>Dr-Ghost7</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
