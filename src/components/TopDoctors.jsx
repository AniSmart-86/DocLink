import React from 'react'
import { doctors } from '../assets/DocData'
import { useNavigate } from 'react-router-dom'




const TopDoctors = () => {

    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Doctors To Book</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, <br className='hidden' /> schedule your appointment hassel-free</p>

        <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 ">
            {doctors.slice(0,10).map((item)=>(
                <div key={item._id} onClick={()=> {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-1000 ease-in-out">
                    <img className='bg-blue-50 w-full' src={item.img} alt="" />
                    <div className="p-4">
                        <div className="flex items-center gap-2 text-sm text-center text-green-500">
                            <p className="w-2 h-2 bg-green-500 rounded-full"></p><p>Available</p>
                        </div>
                        <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                        <p className="text-gray-600 text-sm">{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=>{navigate("/doctors"); scrollTo(0,0)}} className='bg-primary text-white px-12 py-2 rounded-full mt-10 hover:scale-x-105 transition-all duration-1000 ease-in-out'>More</button>
    </div>
  )
}

export default TopDoctors