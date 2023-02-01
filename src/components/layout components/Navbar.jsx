import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className='bg-[#0A2640]'>
      <nav className='flex items-center justify-between w-[75%] mx-auto py-5 border-b-2 border-[#69E6A6]'>
        <div className='flex items-center'>
          <img src='/assets/Gyaanam.png' className='h-[2.125rem]'/>
        </div>

        <div>
          <ul className='flex text-neutral-100 items-center font-semibold gap-6 text-[1rem]'>
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