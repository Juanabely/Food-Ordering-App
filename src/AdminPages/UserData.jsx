import TablesData from '@/Components-Dish-Dash/TablesData'
import React from 'react'

function UserData() {
  return (
    <section>
      <div className='flex gap-4'>
        <div className='flex-col flex items-center bg-gray-700 h-[400px] w-[600px]'>
          <span className='text-[16px] font-semibold'>Most ordered food</span>
          <TablesData/>
        </div>
      </div>
    </section>
  )
}

export default UserData