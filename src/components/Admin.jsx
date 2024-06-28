

import { useState } from 'react';


const Admin = () => {

const [open,setOpen]=useState(false);


  return (
    <>
<div className='h-[800px] w-[100%] bg-gray-400  bg-[url("../Images/a1.jpg")] bg-no-repeat bg-cover '>
        <div className={` ${open?"md:top-[-500px] left-1/2 absolute -translate-x-[50%] -translate-y-[50%] duration-500 transition-top 200ms ease-out 0ms bg-white w-[380px] rounded":"md:top-1/2 left-1/2 absolute z-30 -translate-x-[50%] -translate-y-[50%] duration-500 transition-top 200ms ease-out 0ms bg-white w-[380px] rounded "} ` }>
            <h1 className='text-center text-2xl text-black font-bold'>Login</h1>
            <span className='absolute right-2 top-2 cursor-pointer text-center text-xl'>
            <ion-icon name="close-outline" onClick={()=>{setOpen(!open)}}></ion-icon>
            </span>
             <div className='md:pt-4 pl-10 pr-6'>

             <label htmlFor="username">UserId</label>
             <input type="text" className='border-1 border-gray-400 w-[94%] p-[6px] outline-none rounded ' />
             </div>
           
             
             <div className='md:pt-2 pl-10 pr-6'>
             <label htmlFor="password">Password:</label>
             <input type="password" className='border-1 border-gray-400 w-[94%] p-[6px] outline-none rounded ' />
             </div>
             <div className='md:pt-2 pl-10 pr-6'>
            
             <input type="checkbox" className=' ' /> <label htmlFor="">Reminder me</label>
             </div>
             <div className='md:pt-2 pl-10 pr-6 pb-2'>
            
             <button className='border-1 border-gray-400 bg-black text-white font-bold w-[94%] p-[6px] outline-none rounded' >Login</button>

             </div>
             <a href="" className='float-right relative top-0 right-12 text-blue-500 pb-4 '>Forgate password?</a>

        </div>
        <div className='md:top-1/2 left-1/2 absolute -translate-x-[50%] -translate-y-[50%]'>
            <button className='bg-black text-white p-2 rounded font-bold text-aqua-600' onClick={()=>{setOpen(!open)}}>Login</button>
        </div>
    </div>
    </>
  )
}

export default Admin;