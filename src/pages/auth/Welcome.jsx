import React, {useEffect, useState} from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import {auth} from '../../firebase-config'

const Welcome = () => {
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if(currentUser?.email){
                setLoggedIn(true)
            }
            setCurrentSession(currentUser)
            console.log(currentUser)
        })    
      }, []) 
  

    const [currentSession, setCurrentSession] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)

  return (
        <div className='flex flex-col items-center justify-center gap-5  min-h-[80vh]  p-10'>
        <h1 className='font-semibold text-3xl'>
            Thank you for registering with us.
        </h1>
        <h1 className='font-semibold text-3xl'>
            You're logged in as {currentSession?.email}
        </h1>
        </div>
  )
}

export default Welcome