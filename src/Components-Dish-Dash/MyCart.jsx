import React, { useContext, useEffect } from 'react'
import { SlOptionsVertical } from "react-icons/sl";
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import CartCard from './CartCard';
import { AuthContext } from '@/lib/context/AuthProvider';
import Header from './Header';

const MyCart = () => {
  const {isAuthicanted} = useContext(AuthContext)
const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthicanted) {
      navigate('/login');
    }
     // Mark loading as complete
  }, [isAuthicanted, navigate]);
  return (
    <section className='homejustify-center items-center text-center h-[100vh]   max-w-[360px]   overflow-x-scroll min-h-[50px]   mx-auto  no-scrollbar  sm:max-w-[600px]  md:max-w-[720px] lg:max-w-[1024px]'>
      <Header
      text={'My cart'}
      />

    <div className="cards mt-3 overflow-auto">
      <CartCard/>
    </div>
    </section>
    
  )
}

export default MyCart