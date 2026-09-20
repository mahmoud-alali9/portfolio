export const SITE_TITLE = 'Mahmoud AL ALI — AI Engineer';
export const SITE_DESCRIPTION =
  "Étudiant en double M2 Intelligence Artificielle & Management à Montpellier. Je construis des systèmes RAG, des agents LLM et des Knowledge Graphs — du prototype jusqu'à l'évaluation avec des métriques concrètes.";

export const SITE_METADATA = {
  title: {
    default: 'Mahmoud AL ALI — AI Engineer',
    template: '%s | Mahmoud AL ALI',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Mahmoud AL ALI',
    'AI Engineer',
    'RAG',
    'LLM',
    'Agents LLM',
    'Knowledge Graphs',
    'Intelligence Artificielle',
    'Data Science',
    'Machine Learning',
    'NLP',
    'Montpellier',
    'Alternance',
  ],
  authors: [{ name: 'Mahmoud AL ALI' }],
  creator: 'Mahmoud AL ALI',
  publisher: 'Mahmoud AL ALI',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }],
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Mahmoud AL ALI',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mahmoud AL ALI — AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '',
  },
};
