import { z } from 'zod';

export const envSchema = z.object({
  KONSI_BASE_URL: z.string().url(),
  KONSI_AUTH_USER: z.string(),
  KONSI_AUTH_PASSWORD: z.string(),
  PORT: z.coerce.number().optional().default(3000),
});

export type Env = z.infer<typeof envSchema>;