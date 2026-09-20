import {
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  Network,
  Sparkles,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export interface StackItem {
  name: string;
  Icon: LucideIcon;
  color: string;
}

export interface StackCategory {
  category: string;
  Icon: LucideIcon;
  color: string;
  items: string[];
}

/**
 * Grouped stack, rendered as the main "stack" grid (homepage / about page).
 * Each item is a plain label — icons/colors are placeholders (a generic
 * lucide icon on a muted colored badge) until real brand assets are added.
 */
export const STACK_GROUPS: StackCategory[] = [
  {
    category: 'Langages',
    Icon: Code2,
    color: '#64748b',
    items: ['Python', 'SQL', 'R', 'JavaScript', 'C++', 'Java', 'C'],
  },
  {
    category: 'LLM / RAG',
    Icon: BrainCircuit,
    color: '#7c6f9f',
    items: [
      'LlamaIndex',
      'LangChain',
      'RAGAS',
      'Groq API',
      'FAISS',
      'Claude Code',
      'MCP',
    ],
  },
  {
    category: 'Web sémantique',
    Icon: Network,
    color: '#4f7a6b',
    items: ['RDF/SKOS', 'SPARQL', 'Apache Jena Fuseki', 'Knowledge Graphs'],
  },
  {
    category: 'ML / NLP',
    Icon: Sparkles,
    color: '#8a6a4f',
    items: [
      'scikit-learn',
      'pandas',
      'numpy',
      'NLTK',
      'SMOTE',
      'Optuna',
      'PyTorch (en cours)',
      'HuggingFace',
    ],
  },
  {
    category: 'DevOps',
    Icon: Wrench,
    color: '#5b6b7a',
    items: ['Git', 'Docker', 'Linux', 'GitLab CI/CD', 'Flask', 'FastAPI'],
  },
  {
    category: 'Bases de données',
    Icon: Database,
    color: '#6b7a5b',
    items: ['MySQL', 'MongoDB', 'Oracle', 'Snowflake', 'SQLAlchemy'],
  },
  {
    category: 'BI',
    Icon: BarChart3,
    color: '#7a5b6b',
    items: ['Power BI', 'Tableau', 'Metabase'],
  },
];

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Flat lookup keyed by a slugified name, built from STACK_GROUPS. Used to
// resolve per-project stack tags (e.g. project frontmatter `stack: [...]`)
// to an { name, Icon, color } item.
const flatConfig: Record<string, StackItem> = {};
for (const group of STACK_GROUPS) {
  for (const item of group.items) {
    flatConfig[slugify(item)] = { name: item, Icon: group.Icon, color: group.color };
  }
}

// Extra technologies/concepts referenced by individual projects that aren't
// part of the main stack grid above. `key` overrides the auto-slugified
// name when it doesn't match the frontmatter tag (e.g. "A*" -> "a-star").
const EXTRA_ITEMS: (StackItem & { key?: string })[] = [
  { name: 'Algorithmes', Icon: Code2, color: '#64748b' },
  { name: 'Micro-services', Icon: Wrench, color: '#5b6b7a' },
  { name: 'Pygame', Icon: Sparkles, color: '#8a6a4f' },
  { name: 'STRIPS', Icon: BrainCircuit, color: '#7c6f9f' },
  { name: 'A*', key: 'a-star', Icon: BrainCircuit, color: '#7c6f9f' },
  { name: 'Task Market', Icon: BrainCircuit, color: '#7c6f9f' },
  { name: 'Blackboard', Icon: BrainCircuit, color: '#7c6f9f' },
];
for (const { key, ...item } of EXTRA_ITEMS) {
  flatConfig[key ?? slugify(item.name)] = item;
}

export function getStackItems(stackKeys: string[]): StackItem[] {
  return stackKeys.map((key) => flatConfig[slugify(key)]).filter(Boolean);
}
