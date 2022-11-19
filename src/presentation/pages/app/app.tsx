import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../login/login'
import '../../styles/global.scss'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element ={<Login />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
