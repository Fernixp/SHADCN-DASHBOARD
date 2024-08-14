import { zod as z } from "@/config/es-zod" 

//AUTH Y USERS
export const authSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'El email es requerido.' })
    .email(),
  password: z
    .string()
    .min(1, {
      message: 'La contraseña es requerida',
    })
})


export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  username: z.string(),
  birthdate: z.string().optional(), // Opcional por si acaso
  created_at: z.string(),
  email_verified_at: z.string().nullable(),
  role: z.string(),
  status: z.string(),
  updated_at: z.string()
})