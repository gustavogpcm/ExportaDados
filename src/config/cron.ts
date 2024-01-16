import { CronTask } from './models/cronTask'

import { makeSearchAssistencialUseCase } from '../use-cases/factories/make-search-assistencial'
import { makeGetAcessTokenUseCase } from '../use-cases/factories/make-get-acess-token-use-case'

const sheduleAssitencialSearch = makeSearchAssistencialUseCase()

export const assistencialSearch = new CronTask(async () => {
  const getAcessTokenUseCase = makeGetAcessTokenUseCase()
  await getAcessTokenUseCase.execute()
  const dataUltimaAlteracao = new Date().toISOString().split('T')[0]
  console.log('A dataUltimaAlteracao no cron: ', dataUltimaAlteracao)
  sheduleAssitencialSearch.execute({ dataUltimaAlteracao })
}, '0 59 22 * * *')
// '0 23 * * * * às 23 horas
assistencialSearch.start()
