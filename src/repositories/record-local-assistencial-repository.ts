export interface RecordLocalAssistencialRepository {
  recordAssistencial(registro): Promise<void>
  recordMedico(medico): Promise<void>
  recordCidSecundario(cidSecundario): Promise<void>
  recordProcedimento(procedimento): Promise<void>
  recordMedicoProcedimento(medicoProcedimento): Promise<void>
  recordCti(cti): Promise<void>
  recordRn(rn): Promise<void>
  recordAltaAdm(altaAdm): Promise<void>
  recordAnaliseCritica(analiseCritica): Promise<void>
  recordSuporteVentilatorio(suporteVentilatorio): Promise<void>
  recordSondaVesicalDeDemora(sondaVesicalDeDemora): Promise<void>
  recordCateterVacularCentral(cateterVascularCentral): Promise<void>
  getAllAssistencial(ID_INTEGRA: number): Promise<any>
  deleteAllAssistencial(ID: number): Promise<any>
}
