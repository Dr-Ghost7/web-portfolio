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
  };
}

// 1. TECHNICAL WORKS (WEB APPS & GAME DEV)
// Aligned order: Notepad, Neural, Astarmaze, flag, Typelock, gangling
export const TECHNICAL_PROJECTS: ProjectItem[] = [
  {
    id: 'completely-normal-notepad',
    title: 'Completely Normal Notepad',
    category: 'web',
    subtitle: 'Kinetic Text Editor',
    description:
      'A client-side text editor where deleted writing materializes into floating interactive kinetic entities that can be caught, bottled, or restored.',
    tags: ['Next.js', 'React 19', 'TypeScript', 'Tailwind CSS', 'Web Audio API'],
    githubUrl: 'https://github.com/Dr-Ghost7/completely-normal-notepad',
    liveUrl: 'https://completely-normal-notepad-beige.vercel.app',
    featured: true,
    metrics: [
      { label: 'FRAMEWORK', value: 'NEXT.JS 16' },
      { label: 'PHYSICS', value: 'VECTOR RAF' },
      { label: 'AUDIO', value: 'SYNTHESIZED' },
    ],
    image: '/screenshots/normal-notepad.jpg',
    accentColor: 'yellow',
    details: {
      role: 'Frontend Developer',
      timeline: 'Next.js & React 19',
      deliverables: [
        'Interactive kinetic deletion physics and specimen jar mechanics',
        'Procedural Web Audio synthesis and local persistence',
      ],
    },
  },
  {
    id: 'neural-network-xray',
    title: 'Neural Network X-Ray',
    category: 'web',
    subtitle: '3D WebGL Neural Visualizer',
    description:
      'An interactive 3D WebGL visualizer and ablation sandbox for real-time MNIST neural network inference running directly in the browser.',
    tags: ['Three.js', 'React Three Fiber', 'Next.js', 'TypeScript', 'Zustand'],
    githubUrl: 'https://github.com/Dr-Ghost7/neural-network-xray',
    liveUrl: 'https://neural-network-xray-98rk-tau.vercel.app',
    featured: true,
    metrics: [
      { label: 'GRAPHICS', value: 'THREE.JS / R3F' },
      { label: 'INFERENCE', value: '<0.15MS / FRAME' },
      { label: 'WEIGHTS', value: '97.26% ACCURACY' },
    ],
    image: '/screenshots/neural-network.png',
    accentColor: 'red',
    details: {
      role: 'Frontend & Graphics Developer',
      timeline: 'Three.js & Next.js',
      deliverables: [
        'InstancedMesh 3D synaptic network and real-time digit drawing canvas',
        'Sub-millisecond forward-pass engine and live neuron ablation controls',
      ],
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
    accentColor: 'yellow',
    details: {
      role: 'Developer & Researcher',
      timeline: 'AI Simulation',
      deliverables: [
        'A* and Q-Learning comparative maze solvers',
        'Telemetry visualization and convergence benchmarks',
      ],
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
    accentColor: 'red',
    details: {
      role: 'Developer & Designer',
      timeline: 'Web Application',
      deliverables: [
        'Leitner Box cognitive spaced repetition',
        'Countdown Death mode with difficulty scaling',
      ],
    },
  },
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
    },
  },
];

// 2. CREATIVE & VISUAL WORKS (CANVA & IBIS PAINT X)
export const CREATIVE_PROJECTS: ProjectItem[] = [
  {
    id: 'ampliverse',
    title: 'Ampliverse',
    category: 'design',
    subtitle: 'Canva',
    description:
      "Designed for the club SNU Amplified's event, blending cosmic space themes, stars, and neon lights inspired by the 'AmpliVerse' universe concept.",
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
    },
  },
  {
    id: 'ignatius',
    title: 'Ignatius',
    category: 'design',
    subtitle: 'Canva',
    description:
      'A New Year greeting poster created for the Ignatius gaming community, incorporating well-known game characters and signs.',
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
    },
  },
  {
    id: 'zda-onboarding',
    title: 'ZDA Onboarding',
    category: 'design',
    subtitle: 'Canva',
    description:
      'Member onboarding visual for the ZeroDay Alliance cybersecurity club, styled after a hacked analog CRT monitor broadcast with glitch aesthetics.',
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
    },
  },
  {
    id: 'bookstore-art',
    title: 'BookStore',
    category: 'art',
    subtitle: 'Ibis Paint X',
    description:
      'A girl holding an umbrella outside a neon-lit bookstore in the rain.',
    tags: ['Ibis Paint X', 'Digital Art'],
    featured: false,
    image: '/digital-art/bookstore.png',
    accentColor: 'red',
    details: {
      role: 'Digital Illustrator',
      timeline: 'Ibis Paint X Artwork',
    },
  },
  {
    id: 'self-portrait-art',
    title: 'Self-Portrait',
    category: 'art',
    subtitle: 'Ibis Paint X',
    description:
      'An expressive, stylized digital self-portrait.',
    tags: ['Ibis Paint X', 'Digital Art'],
    featured: false,
    image: '/digital-art/selfportrait.png',
    accentColor: 'white',
    details: {
      role: 'Digital Illustrator',
      timeline: 'Ibis Paint X Artwork',
    },
  },
  {
    id: 'archangel-art',
    title: 'Archangel',
    category: 'art',
    subtitle: 'Ibis Paint X',
    description:
      'An original cyberpunk-themed archangel concept illustration.',
    tags: ['Ibis Paint X', 'Digital Art'],
    featured: false,
    image: '/digital-art/archangel.png',
    accentColor: 'yellow',
    details: {
      role: 'Digital Illustrator',
      timeline: 'Ibis Paint X Artwork',
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
      { name: 'React.js & React 19', level: 'ACTIVE', desc: 'Component architecture, Hooks, state synchronization' },
      { name: 'Next.js 15 / 16', level: 'MODERN', desc: 'App Router, Turbopack, Server Components, SSR' },
      { name: 'Three.js & WebGL', level: 'ACTIVE', desc: 'React Three Fiber 3D scenes, InstancedMesh, real-time visualization' },
      { name: 'TypeScript', level: 'PROFICIENT', desc: 'Strict mode, type safety, interfaces, props definition' },
      { name: 'HTML5 & CSS3 / Tailwind', level: 'MASTER', desc: 'Semantic layout, CSS Grid, custom dark themes, responsive design' },
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
