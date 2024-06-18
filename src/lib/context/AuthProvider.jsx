
import React, { createContext,  useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {


const [isAuthicanted, setIsAuthicanted] = useState(false);
const [searchQuery,setSearchQuery]=useState('')
const [activeUser,setActiveUser] = useState({})
const [cartItems,setCartItems] = useState([])

console.log(isAuthicanted)
console.log(searchQuery)
console.log(cartItems)

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
        }
    }>
       {children}
       
       
    </AuthContext.Provider>
);
};