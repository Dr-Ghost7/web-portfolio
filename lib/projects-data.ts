export interface ProjectItem {
  id: string;
  title: string;
  category: 'web' | 'gamedev' | 'design' | 'art';
  subtitle: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
  image: string;
  accentColor: 'yellow' | 'red' | 'white';
  details?: {
    role: string;
    timeline: string;
    deliverables?: string[];
    palette?: string[];
  };
}

// 1. TECHNICAL WORKS (WEB APPS & GAME DEV)
export const TECHNICAL_PROJECTS: ProjectItem[] = [
  {
    id: 'typelock',
    title: 'TypeLock',
    category: 'web',
    subtitle: 'Behavioral Biometric Keypad',
    description:
      'PIN-pad lock screen authenticating users by typing rhythm, touch dynamics, and hold duration with a live oscilloscope.',
    tags: ['JavaScript', 'Biometrics', 'Touch Dynamics', 'CSS3', 'Web Audio'],
    githubUrl: 'https://github.com/Dr-Ghost7/typelock',
    featured: true,
    metrics: [
      { label: 'CLASSIFIER', value: 'STATISTICAL' },
      { label: 'TELEMETRY', value: 'DWELL & FLIGHT' },
      { label: 'UI', value: 'OSCILLOSCOPE' },
    ],
    image: '/screenshots/typelock.png',
    accentColor: 'yellow',
    details: {
      role: 'Developer & Designer',
      timeline: 'Web Application',
      deliverables: [
        'Real-time rhythm oscilloscope for dwell/flight times',
        'Enrollment and biometric verification workflow',
      ],
      palette: ['#0a0d12', '#0f1420', '#3ee08a', '#f2a65a', '#5b9dff'],
    },
  },
  {
    id: 'flag-memory-app',
    title: 'Flag Memory',
    category: 'web',
    subtitle: 'Spaced Repetition Web App',
    description:
      'Cognitive challenge web app featuring a 3-tier Leitner Box spaced repetition system and rapid Death Mode.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Spaced Repetition', 'Web Audio'],
    githubUrl: 'https://github.com/Dr-Ghost7/flag-memory-app',
    featured: true,
    metrics: [
      { label: 'ALGORITHM', value: 'LEITNER SYSTEM' },
      { label: 'MODES', value: 'ACADEMY & DEATH' },
      { label: 'AUDIO', value: 'WEB AUDIO' },
    ],
    image: '/screenshots/flag-memory.png',
    accentColor: 'yellow',
    details: {
      role: 'Developer & Designer',
      timeline: 'Web Application',
      deliverables: [
        'Leitner Box cognitive spaced repetition',
        'Countdown Death mode with difficulty scaling',
      ],
      palette: ['#060608', '#0d111a', '#00e676', '#fcee0a', '#ff003c'],
    },
  },
  {
    id: 'astar-vs-qlearning',
    title: 'A* vs. Q-Learning Simulation',
    category: 'web',
    subtitle: 'Pathfinding vs. Reinforcement Learning',
    description:
      'Benchmark simulation evaluating deterministic A* search against a Q-Learning agent across 250 procedural mazes.',
    tags: ['Python', 'Algorithms', 'A* Search', 'Q-Learning', 'Simulation'],
    githubUrl: 'https://github.com/Dr-Ghost7/astar-vs-qlearning-simulation',
    featured: true,
    metrics: [
      { label: 'BENCHMARK', value: '250 MAZES' },
      { label: 'Q-CONVERGENCE', value: '84.8% SUCCESS' },
      { label: 'SEARCH', value: 'OPTIMAL A*' },
    ],
    image: '/screenshots/astar-qlearning.png',
    accentColor: 'red',
    details: {
      role: 'Developer & Researcher',
      timeline: 'AI Simulation',
      deliverables: [
        'A* and Q-Learning comparative maze solvers',
        'Telemetry visualization and convergence benchmarks',
      ],
      palette: ['#08080c', '#12131c', '#fcee0a', '#ff003c', '#3ee08a'],
    },
  },
  {
    id: 'gangling-bros-forest',
    title: "Gangling Bro's Forest",
    category: 'gamedev',
    subtitle: '3D Story Horror Game on itch.io (Godot)',
    description:
      'A 3D story-based horror game where you play as a park ranger following objectives and fleeing an unknown creature, with a psychological twist questioning your sanity.',
    tags: ['Godot 3D', 'GDScript', '3D Horror', 'Psychological', 'itch.io'],
    githubUrl: 'https://github.com/Dr-Ghost7/Project2alpha',
    liveUrl: 'https://missstaticmoth.itch.io/gangling-bros-forest',
    featured: true,
    metrics: [
      { label: 'GENRE', value: '3D HORROR' },
      { label: 'PLATFORM', value: 'ITCH.IO' },
      { label: 'ENGINE', value: 'GODOT 3D' },
    ],
    image: '/screenshots/gangling-forest.png',
    accentColor: 'red',
    details: {
      role: 'Game Programmer & Narrative',
      timeline: 'Published on itch.io',
      deliverables: [
        '3D player controller, objective logic & creature encounter',
        'Story-driven psychological horror narrative',
      ],
      palette: ['#060807', '#0c1a14', '#183a2b', '#3ee08a', '#fa5c5c'],
    },
  },
];

