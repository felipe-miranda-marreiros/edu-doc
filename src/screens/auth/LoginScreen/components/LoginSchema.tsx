import { SignIn } from '@/src/entities/SignIn/SignIn'
import { z } from 'zod'

export const loginSchema = z.object({
  enrollment: z.string().trim().nonempty({ message: 'Campo obrigatório' }),
  password: z
    .string()
    .trim()
    .nonempty({ message: 'Campo obrigatório' })
    .min(6, 'Por favor, digite a sua senha')
}) satisfies z.ZodSchema<SignIn>
