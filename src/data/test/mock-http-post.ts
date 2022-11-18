import { ParamnsRequestPost } from '../usecases/protocols/http'
import { faker } from '@faker-js/faker'

export const mockPostRequest = (): ParamnsRequestPost<any> => ({
  url: faker.internet.url(),
  body: faker.datatype.json()
})
