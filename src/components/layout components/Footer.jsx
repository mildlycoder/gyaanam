import React from 'react'
import { AiFillYoutube, AiFillInstagram, AiFillTwitterCircle, AiFillFacebook } from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className='bg-[#0A2640] text-white md:items-start p-[2rem] md:px-[6.25rem]'>
        <section className=''>
          <h1 className='text-md md:text-2xl'>
            Socials
          </h1>

          <article className='py-2'>
            <ul className='flex gap-5'>
              <li>
                <a href="https://www.youtube.com/@gyaanameducaretutorials4174"><AiFillYoutube size={"3rem"} className='hover:scale-125 transition-all'/></a> YouTube
              </li>

              <li>
                <a href="https://www.instagram.com/gyaanameducaretutorials/"><AiFillInstagram size={"3rem"} className='hover:scale-125 transition-all'/></a> Instagram
              </li>

              <li>
                <a href="#"><AiFillFacebook size={"3rem"} className='hover:scale-125 transition-all'/></a> Facebook
              </li>

              <li>
                <a href="#"><AiFillTwitterCircle size={"3rem"} className='hover:scale-125 transition-all'/></a> twitter
              </li>
            </ul>
          </article>
        </section>
        <h1 className='text-center'>All rights reserved @Gyaanam2023</h1>
    </footer>
  )
}

export default Footer