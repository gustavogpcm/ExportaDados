import knex from 'knex'

const knexConfig = {
  client: 'sqlite3',
  connection: {
    filename: 'db.sqlite',
  },
  useNullAsDefault: true,
}

const knexInstance = knex(knexConfig)

knexInstance.schema
  .createTableIfNotExists('DRG_REGISTRO_IAG', function (table) {
    table.integer('ID_INTEGRA')
    table.string('SITUACAO')
    table.string('CLASSIFICACAOROBSON_PARTADEQ')
    table.string('CARATERINTERNACAO')
    table.string('NUMEROOPERADORA')
    table.string('NUMEROREGISTRO')
    table.string('NUMEROATENDIMENTO')
    table.string('NUMEROAUTORIZACAO')
    table.date('DATAINTERNACAO')
    table.date('DATAAUTORIZACAO')
    table.date('DATAALTA')
    table.string('CONDICAOALTA')
    table.string('RECAIDA')
    table.string('ORIGEMREADMISSAO30DIAS')
    table.string('ORIGEMRECAIDA30DIAS')
    table.integer('IDINTERNACAORECAIDA')
    table.integer('IDORIGEMRECAIDA')
    table.string('TOTALHORASVENTILACAOMECANICA')
    table.string('MODALIDADEINTERNACAO')
    table.date('DATACADASTROALTA')
    table.string('USUARIOCADASTROALTA')
    table.string('CORRECAOREGISTRO')
    table.string('USUARIOCORRECAO')
    table.string('DATAULTIMORECALCULO')
    table.string('INTERNADOOUTRASVEZES')
    table.string('HOSPITALINTERNACAOANTERIOR')
    table.string('REINTERNACAO')
    table.string('DATAPREVISTAALTA')
    table.integer('PERMANENPREVISTAINTER')
    table.integer('PERMANENCIAPREVISTANAALTA')
    table.integer('PERMANENCIAREAL')
    table.string('PERCENTIL')
    table.string('PROCEDENCIA')
    table.string('VENTILACAOMECANIA')
    table.date('DATACADASTRO')
    table.string('USUARIOCADASTRO')
    table.string('USUARIOCADASTROALTA2')
    table.date('DATAULTIMAALTERACAO')
    table.string('USUARIOULTIMAALTERACAO')
    table.integer('CODIGO_INSTITUICAO')
    table.string('NOME_INSTITUICAO')
    table.integer('CODIGO_HOSPITAL')
    table.string('NOME_HOSPITAL')
    table.string('CODIGOPACIENTE_BENEFICIARIO')
    table.string('PLANO_BENEFICIARIO')
    table.date('DATANASCIMENTO_BENEFICIARIO')
    table.string('SEXO_BENEFICIARIO')
    table.integer('IDADEEMANOS_BENEFICIARIO')
    table.integer('IDADEEMMESES_BENEFICIARIO')
    table.integer('IDADEEMDIAS_BENEFICIARIO')
    table.string('CODIGO_CIDPRINC')
    table.string('DESCRICAO_CIDPRINC')
    table.string('SENSIVELCUIDADPRIMA_CIDPRINC')
    table.string('DRGADMISSIONAL')
    table.string('CAUSAEXTERNA')
    table.string('CAGRAVE')
    table.string('GERENCIAVELATENCAOPRIMARIA')
    table.string('GERENCIAVELEMERGENCIA')
    table.string('IDOSOFRAGIL')
    table.string('CODIGO_DRGBRASILREFIN')
    table.string('DESCRICAO_DRGBRASILREFIN')
    table.string('TIPO_DRGBRASILREFIN')
    table.integer('PESO_DRGBRASILREFIN')
    table.string('CODIGO_MDC_DRGBRASILREFIN')
    table.string('DESCRICAO_MDC_DRGBRASILREFIN')
    table.string('LEITO')
    table.string('DESCRICAO_CAUSAEXT')
    table.string('TEMPO_CAUSAEXT')
    table.date('DATAINICIAL_CAUSAEXT')
    table.date('DATAFINAL_CAUSAEXT')
  })
  .createTableIfNotExists('DRG_REGISTRO_MEDICO', function (table) {
    table.integer('ID_INTEGRA')
    table.string('NOME_MEDICO')
    table.string('UF_MEDICO')
    table.string('CRM_MEDICO')
    table.string('ESPECIALIDADE_MEDICO')
    table.string('MEDICORESPONSAVEL_MEDICO')
    table.string('TIPOATUACAO_MEDICO')
  })
  .createTableIfNotExists('DRG_CID_SECUNDARIO', function (table) {
    table.integer('ID_INTEGRA')
    table.string('CODIGO_CIDSECUN')
    table.string('DESCRICAO_CIDSECUN')
  })
  .createTableIfNotExists('DRG_PROCEDIMENTO', function (table) {
    table.integer('ID_INTEGRA')
    table.string('ID_PROCEDIMENTO')
    table.date('DATAEXECUCAO_PROCEDIMENTO')
  })
  .createTableIfNotExists('DRG_MEDICO_PROCEDIMENTO', function (table) {
    table.integer('ID_INTEGRA')
    table.string('ID_PROCEDIMENTO')
    table.string('NOME_MEDICO_PROCEDIMENTO')
    table.string('UF_MEDICO_PROCEDIMENTO')
    table.string('CRM_MEDICO_PROCEDIMENTO')
    table.string('ESPECIALID_MEDICO_PROCED')
    table.string('TIPATUACAO_MEDICO_PROCED')
  })
  .createTableIfNotExists('DRG_CTI', function (table) {
    table.integer('ID_INTEGRA')
    table.date('DATAINICIAL_CTI')
    table.date('DATAFINAL_CTI')
    table.string('CONDICAOALTA_CTI')
    table.string('TIPO_CTI')
    table.string('PERMANENCIAPREVISTANAALTA_CTI')
    table.string('PERMANENCIAREAL_CTI')
    table.string('NOME_MEDICO_CTI')
    table.string('UF_MEDICO_CTI')
    table.string('CRM_MEDICO_CTI')
    table.string('ESPECIALIDADE_MEDICO_CTI')
    table.string('CODIGO_HOSPITAL_CTI')
    table.string('NOME_HOSPITAL_CTI')
    table.string('CODIGO_CIDPRINCIPAL_CTI')
    table.string('DESCRICAO_CIDPRINCIPAL_CTI')
    table.string('LEITO_CTI')
  })
  .createTableIfNotExists('DRG_RN', function (table) {
    table.integer('ID_INTEGRA')
    table.float('PESONASCIMENTO_RN')
    table.float('IDADEGESTACIONAL_RN')
    table.float('COMPRIMENTO_RN')
    table.string('SEXO_RN')
    table.string('NASCIDOVIVO_RN')
    table.string('TOCOTRAUMATISMO_RN')
    table.string('APGAR_RN')
    table.integer('APGARQUINTOMINUTO_RN')
    table.string('ALTA48HORAS_RN')
  })
  .createTableIfNotExists('DRG_ALTA_ADMINISTRATIVA', function (table) {
    table.integer('ID_INTEGRA')
    table.string('NUMEROAUTORIZACAO_ALTAADMIN')
    table.string('DATAAUTORIZACAO_ALTAADMIN')
    table.string('DATAATENDIMINICIAL_ALTAADMIN')
    table.string('DATAATENDIMFINAL_ALTAADMIN')
  })
  .createTableIfNotExists('DRG_ANALISE_CRITICA', function (table) {
    table.integer('ID_INTEGRA')
    table.date('DATAANALISE_ANALICRIT')
    table.string('ANALISECRITICA_ANALICRIT')
  })
  .createTableIfNotExists('DRG_SUPORTE_VENTILATORIO', function (table) {
    table.integer('ID_INTEGRA')
    table.string('TIPO_SUPVENTIL')
    table.string('LOCAL_SUPVENTIL')
    table.date('DATAINICIAL_SUPVENTIL')
    table.date('DATAFINAL_SUPVENTIL')
  })
  .createTableIfNotExists('DRG_SONDA_VESICAL_DEDEMORA', function (table) {
    table.integer('ID_INTEGRA')
    table.string('SONDAVESICALDEDEMORA')
  })
  .createTableIfNotExists('DRG_CATETER_VASCULAR_CENTRAL', function (table) {
    table.integer('ID_INTEGRA')
    table.string('CATETERVASCULARCENTRAL')
  })
  .then(() => {
    console.log('Todas as tabelas foram criadas com sucesso.')
  })
  .catch((error) => {
    console.error('Erro ao criar as tabelas:', error)
  })

export default knexInstance
