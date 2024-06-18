import { jwtDecode } from 'jwt-decode';
import React, { createContext, useEffect, useState } from 'react'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import { Navigate, useNavigate } from 'react-router-dom';
import api from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {


const [isAuthicanted, setIsAuthicanted] = useState(false);
const [searchQuery,setSearchQuery]=useState('')
const [activeUser,setActiveUser] = useState({})

console.log(isAuthicanted)
console.log(searchQuery)

return (
    <AuthContext.Provider value={
        {
            isAuthicanted,
            setIsAuthicanted,
            activeUser,
            setActiveUser,
            setSearchQuery,
            searchQuery,
        }
    }>
       {children}
       
       
    </AuthContext.Provider>
);
};