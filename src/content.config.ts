import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artikel = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/artikel' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    thema: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    image: z.string().optional(),
    imageCredit: z.string().optional(),
    imageCreditUrl: z.string().optional(),
    // Optionale Affiliate-Empfehlung, wird als gekennzeichnete Box gerendert
    affiliate: z
      .object({
        title: z.string(),
        href: z.string(),
        cta: z.string().default('Zum Angebot'),
        text: z.string(),
      })
      .optional(),
  }),
});

const themen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/themen' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(99),
    // 'haus' = Kernbereich (Startseite), 'strahlung' = separater Wissensbereich
    bereich: z.enum(['haus', 'strahlung']).default('haus'),
    image: z.string().optional(),
    imageCredit: z.string().optional(),
    imageCreditUrl: z.string().optional(),
  }),
});

export const collections = { artikel, themen };
