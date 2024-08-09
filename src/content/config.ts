import { defineCollection, z } from 'astro:content';

const work = defineCollection({
  type: 'content',
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    thumbnail: z.string().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

const graphics = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    thumbnail: z.string(),
  }),
});

export const collections = { work, projects, graphics };
