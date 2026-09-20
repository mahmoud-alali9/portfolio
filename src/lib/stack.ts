import {
  siC,
  siClaudecode,
  siCplusplus,
  siDocker,
  siFastapi,
  siFlask,
  siGit,
  siGitlab,
  siHuggingface,
  siJavascript,
  siLangchain,
  siLinux,
  siMetabase,
  siMongodb,
  siMysql,
  siNumpy,
  siOpenjdk,
  siOptuna,
  siPandas,
  siPython,
  siPytorch,
  siR,
  siScikitlearn,
  siSnowflake,
  siSqlalchemy,
} from 'simple-icons';
import groqSvg from '@lobehub/icons-static-svg/icons/groq.svg?raw';
import llamaindexSvg from '@lobehub/icons-static-svg/icons/llamaindex.svg?raw';
import mcpSvg from '@lobehub/icons-static-svg/icons/mcp.svg?raw';
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

/** A real brand logo: raw inline SVG markup (already sized via viewBox, colored via `currentColor`) + its accent color. */
export interface BrandIcon {
  svg: string;
  color: string;
}

export interface StackItem {
  name: string;
  /** Real logo, when one exists for this tool. */
  brand?: BrandIcon;
  /** Generic fallback icon + muted category color, used when no real logo is available. */
  Icon: LucideIcon;
  color: string;
}

export interface StackCategory {
  category: string;
  Icon: LucideIcon;
  color: string;
  items: string[];
}

function withCurrentColor(svg: string): string {
  return svg.replace('<svg ', '<svg fill="currentColor" ');
}

function brand(icon: { svg: string; hex: string }): BrandIcon {
  return { svg: withCurrentColor(icon.svg), color: `#${icon.hex}` };
}

/**
 * Real logos, keyed by exact display name (as used in STACK_GROUPS/EXTRA_ITEMS below).
 * Most come from simple-icons (official brand SVG + hex). A handful of AI/LLM tools
 * without an entry there (LlamaIndex, Groq, MCP) come from @lobehub/icons-static-svg
 * instead — those don't ship an official hex, so they're tinted with their category's
 * accent color rather than a guessed brand color.
 * Tools with no available logo (RAGAS, FAISS, SPARQL, Oracle, Power BI, Tableau, ...)
 * simply have no entry here and keep the generic category icon fallback.
 */
const BRAND_ICON_BY_NAME: Record<string, BrandIcon> = {
  Python: brand(siPython),
  R: brand(siR),
  JavaScript: brand(siJavascript),
  'C++': brand(siCplusplus),
  // OpenJDK's glyph stands in for Java — simple-icons doesn't ship the
  // trademarked coffee-cup Java logo.
  Java: brand(siOpenjdk),
  C: brand(siC),
  LangChain: brand(siLangchain),
  'Claude Code': brand(siClaudecode),
  LlamaIndex: { svg: llamaindexSvg, color: '#7c6f9f' },
  'Groq API': { svg: groqSvg, color: '#7c6f9f' },
  MCP: { svg: mcpSvg, color: '#7c6f9f' },
  'scikit-learn': brand(siScikitlearn),
  pandas: brand(siPandas),
  numpy: brand(siNumpy),
  Optuna: brand(siOptuna),
  'PyTorch (en cours)': brand(siPytorch),
  HuggingFace: brand(siHuggingface),
  Git: brand(siGit),
  Docker: brand(siDocker),
  Linux: brand(siLinux),
  'GitLab CI/CD': brand(siGitlab),
  Flask: brand(siFlask),
  FastAPI: brand(siFastapi),
  MySQL: brand(siMysql),
  MongoDB: brand(siMongodb),
  Snowflake: brand(siSnowflake),
  SQLAlchemy: brand(siSqlalchemy),
  Metabase: brand(siMetabase),
};

/**
 * Grouped stack, rendered as the main "stack" grid (homepage / about page).
 * Items with a real logo in BRAND_ICON_BY_NAME render it; the rest fall back
 * to a generic lucide icon on the category's muted accent color.
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

const SLUG_OVERRIDES: Record<string, string> = { 'C++': 'cpp' };

function slugify(name: string): string {
  if (SLUG_OVERRIDES[name]) return SLUG_OVERRIDES[name];
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Flat lookup keyed by a slugified name, built from STACK_GROUPS. Used to
// resolve per-project stack tags (e.g. project frontmatter `stack: [...]`)
// to an { name, Icon, color, brand? } item, and to render the grouped grid.
const flatConfig: Record<string, StackItem> = {};
for (const group of STACK_GROUPS) {
  for (const item of group.items) {
    flatConfig[slugify(item)] = {
      name: item,
      brand: BRAND_ICON_BY_NAME[item],
      Icon: group.Icon,
      color: group.color,
    };
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
  { name: 'Resource Locks', Icon: BrainCircuit, color: '#7c6f9f' },
];
for (const { key, ...item } of EXTRA_ITEMS) {
  flatConfig[key ?? slugify(item.name)] = item;
}

export function getStackItems(stackKeys: string[]): StackItem[] {
  return stackKeys.map((key) => flatConfig[slugify(key)]).filter(Boolean);
}

/** Resolved, grouped stack items (STACK_GROUPS with each name expanded to its full StackItem). */
export function getGroupedStackItems(): { category: string; Icon: LucideIcon; color: string; items: StackItem[] }[] {
  return STACK_GROUPS.map((group) => ({
    category: group.category,
    Icon: group.Icon,
    color: group.color,
    items: getStackItems(group.items),
  }));
}
