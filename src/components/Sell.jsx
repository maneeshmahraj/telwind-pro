import React from 'react'
import About from './About'

const Sell = () => {
  return (
    <>
    <div className='w-full h-[500px] bg-white py-3 '>
     <div className='text-[50px] mt-14 ml-[150px] font-bold'>
     <h1>PLANNING TO SELL?</h1>
     </div>
     <div className='text-xl mt-3 ml-[150px] font-semibold'>
     <h1>SELL US YOUR BIKE</h1>
     </div>
   
    <div className='w-[100%] flex'>
        <div className='w-[40%] flex'>
          <div className='text-wrap'>
          <div className='h-[80px] w-[80px] rounded border-1 border-gray-900 mt-5 ml-[130px] text-6xl flex justify-center items-center '>
          <ion-icon name="logo-firefox"></ion-icon>
          </div>
          
          <span className='relative top-[-70px] left-[220px] text-wrap'>Outright</span>
          <br/>
          <span className='relative top-[-60px] left-[220px] font-bold text-wrap'>Sale</span>
          
          <div className='h-[80px] w-[80px] rounded border-1 border-gray-900 mt-5  ml-[130px] text-6xl flex justify-center items-center text-wrap'>
          <ion-icon name="logo-apple"></ion-icon>
          </div>
         
         <span className='relative top-[-70px] left-[220px] text-wrap'> Best
</span>
         <br/>
         <span className='relative top-[-60px] left-[220px] font-bold text-wrap'>Offer</span>
        
         
          </div>
          <div className=''>
          <div className='h-[80px] w-[80px] rounded border-1 border-gray-900 mt-5 ml-[100px] text-6xl flex justify-center items-center text-wrap'>
          <ion-icon name="logo-vimeo"></ion-icon>
          </div>
          
          <span className='relative top-[-70px] left-[200px] text-wrap'>5000+
</span>
          <br/>
          <span className='relative top-[-60px] left-[200px] font-bold text-wrap'>Satisfied Customers</span>
          
          <div className='h-[80px] w-[80px] rounded border-1 border-gray-900 mt-5 ml-[100px] text-6xl flex justify-center items-center'>
          <ion-icon name="logo-react"></ion-icon>
          </div>
         
         <span className='relative top-[-70px] left-[200px] text-wrap'>Hassle Free
</span>
         <br/>
         <span className='relative top-[-60px] left-[200px] font-bold text-wrap'>Processing</span>
        
         
          </div>
             </div>
        <div className='w-[60%] flex justify-center'>
            <img src="../Images/bmw1000rr.png" alt="" />
        </div>
    </div>
    </div>
    <About/>
    </>
  )
}

export default Sell