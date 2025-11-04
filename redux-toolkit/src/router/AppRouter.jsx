import React from 'react'
import Navbar from '../components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import News from '../pages/News'
import PrivateRouter from './PrivateRouter'

const AppRouter = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
         
        <Route path='/login' element={<Login/>} />

        <Route path='/' element={<PrivateRouter/>}>
  <Route path='' element={<News/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default AppRouter