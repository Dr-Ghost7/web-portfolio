'use client';

import React, { useState, useEffect } from 'react';
import { GitHubProfile, GitHubRepo, GITHUB_USERNAME } from '@/lib/github';
import { Star, GitFork, Terminal, Search, ExternalLink, Activity, Code } from 'lucide-react';
import { GithubIcon } from '@/components/icons/GithubIcon';
import { cyberAudio } from '@/lib/sounds';

interface GitHubStatsDeckProps {
  initialProfile: GitHubProfile;
  initialRepos: GitHubRepo[];
}

export function GitHubStatsDeck({ initialProfile, initialRepos }: GitHubStatsDeckProps) {
  const [profile, setProfile] = useState<GitHubProfile>(initialProfile);
  const [repos, setRepos] = useState<GitHubRepo[]>(initialRepos);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('ALL');
  const [loading, setLoading] = useState<boolean>(false);

  // Dynamic fetch to ensure freshest GitHub state on mount
  useEffect(() => {
    async function fetchFreshData() {
      try {
        setLoading(true);
        const res = await fetch('/api/github');
        if (res.ok) {
          const data = await res.json();
          if (data.profile) setProfile(data.profile);
          if (data.repos && Array.isArray(data.repos)) setRepos(data.repos);
        }
      } catch (err) {
        console.warn('API route fallback:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchFreshData();
  }, []);

  const languages = ['ALL', ...Array.from(new Set(repos.map((r) => r.language).filter(Boolean) as string[]))];

  const filteredRepos = repos.filter((r) => {
    const matchesSearch = r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (r.description && r.description.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLang = selectedLanguage === 'ALL' || r.language === selectedLanguage;
    return matchesSearch && matchesLang;
  });

  return (
    <section id="github" className="py-16 md:py-24 border-b border-[#222533] bg-[#060608] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#222533]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff003c] uppercase tracking-widest mb-2">
              <Activity size={14} className="animate-pulse" />
              <span>SECTOR_02 // TELEMETRY DECK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#f5f6fa]">
              LIVE GITHUB <span className="text-[#ff003c]">PIPELINE</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#8a8f9d] mt-2 max-w-xl">
              Direct telemetry from <span className="text-white font-mono">github.com/{GITHUB_USERNAME}</span>. Real-time repository index and algorithmic repositories.
            </p>
          </div>

          {/* GitHub Profile Card */}
          <div className="flex items-center gap-4 p-3 bg-[#13141c] border border-[#222533] clip-cyber-corner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profile.avatar_url}
              alt={profile.login}
              className="w-12 h-12 border border-[#fcee0a] object-cover"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white">{profile.name || profile.login}</span>
                <span className="text-[10px] px-1.5 py-0.2 bg-[#fcee0a] text-black font-bold font-mono">
                  VERIFIED
                </span>
              </div>
              <div className="text-[11px] text-[#8a8f9d] font-mono">@{profile.login}</div>
              <div className="flex items-center gap-3 text-[10px] text-[#a0a5b5] mt-1 font-mono">
                <span>REPOS: <strong className="text-white">{profile.public_repos}</strong></span>
                <span>FOLLOWERS: <strong className="text-white">{profile.followers}</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8a8f9d]" />
            <input
              type="text"
              placeholder="FILTER REPOSITORIES (e.g., simulation, flag, lock, maze)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-[#0f1016] border border-[#222533] text-xs text-[#f5f6fa] placeholder-[#8a8f9d]/50 focus:border-[#fcee0a] focus:outline-none font-mono"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 items-center">
            <span className="text-[11px] text-[#8a8f9d] font-mono mr-1">LANG:</span>
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  cyberAudio.playClick();
                  setSelectedLanguage(lang);
                }}
                className={`px-2.5 py-1 text-[11px] font-mono border transition-all cursor-pointer ${
                  selectedLanguage === lang
                    ? 'bg-[#ff003c] text-white border-[#ff003c]'
                    : 'bg-[#13141c] text-[#8a8f9d] border-[#222533] hover:text-white'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredRepos.map((repo) => (
            <div
              key={repo.id}
              onMouseEnter={() => cyberAudio.playHover()}
              className="p-5 bg-[#0d0e13] border border-[#222533] hover:border-[#fcee0a] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5">
                    <Terminal size={13} className="text-[#fcee0a]" />
                    <h3 className="text-sm font-bold text-white group-hover:text-[#fcee0a] transition-colors truncate">
                      {repo.name}
                    </h3>
                  </div>
                  <span className="px-1.5 py-0.5 bg-[#14151f] text-[10px] text-[#8a8f9d] font-mono border border-[#222533]">
                    {repo.language || 'Code'}
                  </span>
                </div>

                <p className="text-xs text-[#8a8f9d] line-clamp-2 min-h-[32px] leading-relaxed mb-4">
                  {repo.description || 'Public GitHub project repository.'}
                </p>
              </div>

              <div className="pt-3 border-t border-[#222533]/80 flex items-center justify-between text-xs text-[#8a8f9d] font-mono">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star size={12} className="text-[#fcee0a]" />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} />
                    <span>{repo.forks_count}</span>
                  </span>
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => cyberAudio.playClick()}
                  className="px-2.5 py-1 bg-[#14151f] group-hover:bg-[#fcee0a] text-white group-hover:text-black border border-[#222533] group-hover:border-[#fcee0a] text-[11px] font-bold flex items-center gap-1 transition-all"
                >
                  <span>INSPECT_GIT</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <div className="p-8 text-center border border-dashed border-[#222533] text-xs text-[#8a8f9d]">
            NO MATCHING PROTOCOLS FOUND FOR QUERY: &ldquo;{searchTerm}&rdquo;
          </div>
        )}
      </div>
    </section>
  );
}
