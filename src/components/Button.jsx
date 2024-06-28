import React from 'react'

 const Button = (props) => {
  return (
    <>
   
   <button className='bg-indigo-600 text-white font-[poppins] py-2 px-6 rounded md:ml-8 mr-8 hover:bg-indigo-400 '>
      {props.children}
    </button>
  
    </>
  )
}
export default Button;