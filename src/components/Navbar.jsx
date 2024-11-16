import React, { useState } from 'react'
import logo from '../assets/health-logo.jpeg'
import profileImg from '../assets/Ani.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaBars, FaChevronDown, FaX } from 'react-icons/fa6'

const Navbar = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);
    

  return (
    <div className='fixed top-0 right-0 left-0 z-10 flex items-center justify-between text-sm py-4 px-10 border-b border-b-gray-500 shadow-sm shadow-black bg-red-900'>
        <div className='flex items-center justify-center'>
        <img onClick={()=>{navigate("/"); scrollTo(0,0)}} className='w-10 cursor-pointer' src={logo} alt="" />
<h1 className='text-white font-bold bottom-0'><span className=''>Doc</span>Link</h1>
        </div>
        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to="/">
                <li className='py-1'>HOME</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to="/doctors">
                <li className='py-1'>ALL DOCTORS</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to="/about">
                <li className='py-1'>ABOUT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
            <NavLink to="/contact">
                <li className='py-1'>CONTACT</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token? <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-8 h-8 rounded-full' src={profileImg} alt="" />
                    <FaChevronDown className='text-white' />

                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-red-900 rounded-2xl flex flex-col gap-4 p-4 text-white'>
                            <p onClick={()=>{navigate("/profile"); scrollTo(0,0)}} className='hover:bg-slate-100 hover:text-red-900 px-9'>My Profile</p>
                            <p onClick={()=>{navigate("/my-appointment"); scrollTo(0,0)}} className='hover:bg-slate-100 hover:text-red-900 px-2'>My Appointment</p>
                            <p onClick={()=>{setToken(false)}} className='hover:bg-slate-100 hover:text-red-900 px-9'>Logout</p>
                        </div>
                    </div>
                </div> :  <button onClick={()=>navigate("/login")} className='bg-primary text-white px-8 py-3 rounded-3xl font-light hidden md:block'>LOGIN/SIGN UP</button>
            }

<FaBars onClick={()=> setShowMenu(true)} className='w-10 cursor-pointer md:hidden text-white'/>
           {/* =====Mobile Menu====== */}
           <div className={` ${showMenu ? 'fixed w-72 h-80' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-red-900 text-white transition-all`}>
            <div className=' flex items-center justify-between px-5 py-6'>
                <img  className='w-8 cursor-pointer' src={logo} alt="" />
                    <FaX onClick={()=>setShowMenu(false)} className='size-7 w-3 cursor-pointer'/>
            </div>
            <ul className='flex flex-col items-start px-4 gap-2 text-md mt-5 font-medium'>
            <NavLink onClick={()=>setShowMenu(false)} className='px-4 py-2 rounded' to="/">
                HOME
                <hr className='border-none outline-none h-0.5 bg-white w-3/5 hidden' />
            </NavLink>
            <NavLink onClick={()=>setShowMenu(false)} className='px-4 py-2 rounded' to="/doctors">
                ALL DOCTORS
                <hr className='border-none outline-none h-0.5 bg-white w-3/5 hidden' />
            </NavLink>
            <NavLink onClick={()=>setShowMenu(false)} className='px-4 py-2 rounded' to="/about">
                ABOUT
                <hr className='border-none outline-none h-0.5 bg-white w-3/5 hidden' />
            </NavLink>
            <NavLink onClick={()=>setShowMenu(false)} className='px-4 py-2 rounded' to="/contact">
                CONTACT
                <hr className='border-none outline-none h-0.5 bg-white w-3/5 hidden' />
            </NavLink>
        </ul>
           </div>
        </div>
    </div>
  )
}

export default Navbar