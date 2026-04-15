import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

const dictionaryCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/dictionary" }),
  schema: z.object({
    term: z.string(),
    category: z.string(),
    level: z.enum(["Foundational", "Intermediate", "Advanced", "Expert"]),
  }),
});

export const collections = {
  dictionary: dictionaryCollection,
};
