
import { color } from 'framer-motion';
import React from 'react'

const Cart = () => {
  return (
    <>

 <div className='flex justify-center'>
 <div className='w-[80%] pb-[10px] mt-[74px]  h-[500px] border-1 border-black bg-white'>
      <table className='w-[100%]'>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Brand</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        <tr className=' md:hover:bg-gray-300'>
          <td className='w-[20%] '>
            <img src="../Images/bmw1000rr.png" alt="" className='h-[80px] w-[80px] m-auto' />
          </td>
        
          <td>r15</td>
          <td>bmw</td>
          <td className="text-xl cursor-pointer">
          <ion-icon name="remove-circle-outline" style={{marginRight:"10px",fontSize:"25px"}}></ion-icon>
         <span  style={{fontSize:"22px"}}>1</span>
          <ion-icon name="add-circle-outline" style={{marginLeft:"10px",fontSize:"25px"}} ></ion-icon>
          </td>
          <td>100000</td>
        </tr>
      </table>
</div>
 </div>
    </>
  )
}

export default Cart;