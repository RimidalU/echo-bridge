import { z } from 'zod'

export const envSchema = z.object({
    NODE_ENV: z.coerce.string().min(3),
    API_PORT: z.coerce.number().optional().default(4000),
})
export type Env = z.infer<typeof envSchema>
