import React from 'react'
import Home from './Components/Pages/Home/Home'
import Login from './Components/Pages/Login/Login'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App;