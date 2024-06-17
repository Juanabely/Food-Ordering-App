import { AuthContext } from '@/lib/context/AuthProvider';
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Map from './Map';
import { IoLocation } from 'react-icons/io5';
import { CiPhone } from 'react-icons/ci';
import { BsClock, BsFillCreditCardFill } from 'react-icons/bs';
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { LuMessageCircle } from 'react-icons/lu';

const ReachOut = () => {
  const {isAuthicanted,activeUser} = useContext(AuthContext)
const navigate = useNavigate()
const email= activeUser.email

  useEffect(() => {
    if (!isAuthicanted) {
      navigate('/login');
    }
     // Mark loading as complete
  }, [isAuthicanted, navigate]);
  return (
    <section className="reachout justify-center items-center text-center h-[100vh]   max-w-[360px]   overflow-hidden min-h-[50px]   mx-auto  no-scrollbar  sm:max-w-[600px]  md:max-w-[720px] lg:max-w-[1024px] ">
      <Header
      text={'Your Order'}
      />
      <Map/>
      <div className='w-100% relative'>
       <img src="./ReachOut.svg" alt="" className='w-full h-[45%]'/>
          <div className='flex flex-col absolute top-0 left-0 right-0'> 
              <div className='w-[80%] h-[50px] rounded-[10px] mx-auto mt-3  flex items-center gap-4 '><IoLocation size={22} color='#A9411D' className='ml-3' /> <span className='text-[12px] text-white text-start'> <span className=' text-gray-500 '>Your Adress</span>  <br />{activeUser.location}</span> </div>
              <div className='text-white w-[165px] flex-1  rotate-90 h-[10px] '><span className='text-white'>---</span></div>
            <div className='w-[80%] h-[50px] rounded-[10px] mx-auto   flex items-center gap-4'>
            <BsClock size={22} color='#A9411D' className='ml-3' /> <span className='text-[15px] text-white text-start'><span className='text-gray-500'>Estimated Time</span>  <br />!0 Minutes - 15 Minutes</span></div>
            <div className='bg-[#A9411D] h-[60px] w-[80%] items-center px-2 justify-between mx-auto mt-4 rounded-[2rem] flex'>
            <div className='bg-[#EBE5DD] h-[50px] w-[50px] rounded-[50%]'><span className='text-black text-[30px]  font-bold'>{email.charAt(0).toUpperCase()}</span>
            </div>
            <div><span>{'Samwel Diab'}</span> <br /> <span>Delivery Courier</span></div>
            <div className='flex gap-1'>
              <IoChatbubbleEllipsesSharp size={25} color='white'/>
              <CiPhone size={25} color='white'/>
            </div>
            </div> 
          </div>
         
      </div>

    </section>
  )
}

export default ReachOut