import { faker } from '@faker-js/faker'
import { AuthenticationParamns } from '../usecases/authentication'

export const mockAuthentication = (): AuthenticationParamns => (
  {
    email: faker.internet.email(),
    password: faker.internet.password()
  }
)
