import { AxiosRequestConfig } from 'axios'
import {
  AssistencialRepository,
  SearchAssistencialData,
} from '../search-assistencial-repository'
import { makeRequest } from '../../utils/makeRequest'
import { env } from '../../env'

export class AxiosSearchAssistencialRepository
  implements AssistencialRepository
{
  async searchAssistencial(data: SearchAssistencialData) {
    const apiUrl = env.API_URL_SEARCH

    const headers = {
      'x-api-key': env.API_KEY,
      Authorization: env.API_TOKEN,
      'Content-Type': 'application/json',
    }

    const requestConfig: AxiosRequestConfig = {
      method: 'post',
      url: apiUrl,
      headers,
      data,
    }
    const response = await makeRequest(requestConfig)
    return response.data
  }
}
