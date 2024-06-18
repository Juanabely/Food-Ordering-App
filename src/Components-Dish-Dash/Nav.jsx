import React, { useRef } from 'react'
import { BsFillGridFill } from "react-icons/bs";
import { FaUser,FaShoppingBag  } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { RiHomeSmile2Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Nav = ({cartItems}) => {
  const ref = useRef( )
  return (
    <section className=' nav flex items-center justify-center content-center max-w-[350px] mx-auto '>
      <div className='absolute z-50 justify-center items-center max-w-[375px] bottom-[-33px]'>
        <img src="/NavVector.svg" alt="Vector" className='bottom-0' />
        <div className='absolute flex flex-1 bottom-9 gap-7 left-5'>
            <RiHomeSmile2Fill  color='white' size={35}className='hover:brightness-75' />
            <Link to={'/reachOut'}><IoChatbubbleEllipsesSharp color='white' size={35} className='hover:brightness-75' /></Link>
            
           
        </div>
        <div className='absolute bottom-[3rem]  left-[41%] bg-black h-[70px] w-[70px] rounded-full flex flex-1 items-center gap-7 justify-center' >
          <Link to={'/shopping'}><BsFillGridFill color='white' size={20} className=' hover:brightness-50 '/></Link>
        
        </div>
        <div className='absolute flex flex-1 bottom-9 gap-7 right-5 '>
          
          <Link to={'/mycart'}><FaShoppingBag color='white' size={35} className='hover:brightness-75 relative' />
          <div className={`bg-white h-[15px] w-[15px] rounded-[50%] absolute top-0 right-[55px] ${cartItems.length === 0 ? 'hidden' : 'flex-1'} flex items-center justify-center font-bold text-yellow-700`}>{cartItems.length}</div>
          </Link>

          <Link to={'/profile'}><FaUser color='white' size={35} className='hover:brightness-75' /></Link>
            
            
        </div>
      </div>
    </section>
  )
}

export default Nav