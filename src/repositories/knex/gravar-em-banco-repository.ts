import { RecordAssistencialRepository } from '../record-assistencial-repository'
import knex from '../../config/database'

export class KnexRecordAssistencialRepository
  implements RecordAssistencialRepository
{
  async recordAssistencial({ send }): Promise<void> {
    try {
      await knex('TIHFR.DRG_REGISTRO_IAG').insert(send)
      console.log('DrgRegistroIag inserted successfully!')
    } catch (error) {
      console.error('Error inserting DrgRegistroIag:', error)
      throw error
    }
  }

  async getSequence(): Promise<number> {
    return await knex.raw(
      `select TIHFR.DRG_REGISTRO_IAG_SEQ.NEXTVAL  from dual`,
    )
  }
}
