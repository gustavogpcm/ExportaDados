import { RecordAssistencialRepository } from '../repositories/record-assistencial-repository'
import { AssistencialRepository } from '../repositories/search-assistencial-repository'
export interface SearchAssistencialDataRequest {
  dataUltimaAlteracao: string
  ids?: string
  numeroAtendimento?: string[]
  numeroAutorizacao?: string[]
  dataAltaInicial?: string
  dataAltaFinal?: string
  dataInternacaoInicial?: string
  dataInternacaoFinal?: string
  dataCadastroInicial?: string
  dataCadastroFinal?: string
  dataCadastroAltaInicial?: string
  dataCadastroAltaFinal?: string
  cidPrincipal?: string[]
  cidPrincipalCapitulo?: string[]
  cidSecundario?: string[]
  cidSecundarioCapitulo?: string[]
  procedimento?: string[]
  classeDRG?: string[]
  situacao?: string
  page?: number
}
export interface SearchAssistencialDataResponse {
  id: number
  situacao: string | null
  caraterinternacao: string | null
  numerooperadora: string | null
  numeroregistro: string | null
  numeroatendimento: string | null
  numeroautorizacao: string | null
  datainternacao: Date | null
  dataautorizacao: Date | null
  dataalta: Date | null
  condicaoalta: string | null
  recaida: string | null
  origemreadmissao30dias: string | null
  origemrecaida30dias: string | null
  idinternacaorecaida: number | null
  idorigemrecaida: number | null
  totalhorasventilacaomecanica: string | null
  modalidadeinternacao: string | null
  datacadastroalta: Date | null
  usuariocadastroalta: string | null
  correcaoregistro: string | null
  usuariocorrecao: string | null
  dataultimorecalculo: Date | null
  internadooutrasvezes: string | null
  hospitalinternacaoanterior: string | null
  reinternacao: string | null
  dataprevistaalta: Date | null
  permanenprevistainter: number | null
  permanenciaprevistanaalta: number | null
  permanenciareal: number | null
  percentil: string | null
  procedencia: string | null
  ventilacaomecania: string | null
  datacadastro: Date | null
  usuariocadastro: string | null
  usuariocadastroalta2: string | null
  dataultimaalteracao: Date | null
  usuarioultimaalteracao: string | null
  codigo_instituicao: number | null
  nome_instituicao: string | null
  codigo_hospital: number | null
  nome_hospital: string | null
  codigopaciente_beneficiario: string | null
  plano_beneficiario: string | null
  datanascimento_beneficiario: Date | null
  sexo_beneficiario: string | null
  idadeemanos_beneficiario: number | null
  idadeemmeses_beneficiario: number | null
  idadeemdias_beneficiario: number | null
  nome_medico: string | null
  uf_medico: string | null
  crm_medico: string | null
  especialidade_medico: string | null
  medicoresponsavel_medico: string | null
  tipoatuacao_medico: string | null
  dataexecucao_procedimento: Date | null
  nome_medico_procedimento: string | null
  uf_medico_procedimento: string | null
  crm_medico_procedimento: string | null
  especialid_medico_proced: string | null
  tipatuacao_medico_proced: string | null
  datainicial_cti: Date | null
  datafinal_cti: Date | null
  condicaoalta_cti: string | null
  tipo_cti: string | null
  permanenciaprevistanaalta_cti: number | null
  permanenciareal_cti: number | null
  nome_medico_cti: string | null
  uf_medico_cti: string | null
  crm_medico_cti: string | null
  especialidade_medico_cti: string | null
  codigo_hospital_cti: number | null
  nome_hospital_cti: string | null
  codigo_cidprincipal_cti: string | null
  descricao_cidprincipal_cti: string | null
  codigo_drgbrasilrefinado_cti: string | null
  descri_drgbrasilrefinado_cti: string | null
  tipo_drgbrasilrefinado_cti: string | null
  codigo_mdc_cti: string | null
  descricao_mdc_cti: string | null
  leito_cti: string | null
  pesonascimento_rn: number | null
  idadegestacional_rn: number | null
  comprimento_rn: number | null
  sexo_rn: string | null
  nascidovivo_rn: string | null
  tocotraumatismo_rn: string | null
  apgar_rn: string | null
  apgarquintominuto_rn: number | null
  alta48horas_rn: string | null
  codigo_condadqui: string | null
  descricao_condadqui: string | null
  dataocorrencia_condadqui: Date | null
  datamanifestacao_condadqui: Date | null
  medico_condadqui: string | null
  grave_condadqui: string | null
  numeroatend_altaadmin: string | null
  numeroautorizacao_altaadmin: string | null
  dataautorizacao_altaadmin: Date | null
  dataatendiminicial_altaadmin: Date | null
  dataatendimfinal_altaadmin: Date | null
  dataanalise_analicrit: Date | null
  analisecritica_analicrit: string | null
  tipo_supventil: string | null
  local_supventil: string | null
  datainicial_supventil: Date | null
  datafinal_supventil: Date | null
  codigo_cidprinc: string | null
  descricao_cidprinc: string | null
  sensivelcuidadprima_cidprinc: string | null
  codigo_cidsecun: string | null
  descricao_cidsecun: string | null
  sondavesicaldedemora: string | null
  catetervascularcentral: string | null
  classificacaorobson_partadeq: string | null
  drgadmissional: string | null
  causaexterna: string | null
  cagrave: string | null
  gerenciavelatencaoprimaria: string | null
  gerenciavelemergencia: string | null
  idosofragil: string | null
  codigo_drgbrasilrefin: string | null
  descricao_drgbrasilrefin: string | null
  tipo_drgbrasilrefin: string | null
  peso_drgbrasilrefin: number | null
  codigo_mdc_drgbrasilrefin: string | null
  descricao_mdc_drgbrasilrefin: string | null
  leito: string | null
  descricao_causaext: string | null
  tempo_causaext: string | null
  datainicial_causaext: Date | null
  datafinal_causaext: Date | null
}

