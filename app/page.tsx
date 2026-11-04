import { getGitHubData, GITHUB_USERNAME } from '@/lib/github';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { HudTicker } from '@/components/HudTicker';
import { ProjectsDeck } from '@/components/ProjectsDeck';
import { GitHubStatsDeck } from '@/components/GitHubStatsDeck';
import { SkillMatrix } from '@/components/SkillMatrix';
import { TerminalContact } from '@/components/TerminalContact';
import { Footer } from '@/components/Footer';

export default async function HomePage() {
  // Fetch real GitHub telemetry on the server
  const { profile, repos } = await getGitHubData();

  return (
    <main className="min-h-screen flex flex-col bg-[#060608] selection:bg-[#fcee0a] selection:text-black">
      {/* Top Navigation Bar with Audio Synthesizer */}
      <Navbar githubLogin={GITHUB_USERNAME} />

      {/* Hero Section with Interactive Particle Canvas & Live Equalizer */}
      <Hero />

      {/* Moving Telemetry Marquee Ticker */}
      <HudTicker />

      {/* Separated Technical Works and Creative Works Showcases */}
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
