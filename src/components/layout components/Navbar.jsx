import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className='bg-[#0A2640]'>
      <nav className='flex items-center justify-between md:mx-[6.25rem] md:py-[3.5rem] mx-[1.25rem] py-5'>
        <div className='flex items-center'>
          <img src='/assets/GET-logo-8.png' className='md:h-[2.125rem] h-[1.5rem]'/>
        </div>

        <ul>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar