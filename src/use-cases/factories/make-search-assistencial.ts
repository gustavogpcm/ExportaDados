import { AxiosSearchAssistencialRepository } from '../../repositories/axios/axios-search-assistencial'
import { KnexRecordAssistencialRepository } from '../../repositories/knex/gravar-em-banco-repository'
import { SqlLiteRecordAssistencialRepository } from '../../repositories/sqllite/gravar-em-banco-local-repository'
import { SearchAssistencial } from '../new-search-assistencial'

export function makeSearchAssistencialUseCase() {
  const axiosSearchAssistencialRepository =
    new AxiosSearchAssistencialRepository()
  const knexRecordAssistencialRepository =
    new KnexRecordAssistencialRepository()
  const sqlLiteRecordAssistencialRepository =
    new SqlLiteRecordAssistencialRepository()
  const searchAssistencialRepository = new SearchAssistencial(
    axiosSearchAssistencialRepository,
    knexRecordAssistencialRepository,
    sqlLiteRecordAssistencialRepository,
  )
  return searchAssistencialRepository
}
