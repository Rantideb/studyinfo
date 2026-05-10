import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		excerpt: z.string(),
		author: z.string(),
		date: z.string(),
		category: z.string(),
		tags: z.array(z.string()),
		image: z.string(),
		readTime: z.string(),
	}),
});

export const collections = { blog };
