import { CronTask } from './models/cronTask'

import { makeSearchAssistencialUseCase } from '../use-cases/factories/make-search-assistencial'
import { makeGetAcessTokenUseCase } from '../use-cases/factories/make-get-acess-token-use-case'

const sheduleAssitencialSearch = makeSearchAssistencialUseCase()

export const assistencialSearch = new CronTask(async () => {
  const getAcessTokenUseCase = makeGetAcessTokenUseCase()
  await getAcessTokenUseCase.execute()
  const currentDate = new Date()
  console.log('Current Date: ' + currentDate)
  const year = currentDate.getFullYear()
  const month = String(currentDate.getMonth() + 1).padStart(2, '0') // Month is 0-indexed
  const day = String(currentDate.getDate()).padStart(2, '0')
  //  const dataUltimaAlteracao = `${year}-${month}-${parseInt(day) - 1}`
  const dataUltimaAlteracao = `${year}-${month}-${parseInt(day)}`
  console.log('A dataUltimaAlteracao no cron: ', dataUltimaAlteracao)
  await sheduleAssitencialSearch.execute({ dataUltimaAlteracao })
}, '0 0 23 * * *')
// '0 23 * * * * às 23 horas
assistencialSearch.start()
