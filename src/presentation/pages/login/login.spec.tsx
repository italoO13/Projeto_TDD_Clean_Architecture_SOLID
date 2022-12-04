import React from 'react'
import { faker } from '@faker-js/faker'
import { render, RenderResult, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from './login'
import { Validation } from '@/presentation/protocols/validation'

type SutTypes = {
  sut: RenderResult
  validationSpy: ValidationSpy
}

class ValidationSpy implements Validation {
  errorMessage: string
  input: object

  validate (input: object): string {
    this.input = input
    return this.errorMessage
  }
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = render(<Login validation = {validationSpy} />)
  return {
    sut,
    validationSpy
  }
}

describe('Componente Login', () => {
  afterEach(() => {
    cleanup()
  })

  test('Verifica se inicialmente a mensagem de error e o spinner não são renderizados na tela', () => {
    const { sut } = makeSut()
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  })
  test('Verifica se botão de submit inicialmente está desabilitado', () => {
    const { sut } = makeSut()
    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })
  test('Verifica se o fomulário', () => {
    const { sut } = makeSut()
    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe('Campo obrigatório')
    expect(emailStatus.textContent).toBe('🔴')
    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.title).toBe('Campo obrigatório')
    expect(passwordStatus.textContent).toBe('🔴')
  })

  test('Verifica se validação é chamada com os valores corretos', async () => {
    const { sut, validationSpy } = makeSut()
    const emailInput = sut.getByTestId('email')
    const emailMock = faker.internet.email()
    await userEvent.type(emailInput, emailMock)
    expect(validationSpy.input).toEqual({
      email: emailMock
    })
  })
})
