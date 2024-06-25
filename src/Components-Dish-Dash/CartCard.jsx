import React, { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";

const CartCard = ({cartItems,noOfItems,increaseNoOfItems,decreaseNoOfItems}) => {

 
  return (
    <section className='h-[100%] no-scrollbar'>
        {
            cartItems.length === 0 ? <div className='w-full h-full'><img src="/Empty Cart 2.svg" alt="Empty Cart" aria-placeholder='Loading' loading='lazy' className=' object-contain w-full h-full ' /></div> : cartItems.map((item,i)=>(
                <div className='w-[360px] flex gap-4 mt-3 overflow-x-scroll no-scrollbar' key={item.id}>
            <div className='w-[120px] h-[120px] rounded-[20px] bg-[#A9411D] flex justify-center items-center'>
                <img src={item.image_url} alt="image" className='h-[100px] w-[100px] rounded-full'/>
            </div>
            
            <div className='flex-col card-mycart text-start '>
                <div className='flex gap-9 items-center'>
                <span className='text-[16px] font-bold '>{item.food_name}</span> 
                <span className='text-[12px] text-[#968B7B]'>
                    Edit
                </span>
                </div>
              
                <span className='text-[13px] text-[#968B7B]'>{item.food_name}</span>
                <div>
                    $<span className='text-[#968B7B]'>{parseInt(item.price) * parseInt(noOfItems[i])}</span>
                    
                    
                    <div className="calc flex items-center gap-5 mt-4">
                    <CiCircleMinus size={25} color='#968B7B' onClick={()=>decreaseNoOfItems(i)}/>
                    {noOfItems[i]}
                    <IoIosAddCircleOutline size={25} color='#968B7B' onClick={()=>increaseNoOfItems(i)} />
                    </div>
                </div>
            </div>
        </div>
            ))
        }
       
    
    </section>
  )
}

export default CartCard