interface ScheduleExampleUseCaseResponse {
  message: string
}

export class ScheduleExampleUseCase {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  async execute(): Promise<ScheduleExampleUseCaseResponse> {
    console.log({ message: 'Uma tarefa está executando...' })
    return { message: 'Uma tarefa está executando...' }
  }
}
