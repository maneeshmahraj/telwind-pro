

import React from 'react'
import Shop from './Shop';

const About = () => {
  return (
    <>
    <div className='w-[100%]  h-auto flex m-auto bg-white z-30 justify-center py-[100px]'>
        <div className='w-[40%] h-[500px] overflow-hidden '>
         <img src="../Images/abt.jpg" alt="" className='h-[500px] w-[80%] rounded ' />
        </div>
        <div className='w-[40%] h-[500px] overflow-hidden'>

       <h1 className='text-4xl flex  text-gray-900 font-bold'>ABOUT NS.ONE</h1> 
       <br/>
<p className=' text-gray-500'>NS.ONE is composed of a progressive team of professionals that 
<br/><br/>strive to deliver exceptional
   service and leave each customer<br/> feeling like they truly are the “best” customer!</p>
  <br/>
<p className=' text-gray-500'>"Two friends started NS.ONE in 2014. They sought to shake things up<br/> and offer a new way to buy Bikes.</p>
<br/>
<p className=' text-gray-500'>With our online showroom, you can find exactly what you need right<br/> on our website."</p>
<br/>
<p className=' text-gray-500'>"We at NS.ONE are dedicated to make your Bike buying experience<br/> memorable. About NS.ONE is that it's a rapidly growing family where <br/> members keep coming back for more. We sell our vehicles 
<br/>nationwide. "</p>
        </div>

    </div>
    <div className=' h-[400px] w-full'>
      <h1 className='flex justify-center text-[40px] mt-9 text-gray-400 font-bold mb-[70px]'>BROWSE BY CATEGORY</h1>
      <div className='h-[160px] w-[70%] mt-[20px] m-auto flex justify-between '>

        <div className='h-[150px] w-[150px] bg-white rounded-full'>
          <img src="../Images/super.jpeg" alt="" className='h-[150px] w-[150px] rounded-full hover:rotate-90 transition-all 200ms  ' />
        </div>
        
        <div className='h-[150px] w-[150px] bg-white rounded-full'>
        <img src="../Images/super2.jpeg" alt="" className='h-[150px] w-[150px] rounded-full hover:rotate-90 transition-all 200ms ' />

        </div>
        <div className='h-[150px] w-[150px] bg-white rounded-full'>
        <img src="../Images/super3.jpeg" alt="" className='h-[150px] w-[150px] rounded-full hover:rotate-90 transition-all 200ms' />

        </div>
        <div className='h-[150px] w-[150px] bg-white rounded-full'>
        <img src="../Images/super.jpeg" alt="" className='h-[150px] w-[150px] rounded-full hover:rotate-90 transition-all 200ms ' />

        </div>

      </div>
      <div className=' h-[100px] w-[68%]  m-auto flex justify-between text-white'>
        <h1 className=''>ADVENTURE</h1>
        <h1 className='ml-[-70px]'>CAFE RACER/CLASSIC</h1>
        <h1 className='ml-[-70px]'>CRUISER</h1>
        <h1 className='mr-[20px]'>SPORTS</h1>

      </div>
    </div>
    <Shop/>
    </>
  )
}

export default About;