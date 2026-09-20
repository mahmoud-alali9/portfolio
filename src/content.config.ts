import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projectImageSchema = z.object({
  src: z.string(),
  caption: z.string().optional(),
  className: z.string().optional(),
  wrapperClassName: z.string().optional(),
  width: z.number(),
  height: z.number(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    href: z.string(),
    image: z.string().optional(),
    // Placeholder shown in place of a real cover image until one is provided:
    // a lucide-react icon name (see src/components/icons/index.tsx PLACEHOLDER_ICONS)
    // centered on a solid, categorized background color.
    placeholderIcon: z.string().optional(),
    placeholderColor: z.string().optional(),
    wrapperClassName: z.string().optional(),
    imageClassName: z.string().optional(),
    category: z.enum(['featured', 'open-source', 'personal']),
    liveUrl: z.string().optional(),
    sourceUrl: z.string().optional(),
    longDescription: z.string(),
    additionalDescription: z.string(),
    stack: z.array(z.string()),
    images: z.array(projectImageSchema).optional(),
    highlights: z.array(z.string()),
    moreProjects: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
