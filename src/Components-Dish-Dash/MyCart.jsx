import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CartCard from './CartCard';
import { AuthContext } from '@/lib/context/AuthProvider';
import Header from './Header';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SlOptionsVertical } from 'react-icons/sl';


const MyCart = () => {
  const {isAuthicanted,cartItems,setCartItems,totalPrice,setTotalPrice,setItems} = useContext(AuthContext)
const navigate = useNavigate()
const cartZero = cartItems.length === 0
const [noOfItems, setNoOfItems] = useState(cartItems.map(() => 1)) 
console.log(noOfItems)


console.log(cartItems)
const orderedItems = cartItems.map((item,index)=>({...item,quantity:noOfItems[index]}))
console.log(orderedItems)

const decreaseNoOfItems = (i) =>{
  const update = [...noOfItems]
  update[i] -=1
  setNoOfItems(update)
  const newTotalPrice = cartItems.reduce((total, item, index) => {
    return total + parseInt(item.price) * update[index];
  }, 0);
  setTotalPrice(newTotalPrice);
  if (noOfItems[i] <= 1) {
    const updatedCartItems = cartItems.filter((item, index) => index !== i);
    setCartItems(updatedCartItems);
  }
  
}
const increaseNoOfItems = (i) => {
   const update = [...noOfItems];
   update[i] += 1;
   setNoOfItems(update)
   const newTotalPrice = cartItems.reduce((total, item, index) => {
       return total + item.price * update[index];
     }, 0);
     setTotalPrice(newTotalPrice);
}
console.log(totalPrice)
const deliveryFee = 100
const grandTotal = totalPrice + deliveryFee
  useEffect(() => {
    if (!isAuthicanted) {
      navigate('/login');
    }
     // Mark loading as complete
  }, [isAuthicanted, navigate]);
  return (
    <section className='homejustify-center items-center text-center h-[100vh]   max-w-[360px]   overflow-x-scroll min-h-[50px]   mx-auto  no-scrollbar  sm:max-w-[600px]  md:max-w-[720px] lg:max-w-[1024px] my-auto px-1'>
      <Header
      text={'My cart'}
      jsx = {<DropdownMenu>
        <DropdownMenuTrigger><SlOptionsVertical size={20} /></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Cart </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={()=>{setCartItems([])}}>Clear Cart</DropdownMenuItem>
          <DropdownMenuItem>Delivery</DropdownMenuItem>
          <DropdownMenuItem>Claim Discount</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      }
      component={'myCart'}
      />

    <div className="cards mt-3 overflow-auto w-full h-[50%] no-scrollbar">
      <CartCard
      cartItems={cartItems}
      noOfItems={noOfItems}
      increaseNoOfItems={increaseNoOfItems}
      decreaseNoOfItems={decreaseNoOfItems}
      
      />
    </div>
    <div className='space-y-1 sb-tt h-[20%] '>
            <div className='flex justify-between content-center items-center text-start'>
                <span className='font-semibold text-[13px] text-[#968B7B]'>Sub total</span>
                <span className='text-[#A9411D] font-semibold text-[15px]'>Ksh {cartZero ? 0 : totalPrice}</span>
            </div>
            <div className='flex justify-between text-start items-center'>
                <span className='font-semibold text-[13px] text-[#968B7B]'>Taxes & Fess </span>
                <span className='text-[#A9411D] font-semibold text-[15px]'>Ksh {cartZero?0:'nill'}</span>
            </div>
            <div className='flex justify-between text-start items-center'>
                <span className='font-semibold text-[13px] text-[#968B7B]'>Delivery Fee</span>
                <span className='text-[#A9411D] font-semibold text-[15px]'>Ksh {cartZero?0:deliveryFee}</span>
            </div>
            <div className='flex justify-between pt-10 text-start'>
                <span className='font-bold text-[15px] text-[black]'> Total Price</span>
                <span className='text-[black] font-bold text-[16px]'>Ksh {cartZero?0:grandTotal}</span>
            </div>
            <div className='flex justify-center pt-3 ' onClick={()=>{setItems(orderedItems)}}>
                <Link to={cartZero ? '/' : '/checkout'}> <Button variant="outline"  className='checkout-btn w-[350px] h-[60px] hover:brightness-150 hover:text-white text-white rounded-[30px]' >{cartZero ?'Add items to cart':'Checkout' }</Button></Link>
           
            </div>
        </div>
    
    </section>
    
  )
}

export default MyCart