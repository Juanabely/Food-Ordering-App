import React, { useContext, useEffect } from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LuSettings2 } from "react-icons/lu";
import CardShopping from './CardShopping';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '@/lib/context/AuthProvider';
import { FaShoppingBag } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shopping = () => {
  const {isAuthicanted,data,cartItems,addCartItem} = useContext(AuthContext)
const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthicanted) {
      navigate('/login');
    }
     // Mark loading as complete
  }, [isAuthicanted, navigate]);
  return (
    <section className='home justify-center items-center text-center  h-100vh  max-w-[360px]  mx-auto min-[700px]:max-w-[600px] min-[1200px]:max-w-[900px] px-1'>
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

    <div className="header flex justify-between mt-5 items-center   w-full ">


     <div className="circle h-[40px] flex items-center justify-center w-[40px] rounded-full bg-[#FFF8EF] hover:bg-[#F8BF40]">
      <Link to={'/'}><IoIosArrowRoundBack size={30} /></Link>
      
      </div>
     
     <span className='text-[20px] font-bold '>Near me <br /> <span className='text-[15px] font-semibold'>Nandi,kapsabet</span></span>

     <div className="circle h-[40px] flex items-center justify-center w-[40px] rounded-full bg-[#FFF8EF] relative">
      
     <Link to={'/mycart'}><FaShoppingBag color='black' size={35} className='hover:brightness-75' />
          <div className={`bg-white h-[15px] w-[15px] rounded-[50%] absolute top-0 -right-2 bottom-0 ${cartItems.length === 0 ? 'hidden' : 'flex-1'} flex items-center justify-center font-bold text-yellow-700`}>{cartItems.length}</div>
          </Link>
      
      </div>

    </div>

    <div className="tabs flex mt-9  w-full">
    <div className="setting w-[10%]">
    <div className='setting w-[40px] h-[40px] rounded-full bg-[#FFF8EF] flex items-center mx-auto justify-center'><LuSettings2 size={14} className='hover:col-blue' /></div>
    </div>
    <div className=""> 
        <Tabs defaultValue="recommended" className='w-[360px] min-[700px]:w-[800px] ml-[-26px] '>
          <TabsList className='gap-[0.5rem] bg-[#EBE5DD] rounded-[30px] '  >
            <TabsTrigger value="promo" className='rounded-[20px] bg-[#FFF8EF] active:!bg-black hover:bg-black hover:text-white' >Promo</TabsTrigger>
            <TabsTrigger value="recommended" className='rounded-[20px] bg-[#FFF8EF] active:!bg-black hover:bg-black hover:text-white'>Recommended</TabsTrigger>
            <TabsTrigger value="ratings" className='active:!bg-black bg-[#FFF8EF] rounded-[20px] hover:bg-black hover:text-white'>Ratings</TabsTrigger>
          </TabsList>

            <div className=' w-full overflow-y-scroll   no-scrollbar  h-[500px]'> 

            <TabsContent value="promo">
                <br />
              <CardShopping
             data={data}
             cartItems={cartItems}
             addCartItems={addCartItem}
              />
            </TabsContent>

            <TabsContent value="recommended" >
              <br />
              <CardShopping
             data={data}
             cartItems={cartItems}
             addCartItems={addCartItem}
              />
              </TabsContent>

            <TabsContent value="ratings" >
              <br />
            <CardShopping
            data={data}
            cartItems={cartItems}
            addCartItems={addCartItem}
            />
            </TabsContent>
            </div>
              

        </Tabs>
   </div>
   

    </div>

   </section>
  )
}

export default Shopping