

import { useState } from 'react';


const Registration = () => {

const [open,setOpen]=useState(false);


  return (
    <>
<div className='h-[800px] w-[100%]   bg-[url("../Images/a1.jpg")] bg-no-repeat bg-cover  '>

        <div  className={` ${open?"md:top-[-500px] left-1/2 absolute -translate-x-[50%] -translate-y-[50%] duration-500 transition-top 200ms ease-out w-[380px] rounded bg-white":"md:top-1/2 left-1/2 absolute z-30 -translate-x-[50%] -translate-y-[50%]  bg-white duration-500 transition-top 200ms ease-in-out 0ms w-[380px] rounded "} ` }>
            <h1 className='text-center text-2xl text-black font-bold'>Registration</h1>
            <span className='absolute right-2 top-2 cursor-pointer text-center text-xl'>
            <ion-icon name="close-outline" onClick={()=>{setOpen(!open)}}></ion-icon>
            </span>
             <div className='md:pt-4 pl-10 pr-6'>

             <label htmlFor="username">User name:</label>
             <input type="text" className='border-1 border-gray-400 w-[94%] p-[6px] outline-none rounded ' />
             </div>
             <div className='md:pt-2 pl-10 pr-6'>
             <label htmlFor="number">Phone Number:</label>
             <input type="text" className='border-1 border-gray-400 w-[94%] p-[6px] outline-none rounded ' />
             </div>
             <div className='md:pt-2 pl-10 pr-6'>
             <label htmlFor="email">Email:</label>
             <input type="text" className='border-1 border-gray-400 w-[94%] p-[6px] outline-none rounded ' />
             </div>
             <div className='md:pt-2 pl-10 pr-6'>
             <label htmlFor="password">Password:</label>
             <input type="password" className='border-1 border-gray-400 w-[94%] p-[6px] outline-none rounded ' />
             </div>
             <div className='md:pt-2 pl-10 pr-6'>
            
             <input type="checkbox" className=' ' /> <label htmlFor="">agee to term & conditions</label>
             </div>
             <div className='md:pt-2 pl-10 pr-6 pb-6'>
            
             <input type="submit" placeholder='submit' className='border-1 bg-black text-white font-bold  w-[94%] p-[6px] outline-none rounded '  />
             </div>
        </div>
        <div className='md:top-1/2 left-1/2 absolute -translate-x-[50%] -translate-y-[50%]'>
            <button className='bg-black text-white p-2 rounded font-bold text-aqua-600' onClick={()=>{setOpen(!open)}}>Registration</button>
        </div>
    </div>
    </>
  )
}

export default Registration;