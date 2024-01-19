import { CronTask } from './models/cronTask'

import { makeSearchAssistencialUseCase } from '../use-cases/factories/make-search-assistencial'
import { makeGetAcessTokenUseCase } from '../use-cases/factories/make-get-acess-token-use-case'

const sheduleAssitencialSearch = makeSearchAssistencialUseCase()

export const assistencialSearch = new CronTask(async () => {
  const getAcessTokenUseCase = makeGetAcessTokenUseCase()
  await getAcessTokenUseCase.execute()
  const currentDate = new Date()
  console.log('CurrentDate' + currentDate)
  const dataUltimaAlteracao = currentDate.toISOString().slice(0, 10)
  console.log('A dataUltimaAlteracao no cron: ', dataUltimaAlteracao)
  await sheduleAssitencialSearch.execute({ dataUltimaAlteracao })
}, '0 0 21 * * *')
// '0 23 * * * * às 23 horas
assistencialSearch.start()
