import React, { useContext, useEffect, useState } from 'react';
import LoginForm from './Form';
import api from '@/lib/api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/lib/constants';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '@/lib/context/AuthProvider';
import { jwtDecode } from 'jwt-decode';


const Login = () => {
const [values, setValues] = useState()
// const [loading,setLoading]= useState(false)
const route='/api/token/'
const navigate = useNavigate()
const {isAuthicanted,setIsAuthicanted,setActiveUser,loading,setLoading} = useContext(AuthContext)
console.log(isAuthicanted)
const [beforeLoading, setBeforeLoading] = useState(false)


// useEffect(() => {
//   onSubmit()
//   console.log(values)
// }, [values])

  const onSubmit= async(values) => { 
   setBeforeLoading(true)
      
      try {
         const res =  await api.post (route,values)
         localStorage.setItem(ACCESS_TOKEN,res.data.access)
         console.log(res)
         localStorage.setItem(REFRESH_TOKEN,res.data.refresh)
         auth()
         navigate('/')
         
      } catch (error) {
         alert(error)
      }finally{
        
         setBeforeLoading(false)
      }
   }
   const getValues= (values)=> {
      setValues(values);
      console.log(values);
     onSubmit(values)
   }
   useEffect(() => {
      // auth().catch(()=>setIsAuthicanted(false))   
      // console.log(isAuthicanted)
   }, [])
   
  
   const refreshToken = async () => {
    const refreshToken= localStorage.getItem(REFRESH_TOKEN)
    try {
       const res= await api.post("/api/token/refresh/",{refresh: refreshToken});
       if (res.status === 200){
         localStorage.setItem(ACCESS_TOKEN,res.data.access)  
         setIsAuthicanted(true)
       }
       else{
           setIsAuthicanted(false)
       }
    } catch (error) {
       console.log(error)
       alert(error)
       setIsAuthicanted(false)
    }
   }
   const auth = async () =>{
      const token = localStorage.getItem(ACCESS_TOKEN)
      if (!token){
       setIsAuthicanted(false)
       return
      }
      const decoded = jwtDecode(token)
      setActiveUser({
         "email":decoded.email,
         "username":decoded.username,
         "location":decoded.location,
         "phone":decoded.phone
      })
      const tokenExpiration = decoded.exp
      const now = Date.now() / 1000
  
      if(tokenExpiration < now){
       await refreshToken()
      } else{
       setIsAuthicanted(true)
       
      }}
   
   // if (isAuthicanted === null){
   //     return <div>Loading....</div>
   // }
 
   
      return(
         <>
         <LoginForm
         type={'sign-in'}
         name={'Sign In'}
         loading={beforeLoading}
         setValues={getValues}
         />
         
         </>
            )
   
 
};
export default Login;