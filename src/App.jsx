import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Survey } from './pages'
import { Navbar, Footer } from './components/layout components'
import { Register, Login, Welcome } from './pages/auth'
//import { CourseMain } from './pages/courses'

const App = () => {
  return (
    <div className='font-manrope'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/survey' element={<Survey/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/welcome' element={<Welcome/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App