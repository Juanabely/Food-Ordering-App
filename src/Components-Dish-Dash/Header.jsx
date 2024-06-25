import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { SlOptionsVertical } from 'react-icons/sl'
import { Link } from 'react-router-dom'

function Header({text,component,jsx}) {
    const backIcon= <IoIosArrowRoundBack size={30}/>
  return (
    <div className='head'>
      <div className="header flex justify-between mt-5 items-center   w-full ">


<div className="circle h-[40px] flex items-center justify-center w-[40px] rounded-full bg-[#FFF8EF] hover:bg-[#F8BF40]">
 <Link to={'/'}>{backIcon}</Link>
 
 </div>

<span>
  {text}
</span>

<div className="circle h-[40px] flex items-center justify-center w-[40px] rounded-full bg-[#FFF8EF]">{
  component === 'myCart' ? jsx : <SlOptionsVertical size={20} />
  
  }</div>

</div>
    </div>
  )
}

export default Header