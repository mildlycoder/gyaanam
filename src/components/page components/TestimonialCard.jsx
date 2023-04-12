import React from 'react'

const TestimonialCard = (props) => {
    console.log(props.testimonial)
  return (
    <div className='bg-white m-5 p-5 rounded-md flex flex-col gap-5 shadow-[2px_2px_2px_2px_rgba(256,256,256,0.10)] md:shadow-[5px_5px_5px_5px_rgba(256,256,256,0.10)]'>
        <h2 className='text-[#0A2640]'>{props.testimonial.desc}</h2>
        <h1 className='text-[#0A2640]'>{props.testimonial.name}</h1>
    </div>
  )
}

export default TestimonialCard