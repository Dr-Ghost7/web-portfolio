export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  topics: string[];
}

export interface GitHubProfile {
  login: string;
  name: string;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

export const GITHUB_USERNAME = 'Dr-Ghost7';

// Static fallback data in case GitHub API rate limits are encountered
const FALLBACK_PROFILE: GitHubProfile = {
  login: 'Dr-Ghost7',
  name: 'Sinjini Ghosh (Miss_StaticMoth)',
  avatar_url: 'https://avatars.githubusercontent.com/u/178496117?v=4',
  bio: 'Frontend Engineer & Visual Designer // Exploring intelligent interfaces & game systems',
  public_repos: 10,
  followers: 2,
  following: 0,
  html_url: 'https://github.com/Dr-Ghost7',
};

const FALLBACK_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: 'astar-vs-qlearning-simulation',
    description: 'Dynamic visual simulation of A* pathfinding vs Q-Learning reinforcement learning in obstacle spaces.',
    html_url: 'https://github.com/Dr-Ghost7/astar-vs-qlearning-simulation',
    homepage: null,
    stargazers_count: 1,
    forks_count: 0,
    language: 'Python',
    updated_at: new Date().toISOString(),
    topics: ['algorithms', 'ai', 'pathfinding', 'simulation'],
  },
  {
    id: 2,
    name: 'flag-memory-app',
    description: 'Interactive responsive cognitive challenge web app for global flag recognition.',
    html_url: 'https://github.com/Dr-Ghost7/flag-memory-app',
    homepage: null,
    stargazers_count: 1,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: new Date().toISOString(),
    topics: ['javascript', 'web-app', 'frontend'],
  },
  {
    id: 3,
    name: 'typelock',
    description: 'Precision typing velocity and input lock diagnostic interface.',
    html_url: 'https://github.com/Dr-Ghost7/typelock',
    homepage: null,
    stargazers_count: 0,
    forks_count: 0,
    language: 'JavaScript',
    updated_at: new Date().toISOString(),
    topics: ['javascript', 'typing-test', 'telemetry'],
  },
  {
    id: 4,
    name: 'aperio--the-maze',
    description: 'Published spatial survival labyrinth game developed in Godot Engine.',
    html_url: 'https://github.com/Dr-Ghost7/aperio--the-maze',
    homepage: null,
    stargazers_count: 1,
    forks_count: 0,
    language: 'GDScript',
    updated_at: new Date().toISOString(),
    topics: ['godot', 'gdscript', 'game-dev'],
  },
  {
    id: 5,
    name: 'SLM-voice-controlled-device-settings',
    description: 'Voice interface pipeline utilizing local Small Language Models for hardware calibration.',
    html_url: 'https://github.com/Dr-Ghost7/SLM-voice-controlled-device-settings',
    homepage: null,
    stargazers_count: 0,
    forks_count: 0,
    language: 'Python',
    updated_at: new Date().toISOString(),
    topics: ['slm', 'speech', 'hardware'],
  },
  {
    id: 6,
    name: 'decision_tool',
    description: 'Weighted multi-criteria analytical decision matrix command line interface.',
    html_url: 'https://github.com/Dr-Ghost7/decision_tool',
    homepage: null,
    stargazers_count: 0,
    forks_count: 0,
    language: 'Python',
    updated_at: new Date().toISOString(),
    topics: ['cli', 'python', 'analytics'],
  },
];

export async function getGitHubData(): Promise<{ profile: GitHubProfile; repos: GitHubRepo[] }> {
  try {
    const headers: HeadersInit = {
      'User-Agent': 'Nextjs-Cyber-Portfolio',
      Accept: 'application/vnd.github.v3+json',
    };

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
        headers,
        next: { revalidate: 1800 },
      }),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`, {
        headers,
        next: { revalidate: 1800 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      console.warn('GitHub API rate limited or unavailable, falling back to static data.');
      return { profile: FALLBACK_PROFILE, repos: FALLBACK_REPOS };
    }

    const profile: GitHubProfile = await userRes.json();
    const repos: GitHubRepo[] = await reposRes.json();

    return { profile, repos: Array.isArray(repos) ? repos : FALLBACK_REPOS };
  } catch (error) {
    console.error('Failed to fetch GitHub telemetry:', error);
    return { profile: FALLBACK_PROFILE, repos: FALLBACK_REPOS };
  }
}
