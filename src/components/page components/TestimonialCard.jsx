import React, {useState} from 'react'

const TestimonialCard = (props) => {
  console.log(props.testimonial.image)
  const image = props.testimonial.image
  const alt = props.testimonial.name
  return (
    <div className='bg-white m-5 p-5 rounded-md flex flex-col gap-3 shadow-[2px_2px_2px_2px_rgba(256,256,256,0.10)] md:shadow-[5px_5px_5px_5px_rgba(256,256,256,0.10)] min-h-[24rem]'>
        <div className='w-[70%] md:w-[50%] mx-auto md:mt-[-7rem] bg-white rounded-full p-[1rem] md:shadow-[5px_5px_5px_5px_rgba(256,256,256,0.10)]'>
        <img src={image} alt={alt} className='max-h-[12rem]'/>
        <h1 className='text-[#0A2640] text-center mt-4'>{props.testimonial.name}</h1>
        </div>
        <div>
        <h2 className='text-[#0A2640]'>{props.testimonial.desc}</h2>
        </div>
    </div>
  )
}

export default TestimonialCard