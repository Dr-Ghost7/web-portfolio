import { getGitHubData, GITHUB_USERNAME } from '@/lib/github';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProjectsDeck } from '@/components/ProjectsDeck';
import { GitHubStatsDeck } from '@/components/GitHubStatsDeck';
import { SkillMatrix } from '@/components/SkillMatrix';
import { TerminalContact } from '@/components/TerminalContact';
import { Footer } from '@/components/Footer';

export default async function HomePage() {
  // Fetch real GitHub telemetry on the server (Next.js Server Component pattern)
  const { profile, repos } = await getGitHubData();

  return (
    <main className="min-h-screen flex flex-col bg-[#060608] selection:bg-[#fcee0a] selection:text-black">
      {/* Top HUD Navigation Bar with System Clock and Audio Synthesizer */}
      <Navbar githubLogin={GITHUB_USERNAME} />

      {/* Hero Section with Dual Identity & Recruiter Value Proposition */}
      <Hero />

      {/* Sector 01: Dev & Graphic Design Dual Showcase with Lightbox Inspector */}
      <ProjectsDeck initialFilter="all" />

      {/* Sector 02: Real-time Live GitHub Pipeline & Filter Deck */}
      <GitHubStatsDeck initialProfile={profile} initialRepos={repos} />

      {/* Sector 03: Core Competency Matrix (React, Next.js, JS, Figma, Godot) */}
      <SkillMatrix />

      {/* Sector 04: Communications Hub with Interactive Terminal CLI */}
      <TerminalContact />

      {/* System Diagnostics Footer */}
      <Footer />
    </main>
  );
}
