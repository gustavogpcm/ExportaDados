import database from '../../config/local-tadabase'
import { RecordLocalAssistencialRepository } from '../record-local-assistencial-repository'

export class SqlLiteRecordAssistencialRepository
  implements RecordLocalAssistencialRepository
{
  async recordAssistencial({ send }): Promise<void> {
    try {
      await database('DRG_REGISTRO_IAG').insert(send)
    } catch (error) {
      console.error('Error inserting DrgRegistroIag:', error)
      throw error
    }
  }

  async recordMedico({ medico }): Promise<void> {
    try {
      await database('DRG_REGISTRO_MEDICO').insert(medico)
    } catch (error) {
      console.error('Error inserting DrgRegistroMedico')
      throw error
    }
  }

  async recordCidSecundario({ cidSecundario }): Promise<void> {
    try {
      console.log(cidSecundario)
      await database('DRG_CID_SECUNDARIO').insert(cidSecundario)
    } catch (error) {
      console.error('Error inserting DrgRegistroMedico')
      throw error
    }
  }

  async recordProcedimento({ procedimento }): Promise<void> {
    try {
      await database('DRG_PROCEDIMENTO').insert(procedimento)
    } catch (error) {
      console.error('Error inserting DrgRegistroMedico')
      throw error
    }
  }

  async recordMedicoProcedimento({ medicoProcedimento }): Promise<void> {
    try {
      await database('DRG_MEDICO_PROCEDIMENTO').insert(medicoProcedimento)
    } catch (error) {
      console.error('Error inserting DrgRegistroMedico')
      throw error
    }
  }

  async recordCti({ cti }): Promise<void> {
    try {
      await database('DRG_CTI').insert(cti)
    } catch (error) {
      console.error('Error inserting DrgRegistroMedico')
      throw error
    }
  }

  async recordRn({ rn }): Promise<void> {
    try {
      await database('DRG_RN').insert(rn)
      console.log('DrgRegistroMedico inserted successfully!')
    } catch (error) {
      console.error('Error inserting DrgRegistroMedico')
      throw error
    }
  }

  async recordAltaAdm({ altaAdm }): Promise<void> {
    try {
      await database('DRG_ALTA_ADMINISTRATIVA').insert(altaAdm)
    } catch (error) {
      console.error('Error inserting DrgRegistroMedico')
      throw error
    }
  }

  async recordAnaliseCritica({ analiseCritica }): Promise<void> {
    try {
      await database('DRG_ANALISE_CRITICA').insert(analiseCritica)
    } catch (error) {
      console.error('Error inserting DrgRegistroMedico')
      throw error
    }
  }

  async recordSuporteVentilatorio({ suporteVentilatorio }): Promise<void> {
    try {
      await database('DRG_SUPORTE_VENTILATORIO').insert(suporteVentilatorio)
    } catch (error) {
      console.error('Error inserting DrgRegistroMedico')
      throw error
    }
  }

  async recordSondaVesicalDeDemora({ sondaVesicalDeDemora }): Promise<void> {
    try {
      await database('DRG_SONDA_VESICAL_DEDEMORA').insert(sondaVesicalDeDemora)
    } catch (error) {
      console.error('Error inserting DrgRegistroMedico')
      throw error
    }
  }

  async recordCateterVacularCentral({ cateterVascularCentral }): Promise<void> {
    try {
      await database('DRG_CATETER_VASCULAR_CENTRAL').insert(
        cateterVascularCentral,
      )
    } catch (error) {
      console.error('Error inserting DrgRegistroMedico')
      throw error
    }
  }

  async getAllAssistencial(ID_INTEGRA: number): Promise<any> {
    try {
      const select = await database.raw(`
      SELECT   DISTINCT
        DRG_REGISTRO_IAG.ID_INTEGRA,
          DRG_REGISTRO_IAG.SITUACAO,
          DRG_REGISTRO_IAG.CARATERINTERNACAO,
          DRG_REGISTRO_IAG.NUMEROOPERADORA,
          DRG_REGISTRO_IAG.NUMEROREGISTRO,
          DRG_REGISTRO_IAG.NUMEROATENDIMENTO,
          DRG_REGISTRO_IAG.NUMEROAUTORIZACAO,
          DRG_REGISTRO_IAG.DATAINTERNACAO,
          DRG_REGISTRO_IAG.DATAAUTORIZACAO,
          DRG_REGISTRO_IAG.DATAALTA,
          DRG_REGISTRO_IAG.CONDICAOALTA,
          DRG_REGISTRO_IAG.RECAIDA,
          DRG_REGISTRO_IAG.ORIGEMREADMISSAO30DIAS,
          DRG_REGISTRO_IAG.ORIGEMRECAIDA30DIAS,
          DRG_REGISTRO_IAG.IDINTERNACAORECAIDA,
          DRG_REGISTRO_IAG.IDORIGEMRECAIDA,
          DRG_REGISTRO_IAG.TOTALHORASVENTILACAOMECANICA,
          DRG_REGISTRO_IAG.MODALIDADEINTERNACAO,
          DRG_REGISTRO_IAG.DATACADASTROALTA,
          DRG_REGISTRO_IAG.USUARIOCADASTROALTA,
          DRG_REGISTRO_IAG.CORRECAOREGISTRO,
          DRG_REGISTRO_IAG.USUARIOCORRECAO,
          DRG_REGISTRO_IAG.DATAULTIMORECALCULO,
          DRG_REGISTRO_IAG.INTERNADOOUTRASVEZES,
          DRG_REGISTRO_IAG.HOSPITALINTERNACAOANTERIOR,
          DRG_REGISTRO_IAG.REINTERNACAO,
          DRG_REGISTRO_IAG.DATAPREVISTAALTA,
          DRG_REGISTRO_IAG.PERMANENPREVISTAINTER,
          DRG_REGISTRO_IAG.PERMANENCIAPREVISTANAALTA,
          DRG_REGISTRO_IAG.PERMANENCIAREAL,
          DRG_REGISTRO_IAG.PERCENTIL,
          DRG_REGISTRO_IAG.PROCEDENCIA,
          DRG_REGISTRO_IAG.VENTILACAOMECANIA,
          DRG_REGISTRO_IAG.DATACADASTRO,
          DRG_REGISTRO_IAG.USUARIOCADASTRO,
          DRG_REGISTRO_IAG.USUARIOCADASTROALTA2,
          DRG_REGISTRO_IAG.DATAULTIMAALTERACAO,
          DRG_REGISTRO_IAG.USUARIOULTIMAALTERACAO,
          DRG_REGISTRO_IAG.CODIGO_INSTITUICAO,
          DRG_REGISTRO_IAG.NOME_INSTITUICAO,
          DRG_REGISTRO_IAG.CODIGO_HOSPITAL,
          DRG_REGISTRO_IAG.NOME_HOSPITAL,
          DRG_REGISTRO_IAG.CODIGOPACIENTE_BENEFICIARIO,
          DRG_REGISTRO_IAG.PLANO_BENEFICIARIO,
          DRG_REGISTRO_IAG.DATANASCIMENTO_BENEFICIARIO,
          DRG_REGISTRO_IAG.SEXO_BENEFICIARIO,
          DRG_REGISTRO_IAG.IDADEEMANOS_BENEFICIARIO,
          DRG_REGISTRO_IAG.IDADEEMMESES_BENEFICIARIO,
          DRG_REGISTRO_IAG.IDADEEMDIAS_BENEFICIARIO,
          DRG_REGISTRO_IAG.CODIGO_CIDPRINC,
          DRG_REGISTRO_IAG.DESCRICAO_CIDPRINC,
          DRG_REGISTRO_IAG.SENSIVELCUIDADPRIMA_CIDPRINC,
          DRG_REGISTRO_IAG.CLASSIFICACAOROBSON_PARTADEQ,
          DRG_REGISTRO_IAG.DRGADMISSIONAL,
          DRG_REGISTRO_IAG.CAUSAEXTERNA,
          DRG_REGISTRO_IAG.CAGRAVE,
          DRG_REGISTRO_IAG.GERENCIAVELATENCAOPRIMARIA,
          DRG_REGISTRO_IAG.GERENCIAVELEMERGENCIA,
          DRG_REGISTRO_IAG.IDOSOFRAGIL,
          DRG_REGISTRO_IAG.CODIGO_DRGBRASILREFIN,
          DRG_REGISTRO_IAG.DESCRICAO_DRGBRASILREFIN,
          DRG_REGISTRO_IAG.TIPO_DRGBRASILREFIN,
          DRG_REGISTRO_IAG.PESO_DRGBRASILREFIN,
          DRG_REGISTRO_IAG.CODIGO_MDC_DRGBRASILREFIN,
          DRG_REGISTRO_IAG.DESCRICAO_MDC_DRGBRASILREFIN,
          DRG_REGISTRO_IAG.LEITO,
          DRG_REGISTRO_IAG.DESCRICAO_CAUSAEXT,
          DRG_REGISTRO_IAG.TEMPO_CAUSAEXT,
          DRG_REGISTRO_IAG.DATAINICIAL_CAUSAEXT,
          DRG_REGISTRO_IAG.DATAFINAL_CAUSAEXT,
          DRG_REGISTRO_MEDICO.NOME_MEDICO,
          DRG_REGISTRO_MEDICO.UF_MEDICO,
             DRG_REGISTRO_MEDICO.CRM_MEDICO,
             DRG_REGISTRO_MEDICO.ESPECIALIDADE_MEDICO,
             DRG_REGISTRO_MEDICO.MEDICORESPONSAVEL_MEDICO,
             DRG_REGISTRO_MEDICO.TIPOATUACAO_MEDICO,
            DRG_CID_SECUNDARIO.CODIGO_CIDSECUN,
            DRG_CID_SECUNDARIO.DESCRICAO_CIDSECUN,
            DRG_PROCEDIMENTO.DATAEXECUCAO_PROCEDIMENTO,
            DRG_MEDICO_PROCEDIMENTO.NOME_MEDICO_PROCEDIMENTO,
             DRG_MEDICO_PROCEDIMENTO.UF_MEDICO_PROCEDIMENTO,
             DRG_MEDICO_PROCEDIMENTO.CRM_MEDICO_PROCEDIMENTO,
             DRG_MEDICO_PROCEDIMENTO.ESPECIALID_MEDICO_PROCED,
             DRG_MEDICO_PROCEDIMENTO.TIPATUACAO_MEDICO_PROCED,
            DRG_CTI.DATAINICIAL_CTI,
            DRG_CTI.DATAFINAL_CTI,
            DRG_CTI.CONDICAOALTA_CTI,
            DRG_CTI.TIPO_CTI,
            DRG_CTI.PERMANENCIAPREVISTANAALTA_CTI,
            DRG_CTI.PERMANENCIAREAL_CTI,
            DRG_CTI.NOME_MEDICO_CTI,
            DRG_CTI.UF_MEDICO_CTI,
            DRG_CTI.CRM_MEDICO_CTI,
            DRG_CTI.ESPECIALIDADE_MEDICO_CTI,
            DRG_CTI.CODIGO_HOSPITAL_CTI,
            DRG_CTI.NOME_HOSPITAL_CTI,
            DRG_CTI.CODIGO_CIDPRINCIPAL_CTI,
            DRG_CTI.DESCRICAO_CIDPRINCIPAL_CTI,
            DRG_CTI.LEITO_CTI,
            DRG_RN.PESONASCIMENTO_RN,
            DRG_RN.IDADEGESTACIONAL_RN,
            DRG_RN.COMPRIMENTO_RN,
            DRG_RN.SEXO_RN,
            DRG_RN.NASCIDOVIVO_RN,
            DRG_RN.TOCOTRAUMATISMO_RN,
            DRG_RN.APGAR_RN,
            DRG_RN.APGARQUINTOMINUTO_RN,
            DRG_RN.ALTA48HORAS_RN,
            DRG_ALTA_ADMINISTRATIVA.NUMEROAUTORIZACAO_ALTAADMIN,
            DRG_ALTA_ADMINISTRATIVA.DATAAUTORIZACAO_ALTAADMIN,
            DRG_ALTA_ADMINISTRATIVA.DATAATENDIMINICIAL_ALTAADMIN,
            DRG_ALTA_ADMINISTRATIVA.DATAATENDIMFINAL_ALTAADMIN,
            DRG_ANALISE_CRITICA.DATAANALISE_ANALICRIT,
            DRG_ANALISE_CRITICA.ANALISECRITICA_ANALICRIT,
            DRG_SUPORTE_VENTILATORIO.TIPO_SUPVENTIL,
            DRG_SUPORTE_VENTILATORIO.LOCAL_SUPVENTIL,
            DRG_SUPORTE_VENTILATORIO.DATAINICIAL_SUPVENTIL,
            DRG_SUPORTE_VENTILATORIO.DATAFINAL_SUPVENTIL,
            DRG_SONDA_VESICAL_DEDEMORA.SONDAVESICALDEDEMORA,
            DRG_CATETER_VASCULAR_CENTRAL.CATETERVASCULARCENTRAL
       FROM DRG_REGISTRO_IAG
            LEFT JOIN DRG_REGISTRO_MEDICO  ON DRG_REGISTRO_MEDICO.ID_INTEGRA = DRG_REGISTRO_IAG.ID_INTEGRA
            LEFT JOIN DRG_CID_SECUNDARIO ON DRG_CID_SECUNDARIO.ID_INTEGRA = DRG_REGISTRO_IAG.ID_INTEGRA
            LEFT JOIN DRG_PROCEDIMENTO ON DRG_PROCEDIMENTO.ID_INTEGRA = DRG_REGISTRO_IAG.ID_INTEGRA
            LEFT JOIN DRG_MEDICO_PROCEDIMENTO ON DRG_MEDICO_PROCEDIMENTO.ID_PROCEDIMENTO = DRG_PROCEDIMENTO.ID_PROCEDIMENTO
            LEFT JOIN DRG_CTI ON DRG_CTI.ID_INTEGRA = DRG_REGISTRO_IAG.ID_INTEGRA
            LEFT JOIN DRG_RN ON DRG_RN.ID_INTEGRA = DRG_REGISTRO_IAG.ID_INTEGRA
            LEFT JOIN DRG_ALTA_ADMINISTRATIVA ON DRG_ALTA_ADMINISTRATIVA.ID_INTEGRA = DRG_REGISTRO_IAG.ID_INTEGRA
            LEFT JOIN DRG_ANALISE_CRITICA ON DRG_ANALISE_CRITICA.ID_INTEGRA = DRG_REGISTRO_IAG.ID_INTEGRA
            LEFT JOIN DRG_SUPORTE_VENTILATORIO ON DRG_SUPORTE_VENTILATORIO.ID_INTEGRA = DRG_REGISTRO_IAG.ID_INTEGRA
            LEFT JOIN DRG_SONDA_VESICAL_DEDEMORA ON DRG_SONDA_VESICAL_DEDEMORA.ID_INTEGRA = DRG_REGISTRO_IAG.ID_INTEGRA
            LEFT JOIN DRG_CATETER_VASCULAR_CENTRAL ON DRG_CATETER_VASCULAR_CENTRAL.ID_INTEGRA = DRG_REGISTRO_IAG.ID_INTEGRA      
       WHERE DRG_REGISTRO_IAG.ID_INTEGRA = '${ID_INTEGRA}'
       LIMIT 20`)

      return select
    } catch (error) {
      console.error('Error ao selecionar os dados DrgRegistroSQLLite')
    }
  }

  async deleteAllAssistencial(ID: number): Promise<void> {
    try {
      await database('DRG_REGISTRO_IAG')
        .delete('*')
        .where(' DRG_REGISTRO_IAG.ID_INTEGRA', ID)

      await database('DRG_REGISTRO_MEDICO')
        .delete('*')
        .where(' DRG_REGISTRO_MEDICO.ID_INTEGRA', ID)

      await database('DRG_CID_SECUNDARIO')
        .delete('*')
        .where(' DRG_CID_SECUNDARIO.ID_INTEGRA', ID)

      await database('DRG_PROCEDIMENTO')
        .delete('*')
        .where('DRG_PROCEDIMENTO.ID_INTEGRA', ID)

      await database('DRG_MEDICO_PROCEDIMENTO')
        .delete('*')
        .where('DRG_MEDICO_PROCEDIMENTO.ID_INTEGRA', ID)

      await database('DRG_CTI').delete('*').where('DRG_CTI.ID_INTEGRA', ID)

      await database('DRG_RN').delete('*').where('DRG_RN.ID_INTEGRA', ID)

      await database('DRG_ALTA_ADMINISTRATIVA')
        .delete('*')
        .where('DRG_ALTA_ADMINISTRATIVA.ID_INTEGRA', ID)

      await database('DRG_ANALISE_CRITICA')
        .delete('*')
        .where('DRG_ANALISE_CRITICA.ID_INTEGRA', ID)

      await database('DRG_SUPORTE_VENTILATORIO')
        .delete('*')
        .where('DRG_SUPORTE_VENTILATORIO.ID_INTEGRA', ID)

      await database('DRG_SONDA_VESICAL_DEDEMORA')
        .delete('*')
        .where('DRG_SONDA_VESICAL_DEDEMORA.ID_INTEGRA', ID)
      await database('DRG_CATETER_VASCULAR_CENTRAL')
        .delete('*')
        .where('DRG_CATETER_VASCULAR_CENTRAL.ID_INTEGRA', ID)
    } catch (error) {
      console.error('Error inserting DrgRegistroMedico')
      throw error
    }
  }
}
