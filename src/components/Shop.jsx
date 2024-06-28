import React, { useRef } from 'react'
import Customer from './Customer';
import { motion } from "framer-motion"
const Shop = () => {
  const ref=useRef(null);
  return (
    <>
    <div className='bg-gray-300  pt-[80px] pb-[100px] '>
        <div className='text-center'>
            <span className='text-5xl text-red-600 font-bold'>POPULAR</span> <span className='text-5xl  text-gray-800 font-bold'>BIKES</span>

 < p className='pt-[10px]'>A complete solution to your desire of owning your dream superbike,cruiser,<br/>
adventure or a classic all under ine roof!</p>
</div>
<div ref={ref} className='w-[100%] h-auto flex justify-center flex-wrap  '>
<motion.div drag dragConstraints={ref} className=' h-[370px] w-[24%]  bg-white m-4  rounded md:shadow-md'>
       <div className=' rounded h-[200px] w-[100%] '>
       <img src="../Images/suzuki.jpeg" alt="" className='h-[200px] w-[100%]  rounded' />
       <p className='text-xl font-bold text-gray-950 pt-2'>₹ 23,99,000</p>
      
       <p className='text-xl font-bold text-gray-950 hover:text-red-600'>HD ROAD GLIDE SPECIAL 114 CI</p>

       <br/>
        <div className='flex justify-center'>
        <button className='p-[8px] border-1 border-gray-600 text-black w-[200px]  hover:bg-orange-500 hover:border-orange-500  rounded-[30px] cursor-pointer '>Add to card</button>
       
        </div>
       </div>
      
    </motion.div>
    <motion.div drag dragConstraints={ref} className=' h-[370px] w-[24%]  bg-white m-4  rounded md:shadow-md'>
       <div className=' rounded h-[200px] w-[100%] '>
       <img src="../Images/suzuki.jpeg" alt="" className='h-[200px] w-[100%]  rounded' />
       <p className='text-xl font-bold text-gray-950 pt-2'>₹ 23,99,000</p>
      
       <p className='text-xl font-bold text-gray-950 hover:text-red-600'>HD ROAD GLIDE SPECIAL 114 CI</p>

       <br/>
        <div className='flex justify-center'>
          <button className='p-[8px] border-1 border-gray-600 hover:text-white text-black w-[200px] hover:bg-orange-500 hover:border-orange-500  rounded-[30px] cursor-pointer '>Add to card</button>
           
        </div>
       </div>
      
    </motion.div>
    <motion.div drag dragConstraints={ref} className=' h-[370px] w-[24%]  bg-white m-4  rounded md:shadow-md'>
       <div className=' rounded h-[200px] w-[100%] '>
       <img src="../Images/suzuki.jpeg" alt="" className='h-[200px] w-[100%]  rounded' />
       <p className='text-xl font-bold text-gray-950 pt-2'>₹ 23,99,000</p>
      
       <p className='text-xl font-bold text-gray-950 hover:text-red-600'>HD ROAD GLIDE SPECIAL 114 CI</p>

       <br/>
        <div className='flex justify-center'>
        <button className='p-[8px] border-1 border-gray-600 hover:text-white text-black w-[200px]  hover:bg-orange-500 hover:border-orange-500  rounded-[30px] cursor-pointer '>Add to card</button>          

        </div>
       </div>
      
    </motion.div>
    <motion.div drag dragConstraints={ref} className=' h-[370px] w-[24%]  bg-white m-4  rounded md:shadow-md'>
       <div className=' rounded h-[200px] w-[100%] '>
       <img src="../Images/suzuki.jpeg" alt="" className='h-[200px] w-[100%]  rounded' />
       <p className='text-xl font-bold text-gray-950 pt-2'>₹ 23,99,000</p>
      
       <p className='text-xl font-bold text-gray-950 hover:text-red-600'>HD ROAD GLIDE SPECIAL 114 CI</p>

       <br/>
        <div className='flex justify-center'>
        <button className='p-[8px] border-1 border-gray-600 hover:text-white text-black w-[200px]  hover:bg-orange-500 hover:border-orange-500  rounded-[30px] cursor-pointer '>Add to card</button>    
        </div>
       </div>
      
    </motion.div>
    <motion.div drag dragConstraints={ref} className=' h-[370px] w-[24%]  bg-white m-4  rounded md:shadow-md'>
       <div className=' rounded h-[200px] w-[100%] '>
       <img src="../Images/suzuki.jpeg" alt="" className='h-[200px] w-[100%]  rounded' />
       <p className='text-xl font-bold text-gray-950 pt-2'>₹ 23,99,000</p>
      
       <p className='text-xl font-bold text-gray-950 hover:text-red-600'>HD ROAD GLIDE SPECIAL 114 CI</p>

       <br/>
        <div className='flex justify-center'>
        <button className='p-[8px] border-1 border-gray-600 hover:text-white text-black w-[200px] hover: hover:bg-orange-500 hover: hover:border-orange-500  rounded-[30px] cursor-pointer '>Add to card</button>

        </div>
       </div>
      
    </motion.div>
    <motion.div drag dragConstraints={ref} className=' h-[370px] w-[24%]  bg-white m-4  rounded md:shadow-md'>
       <div className=' rounded h-[200px] w-[100%] '>
       <img src="../Images/suzuki.jpeg" alt="" className='h-[200px] w-[100%]  rounded' />
       <p className='text-xl font-bold text-gray-950 pt-2'>₹ 23,99,000</p>
      
       <p className='text-xl font-bold text-gray-950 hover:text-red-600'>HD ROAD GLIDE SPECIAL 114 CI</p>

       <br/>
        <div className='flex justify-center'>
        <button className='p-[8px] border-1 border-gray-600 text-black w-[200px] hover:bg-orange-500 hover:border-orange-500    rounded-[30px] cursor-pointer '>Add to card</button>

        </div>
       </div>
      
    </motion.div>
</div>
    </div>
    <Customer/>
    </>
  )
}

export default Shop;