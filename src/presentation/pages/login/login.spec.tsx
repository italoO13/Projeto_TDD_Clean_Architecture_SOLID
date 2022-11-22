import React from 'react'
import { getByTestId, render } from '@testing-library/react'
import Login from './login'

describe('Componente Login', () => {
  test('Verifica se inicialmente a mensagem de error e o spinner não são renderizados na tela', () => {
    const { getByTestId } = render(<Login />)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  })
  test('Verifica se botão de submit inicialmente está desabilitado', () => {
    const { getByTestId } = render(<Login />)
    const submitButton = getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })
  test('Verifica se o fomulário', () => {
    const { getByTestId } = render(<Login />)
    const emailStatus = getByTestId('email-status')
    expect(emailStatus.title).toBe('Campo obrigatório')
    expect(emailStatus.textContent).toBe('🔴')
    const passwordStatus = getByTestId('password-status')
    expect(passwordStatus.title).toBe('Campo obrigatório')
    expect(passwordStatus.textContent).toBe('🔴')
  })
})
