import React, { useEffect, useState } from 'react'
import sanityClient from '../../../services/client'
import imageUrlBuilder from '@sanity/image-url'
import { Link } from 'react-router-dom'
import {AiOutlineArrowRight} from 'react-icons/ai'

const builder = imageUrlBuilder(sanityClient)

const TeamCard = ({member}) => {
  const [memberImg, setMemberImg] = useState('')
  
  function urlFor(source) {
    return builder.image(source)
  }

  //console.log(member)
  return (
    <article className='flex flex-col gap-2 py-6'>
      <img src={urlFor(member.image).url()} className='w-[100%] md:hover:scale-110 transition-all'/>
      <h1 className='text-2xl'>{member.name}</h1>
      <h2 className='text-lg text-[#777777]'>{member.position}</h2> 
    </article>
  )
}

export default TeamCard