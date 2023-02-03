import React, {useState, useEffect} from 'react'
import Airtable from 'airtable';
import { useNavigate } from "react-router-dom";

const base = new Airtable({apiKey: import.meta.env.VITE_API_KEY}).base('apphpL7lHo7AHeRV9')

const Survey = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        's_name': '',
        'phone_no': '',
        'email': '',
        'satisfaction': '',
        'field': '',
        'troublesome_sub': '',
        'help_taken': '',
        'exam': '',
        'prep_status': '',
        'experience_alvs': '',
        'views': '',
        'opinions': '',
        'survey_partner' : ''
    })

    const handleSubmit = async (e) => {
        console.log('clicked')
        e.preventDefault()
        if(user.s_name && user.phone_no && user.email && user.email.includes('@') ) {
            base('survey').create([
                {
                    fields : {
                        name: user.s_name,
                        phone_no: '+91' + user.phone_no,
                        email : user.email,
                        satisfaction: user.satisfaction,
                        field: user.field,
                        troublesome_sub: user.troublesome_sub,
                        help_taken: user.help_taken,
                        exam: user.exam,
                        prep_status: user.prep_status,
                        experience_alvs: user.experience_alvs,
                        views: user.views,
                        opinions: user.opinions,
                        partner : user.survey_partner
                    }
                }
              ], function(err, records) {
                if (err) {
                  console.error(err);
                  return;
                }
                records.forEach(function (record) {
                  console.log(record.getId());
                });
              });
              navigate("/exit");
        } else {
            alert('enter personal information correctly')
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
                value={user.s_name}
                onChange={(e) => setUser({...user, 's_name':e.target.value})}
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
                value={user.phone_no}
                onChange={(e) => setUser({...user, 'phone_no':e.target.value})}
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

            <div className=' my-5' onChange={(e)=> setUser({...user, 'troublesome_sub': e.target.value})}>
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

            <div className=' my-5' onChange={(e)=> setUser({...user, 'help_taken': e.target.value})}>
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

            <div className=' my-5' onChange={(e)=> setUser({...user, 'prep_status': e.target.value})}>
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

            <div className=' my-5' onChange={(e)=> setUser({...user, 'experience_alvs': e.target.value})}>
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

            <div>
                <h1 className='text-2xl font-semibold'>What are your opinions as a student, that would lead to betterment in the learning pattern</h1>
                <input 
                type='text'
                className='border-2 my-5 w-full border-gray-500 p-6 rounded-r-full rounded-l-full'
                value={user.opinions}
                onChange={(e) => setUser({...user, 'opinions':e.target.value})}
                />
            </div>

            <div>
                <h1 className='text-2xl font-semibold'>Survey partner</h1>
                <select value={user.partner} onChange={(e) => setUser({...user, 'partner':e.target.value})} className='w-[55%] p-2 rounded-l-full rounded-r-full my-4 border-2 border-gray-500'>
                    <option value="Sanskar">Sanskar</option>
                    <option value="Pranav">Pranav</option>
                </select>
            </div>

            <button onClick={handleSubmit} className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] text-2xl px-8 py-3 font-semibold rounded-l-full rounded-r-full'>
                Submit
            </button>
        </form>
    </main>
  )
}

export default Survey