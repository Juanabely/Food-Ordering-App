import React, { useContext } from 'react'
import { AuthContext } from '@/lib/context/AuthProvider'
import { Navigate} from 'react-router-dom'
import Header from './Header'
import { BsFillCreditCardFill } from 'react-icons/bs'
import { IoLocation } from 'react-icons/io5'
import { CiEdit, CiPhone } from 'react-icons/ci'
import { LuLogOut } from 'react-icons/lu'
import swal from 'sweetalert';
import { FaEdit } from 'react-icons/fa'


const Profile = () => {

  const {isAuthicanted,activeUser,setIsAuthicanted} = useContext(AuthContext)
  const email = activeUser.email
  const logout = () =>{
localStorage.clear();
            swal("succes!", "Don't go for too long!", "success");
            setIsAuthicanted(false);
  }

  return (
  isAuthicanted ? <section className='justify-center items-center text-center h-[100vh]   max-w-[360px]   overflow-hidden min-h-[50px]   mx-auto  no-scrollbar  sm:max-w-[600px]  md:max-w-[720px] lg:max-w-[1024px] '>
  <Header
  text={'My Profile'}
  dropdownLabel={'Profile'}
  dropDownItem1={'Logout'}
  onClick={logout}
  />
  <div className='h-[100px] mt-[30px] flex items-center bg-[#FFF8EF] px-5 justify-between w-full'>
  <div className='bg-slate-100 relative text-center items-center rounded-full w-[70px] h-[70px] flex '>
      <span className='font-bold text-4xl absolute left-[34%] top-[]'>{
        activeUser.email.charAt(0).toUpperCase() 
        }</span>
      </div>
       <div className='flex flex-col md:flex-1  '><span>{activeUser.username}</span> <span>{email}</span></div>
       <div><CiEdit size={32} color='#A9411D' /></div>
  </div>
   <div className='text-start mt-9 '>
    <div className='flex flex-col gap-5'> 
      <div className='w-[80%] h-[50px] rounded-[10px] mx-auto mt-3 bg-[#FFF8EF] flex items-center gap-4 '><IoLocation size={22} color='#A9411D' className='ml-3' /> <span className='text-[15px]'>{activeUser.location}</span> </div>
    <div className='w-[80%] h-[50px] rounded-[10px] mx-auto mt-3 bg-[#FFF8EF] flex items-center gap-4'>
    <CiPhone size={22} color='#A9411D' className='ml-3' /> <span className='text-[15px]'>{activeUser.phone}</span></div>
    <div className='w-[80%] h-[50px] rounded-[10px] mx-auto mt-3 bg-[#FFF8EF] flex items-center gap-4'><BsFillCreditCardFill size={22} color='#A9411D ' className='ml-3' /><span className='text-[15px]'>pending order payments</span></div>
    <div className='mt-[20px] w-[80%] mx-auto text-start flex gap-4 bg-[#FFF8EF] h-[50px] items-center p-2'><LuLogOut size={27} color='#A9411D'  onClick={()=>{
          logout() 
            
         }}/>
         <span>Logout</span>
         </div>
 </div>
 
 
 </div>
   
  
</section> : <Navigate to={'/login'}/>
  )
}

export default Profile