// 2. CREATIVE & VISUAL WORKS (CANVA & IBIS PAINT X)
export const CREATIVE_PROJECTS: ProjectItem[] = [
  {
    id: 'ampliverse',
    title: 'Ampliverse',
    category: 'design',
    subtitle: 'Poster Composition (Canva)',
    description:
      'High-contrast typographic poster layout and visual composition designed in Canva.',
    tags: ['Canva', 'Graphic Design', 'Poster Design', 'Typography'],
    featured: true,
    metrics: [
      { label: 'TOOL', value: 'CANVA' },
      { label: 'FORMAT', value: 'POSTER' },
      { label: 'CONTRAST', value: 'HIGH' },
    ],
    image: '/graphics-design/ampliverse.jpg',
    accentColor: 'yellow',
    details: {
      role: 'Graphic Designer',
      timeline: 'Canva Design',
      deliverables: ['Poster typography composition and color layout'],
      palette: ['#0d0e14', '#1a1d2e', '#00c4cc', '#fcee0a', '#ff003c'],
    },
  },
  {
    id: 'ignatius',
    title: 'Ignatius',
    category: 'design',
    subtitle: 'Character Key Visual (Canva)',
    description:
      'Character-driven key visual and modern editorial layout created in Canva.',
    tags: ['Canva', 'Graphic Design', 'Key Visual', 'Typography'],
    featured: true,
    metrics: [
      { label: 'TOOL', value: 'CANVA' },
      { label: 'SCALE', value: '1920 x 1920' },
      { label: 'TYPE', value: 'KEY VISUAL' },
    ],
    image: '/graphics-design/ignatius.png',
    accentColor: 'red',
    details: {
      role: 'Graphic Designer',
      timeline: 'Canva Design',
      deliverables: ['Square key visual and typographic framing'],
      palette: ['#0a0a0c', '#181820', '#ff003c', '#ffffff', '#8a8f9d'],
    },
  },
  {
    id: 'zda-onboarding',
    title: 'ZDA Onboarding',
    category: 'design',
    subtitle: 'UI Onboarding Layout (Canva)',
    description:
      'Instructional visual onboarding flow and card layout designed in Canva.',
    tags: ['Canva', 'UI Design', 'Onboarding Layout'],
    featured: false,
    metrics: [
      { label: 'TOOL', value: 'CANVA' },
      { label: 'LAYOUT', value: 'ONBOARDING' },
      { label: 'STYLE', value: 'STEP-BY-STEP' },
    ],
    image: '/graphics-design/zda-onboarding.png',
    accentColor: 'white',
    details: {
      role: 'UI Designer',
      timeline: 'Canva Design',
      deliverables: ['Step-by-step onboarding screen layout'],
      palette: ['#0f1118', '#1a1f2e', '#3ee08a', '#5b9dff', '#ffffff'],
    },
  },
  {
    id: 'ghost-art',
    title: 'Ghost',
    category: 'art',
    subtitle: 'Atmospheric Digital Painting (Ibis Paint X)',
    description:
      'Atmospheric digital painting created in Ibis Paint X focusing on low-light mood and subtle lighting.',
    tags: ['Ibis Paint X', 'Digital Painting', 'Mood & Lighting'],
    featured: true,
    metrics: [
      { label: 'TOOL', value: 'IBIS PAINT X' },
      { label: 'MASTER', value: '3400 x 2105' },
      { label: 'MEDIUM', value: 'DIGITAL BRUSH' },
    ],
    image: '/digital-art/ghost.png',
    accentColor: 'yellow',
    details: {
      role: 'Illustrator',
      timeline: 'Ibis Paint X Art',
      deliverables: ['3.4K master digital illustration with low-light values'],
      palette: ['#040507', '#0e121a', '#fcee0a', '#00e676', '#ffffff'],
    },
  },
  {
    id: 'bookstore-art',
    title: 'BookStore',
    category: 'art',
    subtitle: 'Interior Digital Illustration (Ibis Paint X)',
    description:
      'Environmental and architectural interior digital illustration crafted in Ibis Paint X with cozy perspective.',
    tags: ['Ibis Paint X', 'Environment Art', 'Digital Painting'],
    featured: true,
    metrics: [
      { label: 'TOOL', value: 'IBIS PAINT X' },
      { label: 'GENRE', value: 'INTERIOR' },
      { label: 'CANVAS', value: '1280 x 1280' },
    ],
    image: '/digital-art/bookstore.png',
    accentColor: 'red',
    details: {
      role: 'Illustrator',
      timeline: 'Ibis Paint X Art',
      deliverables: ['Detailed architectural interior digital painting'],
      palette: ['#120f0d', '#291e18', '#f2a65a', '#fa5c5c', '#faeedc'],
    },
  },
  {
    id: 'self-portrait-art',
    title: 'Self-Portrait',
    category: 'art',
    subtitle: 'Character Portrait (Ibis Paint X)',
    description:
      'Stylized digital character portrait illustrated in Ibis Paint X with expressive linework.',
    tags: ['Ibis Paint X', 'Portrait Art', 'Digital Drawing'],
    featured: false,
    metrics: [
      { label: 'TOOL', value: 'IBIS PAINT X' },
      { label: 'GENRE', value: 'PORTRAIT' },
      { label: 'STYLE', value: 'STYLIZED' },
    ],
    image: '/digital-art/selfportrait.png',
    accentColor: 'white',
    details: {
      role: 'Illustrator',
      timeline: 'Ibis Paint X Art',
      deliverables: ['Stylized digital character drawing'],
      palette: ['#0d0c12', '#1a1924', '#ff3b69', '#d1c7e6', '#ffffff'],
    },
  },
];

