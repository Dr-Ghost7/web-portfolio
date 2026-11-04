export interface ProjectItem {
  id: string;
  title: string;
  category: 'web' | 'design' | 'gamedev';
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

export const PROJECTS_DATA: ProjectItem[] = [
  // 1. TypeLock (Web / Behavioral Biometrics)
  {
    id: 'typelock',
    title: 'TypeLock',
    category: 'web',
    subtitle: 'Behavioral Biometric Keypad & Touch Dynamics',
    description:
      'A PIN-pad lock screen that checks more than just the PIN—it verifies how you type it. Analyzes key hold duration (dwell time), gaps between taps (flight time), touch pressure, contact patch size, and center precision to identify users purely from typing rhythm using an explainable classifier.',
    tags: ['JavaScript', 'Touch Dynamics', 'Biometrics', 'CSS3', 'Web Audio'],
    githubUrl: 'https://github.com/Dr-Ghost7/typelock',
    featured: true,
    metrics: [
      { label: 'CLASSIFIER', value: 'STATISTICAL' },
      { label: 'TELEMETRY', value: 'DWELL & FLIGHT' },
      { label: 'UI', value: 'LIVE OSCILLOSCOPE' },
    ],
    image: '/projects/typelock-preview.svg',
    accentColor: 'yellow',
    details: {
      role: 'Sole Developer & Designer',
      timeline: 'Active Project',
      challenges:
        'Accurately extracting sub-millisecond dwell times and pointer events across various touchscreens, and building an explainable model based on mean and standard deviation without black-box ML dependencies.',
      deliverables: [
        'Live rhythm oscilloscope tracking dwell and flight times in real time',
        'Enrollment and biometric verification workflow',
        'Custom tactile dark keypad interface with visual rhythm feedback',
      ],
      palette: ['#0a0d12', '#0f1420', '#3ee08a', '#f2a65a', '#5b9dff'],
    },
  },

  // 2. Flag Memory App (Web / Cognitive App)
  {
    id: 'flag-memory-app',
    title: 'Flag Memory',
    category: 'web',
    subtitle: 'Spaced Repetition & Cognitive Recall Web App',
    description:
      'An interactive flag memorization web application featuring a 3-tier Leitner Box spaced repetition system (Academy mode), high-stakes Death Mode with progressive difficulty scaling and timer penalties, Inversion mode, and audio feedback.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Spaced Repetition', 'Web Audio'],
    githubUrl: 'https://github.com/Dr-Ghost7/flag-memory-app',
    featured: true,
    metrics: [
      { label: 'ALGORITHM', value: 'LEITNER SYSTEM' },
      { label: 'GAME MODES', value: 'ACADEMY & DEATH' },
      { label: 'AUDIO', value: 'WEB AUDIO FX' },
    ],
    image: '/projects/flag-memory-preview.svg',
    accentColor: 'yellow',
    details: {
      role: 'Frontend Developer & UI Designer',
      timeline: 'Web Application',
      challenges:
        'Implementing multi-tier spaced repetition (Box 1 to Box 3 progression) with countdown timers, combo score tracking, and smooth responsive card layouts with zero framework overhead.',
      deliverables: [
        'Leitner Box cognitive progression system',
        'Death mode with ramped difficulty and countdown penalties',
        'Custom grid layout and sound-effect synthesizer',
      ],
      palette: ['#060608', '#0d111a', '#00e676', '#fcee0a', '#ff003c'],
    },
  },

  // 3. A* vs Q-Learning Simulation (AI & Algorithm Visualization)
  {
    id: 'astar-vs-qlearning',
    title: 'A* vs. Q-Learning Simulation',
    category: 'web',
    subtitle: 'Heuristic Search vs. Reinforcement Learning on Mazes',
    description:
      'Algorithmic benchmark comparing deterministic heuristic search (A*) against a reinforcement learning agent (Q-Learning) across procedurally generated mazes. Evaluates path optimality, step penalties, and convergence over a 150-episode training budget across 250 test mazes.',
    tags: ['Python', 'Algorithms', 'A* Search', 'Q-Learning', 'Simulation'],
    githubUrl: 'https://github.com/Dr-Ghost7/astar-vs-qlearning-simulation',
    featured: true,
    metrics: [
      { label: 'DATASET', value: '250 MAZES' },
      { label: 'Q-CONVERGENCE', value: '84.8% SUCCESS' },
      { label: 'SEARCH', value: 'DETERMINISTIC A*' },
    ],
    image: '/projects/astar-preview.svg',
    accentColor: 'red',
    details: {
      role: 'Developer & Researcher',
      timeline: 'AI Simulation Project',
      challenges:
        'Balancing exploration vs exploitation parameters in Q-learning on complex 21x21 mazes within a strict 150-episode budget, and visualizing comparative metrics.',
      deliverables: [
        'Procedural maze generation and A* optimal solver',
        'Q-Learning agent with reward shaping and policy convergence',
        'Benchmarking engine with scatter plot visualizer in app.py',
      ],
      palette: ['#08080c', '#12131c', '#fcee0a', '#ff003c', '#3ee08a'],
    },
  },

  // 4. Gangling Bro's Forest (Project2alpha - Published on itch.io)
  {
    id: 'gangling-bros-forest',
    title: "Gangling Bro's Forest",
    category: 'gamedev',
    subtitle: 'Published Indie Game on itch.io (Project2alpha)',
    description:
      'Atmospheric indie game published on itch.io. Developed using Godot Engine and GDScript, featuring custom player mechanics, environmental traversal, and an eerie forest atmosphere.',
    tags: ['Godot Engine', 'GDScript', 'Game Development', 'itch.io', 'Atmospheric'],
    githubUrl: 'https://github.com/Dr-Ghost7/Project2alpha',
    liveUrl: 'https://itch.io',
    featured: true,
    metrics: [
      { label: 'ENGINE', value: 'GODOT ENGINE' },
      { label: 'STATUS', value: 'PUBLISHED (ITCH.IO)' },
      { label: 'SCRIPTING', value: 'GDSCRIPT' },
    ],
    image: '/projects/gangling-forest-preview.svg',
    accentColor: 'red',
    details: {
      role: 'Game Programmer & Designer',
      timeline: 'Published Indie Title',
      challenges:
        'Crafting responsive 2D movement controls, collision detection, and mood-driven environmental pacing within Godot Engine.',
      deliverables: [
        'Complete player controller and navigation logic in GDScript',
        'Custom level design and atmospheric environmental artwork',
        'Playable game build exported and published on itch.io',
      ],
      palette: ['#060807', '#0c1a14', '#183a2b', '#3ee08a', '#fa5c5c'],
    },
  },

  // 5. Canva Graphic Design & Visual Layouts
  {
    id: 'canva-design-works',
    title: 'Canva Visual & Graphic Works',
    category: 'design',
    subtitle: 'Brand Systems, Posters & Promotional Layouts',
    description:
      'Collection of visual design projects created using Canva. Encompasses brand identity mockups, event posters, typography compositions, presentation decks, and social media visuals with high-contrast color balance.',
    tags: ['Canva', 'Graphic Design', 'Visual Hierarchy', 'Typography', 'Branding'],
    featured: true,
    metrics: [
      { label: 'TOOL', value: 'CANVA' },
      { label: 'FOCUS', value: 'POSTERS & BRANDING' },
      { label: 'LAYOUT', value: 'HIGH CONTRAST' },
    ],
    image: '/projects/canva-preview.svg',
    accentColor: 'yellow',
    details: {
      role: 'Visual Designer',
      timeline: 'Ongoing Design Portfolio',
      challenges:
        'Establishing clean typographical hierarchy, compelling visual focal points, and cohesive color schemes tailored for digital and print formats.',
      deliverables: [
        'Promotional posters and event graphic layouts',
        'Structured presentation decks with clear information flow',
        'Social media visual kits and branded assets',
      ],
      palette: ['#0d0e14', '#1a1d2e', '#00c4cc', '#fcee0a', '#ff003c'],
    },
  },

  // 6. Ibis Paint X Digital Art & Concepts
  {
    id: 'ibispaint-artworks',
    title: 'Ibis Paint X Digital Art',
    category: 'design',
    subtitle: 'Character Concepts, Digital Illustrations & Game Art',
    description:
      'Digital artwork, character design concepts, and visual assets illustrated using Ibis Paint X. Focused on dynamic brushwork, concept ideation for games, and atmospheric color grading.',
    tags: ['Ibis Paint X', 'Digital Illustration', 'Game Art', 'Concept Design'],
    featured: true,
    metrics: [
      { label: 'TOOL', value: 'IBIS PAINT X' },
      { label: 'MEDIUM', value: 'DIGITAL DRAWING' },
      { label: 'ART STYLE', value: 'CONCEPT & GAME ART' },
    ],
    image: '/projects/ibispaint-preview.svg',
    accentColor: 'white',
    details: {
      role: 'Digital Illustrator & Concept Artist',
      timeline: 'Art & Concepts',
      challenges:
        'Refining line art quality, dynamic poses, and dramatic lighting on mobile/tablet drawing workflows to create impactful concept pieces.',
      deliverables: [
        'Original character concept designs',
        'Digital game assets and mood illustrations',
        'Multi-layer digital artwork with custom brushwork',
      ],
      palette: ['#0c0b12', '#1a1929', '#ff3b69', '#e0d8f0', '#ffffff'],
    },
  },
];

export const SKILLS_MATRIX = [
  {
    category: 'FRONTEND DEVELOPMENT',
    accent: 'yellow',
    skills: [
      { name: 'JavaScript (ES6+)', level: 'ADVANCED', desc: 'DOM manipulation, Touch & Pointer events, Async/Await, Canvas, Web Audio' },
      { name: 'React.js', level: 'ACTIVE', desc: 'Component architecture, Hooks (useState, useEffect, useMemo), state flow' },
      { name: 'Next.js 15', level: 'MODERN', desc: 'App Router, Server Components, SSR, Image optimization, Edge routes' },
      { name: 'HTML5 & CSS3', level: 'MASTER', desc: 'Semantic layout, CSS Grid, Flexbox, Keyframe animations, Responsive design' },
      { name: 'Tailwind CSS', level: 'ADVANCED', desc: 'Rapid utility styling, custom theming, dark cyberpunk aesthetics' },
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
