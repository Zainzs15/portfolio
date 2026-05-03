export type ProjectCategory = 'website' | 'game';

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  accent: string;
  category: ProjectCategory;
};

export const websiteProjects: ProjectItem[] = [
  {
    id: 'zia-homeopathic',
    title: 'Zia Homeopathic Clinic',
    description:
      'A calm, trust-forward clinic presence with doctor spotlight, credentials timeline, and patient-centered storytelling.',
    url: 'http://www.ziahomeopethic.online',
    tags: ['HTML', 'CSS', 'Responsive'],
    accent: 'linear-gradient(135deg, #0d9488, #14b8a6)',
    category: 'website',
  },
  {
    id: 'quiz-portal',
    title: 'Zain Quiz Portal',
    description:
      'Secure quiz experience with auth flows, admin tooling, and results visualization — animated micro-interactions throughout.',
    url: 'https://quizbyzain.vercel.app',
    tags: ['React', 'Auth', 'Charts'],
    accent: 'linear-gradient(135deg, #db2777, #f59e0b)',
    category: 'website',
  },
  {
    id: 'avernus',
    title: 'AvernusCorp Experience',
    description:
      'Premium healthcare RCM landing with team storytelling, service grids, and conversion-focused contact pathways.',
    url: 'https://avernusbyzain.vercel.app',
    tags: ['Landing', 'UI', 'Corporate'],
    accent: 'linear-gradient(135deg, #1e40af, #0ea5e9)',
    category: 'website',
  },
];

export const gameProjects: ProjectItem[] = [
  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe Arena',
    description:
      'Neon duel UI with unbeatable minimax AI, difficulty tiers, and polished local two-player mode with saved preferences.',
    url: 'https://tictacbyzain.vercel.app',
    tags: ['JavaScript', 'AI', 'Neon UI'],
    accent: 'linear-gradient(135deg, #7c3aed, #ec4899)',
    category: 'game',
  },
  {
    id: 'flappy',
    title: 'Flappy — Rainbow',
    description:
      'Arcade-style flapper with day/night themes, difficulty tiers, and tight tap — click — space controls.',
    url: 'https://flappybirdzain.vercel.app',
    tags: ['Canvas', 'Arcade', 'Themes'],
    accent: 'linear-gradient(135deg, #eab308, #f97316)',
    category: 'game',
  },
  {
    id: 'test-tube',
    title: 'Test Tube by Zain',
    description:
      'Level-based liquid puzzle with intuitive controls, move tracking, and progressive challenge across dozens of stages.',
    url: 'https://testtubebyzain.vercel.app',
    tags: ['React', 'Game Logic', 'Levels'],
    accent: 'linear-gradient(135deg, #2563eb, #06b6d4)',
    category: 'game',
  },
];
