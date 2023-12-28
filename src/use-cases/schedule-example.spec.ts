import { expect, describe, it, beforeEach } from 'vitest'
import { ScheduleExampleUseCase } from './schedule-example'

let sut: ScheduleExampleUseCase

describe('Schedule Example', () => {
  beforeEach(async () => {
    sut = new ScheduleExampleUseCase()
  })

  it('should be able to execute the schedule example', async () => {
    const { message } = await sut.execute()
    expect(message).toEqual(expect.any(String))
  })
})
