import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../../test/mock-http-client'
import { faker } from '@faker-js/faker'
import { mockAuthentication } from '../../../domain/test/mock-authentication'
import { InvalidCredentialsError } from '../../../domain/errors/invalid-credentials-error'
import { HttpStatusCode } from '../protocols/http/http-response'
import { UnexpectedError } from '../../../domain/errors/unexpected-error'
import { AuthenticationParamns } from '@/domain/usecases/authentication'
import { AccountModel } from '@/domain/models/account-model'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy<AuthenticationParamns, AccountModel>
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<AuthenticationParamns, AccountModel>()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)
  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Verifica se HttpClient é chamado com a URL correta', async () => {
    const url = faker.internet.url()
    const { sut, httpPostClientSpy } = makeSut(url)
    await sut.auth(mockAuthentication())
    expect(httpPostClientSpy.url).toBe(url)
  })
  test('Verifica se HttpClient é chamado com um body correto', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    const paramnsAuth = mockAuthentication()
    await sut.auth(paramnsAuth)
    expect(httpPostClientSpy.body).toStrictEqual(paramnsAuth)
  })
  test('Verifica se HttpPostClient retorna uma excessão com status 401 caso usuário seja inválido', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unathorized
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })
  test('Verifica se retorna um erro UnexpectedError se HttpPostClient retornar 400', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
  test('Verifica se retorna um erro UnexpectedError se HttpPostClient retornar 500', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
  test('Verifica se retorna um erro UnexpectedError se HttpPostClient retornar 404', async () => {
    const { sut, httpPostClientSpy } = makeSut()
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.auth(mockAuthentication())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
