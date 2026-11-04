import { getGitHubData, GITHUB_USERNAME } from '@/lib/github';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { CyberParticles } from '@/components/CyberParticles';
import { CyberDivider } from '@/components/CyberDivider';
import { DigitalHazardTape } from '@/components/DigitalHazardTape';
import { ProjectsDeck } from '@/components/ProjectsDeck';
import { GitHubStatsDeck } from '@/components/GitHubStatsDeck';
import { SkillMatrix } from '@/components/SkillMatrix';
import { TerminalContact } from '@/components/TerminalContact';
import { Footer } from '@/components/Footer';

export default async function HomePage() {
  // Fetch real GitHub telemetry on the server
  const { profile, repos } = await getGitHubData();

  return (
    <main className="min-h-screen flex flex-col bg-[#060608] selection:bg-[#fcee0a] selection:text-black relative">
      {/* Full-viewport ambient cyber particles (lightweight, runs across the entire page) */}
      <CyberParticles />

      {/* Decluttered Top Navigation Bar */}
      <Navbar githubLogin={GITHUB_USERNAME} />

      {/* Clutter-Free Hero Section */}
      <Hero />

      {/* Digital Police / Hazard Tape Marquee with Arrow Edges (Hero -> Projects Gateway) */}
      <DigitalHazardTape />

      {/* Projects Showcase (Technical Works & Creative Works) */}
      <ProjectsDeck />

      {/* Section Transition Gap: Projects -> GitHub */}
      <CyberDivider />

      {/* Real-time GitHub Repositories Deck */}
      <GitHubStatsDeck initialProfile={profile} initialRepos={repos} />

      {/* Section Transition Gap: GitHub -> Skills */}
      <CyberDivider />

      {/* Core Competencies Matrix */}
      <SkillMatrix />

      {/* Section Transition Gap: Skills -> Contact */}
      <CyberDivider />

      {/* Interactive Contact Shell */}
      <TerminalContact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
