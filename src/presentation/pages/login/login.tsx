import React, { useState, useEffect } from 'react'
import Styles from './login-styles.scss'
import { Input, FormStatus, Footer, LoginHeader } from '@/presentation/components/'
import Context from '@/presentation/contexts/form/form-context'
import { Validation } from '../../protocols/validation'

type State = {
  isLoading: boolean
  emailError: string
  email: string
  password: string
  passwordError: string
  mainError: string
}

type Props ={
  validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
  const [state, setState] = useState<State>({
    isLoading: false,
    email: '',
    password: '',
    emailError: 'Campo obrigatório',
    passwordError: 'Campo obrigatório',
    mainError: ''
  })

  useEffect(() => {
    validation.validate('email', state.email)
  }, [state.email])

  useEffect(() => {
    validation.validate('password', state.password)
  }, [state.password])

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" placeholder="Digite seu e-mail" name="email" />
          <Input type="password" placeholder="Digite sua senha"name="password"/>
          <button data-testid="submit" disabled className={Styles.submit} type="submit">Entrar</button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
