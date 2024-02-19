import { AssistencialRepository } from '../repositories/search-assistencial-repository'

import { RecordLocalAssistencialRepository } from '../repositories/record-local-assistencial-repository'
import { RecordAssistencialRepository } from '../repositories/record-assistencial-repository'
import {
  SearchAssistencialDataRequest,
  SearchAssistencialDataResponse,
} from '../models/Assistencial'
import console from 'console'

export class SearchAssistencial {
  constructor(
    private assistencialRepository: AssistencialRepository,
    private recordAssistencialKnexRepository: RecordAssistencialRepository,
    private recordAssistencialRepository: RecordLocalAssistencialRepository,
  ) {}

  async execute(
    data: SearchAssistencialDataRequest,
  ): Promise<SearchAssistencialDataResponse> {
    const assistencial = await this.assistencialRepository.searchAssistencial(
      data,
    )
    try {
      for (const registro of assistencial.items) {
        const ID_INTEGRA: number = parseInt(registro.id)
        console.log('ID: ' + ID_INTEGRA)
        const send = {
          ID_INTEGRA: registro.id,
          SITUACAO: registro?.situacao || null,
          CARATERINTERNACAO: registro?.caraterInternacao || null,
          NUMEROOPERADORA: registro?.numeroOperadora || null,
          NUMEROREGISTRO: registro?.numeroRegistro || null,
          NUMEROATENDIMENTO: registro?.numeroAtendimento || null,
          NUMEROAUTORIZACAO: registro?.numeroAutorizacao || null,
          DATAINTERNACAO: registro?.dataInternacao
            ? new Date(registro?.dataInternacao)
            : null,
          DATAAUTORIZACAO: registro?.dataAutorizacao
            ? new Date(registro?.dataAutorizacao)
            : null,
          DATAALTA: registro?.dataAlta ? new Date(registro?.dataAlta) : null,
          CONDICAOALTA: registro?.condicaoAlta || null,
          RECAIDA: registro?.recaida || null,
          ORIGEMREADMISSAO30DIAS: registro?.origemReadmissao30Dias || null,
          ORIGEMRECAIDA30DIAS: registro?.origemRecaida30Dias || null,
          IDINTERNACAORECAIDA: registro?.idInternacaoRecaida || null,
          IDORIGEMRECAIDA: registro?.idOrigemRecaida || null,
          TOTALHORASVENTILACAOMECANICA:
            registro?.totalHorasVentilacaoMecanica || null,
          MODALIDADEINTERNACAO: registro?.modalidadeInternacao || null,
          DATACADASTROALTA: registro?.dataCadastroAlta
            ? new Date(registro?.dataCadastroAlta)
            : null || null,
          USUARIOCADASTROALTA: registro?.usuarioCadastroAlta || null,
          CORRECAOREGISTRO: registro?.correcaoRegistro || null,
          USUARIOCORRECAO: registro?.usuarioCorrecao || null,
          DATAULTIMORECALCULO: registro?.dataUltimoRecalculo || null,
          INTERNADOOUTRASVEZES: registro?.internadooutrasvezes || null,
          HOSPITALINTERNACAOANTERIOR:
            registro?.hospitalinternacaoanterior || null,
          REINTERNACAO: registro?.reinternacao || null,
          DATAPREVISTAALTA: registro?.dataPrevistaAlta
            ? new Date(registro?.dataPrevistaAlta)
            : null,
          PERMANENPREVISTAINTER:
            registro?.permanenciaPrevistaNaInternacao || null,
          PERMANENCIAPREVISTANAALTA:
            registro?.permanenciaPrevistaNaAlta || null,
          PERMANENCIAREAL: registro?.permanenciaReal || null,
          PERCENTIL: registro?.percentil || null,
          PROCEDENCIA: registro?.procedencia || null,
          VENTILACAOMECANIA: registro?.ventilacaoMecanica || null,
          DATACADASTRO: registro?.dataCadastro
            ? new Date(registro?.dataCadastro)
            : null,
          USUARIOCADASTRO: registro?.usuarioCadastro || null,
          USUARIOCADASTROALTA2: registro?.usuarioCadastroAlta || null,
          DATAULTIMAALTERACAO: registro?.dataUltimaAlteracao
            ? new Date(registro?.dataUltimaAlteracao)
            : null,
          USUARIOULTIMAALTERACAO: registro?.usuarioUltimaAlteracao || null,
          CODIGO_INSTITUICAO: registro?.instituicao?.codigo || null,
          NOME_INSTITUICAO: registro?.instituicao?.nome || null,
          CODIGO_HOSPITAL: registro?.hospital?.codigo || null,
          NOME_HOSPITAL: registro?.hospital?.nome || null,
          CODIGOPACIENTE_BENEFICIARIO:
            registro?.beneficiario?.codigoPaciente || null,
          PLANO_BENEFICIARIO: registro?.beneficiario?.plano || null,
          DATANASCIMENTO_BENEFICIARIO: registro?.beneficiario?.dataNascimento
            ? new Date(registro?.beneficiario?.dataNascimento)
            : null,
          SEXO_BENEFICIARIO: registro?.beneficiario?.sexo || null,
          IDADEEMANOS_BENEFICIARIO: registro?.beneficiario?.idadeEmAnos || null,
          IDADEEMMESES_BENEFICIARIO:
            registro?.beneficiario?.idadeEmMeses || null,
          IDADEEMDIAS_BENEFICIARIO: registro?.beneficiario?.idadeEmDias || null,

          CODIGO_CIDPRINC: registro?.cidPrincipal?.codigo || null,
          DESCRICAO_CIDPRINC: registro?.cidPrincipal?.descricao || null,
          SENSIVELCUIDADPRIMA_CIDPRINC:
            registro?.cidPrincipal?.sensivelCuidadoPrimario || null,

          CLASSIFICACAOROBSON_PARTADEQ: registro?.partoAdequado || null,
          DRGADMISSIONAL: registro?.drgAdmissional?.codigo || null,
          CAUSAEXTERNA: registro.causaExterna || null,
          CAGRAVE: registro?.variaveis?.caGrave || null,
          GERENCIAVELATENCAOPRIMARIA:
            registro?.variaveis?.gerenciavelAtencaoPrimaria || null,
          GERENCIAVELEMERGENCIA:
            registro?.variaveis?.gerenciavelEmergencia || null,
          IDOSOFRAGIL: registro?.variaveis?.idosoFragil || null,
          CODIGO_DRGBRASILREFIN: registro?.drgBrasilRefinado?.codigo || null,
          DESCRICAO_DRGBRASILREFIN:
            registro?.drgBrasilRefinado?.descricao || null,
          TIPO_DRGBRASILREFIN: registro?.drgBrasilRefinado?.tipo || null,
          PESO_DRGBRASILREFIN: registro?.drgBrasilRefinado?.peso || null,
          CODIGO_MDC_DRGBRASILREFIN:
            registro?.drgBrasilRefinado?.mdc?.codigo || null,
          DESCRICAO_MDC_DRGBRASILREFIN:
            registro?.drgBrasilRefinado?.mdc?.descricao || null,
          LEITO: registro?.leito || null,
          DESCRICAO_CAUSAEXT: registro?.causaExterna?.descricao || null,
          TEMPO_CAUSAEXT: registro?.causaExterna?.tempo || null,
          DATAINICIAL_CAUSAEXT: registro?.causaExterna?.dataInicial
            ? new Date(registro?.causaExterna?.dataInicial)
            : null,
          DATAFINAL_CAUSAEXT: registro?.causaExterna?.dataFinal
            ? new Date(registro?.causaExterna?.dataFinal)
            : null,
        }
        console.log(send.ID_INTEGRA)
        await this.recordAssistencialRepository.recordAssistencial({
          send,
        })
        for (const medicoItens of registro.medico) {
          const medico = {
            ID_INTEGRA,
            NOME_MEDICO: medicoItens.nome || null,
            UF_MEDICO: medicoItens.uf || null,
            CRM_MEDICO: medicoItens.crm || null,
            ESPECIALIDADE_MEDICO: medicoItens.especialidade || null,
            MEDICORESPONSAVEL_MEDICO: medicoItens.medicoResponsavel || null,
            TIPOATUACAO_MEDICO: medicoItens.tipoAtuacao || null,
          }
          await this.recordAssistencialRepository.recordMedico({ medico })
        }
        for (const cidSecundarioItens of registro.cidSecundario) {
          const cidSecundario = {
            ID_INTEGRA,
            CODIGO_CIDSECUN: cidSecundarioItens.codigo || null,
            DESCRICAO_CIDSECUN: cidSecundarioItens.descricao || null,
          }
          await this.recordAssistencialRepository.recordCidSecundario({
            cidSecundario,
          })
        }
        for (const procedimentoItens of registro.procedimento) {
          const procedimento = {
            ID_INTEGRA,
            ID_PROCEDIMENTO: procedimentoItens.codigo,
            DATAEXECUCAO_PROCEDIMENTO:
              procedimentoItens.DATAEXECUCAO_PROCEDIMENTO
                ? new Date(procedimentoItens.DATAEXECUCAO_PROCEDIMENTO)
                : null,
          }
          await this.recordAssistencialRepository.recordProcedimento({
            procedimento,
          })
          for (const medicoProcedimentoItens of procedimentoItens.medico) {
            const medicoProcedimento = {
              ID_INTEGRA,
              ID_PROCEDIMENTO: procedimentoItens.codigo,
              NOME_MEDICO_PROCEDIMENTO: medicoProcedimentoItens.nome || null,
              UF_MEDICO_PROCEDIMENTO: medicoProcedimentoItens.uf || null,
              CRM_MEDICO_PROCEDIMENTO: medicoProcedimentoItens.crm || null,
              ESPECIALID_MEDICO_PROCED:
                medicoProcedimentoItens.especialidade || null,
              TIPATUACAO_MEDICO_PROCED:
                medicoProcedimentoItens.medicoResponsavel || null,
            }
            await this.recordAssistencialRepository.recordMedicoProcedimento({
              medicoProcedimento,
            })
          }
        }
        for (const ctiItens of registro.cti) {
          const cti = {
            ID_INTEGRA,
            DATAINICIAL_CTI: ctiItens.dataInicial
              ? new Date(ctiItens.dataInicial)
              : null,
            DATAFINAL_CTI: ctiItens.dataFinal
              ? new Date(ctiItens.dataFinal)
              : null,
            CONDICAOALTA_CTI: ctiItens.condicaoAlta || null,
            TIPO_CTI: ctiItens.tipo || null,
            PERMANENCIAPREVISTANAALTA_CTI:
              ctiItens.permanicenciaPrevistaNaAlta || null,
            PERMANENCIAREAL_CTI: ctiItens.permantenciaReal || null,
            NOME_MEDICO_CTI: ctiItens.medico?.nome || null,
            UF_MEDICO_CTI: ctiItens.medico?.uf || null,
            CRM_MEDICO_CTI: ctiItens.medico?.crm || null,
            ESPECIALIDADE_MEDICO_CTI: ctiItens.medico?.especialidade || null,
            CODIGO_HOSPITAL_CTI: ctiItens.hospital?.codigo || null,
            NOME_HOSPITAL_CTI: ctiItens.hospital?.nome || null,
            CODIGO_CIDPRINCIPAL_CTI: ctiItens.cidPrincipal || null,
            DESCRICAO_CIDPRINCIPAL_CTI: ctiItens.descricaoCidPrincipal || null,
            LEITO_CTI: ctiItens.leito || null,
          }
          await this.recordAssistencialRepository.recordCti({
            cti,
          })
        }
        for (const rnItens of registro.rn) {
          const rn = {
            ID_INTEGRA,
            PESONASCIMENTO_RN: rnItens.pesoNacimento || null,
            IDADEGESTACIONAL_RN: rnItens.idadeGestacional || null,
            COMPRIMENTO_RN: rnItens.comprimento || null,
            SEXO_RN: rnItens.sexo || null,
            NASCIDOVIVO_RN: rnItens.nascidoVivo || null,
            TOCOTRAUMATISMO_RN: rnItens.tocoTraumatismo || null,
            APGAR_RN: rnItens.apgar || null,
            APGARQUINTOMINUTO_RN: rnItens.apgarQuintoMinuto || null,
            ALTA48HORAS_RN: rnItens.Alta48horas || null,
          }
          await this.recordAssistencialRepository.recordRn({
            rn,
          })
        }
        for (const altaAdministrativaItens of registro.altaAdministrativa) {
          const altaAdm = {
            ID_INTEGRA,
            NUMEROAUTORIZACAO_ALTAADMIN:
              altaAdministrativaItens.numeroAutorizacao || null,
            DATAAUTORIZACAO_ALTAADMIN: altaAdministrativaItens?.dataAutorizacao
              ? new Date(altaAdministrativaItens.dataAutorizacao)
              : null,
            DATAATENDIMINICIAL_ALTAADMIN: altaAdministrativaItens
              .altaAdminstratica?.dataAtendiminicial
              ? new Date(altaAdministrativaItens.dataAtendiminicial)
              : null,
            DATAATENDIMFINAL_ALTAADMIN:
              altaAdministrativaItens?.dataAtendimentoFinal
                ? new Date(altaAdministrativaItens.dataAtendimentoFinal)
                : null,
          }
          await this.recordAssistencialRepository.recordAltaAdm({
            altaAdm,
          })
        }
        for (const analiseCriticaItens of registro.analiseCritica) {
          const analiseCritica = {
            ID_INTEGRA,
            DATAANALISE_ANALICRIT: analiseCriticaItens.dataAnalise
              ? new Date(analiseCriticaItens.dataAnalise)
              : null,
            ANALISECRITICA_ANALICRIT:
              analiseCriticaItens.analiseCritica || null,
          }
          await this.recordAssistencialRepository.recordAnaliseCritica({
            analiseCritica,
          })
        }
        for (const suporteVentilatorioItens of registro.suporteVentilatorio) {
          const suporteVentilatorio = {
            ID_INTEGRA,
            TIPO_SUPVENTIL: suporteVentilatorioItens.analiseCritica || null,
            LOCAL_SUPVENTIL: suporteVentilatorioItens.local || null,
            DATAINICIAL_SUPVENTIL: suporteVentilatorioItens.dataInicial
              ? new Date(suporteVentilatorioItens.dataInicial)
              : null,
            DATAFINAL_SUPVENTIL: suporteVentilatorioItens.dataFinal
              ? new Date(suporteVentilatorioItens.dataFinal)
              : null,
          }
          await this.recordAssistencialRepository.recordSuporteVentilatorio({
            suporteVentilatorio,
          })
        }
        for (const sondaVesicalDeDemoraItens of registro.sondaVesicalDeDemora) {
          const sondaVesicalDeDemora = {
            ID_INTEGRA,
            SONDAVESICALDEDEMORA:
              sondaVesicalDeDemoraItens.sondaVesicalDeDemora || null,
          }
          await this.recordAssistencialRepository.recordSondaVesicalDeDemora({
            sondaVesicalDeDemora,
          })
        }
        for (const cateterVascularCentralItens of registro.cateterVascularCentral) {
          const cateterVascularCentral = {
            ID_INTEGRA,
            CATETERVASCULARCENTRAL:
              cateterVascularCentralItens.cateterVascularCentral,
          }
          await this.recordAssistencialRepository.recordCateterVacularCentral({
            cateterVascularCentral,
          })
        }
        console.log(ID_INTEGRA)
        const assistencialData =
          await this.recordAssistencialRepository.getAllAssistencial(ID_INTEGRA)

        for (const item of assistencialData) {
          // console.log(item)
          const seq = await this.recordAssistencialKnexRepository.getSequence()
          await this.recordAssistencialKnexRepository.recordAssistencial(
            seq[0].NEXTVAL,
            item,
          )
          await this.recordAssistencialRepository.deleteAllAssistencial(
            ID_INTEGRA,
          )
        }
      }
      return
    } catch (error) {
      console.error('Erro ao inserir dados:', error)
      throw error
    }
  }
}
