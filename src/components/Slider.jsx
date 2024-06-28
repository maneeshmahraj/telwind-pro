import React, { useRef } from 'react'
import Sell from './Sell'
  import { motion } from 'framer-motion'
  // const fadeInUpAnimation: Variants = {

  //   hidden:{
  //     opacity:0,
  //     y:100,
  //   },
  //   show:{
  //     opacity:1,
  //     y:0,
  //     transition:{
  //       staggerChildren:0.3,
  //       duration:1.5
  //     },
  //   }
   
  // }
const Slider = () => {

 const ref=useRef();
  return (
<>
  <div ref={ref} className='md:w-[90%] h-[500px] bg-gray-600 rounded-tl-full  mt-[70px]  bg-[url("../Images/a1.jpg")] bg-no-repeat bg-cover flex justify-center ml-[10%] '>
  <motion.div drag dragConstraints={ref} 
    initial={{opacity:0,y:50}}
    animate={{opacity:1,y:0}}
    transition={{duration:10.5}}
   
  className='text-center text-gray-900 mt-[170px] w-[100%] '>
 <h3 className='text-xl font-semibold pt-4 '><span className='text-red-600 font-bold'>WHERE DREAMS</span> RIDE AGAIN</h3> 
<motion.h1 
 initial={{opacity:0,y:50}}
 animate={{opacity:1,y:0}}
 transition={{duration:8.9}}
className='text-3xl font-bold pt-1'><span className='text-red-600 font-bold'>WE ARE THE BEST</span> WHEN IT COMES TO</motion.h1>
<motion.h1 
 initial={{opacity:0,y:50}}
 animate={{opacity:1,y:0}}
 transition={{duration:5.3}}
className='text-3xl font-bold pt-1'> <span className='text-red-600 font-bold'>ARE THE BEST</span>WHEN IT COMES </motion.h1>
<motion.h1
 initial={{opacity:0,y:60}}
 animate={{opacity:1,y:0}}
 transition={{duration:12.8}}
className='text-3xl font-bold'> <span className='text-red-600 font-bold'>EXOTIC SU</span>PER BIKES</motion.h1>
<motion.h3
 initial={{opacity:0,y:60}}
 animate={{opacity:1,y:0}}
 transition={{duration:8.5}}
className='text-xl font-semibold pt-1'> <span className='text-red-600 font-bold'>WHERE DREAMS</span> RIDE AGAIN</motion.h3> 

  </motion.div>
  </div>
 
  <Sell/>
</>

    

  )
}

export default Slider