export class SearchAssistencial {
  constructor(
    private assistencialRepository: AssistencialRepository,
    private recordAssistencialRepository: RecordAssistencialRepository,
  ) {}

  async execute(
    data: SearchAssistencialDataRequest,
  ): Promise<SearchAssistencialDataResponse> {
    const assistencial = await this.assistencialRepository.searchAssistencial(
      data,
    )
    console.log('Registrando no banco...')
    try {
      for (const registro of assistencial.items) {
        let nome_medico
        let uf_medico
        let crm_medico
        let especialidade_medico
        let tipoatuacao_medico
        let medico_responsavel

        for (const item of registro.medico) {
          nome_medico = item.nome
          uf_medico = item.uf
          crm_medico = item.crm
          especialidade_medico = item.especialidade
          tipoatuacao_medico = item.tipoAtuacao
          medico_responsavel = item.medicoResponsavel
          let data_execucao_procedimento
          let nome_medico_procedimento
          let uf_medico_procedimento
          let crm_medico_procedimento
          let especialid_medico_proced
          let tipatuacao_medico_proced

          for (const item of registro.procedimento) {
            data_execucao_procedimento = item.dataExecucao
              ? new Date(item.dataExecucao)
              : null
            for (const itemMedico of item.medico) {
              nome_medico_procedimento = itemMedico.nome
              uf_medico_procedimento = itemMedico.uf
              crm_medico_procedimento = itemMedico.crm
              especialid_medico_proced = itemMedico.especialidade
              tipatuacao_medico_proced = itemMedico.tipoAtuacao
              const CATETERVASCULARCENTRAL_STR =
                registro.cateterVascularCentral.join('')
              const CAUSAEXTERNA_STR = registro.causaExterna.join('')
              const seq_paciente =
                await this.recordAssistencialRepository.getSequence()
              const send = {
                ID: seq_paciente[0].NEXTVAL,
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
                DATAALTA: registro?.dataAlta
                  ? new Date(registro?.dataAlta)
                  : null,
                CONDICAOALTA: registro?.condicaoAlta || null,
                RECAIDA: registro?.recaida || null,
                ORIGEMREADMISSAO30DIAS:
                  registro?.origemReadmissao30Dias || null,
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
                USUARIOULTIMAALTERACAO:
                  registro?.usuarioUltimaAlteracao || null,
                CODIGO_INSTITUICAO: registro?.instituicao?.codigo || null,
                NOME_INSTITUICAO: registro?.instituicao?.nome || null,
                CODIGO_HOSPITAL: registro?.hospital?.codigo || null,
                NOME_HOSPITAL: registro?.hospital?.nome || null,
                CODIGOPACIENTE_BENEFICIARIO:
                  registro?.beneficiario?.codigoPaciente || null,
                PLANO_BENEFICIARIO: registro?.beneficiario?.plano || null,
                DATANASCIMENTO_BENEFICIARIO: registro?.beneficiario
                  ?.dataNascimento
                  ? new Date(registro?.beneficiario?.dataNascimento)
                  : null,
                SEXO_BENEFICIARIO: registro?.beneficiario?.sexo || null,
                IDADEEMANOS_BENEFICIARIO:
                  registro?.beneficiario?.idadeEmAnos || null,
                IDADEEMMESES_BENEFICIARIO:
                  registro?.beneficiario?.idadeEmMeses || null,
                IDADEEMDIAS_BENEFICIARIO:
                  registro?.beneficiario?.idadeEmDias || null,
                NOME_MEDICO: nome_medico || null,
                UF_MEDICO: uf_medico || null,
                CRM_MEDICO: crm_medico || null,
                ESPECIALIDADE_MEDICO: especialidade_medico || null,
                MEDICORESPONSAVEL_MEDICO: medico_responsavel || null,
                TIPOATUACAO_MEDICO: tipoatuacao_medico || null,
                DATAEXECUCAO_PROCEDIMENTO: data_execucao_procedimento
                  ? new Date(data_execucao_procedimento)
                  : null,
                NOME_MEDICO_PROCEDIMENTO: nome_medico_procedimento || null,
                UF_MEDICO_PROCEDIMENTO: uf_medico_procedimento || null,
                CRM_MEDICO_PROCEDIMENTO: crm_medico_procedimento || null,
                ESPECIALID_MEDICO_PROCED: especialid_medico_proced || null,
                TIPATUACAO_MEDICO_PROCED: tipatuacao_medico_proced || null,
                DATAINICIAL_CTI: registro?.cti?.dataInicial
                  ? new Date(registro?.cti?.dataInicial)
                  : null,
                DATAFINAL_CTI: registro?.cti?.dataFinal
                  ? new Date(registro?.cti?.dataFinal)
                  : null,
                CONDICAOALTA_CTI: registro?.cti?.condicaoAlta || null,
                TIPO_CTI: registro?.cti?.tipo || null,
                PERMANENCIAPREVISTANAALTA_CTI:
                  registro?.cti?.permanicenciaPrevistaNaAlta || null,
                PERMANENCIAREAL_CTI: registro?.cti?.permantenciaReal || null,
                NOME_MEDICO_CTI: registro?.cti?.medico?.nome || null,
                UF_MEDICO_CTI: registro?.cti?.medico?.uf || null,
                CRM_MEDICO_CTI: registro?.cti?.medico?.crm || null,
                ESPECIALIDADE_MEDICO_CTI:
                  registro?.cti?.medico?.especialidade || null,
                CODIGO_HOSPITAL_CTI: registro?.cti?.hospital?.codigo || null,
                NOME_HOSPITAL_CTI: registro?.cti?.hospital?.nome || null,
                CODIGO_CIDPRINCIPAL_CTI: registro?.cti?.cidPrincipal || null,
                DESCRICAO_CIDPRINCIPAL_CTI:
                  registro?.cti?.descricaoCidPrincipal || null,
                CODIGO_DRGBRASILREFINADO_CTI:
                  registro?.drgBrasilRefinado?.codigo || null,
                DESCRI_DRGBRASILREFINADO_CTI:
                  registro?.drgBrasilRefinado?.descricao || null,
                TIPO_DRGBRASILREFINADO_CTI:
                  registro?.drgBrasilRefinado?.tipo || null,
                CODIGO_MDC_CTI:
                  registro?.drgBrasilRefinado?.mdc?.codigo || null,
                DESCRICAO_MDC_CTI:
                  registro?.drgBrasilRefinado?.mdc?.descricao || null,
                LEITO_CTI: registro?.cti?.leito || null,
                PESONASCIMENTO_RN: registro?.rn?.pesoNacimento || null,
                IDADEGESTACIONAL_RN: registro?.rn?.idadeGestacional || null,
                COMPRIMENTO_RN: registro?.rn?.comprimento || null,
                SEXO_RN: registro?.rn?.sexo || null,
                NASCIDOVIVO_RN: registro?.rn?.nascidoVivo || null,
                TOCOTRAUMATISMO_RN: registro?.rn?.tocoTraumatismo || null,
                APGAR_RN: registro?.rn?.apgar || null,
                APGARQUINTOMINUTO_RN: registro?.rn?.apgarQuintoMinuto || null,
                ALTA48HORAS_RN: registro?.rn?.Alta48horas || null,
                NUMEROAUTORIZACAO_ALTAADMIN:
                  registro?.altaAdminstratica?.numeroAutorizacao || null,
                DATAAUTORIZACAO_ALTAADMIN: registro?.altaAdminstratica
                  ?.dataAutorizacao
                  ? new Date(registro?.altaAdminstratica?.dataAutorizacao)
                  : null,
                DATAATENDIMINICIAL_ALTAADMIN: registro?.altaAdminstratica
                  ?.dataAtendiminicial
                  ? new Date(registro?.altaAdminstratica?.dataAtendiminicial)
                  : null,
                DATAATENDIMFINAL_ALTAADMIN: registro?.altaAdminstratica
                  ?.dataAtendimentoFinal
                  ? new Date(registro?.altaAdminstratica?.dataAtendimentoFinal)
                  : null,
                DATAANALISE_ANALICRIT: registro?.analiseCritica?.dataAnalise
                  ? new Date(registro?.analiseCritica?.dataAnalise)
                  : null,
                ANALISECRITICA_ANALICRIT:
                  registro?.analiseCritica?.analiseCritica || null,
                TIPO_SUPVENTIL:
                  registro?.sondaVesicalDeDemora?.analiseCritica || null,
                LOCAL_SUPVENTIL: registro?.suporteVentilatorio?.local || null,
                DATAINICIAL_SUPVENTIL: registro?.suporteVentilatorio
                  ?.dataInicial
                  ? new Date(registro?.suporteVentilatorio?.dataInicial)
                  : null,
                DATAFINAL_SUPVENTIL: registro?.suporteVentilatorio?.dataFinal
                  ? new Date(registro?.suporteVentilatorio?.dataFinal)
                  : null,
                CODIGO_CIDPRINC: registro?.cidPrincipal?.codigo || null,
                DESCRICAO_CIDPRINC: registro?.cidPrincipal?.descricao || null,
                SENSIVELCUIDADPRIMA_CIDPRINC:
                  registro?.cidPrincipal?.sensivelCuidadoPrimario || null,
                CODIGO_CIDSECUN: registro?.cidSecundario?.codigo || null,
                DESCRICAO_CIDSECUN: registro?.cidSecundario?.descricao || null,
                SONDAVESICALDEDEMORA:
                  registro?.sondaVesicalDeDemora?.sondaVesicalDeDemora || null,
                CATETERVASCULARCENTRAL: CATETERVASCULARCENTRAL_STR || null,
                CLASSIFICACAOROBSON_PARTADEQ: registro?.partoAdequado || null,
                DRGADMISSIONAL: registro?.drgAdmissional?.codigo || null,
                CAUSAEXTERNA: CAUSAEXTERNA_STR || null,
                CAGRAVE: registro?.variaveis?.caGrave || null,
                GERENCIAVELATENCAOPRIMARIA:
                  registro?.variaveis?.gerenciavelAtencaoPrimaria || null,
                GERENCIAVELEMERGENCIA:
                  registro?.variaveis?.gerenciavelEmergencia || null,
                IDOSOFRAGIL: registro?.variaveis?.idosoFragil || null,
                CODIGO_DRGBRASILREFIN:
                  registro?.drgBrasilRefinado?.codigo || null,
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

              console.log(send)
              await this.recordAssistencialRepository.recordAssistencial({
                send,
              })
            }
          }
        }
      }
    } catch (e) {
      console.log(e)
    }

    console.log('Acabou de inserir no banco...' + assistencial.items)

    return
  }
}
