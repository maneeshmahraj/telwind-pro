import React from 'react'
import { Nav } from './Nav'
import Slider from './components/Slider'
const Layout=()=> {
 
  return (
    <>
    <div className='md:w-[100%] sticky z-30'>
    <Nav/>
    </div>
    <div className=' w-full h-screen absolute top-[74px] z-[-1]'>
    
     <img src="../Images/bgbulite.jpg" alt="" className='bg-no-repeat bg-cover fixed h-screen w-full ' />
    
    </div>
    <Slider/>
    </>
  )
}

export default Layout