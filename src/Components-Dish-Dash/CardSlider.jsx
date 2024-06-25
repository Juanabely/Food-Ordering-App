import {Swiper,SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import { sliderSettings } from '@/lib/common'
import { AiFillCaretLeft ,AiFillCaretRight} from "react-icons/ai";
import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { ClipLoader } from 'react-spinners';



function CardSlider({searchQuery,cartItems,data,setData,addCartItem,setLoading ,loading}) {
    
  // const [imagesLoaded, setLoadedImages] = useState(0)
  const route = 'api/user/foodlist/'
    console.log(searchQuery)
    
    useEffect(() => {
      try {
       
        const getData = async () => {
          const response =  await api.get(route)
       setData(response.data)
        }
        getData()
        
      } catch (error) {
        
      }finally{
      }
    
     
    }, [])
    


    const filteredItems = data.filter(item => {
        const searchQueryLowerCase = searchQuery.toLowerCase();
        return (
            item.food_name.toLowerCase().includes(searchQueryLowerCase)
        )
    })
    
   
     
  return (

    <div className="paddings innerWidth r-container no-scrollbar ">
        <Swiper {...sliderSettings}>
            <SliderButonns/>
            {
                filteredItems.map((card,index)=>(
                  loading ? <p>Loading.....</p> :
                    <SwiperSlide key={card.id} onClick={() => addCartItem(card)} className={
                      cartItems.some((item) => item.id === card.id)?'brightness-50':''
                    } >
                      <div className="flexColStart content-center r-card bg-[#A9411D] w-[11rem] h-[12rem]">
                        <img src={card.image_url} alt="home" className='absolute top-0 right-[14px] w-[100px] h-[100px] rounded-[50%] z-20 md:right-[37%]  object-contain'  />
                        <br />
                        <br />
                        <br />
                        <br />
                        
                        <span className="text-white  ">{card.food_name}</span>
                       
                        <span className=' r-price'>
                            <span style={{
                                color:'orange'
                            }}> <br />Ksh </span>
                            <span className='text-[15px] text-white font-semibold'>{card.price}</span>
                        </span>
                        <img src="/Buy.svg" alt="Buy"  className='absolute w-[50px] h-[50px] right-[15px] md:right-[36%]' />
                        </div>  
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>

  )
}

export default CardSlider
const SliderButonns=()=>{
    const swiper = useSwiper();
    const handleNext=()=>{
        swiper.slideNext()
    }
    const handlePrev =()=>{
        swiper.slidePrev()
    }
    return(
        <div className="flex-1 space-x-1 md:mt-10">
            <button onClick={handlePrev} className='bg-[#A9411D] rounded-[20px] w-[20px] h-[20px] flex-1  item-center align-middle '><AiFillCaretLeft size={21} color='white'/></button>
            <button onClick={handleNext}  className='bg-[#A9411D] rounded-[20px] w-[20px] h-[20px] flex-1  item-center align-middle '><AiFillCaretRight size={21} color='white' /></button>
        </div>
    )
}
