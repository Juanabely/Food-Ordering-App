import React, { useState } from 'react';
import LoginForm from './Form';
import api from '@/lib/api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/lib/constants';
import { useNavigate } from 'react-router-dom';

 function Register() 
 {
  const [values, setValues] = useState()
  const [loading,setLoading]= useState(false)
  const route='/api/user/register/'
  const navigate = useNavigate()
  
  
  // useEffect(() => {
  //   onSubmit()
  //   console.log(values)
  // }, [values])
  
    const onSubmit= async(values) => {
        console.log(values)  
        setLoading(true)
        try {
           const res =  await api.post (route,values)
           localStorage.setItem(ACCESS_TOKEN,res.data.access)
           localStorage.setItem(REFRESH_TOKEN,res.data.refresh)
           navigate('/')
        } catch (error) {
           alert(error)
        }finally{
           setLoading(false)
        }
     }
     const getValues= (values)=> {
        setValues(values);
        console.log(values);
       onSubmit(values)
     }
   
     
        return(
           <LoginForm
           type={'sign-up'}
           name={'Sign Up'}
           loading={loading}
           setValues={getValues}
           />
              )
     
   
  };

export default Register
//{

//     const onSubmit= () => {

//     }

//   return (
//    <section className="container">
//     <LoginForm
//     name={'Sign Up'}
//     type={'sign-up'}
//     onSubmit={onSubmit}
    

//     />
//    </section>
//   )
// }