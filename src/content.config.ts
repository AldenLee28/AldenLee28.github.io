import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Every .md file in src/content/projects becomes a project page.
// Files starting with "_" (like _template.md) are ignored.
const projects = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    blurb: z.string(), // one-liner shown on the home-page card
    order: z.number().default(99), // lower = earlier in nav and grid
    tags: z.array(z.string()).default([]),
    repo: z.url().optional(),
    demo: z.url().optional(),
    hero: z.string().optional(), // path under public/, e.g. /images/dcf.png
    draft: z.boolean().default(false), // true = hidden from the site
  }),
});

export const collections = { projects };
