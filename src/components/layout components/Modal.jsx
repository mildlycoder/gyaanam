import React, {useState} from 'react'
import { Link, useNavigate  } from 'react-router-dom'

const Modal = () => {
  const [modal, setModal] = useState(true)
  let navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/register')
    setModal(false)
  }

  return (
    <section className={modal ? 'h-[100vh] backdrop-blur-sm  w-[100%] z-10 fixed' : 'hidden'}>
      <section className='text-4xl w-[90%] md:w-[50%] h-[70vh] mx-auto my-[6rem] p-5 bg-[#0A2640] border-2 border-[#65E4A3] text-white rounded-md'>
        <nav className='block  text-[#65E4A3] hover:text-[#65E4A3] focus:text-[#65E4A3] focus:outline-none'>
         <button onClick={() => setModal(false)}>
          <svg className='h-6 w-6 fill-current' viewBox='0 0 24 24'>
              <path 
                fillRule='evenodd' 
                clipRule='evenodd' 
                d='M4.71 5.29L3.29 6.71L8.59 12L3.29 17.29L4.71 18.71L10 13.41L15.29 18.71L16.71 17.29L11.41 12L16.71 6.71L15.29 5.29L10 10.59L4.71 5.29Z'
              />
          </svg>
         </button>
        </nav>

        <section className='flex flex-col gap-6 my-[4rem] md:my-[6rem] text-center w-[75%] mx-auto'>
          <h1 className='text-2xl md:text-3xl'>Join us today and save 20% on your yearly subscription</h1>
          <button onClick={handleNavigate} className='px-10 md:w-[40%] mx-auto py-2 rounded-r-full rounded-l-full border-2 bg-[#65E4A3] border-[#65E4A3] hover:bg-[#0A2640] text-[#0A2640] hover:text-[#65E4A3] hover:scale-110 transition-all text-xl md:text-2xl'>Enroll Now!</button>
        </section>
      </section>
    </section>
  )
}

export default Modal