import React from 'react'
import Styles from './login-styles.scss'
import { Input, FormStatus, Footer, LoginHeader } from '@/presentation/components/'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <LoginHeader />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" placeholder="Digite seu e-mail" name="email" />
        <Input type="password" placeholder="Digite sua senha"name="password"/>
        <button className={Styles.submit} type="submit">Entrar</button>
        <span className={Styles.link}>Criar conta</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}

export default Login
