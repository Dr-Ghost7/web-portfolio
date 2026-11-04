export interface ProjectItem {
  id: string;
  title: string;
  category: 'web' | 'design' | 'gamedev' | 'terminal';
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
  // --- WEB PROJECTS ---
  {
    id: 'cyberpunk-portfolio',
    title: 'CYBER_PORTFOLIO // V1.0',
    category: 'web',
    subtitle: 'Next.js 15 & React 19 Production Interface',
    description:
      'High-performance cyberpunk HUD portfolio engineered with Next.js 15 App Router, React 19, TypeScript, Tailwind CSS, and real-time GitHub REST telemetry integration.',
    tags: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'GitHub API', 'Web Audio API'],
    githubUrl: 'https://github.com/Dr-Ghost7',
    featured: true,
    metrics: [
      { label: 'FRAMEWORK', value: 'NEXT.JS 15' },
      { label: 'REACT VERSION', value: '19.3' },
      { label: 'PERFORMANCE', value: '100%' },
    ],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'yellow',
    details: {
      role: 'Lead Frontend Architect & UI Designer',
      timeline: '2026 // Production Release',
      challenges:
        'Bridging pure vanilla JS/HTML foundation to enterprise-grade Next.js App Router and React Server Components with seamless real-time GitHub synchronization.',
      deliverables: [
        'Interactive HUD audio synthesized in Web Audio API',
        'Dual-domain filtering for Code & Graphic Design',
        'Responsive chamfered cyberpunk clip-path UI kit',
        'Dynamic GitHub API caching and fallback architecture',
      ],
      palette: ['#08080a', '#141419', '#fcee0a', '#ff003c', '#f5f6fa'],
    },
  },
  {
    id: 'astar-vs-qlearning',
    title: 'ASTAR // Q-LEARNING SIMULATOR',
    category: 'web',
    subtitle: 'AI Algorithmic Comparison & Pathfinding Sandbox',
    description:
      'Interactive visual simulation exploring deterministic heuristic pathfinding (A*) versus probabilistic reinforcement learning (Q-Learning) across dynamic obstacle grids.',
    tags: ['Algorithms', 'Interactive Canvas', 'AI Simulation', 'Python', 'JavaScript'],
    githubUrl: 'https://github.com/Dr-Ghost7/astar-vs-qlearning-simulation',
    featured: true,
    metrics: [
      { label: 'ALGORITHMS', value: 'A* & Q-LEARN' },
      { label: 'AGENT REALTIME', value: '60 FPS' },
      { label: 'CONVERGENCE', value: 'ADAPTIVE' },
    ],
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'red',
    details: {
      role: 'Core Developer & Algorithmic Architect',
      timeline: '2025 // Research & Simulation',
      challenges:
        'Rendering real-time Q-table policy convergence and step penalties alongside deterministic Manhattan heuristic evaluations on an interactive grid.',
      deliverables: [
        'Real-time path visualization matrix',
        'Side-by-side agent performance benchmarking',
        'Dynamic obstacle spawning and reward distribution controls',
      ],
    },
  },
  {
    id: 'flag-memory-app',
    title: 'FLAG_MEMORY // COGNITIVE LAB',
    category: 'web',
    subtitle: 'Interactive Spatial Memory & Knowledge Web App',
    description:
      'Fast-paced responsive cognitive memory application challenging visual recognition, spatial recall, and international flag telemetry under strict countdown conditions.',
    tags: ['JavaScript', 'HTML5/CSS3', 'Web Audio', 'State Management', 'UX Design'],
    githubUrl: 'https://github.com/Dr-Ghost7/flag-memory-app',
    featured: true,
    metrics: [
      { label: 'REACTION SPEED', value: '< 250ms' },
      { label: 'DATASET', value: 'GLOBAL FLAGS' },
      { label: 'SCALING', value: 'PROGRESSIVE' },
    ],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'yellow',
    details: {
      role: 'Frontend Developer & UI Designer',
      timeline: '2024 // Web Project',
      challenges:
        'Ensuring zero layout shifts and seamless touch/click response across mobile and desktop screens while tracking multi-stage difficulty multipliers.',
      deliverables: [
        'Custom card-flipping CSS 3D matrix',
        'Combo streak scoring algorithms',
        'Lightweight zero-dependency architecture',
      ],
    },
  },
  {
    id: 'typelock',
    title: 'TYPELOCK // SPEED MATRIX',
    category: 'web',
    subtitle: 'Keyboard Ergonomics & WPM Accuracy Telemetry',
    description:
      'High-precision keyboard input velocity platform tracking word-per-minute diagnostics, keystroke accuracy, burst rates, and input penalty mechanics in real time.',
    tags: ['JavaScript', 'DOM Events', 'Telemetry', 'Performance', 'Dark UI'],
    githubUrl: 'https://github.com/Dr-Ghost7/typelock',
    featured: false,
    metrics: [
      { label: 'PRECISION', value: 'PER-CHAR' },
      { label: 'INPUT METRICS', value: 'WPM & CPM' },
      { label: 'LATENCY', value: 'SUB-FRAME' },
    ],
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'white',
    details: {
      role: 'Sole Developer',
      timeline: '2024 // Web Project',
      challenges:
        'Accurately calculating instantaneous vs rolling WPM while isolating synthetic paste injections and tracking raw typing cadence.',
      deliverables: [
        'Custom event pipeline for keypress filtering',
        'Dynamic visual feedback on typo events',
        'Score summary and accuracy degradation metrics',
      ],
    },
  },

  // --- GAME DEV & SYSTEMS PROJECTS ---
  {
    id: 'aperio-the-maze',
    title: 'APERIO // THE MAZE',
    category: 'gamedev',
    subtitle: 'Atmospheric Spatial Labyrinth Experience',
    description:
      'Published game exploring tension, procedural labyrinth architecture, and player spatial navigation. Developed in Godot Engine utilizing custom GDScript mechanics.',
    tags: ['Godot Engine', 'GDScript', 'Game Design', 'Level Design', 'Atmospheric Audio'],
    githubUrl: 'https://github.com/Dr-Ghost7/aperio--the-maze',
    featured: true,
    metrics: [
      { label: 'ENGINE', value: 'GODOT 4' },
      { label: 'STATUS', value: 'PUBLISHED' },
      { label: 'GENRE', value: 'SURVIVAL MAZE' },
    ],
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'red',
    details: {
      role: 'Game Director & Lead Programmer',
      timeline: '2024 - 2025',
      challenges:
        'Creating an oppressive and atmospheric claustrophobia through tight FOV lighting, dynamic audio reverberation, and non-repetitive labyrinth layout logic.',
      deliverables: [
        'Complete player movement controller & physics',
        'Custom ambient soundscape triggers',
        'Optimized occlusion culling and lighting',
      ],
    },
  },
  {
    id: 'slm-voice-controller',
    title: 'SLM VOICE // DEVICE PROTOCOL',
    category: 'terminal',
    subtitle: 'Small Language Model Voice Command Interface',
    description:
      'Natural voice synthesis and intent recognition pipeline leveraging local Small Language Models (SLMs) to query, calibrate, and toggle device settings via command protocols.',
    tags: ['SLM', 'Python', 'NLP', 'Voice Recognition', 'Hardware Telemetry'],
    githubUrl: 'https://github.com/Dr-Ghost7/SLM-voice-controlled-device-settings',
    featured: false,
    metrics: [
      { label: 'ARCHITECTURE', value: 'LOCAL SLM' },
      { label: 'INFERENCE', value: 'LOW LATENCY' },
      { label: 'SECURITY', value: 'OFFLINE' },
    ],
    image: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'yellow',
    details: {
      role: 'Systems Engineer & AI Integrator',
      timeline: '2025 // Systems Project',
      challenges:
        'Extracting discrete configuration intents from conversational spoken commands without relying on cloud-based latency-prone APIs.',
      deliverables: [
        'Audio buffer streaming & speech-to-text pipeline',
        'Intent parsing and parameter slot filling',
        'Deterministic hardware setting dispatching',
      ],
    },
  },
  {
    id: 'decision-tool',
    title: 'DECISION MATRIX // CLI PROTOCOL',
    category: 'terminal',
    subtitle: 'Weighted Multi-Criteria Analytical CLI',
    description:
      'Terminal utility designed for decision-making optimization. Features weighted parameter evaluation, normalized scoring vectors, and sensitivity analysis directly in terminal.',
    tags: ['CLI Tool', 'Python', 'Analytics', 'Decision Science'],
    githubUrl: 'https://github.com/Dr-Ghost7/decision_tool',
    featured: false,
    metrics: [
      { label: 'INTERFACE', value: 'CLI / TUI' },
      { label: 'ANALYSIS', value: 'WEIGHTED VECTOR' },
      { label: 'OUTPUT', value: 'EXPORTABLE' },
    ],
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'white',
    details: {
      role: 'Author & Developer',
      timeline: '2024 // Tools',
      challenges:
        'Building a frictionless command-line user experience for inputting multi-attribute decision problems with dynamic weights and ranking algorithms.',
      deliverables: [
        'Interactive interactive shell menu',
        'Eigenvector calculation and normalized scoring',
        'Tabular results and sensitivity graphs',
      ],
    },
  },

  // --- GRAPHIC DESIGN & VISUAL WORKS ---
  {
    id: 'neo-kyoto-branding',
    title: 'NEO-KYOTO // BRAND IDENTITY',
    category: 'design',
    subtitle: 'Cyber-Minimalist Visual Identity & Typography System',
    description:
      'Complete brand identity system fusing traditional Japanese geometric minimalism with high-voltage industrial cyberpunk aesthetics. Includes logo mark, iconography, typography guidelines, and apparel mockups.',
    tags: ['Figma', 'Illustrator', 'Brand Design', 'Typography', 'Visual Identity'],
    featured: true,
    metrics: [
      { label: 'DELIVERABLES', value: 'FULL BRAND KIT' },
      { label: 'STYLE', value: 'CYBER-INDUSTRIAL' },
      { label: 'COMPONENTS', value: '48+ ASSETS' },
    ],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'red',
    details: {
      role: 'Lead Visual Designer & Art Director',
      timeline: '2025 // Visual Showcase',
      challenges:
        'Balancing harsh mechanical angles with refined corporate legibility to ensure the identity scales seamlessly from microscopic app icons to massive billboard displays.',
      deliverables: [
        'Vector logomark and adaptive lockups',
        'Custom display glyph set and typography scale',
        'Color theory matrix with high-contrast safety standards',
        'Merchandise, packaging, and digital application mockups',
      ],
      palette: ['#070709', '#ff003c', '#fcee0a', '#8a8f9d', '#ffffff'],
    },
  },
  {
    id: 'quantum-sync-uiux',
    title: 'QUANTUM SYNC // FINTECH HUD UI',
    category: 'design',
    subtitle: 'Next-Gen Financial Telemetry & Dark Mode UI/UX',
    description:
      'Cutting-edge mobile and desktop interface designed for high-frequency digital asset traders. Features custom data visualizations, tactical dark theme, micro-animations, and ergonomic touch targets.',
    tags: ['Figma', 'UI/UX Design', 'Design Systems', 'Prototyping', 'User Research'],
    featured: true,
    metrics: [
      { label: 'SCREENS', value: '32 SCREENS' },
      { label: 'ACCESSIBILITY', value: 'WCAG AAA' },
      { label: 'DESIGN SYSTEM', value: 'ATOMIC V2' },
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'yellow',
    details: {
      role: 'UI/UX Product Designer',
      timeline: '2025 // Product Design',
      challenges:
        'Architecting dense financial telemetry without overwhelming the user, maintaining strict information hierarchy and rapid glanceability under high-stress trading conditions.',
      deliverables: [
        'Complete responsive component library in Figma',
        'Interactive prototype with micro-interactions',
        'User journey maps and stress-testing audit',
        'Developer handoff tokens and Tailwind specs',
      ],
      palette: ['#0d0e14', '#161824', '#fcee0a', '#00ff88', '#f0f3f8'],
    },
  },
  {
    id: 'chronos-zero-key-art',
    title: 'CHRONOS ZERO // VISUAL KEY ART',
    category: 'design',
    subtitle: 'Sci-Fi Editorial Layout & Key Visual Composition',
    description:
      'High-impact cinematic key visual composition combining 3D hard-surface elements, digital photobashing, custom atmospheric lighting, and futuristic typography layout.',
    tags: ['Photoshop', 'Digital Compositing', 'Poster Design', 'Art Direction'],
    featured: false,
    metrics: [
      { label: 'RESOLUTION', value: '8K MASTER' },
      { label: 'LAYERS', value: '180+ BLENDS' },
      { label: 'MEDIUM', value: 'DIGITAL / PRINT' },
    ],
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'red',
    details: {
      role: 'Visual Artist & Compositor',
      timeline: '2024 // Art Direction',
      challenges:
        'Establishing believable dramatic volumetric illumination across neon reflections and carbon fiber surfaces while maintaining crisp visual focal points.',
      deliverables: [
        'Print-ready high-resolution promotional poster',
        'Modular social media banner adaptations',
        'Custom distressed typography assets',
      ],
      palette: ['#050508', '#221e2e', '#ff003c', '#ffe600', '#eaeaf5'],
    },
  },
  {
    id: 'neural-hud-assets',
    title: 'NEURAL HUD // VECTOR ASSET SUITE',
    category: 'design',
    subtitle: 'Modular Sci-Fi UI Elements & Decal Library',
    description:
      'Comprehensive vector asset collection containing over 100 tactical sci-fi UI elements, reticles, telemetry gauges, warning glyphs, and circuit schematics tailored for game UIs and digital interfaces.',
    tags: ['Illustrator', 'SVG Assets', 'Vector Graphics', 'Game UI Assets'],
    featured: false,
    metrics: [
      { label: 'VECTOR ASSETS', value: '120+ ICONS' },
      { label: 'FORMATS', value: 'SVG / EPS / PNG' },
      { label: 'STYLE', value: 'TACTICAL CYBER' },
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'white',
    details: {
      role: 'Vector Asset Designer',
      timeline: '2024 - 2025',
      challenges:
        'Ensuring infinitely scalable geometric precision and consistent line stroke weighting across complex multi-ring dials and HUD elements.',
      deliverables: [
        'Organized Figma component library',
        'Optimized SVG code snippets for web embedding',
        'Documentation on grid alignment and scaling rules',
      ],
      palette: ['#09090b', '#27272a', '#e4e4e7', '#fcee0a', '#ff003c'],
    },
  },
];

export const SKILLS_MATRIX = [
  {
    category: 'FRONTEND ENGINEERING',
    accent: 'yellow',
    skills: [
      { name: 'React.js', level: 'ADVANCED', desc: 'Hooks, Context, State Architecture, Component Lifecycle' },
      { name: 'Next.js 15', level: 'MODERN', desc: 'App Router, Server Components, SSR, Image & Route Optimization' },
      { name: 'JavaScript (ES6+)', level: 'MASTER', desc: 'Async/Await, DOM, Event Pipeline, Canvas API, Performance' },
      { name: 'Tailwind CSS', level: 'ADVANCED', desc: 'Utility-first layout, custom themes, dark HUD aesthetics' },
      { name: 'HTML5 & CSS3', level: 'MASTER', desc: 'Semantic markup, Flexbox, Grid, CSS animations, Responsive design' },
      { name: 'TypeScript', level: 'PROFICIENT', desc: 'Strict typing, interfaces, generics, Next.js type safety' },
    ],
  },
  {
    category: 'GRAPHIC & VISUAL DESIGN',
    accent: 'red',
    skills: [
      { name: 'Figma', level: 'ADVANCED', desc: 'UI/UX Design Systems, Wireframing, High-Fidelity Prototyping' },
      { name: 'Adobe Photoshop', level: 'ADVANCED', desc: 'Digital Compositing, Retouching, Key Visuals, Concept Art' },
      { name: 'Adobe Illustrator', level: 'ADVANCED', desc: 'Vector Graphic Design, Brand Marks, Typography & Iconography' },
      { name: 'UI/UX Architecture', level: 'PROFICIENT', desc: 'Visual Hierarchy, WCAG Accessibility, Ergonomic layouts' },
      { name: 'Design Systems', level: 'ADVANCED', desc: 'Design tokens, atomic components, dark mode color grading' },
    ],
  },
  {
    category: 'SYSTEMS, GAMEDEV & AI',
    accent: 'white',
    skills: [
      { name: 'Godot Engine & GDScript', level: 'PUBLISHED', desc: '2D/3D Game Mechanics, Shaders, Physics, Scene Graph' },
      { name: 'Python', level: 'ADVANCED', desc: 'Reinforcement Learning, Pathfinding, Data Structures, Automation' },
      { name: 'Git & GitHub Workflows', level: 'ADVANCED', desc: 'Version Control, Branching, Actions, Open Source contribution' },
      { name: 'CLI & Shell Scripting', level: 'PROFICIENT', desc: 'TUI Interfaces, Terminal Utilities, Command Parsing' },
    ],
  },
];
