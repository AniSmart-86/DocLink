import React, { useState } from 'react'

const Login = () => {

  const [state, setState ] = useState('Sign Up');
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [name, setName ] = useState('');


  const onSubmit = async (e)=>{
    e.preventDefault()

    
  }
  return (
   <form className='min-h-[80vh] flex items-center'>

    <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-2xl'>
    <p className='text-2xl font-semibold'> { state === 'Sign Up' ? <p>Create Account</p>  : 'Login'} </p>
    <p>Please { state === 'Sign Up' ? 'Sign Up' : 'Login'} to book appointment</p>
   
   {
    state === "Sign Up" && <div className='w-full'>
    <p>Full Name:</p>
    <input className='border border-zinc-300 outline-cyan-400 rounded w-full p-6 pt-1' type="text" onChange={(e)=>setName(e.target.value)} value={name} />
   </div>
   }
   
   <div className='w-full'>
    <p>Email:</p>
    <input className='border border-zinc-300 outline-cyan-400 rounded w-full p-6 pt-1' type="email" onChange={(e)=>setEmail(e.target.value)} value={email} />
   </div>
   <div className='w-full'>
    <p>Password:</p>
    <input className='border border-zinc-300 outline-cyan-400 rounded w-full p-6 pt-1' type="text" onChange={(e)=>setPassword(e.target.value)} value={password} />
   </div>
   <button className='bg-blue-600 text-white w-full py-2 rounded-md text-base hover:scale-x-110 transition-all duration-1000 ease-in-out'>{ state === 'Sign Up' ? 'Create Account' : 'Login'}</button>
    { state === 'Sign Up' ? 
    <p>Already have an account?
       <span className="text-blue-400 underline cursor-pointer"onClick={()=>setState("Login")}> Login here</span> </p> :
        <p>Don't  have an account? 
          <span className="text-blue-400 underline cursor-pointer"onClick={()=>setState("Sign Up")}> Click here</span> </p>
            }
    </div>
   </form>
  )
}

export default Login