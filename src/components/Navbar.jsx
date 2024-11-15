import React, { useState } from 'react'
import logo from '../assets/health-logo.jpeg'
import profileImg from '../assets/image 388.png'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);
  return (
    <div className='flex items-center justify-between text-sm py-4 m-5 border-b border-b-gray-500'>
        <div className='flex items-center justify-center'>
        <img onClick={()=>{navigate("/"); scrollTo(0,0)}} className='w-14 cursor-pointer' src={logo} alt="" />
<h1 className='text-red-800 font-bold bottom-0'>D<span className='text-slate-600'>O</span>C</h1>
        </div>
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to="/">
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-primary w3/5 m-auto hidden' />
            </NavLink>
            <NavLink to="/doctors">
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 bg-primary w3/5 m-auto hidden' />
            </NavLink>
            <NavLink to="/about">
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w3/5 m-auto hidden' />
            </NavLink>
            <NavLink to="/contact">
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w3/5 m-auto hidden' />
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token? <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-8 rounded-full' src={profileImg} alt="" />
                    <img src="" alt="" />

                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-red-900 rounded-2xl flex flex-col gap-4 p-4 text-white'>
                            <p onClick={()=>{navigate("/profile")}} className='hover:bg-slate-100 hover:text-red-900 px-9'>My Profile</p>
                            <p onClick={()=>{navigate("/my-appointment")}} className='hover:bg-slate-100 hover:text-red-900 px-2'>My Appointment</p>
                            <p onClick={()=>{setToken(false)}} className='hover:bg-slate-100 hover:text-red-900 px-9'>Logout</p>
                        </div>
                    </div>
                </div> :  <button onClick={()=>navigate("/login")} className='bg-primary text-white px-8 py-3 rounded-3xl font-light hidden md:block'>LOGIN/SIGN UP</button>
            }
           
        </div>
    </div>
  )
}

export default Navbar