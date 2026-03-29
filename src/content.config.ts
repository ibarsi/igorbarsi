import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/index.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    slug: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { blog };
