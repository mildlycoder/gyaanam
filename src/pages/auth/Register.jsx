import { async } from '@firebase/util'
import React , {useState, useEffect} from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import {auth} from '../../firebase-config'
import Airtable from 'airtable'

const base = new Airtable({apiKey: import.meta.env.VITE_API_KEY}).base('apphpL7lHo7AHeRV9')

const Register = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        s_name: '',
        phone_no: '',
        school: '',
        grade: '',
        board: ''
    })

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if(currentUser?.email){
                setLoggedIn(true)
            }
            setCurrentSession(currentUser)
        })    
      }, []) 
  

    const [currentSession, setCurrentSession] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const [error, setError] = useState('')
    console.log(formValues)
    const registerUser = async (e) => {
        e.preventDefault()
        try {
            const user = await createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
            console.log(user)
            if(formValues.s_name && formValues.phone_no && formValues.school && formValues.grade && formValues.board) {
                console.log('form filed')
                base('survey').create([
                    {
                        fields : {
                            name: formValues.s_name,
                            phone_no: '+91' + formValues.phone_no,
                            school : formValues.school,
                            grade: formValues.grade,
                            board: formValues.board,
                            email: formValues.email,
                        }
                    }
                ], function(err, records) {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    records.forEach(function (record) {
                        console.log(record.getId());
                        console.log(user)
                    });
                });
            } else {
                setError('*please enter all the fields')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const logoutUser = async () => {
        await signOut(auth)
        setLoggedIn(false)
    }

  return (
    <main className='min-h-screen'>
        <form className='flex flex-col gap-5 md:w-[30%] mx-auto shadow-md px-14 py-6'>
            <div>
                <h1 className='md:text-2xl text-xl font-semibold'>Name</h1>
                <input
                type='text'
                value={formValues.s_name}
                onChange={(e) => setFormValues({...formValues, s_name:e.target.value})}
                className='border-[1px] border-black p-2 rounded-l-full rounded-r-full w-full'
                />
            </div>
            
            <div>
                <h1 className='md:text-2xl text-xl font-semibold'>Email</h1>
                <input
                type='email'
                value={formValues.email}
                onChange={(e) => setFormValues({...formValues, email:e.target.value})}
                className='border-[1px] border-black p-2 rounded-l-full rounded-r-full w-full'
                />
            </div>

            <div>
                <h1 className='md:text-2xl text-xl font-semibold'>Phone no.</h1>
                <input
                type='tel'
                value={formValues.phone_no}
                onChange={(e) => setFormValues({...formValues, phone_no:e.target.value})}
                className='border-[1px] border-black p-2 rounded-l-full rounded-r-full w-full'
                />
            </div>

            <div>
                <h1 className='md:text-2xl text-xl font-semibold'>Board</h1>
                <input
                type='text'
                value={formValues.board}
                onChange={(e) => setFormValues({...formValues, board:e.target.value})}
                className='border-[1px] border-black p-2 rounded-l-full rounded-r-full w-full'
                />
            </div>
            
            <div>
                    <h1 className='md:text-2xl text-xl font-semibold'>Grade</h1>
                    <select value={formValues.grade} onChange={(e) => setFormValues({...formValues, grade:e.target.value})} className='p-2 rounded-l-full rounded-r-full my-1 border-[1px] border-black'>
                        <option value="">choose grade</option>
                        <option value="5th">5th</option>
                        <option value="6th">6th</option>
                        <option value="7th">7th</option>
                        <option value="8th">8th</option>
                        <option value="9th">9th</option>
                        <option value="10th">10th</option>
                        <option value="11th">11th</option>
                        <option value="12th">12th</option>
                    </select>
                </div>
            
            <div>
                <h1 className='md:text-2xl text-xl font-semibold'>School</h1>
                <input
                type='text'
                value={formValues.school}
                onChange={(e) => setFormValues({...formValues, school:e.target.value})}
                className='border-[1px] border-black p-2 rounded-l-full rounded-r-full w-full'
                />
            </div>

            <div>
                <h2 className='md:text-2xl text-xl font-semibold'>Password</h2>
                <input
                type='password'
                value={formValues.password}
                onChange={(e) => setFormValues({...formValues, password:e.target.value})}
                className='border-[1px] border-black p-2 rounded-l-full rounded-r-full w-full'
                />
            </div>
            
            

            <button 
            onClick={registerUser}
            className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] mx-auto py-2 rounded-l-full rounded-r-full md:w-[55%] w-[90%] font-semibold'
            >
                Register
            </button>
            {
                (loggedIn)&&
                <div className='flex flex-col gap-5'>
                <h1>
                    {currentSession?.email} logged in 
                </h1>
                <button 
                onClick={logoutUser}
                className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] mx-auto py-2 rounded-l-full rounded-r-full md:w-[55%] w-[90%] font-semibold'
                >
                    log out
                </button>
                </div>
            }
        </form>
    </main>
  )
}

export default Register