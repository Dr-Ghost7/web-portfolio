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

export const PROJECTS_DATA: ProjectItem[] = [
  // --- 1. WEB & APPLICATIONS ---
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
      timeline: 'Web Application',
      challenges:
        'Extracting sub-millisecond dwell times and pointer events across various touchscreens, and building an explainable model based on mean and standard deviation without black-box ML dependencies.',
      deliverables: [
        'Live rhythm oscilloscope tracking dwell and flight times in real time',
        'Enrollment and biometric verification workflow',
        'Custom tactile dark keypad interface with visual rhythm feedback',
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

  // --- 2. GAME DEVELOPMENT ---
  {
    id: 'gangling-bros-forest',
    title: "Gangling Bro's Forest",
    category: 'gamedev',
    subtitle: 'Published Indie Game on itch.io (Project2alpha)',
    description:
      'Atmospheric indie game published on itch.io. Developed using Godot Engine and GDScript, featuring custom player movement physics, environmental traversal, and an eerie atmospheric forest mood.',
    tags: ['Godot Engine', 'GDScript', 'Game Dev', 'itch.io', 'Atmospheric'],
    githubUrl: 'https://github.com/Dr-Ghost7/Project2alpha',
    liveUrl: 'https://missstaticmoth.itch.io/gangling-bros-forest',
    featured: true,
    metrics: [
      { label: 'PLATFORM', value: 'ITCH.IO' },
      { label: 'ENGINE', value: 'GODOT ENGINE' },
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

  // --- 3. GRAPHIC DESIGN (CANVA) ---
  {
    id: 'ampliverse',
    title: 'Ampliverse',
    category: 'design',
    subtitle: 'Visual Design & Poster Layout (Canva)',
    description:
      'High-impact typographic and graphic design poster crafted in Canva. Explores vertical poster composition, spatial contrast, color harmony, and bold modern visual messaging.',
    tags: ['Canva', 'Graphic Design', 'Poster Design', 'Typography', 'Visual Composition'],
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
      timeline: 'Design Showcase',
      challenges:
        'Balancing typographic weight and negative space to establish an eye-catching focal hierarchy across digital and print viewing distances.',
      deliverables: [
        'Print and digital poster layout',
        'Cohesive color grading and contrast tuning',
        'Scalable graphic layout in Canva',
      ],
      palette: ['#0d0e14', '#1a1d2e', '#00c4cc', '#fcee0a', '#ff003c'],
    },
  },
  {
    id: 'ignatius',
    title: 'Ignatius',
    category: 'design',
    subtitle: 'Key Visual & Character Graphic Design (Canva)',
    description:
      'Character-driven graphic design composition with bold typographic framing, created in Canva. Combines character focal elements with structured modern editorial layout.',
    tags: ['Canva', 'Graphic Design', 'Key Visual', 'Typography', 'Editorial Layout'],
    featured: true,
    metrics: [
      { label: 'TOOL', value: 'CANVA' },
      { label: 'RESOLUTION', value: '1920 x 1920' },
      { label: 'GENRE', value: 'KEY VISUAL' },
    ],
    image: '/graphics-design/ignatius.png',
    accentColor: 'red',
    details: {
      role: 'Graphic Designer',
      timeline: 'Key Visual Design',
      challenges:
        'Integrating illustrative focal art with modern typographic framing and layered graphic badges.',
      deliverables: [
        'High-resolution square key visual (1920x1920)',
        'Editorial layout typography composition',
        'Exported social media graphic kit',
      ],
      palette: ['#0a0a0c', '#181820', '#ff003c', '#ffffff', '#8a8f9d'],
    },
  },
  {
    id: 'zda-onboarding',
    title: 'ZDA Onboarding',
    category: 'design',
    subtitle: 'UI Onboarding Layout & Visual Communication (Canva)',
    description:
      'User onboarding layout and instructional visual communication designed in Canva. Focused on clarity, readability, structured iconographic hierarchy, and intuitive information digestion.',
    tags: ['Canva', 'UI/UX Design', 'Onboarding Layout', 'Information Design'],
    featured: false,
    metrics: [
      { label: 'TOOL', value: 'CANVA' },
      { label: 'APPLICATION', value: 'ONBOARDING UI' },
      { label: 'STRUCTURE', value: 'STEP-BY-STEP' },
    ],
    image: '/graphics-design/zda-onboarding.png',
    accentColor: 'white',
    details: {
      role: 'UI Designer',
      timeline: 'UI & Communication Design',
      challenges:
        'Designing a frictionless visual onboarding flow that communicates instructions clearly at a single glance.',
      deliverables: [
        'Clean onboarding card layout',
        'Consistent iconography and color tokens',
        'User guidance structure designed in Canva',
      ],
      palette: ['#0f1118', '#1a1f2e', '#3ee08a', '#5b9dff', '#ffffff'],
    },
  },

  // --- 4. DIGITAL ART (IBIS PAINT X) ---
  {
    id: 'ghost-art',
    title: 'Ghost',
    category: 'art',
    subtitle: 'Atmospheric Digital Painting (Ibis Paint X)',
    description:
      'High-resolution atmospheric digital painting created in Ibis Paint X (3400x2105 master). Demonstrates nuanced digital brushwork, ambient low-light values, environmental depth, and character silhouette rendering.',
    tags: ['Ibis Paint X', 'Digital Painting', 'Mood & Lighting', 'Brushwork', 'Illustration'],
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
      challenges:
        'Rendering subtle ambient lighting and luminous neon contrast against deep shadows to establish a palpable, cinematic mood.',
      deliverables: [
        'Full 3.4K master digital illustration (3400x2105)',
        'Multi-layer shading and atmospheric haze',
        'Expressive brushwork and character rendering',
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
      'Intimate interior and architectural digital illustration crafted in Ibis Paint X. Explores cozy ambient perspective, line work, warm palette accents, and detailed prop composition.',
    tags: ['Ibis Paint X', 'Environment Art', 'Digital Painting', 'Interior Scene', 'Illustration'],
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
      challenges:
        'Constructing believable interior perspective with layered bookshelves, warm ambient lighting, and rich focal storytelling.',
      deliverables: [
        'Detailed architectural and interior scene',
        'Custom texture and prop details',
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
      'Expressive stylized character portrait illustrated in Ibis Paint X. Focuses on facial plane definition, expressive linework, and personal artistic voice.',
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
      challenges:
        'Capturing character likeness and expressive emotion through confident digital pencil and brush techniques.',
      deliverables: [
        'Full portrait illustration (1080x1445)',
        'Stylized line art and color blocking',
        'Digital artwork created in Ibis Paint X',
      ],
      palette: ['#0d0c12', '#1a1924', '#ff3b69', '#d1c7e6', '#ffffff'],
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
