import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CartCard from './CartCard';
import { AuthContext } from '@/lib/context/AuthProvider';
import Header from './Header';
import { Button } from '@/components/ui/button';

const MyCart = () => {
  const {isAuthicanted,cartItems,setCartItems} = useContext(AuthContext)
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

    <div className="cards mt-3 overflow-auto w-full h-[50%] no-scrollbar">
      <CartCard
      cartItems={cartItems}
      />
    </div>
    <div className='space-y-1 sb-tt h-[20%] '>
            <div className='flex justify-between content-center items-center'>
                <span className='font-semibold text-[13px] text-[#968B7B]'>Sub total</span>
                <span className='text-[#A9411D] font-semibold text-[15px]'>{}</span>
            </div>
            <div className='flex justify-between'>
                <span className='font-semibold text-[13px] text-[#968B7B]'>Sub total</span>
                <span className='text-[#A9411D] font-semibold text-[15px]'>$70</span>
            </div>
            <div className='flex justify-between'>
                <span className='font-semibold text-[13px] text-[#968B7B]'>Sub total</span>
                <span className='text-[#A9411D] font-semibold text-[15px]'>$70</span>
            </div>
            <div className='flex justify-between pt-3'>
                <span className='font-bold text-[15px] text-[black]'> Total Price</span>
                <span className='text-[black] font-bold text-[16px]'>$70</span>
            </div>
            <div className=''>
                <Link to={'/checkout'}> <Button variant="outline" className='checkout-btn w-[350px] h-[60px] hover:brightness-150 hover:text-white text-white rounded-[30px] '>Checkout</Button></Link>
           
            </div>

            <button onClick={()=>{setCartItems([])}}>clear</button>
        </div>
    
    </section>
    
  )
}

export default MyCart