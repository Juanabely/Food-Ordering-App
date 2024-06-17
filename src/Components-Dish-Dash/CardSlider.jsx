import React from 'react'
import {Swiper,SwiperSlide, useSwiper} from 'swiper/react'

import 'swiper/css'
import data from '@/lib/slider.json'
import { sliderSettings } from '@/lib/common'
import { AiFillCaretLeft ,AiFillCaretRight} from "react-icons/ai";

function CardSlider() {
  return (

    <div className="paddings innerWidth r-container no-scrollbar">
        <Swiper {...sliderSettings}>
            <SliderButonns/>
            {
                data.map((card,i)=>(
                    <SwiperSlide key={i}>
                      <div className="flexColStart content-center r-card bg-[#A9411D] w-[11rem] h-[12rem] ">
                        <img src={card.image} alt="home" className='absolute top-[-15%] right-[14px] w-[70%] h-[70%] z-20 md:right-[37%]'/>
                        <br />
                        <br />
                        <br />
                        <br />
                        
                        <span className="text-white  ">{card.name}</span>
                       
                        <span className=' r-price'>
                            <span style={{
                                color:'orange'
                            }}> <br /> $</span>
                            <span className='text-[15px] text-white font-semibold'>{card.price}</span>
                        </span>
                        <img src="/Buy.svg" alt="Buy"  className='absolute w-[50px] h-[50px] right-[15px] md:right-[36%]'/>
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
