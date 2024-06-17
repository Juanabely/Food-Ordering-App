import React from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { Button } from "@/components/ui/button"
import { Link } from 'react-router-dom';


const CartCard = () => {
  return (
    <section>
        <div className='w-[360px] flex gap-4 space'>
            <div className='w-[120px] h-[120px] rounded-[20px] bg-[#A9411D]'>
                <img src="/image41.svg" alt="" />
            </div>
            
            <div className='flex-col card-mycart text-start '>
                <div className='flex gap-9 items-center'>
                <span className='text-[16px] font-bold '>Yakisoba Noodles</span> 
                <span className='text-[12px] text-[#968B7B]'>
                    Edit
                </span>
                </div>
              
                <span className='text-[13px] text-[#968B7B]'>Noodles with pork</span>
                <div>
                    $<span className='text-[#968B7B]'>10</span>
                    
                    
                    <div className="calc flex items-center gap-5 mt-4">
                    <CiCircleMinus size={25} color='#968B7B'/>
                    3
                    <IoIosAddCircleOutline size={25} color='#968B7B'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[360px] flex gap-4 mt-2'>
            <div className='w-[120px] h-[120px] rounded-[20px] bg-[#A9411D]'>
                <img src="/image41.svg" alt="" />
            </div>
            
            <div className='flex-col card-mycart text-start '>
                <div className='flex gap-9 items-center'>
                <span className='text-[16px] font-bold '>Yakisoba Noodles</span> 
                <span className='text-[12px] text-[#968B7B]'>
                    Edit
                </span>
                </div>
              
                <span className='text-[13px] text-[#968B7B]'>Noodles with pork</span>
                <div>
                    $<span className='text-[#968B7B]'>10</span>
                    
                    
                    <div className="calc flex items-center gap-5 mt-4">
                    <CiCircleMinus size={25} color='#968B7B'/>
                    3
                    <IoIosAddCircleOutline size={25} color='#968B7B'/>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[360px] flex gap-4 mt-2'>
            <div className='w-[120px] h-[120px] rounded-[20px] bg-[#A9411D]'>
                <img src="/image41.svg" alt="" />
            </div>
            
            <div className='flex-col card-mycart text-start '>
                <div className='flex gap-9 items-center'>
                <span className='text-[16px] font-bold '>Yakisoba Noodles</span> 
                <span className='text-[12px] text-[#968B7B]'>
                    Edit
                </span>
                </div>
              
                <span className='text-[13px] text-[#968B7B]'>Noodles with pork</span>
                <div>
                    $<span className='text-[#968B7B]'>10</span>
                    
                    
                    <div className="calc flex items-center gap-5 mt-4">
                    <CiCircleMinus size={25} color='#968B7B'/>
                    3
                    <IoIosAddCircleOutline size={25} color='#968B7B'/>
                    </div>
                </div>
            </div>
        </div>

        <div className='space-y-1 sb-tt'>
            <div className='flex justify-between content-center items-center'>
                <span className='font-semibold text-[13px] text-[#968B7B]'>Sub total</span>
                <span className='text-[#A9411D] font-semibold text-[15px]'>$70</span>
            </div>
            <div className='flex justify-between'>
                <span className='font-semibold text-[13px] text-[#968B7B]'>Sub total</span>
                <span className='text-[#A9411D] font-semibold text-[15px]'>$70</span>
            </div>
            <div className='flex justify-between'>
                <span className='font-semibold text-[13px] text-[#968B7B]'>Sub total</span>
                <span className='text-[#A9411D] font-semibold text-[15px]'>$70</span>
            </div>
            <div className='flex justify-between tt-price'>
                <span className='font-bold text-[15px] text-[black]'> Total Price</span>
                <span className='text-[black] font-bold text-[16px]'>$70</span>
            </div>
            <div className=''>
                <Link to={'/checkout'}> <Button variant="outline" className='checkout-btn w-[350px] h-[60px] hover:brightness-150 hover:text-white text-white rounded-[30px] '>Checkout</Button></Link>
           
            </div>

            
        </div>
    </section>
  )
}

export default CartCard