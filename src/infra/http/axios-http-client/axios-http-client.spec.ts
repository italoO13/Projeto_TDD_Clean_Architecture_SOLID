import { AxiosHttpClient } from './axios-http-client'
import axios from 'axios'
import { mockAxios } from '../../test/mock-axios'
import { mockPostRequest } from '../../../data/test'

jest.mock('axios')

type SutTypes = {
  sut: AxiosHttpClient
  mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient()
  const mockedAxios = mockAxios()
  return { sut, mockedAxios }
}

describe('AxiosHttpClient', () => {
  test('Verifica o axios é chamado com a URL, verbo e o body correta ', async () => {
    const request = mockPostRequest()
    const { sut, mockedAxios } = makeSut()
    await sut.post(request)
    expect(mockedAxios.post).toBeCalledWith(request.url, request.body)
  })
  test('Verifica o axios retorna um statusCode e body correto ', () => {
    const { sut, mockedAxios } = makeSut()
    const promise = sut.post(mockPostRequest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
