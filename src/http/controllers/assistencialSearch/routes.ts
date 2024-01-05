import { FastifyInstance } from 'fastify'
import { postAssistencialSearch } from './post-assistencial-search'

export async function assistencialRoutes(app: FastifyInstance) {
  app.post('/search', postAssistencialSearch)
}
