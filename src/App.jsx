import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Survey } from './pages'
import { Navbar, Footer } from './components/layout components'

const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/survey' element={<Survey/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App