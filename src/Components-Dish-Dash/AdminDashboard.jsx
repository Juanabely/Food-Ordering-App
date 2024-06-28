import React, { useEffect, useState } from 'react'
import './admin.css'
import PieChart from './PieChart';
import { FaChartPie, FaUserCheck } from 'react-icons/fa';
import CountUp from './CountUp';
import CountUpComponent from './CountUp';
import ProgressBarComponent from './ProgressBarComponent';
import LineBar from './LineBar';
import { AiOutlineRise } from 'react-icons/ai';
import CircularProgressBar from './CircularProgressBar';
import MenuAdmin from '@/AdminPages/MenuAdmin';
import FoodForm from '@/AdminPages/AddFoodform';
import OrdersAdmin from '@/AdminPages/OrdersAdmin';
import { RiBikeFill, RiEBikeFill } from 'react-icons/ri';
import Deliveries from '@/AdminPages/Deliveries';
import UserData from '@/AdminPages/UserData';
import Purchases from '@/AdminPages/Purchases';
import Settings from '@/AdminPages/Settings';

function AdminDashboard() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [display, setDisplay] = useState('Home')

  // Function to handle menu item click
  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  // State to toggle the visibility of the menu links
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenuVisibility = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  // Effect to apply the dark theme if stored in local storage
  // useEffect(() => {
  //   const theme = localStorage.getItem('theme');
  //   if (theme === 'dark') {
  //     document.body.classNameList.add('dark-theme');
  //   }
  // }, []);
  const switchTheme = () => {
    const currentTheme = document.body.className.includes('dark-theme')? 'light' : 'dark';
    document.body.className = currentTheme;
    localStorage.setItem('theme', currentTheme);
  };
  return (
    <body className="light-theme dark-theme">
    <header className="dark-theme">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="header-inner d-flex justify-content-between align-items-center">
            <a className="navbar-brand flex-shrink-0" href="#"><img src="./Logo.svg" alt="logo-image" className="img-fluid"/>
              Dish~Dash :Admin</a>
            <div className="header-content d-flex align-items-center justify-content-end">
              <form className="d-flex justify-content-end align-items-center">
                <div className="search-icon">
                  <i className="fa fa-search" aria-hidden="true"></i>
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                </div>
                <label className="switch flex-shrink-0 mb-0">
                  <input id="checkbox" type="checkbox"/>
                  <span className="slider round"></span>
                </label>
              </form>
              <a herf="#" className="profile"><img src="https://yudiz.com/codepen/nft-store/user-pic1.svg" alt="user-image"/>Johny B</a>
              <a href="#" className="notification"><i className="fa fa-bell" aria-hidden="true"></i></a>
  
            </div>
          </div>
          <button className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
    <div className="nft-store">
      <div className="container-fluid">
        <div className="nft-store-inner d-flex">
          <div className="menu-links">
            <ul className=''>
              <li className={`nav-item ${activeMenuItem === 0 ? 'active' : ''}`} onClick={()=>{
                setDisplay('Home');
                setActiveMenuItem(0);
              }} >
                <a  className="d-flex align-items-center nav-link"><i className="fa fa-home active:bg-yellow-500" aria-hidden="true"></i>
                  <span>Home</span></a>
              </li>

              <li className={`nav-item  ${activeMenuItem === 1 ? 'active' : ''}`} onClick={()=>{
                setDisplay('Menu');
                setActiveMenuItem(1);

              }}>
                <a  className="d-flex align-items-center nav-link"><i className="fa fa-briefcase" aria-hidden="true"></i>
                  <span>Menu</span></a>
              </li>

              <li className={`nav-item ${activeMenuItem === 2 ? 'active' : ''}`} onClick={()=>{
                setDisplay('FoodForm');
                setActiveMenuItem(2);
              }}>
                <a  className="d-flex align-items-center nav-link"><i className="fa fa-heart-o" aria-hidden="true"></i>
                  <span>Add Food</span></a>
              </li>

              <li className={`nav-item ${activeMenuItem === 3 ? 'active' : ''}`} onClick={()=>{
                setDisplay('Orders');
                setActiveMenuItem(3);
              }}>
                <a  className="d-flex align-items-center nav-link"><i className="fa fa-square-o" aria-hidden="true"></i>
                  <span>Orders</span></a>
              </li>

              <li className={`nav-item ${activeMenuItem === 4 ? 'active' : ''}`} onClick={()=>{
                setDisplay('Deliveries');
                setActiveMenuItem(4);
              }}>
                <a  className="d-flex align-items-center nav-link"> <i><RiEBikeFill size={26} className='fa fa-square-o '/></i>
                  <span>Deliveries</span></a>
              </li>

              <li className={`nav-item ${activeMenuItem === 5 ? 'active' : ''}`} onClick={()=>{
                setDisplay('UserData');
                setActiveMenuItem(5);
              }}>
                <a className="d-flex align-items-center nav-link"><i className="fa fa-star" aria-hidden="true"></i>
                  <span>User Data</span></a>
              </li>

              <li className={`nav-item ${activeMenuItem === 6 ? 'active' : ''}`} onClick={()=>{
                setDisplay('Purchases');
                setActiveMenuItem(6);
              }}>
                <a className="d-flex align-items-center nav-link"><i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  <span>Purchased</span></a>
              </li>

              <li className={`nav-item ${activeMenuItem === 7 ? 'active' : ''}`} onClick={()=>{
                setDisplay('Settings');
                setActiveMenuItem(7);
              }}>
                <a className="d-flex align-items-center nav-link"><i className="fa fa-cog" aria-hidden="true"></i>
                  <span>Settings</span></a>
              </li>

            </ul>
          </div>

           {
            display === 'Home' && 
            <div className="nft-store-content">
            <div className="nft-up-content">
              <div className="row">
                <div className="col-md-8">
                  <div className="fire-bubble-art d-flex justify-content-between  align-items-center relative">
                    <img src="https://yudiz.com/codepen/nft-store/image-1.svg" alt="fire-bubble-image" className="img-fluid fire-image fire-width blur-3xl"/>
                    <div className='flex gap-2 absolute top-10'>

                      <div className='h-[250px] w-[250px] bg-gray-700 rounded-md text-center flex flex-column gap-2 justify-center items-center'>
                        <span className='text-white text-[18px] font-semibold mt-2 '>Earnings</span>
                        <span className='text-[25px] font-bold'><span>+</span> KSh <CountUpComponent start={5000} end={5500}/></span>
                        <div><CircularProgressBar percent={65}/></div>
                        <h5 className='text-gray-400 text-[15px]'>Earnings as per today</h5>
                      </div>

                      <div className='h-[250px] w-[250px] bg-gray-700 rounded-md text-center flex flex-column gap-2 justify-center items-center'>
                        <span className='text-white text-[18px] font-semibold mt-2 '>Growth</span>
                        <span className='text-[25px] font-bold'><span>+</span> KSh <CountUpComponent start={5000} end={5500}/></span>
                        <div><CircularProgressBar percent={75}/></div>
                        <h5 className='text-gray-400 text-[15px]'>Earnings as per today</h5>
                      </div> 

                    </div>

                    <div className='h-[200px] w-[510px] bg-gray-700 rounded-md text-center flex flex-column gap-9 justify-center items-center absolute top-[60%]'>
                        <span className='text-white text-[18px] font-semibold mt-0 '>Institution data</span>
                        <div className='flex justify-between w-full'>
                          <span className='text-start'>Average Income</span>
                          <div className='flex'>
                            <div className='bg-green-500 rounded-md w-[95px] h-[25px] flex justify-center items-center gap-1'><span>average</span> <div className='h-3 w-3 rounded-full bg-white'/></div>  
                            
                            </div><span className='px-1 font-bold text-green-400'>30,000</span>
                        </div> 

                        <div className='flex justify-between w-full'>
                          <span className='text-start'>Losses Incurred </span>
                          <div className='flex'>
                            <div className='bg-red-500 rounded-md w-[95px] h-[25px] flex justify-center items-center gap-1'><span>average</span> <div className='h-3 w-3 rounded-full bg-white'/></div>  
                            
                            </div><span className='px-1 font-bold text-red-400'>30,000</span>
                        </div>
                        
                        <h5 className='text-gray-400 text-[15px]'>Monthly statistics</h5>
                      </div>

                    <div className="fire-content fire-width">
                      <h3 className="mb-0">Orders as per Today</h3>
                     <PieChart/>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 flex-1 justify-center items-center relative">
                  <h3>Sales as per latest data</h3>
                  <figure className="paint-image  bg-[url('https://yudiz.com/codepen/nft-store/image-2.svg')] blur-lg  bg-no-repeat bg-center bg-cover backdrop-blur-lg ">
                  </figure>
                  <div className='absolute top-10 left-0 z-50 text-white bg-transparent w-[500px] h-[900px]'><LineBar/> 
                  <span className='flex gap-2'><div className='w-[15px] h-[15px] bg-green-500 rounded-full justify-center items-center'/> Sales rise <AiOutlineRise color='green' size={32}/></span>
                  
                </div>
                </div>
              </div>
            </div>
            <div className="trending">
              <div className="trending-title">
                <div className="row justify-content-between align-items-center">
                  <div className="col-6">
                    <h2>Current stats </h2>
                  </div>
                  <div className="col-6 text-right">
                    <a href="#" className="theme-btn"> View More </a>
                  </div>
                </div>
              </div>
              <div className="trending-grid">
                <div className="row">

                  <div className="col-md-4">
                    <div className="trending-content">
                      <img src="https://th.bing.com/th/id/OIG1.XXu8.InhjUqS77L7twCA?pid=ImgGn" alt="card-images" className="img-fluid object-cover h-[310px] w-full"/>
                      <div className="trending-desc">
                        <h4 className="user-title flex gap-1 items-center"><div className='text-white bg-green-500 w-[55px] h-[20px] rounded-xl px-1 flex gap-2'>food </div>  Food tallies <FaChartPie/></h4>
                        <h3 className="user-position flex gap-2"><span className='text-green-300 text-[30px]'>+</span><CountUpComponent start={100} end={300}/></h3>
                        <div className="bid d-flex justify-content-between align-items-center">
                          <div>
                            <h5>current food</h5>
                            <ProgressBarComponent percent={80}/>
                          </div>
                          <div>
                            <h5>Target for orders</h5>
                            <h3 className="flex gap-2"><span className='text-green-300 text-[30px]'>+</span><CountUpComponent start={100} end={300}/></h3>
                          </div>
                        </div>
                        <img src="https://th.bing.com/th/id/OIG1.XXu8.InhjUqS77L7twCA?pid=ImgGn" alt="img-fluid" className="user-image"/>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="trending-content">
                      <img src="https://th.bing.com/th/id/OIG1.WGfNLOhIekAofP_fPgin?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="card-images" className="img-fluid object-cover h-[310px] w-full"/>
                      <div className="trending-desc">
                        <h4 className="user-title flex gap-2"> <div className='text-white bg-green-500 w-[55px] h-[20px] rounded-xl px-1 flex gap-2'>User</div> User details <FaUserCheck/></h4>
                        <h3 className="user-position flex gap-2"><span className='text-green-300 text-[30px]'>+</span><CountUpComponent start={500} end={1000}/></h3>
                        <div className="bid d-flex justify-content-between align-items-center">
                          <div>
                            <h5>current Users</h5>
                            <span><ProgressBarComponent percent={50}/></span>
                          </div>
                          <div>
                            <h5>Target</h5>
                            <span> <span className='text-green-700'>+</span> <CountUp start={600} end={2000}/> </span>
                          </div>
                        </div>
                        <img src="https://th.bing.com/th/id/OIG1.WGfNLOhIekAofP_fPgin?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="img-fluid" className="user-image"/>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="trending-content">
                      <img src="https://yudiz.com/codepen/nft-store/card-3.svg" alt="card-images" className="img-fluid"/>
                      <div className="trending-desc">
                        <h4 className="user-title">Jayden Daniel</h4>
                        <h3 className="user-position">Inko's Art</h3>
                        <div className="bid d-flex justify-content-between align-items-center">
                          <div>
                            <h5>current Bid</h5>
                            <span>0.70 ETH</span>
                          </div>
                          <div>
                            <h5>Auctin Ending in</h5>
                            <span>05h:25m:46s</span>
                          </div>
                        </div>
                        <img src="https://yudiz.com/codepen/nft-store/user-pic5.svg" alt="img-fluid" className="user-image"/>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          
           }

          {
            display === 'Menu' && <MenuAdmin/>
          }

          {
            display === 'FoodForm' && <><div className='nft-store-content bg-[url(https://yudiz.com/codepen/nft-store/card-3.svg)] bg-no-repeat bg-cover blur-2xl relative '></div> <div className='absolute left-[20%] overflow-hidden'><FoodForm/></div></>
          }

           {
            display === 'Orders' && <OrdersAdmin/>
          }

           {
            display === 'Deliveries' && <Deliveries/>
          }
           {
            display === 'UserData' && <UserData/>
          }
           {
            display === 'Purchases' && <Purchases/>
          }
           {
            display === 'Settings' && <Settings/>
          }
          
        </div>
      </div>
    </div>
    
  </body>
  )
}

export default AdminDashboard