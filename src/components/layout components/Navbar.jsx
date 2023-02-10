import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className='bg-[#0A2640]'>
      <nav className='flex items-center justify-between md:mx-[6.25rem] md:py-[3.5rem] mx-[1.25rem] py-5 border-b-[1px] border-[#69E6A6]'>
        <div className='flex items-center'>
          <img src='/assets/GET-logo-8.png' className='h-[2.125rem]'/>
        </div>

        
      </nav>
    </header>
  )
}

export default Navbar