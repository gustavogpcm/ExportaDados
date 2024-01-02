import 'dotenv/config'
<<<<<<< HEAD
import { config } from 'dotenv'
=======
>>>>>>> 7bf6c5064265e26d9bf3b1f0b38bd6aa0d3ca644
import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  DATABASE_CLIENT: z.enum(['oracledb', 'pg']).default('oracledb'),
  ORACLE_DIR: z.string().nullable(),
  DB_CONNECTION_STRING: z.string().nullable(),
  DB_PASSWORD: z.string().nullable(),
  DB_USER: z.string().nullable(),
<<<<<<< HEAD
  API_URL_SEARCH: z.string().nullable(),
  API_URL_LOGIN: z.string().nullable(),
  API_KEY: z.string().nullable(),
  API_TOKEN: z.string().nullable(),
})

export function loadEnvironmentVariables() {
  const testEnvironmentPath = '.env.test'
  const productionEnvironmentPath = '.env'

  process.env.NODE_ENV === 'test'
    ? config({ path: testEnvironmentPath })
    : config({ path: productionEnvironmentPath })

  const _env = envSchema.safeParse(process.env)

  if (_env.success === false) {
    throw new Error('Invalid environment variables')
  }

  return _env.data
}

export const env = loadEnvironmentVariables()

export type EnvironmentVariables = z.infer<typeof envSchema>
=======
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('❌ Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables')
}

export const env = _env.data
>>>>>>> 7bf6c5064265e26d9bf3b1f0b38bd6aa0d3ca644
