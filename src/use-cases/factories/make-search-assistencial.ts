import { AxiosSearchAssistencialRepository } from '../../repositories/axios/axios-search-assistencial'
import { KnexRecordAssistencialRepository } from '../../repositories/knex/gravar-em-banco-repository'
import { SearchAssistencial } from '../search-assistencial'

export function makeSearchAssistencialUseCase() {
  const axiosSearchAssistencialRepository =
    new AxiosSearchAssistencialRepository()
  const knexRecordAssistencialRepository =
    new KnexRecordAssistencialRepository()

  const searchAssistencialRepository = new SearchAssistencial(
    axiosSearchAssistencialRepository,
    knexRecordAssistencialRepository,
  )
  return searchAssistencialRepository
}
