import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'
import { makeSearchAssistencialUseCase } from '../../../use-cases/factories/make-search-assistencial'
import { makeGetAcessTokenUseCase } from '../../../use-cases/factories/make-get-acess-token-use-case'

export async function postAssistencialSearch(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const searchAssistencialBodySchema = z.object({
    dataUltimaAlteracao: z.coerce.string().nullable(),
  })

  let { dataUltimaAlteracao } = searchAssistencialBodySchema.parse(request.body)
  if (!dataUltimaAlteracao) {
    dataUltimaAlteracao = new Date().toLocaleDateString('pt-BR')
  }

  try {
    const searchAssistencial = makeSearchAssistencialUseCase()
    const getAcessTokenUseCase = makeGetAcessTokenUseCase()
    await getAcessTokenUseCase.execute()
    const assistencialResult = await searchAssistencial.execute({
      dataUltimaAlteracao,
    })

    return reply.status(200).send(assistencialResult)
  } catch (err) {
    return reply.status(400).send({ message: err.message })
  }
}
