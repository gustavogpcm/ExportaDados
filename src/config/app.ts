import { FastifyInstance, fastify } from 'fastify'
import cors from '@fastify/cors'

<<<<<<< HEAD
import { assistencialRoutes } from '../http/controllers/assistencialSearch/routes'
=======
>>>>>>> 7bf6c5064265e26d9bf3b1f0b38bd6aa0d3ca644
import { healthCheckRoutes } from '../http/controllers/healthCheck/routes'

export const app: FastifyInstance = fastify()

app.register(cors, {
  origin: true,
})

app.register(healthCheckRoutes)
<<<<<<< HEAD
app.register(assistencialRoutes)
=======
>>>>>>> 7bf6c5064265e26d9bf3b1f0b38bd6aa0d3ca644
