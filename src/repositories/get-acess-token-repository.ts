export interface GetAcessToken {
  userName: string
  password: string
  origin: string
}
export interface GetAcessTokenRepository {
  getAcessToken(): Promise<string>
}
