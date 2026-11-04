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
    challenges: string;
    deliverables: string[];
    palette?: string[];
  };
}

// 1. TECHNICAL WORKS (WEB APPS, ALGORITHMS & GAMES)
export const TECHNICAL_PROJECTS: ProjectItem[] = [
  {
    id: 'typelock',
    title: 'TypeLock',
    category: 'web',
    subtitle: 'Behavioral Biometric Keypad & Touch Dynamics',
    description:
      'PIN-pad lock screen authenticating users by typing rhythm—measuring dwell time, flight intervals, and touch dynamics with a live oscilloscope.',
    tags: ['JavaScript', 'Touch Dynamics', 'Biometrics', 'CSS3', 'Web Audio'],
    githubUrl: 'https://github.com/Dr-Ghost7/typelock',
    featured: true,
    metrics: [
      { label: 'CLASSIFIER', value: 'STATISTICAL' },
      { label: 'METRICS', value: 'DWELL & FLIGHT' },
      { label: 'UI', value: 'OSCILLOSCOPE' },
    ],
    image: '/screenshots/typelock.png',
    accentColor: 'yellow',
    details: {
      role: 'Developer & Designer',
      timeline: 'Web Application',
      challenges:
        'Capturing sub-millisecond pointer events across different touchscreens and building an explainable classification model.',
      deliverables: [
        'Live rhythm oscilloscope tracking dwell and flight times',
        'Enrollment and biometric verification workflow',
        'Custom tactile dark keypad interface',
      ],
      palette: ['#0a0d12', '#0f1420', '#3ee08a', '#f2a65a', '#5b9dff'],
    },
  },
  {
    id: 'flag-memory-app',
    title: 'Flag Memory',
    category: 'web',
    subtitle: 'Spaced Repetition & Cognitive Recall Web App',
    description:
      'Cognitive challenge app using a 3-tier Leitner Box spaced repetition system, progressive Death Mode, and audio feedback.',
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
      challenges:
        'Implementing 3-tier spaced repetition with difficulty scaling, countdown timers, and responsive layout without frameworks.',
      deliverables: [
        'Leitner Box cognitive progression system',
        'Timer-based Death mode with ramped difficulty',
        'Responsive layout with audio synthesizer feedback',
      ],
      palette: ['#060608', '#0d111a', '#00e676', '#fcee0a', '#ff003c'],
    },
  },
  {
    id: 'astar-vs-qlearning',
    title: 'A* vs. Q-Learning Simulation',
    category: 'web',
    subtitle: 'Heuristic Search vs. Reinforcement Learning',
    description:
      'Algorithmic benchmark evaluating deterministic A* search against reinforcement learning across 250 procedural mazes.',
    tags: ['Python', 'Algorithms', 'A* Search', 'Q-Learning', 'Simulation'],
    githubUrl: 'https://github.com/Dr-Ghost7/astar-vs-qlearning-simulation',
    featured: true,
    metrics: [
      { label: 'BENCHMARK', value: '250 MAZES' },
      { label: 'Q-LEARNING', value: '84.8% SUCCESS' },
      { label: 'A* SEARCH', value: '100% OPTIMAL' },
    ],
    image: '/screenshots/astar-qlearning.png',
    accentColor: 'red',
    details: {
      role: 'Developer',
      timeline: 'AI Simulation',
      challenges:
        'Balancing exploration vs exploitation parameters in Q-learning within a strict 150-episode budget.',
      deliverables: [
        'Procedural maze generation and A* optimal solver',
        'Q-Learning agent with reward shaping',
        'Benchmarking engine with scatter plot visualizer in app.py',
      ],
      palette: ['#08080c', '#12131c', '#fcee0a', '#ff003c', '#3ee08a'],
    },
  },
  {
    id: 'gangling-bros-forest',
    title: "Gangling Bro's Forest",
    category: 'gamedev',
    subtitle: 'Published Indie Game on itch.io (Project2alpha)',
    description:
      'Atmospheric 2D exploration game published on itch.io, featuring custom player mechanics in Godot Engine and GDScript.',
    tags: ['Godot Engine', 'GDScript', 'Game Dev', 'itch.io', 'Atmospheric'],
    githubUrl: 'https://github.com/Dr-Ghost7/Project2alpha',
    liveUrl: 'https://missstaticmoth.itch.io/gangling-bros-forest',
    featured: true,
    metrics: [
      { label: 'PLATFORM', value: 'ITCH.IO' },
      { label: 'ENGINE', value: 'GODOT ENGINE' },
      { label: 'SCRIPTING', value: 'GDSCRIPT' },
    ],
    image: '/screenshots/gangling-forest.png',
    accentColor: 'red',
    details: {
      role: 'Game Programmer & Designer',
      timeline: 'Published Title',
      challenges:
        'Crafting responsive movement physics, collision handling, and moody environmental visuals within Godot.',
      deliverables: [
        'Player movement and camera controller in GDScript',
        'Atmospheric environmental visual presentation',
        'Playable game published on itch.io',
      ],
      palette: ['#060807', '#0c1a14', '#183a2b', '#3ee08a', '#fa5c5c'],
    },
  },
];

