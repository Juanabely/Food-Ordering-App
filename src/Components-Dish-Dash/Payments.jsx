import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TbCash } from "react-icons/tb";
import { BsFillCreditCardFill } from "react-icons/bs";
import { Button } from '@/components/ui/button';
import { AuthContext } from '@/lib/context/AuthProvider';
import Header from './Header';
import api from '@/lib/api';


const Payments = () => {
  const {isAuthicanted} = useContext(AuthContext)
 const route='/api/daraja/'
 const confirmRoute ='api/daraja/stk-push/'
  
  const value ={
    "phone":"0726241070",
    "amount":1
  }
  
const navigate = useNavigate()
const onPayment = async () => {
 try {
  const response =await api.post(route,value)
  console.log(response)
  if(response.status === 200){
    const responseData = await api.post(confirmRoute)
    console.log(responseData.data)
  }
 } catch (error) {
  alert(error)
 }
}

  useEffect(() => {
    if (!isAuthicanted) {
      navigate('/login');
    }
     // Mark loading as complete
  }, [isAuthicanted, navigate]);
  
  return (
    <section className='home justify-center items-center text-center h-[100vh]   max-w-[360px]   overflow-hidden min-h-[50px]   mx-auto  no-scrollbar  sm:max-w-[600px]  md:max-w-[720px] lg:max-w-[1024px]'>   
    <Header
    text={'Payment Method'}
    component={'payment'}
    />
     <div className='text-start mt-9 '>
        <span className='text-[15px] font-semibold tracking-wide'>Choose a Payment method</span>
        <div className='w-[80%] h-[50px] rounded-[10px] mx-auto mt-3 bg-[#FFF8EF] flex items-center gap-4 '><TbCash size={22} color='#A9411D' className='ml-3' /> <span className='text-[15px]'>Cash Payment</span> </div>
        <div className='w-[80%] h-[50px] rounded-[10px] mx-auto mt-3 bg-[#FFF8EF] flex items-center gap-4'><img src="/transfer.svg" alt="transfer" className='ml-3' /> <span className='text-[15px]'>Bank Transfer</span></div>
        <div className='w-[80%] h-[50px] rounded-[10px] mx-auto mt-3 bg-[#FFF8EF] flex items-center gap-4'><BsFillCreditCardFill size={22} color='#A9411D ' className='ml-3' /><span className='text-[15px]'>Credit/Debit Card</span></div>
     </div>

 
    <div className='mt-[10%] max-[376px]:mt-[20%] space-y-1 w-[80%] bg-[#FFF8EF] rounded-[20px] align-middle mx-auto ' >
            <div className='flex justify-between content-center items-center  m-4 pt-3'>
                <span className='font-semibold text-[13px] text-[#968B7B]'>Sub total</span>
                <span className='text-[#A9411D] font-semibold text-[15px]'>$70</span>
            </div>
            <div className='flex justify-between m-4'>
                <span className='font-semibold text-[13px] text-[#968B7B]'>Sub total</span>
                <span className='text-[#A9411D] font-semibold text-[15px]'>$70</span>
            </div>
            <div className='flex justify-between m-4'>
                <span className='font-semibold text-[13px] text-[#968B7B]'>Sub total</span>
                <span className='text-[#A9411D] font-semibold text-[15px]'>$70</span>
            </div>
            <span className='mx-w-[250px]'>-----------------------------------</span>
            <div className='flex justify-between pb-2 m-4'>
                <span className='font-bold text-[15px] text-[black]'> Total Price</span>
                <span className='text-[black] font-bold text-[16px]'>$70</span>
            </div>
            
    </div>
    <div className='mt-4'>
    <Button variant="outline" className='checkout-btn w-[300px] h-[60px] hover:brightness-150 hover:text-white text-white rounded-[30px]' onClick={()=>onPayment()} >Payment</Button>
                <Link to={'/checkout'}></Link>
           
            </div>
    </section>
    
  )
}

export default Payments