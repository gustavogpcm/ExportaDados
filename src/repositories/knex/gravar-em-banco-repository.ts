import { RecordAssistencialRepository } from '../record-assistencial-repository'
import knex from '../../config/database'
import { writeLog } from '../../utils/writeFile'

export class KnexRecordAssistencialRepository
  implements RecordAssistencialRepository
{
  async recordAssistencial(ID, send): Promise<void> {
    try {
      const isValidDate = (dateString) => {
        return dateString && !isNaN(new Date(dateString).getTime())
      }
      console.log('DataExecucao: ' + send.DATAEXECUCAO_PROCEDIMENTO)
      const OBJETO = {
        ID,
        DT_PROCESSADO: new Date(),
        ID_INTEGRA: send.ID_INTEGRA,
        SITUACAO: send.SITUACAO,
        CARATERINTERNACAO: send.CARATERINTERNACAO || null,
        NUMEROOPERADORA: send.NUMEROOPERADORA || null,
        NUMEROREGISTRO: send.NUMEROREGISTRO || null,
        NUMEROATENDIMENTO: send.NUMEROATENDIMENTO || null,
        NUMEROAUTORIZACAO: send.NUMEROAUTORIZACAO || null,
        DATAINTERNACAO: isValidDate(send.DATAINTERNACAO)
          ? new Date(send?.DATAINTERNACAO)
          : null,
        DATAAUTORIZACAO: isValidDate(send.DATAAUTORIZACAO)
          ? new Date(send?.DATAAUTORIZACAO)
          : null,
        DATAALTA: isValidDate(send.DATAALTA) ? new Date(send?.DATAALTA) : null,
        CONDICAOALTA: send.CONDICAOALTA || null,
        RECAIDA: send.RECAIDA || null,
        ORIGEMREADMISSAO30DIAS: send.ORIGEMREADMISSAO30DIAS || null,
        ORIGEMRECAIDA30DIAS: send.ORIGEMRECAIDA30DIAS || null,
        IDINTERNACAORECAIDA: send.IDINTERNACAORECAIDA || null,
        IDORIGEMRECAIDA: send.IDORIGEMRECAIDA || null,
        TOTALHORASVENTILACAOMECANICA: send.TOTALHORASVENTILACAOMECANICA || null,
        MODALIDADEINTERNACAO: send.MODALIDADEINTERNACAO || null,
        DATACADASTROALTA: isValidDate(send?.DATACADASTROALTA)
          ? new Date(send?.DATACADASTROALTA)
          : null,
        USUARIOCADASTROALTA: send.USUARIOCADASTROALTA || null,
        CORRECAOREGISTRO: send.CORRECAOREGISTRO || null,
        USUARIOCORRECAO: send.USUARIOCORRECAO || null,
        DATAULTIMORECALCULO: isValidDate(send?.DATAULTIMORECALCULO)
          ? new Date(send?.DATAULTIMORECALCULO)
          : null,
        INTERNADOOUTRASVEZES: send.INTERNADOOUTRASVEZES || null,
        HOSPITALINTERNACAOANTERIOR: send.HOSPITALINTERNACAOANTERIOR || null,
        REINTERNACAO: send.REINTERNACAO || null,
        DATAPREVISTAALTA: isValidDate(send?.DATAPREVISTAALTA)
          ? new Date(send?.DATAPREVISTAALTA)
          : null,
        PERMANENPREVISTAINTER: send.PERMANENPREVISTAINTER || null,
        PERMANENCIAPREVISTANAALTA: send.PERMANENCIAPREVISTANAALTA || null,
        PERMANENCIAREAL: send.PERMANENCIAREAL || null,
        PERCENTIL: send.PERCENTIL || null,
        PROCEDENCIA: send.PROCEDENCIA || null,
        VENTILACAOMECANIA: send.VENTILACAOMECANIA || null,
        DATACADASTRO: isValidDate(send?.DATACADASTRO)
          ? new Date(send?.DATACADASTRO)
          : null,
        USUARIOCADASTRO: send.USUARIOCADASTRO || null,
        USUARIOCADASTROALTA2: send.USUARIOCADASTROALTA2 || null,
        DATAULTIMAALTERACAO: isValidDate(send?.DATAULTIMAALTERACAO)
          ? new Date(send?.DATAULTIMAALTERACAO)
          : null,
        USUARIOULTIMAALTERACAO: send.USUARIOULTIMAALTERACAO || null,
        CODIGO_INSTITUICAO: send.CODIGO_INSTITUICAO || null,
        NOME_INSTITUICAO: send.NOME_INSTITUICAO || null,
        CODIGO_HOSPITAL: send.CODIGO_HOSPITAL || null,
        NOME_HOSPITAL: send.NOME_HOSPITAL || null,
        CODIGOPACIENTE_BENEFICIARIO: send.CODIGOPACIENTE_BENEFICIARIO || null,
        PLANO_BENEFICIARIO: send.PLANO_BENEFICIARIO || null,
        DATANASCIMENTO_BENEFICIARIO: isValidDate(
          send.DATANASCIMENTO_BENEFICIARIO,
        )
          ? new Date(send.DATANASCIMENTO_BENEFICIARIO)
          : null,
        SEXO_BENEFICIARIO: send.SEXO_BENEFICIARIO || null,
        IDADEEMANOS_BENEFICIARIO: send.IDADEEMANOS_BENEFICIARIO || null,
        IDADEEMMESES_BENEFICIARIO: send.IDADEEMMESES_BENEFICIARIO || null,
        IDADEEMDIAS_BENEFICIARIO: send.IDADEEMDIAS_BENEFICIARIO || null,
        NOME_MEDICO: send.NOME_MEDICO || null,
        UF_MEDICO: send.UF_MEDICO || null,
        CRM_MEDICO: send.CRM_MEDICO || null,
        ESPECIALIDADE_MEDICO: send.ESPECIALIDADE_MEDICO || null,
        MEDICORESPONSAVEL_MEDICO: send.MEDICORESPONSAVEL_MEDICO || null,
        TIPOATUACAO_MEDICO: send.TIPOATUACAO_MEDICO || null,
        DATAEXECUCAO_PROCEDIMENTO: isValidDate(send?.DATAEXECUCAO_PROCEDIMENTO)
          ? new Date(send?.DATAEXECUCAO_PROCEDIMENTO)
          : null,
        NOME_MEDICO_PROCEDIMENTO: send.NOME_MEDICO_PROCEDIMENTO || null,
        UF_MEDICO_PROCEDIMENTO: send.UF_MEDICO_PROCEDIMENTO || null,
        CRM_MEDICO_PROCEDIMENTO: send.CRM_MEDICO_PROCEDIMENTO || null,
        ESPECIALID_MEDICO_PROCED: send.ESPECIALID_MEDICO_PROCED || null,
        TIPATUACAO_MEDICO_PROCED: send.TIPATUACAO_MEDICO_PROCED || null,
        DATAINICIAL_CTI: isValidDate(send?.DATAINICIAL_CTI)
          ? new Date(send?.DATAINICIAL_CTI)
          : null,
        DATAFINAL_CTI: isValidDate(send?.DATAFINAL_CTI)
          ? new Date(send?.DATAFINAL_CTI)
          : null,
        CONDICAOALTA_CTI: send.CONDICAOALTA_CTI || null,
        TIPO_CTI: send.TIPO_CTI || null,
        PERMANENCIAPREVISTANAALTA_CTI:
          send.PERMANENCIAPREVISTANAALTA_CTI || null,
        PERMANENCIAREAL_CTI: send.PERMANENCIAREAL_CTI || null,
        NOME_MEDICO_CTI: send.NOME_HOSPITAL_CTI || null,
        UF_MEDICO_CTI: send.UF_MEDICO_CTI || null,
        CRM_MEDICO_CTI: send.CRM_MEDICO_CTI || null,
        ESPECIALIDADE_MEDICO_CTI: send.ESPECIALIDADE_MEDICO_CTI || null,
        CODIGO_HOSPITAL_CTI: send.CODIGO_HOSPITAL_CTI || null,
        NOME_HOSPITAL_CTI: send.NOME_HOSPITAL_CTI || null,
        CODIGO_CIDPRINCIPAL_CTI: send.CODIGO_CIDPRINCIPAL_CTI || null,
        DESCRICAO_CIDPRINCIPAL_CTI: send.CODIGO_CIDPRINCIPAL_CTI || null,
        CODIGO_DRGBRASILREFINADO_CTI: send.CODIGO_DRGBRASILREFINADO_CTI || null,
        DESCRI_DRGBRASILREFINADO_CTI: send.DESCRI_DRGBRASILREFINADO_CTI || null,
        TIPO_DRGBRASILREFINADO_CTI: send.TIPO_DRGBRASILREFINADO_CTI || null,
        CODIGO_MDC_CTI: send.CODIGO_MDC_CTI || null,
        DESCRICAO_MDC_CTI: send.DESCRICAO_MDC_CTI || null,
        LEITO_CTI: send.LEITO_CTI || null,
        PESONASCIMENTO_RN: send.PESONASCIMENTO_RN || null,
        IDADEGESTACIONAL_RN: send.IDADEGESTACIONAL_RN || null,
        COMPRIMENTO_RN: send.COMPRIMENTO_RN || null,
        SEXO_RN: send.SEXO_RN || null,
        NASCIDOVIVO_RN: send.NASCIDOVIVO_RN || null,
        TOCOTRAUMATISMO_RN: send.TOCOTRAUMATISMO_RN || null,
        APGAR_RN: send.APGAR_RN || null,
        APGARQUINTOMINUTO_RN: send.APGARQUINTOMINUTO_RN || null,
        ALTA48HORAS_RN: send.ALTA48HORAS_RN || null,
        NUMEROAUTORIZACAO_ALTAADMIN: send.NUMEROAUTORIZACAO_ALTAADMIN || null,
        DATAAUTORIZACAO_ALTAADMIN: isValidDate(send.DATAAUTORIZACAO_ALTAADMIN)
          ? new Date(send.DATAAUTORIZACAO_ALTAADMIN)
          : null,
        DATAATENDIMINICIAL_ALTAADMIN: isValidDate(
          send?.DATAATENDIMINICIAL_ALTAADMIN?.dataAtendiminicial,
        )
          ? new Date(send?.DATAATENDIMINICIAL_ALTAADMIN)
          : null,
        DATAATENDIMFINAL_ALTAADMIN: isValidDate(
          send?.DATAATENDIMINICIAL_ALTAADMIN,
        )
          ? new Date(send?.DATAATENDIMINICIAL_ALTAADMIN)
          : null,
        DATAANALISE_ANALICRIT: isValidDate(send?.DATAANALISE_ANALICRIT)
          ? new Date(send?.DATAANALISE_ANALICRIT)
          : null,
        ANALISECRITICA_ANALICRIT: send.ANALISECRITICA_ANALICRIT || null,
        TIPO_SUPVENTIL: send.TIPO_SUPVENTIL || null,
        LOCAL_SUPVENTIL: send.LOCAL_SUPVENTIL || null,
        DATAINICIAL_SUPVENTIL: isValidDate(send?.DATAINICIAL_SUPVENTIL)
          ? new Date(send?.DATAINICIAL_SUPVENTIL)
          : null,
        DATAFINAL_SUPVENTIL: isValidDate(send?.DATAFINAL_SUPVENTIL)
          ? new Date(send?.DATAFINAL_SUPVENTIL)
          : null,
        CODIGO_CIDPRINC: send.CODIGO_CIDPRINC || null,
        DESCRICAO_CIDPRINC: send.DESCRICAO_CIDPRINC || null,
        SENSIVELCUIDADPRIMA_CIDPRINC: send.SENSIVELCUIDADPRIMA_CIDPRINC || null,
        CODIGO_CIDSECUN: send.CODIGO_CIDSECUN || null,
        DESCRICAO_CIDSECUN: send.DESCRICAO_CIDSECUN || null,
        SONDAVESICALDEDEMORA: send.SONDAVESICALDEDEMORA || null,
        CATETERVASCULARCENTRAL: send.CATETERVASCULARCENTRAL || null,
        CLASSIFICACAOROBSON_PARTADEQ: send.CLASSIFICACAOROBSON_PARTADEQ || null,
        DRGADMISSIONAL: send.DRGADMISSIONAL || null,
        CAUSAEXTERNA: send.DRGADMISSIONAL || null,
        CAGRAVE: send.CAGRAVE || null,
        GERENCIAVELATENCAOPRIMARIA: send.GERENCIAVELATENCAOPRIMARIA || null,
        GERENCIAVELEMERGENCIA: send.GERENCIAVELEMERGENCIA || null,
        IDOSOFRAGIL: send.IDOSOFRAGIL || null,
        CODIGO_DRGBRASILREFIN: send.CODIGO_DRGBRASILREFIN || null,
        DESCRICAO_DRGBRASILREFIN: send.DESCRICAO_DRGBRASILREFIN || null,
        TIPO_DRGBRASILREFIN: send.TIPO_DRGBRASILREFIN || null,
        PESO_DRGBRASILREFIN: send.PESO_DRGBRASILREFIN || null,
        CODIGO_MDC_DRGBRASILREFIN: send.CODIGO_MDC_DRGBRASILREFIN || null,
        DESCRICAO_MDC_DRGBRASILREFIN: send.DESCRICAO_MDC_DRGBRASILREFIN || null,
        LEITO: send.LEITO || null,
        DESCRICAO_CAUSAEXT: send.DESCRICAO_CAUSAEXT || null,
        TEMPO_CAUSAEXT: send.TEMPO_CAUSAEXT || null,
        DATAINICIAL_CAUSAEXT: isValidDate(send?.DATAINICIAL_CAUSAEXT)
          ? new Date(send?.DATAINICIAL_CAUSAEXT)
          : null,
        DATAFINAL_CAUSAEXT: isValidDate(send?.DATAFINAL_CAUSAEXT)
          ? new Date(send?.DATAFINAL_CAUSAEXT)
          : null,
        CODIGO_PROCEDIMENTO: send?.CODIGO_PROCEDIMENTO || null,
        NOME_PROCEDIMENTO: send?.NOME_PROCEDIMENTO || null,
      }

      await writeLog(OBJETO)
      await knex('TIHFR.DRG_REGISTRO_IAG').insert(OBJETO)
      console.log('DrgRegistroIag inserted successfully!')
    } catch (error) {
      console.error('Error inserting DrgRegistroIag ORACLE:', error)
      throw error
    }
  }

  async getSequence(): Promise<number> {
    return await knex.raw(
      `select TIHFR.DRG_REGISTRO_IAG_SEQ.NEXTVAL  from dual`,
    )
  }
}
