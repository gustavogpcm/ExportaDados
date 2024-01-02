export interface RecordAssistencialRepository {
  recordAssistencial(registro): Promise<void>
  getSequence(): Promise<number>
}
