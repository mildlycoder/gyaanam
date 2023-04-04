import React, {useState} from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='bg-[#0A2640]'>
      <nav className='hidden md:flex items-center justify-between md:mx-[6.25rem] md:py-[3.5rem] mx-[1.25rem] py-5'>
        <div className='flex items-center'>
          <img src='/assets/GET-logo-8.png' className='md:h-[2.125rem] h-[1.5rem]'/>
        </div>

        <ul className='flex items-baseline gap-5'>
          <li className=' text-xl hover:underline cursor-pointer text-[#65E4A3] hover:scale-110 transition-all'>
              About
          </li>
          
          <li className=''>
              <Link to='/login'><button className='px-10 py-2 rounded-r-full rounded-l-full font-semibold border-2 bg-[#65E4A3] border-[#65E4A3] hover:bg-[#0A2640] hover:text-[#65E4A3] hover:scale-110 transition-all'>Log in</button></Link>
          </li>
        </ul>
      </nav>


      {/* mobile view */}
      <nav className='md:hidden flex flex-col items-center justify-between md:mx-[6.25rem] md:py-[1.5rem] mx-[1.25rem] py-5'>
        <div className='flex flex-row gap-36'>
          <div className='flex items-center'>
            <img src='/assets/GET-logo-8.png' className='h-[1.5rem]'/>
          </div>

          <div>
            <button onClick={toggleMenu} className='block  text-[#65E4A3] hover:text-[#65E4A3] focus:text-[#65E4A3] focus:outline-none'>
              <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
                {isOpen ? (
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M4.71 5.29L3.29 6.71L8.59 12L3.29 17.29L4.71 18.71L10 13.41L15.29 18.71L16.71 17.29L11.41 12L16.71 6.71L15.29 5.29L10 10.59L4.71 5.29Z'
                  />
                ) : (
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>


        {/* dropdown menu */}
          <ul className={`md:flex flex-col gap-5 justify-center md:items-center ${isOpen ? 'block' : 'hidden'} md:mt-0`}>
            <li className=' text-lg my-4 text-center hover:underline cursor-pointer text-[#65E4A3] hover:scale-110 transition-all'>
                About
            </li>

            <li className=''>
            <Link to='/login'><li><button className='px-10 py-2 rounded-r-full rounded-l-full font-semibold border-2 bg-[#65E4A3] border-[#65E4A3] hover:bg-[#0A2640] hover:text-[#65E4A3] hover:scale-110 transition-all'>Log in</button></li></Link>
            </li>
          </ul>
      </nav>
    </header>
  )
}

export default Navbar