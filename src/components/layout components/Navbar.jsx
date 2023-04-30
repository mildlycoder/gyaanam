import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {IoIosArrowForward} from 'react-icons/io'
import {MdKeyboardArrowDown} from 'react-icons/md'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isBreadcrumbOpen, setIsBreadcrumbOpen] = useState(false)
  const [isCourseOpen, setIsCourseOpen] = useState(false)

  const icse = [
    'Class 7',
    'Class 8',
    'Class 9',
    'Class 10',
    'Class 11',
    'Class 12'
  ]

  const cbse = [
    'Class 7',
    'Class 8',
    'Class 9',
    'Class 10',
    'Class 11',
    'Class 12'
  ]

  const maharastra = [
    'Class 7',
    'Class 8',
    'Class 9',
    'Class 10',
    'Class 11',
    'Class 12'
  ]

  const competitive = [
    'NEET 11th',
    'NEET 12th',
    'JEE 11th',
    'JEE 12th'
  ]

  const [course, setCourse] = useState('icse')



  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleBreadcrumb = (type) => {
    setIsBreadcrumbOpen(!isBreadcrumbOpen)
  }



  return (
    <header className='bg-[#0A2640]'>
      <nav className='hidden md:flex items-center md:mx-[6.25rem] md:py-[1rem] mx-[1.25rem] py-5'>
        <div className='flex items-center basis-1/6'>
          <img src='/assets/GET-logo-8.png' className='w-[100%]'/>
        </div>

        <ul className='flex items-baseline gap-5 w-full mx-8'>
          <div className='relative'>
            <li className=' text-lg flex flex-col hover:underline cursor-pointer text-[#65E4A3] hover:scale-110 transition-all'>
                <button onMouseEnter={toggleBreadcrumb}  className='flex items-center'>Courses<MdKeyboardArrowDown size={'2rem'}/></button>
            </li>
            {
                isBreadcrumbOpen && 
                <div onMouseLeave={toggleBreadcrumb} className='absolute w-max z-20 top-11 rounded text-[#65E4A3] text-lg flex'>
                  <ul className='bg-[#0A2640] rounded-l-md flex flex-col py-5'>
                    <li id='icse' className='cursor-pointer px-5 py-1 hover:bg-[#12416c] hover:text-xl transition-all flex items-center' onMouseEnter={() => {
                      setCourse('icse')
                      setIsCourseOpen(true)
                    }}
                    onMouseLeave={() => {setIsCourseOpen(false)}}
                    >ICSE<IoIosArrowForward/></li>
                    <li id='cbse' className='cursor-pointer px-5 py-1 hover:bg-[#12416c] hover:text-xl transition-all flex items-center' onMouseEnter={() => {
                      setCourse('cbse')
                      setIsCourseOpen(true)
                    }}
                    onMouseLeave={() => {setIsCourseOpen(false)}}
                    >CBSE<IoIosArrowForward/></li>
                    <li id='maharastra' className='cursor-pointer px-5 py-1 hover:bg-[#12416c] hover:text-xl transition-all flex items-center' onMouseEnter={() => {
                      setCourse('maharastra')
                      setIsCourseOpen(true)
                    }}
                    onMouseLeave={() => {setIsCourseOpen(false)}}
                    >Maharastra<IoIosArrowForward/></li>
                    <li id='competitive' className='cursor-pointer px-5 py-1 hover:bg-[#12416c] hover:text-xl transition-all flex items-center' onMouseEnter={() => {
                      setCourse('competitive')
                      setIsCourseOpen(true)
                    }}
                    onMouseLeave={() => {setIsCourseOpen(false)}}
                    >NEET/JEE<IoIosArrowForward/></li>
                  </ul>

                  <ul className=''>
                    {
                      isCourseOpen &&
                      <ul className='flex flex-col bg-teal-700 p-5 rounded-r-md'>
                        {
                          course === 'icse' && 
                          <div>
                            <h1 className='font-semibold'>courses for ICSE</h1>
                            {
                              icse.map((item, index) => {
                                return <li key={index} className='hover:underline cursor-pointer'>{item}</li>
                              })
                            }
                          </div>
                          
                        }
                        {
                          course === 'cbse' && 
                          <div>
                          <h1 className='font-semibold'>courses for CBSE</h1>
                          {
                            icse.map((item, index) => {
                              return <li key={index} className='hover:underline cursor-pointer'>{item}</li>
                            })
                          }
                          </div>
                        }
                        {
                          course === 'maharastra' && 
                          <div>
                          <h1 className='font-semibold'>courses for Maharastra board</h1>
                          {
                            icse.map((item, index) => {
                              return <li key={index} className='hover:underline cursor-pointer'>{item}</li>
                            })
                          }
                          </div>
                        }
                        {
                          course === 'competitive' && 
                          <div>
                          <h1 className='font-semibold'>courses for NEET/JEE</h1>
                          {
                            icse.map((item, index) => {
                              return <li key={index} className='hover:underline cursor-pointer'>{item}</li>
                            })
                          }
                        </div>
                        }
                      </ul>
                    }
                  </ul>
                </div>
              }
          </div>

          <li className=' text-lg hover:underline cursor-pointer text-[#65E4A3] hover:scale-110 transition-all'>
              About us
          </li>

          <li className=' text-lg hover:underline cursor-pointer text-[#65E4A3] hover:scale-110 transition-all'>
              Test series
          </li>

          <li className=' text-lg hover:underline cursor-pointer text-[#65E4A3] hover:scale-110 transition-all'>
              Insights
          </li>
          
          <li className='ml-auto flex gap-5'>   
              <Link to='/register'><button className='px-10 py-2 rounded-r-full rounded-l-full font-semibold border-2  text-white hover:scale-110 transition-all'>Register</button></Link>
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
                About us
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