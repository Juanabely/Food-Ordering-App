import React from 'react'

const CardShopping = ({data,cartItems,addCartItems}) => {
    console.log(data)
  return (
    <>
    <div className='flex flex-wrap gap-2 md:gap-10 justify-center'>
    {data.map((item,i)=>(
        <div className={`content-center relative r-card bg-[#A9411D] w-[10.5rem] h-[12rem] mb-[25px] ${cartItems.some((card)=>card.id === item.id)?'brightness-50':''}`} key={i} onClick={()=>addCartItems(item)}>
                        <img src={item.image_url} alt="home" className='absolute top-[-12%] right-[15%] w-[120px] h-[120px] z-1 rounded-full object-contain '/>
                        <br />
                        <br />
                        <br />
                        <br />
                        
                        <span className="text-white  ">{item.food_name} <br /> <span className='text-[#F8BF40] text-[12px]'>{item.detail} </span> </span>
                        
                       
                        <span className=' r-price'>
                            <span style={{
                                color:'orange'
                            }}> <br /> $</span>
                            <span className='text-[15px] text-white font-semibold'>{item.price}</span>
                        </span>
                        <img src="/Buy.svg" alt="Buy"  className='absolute w-[50px] h-[50px] left-[16%]'/>
                    
                        </div> 
                        
                        
    ))}
    
                       </div>  </>
  )
}

export default CardShopping