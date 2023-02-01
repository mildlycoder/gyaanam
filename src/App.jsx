import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages'
import { Navbar, Footer } from './components/layout components'

const App = () => {
  return (
    <div className=''>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App