import { z, defineCollection, type ImageFunction } from "astro:content";
import { SourceType, TechTypes } from "../types";

const hobbiesCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      highlight: z.boolean().optional(),
      image: image().optional(),
      desc: z.string().optional(),
      date: z.date(),
      sources: z.record(z.nativeEnum(SourceType), z.string()),
      techs: z.array(z.union([z.nativeEnum(TechTypes), z.string()])),
    }),
});

const resumeItemCollection = defineCollection({
  type: "content",
  schema: ({ image }: { image: ImageFunction }) =>
    z.object({
      header: z.string(),
      subheader: z.string(),
      pic: image(),
      link: z.string().optional(),
      location: z.string().optional(),
      start: z.date(),
      end: z.date(),
    }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string(),
      date: z.date(),
      hidden: z.boolean().optional(),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  hobbies: hobbiesCollection,
  education: resumeItemCollection,
  work: resumeItemCollection,
  volunteering: resumeItemCollection,
  blog: blogCollection,
};
