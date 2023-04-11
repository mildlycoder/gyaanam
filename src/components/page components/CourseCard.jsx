import React, { useEffect, useState } from 'react'
import sanityClient from '../../../services/client'
import imageUrlBuilder from '@sanity/image-url'
import { Link } from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'

const builder = imageUrlBuilder(sanityClient)

const Card = ({course}) => {
  const [courseImg, setCourseImg] = useState('')
  
  function urlFor(source) {
    return builder.image(source)
  }
  return (
    <article className='flex flex-col w-[90%] md:w-[90%] mx-auto shadow-[2px_2px_2px_2px_rgba(0,0,0,0.10)] md:shadow-[5px_5px_5px_5px_rgba(0,0,0,0.10)] rounded-md p-5 md:p-10'>
      <img src={urlFor(course.courseImg).url()} className='w-[100%] md:hover:scale-105 transition-all rounded-sm my-auto'/>
      <h1 className='text-xl md:text-2xl my-2.5'>{course.course}</h1>
      <h2 className='text-lg hidden md:block md:text-xl text-[#777777] my-2.5'>{course.meta}</h2>
      <Link to='/'><span className='underline underline-offset-8 font-semibold flex items-center gap-2 hover:scale-110 transition-all md:hover:translate-x-8 my-2.5 text-md md:text-lg'>Explore<AiOutlineArrowRight/></span></Link>
    </article>
  )
}

export default Card