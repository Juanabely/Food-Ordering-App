import React, { useContext, useEffect } from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { LuSettings2 } from "react-icons/lu";
import CardSlider from './CardSlider';
import Nav from './Nav';
import { AuthContext } from '@/lib/context/AuthProvider';
import { Link, Navigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DropDown from './DropDown';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);

const Home = () => {
const {isAuthicanted,activeUser,searchQuery,setSearchQuery,setCartItems,cartItems,data,setData,addCartItem,setLoading,loading} = useContext(AuthContext)
console.log(isAuthicanted)
console.log(data.length)

const email = activeUser.email
  return (
    isAuthicanted ? <>
    <section className='home justify-center items-center text-center h-[100vh]   max-w-[360px]   overflow-hidden min-h-[50px]   mx-auto  no-scrollbar  sm:max-w-[600px]  md:max-w-[720px] lg:max-w-[1024px] my-auto px-1'>
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
      <div className="header flex gap-4 mt-2 items-center w-full justify-between h-[6%]">
        <div className='bg-slate-100 relative text-center rounded-full w-[50px] h-[50px]'>
          <span className='font-bold text-4xl  absolute left-3 top-1'>{
            email.charAt(0).toUpperCase() 
            }</span>
          </div>
          <div>
          <p className='font-sans text-[20px] font-semibold'>Hello,{activeUser.username }</p>
          <p className='font-normal text-[10px]'>Kenya,{activeUser.location}</p>
         </div>
         <div className='relative ml-[1rem]'>
        <img src="/Notification.svg" alt="Notification" className='h-[50px] w-[50px]'/>
        <img src="/Bell.svg" alt="Bell"  className='absolute top-3 left-3'/>
      </div>
      </div>
       
       <div className="content mt-2 flex-col flex justify-center items-center h-[15%]">
        <div className="image-content relative ">

        <img src="/Rectangle.png" alt="rectangle" className='max-[330px]:w-[17rem] max-[375px]:ml-0 max-[361px]:w-[21rem] w-[100%] md:h-[140px] lg:h-[170px] lg:w-[600px] mx-auto mr-9 ' />

        <p className='absolute top-1 left-4 text-white max-w-40 font-semibold md:text-xl md:max-w-[250px]' >Dish and Dash <br /> <span className='text-[90%]'>"Delicious Delivered in a Dash!”</span> 😊</p> 

        <img src="Leave.svg" alt="Leave" className='absolute top-[-60%] left-[50%] right-0 w-[75%] md:w-[50%] ' />

        <img src="image41.svg" alt="Leave" className='absolute top-[-0px] right-[20%] z-10 w-[28%] md:w-[20%] md:right-[10%]' />

        <img src="image42.svg" alt="Leave" className='absolute top-[19%] right-[0%] z-0 w-[28%] md:w-[20%]'/>
       
        </div>
            
       </div>
       <div className="search mt-2 flex justify-between md:px-10  items-center w-full  h-[10%]">
                  <div className=''>
                    <Space direction="vertical ">
                  <Search
              
                  placeholder="Find what you want..."
                  value={searchQuery}
                  onChange={(e)=>setSearchQuery(e.target.value)}
                  allowClear
                  onSearch={onSearch}
                  size='large'
                  // inputPrefixCls='right'
                  prefix={<AudioOutlined/>}
                  style={{
                    width: 300,
                    
                  }}
                />    
                  </Space></div>

                  <div className='setting w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center z-50'>
                    <DropDown
                    trigger={<LuSettings2 size={26} color='white'/>}
                    label={'Search Settings'}
                    dropDowns={
                      <>
                      <DropdownMenuItem>
                        Sort by Name
                      </DropdownMenuItem>
                      </>
                    }
                    
                    />

                  </div>
            </div>
       <div className="overflow-x-scroll no-scrollbar h-[100%]">

      <div className="cards-pop-container no-scrollbar">
        <div className="words flex justify-between items-center">
          <p className='font-semibold text-[20px]'>Popular items...</p>
          <p className='text-[13px]'><Link to={'/shopping'} className='hover:text-yellow-600'>See more</Link></p>
        </div>
        <div className='cards h-[full]'>
          <CardSlider 
          searchQuery={searchQuery}
          setCartItems={setCartItems}
          cartItems={cartItems}
          data={data}
          setData={setData}
          addCartItem={addCartItem}
          setLoading={setLoading}
          loading={loading}
          />
        </div>
    </div>

    <div className="cards-rec-container h-full " >
        <div className="words flex justify-between items-center">
          <p className='font-semibold text-[20px]'>Recommended items...</p>
          <p className='text-[13px]'><Link to={'/shopping'} className='hover:text-yellow-600'>See more</Link></p>
        </div>
        <div className='cards'>
          <CardSlider
          searchQuery={searchQuery}
          setCartItems={setCartItems}
          cartItems={cartItems}
          data={data}
          setData={setData}
          addCartItem={addCartItem}
          setLoading={setLoading}
          loading={loading}
          />
        </div>
      </div>
</div>

      
<Nav
cartItems={cartItems}
setLoading={setLoading}
/>
      
    </section>
    </> : <Navigate to={'/login'} replace/>
  )
}

export default Home