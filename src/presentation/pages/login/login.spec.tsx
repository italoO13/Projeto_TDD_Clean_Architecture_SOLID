import React from 'react'
import { render } from '@testing-library/react'
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
})
