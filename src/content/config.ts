// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
import { SourceType, TechTypes } from '../types';
// 2. Define your collection(s)
const hobbiesCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: ({ image }) => z.object({
        title: z.string(),
        highlight: z.boolean().optional(),
        image: image().optional(),
        desc: z.string().optional(),
        date: z.date(),
        link: z.string().url(),
        sources: z.array(
            z.object({
                type: z.nativeEnum(SourceType),
                id: z.string().optional(),
            }),
        ),
        techs: z.array(z.union([
            z.nativeEnum(TechTypes),
            z.string()
        ])),
    }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'hobbies': hobbiesCollection,
};