import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    category: z.string(),
    genre: z.enum(['映画', 'ドラマ', 'アニメ']),
    tags: z.array(z.string()),
    eyecatch: z.string(),
    eyecatchCaption: z.string().optional(),
    toc: z.array(z.object({ id: z.string(), text: z.string() })).default([]),
    featured: z.boolean().default(false),
    excerpt: z.string(),
  }),
});

export const collections = { articles };
