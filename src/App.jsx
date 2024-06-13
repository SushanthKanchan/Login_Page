import React from 'react'
import Login from './Components/Login'
import Register from './Components/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';


// import "./"



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        
      </Routes>
    </BrowserRouter>
    
        

  )
}

