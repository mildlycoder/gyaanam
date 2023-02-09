import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Survey, ExitPage } from './pages'
import { Navbar, Footer } from './components/layout components'

const App = () => {
  return (
    <div className='font-manrope'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/survey' element={<Survey/>}/>
          <Route path='/exit' element={<ExitPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App