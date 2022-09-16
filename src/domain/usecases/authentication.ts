import { AccountModel } from '../models/account-model'

type AuthenticationParamns = {
  email: string
  password: string
}

export interface Authentication {
  auth (params: AuthenticationParamns): Promise<AccountModel>
}
