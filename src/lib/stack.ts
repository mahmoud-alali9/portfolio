// Data-only module: tech stack grouped by category. No React/SVG imports here —
// `stack-grid.tsx` owns the icon-per-category mapping and rendering.

export type StackIconKey =
  | 'languages'
  | 'llm'
  | 'semantic'
  | 'ml'
  | 'devops'
  | 'databases'
  | 'bi';

export interface StackCategory {
  category: string;
  icon: StackIconKey;
  /** Muted/desaturated accent color for this category's tiles (hex). */
  color: string;
  items: string[];
}

export const STACK_GROUPS: StackCategory[] = [
  {
    category: 'Langages',
    icon: 'languages',
    color: '#7C8AAD',
    items: ['Python', 'SQL', 'R', 'JavaScript', 'C++', 'Java', 'C'],
  },
  {
    category: 'LLM / RAG',
    icon: 'llm',
    color: '#9B87B5',
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
    icon: 'semantic',
    color: '#71A39C',
    items: ['RDF/SKOS', 'SPARQL', 'Apache Jena Fuseki', 'Knowledge Graphs'],
  },
  {
    category: 'ML / NLP',
    icon: 'ml',
    color: '#B39A6E',
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
    icon: 'devops',
    color: '#B18080',
    items: ['Git', 'Docker', 'Linux', 'GitLab CI/CD', 'Flask', 'FastAPI'],
  },
  {
    category: 'Bases de données',
    icon: 'databases',
    color: '#83A575',
    items: ['MySQL', 'MongoDB', 'Oracle', 'Snowflake', 'SQLAlchemy'],
  },
  {
    category: 'BI',
    icon: 'bi',
    color: '#749BB0',
    items: ['Power BI', 'Tableau', 'Metabase'],
  },
];
