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
    <article className='flex flex-col gap-3 w-[90%] py-4 mx-auto'>
      <img src={urlFor(course.courseImg).url()} className='w-[100%] md:hover:scale-105 transition-all rounded-sm'/>
      <h1 className='text-xl md:text-2xl'>{course.course}</h1>
      <h2 className='text-lg md:text-xl text-[#777777]'>{course.meta}</h2>
      <Link to='/'><span className='underline underline-offset-8 font-semibold flex items-center gap-2 hover:scale-110 transition-all hover:translate-x-8'>Explore page<AiOutlineArrowRight/></span></Link>
    </article>
  )
}

export default Card