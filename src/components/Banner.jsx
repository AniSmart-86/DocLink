import React from 'react'
import Img1 from '../assets/banner2-img.jpg'
import Img2 from '../assets/hero-img.jpeg'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate();
  return (
    <div className='flex bg-primary rounded-3xl px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
        {/* ====Left side==== */}
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:pl-5'>
            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium text-white'>
                <p >Get In Touch</p>
                <p className='mt-4'>With 100+ Trusted Doctors</p>
            </div>
            <button onClick={()=>{navigate("/login"); scrollTo(0,0)}} className='bg-white text-sm sm:text-base text-red-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all duration-1000 ease-in-out'>Create account</button>
        </div>

        {/* ====Right side=== */}
        <div className='relative w-1/2'>
            <img className='w-full absolute -top-10 left-0 max-w-md rounded-xl ' src={Img2} alt="" />
            <img className='w-full absolute -bottom-16 right-0 max-w-md rounded-xl' src={Img1} alt="" />
        </div>
    </div>
  )
}

export default Banner