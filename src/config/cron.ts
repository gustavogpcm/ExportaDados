import { CronTask } from './models/cronTask'

import { makeScheduleExampleUseCase } from '../use-cases/factories/make-schedule-example-use-case'
<<<<<<< HEAD
import { makeSearchAssistencialUseCase } from '../use-cases/factories/make-search-assistencial'
import { makeGetAcessTokenUseCase } from '../use-cases/factories/make-get-acess-token-use-case'
import { formatarData } from '../utils/formatDate_yyyy-mm-dd'

// const scheduleExample = makeScheduleExampleUseCase()
// new CronTask(async () => {
//   scheduleExample.execute()
// }).start()

const sheduleAssitencialSearch = makeSearchAssistencialUseCase()

export const assistencialSearch = new CronTask(async () => {
  const getAcessTokenUseCase = makeGetAcessTokenUseCase()
  await getAcessTokenUseCase.execute()
  const dataUltimaAlteracao = new Date().toISOString().split('T')[0]
  console.log('A dataUltimaAlteracao no cron: ', dataUltimaAlteracao)
  sheduleAssitencialSearch.execute({ dataUltimaAlteracao })
}, '* 27 17 * * *')
// '0 23 * * * *
assistencialSearch.start()
=======

const scheduleExample = makeScheduleExampleUseCase()
new CronTask(async () => {
  scheduleExample.execute()
}).start()
>>>>>>> 7bf6c5064265e26d9bf3b1f0b38bd6aa0d3ca644
