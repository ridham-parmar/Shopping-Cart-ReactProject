import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import CartPage from './pages/CartPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-slate-900 w-full fixed top-0">
        <Navbar/> 
      </div>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </div>
  )
}

export default App