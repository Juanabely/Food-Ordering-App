import React from 'react'
import { BarLoader } from 'react-spinners'

const LoadingScreen = ({loading}) => {
  return (
    <div className='h-[100vh] w-full'>
       <div className='relative w-full h-full'>
         <BarLoader color='#36d7b7' height={5} width={600} loading={loading} className='absolute z-10 top-[55%] left-[30%]'/>
          <img src='/DishDash.svg' alt='DishDash' className='h-[100vh] w-full'/>
       </div>
    </div>
  )
}

export default LoadingScreen 