import React from 'react'
import groupImg from '../assets/group_profiles.jpg'
import headerImg from '../assets/doc-header-img.png'
const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-red-900 rounded-lg px-6 md:px-10 lg:px-20'>
        {/* Left side */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>Book Appoints <br /> With Trusted Doctors</p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                <img className='w-28 rounded-full border-none' src={groupImg} alt="" />
                <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassel-free</p>
            </div>
            <a className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-x-105 transition-all ease-in-out duration-1000' href="#speciality">Book appointment</a>
        </div>

        {/* Right side */}
        <div className='md:w-1/2 relative'>
<img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={headerImg} alt="" />
        </div>
    </div>
  )
}

export default Hero