import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export const Nav = () => {
    let links=[
        {name:"INVENTORY",path:"/"},
        {name:"SELL US",path:"/"},
        {name:"FAMILY",path:"/"},
        {name:"ABOUT",path:"/"},
        {name:"CONTECT",path:"/"},
        {name:"REGISTRATION",path:"registration"}

       
    
      ]
      let [open,setOpen]=useState(false);
      const navigate=useNavigate();
      const handlAdmin=()=>{
           navigate("admin")
      }
      const handlCart=()=>{
        navigate("wishlist")
      }
  return (
    <>
    <div className='shadow-md w-[100%] fixed top-0 left-0' >
    <div className='md:flex bg-gray-900 '>
          <div className='md:flex font-bold justify-between w-[90%] cursor-pointer items-center font-[poppies] text-grey-800 '>
          <div className='ml-8 '>
            <img src="../Images/logo_sbk.svg" alt="" />
          </div>
          <div onClick={()=>{setOpen(!open)}} className='text-3xl text-white absolute right-8 top-4 cursor-pointer md:hidden'>
          <ion-icon name={open?'close':'menu'}></ion-icon>
          </div>
            <ul className={` md:flex md:items-center  md:mr-8 absolute  md:static
             md:z-auto z-[-1] left-0 w-full md:w-auto transition-all 200ms ease-in duration-500  ${open?'top-16':'top-[-370px]'}`}>
             {
              links.map((key)=>(
                <li key={key.name} className='ml-8 text-md md:py-0 py-4'>
                  <Link to={key.path} className='duration-500 hover:text-pink-600  text-white'>{key.name}</Link>
                </li>
              ))
             }
            </ul>
            <div className='text-2xl text-white md:mr-4 mr-8 absolute md:static '>
            <ion-icon name="search-outline"></ion-icon>
            <ion-icon name="person-circle-outline" onClick={()=>{handlAdmin()}} style={{marginLeft:"20px", marginRight:"20px"}} ></ion-icon>
            <ion-icon name="cart-outline" onClick={handlCart}></ion-icon>
            </div>
            
          
          </div>
         
         
        
    </div>
</div>
<Outlet/>
</>
  )
}
