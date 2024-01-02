import { FastifyInstance, fastify } from 'fastify'
import cors from '@fastify/cors'

import { assistencialRoutes } from '../http/controllers/assistencialSearch/routes'
import { healthCheckRoutes } from '../http/controllers/healthCheck/routes'

export const app: FastifyInstance = fastify()

app.register(cors, {
  origin: true,
})

app.register(healthCheckRoutes)
app.register(assistencialRoutes)
