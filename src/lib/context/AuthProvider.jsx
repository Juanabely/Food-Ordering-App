import { jwtDecode } from 'jwt-decode';
import React, { createContext, useEffect, useState } from 'react'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import { Navigate, useNavigate } from 'react-router-dom';
import api from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {


const [isAuthicanted, setIsAuthicanted] = useState(false);
const [activeUser,setActiveUser] = useState({})

console.log(isAuthicanted)

return (
    <AuthContext.Provider value={
        {
            isAuthicanted,
            setIsAuthicanted,
            activeUser,
            setActiveUser
        }
    }>
       {children}
       
       
    </AuthContext.Provider>
);
};