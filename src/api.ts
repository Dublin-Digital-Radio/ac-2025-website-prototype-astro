import { z } from "zod";

const artistSchema = z.object({
  name: z.string(),
  description: z.string(),
  image: z
    .object({
      formats: z.object({
        small: z.object({
          url: z.string(),
        }),
        medium: z.object({
          url: z.string(),
        }),
      }),
    })
    .nullish(),
});

export const artistListSchema = z.array(artistSchema);

const venueSchema = z.object({
  name: z.string(),
});

export const eventListSchema = z.array(
  z.object({
    name: z.string(),
    artists: artistListSchema,
    venue: venueSchema,
    description: z.string().nullable(),
    startsAt: z.string(),
    endsAt: z.string(),
  })
);
