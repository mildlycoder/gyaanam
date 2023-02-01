import React,{useState} from 'react'
import {FormField, Loader, Card} from '../components/page components/index'
import {FiFeather} from 'react-icons/fi'
import {AiOutlineEye} from 'react-icons/ai'
import {BiSun} from 'react-icons/bi'

const Home = () => {
    const [loading, setLoading] = useState(false)
    const [allposts, setAllPosts] = useState(null)
  
    const [searchText, setSearchText] = useState('ifdsh')
    return (
    <main className=''>
        <section className=' bg-[#0A2640] py-[1rem] pb-[10rem]'>
            <article className='w-[75%] mx-auto text-neutral-100  md:text-center'>
                <h1 className='text-6xl my-[2rem]'>
                    Experience the difference with us
                </h1>
                <h2 className='text-md my-[2rem] md:w-[65%] md:mx-auto'>
                This survey is conducted by GET to know and acknowledge the students struggling with their curriculum. You are kindly requested to be a part of this survey and help GET with its campaign.
                </h2>
                <button className='bg-[#69E6A6] text-[#0A2640] text-2xl px-8 py-3 font-semibold rounded-l-full rounded-r-full'>
                    Take survey
                </button>
            </article>
        </section>

        <section>
            <div className='mt-[-6rem] flex justify-center'>
                <img src='/assets/hero-desktop.png' className='hidden md:block'/>
                <img src='/assets/hero-mobile.png' className='block md:hidden w-[90%]'/>
            </div>

            <article className='my-[4rem] w-[90%] md:w-[60%] mx-auto mb-[7rem]'>
                <h1 className='text-gray-500 text-2xl my-10 font-thin'>Our vision</h1>
                <h2 className='text-[#0A2640] text-4xl my-10'>Connecting with students</h2>
                <p className='text-gray-500 text-xl my-3'>
                We understand that studying can be a challenging task for students, and we want to help. That's why we're conducting a survey to understand the difficulties and hardships that students face when it comes to their studies.
                </p>
                <p className='text-gray-500 text-xl my-6'>
                By participating in this survey, you'll be helping us improve our platform to better serve you and other students like you
                </p>
            </article>
        </section>

        <section className='bg-[#0A2640] py-[2rem] '>
            <article className='my-[4rem] w-[90%] md:w-[60%] mx-auto text-neutral-100'>
                <h1 className='text-2xl my-10 font-thin'>Our values</h1>
                <h2 className='text-4xl my-10'>Why Gyaanam Educare Tutorials?</h2>
                <h3 className='text-xl my-3'>Be a part of this survey and help us provide better education for all.</h3>
            </article>
            <section className='w-[90%] md:w-[60%] mx-auto flex flex-col gap-12'>
                <article className='flex gap-4'>
                    <div className='w-[100%] flex-grow'>
                    <img src='/assets/value-1.png'/>
                    </div>
                    <article className='font-thin'>
                        <h1 className='text-[#69E6A6] text-2xl md:text-4xl'>Accessible to all</h1>
                        <h2 className='text-neutral-100 my-3 text-lg md:text-xl'>Gyaanam Educare Tutorials learning system is designed to make learning easy and accessible for all students.</h2>
                    </article>
                </article>
                <article className='flex gap-4'>
                    <div className='w-[100%] flex-grow'>
                    <img src='/assets/value-2.png'/>
                    </div>
                    <article className='font-thin'>
                        <h1 className='text-[#69E6A6] text-2xl md:text-4xl'>Student-friendly</h1>
                        <h2 className='text-neutral-100 my-3 text-lg md:text-xl'>We have a dedicated team of educators who are constantly working to improve our platform and make it more student-friendly.</h2>
                    </article>
                </article>
                <article className='flex gap-4'>
                    <div className='w-[100%] flex-grow'>
                    <img src='/assets/value-3.png'/>
                    </div>
                    <article className='font-thin'>
                        <h1 className='text-[#69E6A6] text-2xl md:text-4xl'>Better support</h1>
                        <h2 className='text-neutral-100 my-3 text-lg md:text-xl'>You will be playing a vital role in helping us understand the challenges that students face and how we can better support you.</h2>
                    </article>
                </article>
            </section>
        </section>

        <section className='md:p-[8rem] pb-[3rem]'>
            <section className='w-[90%] md:w-[75%] mx-auto flex flex-col md:flex-row justify-between gap-5'>
                <article>
                    <h1 className='text-5xl my-8'>Every student's study companion</h1>
                    <p className='bg-[#0A2640] text-neutral-100 p-3 w-[90%] text-lg rounded-md flex items-center gap-3'><FiFeather/>understanding the problem</p>
                    <p className=' p-3 w-[90%] text-lg rounded-md flex items-center gap-3'><AiOutlineEye/>understanding the problem</p>
                    <p className=' p-3 w-[90%] text-lg rounded-md flex items-center gap-3'><BiSun/>understanding the problem</p>
                </article>
                <img src='/assets/hero-2.png' className='w-[90%]'/>
            </section>
        </section>

        <section className='md:p-[8rem]'>
            <article className='md:w-[75%] mx-auto bg-cta-pattern bg-[#0A2640] p-[4rem] text-center md:rounded-md'>
                <h1 className='text-4xl my-5 text-neutral-100 font-thin'>Take survey now!</h1>
                <button className='bg-[#69E6A6] text-[#0A2640] text-2xl px-8 py-3 font-semibold rounded-l-full rounded-r-full'>
                    Start Now
                </button>
            </article>
        </section>
    </main>
  )
}

export default Home