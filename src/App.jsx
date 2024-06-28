import './App.css'
import Home from './Components-Dish-Dash/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shopping from './Components-Dish-Dash/Shopping'
import ReachOut from './Components-Dish-Dash/ReachOut'
import MyCart from './Components-Dish-Dash/MyCart'
import Profile from './Components-Dish-Dash/Profile'
import Payments from './Components-Dish-Dash/Payments'
import  Login  from './Components-Dish-Dash/Login'
import Register from './Components-Dish-Dash/Register'
import { AuthProvider } from './lib/context/AuthProvider'
import AdminDashboard from './Components-Dish-Dash/AdminDashboard'

function App() {
  return (
    <>
  
  <AuthProvider>
    <BrowserRouter>
   
        <Routes>    
          <Route path="/" element={<Home/>}/>
          <Route path="/shopping" element={<Shopping />}/>
          <Route path="/reachOut" element={<ReachOut/>}/>
          <Route path='/myCart' element={<MyCart/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/checkout' element={<Payments/>}/>
          <Route path='/admin' element={<AdminDashboard/>}/>
        </Routes> 
      
       <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter> 
   </AuthProvider>
    
    </>
  )
}

export default App
