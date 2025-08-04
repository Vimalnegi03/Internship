import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signup from './Pages/Signup'
import InternDashboard from './Pages/InternDashboard'
import {Routes,Route} from "react-router-dom"
import Login from './Pages/Login'
import useAuth from '../store/store'
import Navbar from './Pages/Navbar'
import Leaderboard from './Pages/LeaderBoard'
function App() {
  const [count, setCount] = useState(0)
  const {user,getUser}=useAuth()
  useEffect(()=>{
    getUser()
  },[])
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element= {<InternDashboard />} />
      <Route path="/register" element={<Signup/>} /> 
      <Route path='/login' element={<Login/>}/>
      <Route path="/leaderboard" element={<Leaderboard/>} />
     </Routes>
    </>
  )
}

export default App
