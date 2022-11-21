import React, { useState } from 'react'
import Styles from './login-styles.scss'
import { Input, FormStatus, Footer, LoginHeader } from '@/presentation/components/'
import Context from '@/presentation/contexts/form/form-context'

type State = {
  isLoading: boolean
  errorMessage: string
}

const Login: React.FC = () => {
  const [state] = useState<State>({
    isLoading: false,
    errorMessage: ''
  })
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={state}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" placeholder="Digite seu e-mail" name="email" />
          <Input type="password" placeholder="Digite sua senha"name="password"/>
          <button className={Styles.submit} type="submit">Entrar</button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
