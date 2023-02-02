import React, {useState} from 'react'
import uuid from 'react-uuid';
import axios from "axios";
import { toast } from "react-toastify";

const Survey = () => {
    const [user, setUser] = useState({
        'id' : '',
        'name': '',
        'phone no': '',
        'email': '',
        'satisfaction': '',
        'field': '',
        'toublesome subject': '',
        'help': '',
        'exam': '',
        'prep': '',
        'experience ALVS': '',
        'views': '',
        'opinions': ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('clicked')
        if(user.name && user['phone no'] && user.email ) {
            console.log('clicked')
            setUser({...user,'id': uuid()})
    
            axios.post('https://sheet.best/api/sheets/803f6018-7e1f-401d-87a8-1f880b371430',user).then((response)=>{
              console.log(response);
              setUser({
                'id' : '',
                'name': '',
                'phone no': '',
                'email': '',
                'satisfaction': '',
                'field': '',
                'toublesome subject': '',
                'help': '',
                'exam': '',
                'prep': '',
                'experience ALVS': '',
                'views': '',
                'opinions': ''
            })
              toast.success("Form submitted successfully!");
              router.push("/");
            })
    
            // toast.error("Form submission failed!");
    
          } else{
            toast.error("Please fill all the values");
          }
    }

  return (
    <main className='md:p-[5rem] p-[2rem]'>
        <form className='shadow-md rounded-lg md:w-[60%] mx-auto flex flex-col gap-5 md:p-16 p-8'>
            <div>
                <h1 className='text-2xl font-semibold'>Your name</h1>
                <input 
                type='text'
                className='border-2 w-full border-gray-500 p-2 rounded-r-full rounded-l-full'
                value={user.name}
                onChange={(e) => setUser({...user, 'name':e.target.value})}
                />
            </div>
            <div>
                <h1 className='text-2xl font-semibold'>Email</h1>
                <input 
                type='email'
                className='border-2 border-gray-500 p-2 w-full rounded-r-full rounded-l-full'
                value={user.email}
                onChange={(e) => setUser({...user, 'email':e.target.value})}
                />
            </div>
            <div>
                <h1 className='text-2xl font-semibold'>Phone no</h1>
                <input 
                type='tel'
                className='border-2 border-gray-500 p-2 w-full rounded-r-full rounded-l-full'
                value={user['phone no']}
                onChange={(e) => setUser({...user, 'phone no':e.target.value})}
                />
            </div>

            <div className=' my-5' onChange={(e)=> setUser({...user, 'field': e.target.value})}>
                <h1 className='text-2xl font-semibold'>Field chosen</h1>
                <div className='flex flex-col gap-4 my-3'>
                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='Science'
                    name='field'
                    /><label className='text-xl font-semibold'>Science</label>
                    </div>

                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='Arts'
                    name='field'
                    /><label className='text-xl font-semibold'>Arts</label>
                    </div>

                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='Commerce'
                    name='t-sub'
                    /><label className='text-xl font-semibold'>Commerce</label>
                    </div>
                </div>
            </div>

            <div className=' my-5' onChange={(e)=> setUser({...user, 'satisfaction': e.target.value})}>
                <h1 className='text-2xl font-semibold'>How satisfied are you with your studies?</h1>
                <div className='flex flex-col gap-4 my-3'>
                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='Higly satisfied'
                    name='satisfaction'
                    /><label className='text-xl font-semibold'>Higly satisfied</label>
                    </div>

                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='satisfied'
                    name='satisfaction'
                    /><label className='text-xl font-semibold'>Satisfied</label>
                    </div>

                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='not so satisfied'
                    name='satisfaction'
                    /><label className='text-xl font-semibold'>not so satisfied</label>
                    </div>

                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='not at all satisfied'
                    name='satisfaction'
                    /><label className='text-xl font-semibold'>not at all satisfied</label>
                    </div>
                </div>
            </div>

            <div className=' my-5' onChange={(e)=> setUser({...user, 'troublesome subject': e.target.value})}>
                <h1 className='text-2xl font-semibold'>What subject seems most toublesome to you</h1>
                <div className='flex flex-col gap-4 my-3'>
                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='Maths'
                    name='t-sub'
                    /><label className='text-xl font-semibold'>Maths</label>
                    </div>

                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='Physics'
                    name='t-sub'
                    /><label className='text-xl font-semibold'>Physics</label>
                    </div>

                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='Chemistry'
                    name='t-sub'
                    /><label className='text-xl font-semibold'>Chemistry</label>
                    </div>

                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='Biology'
                    name='t-sub'
                    /><label className='text-xl font-semibold'>Biology</label>
                    </div>
                </div>
            </div>

            <div className=' my-5' onChange={(e)=> setUser({...user, 'help': e.target.value})}>
                <h1 className='text-2xl font-semibold'>Have you looked out for help the subject regarding subject that is tough for you?</h1>
                <div className='flex flex-col gap-4 my-3'>
                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='Yes'
                    name='help'
                    /><label className='text-xl font-semibold'>yes</label>
                    </div>

                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='No'
                    name='help'
                    /><label className='text-xl font-semibold'>No</label>
                    </div>
                </div>
            </div>

            <div className=' my-5' onChange={(e)=> setUser({...user, 'exam': e.target.value})}>
                <h1 className='text-2xl font-semibold'>What entrance exam are you preparing for?</h1>
                <div className='flex flex-col gap-4 my-3'>
                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='NEET'
                    name='exam'
                    /><label className='text-xl font-semibold'>NEET</label>
                    </div>

                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='MH-CET'
                    name='exam'
                    /><label className='text-xl font-semibold'>MH-CET</label>
                    </div>

                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='JEE'
                    name='exam'
                    /><label className='text-xl font-semibold'>JEE</label>
                    </div>
                </div>
            </div>

            <div className=' my-5' onChange={(e)=> setUser({...user, 'prep': e.target.value})}>
                <h1 className='text-2xl font-semibold'>So far how is your preparation for upcoming examination</h1>
                <div className='flex flex-col gap-4 my-3'>
                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='Excellent'
                    name='prep'
                    /><label className='text-xl font-semibold'>Excellent</label>
                    </div>

                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='Good'
                    name='prep'
                    /><label className='text-xl font-semibold'>Good</label>
                    </div>

                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='Average'
                    name='prep'
                    /><label className='text-xl font-semibold'>Average</label>
                    </div>

                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='Below average'
                    name='prep'
                    /><label className='text-xl font-semibold'>Below average</label>
                    </div>

                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='Poor'
                    name='prep'
                    /><label className='text-xl font-semibold'>Poor</label>
                    </div>
                </div>
            </div>

            <div className=' my-5' onChange={(e)=> setUser({...user, 'experience AVLS': e.target.value})}>
                <h1 className='text-2xl font-semibold'>Have you experience AVLS(audio visual learning system)?</h1>
                <div className='flex flex-col gap-4 my-3'>
                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='Yes'
                    name='experience'
                    /><label className='text-xl font-semibold'>Yes</label>
                    </div>

                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='No'
                    name='experience'
                    /><label className='text-xl font-semibold'>No</label>
                    </div>
                </div>
            </div>

            <div className=' my-5' onChange={(e)=> setUser({...user, 'views': e.target.value})}>
                <h1 className='text-2xl font-semibold'>What are your views on audio visual learning? Will it make a positive difference in your learning method?</h1>
                <div className='flex flex-col gap-4 my-3'>
                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='it will make better'
                    name='views'
                    /><label className='text-xl font-semibold'>It will make learning and remembering better</label>
                    </div>

                    <div className='flex gap-3'>
                    <input
                    type='radio' 
                    value='Not helpful'
                    name='views'
                    /><label className='text-xl font-semibold'>It will not be so helpful</label>
                    </div>
                </div>
            </div>

            <button onClick={handleSubmit} className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] text-2xl px-8 py-3 font-semibold rounded-l-full rounded-r-full'>
                Submit
            </button>
        </form>
    </main>
  )
}

export default Survey