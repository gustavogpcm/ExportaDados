export interface RecordAssistencialRepository {
  recordAssistencial(id, registro): Promise<void>
  getSequence(): Promise<number>
}
