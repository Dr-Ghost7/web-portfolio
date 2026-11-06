'use client';

import React, { useState } from 'react';
import { Terminal, Send, Check, Copy, Mail, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { cyberAudio } from '@/lib/sounds';

export function TerminalContact() {
  const directEmail = 'sguse001@gmail.com';

  const [terminalInput, setTerminalInput] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    'Interactive Terminal Shell // Type "help" for a list of available commands.',
    'Or write your message directly in the contact form on the right.',
  ]);

  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    cyberAudio.playClick();
    const newLogs = [...terminalOutput, `> ${terminalInput}`];

    switch (cmd) {
      case 'help':
        newLogs.push(
          'AVAILABLE COMMANDS:',
          '  projects    - Scroll to portfolio projects',
          '  github      - Open GitHub profile',
          '  skills      - View technical and creative skills',
          '  email       - Show direct contact email address',
          '  status      - Display current academic status and graduation',
          '  clear       - Clear terminal history'
        );
        break;
      case 'projects':
        window.location.hash = '#projects';
        newLogs.push('Navigating to Projects section...');
        break;
      case 'github':
        window.open('https://github.com/Dr-Ghost7', '_blank');
        newLogs.push('Opening https://github.com/Dr-Ghost7...');
        break;
      case 'skills':
        window.location.hash = '#skills';
        newLogs.push('Navigating to Skills section...');
        break;
      case 'email':
        newLogs.push(`Email: ${directEmail}`);
        break;
      case 'status':
        newLogs.push(
          'Status: Final Year B.Tech CSE (graduating mid-2027).',
          'Looking for: Front-End / Web Development internships and roles.'
        );
        break;
      case 'clear':
        setTerminalOutput([]);
        setTerminalInput('');
        return;
      default:
        newLogs.push(`Command not recognized: "${cmd}". Type "help" for list.`);
    }

    setTerminalOutput(newLogs);
    setTerminalInput('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    cyberAudio.playSuccess();
    const mailto = `mailto:${directEmail}?subject=${encodeURIComponent(
      `Portfolio Message from ${formName}`
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
            <Mail size={14} />
            <span>CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#f5f6fa]">
            GET IN <span className="text-[#ff003c]">TOUCH</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9ca3af] mt-2 max-w-xl">
            Reach out regarding frontend engineering roles, React.js projects, or creative design collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Interactive Terminal */}
          <div className="lg:col-span-6 flex flex-col bg-[#0b0c10] border border-[#222533] p-5 font-mono clip-cyber-corner">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#222533] text-sm text-[#8a8f9d]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff003c]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#fcee0a]" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 text-white font-bold text-xs sm:text-sm">TERMINAL // SHELL</span>
              </div>
              <span className="text-xs text-[#fcee0a] font-bold">INTERACTIVE</span>
            </div>

            {/* Terminal Log Output */}
            <div className="flex-1 min-h-[220px] max-h-[300px] overflow-y-auto space-y-1.5 text-xs sm:text-sm text-[#d1d5db] mb-3 pr-1 leading-relaxed">
              {terminalOutput.map((log, idx) => (
                <div
                  key={idx}
                  className={`${
                    log.startsWith('>')
                      ? 'text-[#fcee0a] font-bold'
                      : log.startsWith('AVAILABLE')
                      ? 'text-[#ff003c] font-bold'
                      : 'text-[#9ca3af]'
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>

            {/* Command Input Form */}
            <form onSubmit={handleCommand} className="flex items-center gap-2 border-t border-[#222533] pt-3">
              <span className="text-[#fcee0a] text-sm font-bold">&gt;</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => {
                  setTerminalInput(e.target.value);
                  cyberAudio.playTyping();
                }}
                placeholder="type 'help', 'status', 'email', 'projects'..."
                className="flex-1 bg-transparent text-sm text-[#f5f6fa] focus:outline-none placeholder-[#8a8f9d]/60 font-mono"
              />
              <button
                type="submit"
                onMouseEnter={() => cyberAudio.playHover()}
                onClick={() => cyberAudio.playLaser()}
                className="px-3 py-1.5 bg-[#14151f] hover:bg-[#fcee0a] text-white hover:text-black text-xs font-bold transition-colors cursor-pointer"
              >
                RUN
              </button>
            </form>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#0f1016] border border-[#222533] p-6 clip-cyber-card">
            <div>
              <h3 className="text-base font-bold text-white uppercase tracking-wider mb-5 flex flex-wrap items-center justify-between gap-2">
                <span>SEND DIRECT MESSAGE</span>
                <span className="text-[#fcee0a] text-sm font-mono font-bold">{directEmail}</span>
              </h3>

              {submitted ? (
                <div className="p-6 bg-[#13141c] border border-emerald-500/40 text-center space-y-3">
                  <div className="w-10 h-10 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Check size={20} />
                  </div>
                  <h4 className="text-base font-bold text-white">MESSAGE CLIENT OPENED</h4>
                  <p className="text-sm text-[#8a8f9d]">
                    Your default mail application has been opened with your message drafted.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 bg-[#222533] hover:bg-[#fcee0a] text-white hover:text-black text-xs font-bold transition-all"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-[#a1a6b4] mb-1.5">
                        YOUR NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={formName}
                        onChange={(e) => {
                          setFormName(e.target.value);
                          cyberAudio.playTyping();
                        }}
                        placeholder="e.g. Alex Vance"
                        className="w-full px-3.5 py-2.5 bg-[#060608] border border-[#222533] focus:border-[#fcee0a] text-sm text-white placeholder-[#8a8f9d]/50 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold text-[#a1a6b4] mb-1.5">
                        YOUR EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        value={formEmail}
                        onChange={(e) => {
                          setFormEmail(e.target.value);
                          cyberAudio.playTyping();
                        }}
                        placeholder="e.g. name@company.com"
                        className="w-full px-3.5 py-2.5 bg-[#060608] border border-[#222533] focus:border-[#fcee0a] text-sm text-white placeholder-[#8a8f9d]/50 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-[#a1a6b4] mb-1.5">
                      MESSAGE
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formMessage}
                      onChange={(e) => {
                        setFormMessage(e.target.value);
                        cyberAudio.playTyping();
                      }}
                      placeholder="Discuss role opportunities, project requirements, or questions..."
                      className="w-full px-3.5 py-2.5 bg-[#060608] border border-[#222533] focus:border-[#fcee0a] text-sm text-white placeholder-[#8a8f9d]/50 focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={() => cyberAudio.playHover()}
                    className="w-full py-3.5 bg-[#ff003c] hover:bg-[#ff003c]/90 text-white font-extrabold text-sm uppercase tracking-widest transition-all clip-cyber-button flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(255,0,60,0.4)]"
                  >
                    <Send size={15} />
                    <span>SEND MESSAGE</span>
                  </button>
                </form>
              )}
            </div>

            {/* Quick Contact Metadata */}
            <div className="mt-6 pt-4 border-t border-[#222533] flex flex-wrap items-center justify-between gap-3 text-sm">
              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => cyberAudio.playHover()}
                className="flex items-center gap-2 text-[#d1d5db] hover:text-[#fcee0a] font-mono transition-colors cursor-pointer"
                title="Copy Email Address"
              >
                <Mail size={15} />
                <span className="font-semibold">{directEmail}</span>
                {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
              </button>

              <a
                href="https://github.com/Dr-Ghost7"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => cyberAudio.playHover()}
                onClick={() => cyberAudio.playClick()}
                className="flex items-center gap-1.5 text-[#d1d5db] hover:text-white font-mono font-semibold transition-colors"
              >
                <GithubIcon size={15} />
                <span>Dr-Ghost7</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
