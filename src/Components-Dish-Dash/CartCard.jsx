import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom';


const CartCard = ({cartItems}) => {
    const balanceZero = cartItems.length === 0
  return (
    <section className='h-[100%] no-scrollbar'>
        {
            cartItems.length === 0 ? <div className='w-full h-full'><img src="/Empty Cart.jpg" alt="Empty Cart" className=' object-contain w-full h-full ' /></div> : cartItems.map((item)=>(
                <div className='w-[360px] flex gap-4 mt-3 overflow-x-scroll no-scrollbar'>
            <div className='w-[120px] h-[120px] rounded-[20px] bg-[#A9411D]'>
                <img src={item.image} alt="image" />
            </div>
            
            <div className='flex-col card-mycart text-start '>
                <div className='flex gap-9 items-center'>
                <span className='text-[16px] font-bold '>{item.name}</span> 
                <span className='text-[12px] text-[#968B7B]'>
                    Edit
                </span>
                </div>
              
                <span className='text-[13px] text-[#968B7B]'>{item.name}</span>
                <div>
                    $<span className='text-[#968B7B]'>{item.price}</span>
                    
                    
                    <div className="calc flex items-center gap-5 mt-4">
                    <CiCircleMinus size={25} color='#968B7B'/>
                    3
                    <IoIosAddCircleOutline size={25} color='#968B7B'/>
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