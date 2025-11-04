import React from 'react'
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import News from '../pages/News'

const AppRouter = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
           <Route path='/' element={<News/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default AppRouter