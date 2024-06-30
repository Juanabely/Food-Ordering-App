import React, { useEffect, useState } from 'react';
import TablesData from '@/Components-Dish-Dash/TablesData';
import api from '@/lib/api';

const MenuAdmin = () => {
  const [food, setFood] = useState([]);
  
  useEffect(() => {
    const route = 'api/user/foodlist/';
    
    const getData = async () => {
      try {
        const response = await api.get(route);
        setFood(response.data);
      } catch (error) {
        // Handle the error (e.g., show an error message)
      }
    };
    
    getData();
  }, []); // Empty dependency array ensures this effect runs only once
  
  return (
    <TablesData
      tablescaption={'List of Food Currently available'}
      tableHead1={'Food Name'}
      tableHead2={'Orders'}
      tableHead3={'Price'}
      data={food}
    />
  );
};

export default MenuAdmin;
