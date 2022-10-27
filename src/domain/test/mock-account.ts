import { AccountModel } from '../models'
import { AuthenticationParamns } from '../usecases'
import { faker } from '@faker-js/faker'

export const mockAuthentication = (): AuthenticationParamns => (
  {
    email: faker.internet.email(),
    password: faker.internet.password()
  }
)

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.numeric(12)
})
