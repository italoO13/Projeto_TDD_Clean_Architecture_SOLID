import { faker } from '@faker-js/faker'
import { AccountModel } from '../models/account-model'
import { AuthenticationParamns } from '../usecases/authentication'

export const mockAuthentication = (): AuthenticationParamns => (
  {
    email: faker.internet.email(),
    password: faker.internet.password()
  }
)

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.numeric(12)
})