export const ALL_PROJECTS: ProjectItem[] = [...TECHNICAL_PROJECTS, ...CREATIVE_PROJECTS];
export const PROJECTS_DATA = ALL_PROJECTS;

export const SKILLS_MATRIX = [
  {
    category: 'FRONTEND DEVELOPMENT',
    accent: 'yellow',
    skills: [
      { name: 'JavaScript (ES6+)', level: 'ADVANCED', desc: 'DOM, Touch & Pointer events, Async/Await, Canvas, Web Audio' },
      { name: 'React.js', level: 'ACTIVE', desc: 'Component architecture, Hooks, state synchronization' },
      { name: 'Next.js 15', level: 'MODERN', desc: 'App Router, Server Components, SSR, Image optimization' },
      { name: 'HTML5 & CSS3', level: 'MASTER', desc: 'Semantic layout, CSS Grid, Flexbox, Keyframes, Responsive design' },
      { name: 'Tailwind CSS', level: 'ADVANCED', desc: 'Utility styling, custom dark themes, high-contrast layouts' },
      { name: 'TypeScript', level: 'PROFICIENT', desc: 'Type safety, interfaces, props definition' },
    ],
  },
  {
    category: 'GRAPHIC DESIGN & DIGITAL ART',
    accent: 'red',
    skills: [
      { name: 'Canva', level: 'ADVANCED', desc: 'Brand kits, promotional posters, presentation decks, layout design' },
      { name: 'Ibis Paint X', level: 'ADVANCED', desc: 'Digital illustration, character concept art, brushwork' },
      { name: 'CSS Art & UI Design', level: 'ADVANCED', desc: 'Custom clip-paths, glowing accents, responsive layouts' },
      { name: 'Visual Hierarchy', level: 'PROFICIENT', desc: 'Contrast balancing, typography pairing, spatial layout' },
    ],
  },
  {
    category: 'GAME DEVELOPMENT & PROGRAMMING',
    accent: 'white',
    skills: [
      { name: 'Godot 3D & GDScript', level: 'PUBLISHED', desc: 'Published Gangling Bro’s Forest (3D Horror) on itch.io' },
      { name: 'Python', level: 'ADVANCED', desc: 'AI simulations, A* heuristic pathfinding, Q-Learning' },
      { name: 'Git & GitHub', level: 'ADVANCED', desc: 'Version control, repository management, CI/CD' },
      { name: 'Academic Background', level: 'FINAL YEAR', desc: 'B.Tech in Computer Science & Engineering (Class of mid-2027)' },
    ],
  },
];
