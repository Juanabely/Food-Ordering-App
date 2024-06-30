import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TbCash } from "react-icons/tb";
import { BsFillCreditCardFill } from "react-icons/bs";
import { Button } from '@/components/ui/button';
import { AuthContext } from '@/lib/context/AuthProvider';
import Header from './Header';
import api from '@/lib/api';
import { ClipLoader } from 'react-spinners';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentLoader from './PaymentLoader';


const Payments = () => {
const [paymentLoading, setPaymentLoading] = useState(false)

  const {isAuthicanted,totalPrice,activeUser,items} = useContext(AuthContext)
  
 const route='/api/daraja/'
 const orderApi = '/api/orders/'
 const confirmRoute ='api/daraja/stk-push/'
 const delivery = 100 
 const grandTotal = totalPrice + delivery
 const PhoneNumber = activeUser.phone
console.log(activeUser)
  const value ={
    "phone":`${PhoneNumber}`,
    "amount":grandTotal
  }
  console.log(items)
const navigate = useNavigate()
const simplifiedOrders = items.map(order => ({
  food_name: order.food_name,
  quantity: order.quantity,
  price: order.price 
}));
const foodOrders = {simplifiedOrders,grandTotal}
console.log(foodOrders)
console.log(simplifiedOrders)
const handleOrder = async () => {
  try {
    const orderData = {
       user: activeUser.id,
       food_items:foodOrders,
      
    };
   console.log(orderData)
    const res = await api.post(orderApi,orderData);
    // Handle the response from the backend as needed
  } catch (error) {
    // Handle any errors (e.g., network issues, server errors)
  }
};

const onPayment = async () => {
setPaymentLoading(true)
notify()
 try {
  const response =await api.post(route,value)
  console.log(response)
  if(response.status === 200){
    const responseData = await api.post(confirmRoute)
    console.log(responseData.data)
  }
 } catch (error) {
  console.log(error)
 }finally{

  setPaymentLoading(false)
  success()
 }
}
const notify = () => toast(<PaymentLoader/>, {
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  color: 'black',
  transition:Bounce,
});
const success =() => toast.success('Enter Pin to finish payment!', {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
  });
  useEffect(() => {
    if (!isAuthicanted) {
      navigate('/login');
    }
     // Mark loading as complete
  }, [isAuthicanted, navigate]);
  
  return (
    <section className='home justify-center items-center text-center h-[100vh]   max-w-[360px]   overflow-hidden min-h-[50px]   mx-auto  no-scrollbar  sm:max-w-[600px]  md:max-w-[720px] lg:max-w-[1024px]'>   
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    <Header
    text={'Payment Method'}
    component={'payment'}
    />
     <div className='text-start mt-9 '>
        <span className='text-[15px] font-semibold tracking-wide'>Choose a Payment method</span>
        <div className='w-[80%] h-[50px] rounded-[10px] mx-auto mt-3 bg-[#FFF8EF] flex items-center gap-4 '><TbCash size={22} color='#A9411D' className='ml-3' /> <span className='text-[15px]'>Cash Payment</span> </div>
        <div className='w-[80%] h-[50px] rounded-[10px] mx-auto mt-3 bg-[#FFF8EF] flex items-center gap-4'><img src="/transfer.svg" alt="transfer" className='ml-3' /> <span className='text-[15px]'>M~pesa {PhoneNumber}</span></div>
        <div className='w-[80%] h-[50px] rounded-[10px] mx-auto mt-3 bg-[#FFF8EF] flex items-center gap-4'><BsFillCreditCardFill size={22} color='#A9411D ' className='ml-3' /><span className='text-[15px]'>Credit/Debit Card</span></div>
     </div>

 
    <div className='mt-[10%] max-[376px]:mt-[20%] space-y-1 w-[80%] bg-[#FFF8EF] rounded-[20px] align-middle mx-auto ' >
            <div className='flex justify-between content-center items-center  m-4 pt-3'>
                <span className='font-semibold text-[13px] text-[#968B7B]'>Sub total</span>
                <span className='text-[#A9411D] font-semibold text-[15px]'>Ksh {totalPrice}</span>
            </div>
            <div className='flex justify-between m-4'>
                <span className='font-semibold text-[13px] text-[#968B7B]'>Tax & Fees</span>
                <span className='text-[#A9411D] font-semibold text-[15px]'>nill</span>
            </div>
            <div className='flex justify-between m-4'>
                <span className='font-semibold text-[13px] text-[#968B7B]'>Delivery Fees</span>
                <span className='text-[#A9411D] font-semibold text-[15px]'>Ksh{delivery}</span>
            </div>
            <span className='mx-w-[250px]'>-----------------------------------</span>
            <div className='flex justify-between pb-2 m-4'>
                <span className='font-bold text-[15px] text-[black]'> Total Price</span>
                <span className='text-[black] font-bold text-[16px]'>Ksh{grandTotal}</span>
            </div>
            
    </div>
    <div className='mt-4'>
    <Button variant="outline" className='checkout-btn w-[300px] h-[60px] hover:brightness-150 hover:text-white text-white rounded-[30px]' onClick={()=>{onPayment();handleOrder();}} >{paymentLoading ? <ClipLoader loading={paymentLoading}/> : 'Submit'}</Button>
                <Link to={'/checkout'}></Link>
           
            </div>
    </section>
    
  )
}

export default Payments