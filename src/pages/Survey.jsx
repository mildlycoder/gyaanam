import React, {useState, useEffect} from 'react'
import Airtable from 'airtable'
import { useNavigate } from "react-router-dom"
import { BiMessageAltError } from 'react-icons/bi'
import {AiOutlineArrowRight} from 'react-icons/ai'

const base = new Airtable({apiKey: import.meta.env.VITE_API_KEY}).base('apphpL7lHo7AHeRV9')

const Survey = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1)
    const [code, setCode] = useState("")
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
    const [error, setError] = useState("")
    console.log(user)
    const handleSubmit = async (e) => {
        console.log('clicked')
        e.preventDefault()
        if(user.satisfaction && user.field && user.troublesome_sub && user.help_taken && user.exam && user.prep_status && user.experience_alvs && user.views && user.views && user.survey_partner) {
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
                  setCode(record.getId());
                });
              });
              setStep(step+1)
        } else {
            setError('*please enter all the fields')
        }
    }

    const checkPersonalInfo = (e) => {
        e.preventDefault()
        if(user.s_name && user.phone_no && (user.phone_no.length === 10) && user.email && user.email.includes('@')){
            setStep(step + 1)
        } else {
            setError("*enter personal information correctly")
        }
    }
  return (
    <main className='md:p-[5rem] p-[2rem]'>
        <form className='shadow-md rounded-lg md:w-[60%] mx-auto flex flex-col gap-5 md:p-16 p-8'>
            {
                (step === 1) &&
                <>
                <div>
                    <h1 className='md:text-2xl text-xl font-semibold'>Your name <span className='font-normal leading-10'>(नाम)</span></h1>
                    <input 
                    type='text'
                    className='border-2 w-full border-black p-2 rounded-r-full rounded-l-full'
                    value={user.s_name}
                    onChange={(e) => setUser({...user, 's_name':e.target.value})}
                    />
                </div>
                <div>
                    <h1 className='md:text-2xl text-xl font-semibold'>Email <span className='font-normal leading-10'>(ईमेल)</span></h1>
                    <input 
                    type='email'
                    className='border-2 border-gray-500 p-2 w-full rounded-r-full rounded-l-full'
                    value={user.email}
                    onChange={(e) => setUser({...user, 'email':e.target.value})}
                    />
                </div>
                <div>
                    <h1 className='md:text-2xl text-xl font-semibold'>Phone no <span className='font-normal leading-10'>(फोन नंबर)</span></h1>
                    <input 
                    type='tel'
                    className='border-2 border-gray-500 p-2 w-full rounded-r-full rounded-l-full'
                    value={user.phone_no}
                    onChange={(e) => setUser({...user, 'phone_no':e.target.value})}
                    />
                </div>
                <h1 className='text-center text-md font-thin text-red-600'> {error} </h1>
                <button onClick={checkPersonalInfo} className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] flex items-center justify-center mx-auto py-2 rounded-l-full rounded-r-full w-[30%]'>
                    next<AiOutlineArrowRight/>
                </button>
                </>
            }
            {
                (step === 2)&&
                <>
                <div className=' my-5' onChange={(e)=> setUser({...user, 'field': e.target.value})}>
                    <h1 className='md:md:text-2xl text-xl tex-xl font-semibold'>Field chosen <span className='font-normal leading-10'>(चुना हुआ क्षेत्र)</span></h1>
                    <div className='flex flex-col gap-4 my-3'>
                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Science'
                        name='field'
                        /><label className='md:md:text-xl text-lg font-semibold'>Science <span className='font-normal leading-10'>(विज्ञान)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Arts'
                        name='field'
                        /><label className='md:md:text-xl text-lg font-semibold'>Arts <span className='font-normal leading-10'>(कला)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Commerce'
                        name='t-sub'
                        /><label className='md:md:text-xl text-lg  font-semibold'>Commerce <span className='font-normal leading-10'>(व्यापार)</span></label>
                        </div>
                    </div>
                </div>

                <div className=' my-5' onChange={(e)=> setUser({...user, 'satisfaction': e.target.value})}>
                    <h1 className='md:text-2xl text-xl font-semibold'>How satisfied are you with your studies? <span className='font-normal leading-10'>(आप अपनी पढ़ाई से कितने संतुष्ट हैं?)</span></h1>
                    <div className='flex flex-col gap-4 my-3'>
                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Higly satisfied'
                        name='satisfaction'
                        /><label className='md:text-xl text-lg font-semibold'>Higly satisfied <span className='font-normal leading-10'>(अत्यधिक संतुष्ट)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='satisfied'
                        name='satisfaction'
                        /><label className='md:text-xl text-lg font-semibold'>Satisfied <span className='font-normal leading-10'>(संतुष्ट)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='not so satisfied'
                        name='satisfaction'
                        /><label className='md:text-xl text-lg font-semibold'>not so satisfied <span className='font-normal leading-10'>(इतना संतुष्ट नहीं)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='not at all satisfied'
                        name='satisfaction'
                        /><label className='md:text-xl text-lg font-semibold'>not at all satisfied <span className='font-normal leading-10'>(बिल्कुल संतुष्ट नहीं)</span></label>
                        </div>
                    </div>
                </div>

                <div className=' my-5' onChange={(e)=> setUser({...user, 'troublesome_sub': e.target.value})}>
                    <h1 className='md:text-2xl text-xl font-semibold'>What subject seems most toublesome to you? <span className='font-normal leading-10'>(कौन सा विषय आपको सबसे अधिक कठिन लगता है?)</span></h1>
                    <div className='flex flex-col gap-4 my-3'>
                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Maths'
                        name='t-sub'
                        /><label className='md:text-xl text-lg font-semibold'>Maths <span className='font-normal leading-10'>(गणित)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Physics'
                        name='t-sub'
                        /><label className='md:text-xl text-lg font-semibold'>Physics <span className='font-normal leading-10'>(भौतिक विज्ञान)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Chemistry'
                        name='t-sub'
                        /><label className='md:text-xl text-lg font-semibold'>Chemistry <span className='font-normal leading-10'>(रसायन विज्ञान)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Biology'
                        name='t-sub'
                        /><label className='md:text-xl text-lg font-semibold'>Biology <span className='font-normal leading-10'>(जीवविज्ञान)</span></label>
                        </div>
                    </div>
                </div>
                <div className=' my-5' onChange={(e)=> setUser({...user, 'help_taken': e.target.value})}>
                    <h1 className='md:text-2xl text-xl font-semibold'>Have you looked out for help the subject regarding subject that is tough for you? <span className='font-normal leading-10'>(क्या आपने उस विषय के बारे में मदद मांगी है जो आपके लिए कठिन है?)</span></h1>
                    <div className='flex flex-col gap-4 my-3'>
                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Yes'
                        name='help'
                        /><label className='md:text-xl text-lg font-semibold'>yes <span className='font-normal leading-10'>(हाँ)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='No'
                        name='help'
                        /><label className='md:text-xl text-lg font-semibold'>No <span className='font-normal leading-10'>(नहीं)</span></label>
                        </div>
                    </div>
                </div>
                <div className=' my-5' onChange={(e)=> setUser({...user, 'exam': e.target.value})}>
                    <h1 className='md:text-2xl text-xl font-semibold'>What entrance exam are you preparing for? <span className='font-normal leading-10'>(आप किस प्रवेश परीक्षा की तैयारी कर रहे हैं?)</span></h1>
                    <div className='flex flex-col gap-4 my-3'>
                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='NEET'
                        name='exam'
                        /><label className='md:text-xl text-lg font-semibold'>NEET</label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='MH-CET'
                        name='exam'
                        /><label className='md:text-xl text-lg font-semibold'>MH-CET</label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='JEE'
                        name='exam'
                        /><label className='md:text-xl text-lg font-semibold'>JEE</label>
                        </div>
                    </div>
                </div>
                <button  disabled={!(user.exam && user.help_taken && user.troublesome_sub && user.satisfaction && user.field)} onClick={()=> setStep(step + 1)} className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] flex items-center justify-center mx-auto py-2 rounded-l-full rounded-r-full w-[30%]'>
                    next<AiOutlineArrowRight/>
                </button>
                </>
            } 
           
            {
                (step === 3) &&
                <>
                <div className=' my-5' onChange={(e)=> setUser({...user, 'prep_status': e.target.value})}>
                    <h1 className='md:text-2xl text-xl font-semibold'>So far how is your preparation for upcoming examination? <span className='font-normal leading-10'>(अब तक आपकी आगामी परीक्षा की तैयारी कैसी है?)</span></h1>
                    <div className='flex flex-col gap-4 my-3'>
                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Excellent'
                        name='prep'
                        /><label className='md:text-xl text-lg font-semibold'>Excellent <span className='font-normal leading-10'>(उत्कृष्ट)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Good'
                        name='prep'
                        /><label className='md:text-xl text-lg font-semibold'>Good <span className='font-normal leading-10'>(अच्छा)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Average'
                        name='prep'
                        /><label className='md:text-xl text-lg font-semibold'>Average <span className='font-normal leading-10'>(सामान्य)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Below average'
                        name='prep'
                        /><label className='md:text-xl text-lg font-semibold'>Below average <span className='font-normal leading-10'>((सामान्य से नीचे))</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Poor'
                        name='prep'
                        /><label className='md:text-xl text-lg font-semibold'>Poor <span className='font-normal leading-10'>(खराब)</span></label>
                        </div>
                    </div>
                </div>

                <div className=' my-5' onChange={(e)=> setUser({...user, 'experience_alvs': e.target.value})}>
                    <h1 className='md:text-2xl text-xl font-semibold'>Have you experience AVLS(audio visual learning system)? <span className='font-normal leading-10'>(क्या आपने A.V.L.S (ऑडियो विजुअल लर्निंग सिस्टम) का अनुभव किया है?)</span></h1>
                    <div className='flex flex-col gap-4 my-3'>
                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Yes'
                        name='experience'
                        /><label className='md:text-xl text-lg font-semibold'>Yes <span className='font-normal leading-10'>(हाँ)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='No'
                        name='experience'
                        /><label className='md:text-xl text-lg font-semibold'>No <span className='font-normal leading-10'>(नहीं)</span></label>
                        </div>
                    </div>
                </div>

                <div className=' my-5' onChange={(e)=> setUser({...user, 'views': e.target.value})}>
                    <h1 className='md:text-2xl text-xl font-semibold'>What are your views on audio visual learning? Will it make a positive difference in your learning method? <span className='font-normal leading-10'>(ऑडियो विजुअल लर्निंग पर आपके क्या विचार हैं? क्या इससे आपके सीखने के तरीके में कोई सकारात्मक बदलाव आएगा?)</span></h1>
                    <div className='flex flex-col gap-4 my-3'>
                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='it will make better'
                        name='views'
                        /><label className='md:text-xl text-lg font-semibold'>It will make learning and remembering better <span className='font-normal leading-10'>(यह सीखने और याद रखने को बेहतर बनाएगा)</span></label>
                        </div>

                        <div className='flex gap-3'>
                        <input
                        type='radio' 
                        value='Not helpful'
                        name='views'
                        /><label className='md:text-xl text-lg font-semibold'>It will not be so helpful <span className='font-normal leading-10'>(यह इतना मददगार नहीं होगा)</span></label>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='md:text-2xl text-xl font-semibold'>What are your opinions as a student, that would lead to betterment in the learning pattern? <span className='font-normal leading-10'>(एक छात्र के रूप में आपकी क्या राय है, जिससे सीखने के पैटर्न में सुधार होगा?)</span></h1>
                    <textarea
                    type='text'
                    className='border-2 my-5 w-full border-gray-500 p-4 rounded-md'
                    value={user.opinions}
                    onChange={(e) => setUser({...user, 'opinions':e.target.value})}
                    />
                </div>

                <div>
                    <h1 className='md:text-2xl text-xl font-semibold'>Survey partner</h1>
                    <select value={user.survey_partner} onChange={(e) => setUser({...user, 'survey_partner':e.target.value})} className='w-[55%] p-2 rounded-l-full rounded-r-full my-4 border-2 border-gray-500'>
                        <option value="Sanskar">Sanskar</option>
                        <option value="Pranav">Pranav</option>
                    </select>
                </div>
                <h1 className='text-center text-md font-thin text-red-600'> {error} </h1>
                <button onClick={handleSubmit} className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] md:text-2xl text-xl px-8 py-3 font-semibold rounded-l-full rounded-r-full'>
                    Submit
                </button>
                </>
            }
            {
               (step === 4)&& 
                <div className='min-h-screen flex flex-col gap-4 items-center justify-center'>
                    <h1 className='text-3xl font-semibold'>Thank you for filling our survey!</h1>
                    <h2 className='md:text-2xl text-xl font-semibold'> your coupon code is {code}</h2>
                </div>
            }
        </form>
    </main>
  )
}

export default Survey