// 2. CREATIVE & VISUAL WORKS (CANVA GRAPHIC DESIGN & IBIS PAINT X DIGITAL ART)
export const CREATIVE_PROJECTS: ProjectItem[] = [
  {
    id: 'ampliverse',
    title: 'Ampliverse',
    category: 'design',
    subtitle: 'Poster Layout & Visual Design (Canva)',
    description:
      'High-contrast typographic poster layout and visual composition designed in Canva.',
    tags: ['Canva', 'Graphic Design', 'Poster Design', 'Typography'],
    featured: true,
    metrics: [
      { label: 'TOOL', value: 'CANVA' },
      { label: 'FORMAT', value: 'POSTER' },
      { label: 'STYLE', value: 'HIGH CONTRAST' },
    ],
    image: '/graphics-design/ampliverse.jpg',
    accentColor: 'yellow',
    details: {
      role: 'Graphic Designer',
      timeline: 'Visual Design',
      challenges: 'Balancing bold typographic hierarchy and negative space.',
      deliverables: [
        'Print and digital poster composition',
        'High-contrast color grading',
      ],
      palette: ['#0d0e14', '#1a1d2e', '#00c4cc', '#fcee0a', '#ff003c'],
    },
  },
  {
    id: 'ignatius',
    title: 'Ignatius',
    category: 'design',
    subtitle: 'Character Key Visual & Editorial Layout (Canva)',
    description:
      'Character-driven key visual and modern editorial layout created in Canva.',
    tags: ['Canva', 'Graphic Design', 'Key Visual', 'Typography'],
    featured: true,
    metrics: [
      { label: 'TOOL', value: 'CANVA' },
      { label: 'RESOLUTION', value: '1920 x 1920' },
      { label: 'FORMAT', value: 'KEY VISUAL' },
    ],
    image: '/graphics-design/ignatius.png',
    accentColor: 'red',
    details: {
      role: 'Graphic Designer',
      timeline: 'Key Visual',
      challenges: 'Integrating focal character art with structured graphic typography.',
      deliverables: [
        '1920x1920 square key visual',
        'Typography and layout arrangement in Canva',
      ],
      palette: ['#0a0a0c', '#181820', '#ff003c', '#ffffff', '#8a8f9d'],
    },
  },
  {
    id: 'zda-onboarding',
    title: 'ZDA Onboarding',
    category: 'design',
    subtitle: 'UI Onboarding Flow & Visual Layout (Canva)',
    description:
      'Onboarding layout and instructional visual communication designed in Canva.',
    tags: ['Canva', 'UI Design', 'Onboarding Layout', 'Visual Communication'],
    featured: false,
    metrics: [
      { label: 'TOOL', value: 'CANVA' },
      { label: 'FOCUS', value: 'ONBOARDING UI' },
      { label: 'STRUCTURE', value: 'STEP-BY-STEP' },
    ],
    image: '/graphics-design/zda-onboarding.png',
    accentColor: 'white',
    details: {
      role: 'UI Designer',
      timeline: 'UI Layout',
      challenges: 'Organizing complex instructions into a clean visual sequence.',
      deliverables: [
        'Step-by-step onboarding screen layout',
        'Iconography and structured card presentation',
      ],
      palette: ['#0f1118', '#1a1f2e', '#3ee08a', '#5b9dff', '#ffffff'],
    },
  },
  {
    id: 'ghost-art',
    title: 'Ghost',
    category: 'art',
    subtitle: 'Atmospheric Digital Painting (Ibis Paint X)',
    description:
      'Atmospheric digital painting created in Ibis Paint X with low-light values and subtle lighting.',
    tags: ['Ibis Paint X', 'Digital Painting', 'Illustration', 'Mood Lighting'],
    featured: true,
    metrics: [
      { label: 'TOOL', value: 'IBIS PAINT X' },
      { label: 'CANVAS', value: '3400 x 2105' },
      { label: 'STYLE', value: 'ATMOSPHERIC' },
    ],
    image: '/digital-art/ghost.png',
    accentColor: 'yellow',
    details: {
      role: 'Digital Illustrator',
      timeline: 'Digital Artwork',
      challenges: 'Rendering subtle low-light values and luminous neon accents against deep shadows.',
      deliverables: [
        '3.4K master illustration (3400x2105)',
        'Atmospheric depth and digital brushwork in Ibis Paint X',
      ],
      palette: ['#040507', '#0e121a', '#fcee0a', '#00e676', '#ffffff'],
    },
  },
  {
    id: 'bookstore-art',
    title: 'BookStore',
    category: 'art',
    subtitle: 'Environmental Digital Illustration (Ibis Paint X)',
    description:
      'Environmental and architectural interior digital illustration crafted in Ibis Paint X.',
    tags: ['Ibis Paint X', 'Environment Art', 'Digital Painting', 'Interior'],
    featured: true,
    metrics: [
      { label: 'TOOL', value: 'IBIS PAINT X' },
      { label: 'GENRE', value: 'ENVIRONMENT' },
      { label: 'CANVAS', value: '1280 x 1280' },
    ],
    image: '/digital-art/bookstore.png',
    accentColor: 'red',
    details: {
      role: 'Digital Illustrator',
      timeline: 'Environment Art',
      challenges: 'Constructing warm interior perspective and detailed line work.',
      deliverables: [
        'Detailed architectural interior scene',
        'Color grading and lighting composition in Ibis Paint X',
      ],
      palette: ['#120f0d', '#291e18', '#f2a65a', '#fa5c5c', '#faeedc'],
    },
  },
  {
    id: 'self-portrait-art',
    title: 'Self-Portrait',
    category: 'art',
    subtitle: 'Stylized Digital Character Portrait (Ibis Paint X)',
    description:
      'Stylized digital character portrait illustrated in Ibis Paint X with expressive linework.',
    tags: ['Ibis Paint X', 'Portrait Art', 'Digital Drawing', 'Character Art'],
    featured: false,
    metrics: [
      { label: 'TOOL', value: 'IBIS PAINT X' },
      { label: 'GENRE', value: 'PORTRAIT' },
      { label: 'MEDIUM', value: 'DIGITAL DRAWING' },
    ],
    image: '/digital-art/selfportrait.png',
    accentColor: 'white',
    details: {
      role: 'Artist & Illustrator',
      timeline: 'Character Art',
      challenges: 'Capturing expressive likeness through digital pencil and brush techniques.',
      deliverables: [
        'Stylized portrait illustration (1080x1445)',
        'Digital artwork created in Ibis Paint X',
      ],
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
      { name: 'JavaScript (ES6+)', level: 'ADVANCED', desc: 'DOM manipulation, Touch & Pointer events, Async/Await, Canvas, Web Audio' },
      { name: 'React.js', level: 'ACTIVE', desc: 'Component architecture, Hooks (useState, useEffect, useMemo), state flow' },
      { name: 'Next.js 15', level: 'MODERN', desc: 'App Router, Server Components, SSR, Image optimization, Edge routes' },
      { name: 'HTML5 & CSS3', level: 'MASTER', desc: 'Semantic layout, CSS Grid, Flexbox, Keyframe animations, Responsive design' },
      { name: 'Tailwind CSS', level: 'ADVANCED', desc: 'Rapid utility styling, custom dark themes, high-contrast layouts' },
      { name: 'TypeScript', level: 'PROFICIENT', desc: 'Type safety, interfaces, props definition, robust codebase design' },
    ],
  },
  {
    category: 'GRAPHIC DESIGN & DIGITAL ART',
    accent: 'red',
    skills: [
      { name: 'Canva', level: 'ADVANCED', desc: 'Brand kits, promotional posters, presentation decks, typography layouts' },
      { name: 'Ibis Paint X', level: 'ADVANCED', desc: 'Digital illustration, character concept art, layer blending, brushwork' },
      { name: 'CSS Art & UI Design', level: 'ADVANCED', desc: 'Handcrafted UI components, chamfered clip-paths, glowing accents' },
      { name: 'Visual Hierarchy', level: 'PROFICIENT', desc: 'Contrast balancing, typography pairing, spatial arrangement' },
    ],
  },
  {
    category: 'GAME DEVELOPMENT & PROGRAMMING',
    accent: 'white',
    skills: [
      { name: 'Godot Engine & GDScript', level: 'PUBLISHED', desc: 'Published Gangling Bro’s Forest on itch.io; 2D physics & movement' },
      { name: 'Python', level: 'ADVANCED', desc: 'AI simulations, A* heuristic pathfinding, Q-Learning reinforcement learning' },
      { name: 'Git & GitHub', level: 'ADVANCED', desc: 'Version control, repository management, open-source project tracking' },
      { name: 'Academic Background', level: 'FINAL YEAR', desc: 'B.Tech in Computer Science & Engineering (Class of mid-2027)' },
    ],
  },
];
