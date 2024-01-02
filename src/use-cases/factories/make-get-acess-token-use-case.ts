import { AxiosGetAcessTokenRepository } from '../../repositories/axios/axios-get-acess-token-repository'
import { GetAccessTokenUseCase } from '../get-access-token'
import { env } from '../../env/index'

export function makeGetAcessTokenUseCase() {
  const axiosGetAcessTokenRepository = new AxiosGetAcessTokenRepository()

  const getAcessTokenRepository = new GetAccessTokenUseCase(
    env,
    axiosGetAcessTokenRepository,
  )

  return getAcessTokenRepository
}
