import React from 'react'
import logo from '../logo.png'
import {NavLink} from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux/es/exports';

const Navbar = () => {
  const {items} = useSelector((state) => state.CartItem) ;

  return (
    <div className="flex justify-between items-center max-w-[72rem] mx-auto h-20 "> 
      <NavLink to="/" className="ml-5">
        <img src={logo} alt="logo" className="h-14"/>
      </NavLink>

      <div className="flex items-center text-white gap-x-6 mr-5">
        <NavLink to="/" className="transition duration-300 ease-in hover:text-green-400">
          Home
        </NavLink>
        
        <NavLink to="/cart" className="text-2xl text-white relative">
          <FaShoppingCart className="transition duration-300 ease-in hover:text-green-400"/>
          {
            items.length > 0 &&
            <div className="absolute -top-2 -right-2 bg-green-600 text-xs animate-bounce rounded-full h-5 w-5 flex items-center justify-center">
              <p>{items.length}</p>
            </div>
          }
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
