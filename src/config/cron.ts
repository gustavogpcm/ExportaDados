import { CronTask } from './models/cronTask'

import { makeScheduleExampleUseCase } from '../use-cases/factories/make-schedule-example-use-case'

const scheduleExample = makeScheduleExampleUseCase()
new CronTask(async () => {
  scheduleExample.execute()
}).start()
