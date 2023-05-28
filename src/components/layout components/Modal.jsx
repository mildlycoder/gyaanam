import React, {useState} from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import Airtable from 'airtable'

const base = new Airtable({apiKey: import.meta.env.VITE_API_KEY}).base('apphpL7lHo7AHeRV9')

const Modal = () => {
  const [modal, setModal] = useState(true)
  let navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/register')
    setModal(false)
  }

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (email) {
        base('survey').create([
          {
            fields: {
              email: email,
            },
          },
        ], function(err, records) {
          if (err) {
            console.error(err);
            return;
          }
          records.forEach(function (record) {
            console.log(record.getId());
            console.log(email);
          });
          
          toast('Email successfully submitted');
        });
      } else {
        setError('*please enter your email');
      }
  }    

  return (
    <section className={modal ? 'h-[100vh] backdrop-blur-sm  w-[100%] z-20 fixed' : 'hidden'}>
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

        <section className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <section>
            <img src="/assets/modal.jpeg" alt="" className='w-[100%] hidden md:block'/>
          </section>

          <section className='flex flex-col items-center justify-center'>
          <h1 className='text-xl my-5 text-neutral-100 font-thin'>Sign up for our newsletter and be part of our education society</h1>
            <form onSubmit={handleSubmit}>
              <div className='flex justify-center items-center'>
                <input
                  type='email'
                  className='border-2 border-[#69E6A6] px-4 text-[#0A2640] text-sm py-1 rounded-l-full focus:outline-none focus:ring-[#69E6A6] focus:border-[#69E6A6]'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  required
                />
                <button
                  type='submit'
                  className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] text-sm px-2 md:px-4 py-1  font-semibold rounded-r-full'
                >
                  Sign Up
                </button>
              </div>
            </form>
            {error && <p className='text-red-500'>{error}</p>}
          </section>
        </section>
      </section>
    </section>

  )
}

export default Modal