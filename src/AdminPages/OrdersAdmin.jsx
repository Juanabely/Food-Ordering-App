import TablesOrders from '@/Components-Dish-Dash/TableOrders'
import React, { useState } from 'react'
import { IoCheckbox } from 'react-icons/io5'

const OrdersAdmin = () => {
  const data = [
    {
        "user": null,
        "food_items": [
            {
                "food_name": "Cheeseburger",
                "food_price": 15.99,
                "food_quantity": 1
            },
            {
                "food_name": "Pizza",
                "food_price": 20.0,
                "food_quantity": 2
            }
        ],
        "user_username": "Dev",
        "user_location": "Nairobi",
        "user_phone": "0727526707"
    },
    {
        "user": null,
        "food_items": [
            {
                "food_name": "Cheeseburger",
                "food_price": 15.99,
                "food_quantity": 1
            },
            {
                "food_name": "Pizza",
                "food_price": 20.0,
                "food_quantity": 2
            },
            {
                "total_price": 1000
            }
        ],
        "user_username": "Dev",
        "user_location": "Nairobi",
        "user_phone": "0727526707"
    },
    {
        "user": null,
        "food_items": [
            {
                "food_name": "Cheeseburger",
                "food_price": 15.99,
                "food_quantity": 1
            },
            {
                "food_name": "Pizza",
                "food_price": 20.0,
                "food_quantity": 2
            },
            {
                "total_price": 1000
            }
        ],
        "user_username": "Dev",
        "user_location": "Nairobi",
        "user_phone": "0727526707"
    },
    {
        "user": null,
        "food_items": [
            {
                "food_name": "Cheeseburger",
                "food_price": 15.99,
                "food_quantity": 1
            },
            {
                "food_name": "Pizza",
                "food_price": 20.0,
                "food_quantity": 2
            },
            {
                "total_price": 1000
            }
        ],
        "user_username": "Dev",
        "user_location": "Nairobi",
        "user_phone": "0727526707"
    },
    {
        "user": null,
        "food_items": [
            {
                "food_name": "Cheeseburger",
                "food_price": 15.99,
                "food_quantity": 1
            },
            {
                "food_name": "Pizza",
                "food_price": 20.0,
                "food_quantity": 2
            },
            {
                "total_price": 1000
            }
        ],
        "user_username": "Dev",
        "user_location": "Nairobi",
        "user_phone": "0727526707"
    },
    {
        "user": null,
        "food_items": [
            {
                "food_name": "Cheeseburger",
                "food_price": 15.99,
                "food_quantity": 1
            },
            {
                "food_name": "Pizza",
                "food_price": 20.0,
                "food_quantity": 2
            },
            {
                "total_price": 1000
            }
        ],
        "user_username": "Dev",
        "user_location": "Nairobi",
        "user_phone": "0727526707"
    },
    {
        "user": 1,
        "food_items": [
            {
                "food_name": "Cheeseburger",
                "food_price": 15.99,
                "food_quantity": 1
            },
            {
                "food_name": "Pizza",
                "food_price": 20.0,
                "food_quantity": 2
            },
            {
                "total_price": 1000
            }
        ],
        "user_username": "Abel",
        "user_location": "Kapsabet",
        "user_phone": "07272526707"
    },
    {
        "user": 9,
        "food_items": [
            {
                "price": 250,
                "food_id": 2,
                "quantity": 1
            },
            {
                "price": 50,
                "food_id": 3,
                "quantity": 1
            }
        ],
        "user_username": "Dev",
        "user_location": "Nairobi",
        "user_phone": "0727526707"
    },
    {
        "user": 9,
        "food_items": [
            [
                {
                    "price": 250,
                    "quantity": 1,
                    "food_name": "Rice & Eggs"
                },
                {
                    "price": 50,
                    "quantity": 1,
                    "food_name": "Rice & Shrimp"
                }
            ],
            {
                "totalPrice": 400
            }
        ],
        "user_username": "Dev",
        "user_location": "Nairobi",
        "user_phone": "0727526707"
    }
]
  const [paid, setPaid] = useState({})
  
  return (
    <section className='flex justify-around flex-wrap px-10'>
      {
        data.map((item,index)=>(
          <div className='bg-gray-700 w-[600px] h-[400px] flex flex-col justify-between items-center rounded-md mt-10 p-1' key={index}>
       <span className='font-semibold'> Order by ~ {item.user_username} from -{item.user_location} n0-{item.user_phone}</span>
       <TablesOrders
       tablescaption={'Order'}
       tableHead1={'food name'}
       tableHead2={'Quantity'}
       tableHead3={'price'}
       data = {item.food_items}
       total={item.food_items.total_price}
       />
       <button className='bg-green-500 p-2 w-[80px] rounded-lg' onClick={()=>{setPaid((prev)=>({
        ...prev,[index]:!prev[index]
       }))}}>
        {paid[index] ? <div className='flex gap-1 justify-center items-center'><span>Paid</span><IoCheckbox/> </div>: 'Paid' }
       </button>
      </div>
        ))
      }
    </section>
  )
}

export default OrdersAdmin