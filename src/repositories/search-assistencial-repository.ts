export interface SearchAssistencialData {
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

export interface GetAcessToken {
  userName: string
  password: string
  origin: string
}
export interface AssistencialRepository {
  searchAssistencial(info: SearchAssistencialData): Promise<any>
}
