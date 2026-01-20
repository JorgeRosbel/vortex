import { z, defineCollection } from 'astro:content';


const blog = defineCollection({
    schema: z.object({
        lang: z.enum(['en', 'es','pt']).default('en'),
        category: z.string(),
        categoryDescription: z.string().optional(),
        title: z.string(),
        description: z.string().optional(),
        read: z.number().optional(),
        tags: z.array(z.string()).optional(),
        author: z.string().optional(),
        pubDate: z.coerce.date(),
        heroImage: z.string().optional(),
        updatedDate: z.coerce.date().optional(),
        relationID: z.string(),
    }),
});


export const collections = { blog };