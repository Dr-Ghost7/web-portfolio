import { getGitHubData, GITHUB_USERNAME } from '@/lib/github';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { CyberParticles } from '@/components/CyberParticles';
import { CyberDivider } from '@/components/CyberDivider';
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

      {/* Yellow Cyberpunk Designed Accent Line (No Text) */}
      <CyberDivider />

      {/* Projects Showcase (Technical Works & Creative Works) */}
      <ProjectsDeck />

      {/* Real-time GitHub Repositories Deck */}
      <GitHubStatsDeck initialProfile={profile} initialRepos={repos} />

      {/* Core Competencies Matrix */}
      <SkillMatrix />

      {/* Interactive Contact Shell */}
      <TerminalContact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
