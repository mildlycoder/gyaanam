import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className='bg-[#0A2640]'>
      <nav className='flex items-center justify-between md:mx-[6.25rem] md:py-[3.5rem] mx-[1.25rem] py-5 border-b-[1px] border-[#69E6A6]'>
        <div className='flex items-center'>
          <img src='/assets/GET-logo-8.png' className='h-[2.125rem]'/>
        </div>

        <div>
          <ul className=' hidden md:flex text-neutral-100 items-center font-semibold gap-6 text-[1rem]'>
            <li>Products</li>
            <li>Services</li>
            <li>About</li>
            <li>
              <button className='bg-neutral-100 px-8 py-2 text-[#0A2640] rounded-l-full rounded-r-full'>
                Log in
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar