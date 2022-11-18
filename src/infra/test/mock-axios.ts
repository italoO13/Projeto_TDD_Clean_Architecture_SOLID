import axios from 'axios'
import { faker } from '@faker-js/faker'

const mockedAxios = axios as jest.Mocked<typeof axios>

export const mockAxios = (): jest.Mocked<typeof axios> => {
  mockedAxios.post.mockResolvedValue({
    data: faker.datatype.json(),
    status: faker.datatype.number()
  })
  return mockedAxios
}
