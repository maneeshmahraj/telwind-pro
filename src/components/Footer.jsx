import React from 'react'

const Footer = () => {
  return (
   <>
    <div className='w-full h-[800px] bg-black block'>
    <div className='flex h-[400px]'>
      <div className='w-[40%]'>
     <p className='md:top-[30%] left-[40%]  relative text-red-600 font-bold text-4xl '> GET MOBILE <span className='text-white'> APP</span> </p>
   <div className='flex'>
   <div className='top-[140px] left-[30%] relative '>
      <img src="../Images/play2.png" alt="" className="h-[50px] border-1 border-gray-800 rounded shadow-md  bg-black" />
     </div>
     <div className='top-[140px] left-[40%] relative '>
      <img src="../Images/apply2.jpeg" alt="" className="h-[50px] border-1  border-gray-800  rounded shadow-md  bg-gray-600"  />
     </div>
   </div>
      </div>
      <div className='w-[50%]'>
        <img src="../Images/footerimg.png" alt="" className='h-[450px]' />
      </div>
    </div>
    <div className='flex'>
      <div className='text-wrap h-[300px] w-[20%] top-[80px] left-[7%] relative  text-white'>
        <h4 className='font-bold text-white'>About Us</h4>
        <br/>
   <span className='font-thin'>   A complete solution to your desire of owning your dream superbike,
       cruiser, adventure or a classic all under one roof ! You can</span><a href="" className=' text-red-500 font-thin text-[10px] underline ml-2'>...READ MORE</a>
      </div>
      <div className='text-wrap h-[300px] w-[20%] top-[80px] left-[10%] relative  text-white'>
        <h4 className='font-bold text-white'>Quick Links</h4>
        <br/>
        <ul className='font-thin text-[16px]'>
          <li  className='hover:text-red-800'><a href="" >Home</a></li>
          <li className='hover:text-red-800'><a href="">About Us</a></li>
          <li className='hover:text-red-800'><a href="">Family</a></li>

          <li className='hover:text-red-800'><a href="">Inventory</a></li>
          <li className='hover:text-red-800'><a href="">Contact</a></li>
          <li className='hover:text-red-800'><a href="">Sell Us</a></li>
 
        </ul>
      </div>
      <div className='text-wrap h-[300px] w-[20%] top-[80px] left-[11%] relative  text-white'>
        <h4 className='font-bold text-white'>Contact Info</h4>
        <br/>
   <span >   1-B , SARABHA NAGAR
Ludhiana, Punjab, India
<br/>
      
 <a href="" className=' text-red-500 font-thin text-[16px] underline ml-2'>nsonetv.ldh@gmail.com</a>
 <br/>
Maneesh budoliya: +91 91406-88969
Sunny Chawla : +91 98151-15566</span>
      </div>
      <div className='text-wrap h-[300px] w-[20%] top-[80px] left-[14%] relative  text-white'>
        <h4 className='font-bold text-white'>About Us</h4>
        <br/>
   <span className='font-thin'>   A complete solution to your desire of owning your dream superbike,
       cruiser, adventure or a classic all under one roof ! You can</span>
      </div>
    </div>
    </div>
   </>
  )
}

export default Footer