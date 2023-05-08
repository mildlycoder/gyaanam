import React,{useEffect, useState} from 'react'
import {Loader, Card, TeamCard, CustomButtonGroup, TestimonialCard} from '../components/page components/index'
import {FiFeather} from 'react-icons/fi'
import {AiOutlineEye} from 'react-icons/ai'
import {BiSun} from 'react-icons/bi'
import {RiFocus2Fill} from 'react-icons/ri'
import {TbBooks} from 'react-icons/tb'
import {MdOutlineGroup} from 'react-icons/md'
import {BsEye} from 'react-icons/bs'
import {GiBookStorm} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import sanityClient  from '../../services/client'
import { testimonials } from '../../constants/testimonials'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = () => {
    const [courses, setCourses] = useState([])
    const [team, setTeam] = useState([])
    useEffect(()=>{
        const fetchCoures = async() => {
            try {
                const coursesQuery =await  sanityClient.fetch(`*[_type == "course"]`)
                setCourses(coursesQuery)
            } catch (error) {
                console.log(error)
            }
        }

        const fetchTeam = async() => {
            try {
                const teamQuery =await  sanityClient.fetch(`*[_type == "team"]`)
                setTeam(teamQuery)
            } catch (error) {
                console.log(error)
            }
        }
        

        fetchCoures()
        fetchTeam()
    },[])

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const responsiveTestimonial = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
    <main className=''>
        
        {/* hero section */}
        <section className='md:grid md:grid-cols-2 md:gap-28 gap-8 grid-cols-1 md:pb-[6rem]'>

        <section className='col-span-2 z-[-3]'>
            <Carousel
            infinite={true}
            transitionDuration={500}
            autoPlay={true}
            removeArrowOnDeviceType={["tablet", "mobile","superLargeDesktop","desktop"]}
            autoPlaySpeed={3000}
            ssr={true}
            showDots={true}
            className='rounded-md'
            responsive={responsive}>
                <img src='/assets/banner-1.jpg'/>
                <img src='/assets/banner-2.jpg'/>
                <img src='/assets/banner-3.jpg'/>
            </Carousel>
            </section>
        </section>

        <section className='grid md:grid-cols-2 md:gap-28 gap-8 grid-cols-1 md:px-[6.25rem] px-[1.5rem] md:pt-[3.5rem] md:pb-[6rem] py-14'>
            <section>
                <h2 className='text-4xl md:text-5xl font-semibold leading-tight flex flex-col'>
                    <span>Investing in education:</span>
                    <span>The Key to a Better Future</span>
                </h2>
            </section>

            <section className='flex flex-col gap-6'>
                <p className='w-[90%] md:w-[95%] text-xl'>
                Join us today and experience the power of a world-class education. Let us help you unlock your potential and achieve your academic goals.
                </p>

                <Link to='/register'><button className='px-11 py-3 rounded-r-full rounded-l-full font-semibold border-2 border-[#0A2640] hover:bg-[#0A2640] hover:text-white hover:scale-110 transition-all'>Enroll Now!</button></Link>
            </section>
        </section>

        {/* courses section */}
        <section>
            <div className='md:px-[5.25rem] md:py-[3.5rem] px-[1rem] py-6 text-center flex flex-col gap-2'>
                <h2 className='text-4xl md:text-5xl leading-tight'>Courses we offer</h2>
            </div>

            <section className='grid grid-cols-2 md:grid-cols-4 gap-6 md:px-[4rem] md:pb-[6rem] px-[1rem] pb-16'>
                {
                    courses.map((course, index) => {
                        return(
                            <Card key={index} course={course}/>
                        )
                    })
                }
            </section>
        </section>

        {/* about gyaanam */}
        <section className='bg-[#0A2640] text-neutral-50 grid md:grid-cols-2 grid-cols-1 md:px-[5.25rem] md:p-[6rem] px-[1rem] py-10'>
            <section>
                <img src="/assets/grp-3.svg" className='h-[90%] mx-auto hidden md:block' alt="" />
            </section>
            <section className='md:col-start-2 flex flex-col  px-[1rem] py-5 gap-2'>
                <h2 className='text-4xl md:text-5xl'>Why Gyaanam</h2>
                <p className='text-lg md:text-xl md:w-[80%] leading-relaxed my-4'>Our platform is designed to be student-friendly, with an easy-to-navigate interface and a user-friendly experience. Our expert educators and tutors provide interactive and engaging sessions that make learning fun and effective. With our comprehensive study materials, personalized assessments, and individualized coaching, we strive to ensure that every student receives the support they need to succeed.</p>
            </section>
        </section>



        {/* team */}
        {/* <section className='md:px-[5.25rem] md:p-[6rem]  px-[1.5rem] py-5'>
            <div className='text-left w-[90%] md:w-[75%] mx-auto flex flex-col gap-2 my-6'>
                <h1 className='text-lg md:text-xl'>Our team</h1>
                <h2 className='text-4xl md:text-5xl'>The people behind the work</h2>
                <p className='text-lg md:text-xl leading-relaxed text-[#777777] my-4'>
                Our team is dedicated to bring quality education to a granular level. We are working towards a goal of bringing a revolution in the EdTech sector. We are post-graduate educators and teachers with experience over five years in the running ed-industry.
                </p>
            </div>


            <section className='grid md:grid-cols-4 py-5 grid-cols-1 gap-6 md:px-[4rem] md:pt-[6rem] px-[1rem]'>
                {
                    team.map((member, index) => {
                        return(
                            <TeamCard key={index} member={member}/>
                        )
                    })
                }
            </section>
        </section> */}
        
        {/* testimonial section */}
        <section className='bg-[#0A2640] text-neutral-50 md:px-[5.25rem] md:p-[6rem] px-[1rem] py-10 text-center'>
                <h1 className='text-3xl mx-auto text-neutral-100 font-thin'>Hear what our students have to say about us</h1>
                <div className='flex flex-col-reverse gap-6'>
                <Carousel
                    additionalTransfrom={0}
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className="w-[97%] mx-auto pt-32 pb-20"
                    containerClass="container-padding-bottom"
                    arrows={false} 
                    customButtonGroup={<CustomButtonGroup />}
                    responsive={responsiveTestimonial}
                    slidesToSlide={1}
                    swipeable
                >
                    {
                        testimonials.map((testimonial, index) => {
                            return(
                                <TestimonialCard key={index} testimonial={testimonial}/>
                            )
                        })
                    }
                </Carousel>
                </div>
        </section>

        {/* survey cta */}
        <section className='md:px-[5.25rem]  px-[1.5rem] my-[5rem]'>
            
            <section className='md:px-[8rem] pb-[4rem] pt-[rem]'>
                <article className='md:w-[75%] mx-auto bg-cta-pattern bg-[#0A2640] p-[4rem] text-center md:rounded-md rounded-md'>
                    <h1 className='text-3xl my-5 text-neutral-100 font-thin'>Take survey now!</h1>
                    <Link to='/survey'>
                    <button className='bg-[#69E6A6] border-2 border-[#69E6A6] hover:bg-transparent hover:text-[#69E6A6] transition-all text-[#0A2640] text-lg px-8 py-2 my-3 font-semibold rounded-l-full rounded-r-full'>
                        Start Now
                    </button>
                    </Link>
                </article>
            </section>
        </section>


    </main>
  )
}

export default Home