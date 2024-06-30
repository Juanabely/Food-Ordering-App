
import LoadingScreen from '@/Components-Dish-Dash/LoadingScreen';
import React, { createContext,  useEffect,  useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {


const [isAuthicanted, setIsAuthicanted] = useState(false);
const [searchQuery,setSearchQuery]=useState('')
const [activeUser,setActiveUser] = useState({})
const [cartItems,setCartItems] = useState([])
const [items, setItems] = useState([]) 
console.log(items)
const [data,setData] =useState([])
const [totalPrice, setTotalPrice] = useState(cartItems.length === 0 ? 0 :cartItems.reduce((accumulator,currentItem)=>accumulator + currentItem.price,0))
const [loading,setLoading]=useState(false)

console.log(data.length)

const addCartItem = (card) => {
  const notify = () => toast('⚠️ Food already in Cart!', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      color: 'black'
  });

  const isAlreadyInCart = cartItems.some((item) => item.id === card.id);

  if (isAlreadyInCart) {
      notify();
  } else {
      setCartItems((prev) => {
          const updatedCart = [...prev, card];
          setTotalPrice(updatedCart.reduce((accumulator, currentItem) => accumulator + currentItem.price, 0));
          return updatedCart;
      });
  }
};


return (
    <AuthContext.Provider value={
        {
            isAuthicanted,
            setIsAuthicanted,
            activeUser,
            setActiveUser,
            setSearchQuery,
            searchQuery,
            cartItems,
            setCartItems,
            data,
            setData,
            addCartItem,
            totalPrice,
            setTotalPrice,
            loading,
            setLoading,
            items,
            setItems
        }
    }>
       {loading ? <LoadingScreen
       loading={loading}
       /> : children}
       
       
    </AuthContext.Provider>
);
};