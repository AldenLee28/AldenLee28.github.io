import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Every .md file in src/content/projects becomes a project page.
// Files starting with "_" (like _template.md) are ignored.
const projects = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    blurb: z.string(), // one-liner shown on the card
    category: z.enum(['tech', 'finance']), // which Portfolio section it lands in
    group: z.string().optional(), // sub-heading within a category, e.g. "ML growth diary"
    order: z.number().default(99), // lower = earlier within its section
    tags: z.array(z.string()).default([]),
    repo: z.url().optional(),
    demo: z.url().optional(),
    hero: z.string().optional(), // path under public/, e.g. /images/dcf.png
    wip: z.boolean().default(false), // shows a "work in progress" badge; still visible
    draft: z.boolean().default(false), // true = hidden from the site entirely
  }),
});

// Every .md file in src/content/blog becomes a blog post.
const blog = defineCollection({
  loader: glob({ pattern: '[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
