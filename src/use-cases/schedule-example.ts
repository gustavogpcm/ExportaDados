interface AuthenticateUseCaseResponse {
  message: string
}

export class ScheduleExampleUseCase {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  async execute(): Promise<AuthenticateUseCaseResponse> {
    console.log({ message: 'Uma tarefa está executando...' })
    return { message: 'Uma tarefa está executando...' }
  }
}
