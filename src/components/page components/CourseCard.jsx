import React, { useEffect, useState } from 'react'
import sanityClient from '../../../services/client'
import imageUrlBuilder from '@sanity/image-url'
import { Link } from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BiTime} from 'react-icons/bi'
import {SlGraduation} from 'react-icons/sl'

const builder = imageUrlBuilder(sanityClient)

const Card = ({course}) => {
  const [courseImg, setCourseImg] = useState('')
  
  function urlFor(source) {
    return builder.image(source)
  }
  return (
    <article className='flex flex-col w-[90%] md:w-[90%] mx-auto shadow-[2px_2px_2px_2px_rgba(0,0,0,0.10)] md:shadow-[5px_5px_5px_5px_rgba(0,0,0,0.10)] rounded-md p-5 md:p-10'>
      <div className='flex ml-[-2rem] mt-[-1.5rem] md:ml-[-4rem] md:mt-[-3rem]'>
        <div className='basis-1/12 h-[2.3rem] skew-y-12 mr-[-0.70rem] mt-[0.8rem] md:mr-[-1.5rem] md:mt-[.9rem] -z-10 bg-red-600'></div>
        <h1 className=' text-sm md:text-md my-2.5 bg-red-500 p-2 text-white'>{course.course}</h1>
      </div>
      
      <div className='h-[50%] overflow-y-hidden'>
        <img src={urlFor(course.courseImg).url()} className='w-[85%] md:hover:scale-90 transition-all rounded-sm'/>
      </div>
      
      <div className='mt-[1.5rem]'>
        <h2 className='text-lg hidden md:block md:text-xl text-[#777777]'>{course.meta}</h2>
        <h2 className='text-md hidden md:flex items-center gap-2 md:text-xl text-[#777777] my-2.5'><BiTime/>12 months</h2>
        <h2 className='text-md hidden md:flex items-start gap-2 md:text-xl text-[#777777] my-2.5'><SlGraduation className='basis-1/6 mt-2'/>Special offer for 1st 10 ten students</h2>
      </div>
      <Link to='/'><span className='underline underline-offset-8 font-semibold flex items-center gap-2 hover:scale-110 transition-all md:hover:translate-x-8 my-2.5 text-md md:text-lg'>Explore<AiOutlineArrowRight/></span></Link>
    </article>
  )
}

export default Card