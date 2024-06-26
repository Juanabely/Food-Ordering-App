import React from 'react'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { SlOptionsVertical } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import DropDown from './DropDown'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'


function Header({text,component,jsx,dropdownLabel,dropDownItem1,onClick}) {
    const backIcon= <IoIosArrowRoundBack size={30}/>
    const handleLogout = () =>{
      onClick()
    }
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
  component === 'myCart' ? jsx : <DropDown
  trigger={<SlOptionsVertical size={20} />}
  label={dropdownLabel}
  item1={dropDownItem1}
  dropDowns={
  <>
  <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
  <DropdownMenuItem >Edit</DropdownMenuItem>
  </>
}
  />
  
  }</div>

</div>
    </div>
  )
}

export default Header